---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHEDZDJO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSUFc%2FoLQJOlMM7bEGP58eZB%2B0JqHHaSRl6gFzhktgPwIgdL4ofFNL4wJYUl941hn5RaMJ4d4KwcTNQuzt3vAsx9Iq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG3L2HnSbp3k0U%2FmAyrcA2pzsbNRVFFhzG5Z4Cfft8FTic5p0gZnVYxKN0iG7K6OZQs6I3cHNCUc6WSu%2FTHhfOXyHrDXR9h1J6gmsYXSoXFB4l8NW%2FXjG5%2BJ1X7%2Fg8YNnRryUfnIYo%2FfVH6KdRfn2Si0Cj2ZhyAOtuUxqMBoY19dOEzNWOrMBOrjmI2ePMzxUkHU7dhdvvhy3NEKMoNJa7tEQ7%2FeRca4iNdbQ9uP2zdOFL%2F%2B7e7pturzkvM3ZcPqTuN8uuyOsxgDGjtZsoVKaEwkJS0lPaJP5Zp7wrt6zvunnloGewc7YiijT27BQ5eAwOb%2BR3kQzlpeDMwFdDodSE2MvEmZw59gBcWxpcmaaLLH%2FJuRuSMbuL9Otn89QtlXaL3E1kAPECAK5sEhcEm5n%2FoO6LaYvxaN4eDCd5xybUbMTVlkp1LVBNZsmqJO5D0FowfNNzkt%2FapXD8LkiRW1%2FNBkrg21qXtAeMZg89x6TgKtBdyWg4K06RU3FBwHN5yzP120yreIusvSA2BT0D%2B16BX%2BjgK6Ne%2FnJj5XmkTIm9PyLSMOxQFcE71rOHVILMdwaC2NWmaeoM%2FMaQe67KL%2FgXrt9muaL7MRnvb2HdgfpDXjlt%2Bb7MhAFc3nRHONdlsQhsfFSdMG9WrxxouAMJ%2Bm0MkGOqUB2XOLm0TuUhG3p0E9Qh4yPdqR7WMJlB8s5MSfDJDarPNbIxDbmQP4IaPzSWhFk6JnL%2BGus1PkXhZoeut%2F3FtqWqrJAm6%2Bis55dy82wGZXNAd3pM4dT6GdO%2F1je6y%2Bhfb1ewnsOHHwtd2gnW9IsbcELNDtZz0eccSFsO3SShtdX9AP4KDpL3GTGsfT5V9J%2Bl1j2VxrGZhwJNLaphYkMzNMmTdyzN%2FU&X-Amz-Signature=f18270eb64fc05a14a3714bac39984726b5c5965ee3969a8bf9e9d00a4641a6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHEDZDJO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSUFc%2FoLQJOlMM7bEGP58eZB%2B0JqHHaSRl6gFzhktgPwIgdL4ofFNL4wJYUl941hn5RaMJ4d4KwcTNQuzt3vAsx9Iq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG3L2HnSbp3k0U%2FmAyrcA2pzsbNRVFFhzG5Z4Cfft8FTic5p0gZnVYxKN0iG7K6OZQs6I3cHNCUc6WSu%2FTHhfOXyHrDXR9h1J6gmsYXSoXFB4l8NW%2FXjG5%2BJ1X7%2Fg8YNnRryUfnIYo%2FfVH6KdRfn2Si0Cj2ZhyAOtuUxqMBoY19dOEzNWOrMBOrjmI2ePMzxUkHU7dhdvvhy3NEKMoNJa7tEQ7%2FeRca4iNdbQ9uP2zdOFL%2F%2B7e7pturzkvM3ZcPqTuN8uuyOsxgDGjtZsoVKaEwkJS0lPaJP5Zp7wrt6zvunnloGewc7YiijT27BQ5eAwOb%2BR3kQzlpeDMwFdDodSE2MvEmZw59gBcWxpcmaaLLH%2FJuRuSMbuL9Otn89QtlXaL3E1kAPECAK5sEhcEm5n%2FoO6LaYvxaN4eDCd5xybUbMTVlkp1LVBNZsmqJO5D0FowfNNzkt%2FapXD8LkiRW1%2FNBkrg21qXtAeMZg89x6TgKtBdyWg4K06RU3FBwHN5yzP120yreIusvSA2BT0D%2B16BX%2BjgK6Ne%2FnJj5XmkTIm9PyLSMOxQFcE71rOHVILMdwaC2NWmaeoM%2FMaQe67KL%2FgXrt9muaL7MRnvb2HdgfpDXjlt%2Bb7MhAFc3nRHONdlsQhsfFSdMG9WrxxouAMJ%2Bm0MkGOqUB2XOLm0TuUhG3p0E9Qh4yPdqR7WMJlB8s5MSfDJDarPNbIxDbmQP4IaPzSWhFk6JnL%2BGus1PkXhZoeut%2F3FtqWqrJAm6%2Bis55dy82wGZXNAd3pM4dT6GdO%2F1je6y%2Bhfb1ewnsOHHwtd2gnW9IsbcELNDtZz0eccSFsO3SShtdX9AP4KDpL3GTGsfT5V9J%2Bl1j2VxrGZhwJNLaphYkMzNMmTdyzN%2FU&X-Amz-Signature=ff653090d2b33727311a9a3f0533e9a56bf3f3bf38ae5679d983935c7a5748e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
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


```text
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
