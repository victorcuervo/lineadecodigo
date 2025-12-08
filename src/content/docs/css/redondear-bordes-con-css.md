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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2HPTFG2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXcoL0sc9NphM2MWPy3HdseJ1pr7FcSSp1kdsFz9EZqAiASx0G7eFCSgHvhPkLb5hvvew3%2Firm2fqxNFQkctEDqwCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOELoHxb%2FvlojMN%2BrKtwDku%2FLLlzGpNZAXJaSt81DhyqMsR5qp0ZnvXV%2Bts%2F9FHmCS22oEhgKDizs71eUZmrvTfHgXwxSJB%2BX4vtwk5pWzIQ0bjWvoij%2BG4proEc7VBeutSvAeyhD10PtwoEo1QiaLxYsptKYXxv3vZlHKA9r4FG38xYylqxarPPDdB9OSNP%2FnW%2FW2SAe%2Bli%2Foo%2FoYmL9%2FRyi5H6KNozN%2FPodBmlgvW6q1CgcGQ%2BqjKg%2FBmmtkRyxWEkPWvl9z%2B1hqpMktCr2GKU6HdYCYcdpQgU34Rrpt%2B%2F0EDawS0gap8%2Bfbc3%2BcC3OkfguVu7x8QGZFGTnk5jrQg9R%2B%2FHahm4BivdnzAzs0OSOWKnEDJ%2BwmAa2goc3nG%2BMSYtTq9LWb29FWm8r%2FwGFmyV33vnZzemqn4Djr3jHGLFzitbn9a5ep0xaHAh1XVmrLvV5ehlqGqh7Bkbpz%2F8O4HSW8Pj1cicmnKtlEYA%2FcgDrCXrbjp%2FEDlpCxup%2F1eFHH%2Bmru18x05%2BRFaqz%2BXf7igHIn30DQ7pSxRH5GlEiseXJh967tPK892NNYIWhtPI9RplwpAsRxtjt8MJmCorDoALmEPUlekbXAjj4CyDfgxluLiBxeG2toCkl8iul%2BHuj4KkOG3BcauMxJggwofPayQY6pgFlgEscGTPTKlnOf4rc7t4lVs6d%2BHKVBMqN%2FUbvG42tlzYhb9kOHxSjjqamYdyqhRL8TEm%2Bxyk3UAo1mJh0gpnFPToSYWMx2L8ASBDOrZgwfqKuPi53BvEByBW31S%2BQUPveoVzq2uu4dt2LbTwLuOExSS8N3ruj9KgpG%2BurmQl%2Fc1hFeHBDcIeIQ35uDB5L9eRYQlLyGqnuoGWzKydGBv1YJAS1aJLC&X-Amz-Signature=184eda7a267074cbb8639408a1ecad950b09fe88e3383f28a56d784c21aae94d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2HPTFG2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXcoL0sc9NphM2MWPy3HdseJ1pr7FcSSp1kdsFz9EZqAiASx0G7eFCSgHvhPkLb5hvvew3%2Firm2fqxNFQkctEDqwCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOELoHxb%2FvlojMN%2BrKtwDku%2FLLlzGpNZAXJaSt81DhyqMsR5qp0ZnvXV%2Bts%2F9FHmCS22oEhgKDizs71eUZmrvTfHgXwxSJB%2BX4vtwk5pWzIQ0bjWvoij%2BG4proEc7VBeutSvAeyhD10PtwoEo1QiaLxYsptKYXxv3vZlHKA9r4FG38xYylqxarPPDdB9OSNP%2FnW%2FW2SAe%2Bli%2Foo%2FoYmL9%2FRyi5H6KNozN%2FPodBmlgvW6q1CgcGQ%2BqjKg%2FBmmtkRyxWEkPWvl9z%2B1hqpMktCr2GKU6HdYCYcdpQgU34Rrpt%2B%2F0EDawS0gap8%2Bfbc3%2BcC3OkfguVu7x8QGZFGTnk5jrQg9R%2B%2FHahm4BivdnzAzs0OSOWKnEDJ%2BwmAa2goc3nG%2BMSYtTq9LWb29FWm8r%2FwGFmyV33vnZzemqn4Djr3jHGLFzitbn9a5ep0xaHAh1XVmrLvV5ehlqGqh7Bkbpz%2F8O4HSW8Pj1cicmnKtlEYA%2FcgDrCXrbjp%2FEDlpCxup%2F1eFHH%2Bmru18x05%2BRFaqz%2BXf7igHIn30DQ7pSxRH5GlEiseXJh967tPK892NNYIWhtPI9RplwpAsRxtjt8MJmCorDoALmEPUlekbXAjj4CyDfgxluLiBxeG2toCkl8iul%2BHuj4KkOG3BcauMxJggwofPayQY6pgFlgEscGTPTKlnOf4rc7t4lVs6d%2BHKVBMqN%2FUbvG42tlzYhb9kOHxSjjqamYdyqhRL8TEm%2Bxyk3UAo1mJh0gpnFPToSYWMx2L8ASBDOrZgwfqKuPi53BvEByBW31S%2BQUPveoVzq2uu4dt2LbTwLuOExSS8N3ruj9KgpG%2BurmQl%2Fc1hFeHBDcIeIQ35uDB5L9eRYQlLyGqnuoGWzKydGBv1YJAS1aJLC&X-Amz-Signature=3960212562f10790140cda1fd4698d842cd5f54812d5e1c747dead1c2d24a162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
