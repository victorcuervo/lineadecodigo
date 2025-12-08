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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYBFASGP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK2Me%2F6xkyfN2fOLhe1NkkNEo7WvVC3kBrZbDHfjoUoAIhANsYWfIF1VgL5v8wzWCuda5Nw0vQa3erBA84OjiQlRitKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxg%2BrYa1zAbTRx47JUq3AMGJjCZzdpy9%2BBxAYUUHbmfVDpMpUvKxmZ4XML%2BTv%2B4PxWPtzgVjCF7hciHzsTte6zyqHRmpGyYuZ%2Ffm%2F9RHaSnS6dqd3d7jI5eFGRFUqJ9NqHtpcwqbJc2haWs%2Fw29ZAGfYDjOufYpAEjSyLw%2FZaOOVRrgouzko2VOwVkdyWmazz%2BMFXP%2F%2Bb6hNtYAELJwHifAfQYKo1dcokJXVhw4SL57zm3fQxGXutpkdhLt64d0URSNACBZh4%2FXZuuZ6CKnmvVhG2pcyAmAte5kfqdYYM8z6UJV61bsAAnTrN%2BW3JeJvEchkQnn6kLYz2XTwoNXVm3UY5pXDmKn47WDBoLPk6bBK2i2%2Bp2N6YntoSnhoxbT%2F7Ql1ltZxV%2Boljj4a6%2BrVuGGDNKJQ7Jgaynk5oUgo29TQNrrIl7H60F9VlHKv7KrWi2pW5SyceR%2FL%2FaotVz%2BhuC2TNNIA5RqE688zj7F7RXk76FRdp6Iw0MEA4O8Pzhu2bHQjxHN0fW03QWxaVuGol7BTOM4CsxC2badbVI6qUEDX4YL%2BKpzMh42VRqO1OJwgr8bXAyso%2BVPsLeRphzfDjzg%2FdOmU4SglFzK6esK8VBdIDxiPbCCopwEyTS4Me23pv4wPmwMaWa%2B85ye9zDn%2F9zJBjqkAeKPzRCQAmCh9lP8An9n2XW4n1sV%2B82dEsf12MsPQbyNXyMkVhRyruvOX0%2Fo53XbID0g2KHjCLTnPAITDjbkBARuvJe9BtPyrfmWcASiL5RjupCVBpmDZ1d5oTbFCmLUy6jxIpy0uIwpyBtM1%2FpOPEnUgff2KpCHjWTCj1mJEV9wLYaEI%2FD6SE%2Bimj4bel%2BC6LBVQINpSwyvlYFfP1ZQQBrGtl%2Bp&X-Amz-Signature=712ed6ef2c0395aaa7acdc7fddd3cb5c4794ff770160df0cd49c69dd86888ada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYBFASGP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK2Me%2F6xkyfN2fOLhe1NkkNEo7WvVC3kBrZbDHfjoUoAIhANsYWfIF1VgL5v8wzWCuda5Nw0vQa3erBA84OjiQlRitKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxg%2BrYa1zAbTRx47JUq3AMGJjCZzdpy9%2BBxAYUUHbmfVDpMpUvKxmZ4XML%2BTv%2B4PxWPtzgVjCF7hciHzsTte6zyqHRmpGyYuZ%2Ffm%2F9RHaSnS6dqd3d7jI5eFGRFUqJ9NqHtpcwqbJc2haWs%2Fw29ZAGfYDjOufYpAEjSyLw%2FZaOOVRrgouzko2VOwVkdyWmazz%2BMFXP%2F%2Bb6hNtYAELJwHifAfQYKo1dcokJXVhw4SL57zm3fQxGXutpkdhLt64d0URSNACBZh4%2FXZuuZ6CKnmvVhG2pcyAmAte5kfqdYYM8z6UJV61bsAAnTrN%2BW3JeJvEchkQnn6kLYz2XTwoNXVm3UY5pXDmKn47WDBoLPk6bBK2i2%2Bp2N6YntoSnhoxbT%2F7Ql1ltZxV%2Boljj4a6%2BrVuGGDNKJQ7Jgaynk5oUgo29TQNrrIl7H60F9VlHKv7KrWi2pW5SyceR%2FL%2FaotVz%2BhuC2TNNIA5RqE688zj7F7RXk76FRdp6Iw0MEA4O8Pzhu2bHQjxHN0fW03QWxaVuGol7BTOM4CsxC2badbVI6qUEDX4YL%2BKpzMh42VRqO1OJwgr8bXAyso%2BVPsLeRphzfDjzg%2FdOmU4SglFzK6esK8VBdIDxiPbCCopwEyTS4Me23pv4wPmwMaWa%2B85ye9zDn%2F9zJBjqkAeKPzRCQAmCh9lP8An9n2XW4n1sV%2B82dEsf12MsPQbyNXyMkVhRyruvOX0%2Fo53XbID0g2KHjCLTnPAITDjbkBARuvJe9BtPyrfmWcASiL5RjupCVBpmDZ1d5oTbFCmLUy6jxIpy0uIwpyBtM1%2FpOPEnUgff2KpCHjWTCj1mJEV9wLYaEI%2FD6SE%2Bimj4bel%2BC6LBVQINpSwyvlYFfP1ZQQBrGtl%2Bp&X-Amz-Signature=a062e594ee1549bf9b7c8da72a7180293a2afce3e076b04e327cb1d09f982075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
