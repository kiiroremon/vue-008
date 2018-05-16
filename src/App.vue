<template>
    <div id="app" style="height: 300vh">
        <!-- <div class="app-header sticky-top">
            <nav class="navbar  navbar-expand-md navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a href="#" class="navbar-brand">JM</a>
                    <div class="d-flex ml-auto">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#globalNavbar" aria-controls="globalNavbar"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="globalNavbar">
                        <ul class="navbar-nav mr-auto order-1">
                            <li class="nav-item">
                                <a href="#" class="nav-link">最新体验</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">今日热门</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">有趣的发现</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">新消息通知</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">我的零点八升</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">帮助中心</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">购物车</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav d-none d-lg-flex ml-2 order-3">
                            <li class="nav-item">
                                <a class="nav-link" href="#">注册</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">登录</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div> -->
				<app-toolbar></app-toolbar>
        <!--头部结束-->

        <div class="app-content">
						<keep-alive>
								<router-view></router-view>
						</keep-alive>
        </div>

        <!-- <div class="app-footer mt-5  bg-light">
            <div class="container">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a href="#" class="nav-link">服务条款</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">销售条款</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">个人信息使用说明</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">品牌入驻/宣传咨询</a>
                    </li>
                </ul>
                <div class="copy">
                    <p>Copyright &copy; 2018 保留所有权利。</p>
                </div>
            </div>
        </div> -->

				<app-footer></app-footer>



    </div>
</template>

<script>
import AppToolbar from './pages/AppToolbar'
import AppFooter from './pages/AppFooter'

    export default {
				name: "App",
				components: {
					AppToolbar,
					AppFooter
				}
    };

</script>

<style lang="scss">
    // .html, body {
    // 	font-size: 16px;
    // 	font-family: '微软雅黑,Verdana,Tahoma,Arial,宋体,Helvetica,sans-serif';
    // 	line-height: 1rem;
		// }
/* 
html5doctor.com Reset Stylesheet
v1.4.1 
2010-03-01
Author: Richard Clark - http://richclarkdesign.com
*/

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1;
}

:focus {
	outline: 1;
}

article,aside,canvas,details,figcaption,figure,
footer,header,hgroup,menu,nav,section,summary { 
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    border:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

mark {
    background-color:#ff9;
    color:#000; 
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted #000;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

hr {
    display:block;
    height:1px;
    border:0;   
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}

/*清除浮动*/
.clearfloat:after{
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}
.clearfloat{
    zoom: 1;
}
	
    .app-header {
        background: rgba(0, 0, 8, 0.8);
    }

    .app-footer {
        a,
        p {
            color: #555;
        }
        .nav-link {
            margin-top: 20px;
            margin-bottom: 20px;
            padding-top: 2px;
            padding-bottom: 2px;
            color: #555d65;
            text-transform: uppercase;
            border-right: 1px solid #d6d6d6;
        }
        .copy {
            border-top: 1px solid #d6d6d6;
            text-align: center;
            color: #555d65;
            text-transform: uppercase;
            max-width: 800px;
            margin: 0 auto;
            padding-top: 20px;
            padding-bottom: 20px;
            font-size: 90%;
        }
    }

</style>
