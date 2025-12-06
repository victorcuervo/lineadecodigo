---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ7KME5G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHte%2BZ5y7JxBi%2BRf6UmdrE6ksqbBQhkYlFE96G866SEbAiBP%2B2U2JZ4xpXzzjzuD616%2B3kFDkkPgxreUzRmdtWf2lir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMuMv%2Baw2s2eMHFbGWKtwDT9QKp5LmW5n8tQ3uX7KhU1MywIvWbKOhXCv3LzuA828KHsdTt2VBseLgNJDPxmVPovPKNmHkMAccrFQE34cZK86gdPtoAHMC2niC8A2Wc4%2BUGeVzR%2FTpWqnQERuClhJH9kRvBfRQWqmAs6gNiw63l9jlcL7nWetxsw3tPS0kmBkimMOjoCSEjcCPXkymguQQe2Js9ERxAnujLWekGnfjSn2q9cCf%2BK1MsmnefkxhV2a4cvcttMxSg9uD%2F0Cht0gJEzXTQyXCUSKxDvnoArjJhLoE6uFNLQiae7hQC7CAZKpvu45Jp74ojrKLq4oayrES7f666qMnVHAIz8%2FZUuLJr%2BEDYBK%2BP8LhhqBFkKOoqwc2x8qxeUNMJQNjS4xCf%2FGflwH006X1RkDO3uwTh%2FCzkBQpgRvk%2BWjQxhGQ46pZBk3paaInjpQNxvc66GznROpuEiLL2wdGIrm%2FXMWqtMhb2r0mr3MAQyCFTS%2BbooHPBsQ468Om6kjCdq1ej0OIM%2BgiDhgrGOj9BcKFsUIirbxRl%2Fmr%2BWyJcfeIILA2LrsHfQK0Ozn5F3RbUGoRWEOQ3ODk%2B%2F3PoncNBOSCtP%2BTW%2BeK5Z3ilwXgYNUjV5TAAGwCsysjiozuZN3MHe5PJ6swxabQyQY6pgGbkiiFOkutYubcnf6KO1OwlvDM4Lirfnr1t%2FR1bi6Jdff6b9F7Vas2PcrfFubrC7cAWVT8OyYeSqPtTK6Y3JR3BpyS6B6aq4Yh1Ff%2B2iCfjcee5P%2BR9svkJsBjQUu%2BvOsTFE4HZLwwj2Xh7U05ClAZCla04V5YTI%2BVIYe7z9rjyDGi7uj00MeDnPu2y4G7%2Bdq1hT87FKKZa0z0xDyBRvvwnU7hvCAa&X-Amz-Signature=c1bae959659a71ef93aecdd1d4f014732e280e83bad14caeb247acdd3700b7b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ7KME5G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHte%2BZ5y7JxBi%2BRf6UmdrE6ksqbBQhkYlFE96G866SEbAiBP%2B2U2JZ4xpXzzjzuD616%2B3kFDkkPgxreUzRmdtWf2lir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMuMv%2Baw2s2eMHFbGWKtwDT9QKp5LmW5n8tQ3uX7KhU1MywIvWbKOhXCv3LzuA828KHsdTt2VBseLgNJDPxmVPovPKNmHkMAccrFQE34cZK86gdPtoAHMC2niC8A2Wc4%2BUGeVzR%2FTpWqnQERuClhJH9kRvBfRQWqmAs6gNiw63l9jlcL7nWetxsw3tPS0kmBkimMOjoCSEjcCPXkymguQQe2Js9ERxAnujLWekGnfjSn2q9cCf%2BK1MsmnefkxhV2a4cvcttMxSg9uD%2F0Cht0gJEzXTQyXCUSKxDvnoArjJhLoE6uFNLQiae7hQC7CAZKpvu45Jp74ojrKLq4oayrES7f666qMnVHAIz8%2FZUuLJr%2BEDYBK%2BP8LhhqBFkKOoqwc2x8qxeUNMJQNjS4xCf%2FGflwH006X1RkDO3uwTh%2FCzkBQpgRvk%2BWjQxhGQ46pZBk3paaInjpQNxvc66GznROpuEiLL2wdGIrm%2FXMWqtMhb2r0mr3MAQyCFTS%2BbooHPBsQ468Om6kjCdq1ej0OIM%2BgiDhgrGOj9BcKFsUIirbxRl%2Fmr%2BWyJcfeIILA2LrsHfQK0Ozn5F3RbUGoRWEOQ3ODk%2B%2F3PoncNBOSCtP%2BTW%2BeK5Z3ilwXgYNUjV5TAAGwCsysjiozuZN3MHe5PJ6swxabQyQY6pgGbkiiFOkutYubcnf6KO1OwlvDM4Lirfnr1t%2FR1bi6Jdff6b9F7Vas2PcrfFubrC7cAWVT8OyYeSqPtTK6Y3JR3BpyS6B6aq4Yh1Ff%2B2iCfjcee5P%2BR9svkJsBjQUu%2BvOsTFE4HZLwwj2Xh7U05ClAZCla04V5YTI%2BVIYe7z9rjyDGi7uj00MeDnPu2y4G7%2Bdq1hT87FKKZa0z0xDyBRvvwnU7hvCAa&X-Amz-Signature=0454ab80434b435166b046c0aabacb8a9bc657be380c5d2d573661d1b9f4a927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

