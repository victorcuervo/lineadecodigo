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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXPY4BBM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDJFGNw3kkIoN3Bi3ktFSGM27P8wyTRSZCE4tvaO7NogAiBtatzZ6YjZT8b5v3vvOUaC165urlVcRRcXjTMDIw5ucSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM96krI5zqVUzgRE5mKtwDIDXzP%2BHadvXbi%2FxBwE3fhl6qP%2FWxS9b%2FyGeMyqStshRSAaia0m3DDn1jWsWKWjy0IeDuRVX8jsJZhwKjl72IoYW7Fc3BPEB3B0Q7v0Sw1JP1B5HPmFAaweMe73Y%2BjMLkNY1Kol%2FCQp0%2FRvfaIytLfHfZvN1dxj0f6P3rF3e7yGerlQV3rhtMwGheQWs1r0akECslN%2Fv0%2BK0RkWqBEWnskwkI%2F1nb8AmBwYiEU5Ofjpiziyd56abNtXTVqQMToVUBDVUyQYtuqF4rhdX99qrsF0ZC2jL7damAYJRZbNSTb0iVYEZ0fZ6pUGt7zGYq2zv8Ks5uXO32pCBTKw8TUThSQNXhZK%2BfW1vV2ASoMJ8Y0%2BRxhO6feYoQ%2B4PFTzFpNERT3wNMn0SJSr3JUvSxActpf8Ca1feH1oWqaY88w6Rp3PCwLYFg%2BfhINsG12jHMKv7Mmy8xLLlU%2BLl0zqtfsg%2BqHyTT6KbNGtZ0MPYTCYVolj1d3GMNsUXaqM8f%2BQRXeNtsoM7%2Fjsw3he2d3%2FSqmCeOtgPaPCfo2Mc6ETT59FEDpqYmA4LtE6FHTZldud5bo%2BbP5Ipo5BZS2IepHi9AYmILy%2BIFrvyczqIruU283p8FxXxtExKkZIiLnkn3wA0w%2B5a%2ByQY6pgGAdSAjlii%2Bfkq7O3LvSLLohk5jr%2F5nLN0tXdtQWKubhIAzUXFHrRzZcrLfmqa2hXoLQHBE9pCMzk%2FCP%2F91y6yGWETlDiEJ2HHF8PSqFrwcilwC9cynbKn4jp8EKCSdQaJ9DrZrozkhUIfUBjl9H5qwALj8uEZAV3ATL3GeO9xeN3xI%2B5ooTvjA%2BGORsQaVgchRUnaqbBSn89mNjFQtV%2BXHBO3J33UV&X-Amz-Signature=b688b0e0dea8701edb2ca7a2fdda1adfaa82cda48ba698316a26288779ad88d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXPY4BBM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDJFGNw3kkIoN3Bi3ktFSGM27P8wyTRSZCE4tvaO7NogAiBtatzZ6YjZT8b5v3vvOUaC165urlVcRRcXjTMDIw5ucSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM96krI5zqVUzgRE5mKtwDIDXzP%2BHadvXbi%2FxBwE3fhl6qP%2FWxS9b%2FyGeMyqStshRSAaia0m3DDn1jWsWKWjy0IeDuRVX8jsJZhwKjl72IoYW7Fc3BPEB3B0Q7v0Sw1JP1B5HPmFAaweMe73Y%2BjMLkNY1Kol%2FCQp0%2FRvfaIytLfHfZvN1dxj0f6P3rF3e7yGerlQV3rhtMwGheQWs1r0akECslN%2Fv0%2BK0RkWqBEWnskwkI%2F1nb8AmBwYiEU5Ofjpiziyd56abNtXTVqQMToVUBDVUyQYtuqF4rhdX99qrsF0ZC2jL7damAYJRZbNSTb0iVYEZ0fZ6pUGt7zGYq2zv8Ks5uXO32pCBTKw8TUThSQNXhZK%2BfW1vV2ASoMJ8Y0%2BRxhO6feYoQ%2B4PFTzFpNERT3wNMn0SJSr3JUvSxActpf8Ca1feH1oWqaY88w6Rp3PCwLYFg%2BfhINsG12jHMKv7Mmy8xLLlU%2BLl0zqtfsg%2BqHyTT6KbNGtZ0MPYTCYVolj1d3GMNsUXaqM8f%2BQRXeNtsoM7%2Fjsw3he2d3%2FSqmCeOtgPaPCfo2Mc6ETT59FEDpqYmA4LtE6FHTZldud5bo%2BbP5Ipo5BZS2IepHi9AYmILy%2BIFrvyczqIruU283p8FxXxtExKkZIiLnkn3wA0w%2B5a%2ByQY6pgGAdSAjlii%2Bfkq7O3LvSLLohk5jr%2F5nLN0tXdtQWKubhIAzUXFHrRzZcrLfmqa2hXoLQHBE9pCMzk%2FCP%2F91y6yGWETlDiEJ2HHF8PSqFrwcilwC9cynbKn4jp8EKCSdQaJ9DrZrozkhUIfUBjl9H5qwALj8uEZAV3ATL3GeO9xeN3xI%2B5ooTvjA%2BGORsQaVgchRUnaqbBSn89mNjFQtV%2BXHBO3J33UV&X-Amz-Signature=a983196d14218978cf03829cceb7de10a0aa34e6c54850dcc6dad06f11720b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

