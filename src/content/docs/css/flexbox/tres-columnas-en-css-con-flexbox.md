---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666SOVNT4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBD85EsBFZrf6yfUNICrb%2FAwLt7AKxJ76AS%2FllWSeMdAiEAiPLGbBMfj%2Br4cVOVdF5WM4aRnUQ9%2B1TiOXvDwldfjz0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBdM2xT44iON5D2f4yrcA3jkjVsO4EXrnATG6BY%2BjjfeRGLyIgbK20EvLHPIx6RFE6Ft2mFfBxj8MwsicOJXpDVkBnH7M5WG2XUr8eBVYbJ5KDc3%2Bde%2B5jgM2BkepdSeu8Xde8f0uObeOsUPxpO6ZK%2BL0nl0LrzpW2xAEIKDFJ%2F%2BQbR1pH8FD4XVJdypxsaL5zHQ82DVVxDxff7psShlXRBqRHQpTfWd%2FhYusSaLQGRn3E%2FBlcPZYYy5ch68Lrnr5LBhgNCPNjXMV64VPhGpCw0J5XNCPXb6kwPIFzWX%2BERHrNsiKyJlVRIEO74wzEmlzVpCpowBfK9P5roGwgaFOBjBtT6E%2Byc2Yd7meYigvQkTngqMCmX5VxlSQyu1YAw3CqMtwiGjz17fMEp9jOA%2BYT3Rjz6w%2FdVnrFVJdbJG4kSP6R6jlRh%2FndQqw5g0SaQBZawiCTkFSVFUFd%2FlVl2ODGOHhQ7DRvgCPIY8ONQPt3Np8AY9yGEw2Npe41lhkw3g34euAnmCFm%2F%2B%2B6kFvjQ7VoIa%2FJKhB%2BznltVAwQpoCatIawtIqVNRdWTyEgjsNxF%2FVf%2FiJgLmUHv5bR2GHNXdo6zVnKV%2BYINWjNbY8BT8iuFR7GZPsXDu%2BGpd9Xp52H%2F099t5cq0%2FlPbylskyMLD%2F0MkGOqUBzzzylWT2VZic6SEWR%2BDGibaqazxV9SNpFaG%2FZfULyU14i%2FitN76SZPkbB%2Bp0uE4u6gbXifnsobXwic4faKndWCdkdOe9am6M1fd2hJEF84SoQUAfWIlSeELz9WVp9kl9dBYcO%2BfJ5qRtShFOSMHnBvocNOkybkVkxiHc6wN5pTBYh2YuD5pdq%2FfjWvH2tZTb3xcbbyzNBiFf5djMcLMfdKWDCq4j&X-Amz-Signature=622ca51c840a8a8a6617d264318aa9369e75a4f999080d9288d8f132a0233597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666SOVNT4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBD85EsBFZrf6yfUNICrb%2FAwLt7AKxJ76AS%2FllWSeMdAiEAiPLGbBMfj%2Br4cVOVdF5WM4aRnUQ9%2B1TiOXvDwldfjz0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBdM2xT44iON5D2f4yrcA3jkjVsO4EXrnATG6BY%2BjjfeRGLyIgbK20EvLHPIx6RFE6Ft2mFfBxj8MwsicOJXpDVkBnH7M5WG2XUr8eBVYbJ5KDc3%2Bde%2B5jgM2BkepdSeu8Xde8f0uObeOsUPxpO6ZK%2BL0nl0LrzpW2xAEIKDFJ%2F%2BQbR1pH8FD4XVJdypxsaL5zHQ82DVVxDxff7psShlXRBqRHQpTfWd%2FhYusSaLQGRn3E%2FBlcPZYYy5ch68Lrnr5LBhgNCPNjXMV64VPhGpCw0J5XNCPXb6kwPIFzWX%2BERHrNsiKyJlVRIEO74wzEmlzVpCpowBfK9P5roGwgaFOBjBtT6E%2Byc2Yd7meYigvQkTngqMCmX5VxlSQyu1YAw3CqMtwiGjz17fMEp9jOA%2BYT3Rjz6w%2FdVnrFVJdbJG4kSP6R6jlRh%2FndQqw5g0SaQBZawiCTkFSVFUFd%2FlVl2ODGOHhQ7DRvgCPIY8ONQPt3Np8AY9yGEw2Npe41lhkw3g34euAnmCFm%2F%2B%2B6kFvjQ7VoIa%2FJKhB%2BznltVAwQpoCatIawtIqVNRdWTyEgjsNxF%2FVf%2FiJgLmUHv5bR2GHNXdo6zVnKV%2BYINWjNbY8BT8iuFR7GZPsXDu%2BGpd9Xp52H%2F099t5cq0%2FlPbylskyMLD%2F0MkGOqUBzzzylWT2VZic6SEWR%2BDGibaqazxV9SNpFaG%2FZfULyU14i%2FitN76SZPkbB%2Bp0uE4u6gbXifnsobXwic4faKndWCdkdOe9am6M1fd2hJEF84SoQUAfWIlSeELz9WVp9kl9dBYcO%2BfJ5qRtShFOSMHnBvocNOkybkVkxiHc6wN5pTBYh2YuD5pdq%2FfjWvH2tZTb3xcbbyzNBiFf5djMcLMfdKWDCq4j&X-Amz-Signature=07fd15351a2e4b196e1aa5d8abb55c869d111ad51137cbfe1178c99467c345bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

