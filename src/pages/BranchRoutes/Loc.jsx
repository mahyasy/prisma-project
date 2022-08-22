import React from 'react'

const Loc = () => {
  return (
    <div>
      <div class="font_farsi m-subheader ">
                <div class="font_farsi d-flex align-items-center">
                    <div class="font_farsi mr-auto">
                        <h3 class="font_farsi m-subheader__title "> - مدیریت محدوده ها</h3>
                    </div>
                    </div>
                    </div>
                    <div class="font_farsi m-content">

                








<div class="font_farsi row">


    <div class="font_farsi col-xl-12">
        <div class="m-portlet m-portlet--tab">
            <div class="m-portlet__head">
                <div class="m-portlet__head-caption">
                    <div class="m-portlet__head-title">
												<span class="m-portlet__head-icon m--hide">
													<i class="la la-gear"></i>
												</span>
                        <h3 class="font_farsi m-portlet__head-text">
                            اطلاعات محل
                        </h3>
                    </div>
                </div>
            </div>
    </div>
    </div>
    </div>
    </div>
    <form class="m-form m-form--fit m-form--label-align-right m-form--group-seperator-dashed">

<div class="m-portlet__body"  id="div_info">
    <div class="form-group m-form__group row">
        <div class="col-lg-3">
            <label class="font_farsi">عنوان</label>
            <input type="text" class="font_farsi form-control m-input" id="txt_title" placeholder="عنوان محدوده را وارد کنید"/>
            <span class="m-form__help">یک عنوان جهت شناسایی بهتر در ادامه ، در نظر بگیرید</span>
        </div>
        <div class="col-lg-3">
            <label class="font_farsi">درصد خطا</label>
            <input type="number" class="font_farsi form-control m-input" id="txt_fault" placeholder="درصد خطای مجاز این محدوده"/>
            <span class="m-form__help">میتوانید این مقدار را خالی بگذارید</span>
        </div>
        <div class="col-lg-3">
            <label class="font_farsi">تلفن</label>
            <input type="number" class="font_farsi form-control m-input" id="txt_phone" placeholder="تلفن دسترسی به محل"/>
            <span class="m-form__help">یک شماره تلفن جهت دسترسی به منطقه وارد کنید</span>
        </div>
        <div class="col-lg-3">
            <label class="font_farsi">توضیحات</label>
            <input type="text" class="font_farsi form-control m-input" id="txt_desc"/>
            <span class="m-form__help">توضیحات مربوط به این محدوده را وارد کنید</span>
        </div>
    </div>
    <div class="form-group m-form__group row">
        <div class="col-lg-6">
            <label class="font_farsi">آدرس</label>
            <input type="text" class="font_farsi form-control m-input" id="txt_address" placeholder="نشانی محل"/>
            <span class="m-form__help">نشانی محل مورد نظر را تایپ کنید</span>
        </div>
        <div class="col-lg-3">
            <label class="">انتخاب محدوده مورد نظر</label>
            <div class="input-group m-input-group m-input-group--square">
                <input type="text" class="form-control m-input" id="inp_nw_section_polygon" disabled/>
                <div class="input-group-prepend"><button type="button" class="font_farsi btn btn-accent" OnClick="set_marker_type('location_polygon')">رسم محدوده</button></div>
            </div>
            <span class="m-form__help">محدوده مورد نظر را با کلیک روی نقشه رسم کنید</span>
        </div>
        <div class="col-lg-3">
            <label class="">موقعیت درب ورودی</label>
            <div class="input-group m-input-group m-input-group--square">
                <input type="text" class="form-control m-input" id="inp_nw_section_door" disabled/>
                <div class="input-group-prepend"><button type="button" class="font_farsi btn btn-brand" onClick="set_marker_type('door_loc')">انتخاب</button></div>
            </div>
            <span class="m-form__help">موقعیت درب اصلی ورود به محدوده را مشخص کنید</span>
        </div>
    </div>
</div>

<div id="loading_code_1" style={{display: "none"}}></div>

<div class="m-portlet__foot m-portlet__foot--fit">
    <div class="m-form__actions text-light" >
        <button type="button" class="font_farsi btn btn-success" onClick="save_new_section()">ذخیره</button>
    </div>
</div>



</form>
    </div>
  )
}

export default Loc