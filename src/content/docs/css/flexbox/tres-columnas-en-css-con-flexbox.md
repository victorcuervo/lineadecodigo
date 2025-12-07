---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPUSS3YO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxX7GVEa7MVJXwL0BxZUp5hn5s%2FikWPY2d3jHGtU5YugIhALOg0H%2Fh4Bjc0jk9LYmPiKcm9e3OTK9XUXrf%2F0LZWU%2FPKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxr2ZU6L2iWyqwmXF0q3AMaXOLwYSMN4K5JzOVlwKdRunNh6YUqu2ZkhXk%2BDPjo%2BkHPJkhjQVy4ps6jQtywIoHnFrvbo86f%2FtlK5knhrPK2Pnt95YvOfGoXh0IxB%2BTUrWxZor%2B3C9QqeATdjfaYUwQKbl9H5q6C7GA9sLpIaJLqon1JSeN607KJcee6nirQrydvXDbU40gw3a7rleVkz%2FYIE0Ocb5GChUd9Y8JIk%2BVpzkdkzAeKLtcgoGWPFK9kamuPZoQz2cxzuuQJG%2BmRdTXkKcCl3eEn1S04212JtHOtmhbDjkfT9AfmBFPe0IKdDiJ5mmG7a6%2BCQSGzzik4ynidQDA7kfbgZ2yiFC7pBKsyOuyPosRHD8VdpGEb3OEOJcZ%2FVmSFKel95vgRl78caUVqzGjpPWK652eJEkO6qTMEStcC2K3EfFc8SBmoOOui4VqB%2BmQn68vv5f6CcIMJIwBUu5uKDIVDpa3Bc86MrdOO12jAjjRi8URYLfcmBZQAMqqMH4gDWc0V7UW0x3Yu9msPlbRTHBP7hslP6GpCDUcmt5dBP7rxbZt%2FN2o56pjtifse0GXKpT8sAhKBGVxMa0XyYj6Xl44JzW2TZl%2Fm1zvpM5xIlwmXZu%2FzBxybpRFK2oiSLkbEeXrWJHjCRTC7odTJBjqkAX782oJZFw0dFZT8LZnxjjN3pBCKVF0KrGiVkyhcAoPnE7uUrO40TERGo4dis%2FSytErwO9Q540CDf2djdmOhaPiox4%2Bay8RkWptrXeXnz5nKF5lRD1fZw3qDHDDpsYU218tWyQ8lmw4ZCoEk1EgHbc0991Us2Ir%2B2IuATD5%2B3b6ZJYmlnO7txa3JVwwJMs3NpfHE0t3JVfbuPwyEWacZgoR%2Fvkpi&X-Amz-Signature=03d0aa7cd6ff16d750aff21b1d60aa090779db849ff8811b142164a20edf2f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPUSS3YO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxX7GVEa7MVJXwL0BxZUp5hn5s%2FikWPY2d3jHGtU5YugIhALOg0H%2Fh4Bjc0jk9LYmPiKcm9e3OTK9XUXrf%2F0LZWU%2FPKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxr2ZU6L2iWyqwmXF0q3AMaXOLwYSMN4K5JzOVlwKdRunNh6YUqu2ZkhXk%2BDPjo%2BkHPJkhjQVy4ps6jQtywIoHnFrvbo86f%2FtlK5knhrPK2Pnt95YvOfGoXh0IxB%2BTUrWxZor%2B3C9QqeATdjfaYUwQKbl9H5q6C7GA9sLpIaJLqon1JSeN607KJcee6nirQrydvXDbU40gw3a7rleVkz%2FYIE0Ocb5GChUd9Y8JIk%2BVpzkdkzAeKLtcgoGWPFK9kamuPZoQz2cxzuuQJG%2BmRdTXkKcCl3eEn1S04212JtHOtmhbDjkfT9AfmBFPe0IKdDiJ5mmG7a6%2BCQSGzzik4ynidQDA7kfbgZ2yiFC7pBKsyOuyPosRHD8VdpGEb3OEOJcZ%2FVmSFKel95vgRl78caUVqzGjpPWK652eJEkO6qTMEStcC2K3EfFc8SBmoOOui4VqB%2BmQn68vv5f6CcIMJIwBUu5uKDIVDpa3Bc86MrdOO12jAjjRi8URYLfcmBZQAMqqMH4gDWc0V7UW0x3Yu9msPlbRTHBP7hslP6GpCDUcmt5dBP7rxbZt%2FN2o56pjtifse0GXKpT8sAhKBGVxMa0XyYj6Xl44JzW2TZl%2Fm1zvpM5xIlwmXZu%2FzBxybpRFK2oiSLkbEeXrWJHjCRTC7odTJBjqkAX782oJZFw0dFZT8LZnxjjN3pBCKVF0KrGiVkyhcAoPnE7uUrO40TERGo4dis%2FSytErwO9Q540CDf2djdmOhaPiox4%2Bay8RkWptrXeXnz5nKF5lRD1fZw3qDHDDpsYU218tWyQ8lmw4ZCoEk1EgHbc0991Us2Ir%2B2IuATD5%2B3b6ZJYmlnO7txa3JVwwJMs3NpfHE0t3JVfbuPwyEWacZgoR%2Fvkpi&X-Amz-Signature=386200b9c9bbca1a15fe178b5a628d44bc994e6b2ede2fd0f8eb1c28faeb1f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

