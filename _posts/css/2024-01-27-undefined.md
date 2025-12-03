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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTAOCEJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCICPRgUHhQnOuwW%2BM84%2B5BDD1ySFoMCUYOzXwwIzpGs4fAiA%2Fv3yZK658609bD8Swy7nRveUzrlsSL9iaCATxDFvJwCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMXYA8h9MKgIRF2fWYKtwDNRlxnPK%2B6yIUDVnOtvOYzBLSoXjMsqHyee4NdMYMazONAPhiK6EbnKYyoVplWLIvy4Bx73keJDe3W6Soh%2B8s1j%2BUTUe%2FtY9qcESOs8ILsajK8zf%2BQjr0ek%2BGZ7lgVv1YLy6shYEgax0ZRfta3vS2Fcwc1gp1axqBfyd9o6nqyS255nyiogZaHYj5NJiAodbfWnL0%2BGTjRiPz8jr9hTOTLX0JA8muUTuOyx5epXve%2F%2BWsqXiRTIHu3hUeFbL3%2FTkjiaB74hu2o3qc3ozuWTRxlbCvhyYC18vtX3TyAhrViONgOxswm2Tcdmar7vw5ZL4UcpxtLLWy19TCehnS3FEaSxx3k7k%2BQIjdrJdQfHsW0HaI7PIJBhphcqc%2F2MySWINJUt4t87xB1%2F3OXT2OmHGMh2oKgAPl6rBp0rlE3wEpFaYByiGPgZG9P%2Fhri%2FY4HKLg4dWPPH%2FGWmkd0nx2PZqbAE9L2IlvLe3rJZh1rrgNXxRYduVEXz8EZmn9FX7rdJHBU9MM9HTZ2jCBP3vjzWebrmuHnxPih5yXVs4uLyxEd2t4b8iPxebD1kxHafYXYVCGt04yRy9Zl6jzg2u9S94bWzXzyHHtPDATlnjW4%2BOKPnDOngEWs1qmQwbS8qUwhve%2FyQY6pgFV04GhN4f2PFQ4LAtD3XeVGdUmYQxgflrUNuYTm800HBaZyQ3QFn3Y5mTQdW5n0464X7TUjeaCgriEz%2FOsuwYbDMK8IDq%2Fx6MJeykZxVUMme9X1sNTIJ%2BV5MVcVK7jjc7RrzBOx5YN2X%2B7iWGI8AdoufTTF5Gq9LAoD1tkwvCkMT7cI7%2B4ZgENkJyJqhp5dAS5NhxcCSrcJz46olmdAQMq452XfxP0&X-Amz-Signature=3ca546f02c8409efb23e4c4dc19ebb2e940bbacefcf4bb41df4af60bfe1a6397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTAOCEJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCICPRgUHhQnOuwW%2BM84%2B5BDD1ySFoMCUYOzXwwIzpGs4fAiA%2Fv3yZK658609bD8Swy7nRveUzrlsSL9iaCATxDFvJwCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMXYA8h9MKgIRF2fWYKtwDNRlxnPK%2B6yIUDVnOtvOYzBLSoXjMsqHyee4NdMYMazONAPhiK6EbnKYyoVplWLIvy4Bx73keJDe3W6Soh%2B8s1j%2BUTUe%2FtY9qcESOs8ILsajK8zf%2BQjr0ek%2BGZ7lgVv1YLy6shYEgax0ZRfta3vS2Fcwc1gp1axqBfyd9o6nqyS255nyiogZaHYj5NJiAodbfWnL0%2BGTjRiPz8jr9hTOTLX0JA8muUTuOyx5epXve%2F%2BWsqXiRTIHu3hUeFbL3%2FTkjiaB74hu2o3qc3ozuWTRxlbCvhyYC18vtX3TyAhrViONgOxswm2Tcdmar7vw5ZL4UcpxtLLWy19TCehnS3FEaSxx3k7k%2BQIjdrJdQfHsW0HaI7PIJBhphcqc%2F2MySWINJUt4t87xB1%2F3OXT2OmHGMh2oKgAPl6rBp0rlE3wEpFaYByiGPgZG9P%2Fhri%2FY4HKLg4dWPPH%2FGWmkd0nx2PZqbAE9L2IlvLe3rJZh1rrgNXxRYduVEXz8EZmn9FX7rdJHBU9MM9HTZ2jCBP3vjzWebrmuHnxPih5yXVs4uLyxEd2t4b8iPxebD1kxHafYXYVCGt04yRy9Zl6jzg2u9S94bWzXzyHHtPDATlnjW4%2BOKPnDOngEWs1qmQwbS8qUwhve%2FyQY6pgFV04GhN4f2PFQ4LAtD3XeVGdUmYQxgflrUNuYTm800HBaZyQ3QFn3Y5mTQdW5n0464X7TUjeaCgriEz%2FOsuwYbDMK8IDq%2Fx6MJeykZxVUMme9X1sNTIJ%2BV5MVcVK7jjc7RrzBOx5YN2X%2B7iWGI8AdoufTTF5Gq9LAoD1tkwvCkMT7cI7%2B4ZgENkJyJqhp5dAS5NhxcCSrcJz46olmdAQMq452XfxP0&X-Amz-Signature=c010190429524a63bfd236dc0d33215ad6e2cc4d5a62a85f5f29f08e885f969d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

