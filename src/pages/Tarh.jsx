import React from 'react'

const Tarh = () => {
  return (
    <div>
         <div class="font_farsi m-subheader ">
                <div class="font_farsi d-flex align-items-center">
                    <div class="font_farsi mr-auto">
                        <h3 class="font_farsi m-subheader__title "> - خرید طرح</h3>
                    </div>
                </div>
            </div>
<div class="m-portlet">
    <div class="m-portlet__body m-portlet__body--no-padding">
        <div class="m-pricing-table-2">
            <div class="m-pricing-table-2__head">
                <div class="m-pricing-table-2__title m--font-light">
                    <h1> جهت شروع کار با سامانه یک طرح را خریداری کنید</h1>
                </div>
                <div class="btn-group nav m-btn-group m-btn-group--pill m-btn-group--air" role="group">
                    <button type="button" class="font_farsi btn m-btn--pill  active m-btn--wide m-btn--uppercase m-btn--bolder" data-toggle="tab" href="#m-pricing-table_content1" role="tab" aria-expanded="true">
                        ماهانه
                    </button>
                    <button type="button" class="font_farsi btn m-btn--pill  m-btn--wide m-btn--uppercase m-btn--bolder" data-toggle="tab" href="#m-pricing-table_content2" role="tab" aria-expanded="false">
                        سالانه
                    </button>
                </div>
            </div>
            <div class="tab-content">

                <div class="tab-pane active" id="m-pricing-table_content1" aria-expanded="true">
                    <div class="m-pricing-table-2__content">
                        <div class="m-pricing-table-2__container">
                            <div class="m-pricing-table-2__items row"  id="planing_type_0">

                             <div class="m-pricing-table-2__item col-lg-4">
                                   <div class="m-pricing-table-2__visual">
                                        <div class="m-pricing-table-2__hexagon"></div>
                                        <span class="m-pricing-table-2__icon m&#45;&#45;font-info"><i class="fa flaticon-confetti"></i></span>
                                    </div>
                                    <h2 class="m-pricing-table-2__subtitle">برنزی</h2>
                                    <div class="m-pricing-table-2__features">
                                        <span>5 کارمند</span>
                                        <span>1 محدوده</span>
                                        <span>5 نقش</span>
                                        <span>10 فعالیت</span>
                                    </div>
                                    <span class="font_farsi m-pricing-table-2__price">15</span>
                                    <span class="m-pricing-table-2__label" style={{fontSize: "15px"}}>هزارتومان</span>
                                    <div class="m-pricing-table-2__btn">
                                       <button type="button" class="font_farsi btn m-btn&#45;&#45;pill  btn-info m-btn&#45;&#45;wide m-btn&#45;&#45;uppercase m-btn&#45;&#45;bolder m-btn&#45;&#45;lg" onclick="select_plan(1)">انتخاب</button>
                                    </div>
                                </div>

                              <div class="m-pricing-table-2__item col-lg-4">
                                    <div class="m-pricing-table-2__visual">
                                        <div class="m-pricing-table-2__hexagon"></div>
                                       <span class="m-pricing-table-2__icon m&#45;&#45;font-info"><i class="fa  flaticon-rocket"></i></span>
                                    </div>
                                    <h2 class="m-pricing-table-2__subtitle">نقره ای</h2>
                                   <div class="m-pricing-table-2__features">
                                        <span>10 کارمند</span>
                                        <span>2 محدوده</span>
                                       <span>10 نقش</span>
                                        <span>20 فعالیت</span>
                                   </div>
                                   <span class="font_farsi m-pricing-table-2__price">30</span>
                                 <span class="m-pricing-table-2__label" style={{fontSize: "15px"}}>هزارتومان</span>
                                   <div class="m-pricing-table-2__btn">
                                        <button type="button" class="font_farsi btn m-btn&#45;&#45;pill  btn-info m-btn&#45;&#45;wide m-btn&#45;&#45;uppercase m-btn&#45;&#45;bolder m-btn&#45;&#45;lg" onclick="select_plan(2)">انتخاب</button>
                                   </div>
                                </div>

                                <div class="m-pricing-table-2__item col-lg-4">
                                 <div class="m-pricing-table-2__visual">
                                        <div class="m-pricing-table-2__hexagon"></div>
                                        <span class="m-pricing-table-2__icon m&#45;&#45;font-info"><i class="fa flaticon-gift"></i></span>
                                    </div>
                                    <h2 class="m-pricing-table-2__subtitle">طلایی</h2>
                                    <div class="m-pricing-table-2__features">
                                        <span>بی نهایت کارمند</span>
                                       <span>بی نهایت محدوده</span>
                                        <span>بی نهایت نقش</span>
                                        <span>بی نهایت فعالیت</span>
                                    </div>
                                   <span class="m-pricing-table-2__price">50</span>
                                  <span class="m-pricing-table-2__label" style={{fontSize: "15px"}}>هزارتومان</span>
                                    <div class="m-pricing-table-2__btn">
                                       <button type="button" class="font_farsi btn m-btn&#45;&#45;pill  btn-info m-btn&#45;&#45;wide m-btn&#45;&#45;uppercase m-btn&#45;&#45;bolder m-btn&#45;&#45;lg" onclick="select_plan(3)">انتخاب</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-pane" id="m-pricing-table_content2" aria-expanded="false">
                    <div class="m-pricing-table-2__content">
                        <div class="m-pricing-table-2__container">
                            <div class="m-pricing-table-2__items row" id="planing_type_1">

                               <div class="m-pricing-table-2__item col-lg-4">
                                  <div class="m-pricing-table-2__visual">
                                        <div class="m-pricing-table-2__hexagon"></div>
                                      <span class="m-pricing-table-2__icon m&#45;&#45;font-info"><i class="fa flaticon-confetti"></i></span>
                                    </div>
                                   <h2 class="m-pricing-table-2__subtitle">برنزی</h2>
                                   <div class="m-pricing-table-2__features">
                                        <span>10 کارمند</span>
                                        <span>2 محدوده</span>
                                        <span>10 نقش</span>
                                       <span>20 فعالیت</span>
                                    </div>
                                   <span class="font_farsi m-pricing-table-2__price">150</span>
                                    <span class="m-pricing-table-2__label" style={{fontSize: "15px"}}>هزارتومان</span>
                                    <div class="m-pricing-table-2__btn">
                                    <button type="button" class="font_farsi btn m-btn&#45;&#45;pill  btn-info m-btn&#45;&#45;wide m-btn&#45;&#45;uppercase m-btn&#45;&#45;bolder m-btn&#45;&#45;lg" onclick="select_plan(4)">انتخاب</button>
                                    </div>
                                </div>

                                <div class="m-pricing-table-2__item col-lg-4">
                                    <div class="m-pricing-table-2__visual">
                                        <div class="m-pricing-table-2__hexagon"></div>
                                    <span class="m-pricing-table-2__icon m&#45;&#45;font-info"><i class="fa  flaticon-rocket"></i></span>
                                    </div>
                                    <h2 class="m-pricing-table-2__subtitle">نقره ای</h2>
                                    <div class="m-pricing-table-2__features">
                                        <span>20 کارمند</span>
                                        <span>5 محدوده</span>
                                        <span>20 نقش</span>
                                        <span>40 فعالیت</span>
                                    </div>
                                    <span class="font_farsi m-pricing-table-2__price">350</span>
                                    <span class="m-pricing-table-2__label" style={{fontSize: "15px"}}>هزارتومان</span>
                                    <div class="m-pricing-table-2__btn">
                                        <button type="button" class="font_farsi btn m-btn&#45;&#45;pill  btn-info m-btn&#45;&#45;wide m-btn&#45;&#45;uppercase m-btn&#45;&#45;bolder m-btn&#45;&#45;lg" onclick="select_plan(5)">انتخاب</button>
                                    </div>
                                </div>

                                <div class="m-pricing-table-2__item col-lg-4">
                                    <div class="m-pricing-table-2__visual">
                                        <div class="m-pricing-table-2__hexagon"></div>
                                        <span class="m-pricing-table-2__icon m&#45;&#45;font-info"><i class="fa flaticon-gift"></i></span>
                                    </div>
                                    <h2 class="m-pricing-table-2__subtitle">طلایی</h2>
                                    <div class="m-pricing-table-2__features">
                                     <span>بی نهایت کارمند</span>
                                        <span>بی نهایت محدوده</span>
                                        <span>بی نهایت نقش</span>
                                        <span>بی نهایت فعالیت</span>
                                    </div>
                                    <span class="m-pricing-table-2__price">500</span>
                                    <span class="m-pricing-table-2__label" style={{fontSize: "15px"}}>هزارتومان</span>
                                    <div class="m-pricing-table-2__btn">
                                        <button type="button" class="font_farsi btn m-btn&#45;&#45;pill  btn-info m-btn&#45;&#45;wide m-btn&#45;&#45;uppercase m-btn&#45;&#45;bolder m-btn&#45;&#45;lg" onclick="select_plan(6)">انتخاب</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Tarh