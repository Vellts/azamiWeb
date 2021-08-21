import React from 'react'
import { useForm } from 'react-hook-form'

const Bugs = () => {

	const { register, handleSubmit, formState: { errors } } = useForm()
	const onSubmit = (data) => {
		let contenido = {
			"embeds": [{
				"title": `Usuario: ${data.nickname}`,
				"description": `**Servidor: \`${data.serverId}\`**`,
				"fields": [{name: "Descripción del bug", value: data.bug}]
			}]
		}

		fetch("https://canary.discord.com/api/webhooks/877971410604134421/oaz3_unqkvqGcEPeMlzKv0cgwf11VcehaH7AVyULbeWZI6EC34qiQBbALUNLFblEr117", {
			method: "POST",
			body: JSON.stringify(contenido),
			headers: {
				"Content-Type": "application/json"
			}
		})
	}

	return (
	<div className="bg-primary-bg">
	<div className="container max-w-6xl py-20 px-12 lg:px-24">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded px-8 pt-8 pb-8 mb-4 flex flex-col">
      <h2 className="font-bold text-bookmark-red text-7xl md:text-4 lg:text-7xl text-center lg:text-left mb-6">
        Bugs
      </h2>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="uppercase tracking-wide text-bookmark-grey text-xs font-bold mb-2">
              Nickname
            </label>
            <input {...register("nickname", { required: true, maxLength: 20 })} className="w-full bg-secondary-bg text-bookmark-grey rounded py-3 px-4 mb-3 border-none outline-none" type="text" placeholder="Vellt#4150" />
            {errors.nickname && <div>
              <span className="text-red-500 text-xs italic">
                No has ingresado tu username o te has sobrepasado el límite de carácteres (20).
              </span>
            </div>}
          </div>
          <div className="md:w-1/2 px-3">
            <label className="uppercase tracking-wide text-bookmark-grey text-xs font-bold mb-2">
              ID del Servidor
            </label>
            <input {...register("serverId", { required: true, maxLength: 20 })} className="w-full bg-secondary-bg text-bookmark-grey border border-gray-200 rounded py-3 px-4 mb-3 border-none outline-none" type="number" placeholder="694981581202260059" />
          	{errors.serverId && <div>
              <span className="text-red-500 text-xs italic">
                No has ingresado la ID del servidor o te has sobrepasado el límite de carácteres (20).
              </span>
            </div>}
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label className="uppercase tracking-wide text-bookmark-grey text-xs font-bold mb-2">
              Bug
            </label>
            <textarea {...register("bug", { required: true, maxLength: 200 })} className="w-full bg-secondary-bg text-bookmark-grey border border-gray-200 rounded py-3 px-4 mb-3 border-none outline-none" cols="40" rows="10" type="text" placeholder="Describe el bug..." />
          	{errors.bug && <div>
              <span className="text-red-500 text-xs italic">
                No has ingresado la descripción del bug o te has sobrepasado el límite de carácteres (200).
              </span>
            </div>}
          </div>
        </div>
        <div className="-mx-3 md:flex mt-2">
          <div className="md:w-full px-3">
            <button type="submit" onClick={() => window.location.reload(false)} className="md:w-full btn btn-purple hover:bg-bookmark-white hover:text-black">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
  </div>
	)
}
//onClick={() => window.location.reload(false)}
/*<form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nickname", { required: true, maxLength: 20 })} />
      <input {...register("bug", { required: true })} />
      <input {...register("idServidor", { pattern: /^[A-Za-z]+$/i })} />
      {errors.bug && <span>This field is required</span>}
      <button  type="submit">xd</button>
    </form>*/
export default Bugs