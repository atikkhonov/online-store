import React from 'react'

const ContactsPage = () => {
  return (
    <div className="contacts">
      <div className="container">
        <div className="phone-numbers">
          <h2>Телефоны</h2>
          <h2 className="phone__number">+7 (999) 666-13-13</h2>
          <h2 className="phone__number">+7 (999) 666-33-33</h2>
        </div>
        <div className="rent">
          <h2>Аренда</h2>
          <p><span>rent.lorem20@core.com</span> - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis omnis deleniti repellat reprehenderit quidem nemo a consectetur ullam illum officiis?</p>
        </div>
        <div className="job">
          <h2>Работа</h2>
          <p><span>job.lorem20@core.com</span> - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id in ipsum veniam iste.</p>
          <p> - Lorem, ipsum dolor.</p>
          <p> - Lorem ipsum dolor sit.</p>
        </div>
        <div className="provider">
          <h2>Поставщики</h2>
          <p><span>provider.lorem20@core.com</span> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, id ea placeat facilis sequi perferendis accusamus inventore fuga.</p>
        </div>
        <div className="ps">
          <p>Lorem ipsum dolor "sit amet consectetur".</p>
        </div>
      </div>
    </div>
  )
}

export default ContactsPage