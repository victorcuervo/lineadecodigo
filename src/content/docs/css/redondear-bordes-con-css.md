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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKF7W3L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPpRzxSrgnBDEFzESUHraC00m4ABxpQntDi7K0e1i%2BlgIgNh98Nya4JUr4aUVZ19IO%2B3OQxhLeH2q8C6hIu%2BNxPTEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCbvol7nL9tPV7TeQircAyIRMoBor0iDYBOFQ8pK8lcnuuCVZ5BC6BOXy%2FgR9ZhWMsFo6%2BrX4mGPfZkYwQF4uemHSxmoMS7ZrXMt1wEOHsgJil5pxRyy9780UpUiVBz5Kc1NipMhysjaVWgCKIpA3Kb%2BiaKkL4KQksPTmTM1wxHVyFPRa0EGJSvXv5WolYxAKT4Q0RT59gk%2Bj%2FI68wm8TlekxjmoOzQz9Qd7jIDJp2zclmEyhHcH3Rm5iKyr66PGMTLWC467RrtiAzPmUw2qi2e9PEV3rHE0SPdgpRXKhE5diL7yN7uE9Xy0SCeIzkem1eq%2BuB9syJMTMobkN0fAOBaOQwMT1pTU4b1QNWrKhulM0QiKOyRBE0ucn05qh6VU073J3ugWI1CVU18EyqRlbZMeXfo3tRrQ4nducdGBBNF6I9j7gQU7GM0OZWvI8SD1NUPz8wXp7gBeMXOsS30SnyvJlsGbvltcSS1dWL3pMZQYFxkP0TFlKpgGi%2BRpuaIackOLiJn06qFGM8BA10G1f%2B2Z03i%2BYasHJlH9Npzwcz%2FoZeoJTon8h36Z%2BUo1u1zQd4yhLipSXFmQT%2Bk9P6kqV%2BmUN055bCZlc%2F1oKI0i%2BTktuOateVVBhp6e4cY0zqSCmAj9jzgV3w0BOUUCMMTM0ckGOqUBJGxgOXVaaGgJ0dashsRnba9rmawnJCHskKJ8%2Bpe3Zw2%2BbQGG6bdIcVPteRILyRsWT%2FOMzqwgF34cuDIOlLyBKOaMczqJsgKRl2kEXfOv%2BOiQgZVkrtUbD36khEsMlwOiR6e%2BroIdtgOiBN6xpC%2Fej2ClHwIgcWruOU85G4ZqH6ZpJJUU7Orn%2BLfDt0efkgGcxT%2B%2B20ONwhQVbOG%2FtYAyGmIU0BQB&X-Amz-Signature=30d11a454ba4388e54ff3932d207412faefd711a2264f374db53b1cb1237b5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKF7W3L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPpRzxSrgnBDEFzESUHraC00m4ABxpQntDi7K0e1i%2BlgIgNh98Nya4JUr4aUVZ19IO%2B3OQxhLeH2q8C6hIu%2BNxPTEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCbvol7nL9tPV7TeQircAyIRMoBor0iDYBOFQ8pK8lcnuuCVZ5BC6BOXy%2FgR9ZhWMsFo6%2BrX4mGPfZkYwQF4uemHSxmoMS7ZrXMt1wEOHsgJil5pxRyy9780UpUiVBz5Kc1NipMhysjaVWgCKIpA3Kb%2BiaKkL4KQksPTmTM1wxHVyFPRa0EGJSvXv5WolYxAKT4Q0RT59gk%2Bj%2FI68wm8TlekxjmoOzQz9Qd7jIDJp2zclmEyhHcH3Rm5iKyr66PGMTLWC467RrtiAzPmUw2qi2e9PEV3rHE0SPdgpRXKhE5diL7yN7uE9Xy0SCeIzkem1eq%2BuB9syJMTMobkN0fAOBaOQwMT1pTU4b1QNWrKhulM0QiKOyRBE0ucn05qh6VU073J3ugWI1CVU18EyqRlbZMeXfo3tRrQ4nducdGBBNF6I9j7gQU7GM0OZWvI8SD1NUPz8wXp7gBeMXOsS30SnyvJlsGbvltcSS1dWL3pMZQYFxkP0TFlKpgGi%2BRpuaIackOLiJn06qFGM8BA10G1f%2B2Z03i%2BYasHJlH9Npzwcz%2FoZeoJTon8h36Z%2BUo1u1zQd4yhLipSXFmQT%2Bk9P6kqV%2BmUN055bCZlc%2F1oKI0i%2BTktuOateVVBhp6e4cY0zqSCmAj9jzgV3w0BOUUCMMTM0ckGOqUBJGxgOXVaaGgJ0dashsRnba9rmawnJCHskKJ8%2Bpe3Zw2%2BbQGG6bdIcVPteRILyRsWT%2FOMzqwgF34cuDIOlLyBKOaMczqJsgKRl2kEXfOv%2BOiQgZVkrtUbD36khEsMlwOiR6e%2BroIdtgOiBN6xpC%2Fej2ClHwIgcWruOU85G4ZqH6ZpJJUU7Orn%2BLfDt0efkgGcxT%2B%2B20ONwhQVbOG%2FtYAyGmIU0BQB&X-Amz-Signature=e1904c7223d959b0f415aac640785af5903d2ae70e15000e823901388713db7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
