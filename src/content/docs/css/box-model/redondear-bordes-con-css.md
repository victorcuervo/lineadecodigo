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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIKDDAKB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQaFH4BmDN1EaoPLCFjjrHjSmLGE1I0doCVC9Xr6QQMAiEAjyBAZT3SEpGeNN4fuZOi7RmBHY7hQ1Dzl1MdaPKvi0Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIJm%2FoCH%2FMqCSuGxVyrcAz4sCxilrFFjKofqaskWJIafDrv73JBNtRk%2BlYegxzLF2EpP73hOuI5jysacy%2FIUGxaOqS3nKqd23xJl1YyR9ZsEeEXDJKGmTjYuly7FNit3mzZHFKgOEp%2BVlMk1S9OsYvSKGnnSMmSaF%2FqEb6Q3uhEG4GnnHaKsPxGe9gVG9Aqbr9flvRzNktpJ4GDzHrSN%2FiX86juneWkNf3vF%2BVSEtFc4xNRwx1EScOAaLDSawDe7vImjrHiaC1ebUjLF76fhdnuOburzktI8X06KCidWQ9o%2FBv67CtkWTBrIgYv49xXHl1BQJLaiM%2BOUaapHzerLzJauhKmG2Fd0GyE1Feka7zmGgB3c5rHXaJKIKhWxPDanuRJVx2wJsOcf493v0Z2XAEJVhrkWcvx9hZ6pGL6fxuTHQTc34DogqM%2BTWhUImFpLweZlWIrkF8UeXSJea5tC54RhEGSdHDDab%2Baf7ec9DWCE%2BP4YivQ%2BQo3WBfB0yXEtntLq23Gs5f0TDbAbj8RiCZsjQGdLMg%2BbqNJ2IIfKbu29Bus5mKinrP0Eakne1xL9t5V%2FaMn1G7ebW9I5CP5M%2Fqjj%2BRp%2F0Jl%2FyH2yuAK8ldhpYT24leGxaSArHA5zJg%2FDiR0i4gFDfJ64WAGiMLXeh8oGOqUBrwM4JJRgIWTnKef9WRQmH9WnsnFhNSCyyQl4jfIBrzveRk%2BXpBNDZ%2BFd5EnfTh5liGZn8072tJF%2Fgv0mCCe6XhN9vMKllBod2ls%2Bt5HUNDuC7MJ%2BuEiTw%2F%2BuD00dw4Pj1jPJoXxq7ugD%2BqBkWNNoNaPodEVnSNLKJM9h3bW9F5FDgV1iX9mte1%2Bz3d6cQrN3MG4UiNcVxy25zIamAan3zG0fMlKy&X-Amz-Signature=78cb60a770f1854fa62ee734dd50d4c064775b8eacafb39c8eb339d778d06dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIKDDAKB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQaFH4BmDN1EaoPLCFjjrHjSmLGE1I0doCVC9Xr6QQMAiEAjyBAZT3SEpGeNN4fuZOi7RmBHY7hQ1Dzl1MdaPKvi0Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIJm%2FoCH%2FMqCSuGxVyrcAz4sCxilrFFjKofqaskWJIafDrv73JBNtRk%2BlYegxzLF2EpP73hOuI5jysacy%2FIUGxaOqS3nKqd23xJl1YyR9ZsEeEXDJKGmTjYuly7FNit3mzZHFKgOEp%2BVlMk1S9OsYvSKGnnSMmSaF%2FqEb6Q3uhEG4GnnHaKsPxGe9gVG9Aqbr9flvRzNktpJ4GDzHrSN%2FiX86juneWkNf3vF%2BVSEtFc4xNRwx1EScOAaLDSawDe7vImjrHiaC1ebUjLF76fhdnuOburzktI8X06KCidWQ9o%2FBv67CtkWTBrIgYv49xXHl1BQJLaiM%2BOUaapHzerLzJauhKmG2Fd0GyE1Feka7zmGgB3c5rHXaJKIKhWxPDanuRJVx2wJsOcf493v0Z2XAEJVhrkWcvx9hZ6pGL6fxuTHQTc34DogqM%2BTWhUImFpLweZlWIrkF8UeXSJea5tC54RhEGSdHDDab%2Baf7ec9DWCE%2BP4YivQ%2BQo3WBfB0yXEtntLq23Gs5f0TDbAbj8RiCZsjQGdLMg%2BbqNJ2IIfKbu29Bus5mKinrP0Eakne1xL9t5V%2FaMn1G7ebW9I5CP5M%2Fqjj%2BRp%2F0Jl%2FyH2yuAK8ldhpYT24leGxaSArHA5zJg%2FDiR0i4gFDfJ64WAGiMLXeh8oGOqUBrwM4JJRgIWTnKef9WRQmH9WnsnFhNSCyyQl4jfIBrzveRk%2BXpBNDZ%2BFd5EnfTh5liGZn8072tJF%2Fgv0mCCe6XhN9vMKllBod2ls%2Bt5HUNDuC7MJ%2BuEiTw%2F%2BuD00dw4Pj1jPJoXxq7ugD%2BqBkWNNoNaPodEVnSNLKJM9h3bW9F5FDgV1iX9mte1%2Bz3d6cQrN3MG4UiNcVxy25zIamAan3zG0fMlKy&X-Amz-Signature=5461c2e982436bc2ea1adabd2b74523ffef94405402c0d1341be4892508984fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
