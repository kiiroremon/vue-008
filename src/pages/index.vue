<template>
<div>
    <!-- <div class="intro" style="background-image: url(https://picsum.photos/1920/300?random);">
        <div class="dtable hw100">
            <div class="dtable-cell hw100">
                <div class="container text-center">
                    <h1 class="intro-title animated fadeInDown"> JM Penguin</h1>

                    <p class="animateme animated fadeIn">
                        lorem
                    </p>

                    <div class="row search-row animated fadeInUp">
                        <div class="col-xl-8 col-sm-8 search-col relative locationicon">
                            <i class="icon-location-2 icon-append"></i>
                            <input type="text" name="country" id="autocomplete-ajax" class="form-control locinput input-rel searchtag-input has-icon"
                                placeholder="City/Zipcode..." value="" autocomplete="off">
                        </div>
                        <div class="col-xl-4 col-sm-4 search-col">
                            <button class="btn btn-primary btn-search btn-block">
                                <i class="icon-search"></i>
                                <strong>Find</strong>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container text-center mt-5">
        <div class="card-columns">
            <div class="card text-center ">
                <img src="https://picsum.photos/388/268" class="card-img" alt="">
                <div class="card-img-overlay ">
                    <div class="card-body">
                        <span class="font-weight-bold text-white">68:21:23</span>
                    </div>
                </div>
            </div>
            <div class="card text-center ">
                <img src="https://picsum.photos/388/268" class="card-img" alt="">
                <div class="card-img-overlay ">
                    <div class="card-body">
                        <span class="font-weight-bold text-white">68:21:23</span>
                    </div>
                </div>
            </div>

            <div class="card text-center ">
                <img src="https://picsum.photos/388/268" class="card-img" alt="">
                <div class="card-img-overlay ">
                    <div class="card-body">
                        <span class="font-weight-bold text-white">68:21:23</span>
                    </div>
                </div>
            </div>
            <div class="card text-center ">
                <img src="https://picsum.photos/388/268" class="card-img" alt="">
                <div class="card-img-overlay ">
                    <div class="card-body">
                        <span class="font-weight-bold text-white">68:21:23</span>
                    </div>
                </div>
            </div>
            <div class="card text-center ">
                <img src="https://picsum.photos/388/268" class="card-img" alt="">
                <div class="card-img-overlay ">
                    <div class="card-body">
                        <span class="font-weight-bold text-white">68:21:23</span>
                    </div>
                </div>
            </div>
            <div class="card text-center ">
                <img src="https://picsum.photos/388/268" class="card-img" alt="">
                <div class="card-img-overlay ">
                    <div class="card-body">
                        <span class="font-weight-bold text-white">68:21:23</span>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    
    

</div>
    
</template>

<script>
    export default {
        name: 'index',
    }

</script>

<style lang="scss">
    .intro {
        width: 100%;
        background-position: center top;
        background-repeat: no-repeat;
        background-size: cover;
        height: 350px;
        transition: all 400ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s;
        .container {
            max-width: 800px;
        }
        h1,
        .intro-title {
            color: #fff;
            font-family: "microsoft yahei,Verdana,Tahoma,Arial,宋体,Helvetica,sans-serif";
            font-size: 44px;
            line-height: 42px;
            font-weight: bold;
            letter-spacing: -0.3px;
            margin-bottom: 10px;
            padding-bottom: 0;
            text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
            transition: font 400ms ease-in-out 0s;
        }
        p {
            color: #e8eced;
            font-size: 18px;
            font-weight: 300;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        }

    }

    .fadeInDown {
        animation-name: fadeInDown;
    }

    .animated {
        animation-duration: 1s;
        animation-fill-mode: both;
    }

    .dtable {
        display: table;
    }

    .hw100 {
        height: 100%;
        width: 100%;
    }

    .dtable-cell {
        display: table-cell;
        vertical-align: middle;
    }

    .search-row {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
        margin-bottom: 50px;
        .search-col {
            padding: 0;
            position: relative;
        }
        .search-col:first-child {
            .form-control {
                border-radius: 3px 0 0 3px;
            }
        }
        .btn-search {
            border-radius: 0 3px 3px 0;
        }
    }

    .search-wrapper {
        background-color: #F2F5F4;
        padding: 30px 0 28px;
        width: 100%; // .search_box {
        // 	border:0 solid #00b38a;
        // 	width: 938px;
        // 	height: 46px;
        // 	margin: 0 auto;
        // 	position: relative;
        // }
    }

</style>
