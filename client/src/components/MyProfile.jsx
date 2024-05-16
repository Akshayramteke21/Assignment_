
import React from 'react'

function MyProfile() {
  return (
    <div className="container">

      <div className="row">
        <h2 className='text-center  text-uppercase shadow bg-secondary font-monospace w-bold' > Profile</h2>
      </div>


      <div className="row mt-3">

           <table className='table table-hover'>

                <thead>

                     <tr>
                      <td>Sr.no</td>
                      <td>FirstName</td>
                      <td>LastName</td>

                      <td>Email</td>

                     </tr>

                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Akshay</td>
                    <td>Ramteke</td>
                        <td>akshayramteke378@gmail.com</td>
                  </tr>
                </tbody>

           </table>

      </div>

    </div>
  )
}

export default MyProfile






