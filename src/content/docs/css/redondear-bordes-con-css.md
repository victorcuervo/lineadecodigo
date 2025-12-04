---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GCSQQTA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDVe5eFQ9g3uGA8cE%2FhH89%2BKw8tlFuDW%2BZ9VoeAtqWyLAiBpTEpxDkQMQQgaQoblquvz5CHmVmoefYQZE%2BNiEbzmnSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMNB168FegzPeoMMX3KtwDI8z7IAnhNUioUR4%2B5sFcggKx01tXv%2BBv1GuZOwXUpGhv8TSGpjKujiyuYCH6rmBvStXU3O7h0IwBw0Gd60DPAbt1htqrTbaKa%2FRALJ4pwFTuFZM4rFYER8w6Ki60nigyj1ttRnzOTi%2FsxFEyC0AFh1jg8tgOxsArYaB%2BfAzVqaAv9858CIEs3VEY6k10aN0UE4N6qu2KQYwkgwTR1KQa3idXdZvV%2FHn3OsF9qXSj4T467d7ctgjWx%2BJ5gAIlQBHLm1qPa8YYjDxzUNZ6EMeZ%2Fop0MRmRP7sVseKq8sRdRJRlx%2B5ZNc%2BmhsW1NfW3g2EFnHOkCCKyEWzEIwNJEbyzstWwe62y7OCEc4zgkOYXbByu12zzG3AwV6u79cA%2Brg1T4ZihUhg7kvsRQ83qypZO9wOVt0NR4hi6kIGCNK94vtdnqSGGlzatJzty1%2BdFr1USdaXnKwno5fHikOBpUMjQ0dJs4tb9FdQCXLH9O9rTNxV%2FybSq33yV%2BBRjAnBFraRzrKbp7sGC%2FdEwcmK3fieYF6gpjhsLukFiNQAy9qGF%2Fk%2FC7SMH1eI5W%2ByPeXriiTU36lJYHk6J858YoM3TxWX8E8ZYDavVMPWiXkqY91s7J9%2Fvh5wClkz%2FmsXgUt4w767EyQY6pgEy0bM%2B048WrelyZzB8pjY%2Bn0z3emY03U%2BCW7J2Xj8CUzOxVOMq7Ch2l8iKxK%2BhkbEdc4AKS%2FDq3QsGdZFK9boY5CaP5qVV24ONx1vwqJQiIyymcM3PYFQJLgkxn8mNA9qa50YPRbAvNMi1Thg07h4gUtV0NKPkXyQPCTtssuEfpbpvUvAknIdRUwo7X3vs3qapg2jAkNVF%2BPqt8ZMEqtyEEuqZ2%2BLg&X-Amz-Signature=381f38fbe71143d4a4c4aa1efb2bc9db1fbc6ea7c4fd2fb6244533ed9e433823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GCSQQTA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDVe5eFQ9g3uGA8cE%2FhH89%2BKw8tlFuDW%2BZ9VoeAtqWyLAiBpTEpxDkQMQQgaQoblquvz5CHmVmoefYQZE%2BNiEbzmnSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMNB168FegzPeoMMX3KtwDI8z7IAnhNUioUR4%2B5sFcggKx01tXv%2BBv1GuZOwXUpGhv8TSGpjKujiyuYCH6rmBvStXU3O7h0IwBw0Gd60DPAbt1htqrTbaKa%2FRALJ4pwFTuFZM4rFYER8w6Ki60nigyj1ttRnzOTi%2FsxFEyC0AFh1jg8tgOxsArYaB%2BfAzVqaAv9858CIEs3VEY6k10aN0UE4N6qu2KQYwkgwTR1KQa3idXdZvV%2FHn3OsF9qXSj4T467d7ctgjWx%2BJ5gAIlQBHLm1qPa8YYjDxzUNZ6EMeZ%2Fop0MRmRP7sVseKq8sRdRJRlx%2B5ZNc%2BmhsW1NfW3g2EFnHOkCCKyEWzEIwNJEbyzstWwe62y7OCEc4zgkOYXbByu12zzG3AwV6u79cA%2Brg1T4ZihUhg7kvsRQ83qypZO9wOVt0NR4hi6kIGCNK94vtdnqSGGlzatJzty1%2BdFr1USdaXnKwno5fHikOBpUMjQ0dJs4tb9FdQCXLH9O9rTNxV%2FybSq33yV%2BBRjAnBFraRzrKbp7sGC%2FdEwcmK3fieYF6gpjhsLukFiNQAy9qGF%2Fk%2FC7SMH1eI5W%2ByPeXriiTU36lJYHk6J858YoM3TxWX8E8ZYDavVMPWiXkqY91s7J9%2Fvh5wClkz%2FmsXgUt4w767EyQY6pgEy0bM%2B048WrelyZzB8pjY%2Bn0z3emY03U%2BCW7J2Xj8CUzOxVOMq7Ch2l8iKxK%2BhkbEdc4AKS%2FDq3QsGdZFK9boY5CaP5qVV24ONx1vwqJQiIyymcM3PYFQJLgkxn8mNA9qa50YPRbAvNMi1Thg07h4gUtV0NKPkXyQPCTtssuEfpbpvUvAknIdRUwo7X3vs3qapg2jAkNVF%2BPqt8ZMEqtyEEuqZ2%2BLg&X-Amz-Signature=810d83c0392c33eabc757a1553b4ad8440457738c9b2541ddaed4b0109b3aeb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
