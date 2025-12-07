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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y33HUNKZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3A21YgHFWfPNdf5EFJLbIYHm%2BzybzAPFM96SpqPFhTAiAY3gPXIPWLaQWQT%2FWXKVvftPohzqTYO8tXIS6UZsMAEiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkiGRv%2FTm23vFcnVmKtwDOOsMjxLd5M6BL3At%2F%2BSFu8a0BCEkeFirl%2F4LYpa%2FyVKpmGCJD9UxUAMU7vDU9kCeQ7%2BYzXWsNEMJkkIdun9%2BTC1rAlSGhZVP6SK46TTfrCzTu1PMrDFUFMizt6Z3kIHn3KfY71COv%2BMBW3tfhLZGIMyNFpd6QbqCJV6peYzHv7w4BGpy50bjddR9aIpW%2B4j0LfiBJSH7YKPrkZN05hHP8FJZscu5In2G3hkl8dbzH4V2Ho%2BCtIBWafbvmE3%2FvUdoO1htzEQ5JLSIpWgD8CNsyrnEhe9g8SnWYRHg8ShLnQ%2FZattlE6nJoBWyKcCNA1djuegHyTuoKKd3Eesad4fOT7c0ghJOLjpXhwo2%2B3QPZgU9ll%2BT5GBrBmSGdLXZxm3qG7ED1lht%2FJFSWg1hacEnoy9%2F5o7diesony2ejsiCEMNOZuHM7FaJpnpwNy%2BxwWKKw6yFUFx6U49mYRVn7kGZncEWiQRvF%2FANfWyabNv5wb5qZEbkAoU1cYNMWJ%2BsppdDhzQxUfKMXH%2BSxgJHV%2F6i0j3InI%2B%2BG8aZu%2BvjslorBNj0GdhUmDpl0Ymm5pUho1R400wyIU5ORSWb0oUZtgbJNGC1RfEOQUvr%2Ftyy%2Bjfh%2FJzt%2FZN8llfNwzMN6vcw2JzUyQY6pgFO8GopHqViz8hFVFcLMguRAsDf94O4NBqVdDzltF1NWVz24gIwYSK7KVpOcdJiH4NIi%2BOZdeL%2BtYHDoFpH35NrEW%2FFgh%2FOO6ObFZGQ%2B9AOsx6pnNqX0qV7m1nVwL9Mhx8iucwU%2FLInGjzVYMpNi55FTW2P4U6wbFV7uz6Aia2loGn08jt1dc7CspbSlBIUN4jVujtlmdObHK6EhVjtnAjtwxrJ%2BaVJ&X-Amz-Signature=2d3a16e27271beccbb50516fc7ca07abee2a00c2db8aeacdd165715bab5cf7cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y33HUNKZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3A21YgHFWfPNdf5EFJLbIYHm%2BzybzAPFM96SpqPFhTAiAY3gPXIPWLaQWQT%2FWXKVvftPohzqTYO8tXIS6UZsMAEiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkiGRv%2FTm23vFcnVmKtwDOOsMjxLd5M6BL3At%2F%2BSFu8a0BCEkeFirl%2F4LYpa%2FyVKpmGCJD9UxUAMU7vDU9kCeQ7%2BYzXWsNEMJkkIdun9%2BTC1rAlSGhZVP6SK46TTfrCzTu1PMrDFUFMizt6Z3kIHn3KfY71COv%2BMBW3tfhLZGIMyNFpd6QbqCJV6peYzHv7w4BGpy50bjddR9aIpW%2B4j0LfiBJSH7YKPrkZN05hHP8FJZscu5In2G3hkl8dbzH4V2Ho%2BCtIBWafbvmE3%2FvUdoO1htzEQ5JLSIpWgD8CNsyrnEhe9g8SnWYRHg8ShLnQ%2FZattlE6nJoBWyKcCNA1djuegHyTuoKKd3Eesad4fOT7c0ghJOLjpXhwo2%2B3QPZgU9ll%2BT5GBrBmSGdLXZxm3qG7ED1lht%2FJFSWg1hacEnoy9%2F5o7diesony2ejsiCEMNOZuHM7FaJpnpwNy%2BxwWKKw6yFUFx6U49mYRVn7kGZncEWiQRvF%2FANfWyabNv5wb5qZEbkAoU1cYNMWJ%2BsppdDhzQxUfKMXH%2BSxgJHV%2F6i0j3InI%2B%2BG8aZu%2BvjslorBNj0GdhUmDpl0Ymm5pUho1R400wyIU5ORSWb0oUZtgbJNGC1RfEOQUvr%2Ftyy%2Bjfh%2FJzt%2FZN8llfNwzMN6vcw2JzUyQY6pgFO8GopHqViz8hFVFcLMguRAsDf94O4NBqVdDzltF1NWVz24gIwYSK7KVpOcdJiH4NIi%2BOZdeL%2BtYHDoFpH35NrEW%2FFgh%2FOO6ObFZGQ%2B9AOsx6pnNqX0qV7m1nVwL9Mhx8iucwU%2FLInGjzVYMpNi55FTW2P4U6wbFV7uz6Aia2loGn08jt1dc7CspbSlBIUN4jVujtlmdObHK6EhVjtnAjtwxrJ%2BaVJ&X-Amz-Signature=7885ca0738abd8fd0061bb0120c12b93dc4aee8708473dfe6deb7f4edf691c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
