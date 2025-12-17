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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRFD4VV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChwBKOEX1eiAzqRn2neQUInndqUDBW4QnaJ05CpSca2AiASGblBJGg97ZzX4F5JwoAjL0nC%2Bpg3o4QpImCbDA%2F7jSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxKX4Ujy4h6ynNBgcKtwDzLfAvY%2FlJ%2BehHrd0apSwTb4ER1gbibgNKUXx61lrowhpKa7CsX5CMY5525OJ%2BjbSGxpNFM70rUgySyx8Hfn7lmtPMNPvQyDM%2B3A20m6Jg1jBuQmdInghQ1jfVIvjKF3btU1PfBdpOgktN9rSw%2F4%2Fu9YLeZYxP2CaJLD7CqXsmbwYTr6kb0IrlBLX7EEYfXpHpT%2BQSdLLXJYTVObiTWzjLKDM4ZYTxHUFusVH7fchCi7S4XYLW9Y%2By6d1erZsZPwKebw8CLIn1jHmGvMkxk%2F1FoafklCSPTstVZopT7LTT2oJUSXBFP9REjMHuWoHCa36rT2dqvzmkakANHIOfYQlc%2Bk04OYZbmvGXVedw4KcnQnQNNNMiUexvwu75GB2CzeQW%2FWye%2B7vcm2tWe%2FOqDj3DUd95%2Bz2K%2B1OoT1sVyCkJ5dcY2sz13Z6uAAyWtxBP5KSOcJgKK4H97LRT22wUqtra9glKcVCaaPfDZ%2BDHe8cV90Zkjto5H8aMJLGYl7nM%2FHQSqTii%2FmCt70wRSCpolQ%2FhdSgkEKBIS%2BKbWBzlZDWPjZo4Dgm1NgJYF7htLtBO7YSmQ2StNlG3Q5wgM8LthHX69sZhtGHjwQTlrv6zdUITkgfP5GpPgoGDKFyM9cwpa6MygY6pgFkPmyleqIvU3jGUlBeVRYZN0iomYkib51wTKuPThKHO9hkoq0mawNYjgVFdqgVCDvPGpPFEpwerNqXoncRqKYLZ3HOKsF5wzDFaKyaJ6OqCn1NHP7N5N01QpLC8mwUBBmI8VCe2JzkIOgUTpAZvZDvZuCTwZP%2BfUgWS92A%2BuWuElUoMkaIlSdWdusoQWsBOzWzSub3iyDyYT8kcXf0wTwpBXG9apT4&X-Amz-Signature=502209efba2e52f658549146c3657ce9c71a3917102d60b5677dfec89f696aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRFD4VV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChwBKOEX1eiAzqRn2neQUInndqUDBW4QnaJ05CpSca2AiASGblBJGg97ZzX4F5JwoAjL0nC%2Bpg3o4QpImCbDA%2F7jSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxKX4Ujy4h6ynNBgcKtwDzLfAvY%2FlJ%2BehHrd0apSwTb4ER1gbibgNKUXx61lrowhpKa7CsX5CMY5525OJ%2BjbSGxpNFM70rUgySyx8Hfn7lmtPMNPvQyDM%2B3A20m6Jg1jBuQmdInghQ1jfVIvjKF3btU1PfBdpOgktN9rSw%2F4%2Fu9YLeZYxP2CaJLD7CqXsmbwYTr6kb0IrlBLX7EEYfXpHpT%2BQSdLLXJYTVObiTWzjLKDM4ZYTxHUFusVH7fchCi7S4XYLW9Y%2By6d1erZsZPwKebw8CLIn1jHmGvMkxk%2F1FoafklCSPTstVZopT7LTT2oJUSXBFP9REjMHuWoHCa36rT2dqvzmkakANHIOfYQlc%2Bk04OYZbmvGXVedw4KcnQnQNNNMiUexvwu75GB2CzeQW%2FWye%2B7vcm2tWe%2FOqDj3DUd95%2Bz2K%2B1OoT1sVyCkJ5dcY2sz13Z6uAAyWtxBP5KSOcJgKK4H97LRT22wUqtra9glKcVCaaPfDZ%2BDHe8cV90Zkjto5H8aMJLGYl7nM%2FHQSqTii%2FmCt70wRSCpolQ%2FhdSgkEKBIS%2BKbWBzlZDWPjZo4Dgm1NgJYF7htLtBO7YSmQ2StNlG3Q5wgM8LthHX69sZhtGHjwQTlrv6zdUITkgfP5GpPgoGDKFyM9cwpa6MygY6pgFkPmyleqIvU3jGUlBeVRYZN0iomYkib51wTKuPThKHO9hkoq0mawNYjgVFdqgVCDvPGpPFEpwerNqXoncRqKYLZ3HOKsF5wzDFaKyaJ6OqCn1NHP7N5N01QpLC8mwUBBmI8VCe2JzkIOgUTpAZvZDvZuCTwZP%2BfUgWS92A%2BuWuElUoMkaIlSdWdusoQWsBOzWzSub3iyDyYT8kcXf0wTwpBXG9apT4&X-Amz-Signature=e022957dfbaf91bfa58f761126f351e95a0274d5d91b3837f19bd95880e77176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
