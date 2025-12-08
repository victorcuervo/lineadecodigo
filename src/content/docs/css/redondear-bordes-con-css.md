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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNDHV2C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjhgLAtp5dVfdkVTiqwzF5YjbdMO3T7rY7HCKzIv8Q7AiAfDNJ%2FvLm6PmZZh0nlEGLXeFVfprwoiXmDTTsOK9%2FJVSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKP1YyHQ8n5toIoVgKtwDStkE5GAP4lLAUIYO0o9v3VAziCiuo21PpRPWsl4Ctfl2wYoN%2FmbWCVlMrORozbYYiOA8hgwSmeFrbLA5a71oR%2BVVCTz4AHckWNt%2BJfKW%2BhBkDFmeDptOTfuWZ6wPiuk0JYF8r%2FhUYIr2TN0N%2FqoPFBmouvFRrnI6e5oSYeA5Kq7ASTVd2lKQ8kSQjGnHZ%2Brrlm5gtXwzD6%2B1102Sw7e5LpfBie6FM5h22Sg2qafvH7GNQjCgkXtclE1fxy5KCpsPtbQhjTOtaS2XtZ3OmLgMVTq3AKCYguhekpT8YMzCRWf3c1M7yWSUz1ZVJN8EwOrwxNR6bBHOvwSNbRYKxZTDQsZlhNq6An3BqMaemBia2Qc7hfM9Ht%2BnyCdKjlBbNuksU5rm79ukSwiqDNINK6KnjisPh5vuXR9Rb8%2Bpx4Ri1ZpUk5EXfJLR3j6QHOwb%2BD70H8b5aTa%2FRtq5XBJwkvJDFLjGkVPajPQPwoFKmuYrBbf7f0Jw314%2FO%2B2ctaXd18Ktzgd4ByAt5R2i9b1%2FdjpOnuzQAcPKwgB%2B5l2mJQIOQDYxqKkw7XBFzSoqLHOcZ9QHutea2451oyemGJ9W9i3L9hhBKubUci2cxsABS7sWj%2F1svftLYrIMRLpfy9wwu4DdyQY6pgGaXJ234krxWrqxcIJTnAeZIYl6%2By7IZ%2B2n5sQ5f%2BSoj4DG9wGmx1QggDJgE8sugAqFRN6jyaXNN%2BJSVJlBKxAcdBamTBMR3cCYUBDfyxdg9n2hBuk%2F463D28l88HJPd3vq6pNMohNVhU%2BQ1iesdqluK9O4gi7DnTgQoryRjoAVAuIigbFYiKM9iLPHXMy%2BlpS%2Bz%2FOUtIjCCXMr1TmvRJULSbhwSXZV&X-Amz-Signature=abb448606a5664d90e90fe9192d1d5870c9629b4b695f3c60fb42457600ef35a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNDHV2C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjhgLAtp5dVfdkVTiqwzF5YjbdMO3T7rY7HCKzIv8Q7AiAfDNJ%2FvLm6PmZZh0nlEGLXeFVfprwoiXmDTTsOK9%2FJVSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKP1YyHQ8n5toIoVgKtwDStkE5GAP4lLAUIYO0o9v3VAziCiuo21PpRPWsl4Ctfl2wYoN%2FmbWCVlMrORozbYYiOA8hgwSmeFrbLA5a71oR%2BVVCTz4AHckWNt%2BJfKW%2BhBkDFmeDptOTfuWZ6wPiuk0JYF8r%2FhUYIr2TN0N%2FqoPFBmouvFRrnI6e5oSYeA5Kq7ASTVd2lKQ8kSQjGnHZ%2Brrlm5gtXwzD6%2B1102Sw7e5LpfBie6FM5h22Sg2qafvH7GNQjCgkXtclE1fxy5KCpsPtbQhjTOtaS2XtZ3OmLgMVTq3AKCYguhekpT8YMzCRWf3c1M7yWSUz1ZVJN8EwOrwxNR6bBHOvwSNbRYKxZTDQsZlhNq6An3BqMaemBia2Qc7hfM9Ht%2BnyCdKjlBbNuksU5rm79ukSwiqDNINK6KnjisPh5vuXR9Rb8%2Bpx4Ri1ZpUk5EXfJLR3j6QHOwb%2BD70H8b5aTa%2FRtq5XBJwkvJDFLjGkVPajPQPwoFKmuYrBbf7f0Jw314%2FO%2B2ctaXd18Ktzgd4ByAt5R2i9b1%2FdjpOnuzQAcPKwgB%2B5l2mJQIOQDYxqKkw7XBFzSoqLHOcZ9QHutea2451oyemGJ9W9i3L9hhBKubUci2cxsABS7sWj%2F1svftLYrIMRLpfy9wwu4DdyQY6pgGaXJ234krxWrqxcIJTnAeZIYl6%2By7IZ%2B2n5sQ5f%2BSoj4DG9wGmx1QggDJgE8sugAqFRN6jyaXNN%2BJSVJlBKxAcdBamTBMR3cCYUBDfyxdg9n2hBuk%2F463D28l88HJPd3vq6pNMohNVhU%2BQ1iesdqluK9O4gi7DnTgQoryRjoAVAuIigbFYiKM9iLPHXMy%2BlpS%2Bz%2FOUtIjCCXMr1TmvRJULSbhwSXZV&X-Amz-Signature=24d0beae4111707ac2b30b90fca6ddbaf84d4a5a80ee2999f269db43735c0e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
