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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5UHMDY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9WJ3hGOkkTzKBfFnIxCIExo6hBcue69D6kHsL5gpC9AiBZFQ9GPY9E3Iruj14iVMYJ9nk7J%2FZZ0nXz6zFSpVd3QCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgqZeWZ1mmBKtFHkCKtwDLqW13YffLa5dOYu2om8vwpKIOANSEmD9r99oeJXsvFDC%2FzuYmy0m%2Fcv3cajJxZGI6dPsk%2FKjkSsdzEXdSWHB0U0CeW42ewiu2ERqQqG1U6FNErhWS7guK4vjzKpQzx9KHuFvbzJl8rcDYxeJHTaHVu1ybGWiXC2cZlXTkLz83ZDnspUV5GJuTAExf50CcV1gJKWmiG4NWSThq9UixWRwwgf0qbG2rXIK6DHdUX7iUK3MhEjKq1jQcP13e1MgVwRYIkb2F8ga%2BOD6CddMP%2BKZCmVpLZWEwiaQKGemhi51MMIL9dKm3TV30ZCvgWjW%2F%2BTvo6T0N0PcjJJS6hV4X48jJewHUC5JzarQJrQJ2t3riYJomZ44oAIpUNWdkQPfyEgExEHPdECWG51f0a4cwC7AIrIYRta07863yL5fUBFZcijytjQXn%2FDuE1QcUyfnz8F6yiU9qgBrksj4hJEJjezfdaWz4q7SBX8xaIzxjUpVbcDYMJHQt771V6q2CReNOI2JgEaDwrZGczZpQNHgrR4r1Rxn7o5yslRO4ZE%2B0TYkgW2TYxePVIEohsDUNSCOM2uTjwQT7DBqN3Xp7CxkWbIaMGt%2B6xC4m2zrRv0m72BSmgahIrCYK%2BtCG6vRkQsw5ouMygY6pgHytlBn3WguBqBSuoXpa2Vn7ExW%2BFP7XeNI9qxz24%2FsVkbdAjYiM%2FljlHTPtHaPhR%2FuBGkxnlUOK2iV7bm37HYA4pqzw6YdTUFNTp5vhCV1FvaTLhg9tx64Bf41eEGc8RMPfQ%2FYcK9rTFq5sf1r0rLyBC%2FQYVUH5cyauuhwr9r7PE4w0SIiBSmKDH6FW6Dym9mTRP3rmQ1T6ZwsLFj0%2Fq2xU%2FbwhPen&X-Amz-Signature=3e30ec7f21dbc688bd90fb3e64722e33c7ff20c2fdfa1a9476eddb79e09cd678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5UHMDY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9WJ3hGOkkTzKBfFnIxCIExo6hBcue69D6kHsL5gpC9AiBZFQ9GPY9E3Iruj14iVMYJ9nk7J%2FZZ0nXz6zFSpVd3QCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgqZeWZ1mmBKtFHkCKtwDLqW13YffLa5dOYu2om8vwpKIOANSEmD9r99oeJXsvFDC%2FzuYmy0m%2Fcv3cajJxZGI6dPsk%2FKjkSsdzEXdSWHB0U0CeW42ewiu2ERqQqG1U6FNErhWS7guK4vjzKpQzx9KHuFvbzJl8rcDYxeJHTaHVu1ybGWiXC2cZlXTkLz83ZDnspUV5GJuTAExf50CcV1gJKWmiG4NWSThq9UixWRwwgf0qbG2rXIK6DHdUX7iUK3MhEjKq1jQcP13e1MgVwRYIkb2F8ga%2BOD6CddMP%2BKZCmVpLZWEwiaQKGemhi51MMIL9dKm3TV30ZCvgWjW%2F%2BTvo6T0N0PcjJJS6hV4X48jJewHUC5JzarQJrQJ2t3riYJomZ44oAIpUNWdkQPfyEgExEHPdECWG51f0a4cwC7AIrIYRta07863yL5fUBFZcijytjQXn%2FDuE1QcUyfnz8F6yiU9qgBrksj4hJEJjezfdaWz4q7SBX8xaIzxjUpVbcDYMJHQt771V6q2CReNOI2JgEaDwrZGczZpQNHgrR4r1Rxn7o5yslRO4ZE%2B0TYkgW2TYxePVIEohsDUNSCOM2uTjwQT7DBqN3Xp7CxkWbIaMGt%2B6xC4m2zrRv0m72BSmgahIrCYK%2BtCG6vRkQsw5ouMygY6pgHytlBn3WguBqBSuoXpa2Vn7ExW%2BFP7XeNI9qxz24%2FsVkbdAjYiM%2FljlHTPtHaPhR%2FuBGkxnlUOK2iV7bm37HYA4pqzw6YdTUFNTp5vhCV1FvaTLhg9tx64Bf41eEGc8RMPfQ%2FYcK9rTFq5sf1r0rLyBC%2FQYVUH5cyauuhwr9r7PE4w0SIiBSmKDH6FW6Dym9mTRP3rmQ1T6ZwsLFj0%2Fq2xU%2FbwhPen&X-Amz-Signature=4f635a89b7ea8578165d5661c89914351becd953832bb2daa974128d683d332d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
