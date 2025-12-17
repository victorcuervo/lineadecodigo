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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YTI2XFV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN21TzcBerkjoB0oldurw8N8549eLDR7SUIErQnjy3XQIgfJ3xZYu8lkaB4yt9XhDEsv08O4KRtOiGjwdwVb%2B59b0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1C%2FE4bocT0SRRk7CrcA9BgZoVaeUo%2B9PiMYQKb1u0Ik0noDagm7LP%2BwsZ6wabNhCzqKIFDv79JpxCr58%2FKK2enlQz1U2T%2BwyW0ik0eGXGS%2FPrE9bfz986daxYuhAYR6fpaPbvyx5aN7%2BO5g0zlLOv%2FRaAaJPpwvnAFelxAqkMnyKbQy%2FseRkVpN%2F0FmCjgA9o8Q5aRkHDVWw5FJhTsQtIKBSWR9IjvUlplCekBLxJEgOjCwI%2Fbu1752yRnnprYQpglhndsXpSCcYHqKF4c3I%2FRheQcadFSYXVvWClo7GPnjf%2Bha3HEG1YQV%2BI6Ajp3ksvWxuJQ2idV7spt68HSBw3%2Bj3KmpMohb2BaJb5Z8jUMdoB96sQr8IKfa36TWHRLoqOm9fFjDsncL%2BymcPgqgJYm1oHKW3vQIL6KBfuHnNx%2FYlakcZdqCDWq6lDkYwccIq8omKhz4vKKwqFoWvvnrKqDcyugjmAgrHZUelqrKqVB%2BglRZc6Lbtt7Wd6e7foXYUA1EJWD4Ue%2B2nOt57U5omUggMo7ftlb86mxo72FtLEzV0UViW4yX5muuge5wVNpIYRE4fgIdg0ws%2FVz%2FbbjHivvlAGLo5B%2Bs2LpblE1nJ6dmpcE%2BrfJHSYA7o7cu0KaNUohsgygEokDdb%2FnMKmgi8oGOqUBBALU1wEQfV6NGZSKCckqrY%2F1wTcYMOlm9ePN5xMLWmNEjUBYko%2FBlOboze93UQi6WJCU4ijMsUxvdPOgov1lJ0bIDF7LNG9TZmlzkcU9x8yHSwiRO8OaQrtPJZbdE8imGkVIwV%2FpClLfa1uQjc8%2BIxphIHo5wWZsJDNP2EzKBbLR6%2BAU%2F6%2FHb%2FA1sox374gjg0yUMZNidi3BJEJVJ2H92MJ%2BrLfv&X-Amz-Signature=77fa25703fad68abc324180f39af1413561bfd964d2919fc79c27c1e4a0b7ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YTI2XFV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN21TzcBerkjoB0oldurw8N8549eLDR7SUIErQnjy3XQIgfJ3xZYu8lkaB4yt9XhDEsv08O4KRtOiGjwdwVb%2B59b0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1C%2FE4bocT0SRRk7CrcA9BgZoVaeUo%2B9PiMYQKb1u0Ik0noDagm7LP%2BwsZ6wabNhCzqKIFDv79JpxCr58%2FKK2enlQz1U2T%2BwyW0ik0eGXGS%2FPrE9bfz986daxYuhAYR6fpaPbvyx5aN7%2BO5g0zlLOv%2FRaAaJPpwvnAFelxAqkMnyKbQy%2FseRkVpN%2F0FmCjgA9o8Q5aRkHDVWw5FJhTsQtIKBSWR9IjvUlplCekBLxJEgOjCwI%2Fbu1752yRnnprYQpglhndsXpSCcYHqKF4c3I%2FRheQcadFSYXVvWClo7GPnjf%2Bha3HEG1YQV%2BI6Ajp3ksvWxuJQ2idV7spt68HSBw3%2Bj3KmpMohb2BaJb5Z8jUMdoB96sQr8IKfa36TWHRLoqOm9fFjDsncL%2BymcPgqgJYm1oHKW3vQIL6KBfuHnNx%2FYlakcZdqCDWq6lDkYwccIq8omKhz4vKKwqFoWvvnrKqDcyugjmAgrHZUelqrKqVB%2BglRZc6Lbtt7Wd6e7foXYUA1EJWD4Ue%2B2nOt57U5omUggMo7ftlb86mxo72FtLEzV0UViW4yX5muuge5wVNpIYRE4fgIdg0ws%2FVz%2FbbjHivvlAGLo5B%2Bs2LpblE1nJ6dmpcE%2BrfJHSYA7o7cu0KaNUohsgygEokDdb%2FnMKmgi8oGOqUBBALU1wEQfV6NGZSKCckqrY%2F1wTcYMOlm9ePN5xMLWmNEjUBYko%2FBlOboze93UQi6WJCU4ijMsUxvdPOgov1lJ0bIDF7LNG9TZmlzkcU9x8yHSwiRO8OaQrtPJZbdE8imGkVIwV%2FpClLfa1uQjc8%2BIxphIHo5wWZsJDNP2EzKBbLR6%2BAU%2F6%2FHb%2FA1sox374gjg0yUMZNidi3BJEJVJ2H92MJ%2BrLfv&X-Amz-Signature=c2eedd1b32da1849a3973c1d3de7ce9b31a3a815cb86e25acca3bf6c9a91cfb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
