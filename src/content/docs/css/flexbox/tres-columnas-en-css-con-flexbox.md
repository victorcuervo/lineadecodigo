---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCJIEML%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAypQsMQ%2BrTlotNxRuorjID9w86mL%2Bq5EcqIYGvBoVl6AiAQXaRHgU%2B4s2ISxtHReAwQGPTWfIYF%2Bp0mq4Pq96c1sCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMeTjruBDqilcbGMa5KtwD0SZ866cH%2B5lyw8nDst%2BukP93L%2FEJLQX18JAhufG0%2BYkuVe6K0zl3QU17MPpshfQfErJ4%2B%2BztkAQQS4fUS0RaSOTeqxLd9%2FHo8KvLspX%2FE9GHVP27PVmeuk1769VB5kcf207qXqq0ZtXJ0nWRnOfMHy3zrC2enDaNV10WE2vgxdnQ8YE%2F7hkQK0A%2FDI%2F0G4brX2Jl8XsPM7o3CsdLLxuMH5Ulr%2F39ynRQXxEZXDibijsV2DRumC68WT6ep5ROjcBhXG5tDoZ0uQPq%2FWlfItd9%2BDPKcFWIPAjG%2B3kvbKDSsk%2BSB9L8FDgdZwTNG%2BhoA2AVtyZOnPepM6an8g0IZuXDLKUXbH8CXX%2FkgEFM4ZoPvgoSItkpYzfrasmOX8ZSVPwSAmkDrqki1L5JhXe2ACdUpEGCjR5Bm5XveIKlX06HnRthar5%2FDN8CBsE3SAK2d1pF6WVQ43Sc6ykgqSPhvIffg8Fjk896kmxN58aOqnWrHC0B9NgWGTOpSpgbV6Iqa9%2F2jx%2FbXQZLU78Ep4X5%2Bj7ldBFpFCjIurTtH98dCgc7qCy9dhaCALwGnE9JRIneOMO9o1GDJ5b6EvyTXZ9a7LQbaGXm%2FeaQ8U21nzW96x0VTCnG3JGNuJm%2BkrlCBDUw7qbQyQY6pgEsJtrJiOTywogKxb08fn3gI%2B2YbDHin%2BjHWsyYAtMLPcNtfoLXatDTa0JwzP5edadei51kxiU4r68t8TuETb31hSXJPAk1sUMvrPqIWUSVPGCh5vyBVQcUrGeSErVCnkxRknSXqwKJARNmxCFx3TaWM9Qj0a602B27135WGcvAv%2FyqCIDgWAN5%2BbpyMzE63YN5F%2FsjY%2Fvq48L8TBmYVpl9ld%2BDBhgK&X-Amz-Signature=bae2650e40230fa66fe688edb74e11c16e81ab22fdaffbed85b31b246ac2c80b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCJIEML%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAypQsMQ%2BrTlotNxRuorjID9w86mL%2Bq5EcqIYGvBoVl6AiAQXaRHgU%2B4s2ISxtHReAwQGPTWfIYF%2Bp0mq4Pq96c1sCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMeTjruBDqilcbGMa5KtwD0SZ866cH%2B5lyw8nDst%2BukP93L%2FEJLQX18JAhufG0%2BYkuVe6K0zl3QU17MPpshfQfErJ4%2B%2BztkAQQS4fUS0RaSOTeqxLd9%2FHo8KvLspX%2FE9GHVP27PVmeuk1769VB5kcf207qXqq0ZtXJ0nWRnOfMHy3zrC2enDaNV10WE2vgxdnQ8YE%2F7hkQK0A%2FDI%2F0G4brX2Jl8XsPM7o3CsdLLxuMH5Ulr%2F39ynRQXxEZXDibijsV2DRumC68WT6ep5ROjcBhXG5tDoZ0uQPq%2FWlfItd9%2BDPKcFWIPAjG%2B3kvbKDSsk%2BSB9L8FDgdZwTNG%2BhoA2AVtyZOnPepM6an8g0IZuXDLKUXbH8CXX%2FkgEFM4ZoPvgoSItkpYzfrasmOX8ZSVPwSAmkDrqki1L5JhXe2ACdUpEGCjR5Bm5XveIKlX06HnRthar5%2FDN8CBsE3SAK2d1pF6WVQ43Sc6ykgqSPhvIffg8Fjk896kmxN58aOqnWrHC0B9NgWGTOpSpgbV6Iqa9%2F2jx%2FbXQZLU78Ep4X5%2Bj7ldBFpFCjIurTtH98dCgc7qCy9dhaCALwGnE9JRIneOMO9o1GDJ5b6EvyTXZ9a7LQbaGXm%2FeaQ8U21nzW96x0VTCnG3JGNuJm%2BkrlCBDUw7qbQyQY6pgEsJtrJiOTywogKxb08fn3gI%2B2YbDHin%2BjHWsyYAtMLPcNtfoLXatDTa0JwzP5edadei51kxiU4r68t8TuETb31hSXJPAk1sUMvrPqIWUSVPGCh5vyBVQcUrGeSErVCnkxRknSXqwKJARNmxCFx3TaWM9Qj0a602B27135WGcvAv%2FyqCIDgWAN5%2BbpyMzE63YN5F%2FsjY%2Fvq48L8TBmYVpl9ld%2BDBhgK&X-Amz-Signature=44c2213c8309f9982af686c9ad8add88038fdf1338b7321014fb9fca725ed6c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

