---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RVLPJRW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdAIq7QRO5z%2BcjXBnyka0eGhAweCqN7x1z%2B2Fq%2FSYDMQIgEY63bPtUYEHwtEQ%2B3XpPKLMpREXQd64w569Ve2R92%2BUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFH1F44z5DIwPfzCoyrcA%2Fb9%2F6%2B6QwofSsQJVafukkeo3NussjA6BhDe1kZOb94WEwEnYiS5F%2BdVB%2BYYlpN4UJD7JIyij2PcphaxbIw%2BY3FnAMEM6N2kgkIduq%2B4bBA5YD66EyBtTp1SQccpuqeyh3ZW%2B4S88zDOhCqSUNhBBKyc8oH6bKdX8nT32QdDmwKUShXzEDMrn%2B%2Fp35A9dOXfh0nNRYUUwAEOoxbl1nzdr9mEobNa07jDcqqVf%2B0vg5xPl4YixqBD%2B%2Bwwb%2FJMxUGzKDvEMQ3flctXLsR6rvRh7MnkDMyLtmHqT%2FnShFnoVUPw5K%2BATyEiMbu8XB6rwKZ3mhSLNrbNq8VrS6O4LnGyfLTe2rnP47gv8Vu6Ys0v%2BEBHGTehv%2FhuocF0wMcT8Aa2Af%2FG0BH2eEIkr2iPElwksGnpCkSMnBVUeIeNzez3QBphXbnSsfkBI8HJDLMEUMQ0oJp3sLRYLafX3P9Wh91YR80YsyDKJfbH2xkXU6wSrEXfWepD%2Fy1%2BQDTSNcCPL30sFUPgd54Ug%2FhUqDBVG8oQ2aDro9dKd944HcGBOGp9lpDMBM14scvNCrpReUy1sijoA9c2ZnaDUw5jEziYziZjSu5GImLYcxVHZIechFjfSt1fzNc5EflELXy8P4JYMIOp18kGOqUBrSZH6jW%2Bsh%2FnFHOuGTTg%2FFAIXU347fL%2FvOTXYDbqu6MQ3AvDO4YegW%2FWtsegbODB4Kb0B9ESjCya476KA7JCjA51ZGHUqth3oOIuQiBX%2FUsjg%2BMZkBQw6R1ZkFfN0bNWmeglYkIFcAuNpYozZR5UbMwhjJeSOu6JEHrX9IAlomAR05gPtGsdqO0U0I5NlFCkJDjXFUtJ9gpc3q0xIXVHOOJSdJpZ&X-Amz-Signature=1d6d982c4f01a109528253c885a8de8610a441596e9634610e2642c008f05262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RVLPJRW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdAIq7QRO5z%2BcjXBnyka0eGhAweCqN7x1z%2B2Fq%2FSYDMQIgEY63bPtUYEHwtEQ%2B3XpPKLMpREXQd64w569Ve2R92%2BUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFH1F44z5DIwPfzCoyrcA%2Fb9%2F6%2B6QwofSsQJVafukkeo3NussjA6BhDe1kZOb94WEwEnYiS5F%2BdVB%2BYYlpN4UJD7JIyij2PcphaxbIw%2BY3FnAMEM6N2kgkIduq%2B4bBA5YD66EyBtTp1SQccpuqeyh3ZW%2B4S88zDOhCqSUNhBBKyc8oH6bKdX8nT32QdDmwKUShXzEDMrn%2B%2Fp35A9dOXfh0nNRYUUwAEOoxbl1nzdr9mEobNa07jDcqqVf%2B0vg5xPl4YixqBD%2B%2Bwwb%2FJMxUGzKDvEMQ3flctXLsR6rvRh7MnkDMyLtmHqT%2FnShFnoVUPw5K%2BATyEiMbu8XB6rwKZ3mhSLNrbNq8VrS6O4LnGyfLTe2rnP47gv8Vu6Ys0v%2BEBHGTehv%2FhuocF0wMcT8Aa2Af%2FG0BH2eEIkr2iPElwksGnpCkSMnBVUeIeNzez3QBphXbnSsfkBI8HJDLMEUMQ0oJp3sLRYLafX3P9Wh91YR80YsyDKJfbH2xkXU6wSrEXfWepD%2Fy1%2BQDTSNcCPL30sFUPgd54Ug%2FhUqDBVG8oQ2aDro9dKd944HcGBOGp9lpDMBM14scvNCrpReUy1sijoA9c2ZnaDUw5jEziYziZjSu5GImLYcxVHZIechFjfSt1fzNc5EflELXy8P4JYMIOp18kGOqUBrSZH6jW%2Bsh%2FnFHOuGTTg%2FFAIXU347fL%2FvOTXYDbqu6MQ3AvDO4YegW%2FWtsegbODB4Kb0B9ESjCya476KA7JCjA51ZGHUqth3oOIuQiBX%2FUsjg%2BMZkBQw6R1ZkFfN0bNWmeglYkIFcAuNpYozZR5UbMwhjJeSOu6JEHrX9IAlomAR05gPtGsdqO0U0I5NlFCkJDjXFUtJ9gpc3q0xIXVHOOJSdJpZ&X-Amz-Signature=b67ae32b8e900b3192f0919f6d77db393e71a4fcde01791005724a8817e3aea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

