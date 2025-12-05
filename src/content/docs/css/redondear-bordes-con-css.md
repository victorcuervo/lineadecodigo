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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKZNQVCS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T143211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BHS3GlGX3QPiDHdUoisxBjAzwfCq4K0FuuVquILwLcQIgcCEYQ2%2Fq5pbpUI5NYgY9bs%2FMnO6PSUeCXrXodyJqDoEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDK%2F5397SjyDta3BM6SrcA7Yk8e7gwO0BXvC5P563x%2BShlfwYT4mEoMWkQS5l1%2Bm1fdWw7jH4wTDfVdrBDvIYhRlNnJdOzg%2BHTcEgGkQkV7ydE09C8gxJfKPjlnaS2c2%2FF5pZxHHT%2BSB5A8znmh48Yoj%2B%2BkLdnUgf7BibJAepRWdkyiHp8PTR66Uz2px4etsx5raIFn1vIm8nOXOpbkJu94KM7qtssu8qc0m51ulRxIOZEG47PkT8ISY%2B6om6MYbZYapHHwEHJI2c3ZpfL4DCMjkxZrO3U43tl6fZolFxqGSgo7CWWPgj%2FzOirgHsRRTSRC3o9V4UFo6aXLkCcaDawoIqnQrFxHoqSa59lwSrwRuIROnZJLEdFy4ZSa6P8xI0JHR67suFfu33%2F2%2BlTDwJPC1i05GW%2FBQpeWTJyOSsfLOH0QEe9ngm2DGHy84T3l1W%2BBKbUDOpbJ8JktyawEz8f0O2vIUdb59MIfw%2B%2BN7BoqK9dUtHccUgUSlRY6wpCVihJ6ukM1gs9X7eilQwx0iEA3EUSXfjM7vMaQjXo9hpl%2B99Jhm5p8ViM28Mydh%2BDxEL%2B8wSoePRFyzGbXfnuMXjgYZdnNat0bODdJ9l6eMf2JeZKudbVET9vpqbKkC78GoOzFpgtXWtURURvxA7MI7YyskGOqUBrUfDgdzD1S3jmW4Dforf4jw%2BIRvSVfUYYuG9ITkKMNooqHZsG4udAFyPcZPPxZdvxGUDMnE96iNeaBMRW%2BFButXb%2BkE6E%2BFxoX4aG6jvmUHauuYTnGA%2BEAQsrIQOW6GJ8UtxUIMe2E0vUc9XRQklOOOvSRnCPbbQq5oRRpRLmYVDxUhQI6ZCyqDQviEKGJeWbE9i3%2Figd79znM5UJO2wsL5IRZHw&X-Amz-Signature=cd36bc524e9d0f252baa4524e69e8e359d522f1d81b8668fedd4e8bb5fb9b02b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKZNQVCS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T143211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BHS3GlGX3QPiDHdUoisxBjAzwfCq4K0FuuVquILwLcQIgcCEYQ2%2Fq5pbpUI5NYgY9bs%2FMnO6PSUeCXrXodyJqDoEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDK%2F5397SjyDta3BM6SrcA7Yk8e7gwO0BXvC5P563x%2BShlfwYT4mEoMWkQS5l1%2Bm1fdWw7jH4wTDfVdrBDvIYhRlNnJdOzg%2BHTcEgGkQkV7ydE09C8gxJfKPjlnaS2c2%2FF5pZxHHT%2BSB5A8znmh48Yoj%2B%2BkLdnUgf7BibJAepRWdkyiHp8PTR66Uz2px4etsx5raIFn1vIm8nOXOpbkJu94KM7qtssu8qc0m51ulRxIOZEG47PkT8ISY%2B6om6MYbZYapHHwEHJI2c3ZpfL4DCMjkxZrO3U43tl6fZolFxqGSgo7CWWPgj%2FzOirgHsRRTSRC3o9V4UFo6aXLkCcaDawoIqnQrFxHoqSa59lwSrwRuIROnZJLEdFy4ZSa6P8xI0JHR67suFfu33%2F2%2BlTDwJPC1i05GW%2FBQpeWTJyOSsfLOH0QEe9ngm2DGHy84T3l1W%2BBKbUDOpbJ8JktyawEz8f0O2vIUdb59MIfw%2B%2BN7BoqK9dUtHccUgUSlRY6wpCVihJ6ukM1gs9X7eilQwx0iEA3EUSXfjM7vMaQjXo9hpl%2B99Jhm5p8ViM28Mydh%2BDxEL%2B8wSoePRFyzGbXfnuMXjgYZdnNat0bODdJ9l6eMf2JeZKudbVET9vpqbKkC78GoOzFpgtXWtURURvxA7MI7YyskGOqUBrUfDgdzD1S3jmW4Dforf4jw%2BIRvSVfUYYuG9ITkKMNooqHZsG4udAFyPcZPPxZdvxGUDMnE96iNeaBMRW%2BFButXb%2BkE6E%2BFxoX4aG6jvmUHauuYTnGA%2BEAQsrIQOW6GJ8UtxUIMe2E0vUc9XRQklOOOvSRnCPbbQq5oRRpRLmYVDxUhQI6ZCyqDQviEKGJeWbE9i3%2Figd79znM5UJO2wsL5IRZHw&X-Amz-Signature=dd6df0eb3f42257377f1b7e8421b41151e32f886dd432300bf046f87751bfffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
