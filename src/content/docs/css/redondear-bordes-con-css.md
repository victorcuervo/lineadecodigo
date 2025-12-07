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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCTXKQFC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlDQtr0BzqVstPqu3hnSJAFmcq%2By19%2Bu1kndCdb1rXCQIgdkgNMN%2F4xkzLolHb7hAkhtkEGtjJvJLbv%2BLs6fB87y8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIx8gDOuSMWVaMFSxSrcA1YpnuNQfiEnevfg2%2FbcpdtJKGQRqD0xyUP5YKM99LJntKVh5xXRqXS%2FnS8gC3SZgmDTSbSBOkiG9PAfvdloJU9iGbbUM4ejszqE67ZReZFQsak02ZkV9oEhg2mkx627VHNH6oVz740zW1efIW8aEgiSXYUgqPhIUO6h9SwYu7Jj4jYkP916ySMPcpPpZVEi7yHqncX%2FuM%2B3ew4W7mlsf0ggoKELJ%2FajH4AOl%2F3vo2XFde1NgLdPaJ7j%2BRcSBBCDRsA7bbRiIe%2BzaQFoXWp0vUjAYWNCdH1O9QvMPxeVFg6SpJYKZre3WxtubFTXW3imHi1dqgm8c0wO23BoQZigNB5DNAvK0S1kyzGG0CyAi7Fa9pbVHP6%2F2zXhbdG8veFUVi7mSb7kpTCRCV2Q%2FGIIhDTVNbjTYzsXbMR1lJlvqhy2ypYYiQhqGTA7SStqzQzVEYPyuA86Qze4ZX8dxrpgOR5uh2BBkiL28jxo8oicHMY5ThJUOk84TBTAQhTjHwSKvkqv7Iowmb6XThEhpmNOVC5BisHYR9i8BFgnAz%2Bg83YlNNc8TWEIViRjohn27dBxH8TjFLPKUPVykJ3V3UCzHfAh8gc7KtCOwb6o4y54cSJbTj0BrmjbQ3HGFpeJML%2FH18kGOqUBsK15OZ5Q%2Bxuk73tw11HGrWxmYQS4alkuw3HH7SmJdowdgyWByVD8X5%2FXC%2FczkgMZNf2dQRAX26ZriSAogsIO%2Bpacozx4yU1jdptYENtTZY8L8PLAgbswWorQdGv3VC7ZiYE136qkRYHCfd3KroGQwIbv8yAD%2FShW2WUq%2B3HBywrOSeKfg68G9lS90Eg6BLKzQAdQRDuBfUAutr6ryjBkYAQKmqRj&X-Amz-Signature=6885a88433b9e1f87e47a9f52a7aef5a59f280a741ab277a0b5d3eb97ac3f7db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCTXKQFC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlDQtr0BzqVstPqu3hnSJAFmcq%2By19%2Bu1kndCdb1rXCQIgdkgNMN%2F4xkzLolHb7hAkhtkEGtjJvJLbv%2BLs6fB87y8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIx8gDOuSMWVaMFSxSrcA1YpnuNQfiEnevfg2%2FbcpdtJKGQRqD0xyUP5YKM99LJntKVh5xXRqXS%2FnS8gC3SZgmDTSbSBOkiG9PAfvdloJU9iGbbUM4ejszqE67ZReZFQsak02ZkV9oEhg2mkx627VHNH6oVz740zW1efIW8aEgiSXYUgqPhIUO6h9SwYu7Jj4jYkP916ySMPcpPpZVEi7yHqncX%2FuM%2B3ew4W7mlsf0ggoKELJ%2FajH4AOl%2F3vo2XFde1NgLdPaJ7j%2BRcSBBCDRsA7bbRiIe%2BzaQFoXWp0vUjAYWNCdH1O9QvMPxeVFg6SpJYKZre3WxtubFTXW3imHi1dqgm8c0wO23BoQZigNB5DNAvK0S1kyzGG0CyAi7Fa9pbVHP6%2F2zXhbdG8veFUVi7mSb7kpTCRCV2Q%2FGIIhDTVNbjTYzsXbMR1lJlvqhy2ypYYiQhqGTA7SStqzQzVEYPyuA86Qze4ZX8dxrpgOR5uh2BBkiL28jxo8oicHMY5ThJUOk84TBTAQhTjHwSKvkqv7Iowmb6XThEhpmNOVC5BisHYR9i8BFgnAz%2Bg83YlNNc8TWEIViRjohn27dBxH8TjFLPKUPVykJ3V3UCzHfAh8gc7KtCOwb6o4y54cSJbTj0BrmjbQ3HGFpeJML%2FH18kGOqUBsK15OZ5Q%2Bxuk73tw11HGrWxmYQS4alkuw3HH7SmJdowdgyWByVD8X5%2FXC%2FczkgMZNf2dQRAX26ZriSAogsIO%2Bpacozx4yU1jdptYENtTZY8L8PLAgbswWorQdGv3VC7ZiYE136qkRYHCfd3KroGQwIbv8yAD%2FShW2WUq%2B3HBywrOSeKfg68G9lS90Eg6BLKzQAdQRDuBfUAutr6ryjBkYAQKmqRj&X-Amz-Signature=63e945484a625cedd5d2a1891711bbddd0dfd85b99f68e892e187eedee6df015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
