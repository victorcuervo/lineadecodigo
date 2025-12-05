---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URVKD72T%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FJqtJUIsoSkDRE5R6wSifBy6lCqR%2FnI1QCygA%2Bf6ycAiA5ilRpr%2BPgtFD1FqGg3qVjvBM%2FfNGJQdov9TvbvLTy0ir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM2FH7%2BqCELYl3Zrv0KtwDG2B%2B2rMns%2BtzjEYOyyxaLd2%2Buy5W2kMfmIMYXaPTzddinnYD0%2FXmHyxI50N9zjrz1H%2BX5yuOs7D%2FQrB%2BBdktY6BM%2BX7sb%2B21nVlpLngZDhfAwksEYl3kyMhRHD313oFV8She7v33PzbyPhkwfv0T3fogQAnaQkjCDt1HUpkNH3ikUlW%2BuopsyGlSGhSnZEyxWwJ4bQ2e%2Fg0IHK%2FXbXPn7pE3cJy3IxcQoB7udLc4ZO36Q%2BS%2BIlb2EvTchlkjnZN%2FNkFf%2FS7DxL4lWN7B0ZICGhSSsX7O5%2FpnkhgiWjZKIxozr7822uhsv2tJqyUfAS0yLVzhMUGzUojyEgRRpkLIfEb45Cqw7eDH9hA3UNT%2Ftz0STwE%2BVNvU9mgKjsEwQOzr%2FswuN2KA1lPY%2FfNWw25ehKVogAhDhahX5ZhKnZpKN%2B1iRW0I4ecozPlOQLPOXlgSUKsRZOgiANnOXkIM4oC%2FX43KDuy1zWOX77lSMhqS%2BdrEdUm7ecWbRVkE08T2MnL9W0%2FRn%2BjOH87d%2FagagJpY5FeRBBRihtmoIaoiKBPt6BW6dWwwW3FU0%2B%2B0KXl%2B2DXuS8eUL%2BqWoaBk8z8Q5sD0tDx%2Fnq2yafmmNj8Y6jfkIjSqcaAsr7yPnBdYxXkw%2FebLyQY6pgFHMevM%2FZIK0B18XlsE3nFoZ9yBvCslIHqx9fVGtwbl%2F0UMsbNsz0CuIMeYsy5c1ENmfVI2Xgo8theHcmtl5gDWuAtvPlTG9m4oaAOefxkOlv9n3znF48v%2BvNoJdWSGJvNWFaEFHqmqg24%2BOEdXngtXopVU%2B7rpxQxHyokqoZtvEZ4nCjg1qjO7JlCbk%2FueeelplrudM2svbq%2Fi4UpigUPqnBJqRg2M&X-Amz-Signature=320a088a74bbc29ca8b2169405ac0a181d35fda903e0f1e87dfe8439a846063f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URVKD72T%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FJqtJUIsoSkDRE5R6wSifBy6lCqR%2FnI1QCygA%2Bf6ycAiA5ilRpr%2BPgtFD1FqGg3qVjvBM%2FfNGJQdov9TvbvLTy0ir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM2FH7%2BqCELYl3Zrv0KtwDG2B%2B2rMns%2BtzjEYOyyxaLd2%2Buy5W2kMfmIMYXaPTzddinnYD0%2FXmHyxI50N9zjrz1H%2BX5yuOs7D%2FQrB%2BBdktY6BM%2BX7sb%2B21nVlpLngZDhfAwksEYl3kyMhRHD313oFV8She7v33PzbyPhkwfv0T3fogQAnaQkjCDt1HUpkNH3ikUlW%2BuopsyGlSGhSnZEyxWwJ4bQ2e%2Fg0IHK%2FXbXPn7pE3cJy3IxcQoB7udLc4ZO36Q%2BS%2BIlb2EvTchlkjnZN%2FNkFf%2FS7DxL4lWN7B0ZICGhSSsX7O5%2FpnkhgiWjZKIxozr7822uhsv2tJqyUfAS0yLVzhMUGzUojyEgRRpkLIfEb45Cqw7eDH9hA3UNT%2Ftz0STwE%2BVNvU9mgKjsEwQOzr%2FswuN2KA1lPY%2FfNWw25ehKVogAhDhahX5ZhKnZpKN%2B1iRW0I4ecozPlOQLPOXlgSUKsRZOgiANnOXkIM4oC%2FX43KDuy1zWOX77lSMhqS%2BdrEdUm7ecWbRVkE08T2MnL9W0%2FRn%2BjOH87d%2FagagJpY5FeRBBRihtmoIaoiKBPt6BW6dWwwW3FU0%2B%2B0KXl%2B2DXuS8eUL%2BqWoaBk8z8Q5sD0tDx%2Fnq2yafmmNj8Y6jfkIjSqcaAsr7yPnBdYxXkw%2FebLyQY6pgFHMevM%2FZIK0B18XlsE3nFoZ9yBvCslIHqx9fVGtwbl%2F0UMsbNsz0CuIMeYsy5c1ENmfVI2Xgo8theHcmtl5gDWuAtvPlTG9m4oaAOefxkOlv9n3znF48v%2BvNoJdWSGJvNWFaEFHqmqg24%2BOEdXngtXopVU%2B7rpxQxHyokqoZtvEZ4nCjg1qjO7JlCbk%2FueeelplrudM2svbq%2Fi4UpigUPqnBJqRg2M&X-Amz-Signature=b1af503d4a4dda19ba771133c2b02afef83d33b5dcff29d82430acc0f01629fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

