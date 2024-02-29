import React from 'react'

function Contact() {
  return (
    <div className="container-fluid my-5 ">
        <div className="row ">
            <h1  className='my-2  text-center text-uppercase'>Contact</h1>
        </div>
        <div className="row">
            <div className="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943337.8773065775!2d73.14689457533217!3d17.951649586234765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc12186d8b02351%3A0xcf1d9501affc5ea8!2sCode%20Chakra%20Tech!5e0!3m2!1smr!2sin!4v1709117230699!5m2!1smr!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-md-6 address-info">
            <h1>Address</h1>
                <p>Shop No. B2, Royal Arcade, 100 Feet Rd, opp. Federal Bank, Savarkar Colony, Vishrambag, Sangli, Sangli Miraj Kupwad, Maharashtra 416415</p>
            </div>
        </div>
    </div>
  )
}

export default Contact