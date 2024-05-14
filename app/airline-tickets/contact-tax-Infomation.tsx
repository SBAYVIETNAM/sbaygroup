"use client"
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import * as Yup from "yup";



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
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    let validateVal
    if(showVatInfo == true){
        validateVal = 
        Yup.object({
            ContactInfo: Yup.array().of(
                Yup.object().shape({
                    FirstName: Yup.string().required("Họ là bắt buộc"),
                    Phone: Yup.string()
                        .required("Số điện thoại là bắt buộc")
                        .matches(phoneRegExp, 'Số điện thoại không đúng định dạng')
                        .min(8, "Số điện thoại dài từ 8 ký tự")
                    ,
                    Email: Yup.string()
                        .required("email là bắt buộc")
                        .email("Định dạng email không đúng")

                })
            ),
            InvoiceInfo: Yup.array().of(
                Yup.object().shape({
                    company: Yup.string().required("Tên công ty là bắt buộc"),
                    address: Yup.string().required("Địa chỉ là bắt buộc"),
                    city: Yup.string().required("Thành phố là bắt buộc"),
                    mst: Yup.string().required("Mã số thuế là bắt buộc"),
                    receiver: Yup.string().required("Tên người nhận là bắt buộc"),
                    email: Yup.string()
                        .required("Email là bắt buộc")
                        .email("Định dạng email không đúng")

                })
            )
        })
    } else {
        validateVal = 
        Yup.object({
            ContactInfo: Yup.array().of(
                Yup.object().shape({
                    FirstName: Yup.string().required("Họ là bắt buộc"),
                    Phone: Yup.string()
                        .required("Số điện thoại là bắt buộc")
                        .matches(phoneRegExp, 'Số điện thoại không đúng định dạng')
                        .min(8, "Số điện thoại dài từ 8 ký tự")
                    ,
                    Email: Yup.string()
                        .required("email là bắt buộc")
                        .email("Định dạng email không đúng")

                })
            ),
        })
    }
    return (
        <>
            <Formik
                initialValues={initialContactAndTaxInfomation}

                validationSchema={ validateVal
                    // Yup.object({
                    //     ContactInfo: Yup.array().of(
                    //         Yup.object().shape({
                    //             FirstName: Yup.string().required("Họ là bắt buộc"),
                    //             Phone: Yup.string()
                    //                 .required("Số điện thoại là bắt buộc")
                    //                 .matches(phoneRegExp, 'Số điện thoại không đúng định dạng')
                    //                 .min(8, "Số điện thoại dài từ 8 ký tự")
                    //             ,
                    //             Email: Yup.string()
                    //                 .required("email là bắt buộc")
                    //                 .email("Định dạng email không đúng")

                    //         })
                    //     ),
                    //     InvoiceInfo: Yup.array().of(
                    //         Yup.object().shape({
                    //             company: Yup.string().required("Tên công ty là bắt buộc"),
                    //             address: Yup.string().required("Địa chỉ là bắt buộc"),
                    //             city: Yup.string().required("Thành phố là bắt buộc"),
                    //             mst: Yup.string().required("Mã số thuế là bắt buộc"),
                    //             receiver: Yup.string().required("Tên người nhận là bắt buộc"),
                    //             email: Yup.string()
                    //                 .required("Email là bắt buộc")
                    //                 .email("Định dạng email không đúng")

                    //         })
                    //     )
                    // })
                }

                onSubmit={async (values) => {
                    console.log('submit ...');
                    getContactAndTax(
                        {
                            ContactInfo: values.ContactInfo,
                            InvoiceInfo: values.InvoiceInfo
                        })
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
                                                    <div className=" grid grid-cols-1 md:grid-cols-6 gap-4 px-3">
                                                        <div className="col-span-1 md:col-span-2">
                                                            <label htmlFor={`ContactInfo.${index}.gender`} className="block mb-2 text-sm font-medium text-start">Giới tính</label>
                                                            <Field as="select" name={`ContactInfo.${index}.gender`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                <option value="1">Nam</option>
                                                                <option value="2">Nữ</option>
                                                            </Field>
                                                            <ErrorMessage
                                                                name={`ContactInfo.${index}.gender`}
                                                                component="div"
                                                                className="field-error text-start text-red-600"
                                                            />
                                                        </div>
                                                        <div className=' col-span-1 md:col-span-4'>
                                                            <label htmlFor={`ContactInfo.${index}.FirstName`} className="block mb-2 text-sm font-medium text-start">Họ và tên</label>
                                                            <Field
                                                                name={`ContactInfo.${index}.FirstName`}
                                                                placeholder="Hoang Van Hai"
                                                                type="text"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            <ErrorMessage
                                                                name={`ContactInfo.${index}.FirstName`}
                                                                component="div"
                                                                className="field-error text-start text-red-600"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className=" grid grid-cols-1 md:grid-cols-6 gap-4 px-3">
                                                        <div className=' col-span-1 md:col-span-3'>
                                                            <label htmlFor={`ContactInfo.${index}.Phone`} className="block mb-2 text-sm font-medium text-start">Số điện thoại</label>
                                                            <Field
                                                                name={`ContactInfo.${index}.Phone`}
                                                                placeholder="09123456789"
                                                                type="text"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            <ErrorMessage
                                                                name={`ContactInfo.${index}.Phone`}
                                                                component="div"
                                                                className="field-error text-start text-red-600"
                                                            />
                                                        </div>
                                                        <div className=' col-span-1 md:col-span-3'>
                                                            <label htmlFor={`ContactInfo.${index}.Email`} className="block mb-2 text-sm font-medium text-start">Email</label>
                                                            <Field
                                                                name={`ContactInfo.${index}.Email`}
                                                                placeholder="Hoanghai@gmail.com"
                                                                type="email"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            <ErrorMessage
                                                                name={`ContactInfo.${index}.Email`}
                                                                component="div"
                                                                className="field-error text-start text-red-600"
                                                            />
                                                        </div>
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
                                    {showVatInfo == true &&
                                        values.InvoiceInfo.length > 0 &&
                                        values.InvoiceInfo.map((e: any, index: number) => (
                                            <>
                                                <div className=" flex flex-col justify-start ...">
                                                    <div className=" grid grid-cols-1 md:grid-cols-6 gap-4 px-3">
                                                        <div className=' col-span-1 md:col-span-3'>
                                                            <label htmlFor={`InvoiceInfo.${index}.company`} className="block mb-2 text-sm font-medium text-start">Tên công ty</label>
                                                            <Field
                                                                name={`InvoiceInfo.${index}.company`}
                                                                placeholder="Công ty TNHH MTV Hoàng Hải"
                                                                type="text"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            <ErrorMessage
                                                                name={`InvoiceInfo.${index}.company`}
                                                                component="div"
                                                                className="field-error text-start text-red-600"
                                                            />
                                                        </div>
                                                        <div className=' col-span-1 md:col-span-3'>
                                                            <label htmlFor={`InvoiceInfo.${index}.mst`} className="block mb-2 text-sm font-medium text-start">Mã số thuế</label>
                                                            <Field
                                                                name={`InvoiceInfo.${index}.mst`}
                                                                placeholder="8858191965"
                                                                type="text"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            <ErrorMessage
                                                                name={`InvoiceInfo.${index}.mst`}
                                                                component="div"
                                                                className="field-error text-start text-red-600"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className=" grid grid-cols-1 md:grid-cols-6 gap-4 px-3">
                                                        <div className=' col-span-1 md:col-span-6'>
                                                            <label htmlFor={`InvoiceInfo.${index}.address`} className="block mb-2 text-sm font-medium text-start">Địa chỉ</label>
                                                            <Field
                                                                name={`InvoiceInfo.${index}.address`}
                                                                placeholder="44 Lê Thái Tổ, phường Hàng Trống, Hoàn Kiếm, Hà Nội"
                                                                type="text"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            <ErrorMessage
                                                                name={`InvoiceInfo.${index}.address`}
                                                                component="div"
                                                                className="field-error text-start text-red-600"
                                                            />
                                                            {/* <label htmlFor="companyAddress" className="block my-2 text-sm font-medium text-start">Địa chỉ</label>
                                                            <input placeholder="44 Lê Thái Tổ, phường Hàng Trống, Hoàn Kiếm, Hà Nội" type="text" id="companyAddress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required /> */}
                                                        </div>

                                                    </div>
                                                    <div className=" grid grid-cols-1 md:grid-cols-6 gap-4 px-3 mb-5">
                                                        <div className=' col-span-1 md:col-span-2'>
                                                            <label htmlFor={`InvoiceInfo.${index}.receiver`} className="block mb-2 text-sm font-medium text-start">Người nhận hóa đơn</label>
                                                            <Field
                                                                name={`InvoiceInfo.${index}.receiver`}
                                                                placeholder="Hoàng Văn Hải"
                                                                type="text"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            <ErrorMessage
                                                                name={`InvoiceInfo.${index}.receiver`}
                                                                component="div"
                                                                className="field-error text-start text-red-600"
                                                            />
                                                            {/* <label htmlFor="first_name" className="block my-2 text-sm font-medium text-start">Người nhận hóa đơn</label>
                                                            <input placeholder="Hoàng Văn Hải" type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required /> */}
                                                        </div>
                                                        <div className=' col-span-1 md:col-span-2'>
                                                            <label htmlFor={`InvoiceInfo.${index}.city`} className="block mb-2 text-sm font-medium text-start">Thành Phố</label>
                                                            <Field
                                                                name={`InvoiceInfo.${index}.city`}
                                                                placeholder="Đà Nẵng"
                                                                type="text"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            <ErrorMessage
                                                                name={`InvoiceInfo.${index}.city`}
                                                                component="div"
                                                                className="field-error text-start text-red-600"
                                                            />
                                                            {/* <label htmlFor="first_name" className="block my-2 text-sm font-medium text-start">Số điện thoại</label>
                                                            <input placeholder="09123123123" type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required /> */}
                                                        </div>
                                                        <div className=' col-span-1 md:col-span-2'>
                                                            <label htmlFor={`InvoiceInfo.${index}.email`} className="block mb-2 text-sm font-medium text-start">Email</label>
                                                            <Field
                                                                name={`InvoiceInfo.${index}.email`}
                                                                placeholder="Hoanghai@gmail.com"
                                                                type="email"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            <ErrorMessage
                                                                name={`InvoiceInfo.${index}.email`}
                                                                component="div"
                                                                className="field-error text-start text-red-600"
                                                            />
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
                            className=" mr-5 text-white bg-red-600 w-full hover:bg-red-200 focus:ring-4 focus:ring-red-300 font-medium rounded-sm text-base h-12 md:mt-10"
                        >Đặt vé</button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

