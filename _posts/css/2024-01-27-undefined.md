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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYWDPWT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQD%2FA2k7qvK4Z6KhmB%2FTy9%2FUx0j6p9Er9jVQh%2FdfCuzYWgIgf2BbpzBgZhS4Jum%2B1eGk8LQYotwEM3bpmd6Fy1rmtTkq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDCNutJBdbjKcBxCFdSrcAxQt8NS2dRc5LYXQybhy57OdzFen35SREJ%2FlsBvHnDb0zf8clKvp2Y9aKEd1UnfTdA3h0pjiBae3KtOBSly1vukzBZKF0Fq%2BQ%2Bd80PUyr5U8k36AseN6QwvAZ6PDM1k1p6BeIVVxreJ5WHc%2BOu8RM6t1d%2BsFniIzFtAVw7Hwzei7hAAeUyuSpug7bSUkZ0shM6DNyNq%2FZPFln4DSfm15%2BAeECxNXYkt%2FMA7Wf2QLZG9rIQg4HoPIzyJmV%2FLX%2BfHapM8JSDLoqbUjIv2KNeiijDvZN3DBbvPhVcNJ6sTjwqPGQY3HQ264ccTZFQPuSZwB4xTElF21%2BCfeoEC7Yl3Ya1u2tD9GMloNZlBVrviWbQ7pK1%2Bjf0T%2FXXqSOSgA%2F7JaTQAdAHnOJ%2BRpSyhKPFlfNv8CAkBN1UCN0hvPTAAwqe5R5VcjsajRLFbZomhas3J632nkMF1UoCUPvX28gUItOUEvq5hjiPPXinrTjbE2USZs9F5g6morQDYA0%2F2Q2%2BJoTpcJGtJOg8%2Bg2Mka%2Ftf2RRpaQd8dqI4arThkcUKzK9HdWbo04opsPmTnBsxGPEeH2lIDNqjeo0xaAo%2BAOwwqz9pQeo4mQkqMoNZqv55IIcXKXD9zBvOfAvqQhHiuMNu5v8kGOqUBtXjaMPP6T%2FK7ap62oQCgUoCVe%2Fv6qmza8AYScWDSoFW8zODa76tAs19hWuSl9yrZ%2Fi8ab7jb2KRIeLlseyO1x0Ja8%2BLobl0RDd2d0xOKaswIIMee9fRGYfN5vTorX8meb55l76c7DSKPPRo4XFPDOsvOyLqH00oPXurwKjd5Yd55qTAmKhWuZRf%2B6HVPueJqhINoV6dKOiIn8IWB3Kb7%2Bj9ubONE&X-Amz-Signature=80e013230c80acb44368352e2e88c4d10fcd8530bbea6782f7502198e1dce2e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYWDPWT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQD%2FA2k7qvK4Z6KhmB%2FTy9%2FUx0j6p9Er9jVQh%2FdfCuzYWgIgf2BbpzBgZhS4Jum%2B1eGk8LQYotwEM3bpmd6Fy1rmtTkq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDCNutJBdbjKcBxCFdSrcAxQt8NS2dRc5LYXQybhy57OdzFen35SREJ%2FlsBvHnDb0zf8clKvp2Y9aKEd1UnfTdA3h0pjiBae3KtOBSly1vukzBZKF0Fq%2BQ%2Bd80PUyr5U8k36AseN6QwvAZ6PDM1k1p6BeIVVxreJ5WHc%2BOu8RM6t1d%2BsFniIzFtAVw7Hwzei7hAAeUyuSpug7bSUkZ0shM6DNyNq%2FZPFln4DSfm15%2BAeECxNXYkt%2FMA7Wf2QLZG9rIQg4HoPIzyJmV%2FLX%2BfHapM8JSDLoqbUjIv2KNeiijDvZN3DBbvPhVcNJ6sTjwqPGQY3HQ264ccTZFQPuSZwB4xTElF21%2BCfeoEC7Yl3Ya1u2tD9GMloNZlBVrviWbQ7pK1%2Bjf0T%2FXXqSOSgA%2F7JaTQAdAHnOJ%2BRpSyhKPFlfNv8CAkBN1UCN0hvPTAAwqe5R5VcjsajRLFbZomhas3J632nkMF1UoCUPvX28gUItOUEvq5hjiPPXinrTjbE2USZs9F5g6morQDYA0%2F2Q2%2BJoTpcJGtJOg8%2Bg2Mka%2Ftf2RRpaQd8dqI4arThkcUKzK9HdWbo04opsPmTnBsxGPEeH2lIDNqjeo0xaAo%2BAOwwqz9pQeo4mQkqMoNZqv55IIcXKXD9zBvOfAvqQhHiuMNu5v8kGOqUBtXjaMPP6T%2FK7ap62oQCgUoCVe%2Fv6qmza8AYScWDSoFW8zODa76tAs19hWuSl9yrZ%2Fi8ab7jb2KRIeLlseyO1x0Ja8%2BLobl0RDd2d0xOKaswIIMee9fRGYfN5vTorX8meb55l76c7DSKPPRo4XFPDOsvOyLqH00oPXurwKjd5Yd55qTAmKhWuZRf%2B6HVPueJqhINoV6dKOiIn8IWB3Kb7%2Bj9ubONE&X-Amz-Signature=14d7ccf23317dccab387e488374ce76485ccaf9a23b718cdd86eebd3980a9bf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

