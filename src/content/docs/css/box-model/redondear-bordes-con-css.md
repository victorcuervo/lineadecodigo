---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2S2S5ME%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHq4%2FtJu2oU2jhu3qGLugy0rTXqcW4vVk3efuBM22IftAiEAlclBstPtkH1miJFm2V9khOErVFevwWBY2YUs3BMX8OUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuVxRWt77K4OqXR0yrcA7YTpGZm05ISVo8wGqMXtA7jVB%2BN0E1On4KTYYBYnr%2FHZydr7WIs4rZPeva5qOLG6RIUrRMl1O86K6GrLyDvidMHAl5Ocyf8FHZb%2BudasmbxteWZjMsf98TyPTKeM1p61lMQ8iaU9clNKrH0%2FAJOhJzgu%2FE6iUGIP%2B%2Fkh8oCFU3kifIxTniW5f%2Fo0xOv3JAQIp8gz1Iqi%2FkFpuXtoz2mh3Ljg7AI32x6dQxoQ4OK5lbKPGfShgwBjUBJKd8Q%2FBVHuX2%2FhhoifGkQhw5YsQdxGGfd7XDKKcbAr5TFTqPYuYFYNjIS0VSq0ASMe11kd7M9QorPaWeREBNB8oPEAhBWno84RBtXnbe6NTXczZRFLKFUHxPi1j8aXxC40bh5TyYHnkzBqqW9BJoobz%2B4rEtilYmPi%2BFlcv8BNy8Raydlo5GvKdeSl5q%2B2jxdzd3oWh7C5lnCMs8zz%2FGoevhAtrElN8slpsIdljZIyLarVhOFOJEsn7M9zbjUj%2B%2BQ4mwqJLGNL0ILtO1xjCszFJXu1Tsgp6LN3%2Fi60izVfVCehOZQcNzGlTjxpXPYeTxbrwIFfGDQrtHgsSVcVC8XShu60uwhnDwwa7FVixG8IJiKuEYDKwzkJ3yyUw8Y%2BDld5HyuMMyfi8oGOqUBgzYHvuNpIdzes3G%2Fojc0Z%2FJwA%2BAsQ37yBSoBtWBWzJD%2FHAtXY3MEmOiBHVyaFUsEJWcNgCedQrqFW%2FqMoztP%2B9ZxnU8adWDgpLN1VVE5j2V3DP2XJnYDdV2AerTywgKUipe%2Bzr3o05JekzcIaiuXJMHMmWKjBu3LALArK5E9AoUjTmIMRzPZpZ8xGY4mztIXYE6%2Bh3I2dkb6X5tqE8sUcRJV8suy&X-Amz-Signature=52981d1471775503a2b6077d7283b4701735e75f02d83028f5bdbb28c1e8fa1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2S2S5ME%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHq4%2FtJu2oU2jhu3qGLugy0rTXqcW4vVk3efuBM22IftAiEAlclBstPtkH1miJFm2V9khOErVFevwWBY2YUs3BMX8OUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuVxRWt77K4OqXR0yrcA7YTpGZm05ISVo8wGqMXtA7jVB%2BN0E1On4KTYYBYnr%2FHZydr7WIs4rZPeva5qOLG6RIUrRMl1O86K6GrLyDvidMHAl5Ocyf8FHZb%2BudasmbxteWZjMsf98TyPTKeM1p61lMQ8iaU9clNKrH0%2FAJOhJzgu%2FE6iUGIP%2B%2Fkh8oCFU3kifIxTniW5f%2Fo0xOv3JAQIp8gz1Iqi%2FkFpuXtoz2mh3Ljg7AI32x6dQxoQ4OK5lbKPGfShgwBjUBJKd8Q%2FBVHuX2%2FhhoifGkQhw5YsQdxGGfd7XDKKcbAr5TFTqPYuYFYNjIS0VSq0ASMe11kd7M9QorPaWeREBNB8oPEAhBWno84RBtXnbe6NTXczZRFLKFUHxPi1j8aXxC40bh5TyYHnkzBqqW9BJoobz%2B4rEtilYmPi%2BFlcv8BNy8Raydlo5GvKdeSl5q%2B2jxdzd3oWh7C5lnCMs8zz%2FGoevhAtrElN8slpsIdljZIyLarVhOFOJEsn7M9zbjUj%2B%2BQ4mwqJLGNL0ILtO1xjCszFJXu1Tsgp6LN3%2Fi60izVfVCehOZQcNzGlTjxpXPYeTxbrwIFfGDQrtHgsSVcVC8XShu60uwhnDwwa7FVixG8IJiKuEYDKwzkJ3yyUw8Y%2BDld5HyuMMyfi8oGOqUBgzYHvuNpIdzes3G%2Fojc0Z%2FJwA%2BAsQ37yBSoBtWBWzJD%2FHAtXY3MEmOiBHVyaFUsEJWcNgCedQrqFW%2FqMoztP%2B9ZxnU8adWDgpLN1VVE5j2V3DP2XJnYDdV2AerTywgKUipe%2Bzr3o05JekzcIaiuXJMHMmWKjBu3LALArK5E9AoUjTmIMRzPZpZ8xGY4mztIXYE6%2Bh3I2dkb6X5tqE8sUcRJV8suy&X-Amz-Signature=21084135e21817591c345ca1e415576ee23fa669727391521ed3841b8d1422ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```css
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
