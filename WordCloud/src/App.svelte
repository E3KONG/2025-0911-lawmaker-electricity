<script>
    import Header from './lib/Header.svelte';
    import Footer from './lib/Footer.svelte';
    import WordCloud from './lib/WordCloud.svelte';
    import rawData1A from './assets/1A_電力問題_文字雲.json';
    import rawData1B from './assets/1B_電力問題_文字雲.json';
    import rawData2A from './assets/2A_油電價格_文字雲.json';
    import rawData2B from './assets/2B_油電價格_文字雲.json';
    import rawData3A from './assets/3A_黃國昌_文字雲.json';
    import rawData4A from './assets/3B_張啓楷_文字雲.json';

    const searchParams = new URLSearchParams(window.location.search);
    const type = searchParams.get('type');

    let title = $derived(type === "member" ? "民眾黨黃國昌、張啓楷如何討論太陽光電發展？" : "2022年與2024年3月電力治理議題關鍵字差異");
    let subtitle;
    let footer = [
        "註：截至2025年9月初，立法院第3會期公報未完整公布，本表僅統計2020年至2024年第2會期結束",
        "資料來源：立法院議事公報、報導者觀測站",
        "資料整理：簡毅慧  ｜  設計：江世民"
    ];
    const formatWords = (data) => data.map(d => ({
        text: d.token,
        value: Number(d.count)
    }));

    const dataA = type === "member" ? rawData3A : rawData1A;
    const dataB = type === "member" ? rawData1B : rawData1B;
    const dataC = type === "member" ? rawData4A : rawData2A;
    const dataD = type === "member" ? rawData2B : rawData2B;
    const annotateA = type === "member" ? "黃國昌" : "【 關注303大停電、電網韌性等面向 】";
    const annotateB = type === "member" ? "【  】" : "【 關注電價調漲、台電虧損 】";
    const annotateC = type === "member" ? "張啓楷" : "【 關注烏俄戰爭對油電價格的影響 】";
    const annotateD = type === "member" ? "【  】" : "【 關注電價調漲，對物價及通膨的影響 】";
    const topicA = type === "member" ? "電力問題" : "電力問題";
    const topicB = type === "member" ? "太陽光電發展" : "油電價格";
    const timeA = type === "member" ? "第10屆" : "2022年3月";
    const timeB = type === "member" ? "第11屆" : "2024年3月";


    let bodyHeight = $state(window.document.body.clientHeight);
    $effect(() => {
        parent.postMessage({ bodyHeight, source: `twreporter-wordcloud-${type}` }, '*'); // 跟 iframe id 一樣
    });
</script>

<svelte:body bind:clientHeight={bodyHeight} />
<div class="container">
  <Header {title} {subtitle}/>
  <div class="chartContainer">
    <div class="desktop-only">
      <table class="cloudsContainer">
        <thead>
        <tr>
          <th></th>
          <th>{timeA}</th>
          <th>{timeB}</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th class="groupTopic" style="background-color:#b58f5b;">{topicA}</th>
          <td>
            <WordCloud words={formatWords(dataA)} colH={35} colS={65}/>
            <p>{annotateA}</p>
          </td>
          <td>
            <WordCloud words={formatWords(dataB)} colH={35} colS={65}/>
            <p>{annotateB}</p>
          </td>
        </tr>
        <tr>
          <th rowspan="4" class="groupTopic" style="background-color:#748B80;">{topicB}</th>
          <td>
            <WordCloud words={formatWords(dataC)} colH={150} colS={15}/>
            <p>{annotateC}</p>
          </td>
          <td>
            <WordCloud words={formatWords(dataD)} colH={150} colS={15}/>
            <p>{annotateD}</p>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="mobile-only">
      <table class="cloudsContainer">
        <thead>
        <tr>
          <th rowspan="4" class="groupTopic" style="background-color:#b58f5b;">{topicA}</th>
          <th>{timeA}</th>
        </tr>
        <tr>
          <th>
            <WordCloud words={formatWords(dataA)} height="200" width="800" colH={35} colS={65}/>
            <p>{annotateA}</p>
          </th>
        </tr>
        <tr>
          <th>{timeB}</th>
        </tr>
        <tr>
          <th>
            <WordCloud words={formatWords(dataB)} height="200" width="800" colH={35} colS={65}/>
            <p>{annotateB}</p>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td rowspan="4" class="groupTopic" style="background-color:#748B80;">{topicB}</td>
          <td>{timeA}</td>
        </tr>
        <tr>
          <td>
            <WordCloud words={formatWords(dataC)} height="200" width="800" colH={150} colS={15}/>
            <p>{annotateC}</p>
          </td>
        </tr>
        <tr>
          <td>2{timeB}</td>
        </tr>
        <tr>
          <td>
            <WordCloud words={formatWords(dataD)} height="200" width="800" colH={150} colS={15}/>
            <p>{annotateD}</p>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <Footer {footer}/>
</div>