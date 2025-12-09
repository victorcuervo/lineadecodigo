---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPXDYUZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgFro2NDyMLvRwggGGHpAnnm9scn3bZHF1tc87WfdabAiAyuMf3%2BOJRllmcirKHcgY0LmBr1YzjnARRhQi88uVVSiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME9lawjjWJMT8bJ4cKtwDFnsV5AJsJxhjYMSVJidoypSPmwDP7wLYr92ishARgH0ri9H9fqMHntiu4CDfXTmRH5lY9OvT4Xj3rQaokj0zCQCiJdY5sXU2uvOdLXX8SVRMb%2B0K%2BLp3vcCJR3ssmKzb%2FbnqPT2P9dK7ipL2CgliJcy5I8diHvgabqE0QfoXqqozBLppjoU1KzkwKbyhvTd%2BtGgk5d%2FTGj93n%2Fc407V7xYTcaCLH0e12AM%2BUwTPVGo7Sx%2BCe1YBLGWvfceAJAW5nf4%2Fw1U8lnIOM%2BtIGTrBSdE4mziOfQwk3DrT0GcrgW6qXrQKOE6o7Dr3mkwqKTNVO53FFGETb%2F7ee16b92TukMNOOON%2FvkRrucFE9ZVDXwj6UL0hl90kBi8NlXzJsMC0gjMv%2Bfqu5bX3A6iD%2Bblvz5Zk8bg04gC5xxw1zVaTpJS0YnF1uOguJLV81pikPCqOsXXDx%2BAcoSbaQS0a3q71AZR4oPu8%2Bk272mSxJ0PQXEKVSWR%2B9gKBOAlpOoEM67UbjJRGUe8GDdov7wqPvnuPq8dn%2B0Q%2FuPkdixtgpyoYlDnCrpoo1FuFGD0%2FpkuDkTrX6zwGEgzvgZWSEucttdrD6dDQDN6eyXt3DVADhVxjl3D2YJ1M72mt5Ct7BUkUw%2B%2BndyQY6pgFBOsEuXSvvHCagcj8ONaP4%2BdNvrDxDeZUFci8sdBfKSkB4lXqVuuvIdq9ec8z%2Bjzpb%2BbNVlo0wsiWRZ%2Fy3MhLWIx2%2FZSY%2Bbo1buQcj%2FZXnJnaNAANMtbmlPqkMnn8cLrPHHwuOxRcDKl5h5ZRg%2F%2FiKee27o0q%2BVtFjFmjNfIwswJda34%2Bs98lHJTj9jyn4aZfaGMxcENbNlT3UWKVe6b3wdmMgKDjG&X-Amz-Signature=b2cbe768c70f82144972fb3da0bbabe1d3ea75b117d6b89d9c4cf1b3e519bb86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPXDYUZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgFro2NDyMLvRwggGGHpAnnm9scn3bZHF1tc87WfdabAiAyuMf3%2BOJRllmcirKHcgY0LmBr1YzjnARRhQi88uVVSiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME9lawjjWJMT8bJ4cKtwDFnsV5AJsJxhjYMSVJidoypSPmwDP7wLYr92ishARgH0ri9H9fqMHntiu4CDfXTmRH5lY9OvT4Xj3rQaokj0zCQCiJdY5sXU2uvOdLXX8SVRMb%2B0K%2BLp3vcCJR3ssmKzb%2FbnqPT2P9dK7ipL2CgliJcy5I8diHvgabqE0QfoXqqozBLppjoU1KzkwKbyhvTd%2BtGgk5d%2FTGj93n%2Fc407V7xYTcaCLH0e12AM%2BUwTPVGo7Sx%2BCe1YBLGWvfceAJAW5nf4%2Fw1U8lnIOM%2BtIGTrBSdE4mziOfQwk3DrT0GcrgW6qXrQKOE6o7Dr3mkwqKTNVO53FFGETb%2F7ee16b92TukMNOOON%2FvkRrucFE9ZVDXwj6UL0hl90kBi8NlXzJsMC0gjMv%2Bfqu5bX3A6iD%2Bblvz5Zk8bg04gC5xxw1zVaTpJS0YnF1uOguJLV81pikPCqOsXXDx%2BAcoSbaQS0a3q71AZR4oPu8%2Bk272mSxJ0PQXEKVSWR%2B9gKBOAlpOoEM67UbjJRGUe8GDdov7wqPvnuPq8dn%2B0Q%2FuPkdixtgpyoYlDnCrpoo1FuFGD0%2FpkuDkTrX6zwGEgzvgZWSEucttdrD6dDQDN6eyXt3DVADhVxjl3D2YJ1M72mt5Ct7BUkUw%2B%2BndyQY6pgFBOsEuXSvvHCagcj8ONaP4%2BdNvrDxDeZUFci8sdBfKSkB4lXqVuuvIdq9ec8z%2Bjzpb%2BbNVlo0wsiWRZ%2Fy3MhLWIx2%2FZSY%2Bbo1buQcj%2FZXnJnaNAANMtbmlPqkMnn8cLrPHHwuOxRcDKl5h5ZRg%2F%2FiKee27o0q%2BVtFjFmjNfIwswJda34%2Bs98lHJTj9jyn4aZfaGMxcENbNlT3UWKVe6b3wdmMgKDjG&X-Amz-Signature=6be0db1854495623babf6ae136da5f4007ee56c6bf15ef9d615184b2c227a724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

