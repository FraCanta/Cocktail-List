import { Form, Field, Formik } from "formik";
import Button from '@mui/material/Button';

export default function Forms(){
    const onSubmit = (value,formikBag) => {
        console.log(value)
        console.log(formikBag)
        //formikBag.setSubmitting(false)
    }

    return <div>
        <h1>Form</h1>
        <Formik 
            initialValues={{ 
                name:"Pippo" }} 
                onSubmit={onSubmit}
        >
            {formikBag =>{
                return <Form>
                        {formikBag.isSubmitting ? "Loading" : "Not loading"}
                        <Field name="name" type="text" />
                        <Field name="email" type="text" />
                        <Button disabled={!formikBag.dirty} type="submit">Button</Button>
                        <br/>
                        Nome:{formikBag.values.name}
                        <br/>
                        Email:{formikBag.values.email}
                        <br/>
                        Age:{formikBag.values.age}
                    </Form>
            }}
        </Formik>
    </div>
}