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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUEZZ36%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD49KKkdafFsBOVb6Pd83Lz0cfMmACnUXD5NkkKCsI1%2FQIhAJKgY%2FjYSkE2C28Mp%2BTj2NjK%2Fv0PWd0Iz40NDdCpPLLdKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzt6GYKsGJ%2Ft03StYQq3AMctGhRu78o1aeUkloK0xr7kYrMB0yv2%2B8Sn6nWqJQeQ56xDv1K38T8JMkzDAjnRWAyNwcskpFW0eLKAFPvxePgcfOxfsFJ3uumISOYoNhtQNFpRUQwPuc6bp2xSkq30Ns%2F4NXLrtis9xH85gIaKJLwc37Y46d%2B2t4lKAGd4V1OM4KXXQTxRh%2BZHOtelIDHfAfGHQ%2FR21Dvh%2FrFA1Z8n8yQAo%2Bb1YR%2BEyf2HQh%2BwntfUC5OKiTbE2xIaVzO8dTg3JAmBwF7hL%2F0JBPRVdIasfnJl3qEOBljZVUlKmwKJ4mWuWI%2F7ZFq5giHsVEkIGPTXHX7Vk6vu01y9tO3Zzq%2FLc64LoH0RzWxKZwUaPfPnPmnzABci9xvKUg1aFpujjg9BebQKo43WHpGA6K2OjVX0lKYbVLr1oTWAvSAcr2YoFjZpnO%2BTEX80xsUZmIOajsiUhRUM9h0ISVDtvqYVjtNgNH%2Bf%2BklsDsqbyrR1nrt1gh8zW4faNBo%2BY2JZNhdI8eFV3xIJokgIg5SQDnXbPDPpFr6XcP1KJae8bqWQN8%2FlCirKxL%2FlDxrdbQ%2FmRRIMmKFJ9zk00FnYKX0JzjVgV6TfdbLz2BthLbwhaaiQlr5XBNbw16oYMdts33K4vkIEDCj3NzJBjqkAXrmvqOpnmPd4AckAJtto0EvE4bq6fxWCc35qzpuoQ%2BJn9ct1PWIIvrRfRzvLkOdedVUlcMWCSXO0M%2BCIOecqr9o%2BsItzOXmaKPNxdSU5KhqCn4eV9%2FHWI52tMlwIHrxNxwgFPPnEa3c5muw8gz5f9Lt5UOO6V3%2FKjhQwCzaKLSrqir4%2BpBjRZk7CcP58QpFkR13djw39NQ8tOSRb7Gve23uXNIq&X-Amz-Signature=6468120aafa563aedbcb30cf4e149cb6730484fefc5dc375a52505fde73e5342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUEZZ36%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD49KKkdafFsBOVb6Pd83Lz0cfMmACnUXD5NkkKCsI1%2FQIhAJKgY%2FjYSkE2C28Mp%2BTj2NjK%2Fv0PWd0Iz40NDdCpPLLdKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzt6GYKsGJ%2Ft03StYQq3AMctGhRu78o1aeUkloK0xr7kYrMB0yv2%2B8Sn6nWqJQeQ56xDv1K38T8JMkzDAjnRWAyNwcskpFW0eLKAFPvxePgcfOxfsFJ3uumISOYoNhtQNFpRUQwPuc6bp2xSkq30Ns%2F4NXLrtis9xH85gIaKJLwc37Y46d%2B2t4lKAGd4V1OM4KXXQTxRh%2BZHOtelIDHfAfGHQ%2FR21Dvh%2FrFA1Z8n8yQAo%2Bb1YR%2BEyf2HQh%2BwntfUC5OKiTbE2xIaVzO8dTg3JAmBwF7hL%2F0JBPRVdIasfnJl3qEOBljZVUlKmwKJ4mWuWI%2F7ZFq5giHsVEkIGPTXHX7Vk6vu01y9tO3Zzq%2FLc64LoH0RzWxKZwUaPfPnPmnzABci9xvKUg1aFpujjg9BebQKo43WHpGA6K2OjVX0lKYbVLr1oTWAvSAcr2YoFjZpnO%2BTEX80xsUZmIOajsiUhRUM9h0ISVDtvqYVjtNgNH%2Bf%2BklsDsqbyrR1nrt1gh8zW4faNBo%2BY2JZNhdI8eFV3xIJokgIg5SQDnXbPDPpFr6XcP1KJae8bqWQN8%2FlCirKxL%2FlDxrdbQ%2FmRRIMmKFJ9zk00FnYKX0JzjVgV6TfdbLz2BthLbwhaaiQlr5XBNbw16oYMdts33K4vkIEDCj3NzJBjqkAXrmvqOpnmPd4AckAJtto0EvE4bq6fxWCc35qzpuoQ%2BJn9ct1PWIIvrRfRzvLkOdedVUlcMWCSXO0M%2BCIOecqr9o%2BsItzOXmaKPNxdSU5KhqCn4eV9%2FHWI52tMlwIHrxNxwgFPPnEa3c5muw8gz5f9Lt5UOO6V3%2FKjhQwCzaKLSrqir4%2BpBjRZk7CcP58QpFkR13djw39NQ8tOSRb7Gve23uXNIq&X-Amz-Signature=26f443a091e63a69c22cf95e8ab1f5f5a1fb51b45e37ea15625e61acb59d85ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
