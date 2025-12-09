---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5AP6ZZH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBrMNo4BhXIjTnkCSEBrDvFaQrdsHBX3C1nkgr9Z4KCQIgVYRn90hi2YoIIFlpeObf%2F96P83F7ui%2Bx48EMypPnKKQqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQAZ977hsb9iFoDAyrcAzIjtb%2BH4x0HMGW8O2syUBdKKIFAN3x%2Fk2veNEJpjU3f0cwzy0JBfZsADmkR2xGkf9zhsLEPJb0l2cF%2FG0PMWVfmqfiE3MvMmZl3sVak8Dm8M7EcXEqjnnY8m%2F6J25j2x8rdqANT5O7daJk%2BvIgnwEyOqyXtaNsF0EGSKKqQQY92TbnvVBJkq56zjVaKp%2F13D0UX0sR1MlXz9EKeyeUIyzD1tdqlFeKYw6O3QRs35SrdlNsBuj345%2FOGJ%2BXzO0NDZ6DQZdB%2FoO7sP59O6wL4YoBuKfgMWqQdGg00Eteg8ezsGhM9TCQr%2FswMojNybjrjbzmkCXgzhb4g6Q%2FF8S2tjRDFFM2bse9Y9k47RC%2BFX%2Fdk0WJYFvkOWfpn0pv%2BBZMMezXPE%2B2fRVgHolb6S9LtgwyZygJdpo7EszoiEz20ogwmoJBgpqH%2FCtWIU6%2BvGSfBfiBrhXf6RS2xSOH3oXnU%2Fts6vJwu%2B9kS3XDpwEcwNcrvyt%2FDs28ggulcFm%2F0lRHbxh9qUk97i9EpSDjbOfWW%2FCNzgRwOc8dQhPVviGh2UlP7%2FwW8WqF%2FaA8TWz1nUtgfNLN2H%2FQasLiDR7F0k5H1iLcxJbWuF8ObJibn4DgNYeJHWB%2Fr5fEOXITu1t7NMLXC3ckGOqUBagEPmMSfIq5a%2BJyV%2Fp9SlHlrf%2Fd5sc2n%2FWePPNZoZVfF4MfyU4P50JdyEkIqW8FeHieVh7CqTPsKdsG7uO3j8CnBoAHA6HpppkEFnITXdZqbvPbaSbSB9HKtrWYgBnh%2FkmgE%2Fh9YZzuYSn%2BnR07sG9cTzEcTbQy1piROopIDiGA3fj2nMazWbm%2BooiGYQqGz6aGBVA%2Fmhb6ubYEtmNqFcVp1L7WH&X-Amz-Signature=3024764f6c9f69b13891a4839f75bbb347ab89b2f0781f70af7d9eb2ca7f12f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5AP6ZZH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBrMNo4BhXIjTnkCSEBrDvFaQrdsHBX3C1nkgr9Z4KCQIgVYRn90hi2YoIIFlpeObf%2F96P83F7ui%2Bx48EMypPnKKQqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQAZ977hsb9iFoDAyrcAzIjtb%2BH4x0HMGW8O2syUBdKKIFAN3x%2Fk2veNEJpjU3f0cwzy0JBfZsADmkR2xGkf9zhsLEPJb0l2cF%2FG0PMWVfmqfiE3MvMmZl3sVak8Dm8M7EcXEqjnnY8m%2F6J25j2x8rdqANT5O7daJk%2BvIgnwEyOqyXtaNsF0EGSKKqQQY92TbnvVBJkq56zjVaKp%2F13D0UX0sR1MlXz9EKeyeUIyzD1tdqlFeKYw6O3QRs35SrdlNsBuj345%2FOGJ%2BXzO0NDZ6DQZdB%2FoO7sP59O6wL4YoBuKfgMWqQdGg00Eteg8ezsGhM9TCQr%2FswMojNybjrjbzmkCXgzhb4g6Q%2FF8S2tjRDFFM2bse9Y9k47RC%2BFX%2Fdk0WJYFvkOWfpn0pv%2BBZMMezXPE%2B2fRVgHolb6S9LtgwyZygJdpo7EszoiEz20ogwmoJBgpqH%2FCtWIU6%2BvGSfBfiBrhXf6RS2xSOH3oXnU%2Fts6vJwu%2B9kS3XDpwEcwNcrvyt%2FDs28ggulcFm%2F0lRHbxh9qUk97i9EpSDjbOfWW%2FCNzgRwOc8dQhPVviGh2UlP7%2FwW8WqF%2FaA8TWz1nUtgfNLN2H%2FQasLiDR7F0k5H1iLcxJbWuF8ObJibn4DgNYeJHWB%2Fr5fEOXITu1t7NMLXC3ckGOqUBagEPmMSfIq5a%2BJyV%2Fp9SlHlrf%2Fd5sc2n%2FWePPNZoZVfF4MfyU4P50JdyEkIqW8FeHieVh7CqTPsKdsG7uO3j8CnBoAHA6HpppkEFnITXdZqbvPbaSbSB9HKtrWYgBnh%2FkmgE%2Fh9YZzuYSn%2BnR07sG9cTzEcTbQy1piROopIDiGA3fj2nMazWbm%2BooiGYQqGz6aGBVA%2Fmhb6ubYEtmNqFcVp1L7WH&X-Amz-Signature=d817122a6e702f1b4bc9e69fefdd1bf0f0677e299f9ffdb2e2e9e427b9730dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

