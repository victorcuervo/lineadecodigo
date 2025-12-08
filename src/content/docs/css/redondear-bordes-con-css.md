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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB2KUSU7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDLrmO8JfSgkY%2FoI9watHK5RLCuvGEs%2FM99FLiOhvlFAiEA3MEDaCoyYhbB5yXEskZ73%2FxSrIbDicsNV5HaV1I9Rf4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvoRmeheBINE%2FPwOyrcA4bL9S10fv5eZL5d1pDAJikiQvak%2FCCsfPA4JO0RcYcKp6rXzlXrFeeYkxr%2BedICciG%2FX7RoyeUpcn%2BAN%2BCyiMvSOpnEK3KsdpAmQg8YTiEbj0iXbKvB1eddXcayci5bYpWx%2FSiLJMoUMNbfkOMRP%2FAnKcAEZL4U3m4oVru%2F29Aag9aO0k9zIKmCmamrMcbISrW5XgR%2F5jsPk7TC5un1BL8AoTi6X%2Fzuvu%2FMQKWEeu7r%2F7WiysJHNRyx7eboyVPER8POY40M6wRWVsUqg22oycQsRDAvCGE8%2BB09%2F%2BFiOx%2F%2F8aoDDkHrXv1JSIze8gI8pFNf3oVKj7bYvCLjijm96thldVPHJdnqq9Dc8mT%2BKxvOsNeXbmMRZ6lgKY5jg%2F6m07BWFeHuMrzTyOTT1CcnWJZpy3h0anqWRWiJ8yxCjvhy7Pv%2Fw6fdCq7sV8HtHd4xxmVafwxyp%2FuhNqHL2LQFvbdQTp1NtzJUiSBVRqCY6i9du3Hmzx78nYX5ZWjbwK0WM2xZtuQHkD7LTw2LT0FH5duXxv1DPnB0tX18Rcps2keFelJBS5I8GGK1vYAf17EIRQYaNaNYMIxOeb43D3OVQ%2BcSK3SKBVcnImBWalSdiPBojGAZLdtei4eB5HkWMIKH3MkGOqUBf%2FIJO0%2BlDSa2vlJnmcauTdxZ2DQNWuq3%2BkbKCMDs1wIT2S3ANKxPa1rZ1hrGNlJGh5oZ0X9Aq2kQyVbCLNzBo5MGu%2FpKyBS8x3wo5Ty0GITcctZtFMdbzhIm6yoento2BRmrptm1gQRZ%2Bh3FFzBaGf5bVnNDYJryIzODOZuMKxe1UbSU4SQqD22awQdJIhI8efLZh1Ty3KWuaihRY6fBUBjzjub6&X-Amz-Signature=287c46fa93c19b45e3d32aa4f7b978349e0b00f5f1d446207ec815005c9b1e49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB2KUSU7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDLrmO8JfSgkY%2FoI9watHK5RLCuvGEs%2FM99FLiOhvlFAiEA3MEDaCoyYhbB5yXEskZ73%2FxSrIbDicsNV5HaV1I9Rf4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvoRmeheBINE%2FPwOyrcA4bL9S10fv5eZL5d1pDAJikiQvak%2FCCsfPA4JO0RcYcKp6rXzlXrFeeYkxr%2BedICciG%2FX7RoyeUpcn%2BAN%2BCyiMvSOpnEK3KsdpAmQg8YTiEbj0iXbKvB1eddXcayci5bYpWx%2FSiLJMoUMNbfkOMRP%2FAnKcAEZL4U3m4oVru%2F29Aag9aO0k9zIKmCmamrMcbISrW5XgR%2F5jsPk7TC5un1BL8AoTi6X%2Fzuvu%2FMQKWEeu7r%2F7WiysJHNRyx7eboyVPER8POY40M6wRWVsUqg22oycQsRDAvCGE8%2BB09%2F%2BFiOx%2F%2F8aoDDkHrXv1JSIze8gI8pFNf3oVKj7bYvCLjijm96thldVPHJdnqq9Dc8mT%2BKxvOsNeXbmMRZ6lgKY5jg%2F6m07BWFeHuMrzTyOTT1CcnWJZpy3h0anqWRWiJ8yxCjvhy7Pv%2Fw6fdCq7sV8HtHd4xxmVafwxyp%2FuhNqHL2LQFvbdQTp1NtzJUiSBVRqCY6i9du3Hmzx78nYX5ZWjbwK0WM2xZtuQHkD7LTw2LT0FH5duXxv1DPnB0tX18Rcps2keFelJBS5I8GGK1vYAf17EIRQYaNaNYMIxOeb43D3OVQ%2BcSK3SKBVcnImBWalSdiPBojGAZLdtei4eB5HkWMIKH3MkGOqUBf%2FIJO0%2BlDSa2vlJnmcauTdxZ2DQNWuq3%2BkbKCMDs1wIT2S3ANKxPa1rZ1hrGNlJGh5oZ0X9Aq2kQyVbCLNzBo5MGu%2FpKyBS8x3wo5Ty0GITcctZtFMdbzhIm6yoento2BRmrptm1gQRZ%2Bh3FFzBaGf5bVnNDYJryIzODOZuMKxe1UbSU4SQqD22awQdJIhI8efLZh1Ty3KWuaihRY6fBUBjzjub6&X-Amz-Signature=98b7071cca3191ca782c902f26570ee96ed91fdddd561054da638cd553b16c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
