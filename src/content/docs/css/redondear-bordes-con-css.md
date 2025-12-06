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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QGNDMC6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHETD4FRm46VRJMcHjAC9gL0YkXv6VBM0Lq7qlkVUTn0AiEAgSXNw8%2FgLeSGx3i9Fb1Ti2b%2FzMM6NYVgYkqrUq0yKowq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMQ6kHsap%2BljC%2F6BgSrcA4SsFLp3rvg8s36ZEulWtaa2dFyui1ZAIz6K6GF2p2acxgaQFLJFvzUgd8RhWa368FVvBNdRT43P9L2r2JesvUw5izogbc5Kt0QDBtqCk1aW3NdbAgG2a3D4HM3opC%2FUFNLpPdtLJWe4JoMD4JcgQCDqGbCNoTHlBIK3voyxBXiv7%2BxcaiR4kIb%2Fl7FQ%2FjVK%2Bi4wpuC537%2FUmXmUuzQniKPIPZKG4m52k%2BCn4RUCtNqmaCYy2Tg%2BBfSTELHgOsey6LMLEQVjKhESlram1K5Dgj9zBC8JIof8u%2FI0DJ7%2BtH2fXy8aMh1y3pAMZSKJt1%2BGFq1i08KGqUHBpQoM8jAmCu7wkcOsCr4CJWxQW1xviwHJXJVTlBojfCjtituX8vGgH3%2BdYemZz1l4z9TCvAIg6civL7w24k565hqU7wZzEFRL3fiPLAz6LjN7OHR5vwfvpgDr3uXx7uWmOryJLnRfzyTpTJhRz7r7JduH29qAhmXd64A4VDIadFbo2QsLbDoxpYxgwNYWGySRxZPldShwwnYsqQkEiU8XPUhMpNm1Eu9ZhUx%2BSWXdtZ16CjfgX11Fyfoo4vrisZW%2B%2FCf3kaQ1MhqrJpUm1t5rsOl8aopfoNBdODE9Zc4cAhGFuE2gMJan0MkGOqUBbK7H%2FmkMoaTr6RZvunzY3Zp1qJqb3ONu7GZXQn2MD6Zv18fwDApjDZDk8FYF4bSNk%2FfvwGQmgQKh%2BoSu8oc8Drhs4rI%2BGQ9UTd3mtz3BDo99tbW3BMOwmTn41W77omU6XzCvoKIU5vNmuzpJ4pm%2B8CFglMf7WociVPDDh4FTutPkWxzKMia4WMcgFjb2dQ8s%2Bd2nSoGt8rtKb1xZM9jR7ds11WVI&X-Amz-Signature=f616846cbd17916cb1ff30d3531e4d6c8ec0b20ae7a5638aa4396fe91f615506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QGNDMC6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHETD4FRm46VRJMcHjAC9gL0YkXv6VBM0Lq7qlkVUTn0AiEAgSXNw8%2FgLeSGx3i9Fb1Ti2b%2FzMM6NYVgYkqrUq0yKowq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMQ6kHsap%2BljC%2F6BgSrcA4SsFLp3rvg8s36ZEulWtaa2dFyui1ZAIz6K6GF2p2acxgaQFLJFvzUgd8RhWa368FVvBNdRT43P9L2r2JesvUw5izogbc5Kt0QDBtqCk1aW3NdbAgG2a3D4HM3opC%2FUFNLpPdtLJWe4JoMD4JcgQCDqGbCNoTHlBIK3voyxBXiv7%2BxcaiR4kIb%2Fl7FQ%2FjVK%2Bi4wpuC537%2FUmXmUuzQniKPIPZKG4m52k%2BCn4RUCtNqmaCYy2Tg%2BBfSTELHgOsey6LMLEQVjKhESlram1K5Dgj9zBC8JIof8u%2FI0DJ7%2BtH2fXy8aMh1y3pAMZSKJt1%2BGFq1i08KGqUHBpQoM8jAmCu7wkcOsCr4CJWxQW1xviwHJXJVTlBojfCjtituX8vGgH3%2BdYemZz1l4z9TCvAIg6civL7w24k565hqU7wZzEFRL3fiPLAz6LjN7OHR5vwfvpgDr3uXx7uWmOryJLnRfzyTpTJhRz7r7JduH29qAhmXd64A4VDIadFbo2QsLbDoxpYxgwNYWGySRxZPldShwwnYsqQkEiU8XPUhMpNm1Eu9ZhUx%2BSWXdtZ16CjfgX11Fyfoo4vrisZW%2B%2FCf3kaQ1MhqrJpUm1t5rsOl8aopfoNBdODE9Zc4cAhGFuE2gMJan0MkGOqUBbK7H%2FmkMoaTr6RZvunzY3Zp1qJqb3ONu7GZXQn2MD6Zv18fwDApjDZDk8FYF4bSNk%2FfvwGQmgQKh%2BoSu8oc8Drhs4rI%2BGQ9UTd3mtz3BDo99tbW3BMOwmTn41W77omU6XzCvoKIU5vNmuzpJ4pm%2B8CFglMf7WociVPDDh4FTutPkWxzKMia4WMcgFjb2dQ8s%2Bd2nSoGt8rtKb1xZM9jR7ds11WVI&X-Amz-Signature=a29b2ff82390051d28913b0833f4602e78d297f5e11d2f1765bb16e7e948fe41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
