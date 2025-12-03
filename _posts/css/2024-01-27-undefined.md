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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TD46TIQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDdgUVXHknEtGr3Kc7da5t3VYsUq7Uvy4NvsoEaUXHZCAiBYY0IxM6xowhboVRs0WuDRLanVMxRT1MidoYXJnFBS%2Fir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMwiTV6C4YUX9DA2MfKtwDFBeaMU5Fe8eK5YBAU0BJnpSWSUSNoTq3QPRrDAB5gXmvMe1R9Ttm%2BTTTvLLUHuvR0oY%2BCAoeRNeoebW8Y1lPvPgUm2rcg0QD0kZLrhZXijtPoxY1xF95L6yebCIFH%2FLDn9XYFyWwjQrZ5mB%2BVZUBYCdDR0%2FCXXplQr%2Fw5NV%2FGBK5uvFlW1qvI3L6Ej4429FmxZWdGUpsu6RCt%2BMBLKha3lFaMCwr6S8jn3ekfbjSk5EQyM03j21TMGnXN04hO5Xac70j%2F5KPqko7wBOPifD09VMG8tM1ffyCn2ijK5%2Bltmu9bEyzssTysOwJclAayqyoG2fRMrGuQTTpLocx592rOWTP71TeVpX3alXqP1b85uxrPOe3bWQCpVLvtU6L5z%2BRhMD6pRg%2F%2FShgJ9%2BVCAhMJ3zMGSJijFioDb4o4jZGQH2GSeUqHoj0L3mzphO1kErmeo0PpVX3sYt59ImQFtafZWDyD4ND8%2FWUnQO5NlRrlUSIPDs73mbubozF4GdKdXWjFhTi4NdqDQzA4IcY1yQi3X65tmSSzZFy6UT9%2BtHi4yR1G3Cx9%2FuV2%2Ba45ZYvFiMntV7bXwKgEAs0oDj1ZuDdFGhw80un0AfjKThpD3MO77%2BCJfMZ7NsAnqSLTBEwpIfByQY6pgH%2BL5GTUuHKTzDeqe3JcEI1IfGTEbh06fltKyRZSEGIYfD27ZNL9poWEG8htB%2F7K01nOEkvrc6ZjnFVxtD1sdCkeC8u%2BDvkBdqQ%2FaXLfEABZzQv34Qt5vcgRXb0AvEdYh6erAP6xsCtysQBvdiclt2US0DwYEB259IDKHgloxLcDEuOrXfJE2Vo5F6TiZZ4Lk2j%2BuPSnEf3nOfuJ2GlGgMZfkcDxYpN&X-Amz-Signature=cedfbefe6b4102095728d3d3eaae076aec878737e12ea7b6047eb7f2a3b99892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TD46TIQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDdgUVXHknEtGr3Kc7da5t3VYsUq7Uvy4NvsoEaUXHZCAiBYY0IxM6xowhboVRs0WuDRLanVMxRT1MidoYXJnFBS%2Fir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMwiTV6C4YUX9DA2MfKtwDFBeaMU5Fe8eK5YBAU0BJnpSWSUSNoTq3QPRrDAB5gXmvMe1R9Ttm%2BTTTvLLUHuvR0oY%2BCAoeRNeoebW8Y1lPvPgUm2rcg0QD0kZLrhZXijtPoxY1xF95L6yebCIFH%2FLDn9XYFyWwjQrZ5mB%2BVZUBYCdDR0%2FCXXplQr%2Fw5NV%2FGBK5uvFlW1qvI3L6Ej4429FmxZWdGUpsu6RCt%2BMBLKha3lFaMCwr6S8jn3ekfbjSk5EQyM03j21TMGnXN04hO5Xac70j%2F5KPqko7wBOPifD09VMG8tM1ffyCn2ijK5%2Bltmu9bEyzssTysOwJclAayqyoG2fRMrGuQTTpLocx592rOWTP71TeVpX3alXqP1b85uxrPOe3bWQCpVLvtU6L5z%2BRhMD6pRg%2F%2FShgJ9%2BVCAhMJ3zMGSJijFioDb4o4jZGQH2GSeUqHoj0L3mzphO1kErmeo0PpVX3sYt59ImQFtafZWDyD4ND8%2FWUnQO5NlRrlUSIPDs73mbubozF4GdKdXWjFhTi4NdqDQzA4IcY1yQi3X65tmSSzZFy6UT9%2BtHi4yR1G3Cx9%2FuV2%2Ba45ZYvFiMntV7bXwKgEAs0oDj1ZuDdFGhw80un0AfjKThpD3MO77%2BCJfMZ7NsAnqSLTBEwpIfByQY6pgH%2BL5GTUuHKTzDeqe3JcEI1IfGTEbh06fltKyRZSEGIYfD27ZNL9poWEG8htB%2F7K01nOEkvrc6ZjnFVxtD1sdCkeC8u%2BDvkBdqQ%2FaXLfEABZzQv34Qt5vcgRXb0AvEdYh6erAP6xsCtysQBvdiclt2US0DwYEB259IDKHgloxLcDEuOrXfJE2Vo5F6TiZZ4Lk2j%2BuPSnEf3nOfuJ2GlGgMZfkcDxYpN&X-Amz-Signature=b13d4afbe9129a59b83935f67b98133df22920d789f81847cb82bf9bdfb91237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

