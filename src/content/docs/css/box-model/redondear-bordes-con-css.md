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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX7XAQSF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGH2%2Fwma4NoqwDmZYbso3nU1hGHziqxeDSUCHm1vhpvqAiASnxpT208R%2FxaSZ%2Bueco91wM74cMp1NhE%2Ba20AC9yJxSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMY61L6K3UaYVt93HKtwDPrdRaLXVsIMYdDDS1%2FHXaeRl%2FA%2FrP4qNeRvAWzvsHjEw3YhXlooKAFrLTU4B4Lit0gw9hTnc5q9cylKW0bTsoDytrdniMCDgVapNgabEZMqwy%2BeDRi3gsVhnkqxiX5ZFhOYW8GEFRLi6wQAu2E20RDOkbJAcAjECo09G9eY%2FSm2EveSbMJFkWrIBIjkRpcM6rXxVh9bGsF9MCP06qTt7txYA3SeD0m3TPj4uJYVoORWgJH4dQaP3j7kn6buIn4c8i3HaR45HuSyrHNzmhktas95SkeE7%2ByOnv3eiVtY%2B185jzNcyvEXKkw5ALKMe9RQ6Lh9IysOYUL3FAHIaoK3zZwr01zj2JSvXMeOae%2FvJi7%2By%2Fhb3kCE1ZU8SqskVGaWhY9UqCFWKqiAOimrSFMa0XNDVz2cvn7GoxUBGXqRFhKPkdHwTieDwdOIr18H%2BVrJWdH7amD%2F7BWJa3UUanP12P7fbmpcbaaYJL2kATgZiCj6n4nWL2fMz%2Fnn6DKXtKMl71F6TXlHeCENYucgcMm8Y4YoVPmrQG12hsirm4NsdcI6%2BcjEkPpHj3m5MyTuBo2j8z3%2FYCkKfJtl%2Bjpk317kl9IDrmrUcQ3pDC1pSLddXri4DzCIuIYgdBYkSMdIw6YCLygY6pgHjQhPuGRd%2FxDmlzBbsh0V797MCiy3R3m2xCmu%2BOG15%2FOs6NSF0NMpuTkwsBoZX4TJTpyzeOqG1%2BADabRpyPEBpssd0Bpb11rggGZKng%2FUASydO%2BQ4uNHY9A0MQgFDBy%2BbUwucY4k2xQpLTX0rCFqje8CKGinZO9v7fW2YsfGVA3GlQgb%2BYgbNiHTqYkzt%2BwCQxhBsioiRuJFwQyRAe8YDIBF2YkAqp&X-Amz-Signature=187b0ced45155534bb328d87d184f803f003e068e2b5814fd8b2ea5deba98bbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX7XAQSF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGH2%2Fwma4NoqwDmZYbso3nU1hGHziqxeDSUCHm1vhpvqAiASnxpT208R%2FxaSZ%2Bueco91wM74cMp1NhE%2Ba20AC9yJxSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMY61L6K3UaYVt93HKtwDPrdRaLXVsIMYdDDS1%2FHXaeRl%2FA%2FrP4qNeRvAWzvsHjEw3YhXlooKAFrLTU4B4Lit0gw9hTnc5q9cylKW0bTsoDytrdniMCDgVapNgabEZMqwy%2BeDRi3gsVhnkqxiX5ZFhOYW8GEFRLi6wQAu2E20RDOkbJAcAjECo09G9eY%2FSm2EveSbMJFkWrIBIjkRpcM6rXxVh9bGsF9MCP06qTt7txYA3SeD0m3TPj4uJYVoORWgJH4dQaP3j7kn6buIn4c8i3HaR45HuSyrHNzmhktas95SkeE7%2ByOnv3eiVtY%2B185jzNcyvEXKkw5ALKMe9RQ6Lh9IysOYUL3FAHIaoK3zZwr01zj2JSvXMeOae%2FvJi7%2By%2Fhb3kCE1ZU8SqskVGaWhY9UqCFWKqiAOimrSFMa0XNDVz2cvn7GoxUBGXqRFhKPkdHwTieDwdOIr18H%2BVrJWdH7amD%2F7BWJa3UUanP12P7fbmpcbaaYJL2kATgZiCj6n4nWL2fMz%2Fnn6DKXtKMl71F6TXlHeCENYucgcMm8Y4YoVPmrQG12hsirm4NsdcI6%2BcjEkPpHj3m5MyTuBo2j8z3%2FYCkKfJtl%2Bjpk317kl9IDrmrUcQ3pDC1pSLddXri4DzCIuIYgdBYkSMdIw6YCLygY6pgHjQhPuGRd%2FxDmlzBbsh0V797MCiy3R3m2xCmu%2BOG15%2FOs6NSF0NMpuTkwsBoZX4TJTpyzeOqG1%2BADabRpyPEBpssd0Bpb11rggGZKng%2FUASydO%2BQ4uNHY9A0MQgFDBy%2BbUwucY4k2xQpLTX0rCFqje8CKGinZO9v7fW2YsfGVA3GlQgb%2BYgbNiHTqYkzt%2BwCQxhBsioiRuJFwQyRAe8YDIBF2YkAqp&X-Amz-Signature=1788793dfe302cc011cfe504a74111aae4c6ea10394f1a91c65d3305fcb26d0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
