"use client"
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';





export default function ContactAndTaxInfomation(
    { getContactAndTax }:
        { getContactAndTax: (e: any) => void }
) {

    const initialContactAndTaxInfomation = {
        ContactInfo: [{
            "Gender": "1",
            "FirstName": "",
            "LastName": "",
            "Phone": "",
            "Email": "",
            "Address": "",
            "Company": "",
            "Note": ""
        }],
        InvoiceInfo: [{
            "company": "",
            "address": "",
            "city": "",
            "mst": "",
            "receiver": "",
            "email": ""
        }]
    };



    const [showVatInfo, setShowVatInfo] = useState(false)
    const showVat = (e: any, i: number) => {
        console.log(e.target.checked);
        if (e.target.checked == true) {
            setShowVatInfo(true)
        } else {
            setShowVatInfo(false)
        }
    }
    return (
        <>
            <Formik
                initialValues={initialContactAndTaxInfomation}
                onSubmit={async (values) => {
                    getContactAndTax(values.ContactInfo)
                }}
            >
                {({ values }) => (
                    <Form>
                        <FieldArray name="adultbaggages">
                            {({ insert, remove, push }) => (
                                <div className=" flex flex-col justify-start ...">
                                    {values.ContactInfo.length > 0 &&

                                        values.ContactInfo.map((e: any, index: number) => (
                                            <>
                                                <div className=" flex flex-col justify-start ...">
                                                    <div className=" grid grid-cols-6 gap-4 px-3">
                                                        <div className="col-span-2">
                                                            <label htmlFor={`ContactInfo.${index}.gender`} className="block mb-2 text-sm font-medium text-start">Giới tính</label>
                                                            <Field as="select" name={`ContactInfo.${index}.gender`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                <option value="1">Nam</option>
                                                                <option value="2">Nữ</option>
                                                            </Field>
                                                            <ErrorMessage
                                                                name={`ContactInfo.${index}.gender`}
                                                                component="div"
                                                                className="field-error"
                                                            />
                                                        </div>
                                                        <div className=' col-span-4'>
                                                            <label htmlFor={`ContactInfo.${index}.FirstName`} className="block mb-2 text-sm font-medium text-start">Họ</label>
                                                            <Field
                                                                name={`ContactInfo.${index}.FirstName`}
                                                                placeholder="Hoang"
                                                                type="text"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            <ErrorMessage
                                                                name={`ContactInfo.${index}.FirstName`}
                                                                component="div"
                                                                className="field-error"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className=" grid grid-cols-6 gap-4 px-3">
                                                        <div className=' col-span-3'>
                                                            <label htmlFor={`ContactInfo.${index}.Phone`} className="block mb-2 text-sm font-medium text-start">Số điện thoại</label>
                                                            <Field
                                                                name={`ContactInfo.${index}.Phone`}
                                                                placeholder="Hoang"
                                                                type="text"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            <ErrorMessage
                                                                name={`ContactInfo.${index}.Phone`}
                                                                component="div"
                                                                className="field-error"
                                                            />                                                        </div>
                                                        <div className=' col-span-3'>
                                                            <label htmlFor={`ContactInfo.${index}.Email`} className="block mb-2 text-sm font-medium text-start">Email</label>
                                                            <Field
                                                                name={`ContactInfo.${index}.Email`}
                                                                placeholder="Hoang"
                                                                type="email"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            <ErrorMessage
                                                                name={`ContactInfo.${index}.Email`}
                                                                component="div"
                                                                className="field-error"
                                                            />                                                         </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center p-3">
                                                    <input
                                                        onClick={(e) => showVat(e, 4)}
                                                        checked={showVatInfo == true}
                                                        id="checkedVAT" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label htmlFor="checkedVAT" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Xuất hóa đơn</label>
                                                </div>

                                            </>
                                        ))

                                    }
                                    {showVatInfo == true  &&
                                        values.InvoiceInfo.length > 0 &&
                                        values.InvoiceInfo.map((e: any, index: number) => (
                                            <>
                                                <div className=" flex flex-col justify-start ...">
                                                    <div className=" grid grid-cols-6 gap-4 px-3">
                                                        <div className=' col-span-3'>
                                                            <label htmlFor="companyName" className="block my-2 text-sm font-medium text-start">Tên công ty</label>
                                                            <input placeholder="Công ty TNHH MTV Hoàng Hải" type="text" id="companyName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                        </div>
                                                        <div className=' col-span-3'>
                                                            <label htmlFor="companyTAX" className="block my-2 text-sm font-medium text-start">Mã số thuế</label>
                                                            <input placeholder="8858191965" type="text" id="companyTAX" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                        </div>
                                                    </div>
                                                    <div className=" grid grid-cols-6 gap-4 px-3">
                                                        <div className=' col-span-6'>
                                                            <label htmlFor="companyAddress" className="block my-2 text-sm font-medium text-start">Địa chỉ</label>
                                                            <input placeholder="44 Lê Thái Tổ, phường Hàng Trống, Hoàn Kiếm, Hà Nội" type="text" id="companyAddress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                        </div>

                                                    </div>
                                                    <div className=" grid grid-cols-6 gap-4 px-3 mb-5">
                                                        <div className=' col-span-2'>
                                                            <label htmlFor="first_name" className="block my-2 text-sm font-medium text-start">Người nhận hóa đơn</label>
                                                            <input placeholder="Hoàng Văn Hải" type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                        </div>
                                                        <div className=' col-span-2'>
                                                            <label htmlFor="first_name" className="block my-2 text-sm font-medium text-start">Số điện thoại</label>
                                                            <input placeholder="09123123123" type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                        </div>
                                                        <div className=' col-span-2'>
                                                            <label htmlFor="first_name" className="block my-2 text-sm font-medium text-start">Email nhận hóa đơn</label>
                                                            <input placeholder="hoanghai@gmail.com" type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                        </div>
                                                    </div>

                                                </div>
                                            </>
                                        ))

                                    }



                                </div>
                            )}
                        </FieldArray>
                        <button
                            type="submit"
                            className=" mr-5 text-white bg-red-600 w-full hover:bg-red-200 focus:ring-4 focus:ring-red-300 font-medium rounded-sm text-base h-12 my-auto"
                        >Đặt vé</button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

