import React from 'react'
import 'aos/dist/aos.css'; 
import AOS from 'aos';

import details1 from '../assets/Images/details-1.png'
import details2 from '../assets/Images/details-2.png'
import details3 from '../assets/Images/details-3.png'
import details4 from '../assets/Images/details-4.png'

import { BiCheck } from 'react-icons/bi';


export default function Details() {
    AOS.init();

  return (
    <>
    <section id="details" className="details">
      <div className="container">

        {/* First Content Row */}
        <div className="row content">
          <div className="col-md-4" data-aos="fade-right">
            <img src={details1} className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 pt-4" data-aos="fade-up">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check"><BiCheck /></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check"><BiCheck /></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bi bi-check"><BiCheck /></i>  Iure at voluptas aspernatur dignissimos doloribus repudiandae.</li>
              <li><i className="bi bi-check"><BiCheck /></i>  Est ipsa assumenda id facilis nesciunt placeat sed doloribus praesentium.</li>
            </ul>
            <p>
              Voluptas nisi in quia excepturi nihil voluptas nam et ut. Expedita omnis eum consequatur non. Sed in asperiores aut repellendus. Error quisquam ab maiores. Quibusdam sit in officia
            </p>
          </div>
        </div>

        {/* Second Content Row */}
        <div className="row content">
          <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
            <img src={details2} className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
            <h3>Corporis temporibus maiores provident</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p>
              Inventore id enim dolor dicta qui et magni molestiae. Mollitia optio officia illum ut cupiditate eos autem. Soluta dolorum repellendus repellat amet autem rerum illum in. Quibusdam occaecati est nisi esse. Saepe aut dignissimos distinctio id enim.
            </p>
          </div>
        </div>

        {/* Third Content Row */}
        <div className="row content">
          <div className="col-md-4" data-aos="fade-right">
            <img src={details3} className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 pt-5" data-aos="fade-up">
            <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
            <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
            <ul>
              <li><i className="bi bi-check"><BiCheck /></i>  Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check"><BiCheck /></i>  Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bi bi-check"><BiCheck /></i>  Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
            </ul>
            <p>
              Qui consequatur temporibus. Enim et corporis sit sunt harum praesentium suscipit ut voluptatem. Et nihil magni debitis consequatur est.
            </p>
            <p>
              Suscipit enim et. Ut optio esse quidem quam reiciendis esse odit excepturi. Vel dolores rerum soluta explicabo vel fugiat eum non.
            </p>
          </div>
        </div>

        {/* Fourth Content Row */}
        <div className="row content">
          <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
            <img src={details4} className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
            <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
            <ul>
              <li><i className="bi bi-check"><BiCheck /></i> Et praesentium laboriosam architecto nam .</li>
              <li><i className="bi bi-check"><BiCheck /></i> Eius et voluptate. Enim earum tempore aliquid. Nobis et sunt consequatur. Aut repellat in numquam velit quo dignissimos et.</li>
              <li><i className="bi bi-check"><BiCheck /></i> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}
