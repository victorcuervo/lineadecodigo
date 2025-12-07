---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUNGJKEV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICISjJq3xmd06UXUOXn2FFA4D9rOqWzHvhHTDFfr8pBEAiAhboljsZspRiHyv%2F%2Bqnvc5cYtJkFfvunW3BlZ2fxJOHCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTq0Kf3JgCDynQDbfKtwDpY2l8Cj9IjEZ8RcypzdJ%2By170%2FCRG96MwWRfcP%2Fwjw%2FXXHGW%2Bb1Ky%2FD4wwt9Yoi58UeHsxmnvp43J5MARlJmWHwfzBKSAtRv8%2FnoRfd%2BJahvDeRUlib4En8xicXpIbeCFObnvMol7A%2F0pdOTOJjU7lDyMUQMM1vtVeXLb6%2F86k2otQeFEuHmhsEB1hQ41D8pg8qpxL4oJrf6sslSB1kww7AQNVfAKLwJQoy6KDL1mPDFcfC9qiVSczXnNXwvuL%2FN5eK%2Faoo0oEsyRq%2FsN34E4SsDE37bvld%2FhxpXV%2By43TR37wS22uJ%2BGzON%2FHcZfFXZiFJAUM4Mdbz1gO7SkU4cC6PODz51uGoZuFiQTHDykpkSlDJPKFrDbwQ8WYVUYEXWg6pDUvzgshXMyhrXTAfB2LNDsJIfavV46LWRmTXWKkczFRLdvV%2BrkzIq4j0wsFfkT84xPa9R7Udcfjmc9AzqZ4TyWYbkSMjWuC%2B4By2D12UJ8DGZdGj4iej3Nuxhp4mhoQYw6ME2TVTHiAEvTDpy7ovvgrAo9Kt9%2FEKcmZ4RSq4FjTgyr9m4fFtO5EVt7t1nir1kadAIdpQyLApwLO%2BmFo%2FQGGUiN2kYKhKVjzksCJzTs6StSolDX4ymO1gwgP7SyQY6pgHj8xraOD1%2BPpMDscW0F4GOtW61kRw7hIHUY%2BeDsUWa4LuXGxroIYSv4hQ3biMUa6830OOZvttClyKbkkcfaH9idEYQ5mpRayWJ0WZnZONdz506J9VHwBMGsjZOMjgRD91e%2BQheg4QyeUTxxrvof24bQQ1eyWKLkmrxLokHyAJuxc6zh26jJp2Wk7wNAdj9r9Fu61EbDxVRIbxUxrFXQmPSeXi3aCsk&X-Amz-Signature=5ff560afd9d3a163e3e0b114c5f14248b2cf2027c1bf61bb1860197c2ccb8132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUNGJKEV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICISjJq3xmd06UXUOXn2FFA4D9rOqWzHvhHTDFfr8pBEAiAhboljsZspRiHyv%2F%2Bqnvc5cYtJkFfvunW3BlZ2fxJOHCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTq0Kf3JgCDynQDbfKtwDpY2l8Cj9IjEZ8RcypzdJ%2By170%2FCRG96MwWRfcP%2Fwjw%2FXXHGW%2Bb1Ky%2FD4wwt9Yoi58UeHsxmnvp43J5MARlJmWHwfzBKSAtRv8%2FnoRfd%2BJahvDeRUlib4En8xicXpIbeCFObnvMol7A%2F0pdOTOJjU7lDyMUQMM1vtVeXLb6%2F86k2otQeFEuHmhsEB1hQ41D8pg8qpxL4oJrf6sslSB1kww7AQNVfAKLwJQoy6KDL1mPDFcfC9qiVSczXnNXwvuL%2FN5eK%2Faoo0oEsyRq%2FsN34E4SsDE37bvld%2FhxpXV%2By43TR37wS22uJ%2BGzON%2FHcZfFXZiFJAUM4Mdbz1gO7SkU4cC6PODz51uGoZuFiQTHDykpkSlDJPKFrDbwQ8WYVUYEXWg6pDUvzgshXMyhrXTAfB2LNDsJIfavV46LWRmTXWKkczFRLdvV%2BrkzIq4j0wsFfkT84xPa9R7Udcfjmc9AzqZ4TyWYbkSMjWuC%2B4By2D12UJ8DGZdGj4iej3Nuxhp4mhoQYw6ME2TVTHiAEvTDpy7ovvgrAo9Kt9%2FEKcmZ4RSq4FjTgyr9m4fFtO5EVt7t1nir1kadAIdpQyLApwLO%2BmFo%2FQGGUiN2kYKhKVjzksCJzTs6StSolDX4ymO1gwgP7SyQY6pgHj8xraOD1%2BPpMDscW0F4GOtW61kRw7hIHUY%2BeDsUWa4LuXGxroIYSv4hQ3biMUa6830OOZvttClyKbkkcfaH9idEYQ5mpRayWJ0WZnZONdz506J9VHwBMGsjZOMjgRD91e%2BQheg4QyeUTxxrvof24bQQ1eyWKLkmrxLokHyAJuxc6zh26jJp2Wk7wNAdj9r9Fu61EbDxVRIbxUxrFXQmPSeXi3aCsk&X-Amz-Signature=f58f594eac615d80ba686d8f4cbc8c0c5a734c3c39863f9b6e1fa3efcf8d22db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

