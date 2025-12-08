---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR2L6OCQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECI0Ojwl5rhl9RxqiNb62y%2Fw%2FGYUGAQm%2Fdc0n05CpUqAiBw%2Fvx5sgEzE%2B2bjbNC5xC62U%2BHZw55w2LorEUdnhNc4CqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq%2FWDtMVZtwr23oeyKtwDSxfsjhJy71QaXrQQX89w4y8woXofi8aGcLSd1VamosOrZCS5chlwBub%2BKJDkpGx33tZAlmJpe4cVQ9wFXtX5KJcueew%2FtPwTWUKB6LS8HfqFZYfCgzalAVwawxyYp764G7V%2FFsjs9%2BAc4PpYGC9VbweKUM9M20xAOIteX4d2X%2FR9m0iY7%2BCieSedZft3fgZnhC2S82jz4stGZIMAHBMrMsb69RnDY9UVgdSYGqQBIDuQwp4JRZqTIWxRVzkU%2BIp2j8KdkGPpIj8MaGMaJsnZIEK8%2BVLrWvF%2B%2BKPzNb0AaGkuMKVknjFzlid48YDsZ7VKJmkGolyafh3aSl7SXGcv9eHY8fuqsr56Gy52TRELlrUY7Uvrkpi%2F7dVjqQjv7EonkXRkvWEcbIlcTrPt%2B4i1EAWlmxzz1hmxa6qw8GrL1X8OHz%2BJHe9fNgiLrTqskASd4lnPAt2dEfrHhtIrkRhSROvazPzko2CSZ9jLV0D3CvhnLj5gatwGlPOSAXoLyUYYrJqhZZk2oe8faIdOiILV8A7atZzHeUA5bAl2iXlwCJUH18Wdy%2BLyQ4pF7GB6bDBb0HcvBmDjDJYuSAEpDojY4BhsA%2FlYe3ziYQnp8jNkE9158sB43aprkv%2B5edUw3I%2FbyQY6pgHw43eaf9pvMO9tG71Yr5K1L2fkL%2FQT4jPUkWLCP8klUee033tNsFYrTQxdY9vcnSpAtNDPA%2Bpk0PMvmyABm9k5djNBZz7M%2BXH3mk3kqw8GRyYg7H9zTUIBdUOKj78%2FzYZq9pZqzfGYMR9QgGQbNb%2FPR7LCc5zIonPvmHAauLP9LFTL4yWX4VR9d5qvPZbBEJ0t497LRl09bsmNwBQiDk3nU%2FAQGLpM&X-Amz-Signature=68cee33cc2f3d372072ec9903077cdf39cc3eb1186e256c08c3bb625535f35f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR2L6OCQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECI0Ojwl5rhl9RxqiNb62y%2Fw%2FGYUGAQm%2Fdc0n05CpUqAiBw%2Fvx5sgEzE%2B2bjbNC5xC62U%2BHZw55w2LorEUdnhNc4CqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq%2FWDtMVZtwr23oeyKtwDSxfsjhJy71QaXrQQX89w4y8woXofi8aGcLSd1VamosOrZCS5chlwBub%2BKJDkpGx33tZAlmJpe4cVQ9wFXtX5KJcueew%2FtPwTWUKB6LS8HfqFZYfCgzalAVwawxyYp764G7V%2FFsjs9%2BAc4PpYGC9VbweKUM9M20xAOIteX4d2X%2FR9m0iY7%2BCieSedZft3fgZnhC2S82jz4stGZIMAHBMrMsb69RnDY9UVgdSYGqQBIDuQwp4JRZqTIWxRVzkU%2BIp2j8KdkGPpIj8MaGMaJsnZIEK8%2BVLrWvF%2B%2BKPzNb0AaGkuMKVknjFzlid48YDsZ7VKJmkGolyafh3aSl7SXGcv9eHY8fuqsr56Gy52TRELlrUY7Uvrkpi%2F7dVjqQjv7EonkXRkvWEcbIlcTrPt%2B4i1EAWlmxzz1hmxa6qw8GrL1X8OHz%2BJHe9fNgiLrTqskASd4lnPAt2dEfrHhtIrkRhSROvazPzko2CSZ9jLV0D3CvhnLj5gatwGlPOSAXoLyUYYrJqhZZk2oe8faIdOiILV8A7atZzHeUA5bAl2iXlwCJUH18Wdy%2BLyQ4pF7GB6bDBb0HcvBmDjDJYuSAEpDojY4BhsA%2FlYe3ziYQnp8jNkE9158sB43aprkv%2B5edUw3I%2FbyQY6pgHw43eaf9pvMO9tG71Yr5K1L2fkL%2FQT4jPUkWLCP8klUee033tNsFYrTQxdY9vcnSpAtNDPA%2Bpk0PMvmyABm9k5djNBZz7M%2BXH3mk3kqw8GRyYg7H9zTUIBdUOKj78%2FzYZq9pZqzfGYMR9QgGQbNb%2FPR7LCc5zIonPvmHAauLP9LFTL4yWX4VR9d5qvPZbBEJ0t497LRl09bsmNwBQiDk3nU%2FAQGLpM&X-Amz-Signature=8e63c3cff10439654f44e07cdefb7e44818cd188ab86a61839ea8c54a1a701da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

