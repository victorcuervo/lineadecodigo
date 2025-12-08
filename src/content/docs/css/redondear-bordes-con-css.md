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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVSWXZ4K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgsQzCbppjKXo4BJC1%2B5Q%2BqCpuD3W17UCuP6HDf%2BrsPAiAHKR0f5okBjAmbypfcM8%2BPVSZ%2BfMRD3sFRIbEbaIRzKiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXhUILfqXMLPZQK4IKtwDnbapKORcdLqma%2BVqLlGKxkFinWy%2Bs5qMGgTge3N1lbYckeMigSKV%2BBsf9t4ZnpdrUlnxrs4rZwQuLiVS2tRgNZTSlMs86%2FNaUm2jDQ20ye8wJAXt%2Byjx9yT6zCYIVk7iEhki2NXjCCOnjs0TW8EkCMURezyhJvMNpr0D5lc%2FJXG%2BWrPCmQSbD6%2BmSqLHt9bATCTf4eWSBtcXLRqF7RFOYwzvo6UFwkRpuWGyl1XPHyYUJm%2FklQCKqGM7kWUnk%2F7F9ot9Ks4cWTLHYS%2Fm3IMGx2EXO0KPyzdkv3C1kpbS%2FcQefUqL4I6FIM36kH7x49%2F5gkx0xo9LXfGIqDeP%2FwzD%2FxnaZs8iwZjbZKpdTq%2BmMZQtasOMJmIAHEJ%2BySlY2vxYPJnBQEgsUNwaIvYK7wn%2BC0g9yooV1Js%2FtFWaNTru7sTG5MZ%2BEaC7TpfYdqlXtjb4M0NESA2RPlueAqCspEBiKMh7%2FA91pGQ0XHf6wchzij3cJ1eqrWgHVvd53IHILlBXVylDzuwO3g3PqdxziTJxmXsH1Pn%2FpR3tVkPbKsNog8Wia7g3PWLWzbdZkBJI0hg7sQ8i5gJ3UuDJr4LT5cqHyN%2Fs7t9VV7BPRBUA%2FvyzsN7lEEiJQLs4wXyZ58Yw5NzcyQY6pgHyucvZ5Spvs9uVz99v4q5jh042mL0HhWFEezqL2H3bHZ7X4QJ0QyZCZWJQpSjvYr7UrcQi4ll9yvqOFnhb%2B0MtjwlF6CRuPLiCNJqI3kGzTs831qtl%2F3yYpb7niKMKYCuVpSSp%2BKXFq65IW2CGyTdaS8JsPBtpDdUv%2Bpbp%2FSm6aSI0R8boSePiaG6G%2FBFbJTwpFClZeDEys8iGOwaOD82Vv7NygPfZ&X-Amz-Signature=fd7cd84c3eab1fd2fb8ff754ba86184cc219876ebc268024abb8b4a81ab82bf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVSWXZ4K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgsQzCbppjKXo4BJC1%2B5Q%2BqCpuD3W17UCuP6HDf%2BrsPAiAHKR0f5okBjAmbypfcM8%2BPVSZ%2BfMRD3sFRIbEbaIRzKiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXhUILfqXMLPZQK4IKtwDnbapKORcdLqma%2BVqLlGKxkFinWy%2Bs5qMGgTge3N1lbYckeMigSKV%2BBsf9t4ZnpdrUlnxrs4rZwQuLiVS2tRgNZTSlMs86%2FNaUm2jDQ20ye8wJAXt%2Byjx9yT6zCYIVk7iEhki2NXjCCOnjs0TW8EkCMURezyhJvMNpr0D5lc%2FJXG%2BWrPCmQSbD6%2BmSqLHt9bATCTf4eWSBtcXLRqF7RFOYwzvo6UFwkRpuWGyl1XPHyYUJm%2FklQCKqGM7kWUnk%2F7F9ot9Ks4cWTLHYS%2Fm3IMGx2EXO0KPyzdkv3C1kpbS%2FcQefUqL4I6FIM36kH7x49%2F5gkx0xo9LXfGIqDeP%2FwzD%2FxnaZs8iwZjbZKpdTq%2BmMZQtasOMJmIAHEJ%2BySlY2vxYPJnBQEgsUNwaIvYK7wn%2BC0g9yooV1Js%2FtFWaNTru7sTG5MZ%2BEaC7TpfYdqlXtjb4M0NESA2RPlueAqCspEBiKMh7%2FA91pGQ0XHf6wchzij3cJ1eqrWgHVvd53IHILlBXVylDzuwO3g3PqdxziTJxmXsH1Pn%2FpR3tVkPbKsNog8Wia7g3PWLWzbdZkBJI0hg7sQ8i5gJ3UuDJr4LT5cqHyN%2Fs7t9VV7BPRBUA%2FvyzsN7lEEiJQLs4wXyZ58Yw5NzcyQY6pgHyucvZ5Spvs9uVz99v4q5jh042mL0HhWFEezqL2H3bHZ7X4QJ0QyZCZWJQpSjvYr7UrcQi4ll9yvqOFnhb%2B0MtjwlF6CRuPLiCNJqI3kGzTs831qtl%2F3yYpb7niKMKYCuVpSSp%2BKXFq65IW2CGyTdaS8JsPBtpDdUv%2Bpbp%2FSm6aSI0R8boSePiaG6G%2FBFbJTwpFClZeDEys8iGOwaOD82Vv7NygPfZ&X-Amz-Signature=97e55ef486fc7df62b0b9db4d6019b32e1845c1b42aba29561829e1aeeefbad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
