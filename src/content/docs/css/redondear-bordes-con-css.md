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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633KVWEZI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAtrFYwq%2BQCWNqQR1K%2FMB3aJXKYra%2B%2FXwmEKHk4m6XIAiEA2TyWsMtMpwtVVxUjYr4bcb8QI7OsQBBi12NiJVxIVEIqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXouOwnFWqf5%2BQ5dyrcA2ui4ALNALMjqeVj9I5WToX8xSMO%2BlDUQiMr6mrJrIDDg1TuSSZv3pjnqwPukoF9iPNOz8n4F2IRu%2BHEE5PXuutaz7EbOiDc%2F2gHWTGTKxVsCEqxT7aisN8sU%2FloeE3rcrV6VIEcxxI8raRonTuy%2FyiRMKyiyhWIG22XQPYhqzVKrK6A7ZO4JludQfRMmDbXJYzemD3YxX5FncSsTJiJemMbqfN9KCCOLj8o774WmYJt%2Bryb5s%2FeSKJAjlUxw0y24gxyXk%2FcS0F5GVsDHkJQ0HpBOvrL3%2FUaum%2BnK8jK8BZ19QKacKAgVcVv0evEdFFxd1m%2Bf2PluN9lbp3wAqO0pfj700Y6JsC8ElXoQjq1yRtwJK7ARsjAPTGw44QT000Kh5ovx695Q05crCOSaJ9xtRWqb7mXRIfC3YN6QAugizFlB4YJqBkbEezO8ZK7Q6CuO7dkjJX1RJ795mIEV03%2Fhh3RAnar6yw6p2BhOCtd6IhdoVKfDKIToXwYCpIZFjESjDiGWINVfpVTdG8chsyXrGyoZvDD5WRD300%2BukT2%2FGZfrpZ7mGVSl8TNTb73dpom%2B0KYB43qT2M8Wk4FX2K5q55emku0pbK%2BuE4uhXPpucq5kgBxC0g3hcoDnlxOMIGA3ckGOqUB3IbucKJMbZ23Jet0Pjiu8JUc%2F9jqg9DgY6N3bj1csLDi87hzvw3lJdbEp5Us0EDngWKJjjCHPpVSSAHdx%2Fyt7sC2HLMZavbImqkPhUYOheo5UCr%2BFqmShwubTgkMi8CnCzfjr%2BxD6RfTcN6ERFht2i7bNXSIl1EXIq%2Btok%2F62rJAyGYeplrYtZvv38tjSMrVmjWbdtC02G4QSRquBi6kSgjc84av&X-Amz-Signature=c2d1dd24e2aef952de36d9a6f58884f79fbceba56aee72d17d7df13214caf30c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633KVWEZI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAtrFYwq%2BQCWNqQR1K%2FMB3aJXKYra%2B%2FXwmEKHk4m6XIAiEA2TyWsMtMpwtVVxUjYr4bcb8QI7OsQBBi12NiJVxIVEIqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXouOwnFWqf5%2BQ5dyrcA2ui4ALNALMjqeVj9I5WToX8xSMO%2BlDUQiMr6mrJrIDDg1TuSSZv3pjnqwPukoF9iPNOz8n4F2IRu%2BHEE5PXuutaz7EbOiDc%2F2gHWTGTKxVsCEqxT7aisN8sU%2FloeE3rcrV6VIEcxxI8raRonTuy%2FyiRMKyiyhWIG22XQPYhqzVKrK6A7ZO4JludQfRMmDbXJYzemD3YxX5FncSsTJiJemMbqfN9KCCOLj8o774WmYJt%2Bryb5s%2FeSKJAjlUxw0y24gxyXk%2FcS0F5GVsDHkJQ0HpBOvrL3%2FUaum%2BnK8jK8BZ19QKacKAgVcVv0evEdFFxd1m%2Bf2PluN9lbp3wAqO0pfj700Y6JsC8ElXoQjq1yRtwJK7ARsjAPTGw44QT000Kh5ovx695Q05crCOSaJ9xtRWqb7mXRIfC3YN6QAugizFlB4YJqBkbEezO8ZK7Q6CuO7dkjJX1RJ795mIEV03%2Fhh3RAnar6yw6p2BhOCtd6IhdoVKfDKIToXwYCpIZFjESjDiGWINVfpVTdG8chsyXrGyoZvDD5WRD300%2BukT2%2FGZfrpZ7mGVSl8TNTb73dpom%2B0KYB43qT2M8Wk4FX2K5q55emku0pbK%2BuE4uhXPpucq5kgBxC0g3hcoDnlxOMIGA3ckGOqUB3IbucKJMbZ23Jet0Pjiu8JUc%2F9jqg9DgY6N3bj1csLDi87hzvw3lJdbEp5Us0EDngWKJjjCHPpVSSAHdx%2Fyt7sC2HLMZavbImqkPhUYOheo5UCr%2BFqmShwubTgkMi8CnCzfjr%2BxD6RfTcN6ERFht2i7bNXSIl1EXIq%2Btok%2F62rJAyGYeplrYtZvv38tjSMrVmjWbdtC02G4QSRquBi6kSgjc84av&X-Amz-Signature=d2043410aad7a990a40ee5580e1bf617e7997e3e36fd4bac16966a38f60813d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
