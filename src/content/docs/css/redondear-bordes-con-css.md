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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZYZGDSN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC18lelYg2IWdegOoBRhuROFMXMnD8XrRPYHvhiUS82nAiBQ94vC9AHf6Jx5RlvEdEY4xaS1OdtrXr9ZszKAVUxgJSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F0G%2FNGvvTuneRZQQKtwDcB%2BCn%2FYE1x1nfzPf8295yDYlcahDjAlSSJWL%2BxdLUTleBy30WWK%2FFsVggA4NLoDOnyNIg1QoRTFucXCmmMeCwPb6CiDLxfYQJK4Pmb%2FsoWIgU5GmYu%2Fc6c8fsJH%2B%2BxCMdxiBjoBFhouHIWG%2BvpTZW5XW36nFCzmzoTZkZ4U%2BnGgfRWgg2t9l8HogJp6ZjOB7%2Biga%2B5r97WUwhvHV0dIhqjivd1SVsQnV9pLwm7GcB7yYfttPW2cbo509jfwp48ho7tTBpQhUTlqK7bqGhLAcKuu5PijhP394wL1QbzU88MpCAx9bN4haYOsMYS7pgU47FsPYjt4bqvo0PGy%2B3X6s9gd0VdG5ttwDSkgTdlsGO7pe55OaAeQ3HWDi3azsIon%2Bt7sxJZJJ%2B0D%2BcGfTdBn1eqjVcyk6oU7NV7apcW3qg2UAHWCCd9mQrErCse6L0V9uw81bi7KU%2BDVB%2BgKkv2Sl2ogdz7w3zNjR7%2FV7IfUnHhLqo%2BOF75DHRikBm6twtwy4M02nIWjtwNHbRsKT1nvBnrmSc9JDAETwj1Ou5u5PoAJ4mxb6zeqgNcbi7KED92ChBTevUVjITDzFrFjbk3IQYaCoe8MYrcp0a6QK3ryZc8sfnTyZE4gDFp%2FSXV8wvIjfyQY6pgEuooCAKcEmSmuFyLz8Y11PJgSCofAEwgpaWNZx4Kw1O7cg1TZVgcAdH15x6HyaOa%2F6yRPsIvRAR0tj84%2FQvIvfrKc9P%2F6uNa3lHIVWM3k3bdBA5JFuV1kAQ8TU%2FajEapUUSUM5JYGtHSIORZ%2FQAEKcEaUZXcgI5ExkZFaBC%2BpyXU%2B0zdwXyuYVAMJ3EDGscxDV8zFZEgfFV87CenYBE%2F27p3dz7Mwa&X-Amz-Signature=d5f8acedfdbb0db7b7406e4a14e9f6ca7e032b29ac2c81bf4ebe57102f3b0f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZYZGDSN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC18lelYg2IWdegOoBRhuROFMXMnD8XrRPYHvhiUS82nAiBQ94vC9AHf6Jx5RlvEdEY4xaS1OdtrXr9ZszKAVUxgJSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F0G%2FNGvvTuneRZQQKtwDcB%2BCn%2FYE1x1nfzPf8295yDYlcahDjAlSSJWL%2BxdLUTleBy30WWK%2FFsVggA4NLoDOnyNIg1QoRTFucXCmmMeCwPb6CiDLxfYQJK4Pmb%2FsoWIgU5GmYu%2Fc6c8fsJH%2B%2BxCMdxiBjoBFhouHIWG%2BvpTZW5XW36nFCzmzoTZkZ4U%2BnGgfRWgg2t9l8HogJp6ZjOB7%2Biga%2B5r97WUwhvHV0dIhqjivd1SVsQnV9pLwm7GcB7yYfttPW2cbo509jfwp48ho7tTBpQhUTlqK7bqGhLAcKuu5PijhP394wL1QbzU88MpCAx9bN4haYOsMYS7pgU47FsPYjt4bqvo0PGy%2B3X6s9gd0VdG5ttwDSkgTdlsGO7pe55OaAeQ3HWDi3azsIon%2Bt7sxJZJJ%2B0D%2BcGfTdBn1eqjVcyk6oU7NV7apcW3qg2UAHWCCd9mQrErCse6L0V9uw81bi7KU%2BDVB%2BgKkv2Sl2ogdz7w3zNjR7%2FV7IfUnHhLqo%2BOF75DHRikBm6twtwy4M02nIWjtwNHbRsKT1nvBnrmSc9JDAETwj1Ou5u5PoAJ4mxb6zeqgNcbi7KED92ChBTevUVjITDzFrFjbk3IQYaCoe8MYrcp0a6QK3ryZc8sfnTyZE4gDFp%2FSXV8wvIjfyQY6pgEuooCAKcEmSmuFyLz8Y11PJgSCofAEwgpaWNZx4Kw1O7cg1TZVgcAdH15x6HyaOa%2F6yRPsIvRAR0tj84%2FQvIvfrKc9P%2F6uNa3lHIVWM3k3bdBA5JFuV1kAQ8TU%2FajEapUUSUM5JYGtHSIORZ%2FQAEKcEaUZXcgI5ExkZFaBC%2BpyXU%2B0zdwXyuYVAMJ3EDGscxDV8zFZEgfFV87CenYBE%2F27p3dz7Mwa&X-Amz-Signature=2eb4a1338916f133001e0ac4b0515143326576fd1d65cb8f9b6b94fb37a28b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
