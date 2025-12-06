---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2TXSLMZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B486vj4XOBKqdNxbF3%2BUfegP%2FUjAj5fl5vVuuyALdqQIgVEAXvXK%2BsHrGB589zvfa0CzGZD%2B6jZMLZHxz8SR%2FgCkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLY0g4aEV%2BC%2FU96IgCrcA2Tuu0GBsyq%2Fv%2FfYhY0owyEdFMkf5ch%2Fxv6unvlQVyqrCd%2F2zDgVeyQ4pES79KIuvcgY8RLO35T7cLKHsyEmo%2BAetwtBr92b%2BIOMZePY5%2BdIOr6BV4jJXxTBQPN6S2BaqR6KtWC0y95bYWUAW06IwavSSKihbzpNWS6I31lRVyb0fIGKO2kKS3OsliucNbY54RUm1PNPSXcDrp3l2UCzzM5guOYKf060AlMbz54apPdoXxC5%2FPDo%2B7Z7LFnJxmtj3gFH3GFO%2F6SoeQtaqTzfMkHjIzAUUA1TT0lIciJS5zG3RqKzcR7%2Bi9QP1F3wBcXJEYZnaCxMy3qQwL7kj3%2FPGAndT2%2BpK2NeHkHilAZ%2F90PGwQmRjc0u22iBeJv%2FHJNRQ8vUKDorKaUhvUHDBaa8rJP52wYM4r9Ucd%2B%2BNeLPl%2FePEWbkcPz8nJObUpFSuyvlg%2Fr7NOPjh4Ygsj36EB6pfbuqqz95HV7VEpODRIZva1%2B%2FVBEA7P1pBp8XbZSHku8PZf3%2Bw2c9e4Uz1xLzQ0m8Kirow%2F3u%2B0W1DrvyL4iNzCw9ktf58SurrMkPGJsle7Po77JUy2unnnZOWICjbeUQBAoIumfysC%2BKye9ky2p5UYFmks7xrjr1UwCWsJN5MIXrz8kGOqUBBmEBg3qt5BdwsniTIQLMwDs3nM3EBs9vm5Z4NpacmxJ92re67hdcdaDbZ9P%2F5hSsSXJXwOxkimMJ33XDYy72jskfpjds6Xsnpi03n5FWqBjvU5eyxC97nswIi9uNhchpkU8%2FkN%2B3bgKmispOAXGbsnSzvJepGw7E87UkeqVGpdfE7DkqvobDfolJ3AFC0RT0qB9KP3J55sQvtL9A6JWD%2BIgJ2Bdg&X-Amz-Signature=5aad7b3077313bc11d33f349d32614912b6247bcedb8c82b4860270bb3feb739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2TXSLMZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B486vj4XOBKqdNxbF3%2BUfegP%2FUjAj5fl5vVuuyALdqQIgVEAXvXK%2BsHrGB589zvfa0CzGZD%2B6jZMLZHxz8SR%2FgCkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLY0g4aEV%2BC%2FU96IgCrcA2Tuu0GBsyq%2Fv%2FfYhY0owyEdFMkf5ch%2Fxv6unvlQVyqrCd%2F2zDgVeyQ4pES79KIuvcgY8RLO35T7cLKHsyEmo%2BAetwtBr92b%2BIOMZePY5%2BdIOr6BV4jJXxTBQPN6S2BaqR6KtWC0y95bYWUAW06IwavSSKihbzpNWS6I31lRVyb0fIGKO2kKS3OsliucNbY54RUm1PNPSXcDrp3l2UCzzM5guOYKf060AlMbz54apPdoXxC5%2FPDo%2B7Z7LFnJxmtj3gFH3GFO%2F6SoeQtaqTzfMkHjIzAUUA1TT0lIciJS5zG3RqKzcR7%2Bi9QP1F3wBcXJEYZnaCxMy3qQwL7kj3%2FPGAndT2%2BpK2NeHkHilAZ%2F90PGwQmRjc0u22iBeJv%2FHJNRQ8vUKDorKaUhvUHDBaa8rJP52wYM4r9Ucd%2B%2BNeLPl%2FePEWbkcPz8nJObUpFSuyvlg%2Fr7NOPjh4Ygsj36EB6pfbuqqz95HV7VEpODRIZva1%2B%2FVBEA7P1pBp8XbZSHku8PZf3%2Bw2c9e4Uz1xLzQ0m8Kirow%2F3u%2B0W1DrvyL4iNzCw9ktf58SurrMkPGJsle7Po77JUy2unnnZOWICjbeUQBAoIumfysC%2BKye9ky2p5UYFmks7xrjr1UwCWsJN5MIXrz8kGOqUBBmEBg3qt5BdwsniTIQLMwDs3nM3EBs9vm5Z4NpacmxJ92re67hdcdaDbZ9P%2F5hSsSXJXwOxkimMJ33XDYy72jskfpjds6Xsnpi03n5FWqBjvU5eyxC97nswIi9uNhchpkU8%2FkN%2B3bgKmispOAXGbsnSzvJepGw7E87UkeqVGpdfE7DkqvobDfolJ3AFC0RT0qB9KP3J55sQvtL9A6JWD%2BIgJ2Bdg&X-Amz-Signature=500162f28007acdc93f1b18f075a01aa60de2d8da2747d14cd7a7893e78a3189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

