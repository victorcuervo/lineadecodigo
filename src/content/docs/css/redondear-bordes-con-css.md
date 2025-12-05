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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6VKTXNM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZEgmSAdrOI911iebd4DId5lvGJDLJ%2BdnpgKK%2BJKe35gIgUq%2FJrIs4ytdb3ScHQWqsNuKMKj6Jv4Rup5hqGkVA%2Bx8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAB0dkjdm13HQBKEsSrcAxjH0ptxN%2BwgOZ0o7BGoXul7JIlAXcc4Ae%2B0CppSYseiyVhj6IIft7WvrejxGB5nRRdYH1FQnqCHuQ73c4oNIiAF55isESMt1ZtHEGj2Vy8U%2B73KkThpl%2FLZhfgRgSJk2n%2FLSPn00QKEYbzQ5RQAjmuSbGiks5Z16WylghCIYYtsyTsaNsiKdrVppcieOHX2SZn%2F5qAX0ncvMijF4b%2BPjzrJlBKf0yA3Em8r%2BRhjU%2F%2B3fooNgIgeN1Rq03Yc6kVXj7E1tw%2B4ovFLv3eTAUwZ%2BX%2FZaK4TWM6fnet2amBk2WEUOvGcQ4nS13KswEYxX6i4NeH0PQ1SWSvt8UzUFBBZytsftzDdcclRS9NJSJv3j4Lcol%2FufTDfFH79OZeYutf5EIE6qSBcz48MAEyhSfbPiYR%2FPkhxL2YYoycncF5eheOS2Z8%2B5R0nNS3ff9mG%2BRs1ZHEQfXf3m3TkccVw0xEF2%2FrIXA4FeqFT9i537jnM9Fh1qtC38Rph3e1GkTTYULk1NnKere5PHP1Ss7X8eYf3K2%2BDko%2FhBok9luu5qy%2BYmXYUL7mgKwvJYg5Zfl6DI1DSXE2kNYGCtwU3p5S7J2TaMCyutC8oNpHCw4JY4ZxjtF0Q9b3aNtWn1PX0h%2Fs%2BMIjGzckGOqUBqXCky3VMaj%2Bosjg43ovFQXROAEfMHg2PrLTQdgZzEOV%2B4Ut4rhy4Rx4MyK4lz6n4%2B5eNF91whF024%2BAbkCa5yhpo6sekAVhC9XMB4aJgZ%2Bg8w0vni6GcW4wyMGaFZmtavQc%2FH06kclK8nuuArdbE2qgjxosachdvex3lpNlMiHopQGM7JNNIsLkpbu2e%2BpQlDA6tzP8lFrLiW2HZS07nqvashLix&X-Amz-Signature=efdcd5b0c8e65d2b13bc34a139bfeba890b59c90d75ddf10ca94166f63bfce9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6VKTXNM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZEgmSAdrOI911iebd4DId5lvGJDLJ%2BdnpgKK%2BJKe35gIgUq%2FJrIs4ytdb3ScHQWqsNuKMKj6Jv4Rup5hqGkVA%2Bx8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAB0dkjdm13HQBKEsSrcAxjH0ptxN%2BwgOZ0o7BGoXul7JIlAXcc4Ae%2B0CppSYseiyVhj6IIft7WvrejxGB5nRRdYH1FQnqCHuQ73c4oNIiAF55isESMt1ZtHEGj2Vy8U%2B73KkThpl%2FLZhfgRgSJk2n%2FLSPn00QKEYbzQ5RQAjmuSbGiks5Z16WylghCIYYtsyTsaNsiKdrVppcieOHX2SZn%2F5qAX0ncvMijF4b%2BPjzrJlBKf0yA3Em8r%2BRhjU%2F%2B3fooNgIgeN1Rq03Yc6kVXj7E1tw%2B4ovFLv3eTAUwZ%2BX%2FZaK4TWM6fnet2amBk2WEUOvGcQ4nS13KswEYxX6i4NeH0PQ1SWSvt8UzUFBBZytsftzDdcclRS9NJSJv3j4Lcol%2FufTDfFH79OZeYutf5EIE6qSBcz48MAEyhSfbPiYR%2FPkhxL2YYoycncF5eheOS2Z8%2B5R0nNS3ff9mG%2BRs1ZHEQfXf3m3TkccVw0xEF2%2FrIXA4FeqFT9i537jnM9Fh1qtC38Rph3e1GkTTYULk1NnKere5PHP1Ss7X8eYf3K2%2BDko%2FhBok9luu5qy%2BYmXYUL7mgKwvJYg5Zfl6DI1DSXE2kNYGCtwU3p5S7J2TaMCyutC8oNpHCw4JY4ZxjtF0Q9b3aNtWn1PX0h%2Fs%2BMIjGzckGOqUBqXCky3VMaj%2Bosjg43ovFQXROAEfMHg2PrLTQdgZzEOV%2B4Ut4rhy4Rx4MyK4lz6n4%2B5eNF91whF024%2BAbkCa5yhpo6sekAVhC9XMB4aJgZ%2Bg8w0vni6GcW4wyMGaFZmtavQc%2FH06kclK8nuuArdbE2qgjxosachdvex3lpNlMiHopQGM7JNNIsLkpbu2e%2BpQlDA6tzP8lFrLiW2HZS07nqvashLix&X-Amz-Signature=90744220eb282926d25d29e93a41f2b4ef80530ec52e1141142f001262ad5162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
