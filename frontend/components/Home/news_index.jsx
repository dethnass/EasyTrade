import React from 'react';
import StockNewsItem from '../stocks/stock_news_item';
import { FadeLoader } from 'react-spinners';
import { css } from 'react-emotion';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


class NewsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.news.length === 0) {
      this.props.fetchNews()
      .then(this.props.handleLoad);
    } else {
      this.props.handleLoad();
    }
  }
  render() {
    const { news } = this.props;
    return (
      <div className='news recent'>
        <h2>Recent News</h2>
        {
          news.hasOwnProperty('0') ? (
            <ul>
              {
                news.filter(el => el.urlToImage).map((newsItem, idx) => <StockNewsItem newsItem={newsItem} key={idx} />)
              }
            </ul>
          ) : (
            <div className='news-loading'>
              <FadeLoader
                className={override}
                sizeUnit={"px"}
                size={5}
                color={'#21ce99'}
                loading={true}
              />
            </div>

          )
        }
      </div>
    );
  }
}

export default NewsIndex;
