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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDHM4BAH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQD37ZZpjBD0b105gNfi%2BML92iSDrEQK7cEgF2U3Rvtk0QIfDNwjXX2z13BiPok%2BDbLdyfjdnMBTBNGGGuICLPF16iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRccnIgh9JVdlloGgKtwDq0dHdZTOljwcld%2BipPv34HNsfNq9Bl%2Fsy8y2vbjPaFICFtt0IONslUj%2Bff4vGFzpi6ECf4QYmFUTtlEiAOsfxqQPAhFdbEGsnwDuAwB1xpPKDB6AuQZPXdLT6zMoIrpxFrAbDJA9Mt7WXb%2FElZIYcfd77ktYw9wxe6dvchR%2Bdh%2FSHBSRHbRIt%2FKRlcdrzuV8P1uYkBDHPty8nC4omZ1DUsj0%2BIXI13VF7Fvme3Uzwgp6yFbYuNTPCE%2Bpy8D97jh0zKnjB3TYGCsshUFvfhKStrl9Fl92vYShITLs508SVGfBcRVLOYrAp52o8wEX%2BVkWCfXw4bwOIEF3D6dZxq1Me6HzyaYcRhtPcbfF3yAlxitvZ6nXIAibtknle44415%2BO1PIDty8pwPAw9IBpUPxHKWBShBjLvi%2By3zSciQUk79u8ILjDTs82qdRJFXfmLEdlsm8ZG0QZ%2BOi8fu1TsYwSmYnKrD3q0X%2Fn9PtP2QOEt%2BdQLFhUOA5ziu8EWHiw3cn9YTM8IT17Uytjdg78eCG4gKjcZSq%2BPtdIISjXNjZEK0Mp%2FSsMMpA7p%2BErcB3NFglv%2FfRTfbcfmfM6pWn6p3VEpwFfUDQchTFIIN4AOgZGUENT3Wf3fRt3Hpxuk6kwvZnVyQY6pgEsahNXEP7XcVOJ3lYZX8muC5BY%2FFnXeyDGZ6NYE3RgvS88jui793rTQq1gPj8LNZxKhwXtdbMIJkgt0DjTYsgzPaoSZLaA1BRNkTw7YcBBdHP6OZq2m5lwgntQboUzUIuNv7KWGlQ%2F9arJ7Cy70q%2Bz26eflBSYuSuikvRgh0Np%2BJJE7PyuvYNBW3Njsz4kHQ%2BnABXCHl3qsuqusLjxOINfucfeweN2&X-Amz-Signature=b3cbceb242a4472587f086c7ca67a2531c8c367659abb3cbad75515acf91e8bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDHM4BAH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQD37ZZpjBD0b105gNfi%2BML92iSDrEQK7cEgF2U3Rvtk0QIfDNwjXX2z13BiPok%2BDbLdyfjdnMBTBNGGGuICLPF16iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRccnIgh9JVdlloGgKtwDq0dHdZTOljwcld%2BipPv34HNsfNq9Bl%2Fsy8y2vbjPaFICFtt0IONslUj%2Bff4vGFzpi6ECf4QYmFUTtlEiAOsfxqQPAhFdbEGsnwDuAwB1xpPKDB6AuQZPXdLT6zMoIrpxFrAbDJA9Mt7WXb%2FElZIYcfd77ktYw9wxe6dvchR%2Bdh%2FSHBSRHbRIt%2FKRlcdrzuV8P1uYkBDHPty8nC4omZ1DUsj0%2BIXI13VF7Fvme3Uzwgp6yFbYuNTPCE%2Bpy8D97jh0zKnjB3TYGCsshUFvfhKStrl9Fl92vYShITLs508SVGfBcRVLOYrAp52o8wEX%2BVkWCfXw4bwOIEF3D6dZxq1Me6HzyaYcRhtPcbfF3yAlxitvZ6nXIAibtknle44415%2BO1PIDty8pwPAw9IBpUPxHKWBShBjLvi%2By3zSciQUk79u8ILjDTs82qdRJFXfmLEdlsm8ZG0QZ%2BOi8fu1TsYwSmYnKrD3q0X%2Fn9PtP2QOEt%2BdQLFhUOA5ziu8EWHiw3cn9YTM8IT17Uytjdg78eCG4gKjcZSq%2BPtdIISjXNjZEK0Mp%2FSsMMpA7p%2BErcB3NFglv%2FfRTfbcfmfM6pWn6p3VEpwFfUDQchTFIIN4AOgZGUENT3Wf3fRt3Hpxuk6kwvZnVyQY6pgEsahNXEP7XcVOJ3lYZX8muC5BY%2FFnXeyDGZ6NYE3RgvS88jui793rTQq1gPj8LNZxKhwXtdbMIJkgt0DjTYsgzPaoSZLaA1BRNkTw7YcBBdHP6OZq2m5lwgntQboUzUIuNv7KWGlQ%2F9arJ7Cy70q%2Bz26eflBSYuSuikvRgh0Np%2BJJE7PyuvYNBW3Njsz4kHQ%2BnABXCHl3qsuqusLjxOINfucfeweN2&X-Amz-Signature=ada5ed347203fd8fa1197eb7c44654c0ddb7bcd7eedc37e85aa1fe14078d4f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
