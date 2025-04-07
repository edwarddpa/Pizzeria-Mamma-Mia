import React from 'react'

const Profile = () => {
  return (

    <div className='background h-100'>

    <div className="container  py-5  ">

    <div className="row align-items-center">
      <div className="col-xl-12 col-lg-12 col-md-12 col-12">
        <div className="pt-20 rounded-top" >
        </div>
        <div className="card rounded-bottom smooth-shadow-sm">
          <div className="d-flex align-items-center justify-content-between
            pt-4 pb-6 px-4">
            <div className="d-flex align-items-center p-5">
              <div className="avatar-xxl avatar-indicators avatar-online me-2
                position-relative d-flex justify-content-end
                align-items-end mt-n10">
                <img src="data:image/png;base64,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" className="avatar-xxl
                rounded-circle border border-2 " alt="Image"/>
              </div>
              <div className="lh-1">
                <h2 className="mb-0 text-dark">Usuario
                  <a href="#!" className="text-decoration-none">
  
                  </a>
                </h2>
                <p className="mb-0 d-block text-secondary">example@gmail.com</p>
              </div>
            </div>
            <div>
              <a href="#" className="btn btn-outline-primary
                d-none d-md-block">Cerrar sesión</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Profile
