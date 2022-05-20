import React from 'react'

const Viewall = () => {
  return (
    <div>
        <div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                  {loadstatus ? <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>: <table class="table table-primary table-striped">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>                                                     
                        <th scope="col">NAME</th>                                                     
                        <th scope="col">FRIEND NAME</th>
                        <th scope="col">FRIEND NICK NAME</th>
                        <th>DESCIPTION</th>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                        </tr>
                    </thead>
                    <tbody>
                        {viewlist.map((value,key)=>{
                         return <tr>
                          <td>{value.setId}</td>
                          <td>{value.setName}</td>
                          <td>{value.setFname}</td>
                          <td>{value.setFnn}</td>
                          <td>{value.setDes}</td>
                        </tr>
                        })}
                        
                        
                        
                    </tbody>
                    </table>}
                



                    </div>
               

              </div>

            </div>

          </div>

        </div>
    </div>
  )
}

export default Viewall