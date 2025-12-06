---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V4S6TJX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC812ZW2S3fpx1x6mSgOQcCLOTERdlat41PymIVUCjS2gIgJFJQX15P8YWa8It1gPq3CW%2B5itEIWAj25CShm8yRAaoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOJOqFLyXlRRz%2Fn5cyrcA6RMPFzcUVZZiK2l6hyCHPeBrShtsZsNGqNnW9qY40d0AFTlIGAe8n9n145W9rWpgoO8GeYPMWs2Xp9nxFUGFxtNd2jXGW2svfi%2B2FavMOGc%2BCbEq4SrwZAGhj1HheeVRBkBcxiUzodC2SndhR0R%2FeJAc5PpFt%2BB5Et8xz9Dq4Xum3VRqWhZSSBWupU5mON2foHqyaGraUQObo6NXvQtFFZ8JQp1JqKtCKoySLChT9UNAmqyWZoWri48tEP8%2Bz4KGPfkNB2b6rEnmY4jErxk8G1eqKE%2BW1C50ZrT0a1m9mDI%2BbyrvWG8QNf1o07mSrGdk7iU3P2Ia%2FYBMmY2KBj6RWZVMcfeWG51aKdw0s49cQH5fD6EQEVpfZGeNHji1li%2BZ9wr2%2FtwejzEs5eHaMxrVT0ozqH9T9DqB%2BSfZX2ZBAAafAjOW9mqQJ%2FBiTy6NGDzAlLLGIUvTDgcyXPcN7BVolyU5rG3zeZLgOwxUd8pcNN1ozo%2B3EDrX5uOFbtJilExXB7NpTHVZZh2Tpj6NqfSdfJVfASbMCwNJEtdzRp86CtLdsjXqhaPLxNw9XBlZmXMGOAQ4SVsPDGfl3W715clMdYLoXzKQgy30i37yG2VSU0Uw5UoFFaBa9tizS1PMILF0ckGOqUBHqM%2FKn4At8PsyJ6GdV%2B93NfrbBnxxyiGOv%2FOzyCxCX45OXa0ddlXHsgPlLy4ZuqgYQaNz1paoEYPBp5VQh%2BhA53X5gkzMXqOXGFupl3fd4pQrZ1hjRAfzvkvju6xD54sap%2BahoU%2BlTXx5kIJI706iNhuq0yQ4huICiIWsEy1wbx2hGvVGZoiLS1FaRVb0bDqgMk2H5fLJOykxhC4YgDiOlZo8K%2Fs&X-Amz-Signature=c1af432e94ca15de40cb039160797c535dc88736ad1d3f38d85e2aa88516f95c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V4S6TJX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC812ZW2S3fpx1x6mSgOQcCLOTERdlat41PymIVUCjS2gIgJFJQX15P8YWa8It1gPq3CW%2B5itEIWAj25CShm8yRAaoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOJOqFLyXlRRz%2Fn5cyrcA6RMPFzcUVZZiK2l6hyCHPeBrShtsZsNGqNnW9qY40d0AFTlIGAe8n9n145W9rWpgoO8GeYPMWs2Xp9nxFUGFxtNd2jXGW2svfi%2B2FavMOGc%2BCbEq4SrwZAGhj1HheeVRBkBcxiUzodC2SndhR0R%2FeJAc5PpFt%2BB5Et8xz9Dq4Xum3VRqWhZSSBWupU5mON2foHqyaGraUQObo6NXvQtFFZ8JQp1JqKtCKoySLChT9UNAmqyWZoWri48tEP8%2Bz4KGPfkNB2b6rEnmY4jErxk8G1eqKE%2BW1C50ZrT0a1m9mDI%2BbyrvWG8QNf1o07mSrGdk7iU3P2Ia%2FYBMmY2KBj6RWZVMcfeWG51aKdw0s49cQH5fD6EQEVpfZGeNHji1li%2BZ9wr2%2FtwejzEs5eHaMxrVT0ozqH9T9DqB%2BSfZX2ZBAAafAjOW9mqQJ%2FBiTy6NGDzAlLLGIUvTDgcyXPcN7BVolyU5rG3zeZLgOwxUd8pcNN1ozo%2B3EDrX5uOFbtJilExXB7NpTHVZZh2Tpj6NqfSdfJVfASbMCwNJEtdzRp86CtLdsjXqhaPLxNw9XBlZmXMGOAQ4SVsPDGfl3W715clMdYLoXzKQgy30i37yG2VSU0Uw5UoFFaBa9tizS1PMILF0ckGOqUBHqM%2FKn4At8PsyJ6GdV%2B93NfrbBnxxyiGOv%2FOzyCxCX45OXa0ddlXHsgPlLy4ZuqgYQaNz1paoEYPBp5VQh%2BhA53X5gkzMXqOXGFupl3fd4pQrZ1hjRAfzvkvju6xD54sap%2BahoU%2BlTXx5kIJI706iNhuq0yQ4huICiIWsEy1wbx2hGvVGZoiLS1FaRVb0bDqgMk2H5fLJOykxhC4YgDiOlZo8K%2Fs&X-Amz-Signature=fb0a2e1397c884fb8e0a77986cd8476c20529e61d4d1be1f47fc25874a5a2cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

