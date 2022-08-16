import {Formik} from 'formik'
import React from 'react'

const Login = () => {

  // 1. submit function
  const loginSubmit = (formdata) => {
    console.log(formdata);
  }

  // 2. Locate/Create form tag
  // 3. use formik on form tag

  return (
    <div>
        <>
  {/* Section: Design Block */}
  <section className="text-center text-lg-start">
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  "
      }}
    />
    {/* Jumbotron */}
    <div className="container py-4">
      <div className="row g-0 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div
            className="card cascading-right"
            style={{
              background: "hsla(0, 0%, 100%, 0.55)",
              backdropFilter: "blur(30px)"
            }}
          >
            <div className="card-body p-5 shadow-5 text-center">
              <h2 className="fw-bold mb-5">Sign up now</h2>
              <Formik initialValues={{email:'',password:''}} onSubmit={loginSubmit}>
                  { (formikoptions) => (
                    <form>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    
                    
                    {/* Register buttons */}
                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-google" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-twitter" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-github" />
                      </button>
                    </div>
                  </form>
                  ) }
                </Formik>
              
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0">
          <img
            src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
            className="w-100 rounded-4 shadow-4"
            alt=""
          />
        </div>
      </div>
    </div>
    {/* Jumbotron */}
  </section>
  {/* Section: Design Block */}
</>

    </div>
  )
}

export default Login