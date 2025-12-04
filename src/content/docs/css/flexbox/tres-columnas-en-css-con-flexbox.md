---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZFRNIJR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDYfxXN37Tv0KUtbqeAJ1eF6Dvq4EcJ4Qcss83lhVIMCQIhANsPoZTn%2Ft88CkUJt2jGLrRI4PcrDJ3%2FRuhJbKSCsHVLKv8DCDwQABoMNjM3NDIzMTgzODA1IgykQNHiKQAfv62US%2FUq3AOJYqjGsCZeXFovsPDJS9p9AmPCgHaiIm0mxg7utYpOV5cQsCWS5KAQfTOjOgOsCvTKu%2FhsA9yEKDwtLID4wDoZPI3DTYtJSKqY0csC%2B3plu9n3HmUhy7QpgovKrViR3puejMdWgvGpTcMSMqnSU1wujpdbL%2FevRTxUtL%2FFSjuIG3xoF3gufi9RRCR9skeuaUkjr%2Bd4vse3jOT842SLAIZlmXaO1G3lTg3xzgLcYIe1qKPRusBjSO1iRXeWBQju0fDPLPky7%2BL7fgbjMuEZbowukW3HdJKMfOEnx7HEuFPbheD6umzZy0%2FjvyKVRcbKACU4R7Q4%2BJK0naRcZbIZ4oillGAf%2F%2FF808KL%2F1QmH58PfIA%2F5WRhgBQfweXjs0LrFLmyWW6cAIkdwEozeWqO74FSWwZJu4l25ZRtISJgH1J2XbSQPhVeZoqknXcSWed5dIezOTMZa5J6QOecHaREq8480cdyNDmoBGnNp3HT%2B9ZjYodzjfufbumILEfqwvI6t9mzFahly5xTs3s0zr09aBlKA4lKt48qWSDYTZ1JdNsNU2ePzr40FwoTpQuhkGq4wMQQlerywbLXorx%2BAGfcIOGhKJwitUNlGBbq%2FnXc%2BiQBXLgwfhLem56LUrhNBDDF8sPJBjqkAdIZESckGwcoj7X5KfvJfCsSwMwFQxsf9hGc9xoZtrIBdyE%2F7ph%2B38rdFu%2FhUSBMtdWGyKza5BaOkK7YTLb5jwlMmUIBgUN8l8gb4Nuow1sUyJ6wxrhmp4LATbBtPn35kLl9JIkVWmme0jLWhW4K%2FdLG%2FsjjhoDT5Bf6oUZ%2FCfVBUuPyPdYGOfgq5PbpCZfS39I5mIFqFSQyzvJWT1VoVPw1lsca&X-Amz-Signature=bdebadc03575aa3cdc2fd410ce79b8bd2095823adfdada4074ce7c594e18bd4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZFRNIJR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDYfxXN37Tv0KUtbqeAJ1eF6Dvq4EcJ4Qcss83lhVIMCQIhANsPoZTn%2Ft88CkUJt2jGLrRI4PcrDJ3%2FRuhJbKSCsHVLKv8DCDwQABoMNjM3NDIzMTgzODA1IgykQNHiKQAfv62US%2FUq3AOJYqjGsCZeXFovsPDJS9p9AmPCgHaiIm0mxg7utYpOV5cQsCWS5KAQfTOjOgOsCvTKu%2FhsA9yEKDwtLID4wDoZPI3DTYtJSKqY0csC%2B3plu9n3HmUhy7QpgovKrViR3puejMdWgvGpTcMSMqnSU1wujpdbL%2FevRTxUtL%2FFSjuIG3xoF3gufi9RRCR9skeuaUkjr%2Bd4vse3jOT842SLAIZlmXaO1G3lTg3xzgLcYIe1qKPRusBjSO1iRXeWBQju0fDPLPky7%2BL7fgbjMuEZbowukW3HdJKMfOEnx7HEuFPbheD6umzZy0%2FjvyKVRcbKACU4R7Q4%2BJK0naRcZbIZ4oillGAf%2F%2FF808KL%2F1QmH58PfIA%2F5WRhgBQfweXjs0LrFLmyWW6cAIkdwEozeWqO74FSWwZJu4l25ZRtISJgH1J2XbSQPhVeZoqknXcSWed5dIezOTMZa5J6QOecHaREq8480cdyNDmoBGnNp3HT%2B9ZjYodzjfufbumILEfqwvI6t9mzFahly5xTs3s0zr09aBlKA4lKt48qWSDYTZ1JdNsNU2ePzr40FwoTpQuhkGq4wMQQlerywbLXorx%2BAGfcIOGhKJwitUNlGBbq%2FnXc%2BiQBXLgwfhLem56LUrhNBDDF8sPJBjqkAdIZESckGwcoj7X5KfvJfCsSwMwFQxsf9hGc9xoZtrIBdyE%2F7ph%2B38rdFu%2FhUSBMtdWGyKza5BaOkK7YTLb5jwlMmUIBgUN8l8gb4Nuow1sUyJ6wxrhmp4LATbBtPn35kLl9JIkVWmme0jLWhW4K%2FdLG%2FsjjhoDT5Bf6oUZ%2FCfVBUuPyPdYGOfgq5PbpCZfS39I5mIFqFSQyzvJWT1VoVPw1lsca&X-Amz-Signature=b541bd9e3a8ab873c929371011e95131c9a7c7f1726b5a26349af49f8f832c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

