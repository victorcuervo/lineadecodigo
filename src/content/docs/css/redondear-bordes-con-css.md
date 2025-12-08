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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQRAFIV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1DRH%2BSTgZVDFVKjVHfHnJ58GcMAZ68jEIzrtvX95FxwIgU2e9mI2qUaKmVgUxf%2BNZSTXiIMdO%2FXtZL4t7%2B69aSJAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYGNCxtZ%2Bm5UOgYBCrcAwWjPkC%2B1H4lk8mdZJDGwjiU1o2Voi28iAbHJshfIJDPA1ekb%2FE0sRbuur%2BVqObmCoaty%2BNo4Nh2P1tq86482CC8vqqd5bDrFUwRGMH5eDqHBx7qhubkv%2FK%2FWBkLIza%2Fe42BIO%2ByZcbJK2HYJa16T69wxh%2FOfUkkTmd7Y4QsXfOm4SFSMt7pTzI4CaEssj3NcL2ESxeKeMhecBzmdGEk7sE0f1nlXg2IkUEhYY7LDnKt2kfkqs4msbhXzafWRozIbpRGbbPrIWgvxoSXEhNHGeBkn9ZM7Vduhx3lwpaT7L4%2F%2FU3ZBLkfvbGI08FLAD%2FBA8Ackk2wKc%2FbzSMSX6c4giUFs4oScqN%2BYrGnM8uV%2Fuzj6xzyTjgWNVR8im4Osjs%2BN%2FGl%2BBp3cMF5sjdD9lPqOvRsrVenJm5yw0lfRIOTjsUkslsh6bT4FUpXvusjfiEZV04WX%2FaM2yBEhTehPOY6fRrpWwEYMzs3bupFAlTkWivWyCnpOPGq58k1zIor2r1xjoDO%2FulVUzsdp5N3CB7O4U7xVVeneO2e4AYgNaK7lneiSJvq60GKtdDCdsYM%2FAkGvVH2cp7PM60lm7NTnI%2Fpd2BFh6Ug69J0OlJXH%2BpdrEacnPy%2BEyq3cqW5S0GcMKCU2ckGOqUBGLWTlb4hJy%2FyJi8sP%2BzntCyhu1Saay5UNSVZUKOjNqZ7rcwcGzQL%2F%2BoJrJTL7JXEQBJczsqmCV3Z9B9Bh5GgiyYWH1LHjxT7p%2FsA5zaV0brqjC74EP0hwJwG0NxPSfpxI6aOg7FCNYxtbGIQlKfKPj1EbhjSin1BCyBmwqpHnJMH1pO7WpK2jRCQRAFDOmdmtCCXPt6VE9pImk217Q30kCpLIQ%2FA&X-Amz-Signature=39d2944f298a85b2701b96ce25109fbf98bee09ecc0536fa42635fe124405f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQRAFIV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1DRH%2BSTgZVDFVKjVHfHnJ58GcMAZ68jEIzrtvX95FxwIgU2e9mI2qUaKmVgUxf%2BNZSTXiIMdO%2FXtZL4t7%2B69aSJAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYGNCxtZ%2Bm5UOgYBCrcAwWjPkC%2B1H4lk8mdZJDGwjiU1o2Voi28iAbHJshfIJDPA1ekb%2FE0sRbuur%2BVqObmCoaty%2BNo4Nh2P1tq86482CC8vqqd5bDrFUwRGMH5eDqHBx7qhubkv%2FK%2FWBkLIza%2Fe42BIO%2ByZcbJK2HYJa16T69wxh%2FOfUkkTmd7Y4QsXfOm4SFSMt7pTzI4CaEssj3NcL2ESxeKeMhecBzmdGEk7sE0f1nlXg2IkUEhYY7LDnKt2kfkqs4msbhXzafWRozIbpRGbbPrIWgvxoSXEhNHGeBkn9ZM7Vduhx3lwpaT7L4%2F%2FU3ZBLkfvbGI08FLAD%2FBA8Ackk2wKc%2FbzSMSX6c4giUFs4oScqN%2BYrGnM8uV%2Fuzj6xzyTjgWNVR8im4Osjs%2BN%2FGl%2BBp3cMF5sjdD9lPqOvRsrVenJm5yw0lfRIOTjsUkslsh6bT4FUpXvusjfiEZV04WX%2FaM2yBEhTehPOY6fRrpWwEYMzs3bupFAlTkWivWyCnpOPGq58k1zIor2r1xjoDO%2FulVUzsdp5N3CB7O4U7xVVeneO2e4AYgNaK7lneiSJvq60GKtdDCdsYM%2FAkGvVH2cp7PM60lm7NTnI%2Fpd2BFh6Ug69J0OlJXH%2BpdrEacnPy%2BEyq3cqW5S0GcMKCU2ckGOqUBGLWTlb4hJy%2FyJi8sP%2BzntCyhu1Saay5UNSVZUKOjNqZ7rcwcGzQL%2F%2BoJrJTL7JXEQBJczsqmCV3Z9B9Bh5GgiyYWH1LHjxT7p%2FsA5zaV0brqjC74EP0hwJwG0NxPSfpxI6aOg7FCNYxtbGIQlKfKPj1EbhjSin1BCyBmwqpHnJMH1pO7WpK2jRCQRAFDOmdmtCCXPt6VE9pImk217Q30kCpLIQ%2FA&X-Amz-Signature=f57003d739c62c744d2f5377db1c6ea072343bba5665931bb9660184df466035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
