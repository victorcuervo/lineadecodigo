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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQC7GA3M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDrky6qagcq16rx77wMG91iHdTDyyQiZW44GtbDzQYNDQIhAMal4rBV3MXko1bAHM%2FJ3YT1VIWVD9FA19votssV%2F7RYKv8DCCEQABoMNjM3NDIzMTgzODA1Igw72y5%2BIdflfk3V5X0q3APtnG3hV63jE5mGXTEqpRzzKa5Irl9p7bu9ZJUBT1HiKZAjve64WU42sswAoRHDKaKkJB61WxrG2m%2BziuitOwZMsZJpDd%2BjNQZyLMyBlRLdeWWAwtovIUmv2lf9TPV3ecNdDlYl8l3%2F451p31xV%2FFK53b1UmgRzMQ7eFLVfSkKvqMMZBleoSFnlJxKeZXUthD%2B0nIY38gkdOsu5LgFxB6wIF8Mgp0%2B%2FI55xbDqh%2BVsUhQH45zx%2F9eHUNGofEp%2BgfgcxkN0sNppBWr3SAivk5fZZ0oSRuMh4A1vVV9hScUggwIcij%2Fr9ZKlTKXHeZMbwDjOsTBS45lYAsQcyIvppl79y6ccDS6QtJOFOYl4e9Ae%2BMI0WkRCeBhCpA4CbmCSxJjp48IpGt5qX3M7B4tjFzWWGcJEIII86ErL6pf65o%2FYye5CB1vND5SLCxeyBHUhM9HmtMPNuVfOR2wqxPAUmzQQz37xmaI9%2BEGW0GvsNUVzvPzPpxX%2BGurbq%2BWTGUk7mOIzMI62HzLLVLIKX1d%2BuARUkEzec3SmRN%2BJMqumkn5mPOyWe7ZCznfrCn7W5a9xDJ0pYYcsmYFiDDuH1%2BtAL3jLLA%2BEARP4SfQKPAkOxsCfRYGXitM6GINScDPLKJTD5%2Fr3JBjqkAY1wvp6qt4%2BPbJ83FCIzoNURFDG3JB8ZqM61qW%2FTMx%2BahWyJyILcvRfgcvumd%2BjRPYSWMlqiEkAeyHYLWKJRSdJIRD8xb7xS8c%2BpMqA%2FJ0zsce0j2%2BPuf0T7kGVuI%2BxK%2Bcl4hxhECuYgJ6nHW8lhCksfaInwatVU8yDfh0e4m8Ag9LlYGTl1uGNv%2BdS7NSCL1D0ehJYrehfzVdKXwAhmyahbwCf%2F&X-Amz-Signature=c74bd56bb1b2059298f087219b71b7c73abbe5e09474d4138440a2687b19c69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQC7GA3M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDrky6qagcq16rx77wMG91iHdTDyyQiZW44GtbDzQYNDQIhAMal4rBV3MXko1bAHM%2FJ3YT1VIWVD9FA19votssV%2F7RYKv8DCCEQABoMNjM3NDIzMTgzODA1Igw72y5%2BIdflfk3V5X0q3APtnG3hV63jE5mGXTEqpRzzKa5Irl9p7bu9ZJUBT1HiKZAjve64WU42sswAoRHDKaKkJB61WxrG2m%2BziuitOwZMsZJpDd%2BjNQZyLMyBlRLdeWWAwtovIUmv2lf9TPV3ecNdDlYl8l3%2F451p31xV%2FFK53b1UmgRzMQ7eFLVfSkKvqMMZBleoSFnlJxKeZXUthD%2B0nIY38gkdOsu5LgFxB6wIF8Mgp0%2B%2FI55xbDqh%2BVsUhQH45zx%2F9eHUNGofEp%2BgfgcxkN0sNppBWr3SAivk5fZZ0oSRuMh4A1vVV9hScUggwIcij%2Fr9ZKlTKXHeZMbwDjOsTBS45lYAsQcyIvppl79y6ccDS6QtJOFOYl4e9Ae%2BMI0WkRCeBhCpA4CbmCSxJjp48IpGt5qX3M7B4tjFzWWGcJEIII86ErL6pf65o%2FYye5CB1vND5SLCxeyBHUhM9HmtMPNuVfOR2wqxPAUmzQQz37xmaI9%2BEGW0GvsNUVzvPzPpxX%2BGurbq%2BWTGUk7mOIzMI62HzLLVLIKX1d%2BuARUkEzec3SmRN%2BJMqumkn5mPOyWe7ZCznfrCn7W5a9xDJ0pYYcsmYFiDDuH1%2BtAL3jLLA%2BEARP4SfQKPAkOxsCfRYGXitM6GINScDPLKJTD5%2Fr3JBjqkAY1wvp6qt4%2BPbJ83FCIzoNURFDG3JB8ZqM61qW%2FTMx%2BahWyJyILcvRfgcvumd%2BjRPYSWMlqiEkAeyHYLWKJRSdJIRD8xb7xS8c%2BpMqA%2FJ0zsce0j2%2BPuf0T7kGVuI%2BxK%2Bcl4hxhECuYgJ6nHW8lhCksfaInwatVU8yDfh0e4m8Ag9LlYGTl1uGNv%2BdS7NSCL1D0ehJYrehfzVdKXwAhmyahbwCf%2F&X-Amz-Signature=e540874529b5a5e2f75dae6effb80884d07bc569ffaed84692d181623f9003a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

