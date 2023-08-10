import Header from './Header'
import Footer from './Footer'


export default function ({ children }) {
    return (
      <>
        <div className="flex flex-col min-h-screen">
          <div className="">
            <a href="#mainContent" className="sr-only">
              Skip to content
            </a>
          </div>
          <Header/>
          <main role="main" id="mainContent" className="flex-grow">
            {children}
          </main>
        </div>
        <Footer/>
      </>
    );
  }