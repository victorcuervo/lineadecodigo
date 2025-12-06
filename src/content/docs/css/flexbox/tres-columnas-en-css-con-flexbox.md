---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6O2KU4T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATZRQVHFePx0Yd94fxD6cgvR1k10CvWGXp01sY6i%2FHEAiEA11mPLVpP4sNyq4d7PzhLicZwFAaCzI%2B%2FqTkbQnakrWQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBHnD7ZGsKJCqyFO8CrcA0wPHME9S81aKsztnlHphwKQoVVYIoV2xSWvRjsxqSeCtC2g%2Fk7RZLF%2FaIW2QbkhMHoKk7xx0UHatapBJG8w6E%2B%2BUGw28rjE2Wacju0deMVAJlVRrKhtBueUvvtUlfHSuS8IR9%2Bc8Uukz44exFE%2BqTw3YVdSOmno0HIzcgTmEyIKo1iHN02jrym6%2FkpvlFaVM4eqgRPKemfA0exlJok9RSepGIc5IFV3AGVeABtQ9LE%2Fo%2Fu%2BGjH9mwmFSOMaB1S00Xa7OWdIKPPA5vd9dIWSCvxBcTWs004PtIGKYutxcV41P62hRAxmSx8dgFfVaYv15sEfMxzUXvgewEQ5ULTkPfhP4dCLEyEeu6%2BGwvCQJwJvMVqeaoWaKKyz8WgMWABHh4u0zzlF%2FLKCaR5GWq0iP3kTr9QKpurwVFRQsvba12JvJ0xJm%2BFdUcyAMUfU4Rk63J%2B9HdjT4BOGm6nGTThSkrH4AP9%2BTZtmDRXZgAqP2Bx2PaQi3ivzf3vvRQAKH3AXu5UJvG0uUFSbX8eHWy7qwwqlB9MtdvwzkEwyB%2B3IgSNOWZwSuBN3EybSFQSuWLWF4NxENGQr0Us%2BhRQo9s9BK6vpfzL63CMN8%2BSoE210rrAMukAFDh9%2FufjN01dlMICozskGOqUBGMDzvw2a4pjOWJxC2QKVEwX%2F3SbYlUT%2B1OD4iX%2BVd0AO3u%2BvvSpFA4XQqS1717m0bEyvx%2B%2BoiW%2F8eoqgrlvmkUEepV0fUfgbIujGwincVZW7cMUQUOIOKsOo87pP0X1SIEyE%2FAm2G2D0QMoqwAcaO4JKK5VvDeHYtIcan4GaBnrPfITEWXnx9w3u2Gf6%2Fc%2FgsO0SAk2Xu0SRDBAq8Uny5jpNmMWk&X-Amz-Signature=e6259c57f5c515a2860aa67398f4fa1f76e3dde3b89237d988b328310e41c611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6O2KU4T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATZRQVHFePx0Yd94fxD6cgvR1k10CvWGXp01sY6i%2FHEAiEA11mPLVpP4sNyq4d7PzhLicZwFAaCzI%2B%2FqTkbQnakrWQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBHnD7ZGsKJCqyFO8CrcA0wPHME9S81aKsztnlHphwKQoVVYIoV2xSWvRjsxqSeCtC2g%2Fk7RZLF%2FaIW2QbkhMHoKk7xx0UHatapBJG8w6E%2B%2BUGw28rjE2Wacju0deMVAJlVRrKhtBueUvvtUlfHSuS8IR9%2Bc8Uukz44exFE%2BqTw3YVdSOmno0HIzcgTmEyIKo1iHN02jrym6%2FkpvlFaVM4eqgRPKemfA0exlJok9RSepGIc5IFV3AGVeABtQ9LE%2Fo%2Fu%2BGjH9mwmFSOMaB1S00Xa7OWdIKPPA5vd9dIWSCvxBcTWs004PtIGKYutxcV41P62hRAxmSx8dgFfVaYv15sEfMxzUXvgewEQ5ULTkPfhP4dCLEyEeu6%2BGwvCQJwJvMVqeaoWaKKyz8WgMWABHh4u0zzlF%2FLKCaR5GWq0iP3kTr9QKpurwVFRQsvba12JvJ0xJm%2BFdUcyAMUfU4Rk63J%2B9HdjT4BOGm6nGTThSkrH4AP9%2BTZtmDRXZgAqP2Bx2PaQi3ivzf3vvRQAKH3AXu5UJvG0uUFSbX8eHWy7qwwqlB9MtdvwzkEwyB%2B3IgSNOWZwSuBN3EybSFQSuWLWF4NxENGQr0Us%2BhRQo9s9BK6vpfzL63CMN8%2BSoE210rrAMukAFDh9%2FufjN01dlMICozskGOqUBGMDzvw2a4pjOWJxC2QKVEwX%2F3SbYlUT%2B1OD4iX%2BVd0AO3u%2BvvSpFA4XQqS1717m0bEyvx%2B%2BoiW%2F8eoqgrlvmkUEepV0fUfgbIujGwincVZW7cMUQUOIOKsOo87pP0X1SIEyE%2FAm2G2D0QMoqwAcaO4JKK5VvDeHYtIcan4GaBnrPfITEWXnx9w3u2Gf6%2Fc%2FgsO0SAk2Xu0SRDBAq8Uny5jpNmMWk&X-Amz-Signature=b0f0fa3ec7f2f3eb456f7aea84658bda4e269d2647ee6290ea2f42ebea07cf91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

