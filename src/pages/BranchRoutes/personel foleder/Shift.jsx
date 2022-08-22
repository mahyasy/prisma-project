import React from 'react'

const Shift = () => {
  return (
    <div>
    <div class="font_farsi row">
<div class="font_farsi col-xl-5">

    <div class="font_farsi m-portlet m-portlet--full-height ">
        <div class="font_farsi m-portlet__head">
            <div class="font_farsi m-portlet__head-caption">
                <div class="font_farsi m-portlet__head-title">
                    <h3 class="font_farsi m-portlet__head-text">
                        خلاصه وضعیت
                    </h3>
                </div>
            </div>
        </div>
        <div class="m-portlet__body" id="div_info">

            <div class="m-widget13" id="div_num_2">
                <div class="m-widget13__item">
                          <span class="m-widget13__desc m--align-right factor_title">کارمند</span>
                    <select class="form-control m-select2" id="select_staff" name="param" multiple="multiple"> </select>
                </div>
                <div class="m-widget13__item">
                          <span class="m-widget13__desc m--align-right factor_title">تاریخ شروع</span>
                    <span class="m-widget13__text m-widget13__text-bolder factor_value">
                        <button id="btn_start_date" type="button" class="font_farsi m-widget__detalis  btn  btn-brand" style={{padding: "5px 10px;margin: 0px 10px"}} onClick="start_date_key()">انتخاب</button>
                        <span id="spn_start_date">  </span>
                    </span>
                </div>
                <div class="m-widget13__item">
                          <span class="m-widget13__desc m--align-right factor_title">تاریخ پایان</span>
                    <span class="m-widget13__text m-widget13__text-bolder factor_value">
                        <button id="btn_end_date" type="button" class="font_farsi m-widget__detalis  btn  btn-brand" style={{padding: "5px 10px",margin: "0px 10px"}} onClick="end_date_key()">انتخاب</button>
                        <span id="spn_end_date">  </span>
                    </span>
                </div>
                <div class="m-widget13__item">
                    <span class="m-widget13__desc m--align-right factor_title">زمان شروع و پایان</span>
                    <span class="m-widget13__text factor_value">
                        <span id="spn_start_time"> 00:00 </span>
                        <span> الی </span>
                        <span id="spn_end_time"> 00:00 </span>
                    </span>
                </div>
                <div class="m-widget13__item">
                          <span class="m-widget13__desc m--align-right factor_title">محدوده کاری</span>
                    <select class="form-control m-select2" id="selcet_section" name="param">  </select>
                </div>
                <div class="m-widget13__item">
                          <span class="m-widget13__desc m--align-right factor_title">متن ماموریت</span>
                    <input type="text" class="font_farsi form-control m-input" id="mission_text" placeholder="متن ماموریت را وارد کنید"/>
                </div>

                <div class="m-widget13__action m--align-right text-center">
                    <button type="button" class="font_farsi m-widget__detalis  btn m-btn--pill  btn-accent" style={{padding: "10px 20px"}} onClick="save()" >ذخیره</button>
                </div>
            </div>

            <div id="loading_code_2" style={{display: "none"}}></div>

        </div>
    </div>
  
</div>

<div class="font_farsi col-xl-7" id="calendar_div">
    <div class="font_farsi m-portlet m-portlet--full-height ">
        <div class="font_farsi m-portlet__head">
            <div class="font_farsi m-portlet__head-caption">
                <div class="font_farsi m-portlet__head-title">
                    <h3 class="font_farsi m-portlet__head-text">
                        انتخاب تاریخ شروع و پایان
                    </h3>
                </div>
            </div>
        </div>
        <div class="font_farsi m-portlet__body" style={{paddingTop: "0rem"}}>
            <div class="font_farsi tab-content" id="div_num_1">
                <div class="font_farsi tab-pane active" id="m_widget4_tab1_content">

                    <div class="row">
                        <table id="cal1" class="fc-table">
                            <caption style={{captionSide: "top"}}>

                                <div class="form-row">
                                    <div class="col">
                                        <label for="fc-year">سال:</label>
                                        <select name="fc-year" class="font_farsi fc-year form-control" style={{padding:" 0rem 1rem"}}>
                                            <option value="1391">1391</option>
                                            <option value="1392">1392</option>
                                            <option value="1393">1393</option>
                                            <option value="1394">1394</option>
                                            <option value="1395">1395</option>
                                            <option value="1396">1396</option>
                                            <option value="1397">1397</option>
                                            <option value="1398">1398</option>
                                            <option value="1399">1399</option>
                                            <option value="1400">1400</option>
                                            <option value="1401">1401</option>
                                            <option value="1402">1402</option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <label for="fc-month">ماه:</label>
                                        <select name="fc-month" class="font_farsi fc-month form-control" style={{padding: "0rem 1rem"}}>
                                            <option value="0">فروردین</option>
                                            <option value="1">اردیبهشت</option>
                                            <option value="2">خرداد</option>
                                            <option value="3">تیر</option>
                                            <option value="4">مرداد</option>
                                            <option value="5">شهریور</option>
                                            <option value="6">مهر</option>
                                            <option value="7">آبان</option>
                                            <option value="8">آذر</option>
                                            <option value="9">دی</option>
                                            <option value="10">بهمن</option>
                                            <option value="11">اسفند</option>
                                        </select>
                                    </div>
                                </div>




                            </caption>
                            <tr>
                                <th>شنبه</th>
                                <th>یکشنبه</th>
                                <th>دوشنبه</th>
                                <th>سه شنبه</th>
                                <th>چهارشنبه</th>
                                <th>پنچشنبه</th>
                                <th>جمعه</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div class="row" style={{marginTop: "20px"}}>

                        <div class="col-md-6">
                            <div class="text-center" style={{ margin: "15px 0px", paddingTop: "15px", borderTop: "solid 1px #dee2e6"}}>
                                <span  class="text-center" style={{color: "#4343a1"}}>ساعت شروع فعالیت</span>
                            </div>
                            <div class="row">
                                <div class="col-5 text-center">

                                    <div class="working_hour_min_box" id="minuets_time_box_1">0</div>

                                </div>
                                <div class="col-2 text-center">

                                    <div class="col-md-12 text-center" style={{padding: "0"}}>

                                        <div class="working_sep_box">
                                            :
                                        </div>

                                    </div>

                                </div>
                                <div class="col-5 text-center">

                                    <div class="working_hour_min_box" id="hours_time_box_1">0</div>

                                </div>
                            </div>
                            <div class="row" style={{marginTop: "15px"}}>
                                <div class="col-md-12 farsi_dir ">

                                    <label for="hours_time_1" style={{color: "#4343a1",marginBottom: "10px"}}>ساعت : </label>
                                    <input type="range" class="custom-range" min="0" max="23" value="0" id="hours_time_1"/>

                                </div>
                            </div>
                            <div class="row" style={{marginTop: "15px"}}>
                                <div class="col-md-12 farsi_dir">

                                    <label for="minuets_time_1" style={{color: "#4343a1",marginBottom: "10px"}}>دقیقه : </label>
                                    <input type="range" class="custom-range" min="0" max="59" value="0" id="minuets_time_1"/>

                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="text-center" style={{margin: "15px 0px" ,paddingTop: "15px" ,borderTop: "solid 1px #dee2e6"}} >
                                <span  class="text-center" style={{color: "#4343a1"}}>ساعت پایان فعالیت</span>
                            </div>

                            <div class="row">
                                <div class="col-5 text-center">

                                    <div class="working_hour_min_box" id="minuets_time_box_2">
                                        0
                                    </div>

                                </div>
                                <div class="col-2 text-center">

                                    <div class="col-md-12 text-center" style={{padding: "0"}}>

                                        <div class="working_sep_box">
                                            :
                                        </div>

                                    </div>

                                </div>
                                <div class="col-5 text-center">

                                    <div class="working_hour_min_box" id="hours_time_box_2">
                                        0
                                    </div>

                                </div>
                            </div>
                            <div class="row" style={{marginTop: "15px"}}>
                                <div class="col-md-12 farsi_dir ">
                                    <label for="hours_time_2" style={{color: "#4343a1",marginBottom: "10px"}}>ساعت : </label>
                                    <input type="range" class="custom-range" min="0" max="23" value="0" id="hours_time_2"/>

                                </div>
                            </div>
                            <div class="row" style={{marginTop: "15px"}}>
                                <div class="col-md-12 farsi_dir">

                                    <label for="minuets_time_2" style={{color: "#4343a1",marginBottom: "10px"}}>دقیقه : </label>
                                    <input type="range" class="custom-range" min="0" max="59" value="0" id="minuets_time_2"/>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div id="loading_code_1" style={{display: "none"}}></div>
        </div>
    </div>
</div>


</div>
    </div>
  )
}

export default Shift