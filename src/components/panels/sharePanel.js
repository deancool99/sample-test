import React from 'react';
import ShareModule from 'Components/modules/shareModule';
const styles = {
  pWidth: {
    width: '765px'
  },
};
export default React.createClass({
  render() {
    return (
      <div>
      	<div>
      	  <p>財訊新聞</p>
      	  <p style={styles.pWidth}>
      	     【時報-台北電】 美國聯準會(Fed)兩名女將對於升息看法出現分歧。立場偏向鴿派的Fed理事成員布雷娜德(Lael Brainard)表
      	    示，受海外市場動盪，Fed升息速度將較預期緩慢。不過鷹派大將克里夫蘭聯準銀行總裁梅斯特(Loretta Mester)卻認為美國經
      	    濟穩健，3月會議還是應該考慮升息。
      	  </p>
      	  <p style={styles.pWidth}>
      	    這兩名Fed女性官員今年在聯邦公開市場委員會(FOMC)都擁有投票權。
      	  </p>
		</div>
        <ShareModule/>
      </div>
    );
  }
});
