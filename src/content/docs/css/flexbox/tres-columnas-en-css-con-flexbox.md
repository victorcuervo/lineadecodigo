---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSKL5NL6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FOZK5QbUM4U%2BbLAbzgdM6k99J3aryREgrZ69zSMNdMAiEA9LJlVhdIxwY2h0zJABDkvCxiUwRtmi0vEi9ABxc6WiMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBmL8ZkShS%2FBcgT4PCrcA52j7BANexQvNp8pEvTE%2FlpoUbseqDLMeAZ9oSNWvH5pftIB7IjSDcLY1qGXmby5Y%2FmeM47eGsTDqilzGw81XG6LJLjEfGjX0b7xO9vv0%2F7Id9%2BPQGPZgWSt9pB%2FQUA4NghIuVxfOiU4hDEuUY5xDqAHsSy%2B7erUUgX0j6pdqrznGpuLsmw4ulJVBoxRQRgi1fzpm%2FwDEsB1HTlYjyfkQi%2BQYLo8XvGNFf9X6V2%2Bc0YtCC%2BuE5FdjelNHH8o8cRtcPhx%2FrxAbDBwOImQZmgW1KUh8dk5IOkulLGaJmDzH4vRB1YiatSkXT1%2FVlFTfWtyV45clu5M3ZnMTJ7MazbnPnq8iqyIaV8Cc4z%2BiZLhnTa2zi4mgWTvpid9YW1dKByCGLZUBWLIXkkUGqq5kYrOwSG4x1qbGGlnbTIYa2FGnkgZ4RGFk4f5VGHon8ikAn0hbYTq1mfuKPAQjaHi0yMiY3LYmvPABY9MhbmNfnd2jWDYwnMHgKrny8s56R8ALcbZfuLEJaLDkmMqdBLa4iGggXWKyMPI89ARRmNdu3rzu%2FBAeL88TSWB52OKXcCfAm0pub6aVL7DLbnVKh48XR0wmBGmxNPev83YuCrjb%2BLk%2BgigXDmkpbGrvrCEku0zMOKuyckGOqUBX3vFVLcdsQiW02aSOg3pI8IzfUlam%2BWEmtfYO3N5ik9HiTr%2BbQXXHzU7hruC8bK34Nr4ZJXPk4GfRXCnkRFAFePajJ7u8ckmpaRm7813Fu8TleJvN5%2FRedkMxA%2BwWQM6FmOd0ffR2c483J7vGFcxooOJP30XEuOhHuXcelCXvoBS4tWuXVotMDme0fanOr%2B3Ynyho1kCMC9e4EHVNlrDc6Cjt9b5&X-Amz-Signature=62d8e3f6ac306f8a0aa7cca8ee68b5f61706ddf75be35378303d65cf351fd972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSKL5NL6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FOZK5QbUM4U%2BbLAbzgdM6k99J3aryREgrZ69zSMNdMAiEA9LJlVhdIxwY2h0zJABDkvCxiUwRtmi0vEi9ABxc6WiMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBmL8ZkShS%2FBcgT4PCrcA52j7BANexQvNp8pEvTE%2FlpoUbseqDLMeAZ9oSNWvH5pftIB7IjSDcLY1qGXmby5Y%2FmeM47eGsTDqilzGw81XG6LJLjEfGjX0b7xO9vv0%2F7Id9%2BPQGPZgWSt9pB%2FQUA4NghIuVxfOiU4hDEuUY5xDqAHsSy%2B7erUUgX0j6pdqrznGpuLsmw4ulJVBoxRQRgi1fzpm%2FwDEsB1HTlYjyfkQi%2BQYLo8XvGNFf9X6V2%2Bc0YtCC%2BuE5FdjelNHH8o8cRtcPhx%2FrxAbDBwOImQZmgW1KUh8dk5IOkulLGaJmDzH4vRB1YiatSkXT1%2FVlFTfWtyV45clu5M3ZnMTJ7MazbnPnq8iqyIaV8Cc4z%2BiZLhnTa2zi4mgWTvpid9YW1dKByCGLZUBWLIXkkUGqq5kYrOwSG4x1qbGGlnbTIYa2FGnkgZ4RGFk4f5VGHon8ikAn0hbYTq1mfuKPAQjaHi0yMiY3LYmvPABY9MhbmNfnd2jWDYwnMHgKrny8s56R8ALcbZfuLEJaLDkmMqdBLa4iGggXWKyMPI89ARRmNdu3rzu%2FBAeL88TSWB52OKXcCfAm0pub6aVL7DLbnVKh48XR0wmBGmxNPev83YuCrjb%2BLk%2BgigXDmkpbGrvrCEku0zMOKuyckGOqUBX3vFVLcdsQiW02aSOg3pI8IzfUlam%2BWEmtfYO3N5ik9HiTr%2BbQXXHzU7hruC8bK34Nr4ZJXPk4GfRXCnkRFAFePajJ7u8ckmpaRm7813Fu8TleJvN5%2FRedkMxA%2BwWQM6FmOd0ffR2c483J7vGFcxooOJP30XEuOhHuXcelCXvoBS4tWuXVotMDme0fanOr%2B3Ynyho1kCMC9e4EHVNlrDc6Cjt9b5&X-Amz-Signature=55f5e4c889678e54e46ccd5fa2210008ba8525eb3b7fcea95f8c4a57cbbcec99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

