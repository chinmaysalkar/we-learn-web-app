import React, { useState, useEffect } from 'react';
import { BiHelpCircle, BiChevronDown, BiChevronUp, BiChevronDownCircle } from 'react-icons/bi';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function FAQ() {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init();
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Non consectetur a erat nam at lectus urna duis?',
      answer: 'Feugiat pretium nibh ipsum consequat...',
    },
    {
      question: 'Feugiat scelerisque varius morbi enim nunc?',
      answer: 'Feugiat pretium nibh ipsum consequat...',
    },
    {
      question: 'Dolor sit amet consectetur adipiscing elit?',
      answer: 'Eleifend mi in nulla posuere sollicitudin...',
    },
    {
      question: 'Tempus quam pellentesque nec nam aliquam sem et tortor consequat?',
      answer: 'Molestie a iaculis at erat pellentesque...',
    },
    {
      question: 'Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?',
      answer: 'Laoreet sit amet cursus sit amet dictum...',
    },
  ];

  return (
    <section id="faq" className="faq section-bg" data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="accordion-list">
          <ul>
            {faqItems.map((item, index) => (
              <li key={index} data-aos="fade-up">
                <i className="bx bx-help-circle icon-help"><BiHelpCircle/></i>
                <a
                  className={`mt-2 collapsed ${activeIndex === index ? '' : 'collapse'}`}
                  href="#"
                  onClick={(e) => {e.preventDefault(); toggleAccordion(index);}}
                >
                  {item.question}
                  {activeIndex === index ? <BiChevronUp className="icon-close" /> : <BiChevronDown className="icon-show" />}
                </a>
                <div
                  className={`collapse ${activeIndex === index ? 'show' : ''}`}
                  data-bs-parent=".accordion-list"
                >
                  <p className='mx-4'>{item.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
