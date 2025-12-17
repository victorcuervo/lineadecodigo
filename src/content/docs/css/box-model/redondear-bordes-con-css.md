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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKLZSMN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyLYnkG99fBlq9UQWIQu59gA5NEelmKRYTTrnm5e3y5AiEA5aQdzlDhsekBeZ%2BIXsy3ADqM%2B%2BxlVx1zWQkQrIYXWyIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEqMb8WYyfyJLrTUoircA5wy2cKTUjXqzonQbihYPtSAgcRVHHUx4s4OdInZq%2FCfy%2BJy8XmRGja7zufYJW7dRNzTix9IZDgwQ2XtsaGBWtwTQvRyGKKa0GFzeOToPYc4XjL9GdoonvhgwB%2BdibrajGqlRWVls%2F5Ljq%2BlWe9vp9i%2F5GaQWi7Nh0UkOw7lzDb7P9G%2F3gLr%2BOC6yzBvVKnWQTmWPT8AOyHIdi3zW03%2FN%2FKTAupPLokZUxzPftg3vBXnZPAwPiH4SB%2FLZqFcrTnY%2FfEjy3aQ6G%2BcgrKCEZLJi0u6gruT8V320BdMb7WFnRf80MdF7VnHUSAnrmS%2Br60B6iWOrlY1enxb4zMf0z9b9g4mLRtN9xKEWCckUS33WwK%2BGnDQPBAzu9FZlkx02ERnv0jiKbEUCDLm2xKJ5EQGLyGDqRcZABj3AgPlrUHL7%2BkuXlDFVV9beoARFjNAD3IiDMVkkngR00thtSGRcnDimrVMQ14yMkqVOpoYuI%2FFrM1b8HSk2D1AXesmBqWq0LHfds42eF0a%2FrpsbMn9LSNYCIl%2FcW%2FplGMJFIVGYrZt9AdRGrm4HhmtoXOrodv4oOD2W0mQ5NuCM9wsnlTMl6TZ2sEc0QLyVCbbpbPRtLD8uz9Hr9vqb75GQRGFLQ%2BkMK2cicoGOqUBrWJDA9XLJDFmSOmhOXZw3SkBj%2BZUejGfKwh%2Fs8hhaXMXyVKvKFi7SzAqtNCH4HwmYMgKY0Uwb4%2BcIry%2BRz2Hl8ZEk5LfEyAuaBnphNRco48q3T1%2FCdBW5s9FL7ITAcLT1psBjjq9noI6EookviuL1NVdNMfd4zbAfj111m6MTq8u2HaBT2PR%2F0cCqF0xBIxjrPsUtLQk%2B2RNTC80JL9lLVflEWZS&X-Amz-Signature=f7834370c1240ea56f7b1a8914178321cb84e978189b94843267252a9c29a40d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKLZSMN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyLYnkG99fBlq9UQWIQu59gA5NEelmKRYTTrnm5e3y5AiEA5aQdzlDhsekBeZ%2BIXsy3ADqM%2B%2BxlVx1zWQkQrIYXWyIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEqMb8WYyfyJLrTUoircA5wy2cKTUjXqzonQbihYPtSAgcRVHHUx4s4OdInZq%2FCfy%2BJy8XmRGja7zufYJW7dRNzTix9IZDgwQ2XtsaGBWtwTQvRyGKKa0GFzeOToPYc4XjL9GdoonvhgwB%2BdibrajGqlRWVls%2F5Ljq%2BlWe9vp9i%2F5GaQWi7Nh0UkOw7lzDb7P9G%2F3gLr%2BOC6yzBvVKnWQTmWPT8AOyHIdi3zW03%2FN%2FKTAupPLokZUxzPftg3vBXnZPAwPiH4SB%2FLZqFcrTnY%2FfEjy3aQ6G%2BcgrKCEZLJi0u6gruT8V320BdMb7WFnRf80MdF7VnHUSAnrmS%2Br60B6iWOrlY1enxb4zMf0z9b9g4mLRtN9xKEWCckUS33WwK%2BGnDQPBAzu9FZlkx02ERnv0jiKbEUCDLm2xKJ5EQGLyGDqRcZABj3AgPlrUHL7%2BkuXlDFVV9beoARFjNAD3IiDMVkkngR00thtSGRcnDimrVMQ14yMkqVOpoYuI%2FFrM1b8HSk2D1AXesmBqWq0LHfds42eF0a%2FrpsbMn9LSNYCIl%2FcW%2FplGMJFIVGYrZt9AdRGrm4HhmtoXOrodv4oOD2W0mQ5NuCM9wsnlTMl6TZ2sEc0QLyVCbbpbPRtLD8uz9Hr9vqb75GQRGFLQ%2BkMK2cicoGOqUBrWJDA9XLJDFmSOmhOXZw3SkBj%2BZUejGfKwh%2Fs8hhaXMXyVKvKFi7SzAqtNCH4HwmYMgKY0Uwb4%2BcIry%2BRz2Hl8ZEk5LfEyAuaBnphNRco48q3T1%2FCdBW5s9FL7ITAcLT1psBjjq9noI6EookviuL1NVdNMfd4zbAfj111m6MTq8u2HaBT2PR%2F0cCqF0xBIxjrPsUtLQk%2B2RNTC80JL9lLVflEWZS&X-Amz-Signature=68a49e5d04bf3091811d60dc705f51abcae3a1aea3de29f4f5027c1c684571bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
