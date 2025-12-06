---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQYOF74P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICc3zG1GmUS9nWhM6aRqaYrcOrUuVvuy6DfZd4xrVq7mAiBuFZUdL9jGLSZ7YLZUbNJvIxY5ezY9EgCkwTkIvDDj4Sr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMY6Y4buJC12E8K74bKtwDRouXNswdGlE9F60sGLodUNUqTTTXXSp85GdDW2zKALZ0jIfpl97zjG%2Fy0s%2Fwr%2Bt%2BHm3Mn0BwXPuozKS1owS9iIP0tjuBCRQH9AbAIBWowotlBqcFsPj6hMt%2BzSucbiDTFkpgr9DuZaJonvnDzqRjffgZhikn0XuDcP2XhgLjSDjP0eRVGK8prYVb3V%2Bdf1EX9ZZV3Tm5upQHeZghocxw1d%2BOpIulo3P5BaVSDhOGMpwl9V1WwqJBjeXM7fiTSuIhWj8K%2B1UuXKwzoaXgTCKq8QZ4DWnMHrZerp23fY%2FYYPqIxSgbVErv7MnAIPGeSVuOBY5qDCgVehqNWY9amw5PNpBrJUh384%2B3NGiQhU8dso7ZSP8MxgWaTZTAw3joKP%2F5253SCNscpFEuOku1DKVHfASVtbCEYyLrcmgXtD0NwqbFbPdvneq28EGwiFzbnxyv9rrH%2B18VsspsraURyHLuE53xi47zNBZJc%2Few4JGXs2xkPmh4uHUdAx0nbKIDIwdkEV4fgnlXJ879M5yupVKENm5PrCKAA32924nYjOX57s2aqRXLDf0rAtkzRKOcztLTh8wNVaRvoRjpQlgYowCtcYZ93aNI7thoS8TdiHpejVAVd03fjC8V3cPf7O8wl7zPyQY6pgFurSZo6%2FxjBlvXYmvuqaBZH%2FIR5shHuisAPg%2FaXZrxZimkYyw1buNbUq8siVRumY%2Bed0yPJbyjcWbkmUjKempCqVd68TOgfBPbPqxqlgkdYWhiibhjgofKEPn8WQivlu5cDXDb6FzBvReujCwcZq8oXAfjqBwsrEaSHtw%2BQw9RXfln4Uk%2BJ2G56yAwjQN617OYF%2ByEHDvRxCssFuSQ8c%2BMpI4avnx1&X-Amz-Signature=c1b4fc49751f1ed8e6d8b00990b48b227cc82b50e63342cdb9fb7b9dc71cac54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQYOF74P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICc3zG1GmUS9nWhM6aRqaYrcOrUuVvuy6DfZd4xrVq7mAiBuFZUdL9jGLSZ7YLZUbNJvIxY5ezY9EgCkwTkIvDDj4Sr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMY6Y4buJC12E8K74bKtwDRouXNswdGlE9F60sGLodUNUqTTTXXSp85GdDW2zKALZ0jIfpl97zjG%2Fy0s%2Fwr%2Bt%2BHm3Mn0BwXPuozKS1owS9iIP0tjuBCRQH9AbAIBWowotlBqcFsPj6hMt%2BzSucbiDTFkpgr9DuZaJonvnDzqRjffgZhikn0XuDcP2XhgLjSDjP0eRVGK8prYVb3V%2Bdf1EX9ZZV3Tm5upQHeZghocxw1d%2BOpIulo3P5BaVSDhOGMpwl9V1WwqJBjeXM7fiTSuIhWj8K%2B1UuXKwzoaXgTCKq8QZ4DWnMHrZerp23fY%2FYYPqIxSgbVErv7MnAIPGeSVuOBY5qDCgVehqNWY9amw5PNpBrJUh384%2B3NGiQhU8dso7ZSP8MxgWaTZTAw3joKP%2F5253SCNscpFEuOku1DKVHfASVtbCEYyLrcmgXtD0NwqbFbPdvneq28EGwiFzbnxyv9rrH%2B18VsspsraURyHLuE53xi47zNBZJc%2Few4JGXs2xkPmh4uHUdAx0nbKIDIwdkEV4fgnlXJ879M5yupVKENm5PrCKAA32924nYjOX57s2aqRXLDf0rAtkzRKOcztLTh8wNVaRvoRjpQlgYowCtcYZ93aNI7thoS8TdiHpejVAVd03fjC8V3cPf7O8wl7zPyQY6pgFurSZo6%2FxjBlvXYmvuqaBZH%2FIR5shHuisAPg%2FaXZrxZimkYyw1buNbUq8siVRumY%2Bed0yPJbyjcWbkmUjKempCqVd68TOgfBPbPqxqlgkdYWhiibhjgofKEPn8WQivlu5cDXDb6FzBvReujCwcZq8oXAfjqBwsrEaSHtw%2BQw9RXfln4Uk%2BJ2G56yAwjQN617OYF%2ByEHDvRxCssFuSQ8c%2BMpI4avnx1&X-Amz-Signature=e065c2512893905e067c90628ec2e5b595d54e8dce415eab6a88b64f2eedec95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

