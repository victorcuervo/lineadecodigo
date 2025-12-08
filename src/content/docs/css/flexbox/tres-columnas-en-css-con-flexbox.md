---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWZ4T4K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQDZhiUNaxEHWJjppqCIuzMzopuuouieXVHIKuD69F6AiEAh15ic%2FVzs0oL6m5O3YNRBEDGwyjfCJHjgzuOmBpc8PsqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh%2FvhtkahdITgxkFSrcAxEIZ%2F2ZW6Dg1ECysqZaYOYqcEWamasLySuTX%2BGUXI5jZUiC4Q6l2Dh2MxHwFcCzBbvJFOq8ap9G1mvo%2BMsHG866TXoMuHl%2Fez4woD8YMOhtSJwXwNexScQYLKWD%2B%2Fdyrr6hKI9G%2BkdVGvozoDBLCR9bzZ%2BJ9DQGTk%2B5r8GmshKvGaJvVuFTn5o67pAtc3DTQZHpx2wrD0ySuHYwWR9JjYtMumr3eb7oEKt66kn0%2BnjQ7rw%2B4d7YEv5eZFZjQLrkNcA31s7RCviZHimse6ndW6XnyXxO044MrE%2BtGMXw83JzfQGXX5PIxAz2E%2FZQPWHRsBKgCaEoBn4rv9s0Dc1IpSIIoagBY7YBJyVzG%2B33m0Z4cxp7IcQRFmZiYQRf7iJhAjtL0EJga4lE%2FKkukFsTDUX3O4j7k8l9qbe7NwIkOFeu9YHWXXORkYu16pXOZyZGXpHS3%2FyZWvHOb%2FQq9PA6NjCYVK1Z5wpv1iGpUO5tMk2CaOp5w6wyYBC4ckPmYlTi3GfnTM3UPfUrkpT%2FSRuSidOhbXKfxhXXV%2B0fr9lBRqHh0OdSCaYi2wkC2zBBwmfE8DYS2l2%2F8O2F20GtAFil3RZCtb5CnzvFG5N8Jtz5kcA3V2QxcS6dR4cXw9VuMLfB28kGOqUB8YIfBoS3j4oBcrxY3Zs1avqXO8n0W7mkNhujgPHsgjTuIPTHPqfinCk06adzDYQHKw%2Bdjz%2F7YoUNNPpbq1TG7ATZ7vUtPEjseSL178Tu7GTKRLrKuA1Tvt%2B1ubERsbj8QCr0sm7KljqgA1KKOJkuwBfCIDdQF2lrzK3MjaA%2F7cg0mRVeB7geKe0eg%2Bt0T6%2FZBsKJUe8YTl%2BQ3WQniQdXSaqtUYaQ&X-Amz-Signature=ffa62a864c394213cd8f3c225dc460b09acfd007ca430af4eba7f819bd1af906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWZ4T4K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQDZhiUNaxEHWJjppqCIuzMzopuuouieXVHIKuD69F6AiEAh15ic%2FVzs0oL6m5O3YNRBEDGwyjfCJHjgzuOmBpc8PsqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh%2FvhtkahdITgxkFSrcAxEIZ%2F2ZW6Dg1ECysqZaYOYqcEWamasLySuTX%2BGUXI5jZUiC4Q6l2Dh2MxHwFcCzBbvJFOq8ap9G1mvo%2BMsHG866TXoMuHl%2Fez4woD8YMOhtSJwXwNexScQYLKWD%2B%2Fdyrr6hKI9G%2BkdVGvozoDBLCR9bzZ%2BJ9DQGTk%2B5r8GmshKvGaJvVuFTn5o67pAtc3DTQZHpx2wrD0ySuHYwWR9JjYtMumr3eb7oEKt66kn0%2BnjQ7rw%2B4d7YEv5eZFZjQLrkNcA31s7RCviZHimse6ndW6XnyXxO044MrE%2BtGMXw83JzfQGXX5PIxAz2E%2FZQPWHRsBKgCaEoBn4rv9s0Dc1IpSIIoagBY7YBJyVzG%2B33m0Z4cxp7IcQRFmZiYQRf7iJhAjtL0EJga4lE%2FKkukFsTDUX3O4j7k8l9qbe7NwIkOFeu9YHWXXORkYu16pXOZyZGXpHS3%2FyZWvHOb%2FQq9PA6NjCYVK1Z5wpv1iGpUO5tMk2CaOp5w6wyYBC4ckPmYlTi3GfnTM3UPfUrkpT%2FSRuSidOhbXKfxhXXV%2B0fr9lBRqHh0OdSCaYi2wkC2zBBwmfE8DYS2l2%2F8O2F20GtAFil3RZCtb5CnzvFG5N8Jtz5kcA3V2QxcS6dR4cXw9VuMLfB28kGOqUB8YIfBoS3j4oBcrxY3Zs1avqXO8n0W7mkNhujgPHsgjTuIPTHPqfinCk06adzDYQHKw%2Bdjz%2F7YoUNNPpbq1TG7ATZ7vUtPEjseSL178Tu7GTKRLrKuA1Tvt%2B1ubERsbj8QCr0sm7KljqgA1KKOJkuwBfCIDdQF2lrzK3MjaA%2F7cg0mRVeB7geKe0eg%2Bt0T6%2FZBsKJUe8YTl%2BQ3WQniQdXSaqtUYaQ&X-Amz-Signature=29445690a401b25cba1a5df9bf7138b29974f47cc6bd88a338690cd9f3563f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

