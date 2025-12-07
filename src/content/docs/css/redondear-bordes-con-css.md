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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642HBPRXW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdqWm5ghKDGjASvbqXbiPfc0oBq1aAUD8aXdKnxlGWTwIgCOrQYi2PUCXjHOxx1crGwdCJli%2FQ%2B8bEEmsUxDapaz0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaKj%2FAw3CaQ9ikGoCrcA6VPze5CGkOrzhwmowu7Ee1O0k0fYMZjDgXULOzht0BGs4i1gJUmgAduC2x5%2FBoEJ3U%2B%2FeWPW25N%2Bjx%2B7Ovth92MP%2FqOWu4GkeLfZwopuBiEmeyfBCrafsfSkf6yMDKbzzcQ5POM7l3WkvipDvo45whTu5IcFZiehaO9jvEgbjDPBKZpTXzRuXsJVPMgHRuLJ8J4VY23vR8gFbVyHrI%2BWns0NfLpipPsgBnorHwjdCGujt7TGfOBtwiW1%2Blefr%2BYMM4n0slp4bcZQ1bG5zbnB%2B9XbJPoZzVFu7jLqScqirnhnIpBhV0vIfPcEe10mKydDw%2FpYzRDpzQENVqSr8Npz3%2B37CSMuBI5kUXBZsYrybScXQpTmUetazNKED3osaarCvdhJvoPMXgwtD4F11NCFXBM7ebdhK486%2F7rG9P8scMWPwaxeqU6nXf3LIw%2BYmSnmWG%2BFBZ%2FsKsfVZN8xq6sJJLhRa0MwSEPzlV0SlncOp9sHCmhS5wxkliC1Cni4IAkskJsniy2%2FN9KCits5L1cFGMDMwsH%2FPDUapjA9wjKyeKeLNZvdKR0Fu0q28czLMoNfE1xHsIO8i5ueLglypssN4hZtx8og%2BWGGuTXLGCPGVbqsGA8HvQby9kVryxmMMqa1ckGOqUBb8KAuKqbS9eoDBXHvYZcedCPN8ij%2BOvpZT56MO2fwisvQwHP4ym1ys%2BX%2BgBd7IuH%2FlzUuk7YIn7wz9mxCbnEfXna3dWZ6Mf282uKHhqqVBQG%2FAWtGFM7Mhj26cyjI1cwLGKTl%2BO9uuIWaTudpwlKXIyU4I%2BowMAdlVpPQ9qZr77Vi18fNcuF%2BLPLbEnfr4g5Fpoxi1a2apZGq4qG1rm%2FNNKh%2Fxsn&X-Amz-Signature=7773a3019b151c3405b70905f120403f6c52d6c36356fd5ff2dd6391999ebdba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642HBPRXW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdqWm5ghKDGjASvbqXbiPfc0oBq1aAUD8aXdKnxlGWTwIgCOrQYi2PUCXjHOxx1crGwdCJli%2FQ%2B8bEEmsUxDapaz0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaKj%2FAw3CaQ9ikGoCrcA6VPze5CGkOrzhwmowu7Ee1O0k0fYMZjDgXULOzht0BGs4i1gJUmgAduC2x5%2FBoEJ3U%2B%2FeWPW25N%2Bjx%2B7Ovth92MP%2FqOWu4GkeLfZwopuBiEmeyfBCrafsfSkf6yMDKbzzcQ5POM7l3WkvipDvo45whTu5IcFZiehaO9jvEgbjDPBKZpTXzRuXsJVPMgHRuLJ8J4VY23vR8gFbVyHrI%2BWns0NfLpipPsgBnorHwjdCGujt7TGfOBtwiW1%2Blefr%2BYMM4n0slp4bcZQ1bG5zbnB%2B9XbJPoZzVFu7jLqScqirnhnIpBhV0vIfPcEe10mKydDw%2FpYzRDpzQENVqSr8Npz3%2B37CSMuBI5kUXBZsYrybScXQpTmUetazNKED3osaarCvdhJvoPMXgwtD4F11NCFXBM7ebdhK486%2F7rG9P8scMWPwaxeqU6nXf3LIw%2BYmSnmWG%2BFBZ%2FsKsfVZN8xq6sJJLhRa0MwSEPzlV0SlncOp9sHCmhS5wxkliC1Cni4IAkskJsniy2%2FN9KCits5L1cFGMDMwsH%2FPDUapjA9wjKyeKeLNZvdKR0Fu0q28czLMoNfE1xHsIO8i5ueLglypssN4hZtx8og%2BWGGuTXLGCPGVbqsGA8HvQby9kVryxmMMqa1ckGOqUBb8KAuKqbS9eoDBXHvYZcedCPN8ij%2BOvpZT56MO2fwisvQwHP4ym1ys%2BX%2BgBd7IuH%2FlzUuk7YIn7wz9mxCbnEfXna3dWZ6Mf282uKHhqqVBQG%2FAWtGFM7Mhj26cyjI1cwLGKTl%2BO9uuIWaTudpwlKXIyU4I%2BowMAdlVpPQ9qZr77Vi18fNcuF%2BLPLbEnfr4g5Fpoxi1a2apZGq4qG1rm%2FNNKh%2Fxsn&X-Amz-Signature=f81646d05f4dacbb095a554dc75683aaca9e6cad36b31d854c97c43be18647aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
