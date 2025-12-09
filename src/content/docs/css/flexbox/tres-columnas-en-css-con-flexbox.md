---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJSPKAPK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH4tcrNfk7YZYgZC7GraioR40Ix6dzHUNBjsiiT4yBAQIhANjTAl2fj%2Bs4wl%2F6flX0ba3GWuvpmbbs5VArnAQHj%2BeFKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9UzBnZQp7YDlVAlkq3AOynCt%2BOl8RDFtKBnibouS0N%2BwmrMUc0akGgNBDJsYnUbOvKw4OSUaLa4syc9GIwtibI1bjCUAaoWvCNeGROzyBD9DBVU93kYlE8VBhdo9X0bHbhQT0SozzJUvBUx2GT38sQEA5MuWrQN%2FBKs4HoimGt7Vu%2FesFAwQzvx0Lyfh554BuxfDHjT0gaOam%2FhjTTE38uHifvNrIh3B56NzShz1sRMsXx8dWExT0CdErZyO5XEpxCewvNo3S8uzAB%2B%2F4G6UpL%2Fq1bZd9p7aMMKsXUQ7d5gndc9dWVWVGqUY7lNhPXdPFgul56QzteVFOygXwYeXbtuJxXrS1qMY%2BshW6%2FczZmxTcoLOVKfNRGhwKnXRsp8zU1ro14317mHvai26Iuuk1%2BrWGgdbEk0P8GopKPGvBnJKTHDn2IwsRtqaTlB4t81D6zkuvl3G3Jstj8agjokQFLdiIb7pBCfbpuXdEO22IuhmcTzM%2BSM3O5iKremqNvQ1P5ki7JXtOP2sXhytNORQX8xnDZFWUhWNonLq3r6CW1FxNRPxDg6Ei3HK3AfywKGogHNW6E2to%2FMfeaTe0Q%2B5BLO3D6c8rj1E2Wkt1Np%2BnGmJjs5Z%2BMhVrxYz1dTRPB6BQ%2BQbqt4oUdbI5FDD%2B6d3JBjqkAbQxmQZSbCBaTxUzbL%2B1y%2F5HhvKA009TicgCI6Bg76gh6DPQqGH%2F6lYPU3mabAy3IzIXezz8oKNpp7nJjkdPmPUiPbPA23nqBC5fGPwTCc8DNBo3T46FGR%2BJpucqo3v2T3TcFcjM1oLbjlcMw1bew1y6pupS90K1JjwCRYnvNmV8BkqtOBEAkoSQyiPDDyhrNsF4yob8uHjNKwwDUWVfwVYra2Go&X-Amz-Signature=cae2d26342fbbc219c7bea57299d4bc7228bd11a640cd6382bb143f0b120311e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJSPKAPK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH4tcrNfk7YZYgZC7GraioR40Ix6dzHUNBjsiiT4yBAQIhANjTAl2fj%2Bs4wl%2F6flX0ba3GWuvpmbbs5VArnAQHj%2BeFKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9UzBnZQp7YDlVAlkq3AOynCt%2BOl8RDFtKBnibouS0N%2BwmrMUc0akGgNBDJsYnUbOvKw4OSUaLa4syc9GIwtibI1bjCUAaoWvCNeGROzyBD9DBVU93kYlE8VBhdo9X0bHbhQT0SozzJUvBUx2GT38sQEA5MuWrQN%2FBKs4HoimGt7Vu%2FesFAwQzvx0Lyfh554BuxfDHjT0gaOam%2FhjTTE38uHifvNrIh3B56NzShz1sRMsXx8dWExT0CdErZyO5XEpxCewvNo3S8uzAB%2B%2F4G6UpL%2Fq1bZd9p7aMMKsXUQ7d5gndc9dWVWVGqUY7lNhPXdPFgul56QzteVFOygXwYeXbtuJxXrS1qMY%2BshW6%2FczZmxTcoLOVKfNRGhwKnXRsp8zU1ro14317mHvai26Iuuk1%2BrWGgdbEk0P8GopKPGvBnJKTHDn2IwsRtqaTlB4t81D6zkuvl3G3Jstj8agjokQFLdiIb7pBCfbpuXdEO22IuhmcTzM%2BSM3O5iKremqNvQ1P5ki7JXtOP2sXhytNORQX8xnDZFWUhWNonLq3r6CW1FxNRPxDg6Ei3HK3AfywKGogHNW6E2to%2FMfeaTe0Q%2B5BLO3D6c8rj1E2Wkt1Np%2BnGmJjs5Z%2BMhVrxYz1dTRPB6BQ%2BQbqt4oUdbI5FDD%2B6d3JBjqkAbQxmQZSbCBaTxUzbL%2B1y%2F5HhvKA009TicgCI6Bg76gh6DPQqGH%2F6lYPU3mabAy3IzIXezz8oKNpp7nJjkdPmPUiPbPA23nqBC5fGPwTCc8DNBo3T46FGR%2BJpucqo3v2T3TcFcjM1oLbjlcMw1bew1y6pupS90K1JjwCRYnvNmV8BkqtOBEAkoSQyiPDDyhrNsF4yob8uHjNKwwDUWVfwVYra2Go&X-Amz-Signature=8603430884efd85e0a74505b5ae317e5aee0499e0211daf049e79a15d6c28e5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

