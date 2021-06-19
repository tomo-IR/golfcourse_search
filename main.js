// var area = new Vue({
//     el: "#area",
//     data: {
//         areas: {
//             1: "北海道",
//             2: "東北",
//             3: "関東"
//         }
//     }
// });


async function callApi() {

    var keyword = new Vue({
        el: "#form_input",
        data: {
            k: "千葉"
        }
    });
}
callApi();

const base_url = "https://app.rakuten.co.jp/services/api/Gora/GoraGolfCourseSearch/20170623?format=json&";
const apiKey = "1083401508369226218";
const areaCode = "";

async function search_button() {
    var keyword = document.getElementById('search_keyword').value;
    console.log(keyword);
    var url = base_url + "areaCode=" + areaCode + "&keyword=" + keyword + "&applicationId=" + apiKey
    const res = await fetch(url);
    const golfcourse = await res.json();
    // console.log("keywordの中身は" + keyword.k);
    console.log(url);
    console.log(golfcourse);
    console.log(golfcourse.count);
    document.getElementById('api_output').innerHTML = golfcourse.count;
};