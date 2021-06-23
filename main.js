'use strict';
const base_url = "https://app.rakuten.co.jp/services/api/Gora/GoraGolfCourseSearch/20170623?format=json";
const apiKey = "1083401508369226218";
var global_areacode = "";
var global_keyword = "";
var global_url = base_url + "&applicationId=" + apiKey;

var f_areacode = document.getElementById('address');
f_areacode.addEventListener('change', inputChange);

var keyword = new Vue({
    el: '#form_input',
    methods: {
        onInput_keyword: async function() {
            global_keyword = document.getElementById('search_keyword').value;
            var function_keyword = "&keyword=" + global_keyword
            var keyword_url = global_url + "&areaCode=" + global_areacode + function_keyword;
            const res = await fetch(keyword_url);
            const golfcourse_json = await res.json();

            console.log("保持したいキーワードは" + global_keyword)
            console.log("初期化前のglobal_urlは" + global_url);
            console.log(keyword_url);
            console.log(golfcourse_json);
            console.log(golfcourse_json.count);
            console.log(golfcourse_json.pageCount);
            console.log(golfcourse_json.Items[0].Item.golfCourseName)
            document.getElementById('api_output').innerHTML = golfcourse_json.count;

            while (search_result.firstChild) {
                search_result.removeChild(search_result.firstChild);
            }

            for (let i = 0; i < golfcourse_json.hits; i++) {
                console.log(i);
                // その他の文
                console.log(golfcourse_json.Items[i].Item.golfCourseName);
                document.getElementById('search_result')
                var newElement = document.createElement("li"); // p要素作成
                var newContent = document.createTextNode(golfcourse_json.Items[i].Item.golfCourseName); // テキストノードを作成
                newElement.appendChild(newContent); // p要素にテキストノードを追加
                newElement.setAttribute("id", "list_" + i); // p要素にidを設定

                var parentDiv = document.getElementById("search_result");
                parentDiv.appendChild(newElement, parentDiv.firstChild);
            }


        }
    }
});

async function inputChange(event) {

    global_areacode = event.currentTarget.value
    var function_areacode = "&areaCode=" + global_areacode
    var areacode_url = global_url + global_keyword + function_areacode;

    const res = await fetch(areacode_url);
    const golfcourse_json = await res.json();
    console.log(global_areacode);
    console.log(global_url);
    console.log(golfcourse_json);
    console.log(golfcourse_json.count);
    console.log(golfcourse_json.pageCount);
    console.log(golfcourse_json.Items[1].Item.golfCourseName)
    document.getElementById('api_output').innerHTML = golfcourse_json.count;

    console.log("保持されたキーワードは" + global_keyword);
    console.log("保持されたエリアコードは" + global_areacode);

    while (search_result.firstChild) {
        search_result.removeChild(search_result.firstChild);
    }
    for (let i = 0; i < golfcourse_json.hits; i++) {
        console.log(i);
        // その他の文
        console.log(golfcourse_json.Items[i].Item.golfCourseName);
        document.getElementById('search_result')
        var newElement = document.createElement("li"); // p要素作成
        var newContent = document.createTextNode(golfcourse_json.Items[i].Item.golfCourseName); // テキストノードを作成
        newElement.appendChild(newContent); // p要素にテキストノードを追加
        newElement.setAttribute("id", "list_" + i); // p要素にidを設定

        var parentDiv = document.getElementById("search_result");
        parentDiv.appendChild(newElement, parentDiv.firstChild);
    }


}