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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632BS2BL4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKBVLIYKIzqL%2ByE8lMIpyK3%2BshHNTiXgdEN3EzsrBWsAiBZj%2FeRCNAW%2FT5XB9iuLIVehZdwLhIPcaTf75YpxfYVfSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4ngmw2h4%2FIMtTd4vKtwDEUOL1i8%2B5Bd8wFeOTdWxpMCPEl9LybwecKmURAfiQF4BtEzopXl72Db1nVyx8Lj5fNIBsr7%2FklpDW%2Fei7wunAVFrcgTlBfnyNEE02klTX%2FqpMrNbtvJJWnGqpo0Aj%2BzJS6G5q34wZkLFbljHrxPWZyFc3yIyBw7UKuP0Se1yIPOWZQ9IdXIILTvp4MhU9uwWR3usgFZyfDEC1WHSuTpuOzfpvMOB5B563sG0zdCmXRUP2JvtAr9woK29PVTcj6329MBAymo8NSYCVYX4P%2FFRENiQ6kOXRj%2BJj6GLSk%2B8c19rCK0P8P%2Fm9BmFVJiZOmMQtQTh99OLgjm8mZSNuP6SJ%2BaPXHBA3d%2F3%2FCc1JCQdQy43xRZLv0OO91dCNtnZZ8sCJT%2BvJuUjBPESl55%2Bs%2FYfqFhAqeCp3PMcx%2BLFKhjJUK5l9FDDjLj2ugs0q4VkkzVFXimLTooJa2Z%2BUal%2FJctOrShUNsMckulc081Ez1gTySNlJRG9y0WWyGD8FvfFA4s8P6mg6y8n2xMWkQf9EeV4I30VRpYjc7%2F8bfCa2NQmApdxBqJQOd1Xta%2BNvLq7el%2BkpZdOQpJ4tk9IHKQO23MWy81saDIvIpILEzY43bhii%2Fv0a5wYwN6T4FZeJjYwtJ%2BLygY6pgGUjzisJk%2F9WZYO1lUSicayzaUldPiS7hnJaHL9yVxNARhzMHL7o%2Bxgkw28w65lk53KDPXMG2bKczq3SR3HYN090tBsRuArqu2OiiAPj4DMYTEKYlpAfmAvfKWHuG8zyoxG3Pb0xUIkV8%2Bne%2FCY15cv8r3B2eEiP0KceCgfCrxXvMprAvvzIiL2rDaA7kYhOtkUfDofVMYZS8KuBlEk539bQF64hrTZ&X-Amz-Signature=afa0d67a5c7655bdceec54f560bc28f7595fcaa006a3ad1018ef5f5f5183cb61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632BS2BL4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKBVLIYKIzqL%2ByE8lMIpyK3%2BshHNTiXgdEN3EzsrBWsAiBZj%2FeRCNAW%2FT5XB9iuLIVehZdwLhIPcaTf75YpxfYVfSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4ngmw2h4%2FIMtTd4vKtwDEUOL1i8%2B5Bd8wFeOTdWxpMCPEl9LybwecKmURAfiQF4BtEzopXl72Db1nVyx8Lj5fNIBsr7%2FklpDW%2Fei7wunAVFrcgTlBfnyNEE02klTX%2FqpMrNbtvJJWnGqpo0Aj%2BzJS6G5q34wZkLFbljHrxPWZyFc3yIyBw7UKuP0Se1yIPOWZQ9IdXIILTvp4MhU9uwWR3usgFZyfDEC1WHSuTpuOzfpvMOB5B563sG0zdCmXRUP2JvtAr9woK29PVTcj6329MBAymo8NSYCVYX4P%2FFRENiQ6kOXRj%2BJj6GLSk%2B8c19rCK0P8P%2Fm9BmFVJiZOmMQtQTh99OLgjm8mZSNuP6SJ%2BaPXHBA3d%2F3%2FCc1JCQdQy43xRZLv0OO91dCNtnZZ8sCJT%2BvJuUjBPESl55%2Bs%2FYfqFhAqeCp3PMcx%2BLFKhjJUK5l9FDDjLj2ugs0q4VkkzVFXimLTooJa2Z%2BUal%2FJctOrShUNsMckulc081Ez1gTySNlJRG9y0WWyGD8FvfFA4s8P6mg6y8n2xMWkQf9EeV4I30VRpYjc7%2F8bfCa2NQmApdxBqJQOd1Xta%2BNvLq7el%2BkpZdOQpJ4tk9IHKQO23MWy81saDIvIpILEzY43bhii%2Fv0a5wYwN6T4FZeJjYwtJ%2BLygY6pgGUjzisJk%2F9WZYO1lUSicayzaUldPiS7hnJaHL9yVxNARhzMHL7o%2Bxgkw28w65lk53KDPXMG2bKczq3SR3HYN090tBsRuArqu2OiiAPj4DMYTEKYlpAfmAvfKWHuG8zyoxG3Pb0xUIkV8%2Bne%2FCY15cv8r3B2eEiP0KceCgfCrxXvMprAvvzIiL2rDaA7kYhOtkUfDofVMYZS8KuBlEk539bQF64hrTZ&X-Amz-Signature=2726558201fb87bc150c57a9141645b8e8d4e0c7e2d601fca144a65df90c28b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
