"use client"
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';





export default function DepartureBaggagesInfomation(
    { departureBaggages, typeOfTicket, Adult, Children, Infant, getListPassengers }:
        { departureBaggages: any, typeOfTicket: any, Adult: any, Children: any, Infant: any, getListPassengers: (e: any) => void }
) {

    /* Audult form */
    let AudultDepartureBaggagesInfomation: any = []
    {
        Array.from(Array(Adult), (e, i) => {
            AudultDepartureBaggagesInfomation.push({
                "FirstName": "",
                "LastName": "",
                "Type": "",
                "Gender": "1",
                "Birthday": "",
                "Phone": "",
                "Email": "",
                "BaggageDeparture": "",
                "BaggageReturn": ""
            })
        })
    }

    let ChildDepartureBaggagesInfomation: any = []
    {
        Array.from(Array(Children), (e, i) => {
            ChildDepartureBaggagesInfomation.push({
                "FirstName": "",
                "LastName": "",
                "Type": "",
                "Gender": "1",
                "Birthday": "",
                "Phone": "",
                "Email": "",
                "BaggageDeparture": "",
                "BaggageReturn": ""
            })
        })
    }

    let InfantDepartureBaggagesInfomation: any = []
    {
        Array.from(Array(Infant), (e, i) => {
            InfantDepartureBaggagesInfomation.push({
                "FirstName": "",
                "LastName": "",
                "Type": "",
                "Gender": "1",
                "Birthday": "",
                "Phone": "",
                "Email": "",
                "BaggageDeparture": "",
                "BaggageReturn": ""
            })
        })
    }

    const initialValuesAudultDepartureBaggagesInfomation = {
        adultbaggages: AudultDepartureBaggagesInfomation,
        childbaggages: ChildDepartureBaggagesInfomation,
        infanbaggages: InfantDepartureBaggagesInfomation
    };




    return (
        <>
            <Formik
                initialValues={initialValuesAudultDepartureBaggagesInfomation}
                onSubmit={async (values) => {
                    // await new Promise((r) => setTimeout(r, 500));
                    // alert(JSON.stringify(values, null, 2));
                    // console.log(values.adultbaggages);
                    getListPassengers(values.adultbaggages)
                }}
            >
                {({ values }) => (
                    <Form>
                        <FieldArray name="adultbaggages">
                            {({ insert, remove, push }) => (
                                <div className=" flex flex-col justify-start ...">
                                    {values.adultbaggages.length > 0 &&

                                        values.adultbaggages.map((e: any, index: number) => (
                                            <>
                                                <div className=" flex flex-col justify-start ...">
                                                    <p className=" text-start px-3 text-md my-3 text-red-600 font-bold">Người lớn {index + 1}</p>
                                                    <div className=" grid grid-cols-6 gap-4 px-3">
                                                        <div className="col-span-2">
                                                            <label htmlFor={`adultbaggages.${index}.gender`} className="block mb-2 text-sm font-medium text-start">Giới tính</label>
                                                            <Field as="select" name={`adultbaggages.${index}.gender`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                <option value="1">Nam</option>
                                                                <option value="2">Nữ</option>
                                                            </Field>
                                                            <ErrorMessage
                                                                name={`adultbaggages.${index}.gender`}
                                                                component="div"
                                                                className="field-error"
                                                            />
                                                        </div>
                                                        <div className=' col-span-2'>
                                                            <label htmlFor={`adultbaggages.${index}.FirstName`} className="block mb-2 text-sm font-medium text-start">Họ</label>
                                                            <Field
                                                                name={`adultbaggages.${index}.FirstName`}
                                                                placeholder="Hoang"
                                                                type="text"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            <ErrorMessage
                                                                name={`adultbaggages.${index}.FirstName`}
                                                                component="div"
                                                                className="field-error"
                                                            />
                                                        </div>
                                                        <div className=' col-span-2'>
                                                            <label htmlFor={`adultbaggages.${index}.LastName`} className="block mb-2 text-sm font-medium text-start">Tên đệm và tên chính</label>
                                                            <Field
                                                                name={`adultbaggages.${index}.LastName`}
                                                                placeholder="Van Hai"
                                                                type="text"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            <ErrorMessage
                                                                name={`adultbaggages.${index}.LastName`}
                                                                component="div"
                                                                className="field-error"
                                                            />
                                                        </div>
                                                    </div>
                                                    {typeOfTicket == 1 &&
                                                        <div className=" flex flex-col px-3 py-5">

                                                            <Field
                                                                as="select"
                                                                name={`adultbaggages.${index}.departureBaggages`}
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                <option selected={true} value="0">Không thêm hành lý chiều đi</option>
                                                                {departureBaggages.map((e: any, i: number) => {
                                                                    return (
                                                                        <option key={'departureBaggages' + i} value={e.Code}>Mua {e.Code} kg hành lý ({e.Price.toLocaleString()} VND)</option>
                                                                    )
                                                                })}
                                                            </Field>
                                                        </div>
                                                    }


                                                </div>
                                            </>
                                        ))

                                    }

                                    {values.childbaggages.length > 0 &&

                                        values.childbaggages.map((e: any, index: number) => (
                                            <>
                                                <div className=" flex flex-col justify-start ...">
                                                    <p className=" text-start px-3 text-md my-3 text-red-600 font-bold">Trẻ em {index + 1}</p>
                                                    <div className=" grid grid-cols-6 gap-4 px-3">
                                                        <div className="col-span-1">
                                                            <label htmlFor={`childbaggages.${index}.gender`} className="block mb-2 text-sm font-medium text-start">Giới tính</label>
                                                            <Field as="select" name={`childbaggages.${index}.gender`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                <option value="1">Nam</option>
                                                                <option value="2">Nữ</option>
                                                            </Field>
                                                            <ErrorMessage
                                                                name={`childbaggages.${index}.gender`}
                                                                component="div"
                                                                className="field-error"
                                                            />
                                                        </div>
                                                        <div className=' col-span-1'>
                                                            <label htmlFor={`childbaggages.${index}.FirstName`} className="block mb-2 text-sm font-medium text-start">Họ</label>
                                                            <Field
                                                                name={`childbaggages.${index}.FirstName`}
                                                                placeholder="Hoang"
                                                                type="text"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            <ErrorMessage
                                                                name={`childbaggages.${index}.FirstName`}
                                                                component="div"
                                                                className="field-error"
                                                            />
                                                        </div>
                                                        <div className=' col-span-2'>
                                                            <label htmlFor={`childbaggages.${index}.LastName`} className="block mb-2 text-sm font-medium text-start">Tên đệm và tên chính</label>
                                                            <Field
                                                                name={`childbaggages.${index}.LastName`}
                                                                placeholder="Van Hai"
                                                                type="text"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            <ErrorMessage
                                                                name={`childbaggages.${index}.LastName`}
                                                                component="div"
                                                                className="field-error"
                                                            />
                                                        </div>
                                                        <div className=' col-span-2'>
                                                            <label htmlFor={`childbaggages.${index}.Birthday`} className="block mb-2 text-sm font-medium text-start">Ngày sinh</label>
                                                            <Field
                                                                name={`childbaggages.${index}.Birthday`}
                                                                placeholder="Van Nam"
                                                                type="date"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            <ErrorMessage
                                                                name={`childbaggages.${index}.Birthday`}
                                                                component="div"
                                                                className="field-error"
                                                            />
                                                        </div>
                                                    </div>
                                                    {typeOfTicket == 1 &&
                                                        <div className=" flex flex-col px-3 py-5">

                                                            <Field
                                                                as="select"
                                                                name={`childbaggages.${index}.departureBaggages`}
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                <option selected={true} value="0">Không thêm hành lý chiều đi</option>
                                                                {departureBaggages.map((e: any, i: number) => {
                                                                    return (
                                                                        <option key={'departureBaggages' + i} value={e.Code}>Mua {e.Code} kg hành lý ({e.Price.toLocaleString()} VND)</option>
                                                                    )
                                                                })}
                                                            </Field>
                                                        </div>
                                                    }


                                                </div>
                                            </>
                                        ))

                                    }

                                    {values.infanbaggages.length > 0 &&

                                        values.infanbaggages.map((e: any, index: number) => (
                                            <>
                                                <div className=" flex flex-col justify-start ...">
                                                    <p className=" text-start px-3 text-md my-3 text-red-600 font-bold">Em bé {index + 1}</p>
                                                    <div className=" grid grid-cols-6 gap-4 px-3">
                                                        <div className="col-span-1">
                                                            <label htmlFor={`infanbaggages.${index}.gender`} className="block mb-2 text-sm font-medium text-start">Giới tính</label>
                                                            <Field as="select" name={`infanbaggages.${index}.gender`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                <option value="1">Nam</option>
                                                                <option value="2">Nữ</option>
                                                            </Field>
                                                            <ErrorMessage
                                                                name={`infanbaggages.${index}.gender`}
                                                                component="div"
                                                                className="field-error"
                                                            />
                                                        </div>
                                                        <div className=' col-span-1'>
                                                            <label htmlFor={`infanbaggages.${index}.FirstName`} className="block mb-2 text-sm font-medium text-start">Họ</label>
                                                            <Field
                                                                name={`infanbaggages.${index}.FirstName`}
                                                                placeholder="Hoang"
                                                                type="text"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            <ErrorMessage
                                                                name={`infanbaggages.${index}.FirstName`}
                                                                component="div"
                                                                className="field-error"
                                                            />
                                                        </div>
                                                        <div className=' col-span-2'>
                                                            <label htmlFor={`infanbaggages.${index}.LastName`} className="block mb-2 text-sm font-medium text-start">Tên đệm và tên chính</label>
                                                            <Field
                                                                name={`infanbaggages.${index}.LastName`}
                                                                placeholder="Van Hai"
                                                                type="text"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            <ErrorMessage
                                                                name={`infanbaggages.${index}.LastName`}
                                                                component="div"
                                                                className="field-error"
                                                            />
                                                        </div>
                                                        <div className=' col-span-2'>
                                                            <label htmlFor={`infanbaggages.${index}.Birthday`} className="block mb-2 text-sm font-medium text-start">Ngày sinh</label>
                                                            <Field
                                                                name={`infanbaggages.${index}.Birthday`}
                                                                placeholder="Van Nam"
                                                                type="date"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            />
                                                            <ErrorMessage
                                                                name={`infanbaggages.${index}.Birthday`}
                                                                component="div"
                                                                className="field-error"
                                                            />
                                                        </div>
                                                    </div>
                                                    {typeOfTicket == 1 &&
                                                        <div className=" flex flex-col px-3 py-5">

                                                            <Field
                                                                as="select"
                                                                name={`infanbaggages.${index}.departureBaggages`}
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                <option selected={true} value="0">Không thêm hành lý chiều đi</option>
                                                                {departureBaggages.map((e: any, i: number) => {
                                                                    return (
                                                                        <option key={'departureBaggages' + i} value={e.Code}>Mua {e.Code} kg hành lý ({e.Price.toLocaleString()} VND)</option>
                                                                    )
                                                                })}
                                                            </Field>
                                                        </div>
                                                    }


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
                        >Tiếp tục</button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

