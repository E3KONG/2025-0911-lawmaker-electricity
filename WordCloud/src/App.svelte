<script>
    import Header from './lib/Header.svelte';
    import Footer from './lib/Footer.svelte';
    import WordCloud from './lib/WordCloud.svelte';
    import rawData1A from './assets/3.1A_電力問題_文字雲.json';
    import rawData1B from './assets/3.1B_電力問題_文字雲.json';
    import rawData2A from './assets/3.2A_油電價格_文字雲.json';
    import rawData2B from './assets/3.2B_油電價格_文字雲.json';

    let title = "2022年與2024年3月電力治理議題關鍵字差異";
    let subtitle;
    let footer = [
        "資料來源：立法院議事公報、報導者觀測站",
        "資料整理：簡毅慧  ｜  設計：江世民"
    ];

    const formatWords = (data) => data.map(d => ({
        text: d.token,
        value: Number(d.count)
    }));
</script>
<div class="container">
  <Header {title} {subtitle}/>
  <div class="chartContainer">
    <div class="desktop-only">
      <table class="cloudsContainer">
        <thead>
        <tr>
          <th></th>
          <th>2022年3月</th>
          <th>2024年3月</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th class="groupTopic" style="background-color:#b58f5b;">電力問題</th>
          <td>
            <WordCloud words={formatWords(rawData1A)} colH={35} colS={65}/>
            <p>【 關注303大停電、電網韌性等面向 】</p>
          </td>
          <td>
            <WordCloud words={formatWords(rawData1B)} colH={35} colS={65}/>
            <p>【 關注電價調漲、台電虧損 】</p>
          </td>
        </tr>
        <tr>
          <th rowspan="4" class="groupTopic" style="background-color:#748B80;">油電價格</th>
          <td>
            <WordCloud words={formatWords(rawData2A)} colH={150} colS={15}/>
            <p>【 關注烏俄戰爭對油電價格的影響 】</p>
          </td>
          <td>
            <WordCloud words={formatWords(rawData2B)} colH={150} colS={15}/>
            <p>【 關注電價調漲，對物價及通膨的影響 】</p>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="mobile-only">
      <table class="cloudsContainer">
        <thead>
        <tr>
          <th rowspan="4" class="groupTopic" style="background-color:#b58f5b;">電力問題</th>
          <th>2022年3月</th>
        </tr>
        <tr>
          <th>
            <WordCloud words={formatWords(rawData1A)} height="200" width="800" colH={35} colS={65}/>
            <p>【 關注303大停電、電網韌性等面向 】</p>
          </th>
        </tr>
        <tr>
          <th>2024年3月</th>
        </tr>
        <tr>
          <th>
            <WordCloud words={formatWords(rawData1B)} height="200" width="800" colH={35} colS={65}/>
            <p>【 關注電價調漲、台電虧損 】</p>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td rowspan="4" class="groupTopic" style="background-color:#748B80;">油電價格</td>
          <td>2022年3月</td>
        </tr>
        <tr>
          <td>
            <WordCloud words={formatWords(rawData2A)} height="200" width="800" colH={150} colS={15}/>
            <p>【 關注烏俄戰爭對油電價格的影響 】</p>
          </td>
        </tr>
        <tr>
          <td>2024年3月</td>
        </tr>
        <tr>
          <td>
            <WordCloud words={formatWords(rawData2B)} height="200" width="800" colH={150} colS={15}/>
            <p>【 關注電價調漲，對物價及通膨的影響 】</p>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <Footer {footer}/>
</div>