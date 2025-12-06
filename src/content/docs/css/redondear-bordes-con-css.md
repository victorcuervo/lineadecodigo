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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T7TT2J4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7GxRFzKTUA0dDTFWq%2F4R1qcFhN3vnY%2FLY5jnjpYeMcgIhAPNc3zqnpfQHuiOHZWF5bexrMXxOwB%2BEEapBbtYsR0KGKv8DCHEQABoMNjM3NDIzMTgzODA1Igxnee4JgBWokv95ffMq3AMTuSdjOgrgsxcDfj95J3JB2d1XX1kpgNSf3YBnNJbbnQKADNzacj13vnk0M1cELXX4au%2FcgJHOzTzVnUooybcakATmHeWmqgn5D78vvJBQ6Mz9P5ThEqADOSjDQC90yLLnkj8vXe3yqZGOVlAoAMdZT98jczN1Gl3k5CGil4oeRcnnz19QrnDyAURgY4JmUzEc%2FOgJ6LbHEYWxW482sHvK0tzSteshcWJbUHkqDq4YUX8to8eYYzXgvulGADjwTzR%2F5givjv0DYnLtSubewfH7QLIujtMkJcaMmTe959NTRh2Ole9vCPTdKZXaTHEyaruzGmYTxVsSxTs0saLoKAaoFWpEkKQCX0GGIf40sPKIjIFvaku44TBR%2FJtaBbWXDLT%2Fo0uZZV9zIpRHQCFngSVKX3chpbANEe2yvf229NKen3Ib6933CihA9saGvIaYNbIGIpemh%2BriEaf9hkH3Bbv40aWLKm1GCbQJKsgu5oijqLkxZbymD4GjT3T77%2FsyBPahkukhaGEO1Cm9eyWBsKVc9IAJg5aSsdEqIIuBRpYlD75dUxBFolc%2BxBlNVmq5nje5CNOAdacoXV2Gg4acJCG2EcCFeWdFnpzWo%2BPAwbTnplDfTw2X%2BvKF12J6YTDsvM%2FJBjqkATiauwXVtmF7D4iMv1g48sVVN0dhyQ8f4iP5s1qBcWdAUML%2Bauu2BzoRVsvsWOXwqy1DgH8zM7d3ZGouyXrCbIcsXO01sdd8p%2B0AN30QJQibg5%2BECcGlgFioGNMVUrq9r3JXLFn8bBYiVjnURexzyH2fyUgcX0WyMtsWva5n%2BVhsaJ77Xau4vK%2BwVec35wgWBboe7A3EIr4WkbaB%2BU1zW2Rk2MdA&X-Amz-Signature=d1e48a0856b925800251d630a435205c7cc0ad3c74078401454c736fa78b9fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T7TT2J4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7GxRFzKTUA0dDTFWq%2F4R1qcFhN3vnY%2FLY5jnjpYeMcgIhAPNc3zqnpfQHuiOHZWF5bexrMXxOwB%2BEEapBbtYsR0KGKv8DCHEQABoMNjM3NDIzMTgzODA1Igxnee4JgBWokv95ffMq3AMTuSdjOgrgsxcDfj95J3JB2d1XX1kpgNSf3YBnNJbbnQKADNzacj13vnk0M1cELXX4au%2FcgJHOzTzVnUooybcakATmHeWmqgn5D78vvJBQ6Mz9P5ThEqADOSjDQC90yLLnkj8vXe3yqZGOVlAoAMdZT98jczN1Gl3k5CGil4oeRcnnz19QrnDyAURgY4JmUzEc%2FOgJ6LbHEYWxW482sHvK0tzSteshcWJbUHkqDq4YUX8to8eYYzXgvulGADjwTzR%2F5givjv0DYnLtSubewfH7QLIujtMkJcaMmTe959NTRh2Ole9vCPTdKZXaTHEyaruzGmYTxVsSxTs0saLoKAaoFWpEkKQCX0GGIf40sPKIjIFvaku44TBR%2FJtaBbWXDLT%2Fo0uZZV9zIpRHQCFngSVKX3chpbANEe2yvf229NKen3Ib6933CihA9saGvIaYNbIGIpemh%2BriEaf9hkH3Bbv40aWLKm1GCbQJKsgu5oijqLkxZbymD4GjT3T77%2FsyBPahkukhaGEO1Cm9eyWBsKVc9IAJg5aSsdEqIIuBRpYlD75dUxBFolc%2BxBlNVmq5nje5CNOAdacoXV2Gg4acJCG2EcCFeWdFnpzWo%2BPAwbTnplDfTw2X%2BvKF12J6YTDsvM%2FJBjqkATiauwXVtmF7D4iMv1g48sVVN0dhyQ8f4iP5s1qBcWdAUML%2Bauu2BzoRVsvsWOXwqy1DgH8zM7d3ZGouyXrCbIcsXO01sdd8p%2B0AN30QJQibg5%2BECcGlgFioGNMVUrq9r3JXLFn8bBYiVjnURexzyH2fyUgcX0WyMtsWva5n%2BVhsaJ77Xau4vK%2BwVec35wgWBboe7A3EIr4WkbaB%2BU1zW2Rk2MdA&X-Amz-Signature=605df9f54d16674434ac7453eb6cb1f8f797138ccdfbe21e773859802ee879f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
