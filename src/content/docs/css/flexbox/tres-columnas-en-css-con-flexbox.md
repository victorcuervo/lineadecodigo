---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2ZTJ6XD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTpCpqvpvptAAgy%2BB31mBiCP8f7OlsfiE8ix7Szk33MAiEA4uMOYnLu5%2BEaK1BUzWym4ZzZ0Nw9zLTCr%2BxvnaTS18UqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEN5Lllh5vTNtRjoASrcA06TdlMeGE6UP1rbslXuHGVuOjuRG2QnZiQn1RoUl5Xdhr64NUB66PNxKp4C8sva%2FdV%2BqtBWHnf6j2jAbRrPcVpzGqea8ruTdgC%2B8LUZ0ztv6LqOUPUYGcY0BxmHjYT19H3dEBqVKLUlO8UkXLynHkGcqer6LxGOGw03dA8UNbCMsWcGQBxuIGHaRT3jlO4%2FZBkUDzud4ONSbtCIvNwVNrSBryILAhmC3E5HJ%2FxuIDxaaavdUZcmGpoa27zZzJbjZVrOLMBo7DXacyvWtGDHNHHBzKc28UNVP7CY%2F6n90UuoMB7n02zWfPbnNzvrDimQqzke37br5HoUrQ%2FU3s8u6ItsTIcgOoVwPInZiqAZ6GhlKKTqy8tquAQBlyHB9ukUZn1hMNf7g5vjVUNjCq%2B4UTkFx5ny%2BpL53oGKx2zHMH9O7UPjsuZ5Zja8m90O9IjvFBGcB9zaP63QWSPTaxNE7cBPMHsaN7M7A6xBcFOTgIScG5KUN%2FNMSCRtwtPFc7HUVd4WojyHWyDEfxVmCizPEcw8n9Su5lTWJGXSCYhfL32sR4c87WuTWRkVi2flZIY%2FCSdjXI8BBGV2OxmPcrhs2%2BHyfeuPNtCSz7%2Bcp0UVmU8Vt%2Fa8sM8BQCv4qsjhMNHH18kGOqUB%2F6Tosg0sAts%2FvBO4v4yU7uIZY4BmHdEyVlseYJ1Xfo%2BFnztArQZvUx0a3oXR7UYYg8dEHsWQJN%2FbAOQboxuevjmJK3o7o8PBhJww4A4ydUdhESsFHyWOFP7yOHAw6iZlXNs%2FBMgfTgw9gcNnyaWZSmRKbZnAgSNfy5uhGSrGbr9ZwYXWjnjLSZ5fQyOn%2BWGBwVYYZssUaEPm8vxjPEC1fUgFTkE3&X-Amz-Signature=c1956330f871ffeeb93c3ae66a9fbb92b838e34ae678c7d570b975f5e4eab8a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2ZTJ6XD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTpCpqvpvptAAgy%2BB31mBiCP8f7OlsfiE8ix7Szk33MAiEA4uMOYnLu5%2BEaK1BUzWym4ZzZ0Nw9zLTCr%2BxvnaTS18UqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEN5Lllh5vTNtRjoASrcA06TdlMeGE6UP1rbslXuHGVuOjuRG2QnZiQn1RoUl5Xdhr64NUB66PNxKp4C8sva%2FdV%2BqtBWHnf6j2jAbRrPcVpzGqea8ruTdgC%2B8LUZ0ztv6LqOUPUYGcY0BxmHjYT19H3dEBqVKLUlO8UkXLynHkGcqer6LxGOGw03dA8UNbCMsWcGQBxuIGHaRT3jlO4%2FZBkUDzud4ONSbtCIvNwVNrSBryILAhmC3E5HJ%2FxuIDxaaavdUZcmGpoa27zZzJbjZVrOLMBo7DXacyvWtGDHNHHBzKc28UNVP7CY%2F6n90UuoMB7n02zWfPbnNzvrDimQqzke37br5HoUrQ%2FU3s8u6ItsTIcgOoVwPInZiqAZ6GhlKKTqy8tquAQBlyHB9ukUZn1hMNf7g5vjVUNjCq%2B4UTkFx5ny%2BpL53oGKx2zHMH9O7UPjsuZ5Zja8m90O9IjvFBGcB9zaP63QWSPTaxNE7cBPMHsaN7M7A6xBcFOTgIScG5KUN%2FNMSCRtwtPFc7HUVd4WojyHWyDEfxVmCizPEcw8n9Su5lTWJGXSCYhfL32sR4c87WuTWRkVi2flZIY%2FCSdjXI8BBGV2OxmPcrhs2%2BHyfeuPNtCSz7%2Bcp0UVmU8Vt%2Fa8sM8BQCv4qsjhMNHH18kGOqUB%2F6Tosg0sAts%2FvBO4v4yU7uIZY4BmHdEyVlseYJ1Xfo%2BFnztArQZvUx0a3oXR7UYYg8dEHsWQJN%2FbAOQboxuevjmJK3o7o8PBhJww4A4ydUdhESsFHyWOFP7yOHAw6iZlXNs%2FBMgfTgw9gcNnyaWZSmRKbZnAgSNfy5uhGSrGbr9ZwYXWjnjLSZ5fQyOn%2BWGBwVYYZssUaEPm8vxjPEC1fUgFTkE3&X-Amz-Signature=2d0004d0679e81b15da31950ad051b396d083189741dda8b0eb45889b1451f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

