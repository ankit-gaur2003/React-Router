import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      AS Creation Ltd. is a dynamic and innovative company dedicated to offering high-quality solutions in
                       [insert industry, e.g., fashion, technology, design, manufacturing, etc.]. Established with a vision to
                        lead the market through creativity, precision, and customer-first approach, Ankit Creation Ltd. has 
                        rapidly built a reputation for delivering excellence across its product lines
                      </p>
                      <p className="mt-4 text-gray-600">
                      The company is known for its cutting-edge [technology/fabrics/designs] and continues to expand its offerings
                       to meet evolving market demands.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}