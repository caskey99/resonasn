import React from 'react';
import PageHero from '@/components/layout/PageHero/PageHero';

export default function ContactPage() {
  return (
    <>
      <PageHero title="Контакты" caption="Свяжитесь с нами" />
      
      <div id="main-content">
        <div id="main-page-content" className="content-max-width" style={{ padding: '100px 80px' }}>
           <div style={{ textAlign: 'center' }}>
             <h3>hello@harington.com</h3>
             <p>+7 (999) 000-00-00</p>
             <p>Москва, ул. Пушкина, д. Колотушкина</p>
           </div>
        </div>
      </div>
    </>
  );
}