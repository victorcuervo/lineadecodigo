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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYYYEBTI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtROZeDM7RxlbAgVMFMNsQ6eFb8pYCbN%2FXXYPrAJl9KAIhAM5iEvkV7zqekDzCgfVWOXXQTcPf242xCsQc%2BZBmw%2F7HKv8DCHwQABoMNjM3NDIzMTgzODA1Igx7giX5tOtSNy2zzikq3AOmYvgFUzcztKLE5rCC7NkbArOBTVTxkm3x8TNQqyCQGGiLflYZmynwVYlZM6LLnaoBIDuhp91x7me%2BJehRdIGvu3DB1B9MhOQZQXM6wJXUuJWMBo%2BS9HIbD8rllx5FKsOR0EzMWKQnJXZLGbmobzdHGGFbz6UgYHg4oT6lQTlOuA19hWPAXmwTNpoXRePaqskB%2Bk%2BQbbw8j16AjqDRHEvbUth5CvW7VGs6Zwt15Yr8bUcdTlpsczVYnTWVIEtCLhKOx4czKCE6EjHTms5%2Bwty38WZQ0Q%2F0D2thBGmCsJOmMK0rMqY68vB%2FaK%2F0ZJEoNwmJ97M6%2Bwtg91dCvOWAJPJ%2BOpf%2FNgLneqEETZxyHdtc151WJjjHpCd2Ra%2FCzqkLmm9j2m5z7todBVI%2BMOo3qvNGIubAlkA2bFI%2Bm0Vgjk0C3sdQP2cjH8NgtUBQ2YcBZmbxm9mnVwiNkk01zwg2h9EtTkO3Fb%2By6RDxJBAN2dHqDuYCMt%2B1K9aGhKhtWqVLj2NVxceThU%2F18yrH1T7nAh835wtjpceDrey3%2Bxo312kRsp6v5cGcgUVOFe4%2F3%2FAY5TqMvTxKoQTW0WEueGVgwPDXl%2FtxbMnGyzvobEhRk4zyAYmBr5rnYX25cpz8ajDnjorKBjqkAWXm5Aj1lw9H8zqgwRVHswM6Eq9xflFmOncmA8pE0MypzXMpG%2F1eKDfHHoPnZQpd3sPoNzKmyR9J0hiRW7iqfDX5U3q6tZCAAPJA2zaQzRehPmK4bBve5mku%2BB9S9ueWkC%2F9JxH20%2BZ5%2FP7qA92%2Buv%2BvUJy9ccEa%2F3nH2eX8YCisHbcMiY9JXwMRCyMyhF14aKGPBrZAHgbmXgn6%2FFhNUvs7hWA2&X-Amz-Signature=d78e82c104f9c92d9313246d47f1594d83f917041814a047e0a47b79d26b538f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYYYEBTI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtROZeDM7RxlbAgVMFMNsQ6eFb8pYCbN%2FXXYPrAJl9KAIhAM5iEvkV7zqekDzCgfVWOXXQTcPf242xCsQc%2BZBmw%2F7HKv8DCHwQABoMNjM3NDIzMTgzODA1Igx7giX5tOtSNy2zzikq3AOmYvgFUzcztKLE5rCC7NkbArOBTVTxkm3x8TNQqyCQGGiLflYZmynwVYlZM6LLnaoBIDuhp91x7me%2BJehRdIGvu3DB1B9MhOQZQXM6wJXUuJWMBo%2BS9HIbD8rllx5FKsOR0EzMWKQnJXZLGbmobzdHGGFbz6UgYHg4oT6lQTlOuA19hWPAXmwTNpoXRePaqskB%2Bk%2BQbbw8j16AjqDRHEvbUth5CvW7VGs6Zwt15Yr8bUcdTlpsczVYnTWVIEtCLhKOx4czKCE6EjHTms5%2Bwty38WZQ0Q%2F0D2thBGmCsJOmMK0rMqY68vB%2FaK%2F0ZJEoNwmJ97M6%2Bwtg91dCvOWAJPJ%2BOpf%2FNgLneqEETZxyHdtc151WJjjHpCd2Ra%2FCzqkLmm9j2m5z7todBVI%2BMOo3qvNGIubAlkA2bFI%2Bm0Vgjk0C3sdQP2cjH8NgtUBQ2YcBZmbxm9mnVwiNkk01zwg2h9EtTkO3Fb%2By6RDxJBAN2dHqDuYCMt%2B1K9aGhKhtWqVLj2NVxceThU%2F18yrH1T7nAh835wtjpceDrey3%2Bxo312kRsp6v5cGcgUVOFe4%2F3%2FAY5TqMvTxKoQTW0WEueGVgwPDXl%2FtxbMnGyzvobEhRk4zyAYmBr5rnYX25cpz8ajDnjorKBjqkAWXm5Aj1lw9H8zqgwRVHswM6Eq9xflFmOncmA8pE0MypzXMpG%2F1eKDfHHoPnZQpd3sPoNzKmyR9J0hiRW7iqfDX5U3q6tZCAAPJA2zaQzRehPmK4bBve5mku%2BB9S9ueWkC%2F9JxH20%2BZ5%2FP7qA92%2Buv%2BvUJy9ccEa%2F3nH2eX8YCisHbcMiY9JXwMRCyMyhF14aKGPBrZAHgbmXgn6%2FFhNUvs7hWA2&X-Amz-Signature=38fbc3e90b92d0164b43a25dc72e9e292b12fd33d5a11172ce20e1502af3ca46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
