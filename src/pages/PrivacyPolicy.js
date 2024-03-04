import React,{useEffect} from 'react'

export default function PrivacyPolicy() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <section id="privacypolicy" className="privacypolicy">
          <div className="container">
              <div className="section-title mt-3">
              <h2>Privacy Policy</h2>
              </div>
          </div>

          <div className="container">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nam aspernatur rerum, vero numquam perferendis ipsa sequi explicabo totam quod.</p>
              
              <h4>Lorem ipsum dolor sit amet?</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quisquam obcaecati libero voluptatum, explicabo, qui voluptatem quos ex beatae autem ipsum quas et sed! Laudantium harum tempore distinctio voluptas asperiores!</p>
              
              <h4>Lorem ipsum dolor sit amet?</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi aliquam odio tenetur error perferendis blanditiis itaque hic ipsam dolorum quisquam repellendus expedita ex molestiae fugit placeat repellat, ullam quis doloremque qui cum dolorem unde? Similique ducimus distinctio officia vitae laborum, praesentium ipsum aspernatur. Quisquam dolor culpa laborum obcaecati quaerat quam eligendi voluptates ex, perspiciatis excepturi deserunt cum ab aperiam, officiis necessitatibus sunt soluta aliquid neque enim rerum. Iure totam iusto tenetur. Enim perferendis velit officia voluptate, ab nostrum impedit assumenda corrupti necessitatibus ratione molestias! Aperiam exercitationem quaerat quas saepe voluptates ut similique qui totam temporibus, in eos maxime at?</p>
          
          </div>
      </section>
    </>
  )   
}
