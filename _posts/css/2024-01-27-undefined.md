---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRYGRKZ2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCv2AyS8bC5ZSBNcqhAPRV2FNTHSUj3fXcBoV0eNkE6IQIgG8SLIyYiyqeep%2BbtOKFPz5os0RXYRcyHeFI08KfQVrMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHS2p2rCzqvE5k1TsyrcA64EidMO4XpIqSITWziZXsjNaB%2Bi9D9hva1FiSzhHPUJGX91Vfxh2YbkrFhCbPLlHm0YYl%2BJmmb19e%2B4ohsxO96mQ9fe0zLzdqNUaWFjdWsbkGdSWzx%2BQly73ECtxR0UFc2hM0AHJsvLAYnPl7w6aRiqO7ZtR33algyNcU2sBHzAn2xI3PP4iG1U2ik3spvrT8KOPrsqB2QFGtmJGWtNIjmvX061XC6FBiJZdykFnza7Y90y2MMUfYikSevYUusav%2FPtI3kfr1VSdPvD%2BxSWi6TsHFUAeGBO2YJTbPBvStyXm2zON0LmOX%2FG0vONqmzh0I9Br%2BSIRFLzmMzLhL4ua0j1ZBlc22WewKAWwkvnroQz5nnPxDAhLD%2BzJeHoRU0yu4QKj7FIqhPjwCkuxotrIOerLz%2FUXWstmiI0jDoq2BPujuaGyZhIbmqPCZcuXlHh8NZ5Svj5iSS6IXq7b1J5UqWqfVK%2FpAkmM7Ny90MztetoxVEUsc0oWosZK1E9jRkpqM%2Bp%2BV73fN5qf3QJJRdibg6zTnLJiJC%2B%2BUDi5I8AIsMzIXDGcAvC3h8QZIgDDNSsti76w3UyjRTau65nff0PdqIU8HTcsvO07UAR%2BOnFtADUunLMsxGsZor6ZhztMLDrwMkGOqUBMST%2BYzYZpJJ6%2Fhd9plmTT9Vs9aw2nNBkHaK5as%2BfJctS%2FSlmqkoFU9frRljklY5fJtFrc1vWrVzSZ%2FWrtgqWM125LohTkymWyKpvr7oWaS69Mc5l8wqgV0CzkK3AWnK5p6naepr8MQWxTpYF8cSTH0LrRJI2hv%2BPK1oC9Mh9ThCbVaLgeYopO2%2BZIOxEO%2B3%2FGQ5%2BAuZEnzGbAFOE2fjGids1N%2FyD&X-Amz-Signature=29ba414f3061db22b91811174dd3373ebbc86bcc4aa12d9727d8b832493629e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRYGRKZ2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCv2AyS8bC5ZSBNcqhAPRV2FNTHSUj3fXcBoV0eNkE6IQIgG8SLIyYiyqeep%2BbtOKFPz5os0RXYRcyHeFI08KfQVrMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHS2p2rCzqvE5k1TsyrcA64EidMO4XpIqSITWziZXsjNaB%2Bi9D9hva1FiSzhHPUJGX91Vfxh2YbkrFhCbPLlHm0YYl%2BJmmb19e%2B4ohsxO96mQ9fe0zLzdqNUaWFjdWsbkGdSWzx%2BQly73ECtxR0UFc2hM0AHJsvLAYnPl7w6aRiqO7ZtR33algyNcU2sBHzAn2xI3PP4iG1U2ik3spvrT8KOPrsqB2QFGtmJGWtNIjmvX061XC6FBiJZdykFnza7Y90y2MMUfYikSevYUusav%2FPtI3kfr1VSdPvD%2BxSWi6TsHFUAeGBO2YJTbPBvStyXm2zON0LmOX%2FG0vONqmzh0I9Br%2BSIRFLzmMzLhL4ua0j1ZBlc22WewKAWwkvnroQz5nnPxDAhLD%2BzJeHoRU0yu4QKj7FIqhPjwCkuxotrIOerLz%2FUXWstmiI0jDoq2BPujuaGyZhIbmqPCZcuXlHh8NZ5Svj5iSS6IXq7b1J5UqWqfVK%2FpAkmM7Ny90MztetoxVEUsc0oWosZK1E9jRkpqM%2Bp%2BV73fN5qf3QJJRdibg6zTnLJiJC%2B%2BUDi5I8AIsMzIXDGcAvC3h8QZIgDDNSsti76w3UyjRTau65nff0PdqIU8HTcsvO07UAR%2BOnFtADUunLMsxGsZor6ZhztMLDrwMkGOqUBMST%2BYzYZpJJ6%2Fhd9plmTT9Vs9aw2nNBkHaK5as%2BfJctS%2FSlmqkoFU9frRljklY5fJtFrc1vWrVzSZ%2FWrtgqWM125LohTkymWyKpvr7oWaS69Mc5l8wqgV0CzkK3AWnK5p6naepr8MQWxTpYF8cSTH0LrRJI2hv%2BPK1oC9Mh9ThCbVaLgeYopO2%2BZIOxEO%2B3%2FGQ5%2BAuZEnzGbAFOE2fjGids1N%2FyD&X-Amz-Signature=337b2b6ae7c8e256ffb03fea110b32d5a9e41cd4e351406849c2a565c5561324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

