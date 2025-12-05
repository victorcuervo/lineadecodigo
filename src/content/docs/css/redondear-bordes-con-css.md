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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFGGMA7M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkNnG2uXk5gi9Bisa398Tya6WFINDVMjOsjvPt1UmaWAIgCqnunoMJtQKWPAWuxa%2FQh933tgwBzAxnwvcrtCnkze4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDA3yDCP7jqAkAWWidyrcA5Gn%2BA1hiPOoF2KvSd%2BbtqTBdqvrij6JXpITcVixHUiP2zYGgX2HI3AFaNfxvw4EZhz52HjHCKaAB0N%2FajmiYweiC8Gg0pykzgJjfTyfAZojz55%2FUP8%2F4iM93VK5IMDic4ngIMKaR1S78YLD3hAU3hlk%2BWwB0129Q%2BwDh6mHnVfG7efWoOd0Kbi7lO8WFf08%2BD%2Bvu3OB7Wl29wCj5r1d%2BSfIHJBTumiZVLoXdITGB6LdZ5Bmn25nmoOviaw6YZkww8%2FAiT7K4ROXKn1c0ZLfGlVS0gw9C3cyrq5yfYQZOV%2BQghqwlYQOWbxbbRWYUn1kXMgt%2FIi4Ssf3N7msgNv%2BmIjZtsbqZyy5Mh11u5fQVPME914FuOu7G67QkrtNxDBekTjsF5HPOcYnq8Z6qXv5XqjoQidCm6KtNhc6qVt8KeRWKufcnpIM2hIF47Jr%2BnsJsMjIJM0jg7uBEGTfs57nJ4jzLKA5TWqpojkNA1hkQz9DOMbi5rvEXwDMmxHVfqL65dLttgPqpE5lrIVPkZ%2Btcm7cHTajL%2F3XH187j2UkFS5AFzuvu0EvStf1O3gd%2F9dgnLD%2Fs9%2BIk2RODQpyq9QFOcwRuFoV39xFpqq%2BOuDstNeO1BGj8ndYjcXnaMdIMID5y8kGOqUBx%2BTptvuQYfwP6FGu1acwlfFcgWB7uJ%2BM6oUxUvDMaDiiGFgZ%2FKeEMJebGHtbn07ASZXEfIUEOGDCO50DtmhAfUPk%2Fw69FoLasDAnQ3%2BlTTi7%2BAZMeiY8Jx75pXknrdqMt7ig8bK2Ws%2F2hW8EokveRSrS%2FmWyOrNreHNlR1Vtv5ugmDaA2vnNlEfE5cW1jQLJWEhnQSgYNqymHGny4yDhaIn3wq5J&X-Amz-Signature=103bcff4ad7ebf6f9e0cd65e6462fdd0e682ff0b63805c9fa8e002be8cae6586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFGGMA7M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkNnG2uXk5gi9Bisa398Tya6WFINDVMjOsjvPt1UmaWAIgCqnunoMJtQKWPAWuxa%2FQh933tgwBzAxnwvcrtCnkze4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDA3yDCP7jqAkAWWidyrcA5Gn%2BA1hiPOoF2KvSd%2BbtqTBdqvrij6JXpITcVixHUiP2zYGgX2HI3AFaNfxvw4EZhz52HjHCKaAB0N%2FajmiYweiC8Gg0pykzgJjfTyfAZojz55%2FUP8%2F4iM93VK5IMDic4ngIMKaR1S78YLD3hAU3hlk%2BWwB0129Q%2BwDh6mHnVfG7efWoOd0Kbi7lO8WFf08%2BD%2Bvu3OB7Wl29wCj5r1d%2BSfIHJBTumiZVLoXdITGB6LdZ5Bmn25nmoOviaw6YZkww8%2FAiT7K4ROXKn1c0ZLfGlVS0gw9C3cyrq5yfYQZOV%2BQghqwlYQOWbxbbRWYUn1kXMgt%2FIi4Ssf3N7msgNv%2BmIjZtsbqZyy5Mh11u5fQVPME914FuOu7G67QkrtNxDBekTjsF5HPOcYnq8Z6qXv5XqjoQidCm6KtNhc6qVt8KeRWKufcnpIM2hIF47Jr%2BnsJsMjIJM0jg7uBEGTfs57nJ4jzLKA5TWqpojkNA1hkQz9DOMbi5rvEXwDMmxHVfqL65dLttgPqpE5lrIVPkZ%2Btcm7cHTajL%2F3XH187j2UkFS5AFzuvu0EvStf1O3gd%2F9dgnLD%2Fs9%2BIk2RODQpyq9QFOcwRuFoV39xFpqq%2BOuDstNeO1BGj8ndYjcXnaMdIMID5y8kGOqUBx%2BTptvuQYfwP6FGu1acwlfFcgWB7uJ%2BM6oUxUvDMaDiiGFgZ%2FKeEMJebGHtbn07ASZXEfIUEOGDCO50DtmhAfUPk%2Fw69FoLasDAnQ3%2BlTTi7%2BAZMeiY8Jx75pXknrdqMt7ig8bK2Ws%2F2hW8EokveRSrS%2FmWyOrNreHNlR1Vtv5ugmDaA2vnNlEfE5cW1jQLJWEhnQSgYNqymHGny4yDhaIn3wq5J&X-Amz-Signature=10d1b81a47d2276f00fe7e879224fc31f7154af52ac830386cb8ecf1503ac99d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
