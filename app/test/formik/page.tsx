"use client"
import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';

// const initialValues = {
//   friends: [
//     {
//       name: '',
//     },
//   ],
// };

const initialValues = {
  friends: [
    {
      gender: '1',
      fullname: 'a',
      departureBaggages: '20',
    },
  ],
};

function App() {
  return (
    <div className=' mt-28 bg-white mx-auto rounded-3xl p-5'>
      <h1>Invite friends</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          // alert(JSON.stringify(values, null, 2));
          console.log(values.friends);
        }}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="friends">
              {({ insert, remove, push }) => (
                <div className=" flex flex-col justify-start ...">
                  {values.friends.length > 0 &&

                    values.friends.map((friend, index) => (
                      <>
                        <div className=" grid grid-cols-6 gap-4 px-3" key={index}>
                          <div className="col-span-2">
                            <label htmlFor={`friends.${index}.gender`}>Name</label>

                            <Field as="select" name={`friends.${index}.gender`}>
                              <option value="1">Nam</option>
                              <option value="2">Nữ</option>
                            </Field>
                            <ErrorMessage
                              name={`friends.${index}.gender`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                          <div className="col-span-4">
                            <label htmlFor={`friends.${index}.fullname`}>Name</label>
                            <Field
                              name={`friends.${index}.fullname`}
                              placeholder="Jane Doe"
                              type="text"
                            />
                            <ErrorMessage
                              name={`friends.${index}.fullname`}
                              component="div"
                              className="field-error"
                            />
                          </div>



                        </div>
                        <div className="flex flex-col px-3 py-5">
                          <label htmlFor={`friends.${index}.departureBaggages`}>Hành lý chiều đi</label>

                          <Field as="select" name={`friends.${index}.departureBaggages`}>
                            <option value="20">Mua {'e.Code'} kg hành lý ({'e.Price.toLocaleString()'} VND)</option>
                            <option value="20">Mua {'e.Code'} kg hành lý ({'e.Price.toLocaleString()'} VND)</option>
                            <option value="20">Mua {'e.Code'} kg hành lý ({'e.Price.toLocaleString()'} VND)</option>
                            <option value="20">Mua {'e.Code'} kg hành lý ({'e.Price.toLocaleString()'} VND)</option>
                            <option value="20">Mua {'e.Code'} kg hành lý ({'e.Price.toLocaleString()'} VND)</option>
                          </Field>
                          <ErrorMessage
                            name={`friends.${index}.gender`}
                            component="div"
                            className="field-error"
                          />
                        </div>
                      </>
                    ))}

                </div>
              )}
            </FieldArray>
            <button type="submit">Invite</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;