import React from 'react'
import * as xd from '../../util/available'

const list = xd.map(x =>
  <div key={x.name} className="rounded bg-secondary-bg overflow-hidden shadow-lg">
    <img className="w-full" src={x.image} alt="Mountain"/>
    <div className="p-4">
      <div className="font-bold text-yellow-500 text-xl mb-2">GET</div>
        <p className="text-bookmark-white text-base font-semibold">
          {x.endpoint}
        </p>
    </div>
    <div className="px-3 py-1 mr-2 mb-2">
      <a href={`/api/v1/endpoint/${x.name}/`}>
        <button type="button" className="btn2 btn-purple hover:bg-white hover:text-black">
          Ver
        </button>
      </a>
    </div>
  </div>
)

const Cards = () => {

	return (
    <div className="bg-primary-bg">
      <div className="container p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {list}
      </div>
    </div>
	)
}

export default Cards