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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGHW4YMU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T083947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFHy%2B7JQAg8Wsdg9MgSPnArQVY5yCjQPMyhnq%2FVV4%2Bi%2FAiBX785JsIZr1ivhf%2BH6UTBiWjbvztRx7C%2ByUcbthuYuMSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMk2UxSnYqH26uTOX%2FKtwDMj5Rcxj%2BjKazWZ4vL%2FdLilSR%2B4JepPhzeI1vYn%2FZ63fzuc8VWu5oazuD43SndzeFWZUAb0NSNdwgaf0DayKSQivFdeECFUIVENAeno2y9%2Ftidy34iy10i3X3Xy%2F8ThPkGnVeK6BW%2Fxb3TZFZ54oAPHcxtqQBBckfeiTWPQL5XnQ7%2FhLv0EEHO6i9o1kAGLn6X%2BdjwP7zInv%2B%2B08SGQeVKRPDPx2z0PXHtkaX7NI5ig6XuJtu%2F%2FX6N8oC1luCGkuaR8BtfgVSexM7TIqzjF0qX2fNbAZJRRWfx49r9KywpvFescAoRRgImrCXVrvhj1a43S8EztoKL3Vy95jMqMcn6lwouDW%2BR6GhBW2noDOLKnBk14tO9Ie4cLZoT3zFMLNfyMAIBKBQUK7sOUqRUpmDZrK8fSriUTFc%2BrPj1NTYRxijB%2Fz%2Bux1GG4QN7tX1rsMIqbYhc%2BAEcknKbb10TlPYNwJHL%2FvR52BiQFEOPhYdBjkzENKu28rwivV5QFXeEbCudtF4YoE%2BVcaGYI6YjQtwo8QRkmecP538gx3ix%2B232cEk64UAUsXQ7r4WKuGoUUVevIaD9tXqdjkvzKuow1u2dsv8KoonryyJgWUIb245O0DJPDscO4fuvP3XSGMw3tS%2FyQY6pgF63c8YtJ%2FUgGxyFcUnSMAwPYBtVdf6qpp%2B4fFLcaHIBDN6L45ihy61H9C%2FV0NzzL0qLW5r5ROqdrDN881Xo6RCtIzPpBF%2FvyBz7pESlDfpjKAotmDf3NGz0Tpo1RgBLtTgs9MXjIdMpJes7YrZ%2FH1fld%2B%2FaPZmXcwfz1Q6cAkbT7OpkvZjqx%2Bysi2ltkbJ%2B954SHSGxbXLNhsPZU%2BsLqSSkZ3AR0mf&X-Amz-Signature=0adddd8741800adb0253070d8462f8488a71321ba102ff8bedb9e4ec47d498de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGHW4YMU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T083947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFHy%2B7JQAg8Wsdg9MgSPnArQVY5yCjQPMyhnq%2FVV4%2Bi%2FAiBX785JsIZr1ivhf%2BH6UTBiWjbvztRx7C%2ByUcbthuYuMSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMk2UxSnYqH26uTOX%2FKtwDMj5Rcxj%2BjKazWZ4vL%2FdLilSR%2B4JepPhzeI1vYn%2FZ63fzuc8VWu5oazuD43SndzeFWZUAb0NSNdwgaf0DayKSQivFdeECFUIVENAeno2y9%2Ftidy34iy10i3X3Xy%2F8ThPkGnVeK6BW%2Fxb3TZFZ54oAPHcxtqQBBckfeiTWPQL5XnQ7%2FhLv0EEHO6i9o1kAGLn6X%2BdjwP7zInv%2B%2B08SGQeVKRPDPx2z0PXHtkaX7NI5ig6XuJtu%2F%2FX6N8oC1luCGkuaR8BtfgVSexM7TIqzjF0qX2fNbAZJRRWfx49r9KywpvFescAoRRgImrCXVrvhj1a43S8EztoKL3Vy95jMqMcn6lwouDW%2BR6GhBW2noDOLKnBk14tO9Ie4cLZoT3zFMLNfyMAIBKBQUK7sOUqRUpmDZrK8fSriUTFc%2BrPj1NTYRxijB%2Fz%2Bux1GG4QN7tX1rsMIqbYhc%2BAEcknKbb10TlPYNwJHL%2FvR52BiQFEOPhYdBjkzENKu28rwivV5QFXeEbCudtF4YoE%2BVcaGYI6YjQtwo8QRkmecP538gx3ix%2B232cEk64UAUsXQ7r4WKuGoUUVevIaD9tXqdjkvzKuow1u2dsv8KoonryyJgWUIb245O0DJPDscO4fuvP3XSGMw3tS%2FyQY6pgF63c8YtJ%2FUgGxyFcUnSMAwPYBtVdf6qpp%2B4fFLcaHIBDN6L45ihy61H9C%2FV0NzzL0qLW5r5ROqdrDN881Xo6RCtIzPpBF%2FvyBz7pESlDfpjKAotmDf3NGz0Tpo1RgBLtTgs9MXjIdMpJes7YrZ%2FH1fld%2B%2FaPZmXcwfz1Q6cAkbT7OpkvZjqx%2Bysi2ltkbJ%2B954SHSGxbXLNhsPZU%2BsLqSSkZ3AR0mf&X-Amz-Signature=54bef2525539a3ac898da3c6bb80d2c68ffa2dea392c9fe269a5a66af11574ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

