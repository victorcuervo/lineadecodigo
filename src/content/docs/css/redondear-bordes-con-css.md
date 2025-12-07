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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN44JUT4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5RZk9o09DoBvHkF8VW241GvGggkdE26zBWjuz9T7bugIgJoWbMQOE9SN8b81zvppCbug1q9cddencktuV%2BmuA7TQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnXMQye6BYmokMhNyrcAy0LRHHUADJZ3PjyQFStQXCr%2FNSfDb%2FoaWpOXvvRn6%2FkaHrfep%2F30whEOP9ZrQ86QijUvgVlXSWVgxGFj6l0RCgx38naKXA4PE9XEM9qhF0jqW3FGaILJ4D822bjLSSD9TTG94Zn453Qku5BxG0PL%2B7MNeO32Vb9FCafxVjzb6w49WT4mthuTEE0xq5Q3Oj3HruoYz1zfu6UaDtfMNMdUgsjEDHvOZxKTntXowb%2FMyU894i0wLVBWs8ABk7EqMcDBoFkg6QEIHXrB6VQNeNMAiiVj8svXHaYukUtKd9VfJOri0LJF%2BK29%2B%2FNMRpYWPu2mLm0TexkRJUfh4GS%2FZqtKAro0ZWuV6yrO0iYjFJSRZQzfMpRtLK1tIcCI0Wm14FQD00SZh4aqJd%2FI2OMcWPxK2l6z9fNKOr5Idrl6ZkqoKwZw3ut9NPuHfSnpaGLx2QzWpVWbq1PDOc2gjF1A4it43tJJNxEPrwp3WkJCYXWNzJnVl8ef5HsqLmNarrDRRkEdmX5UY6X7pf6jhR0ce3K%2BzdInJlbLBbM5dFJedkyDnilXuGzDDr%2BAlLdpdp%2B4DT4VoQhL%2BTHDWQ0%2Bld19UV62WS7yKN%2BhsUN%2BhooHI5shabU1C9Rf1NXhObnfC%2BxMMqh1MkGOqUBy9XE0iApQrAph7ZgQqPmxPNaw4Rg8Dy9ZbiabcpEQ3lOTvxm6FE7kQA4RCp0TXEJrz5OD%2BOLZzL9%2FA2rubm31bs0TZUxi8ULJtJ4BrwF3SDk8dbOm7TzIVEDvDHa6MLSi3ExCLZKnWT%2B08mKV4Ye%2Ba9216jfK8bko3YEbzRc0ZC5Sjl9n4rPQ7SFWP6%2F3osV1QtjK4qASJio%2FIhctqhgIPbMcofu&X-Amz-Signature=a65fb8895c52010923cca78a45055d186761cacc178d37708dbb813fab4c299f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN44JUT4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5RZk9o09DoBvHkF8VW241GvGggkdE26zBWjuz9T7bugIgJoWbMQOE9SN8b81zvppCbug1q9cddencktuV%2BmuA7TQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnXMQye6BYmokMhNyrcAy0LRHHUADJZ3PjyQFStQXCr%2FNSfDb%2FoaWpOXvvRn6%2FkaHrfep%2F30whEOP9ZrQ86QijUvgVlXSWVgxGFj6l0RCgx38naKXA4PE9XEM9qhF0jqW3FGaILJ4D822bjLSSD9TTG94Zn453Qku5BxG0PL%2B7MNeO32Vb9FCafxVjzb6w49WT4mthuTEE0xq5Q3Oj3HruoYz1zfu6UaDtfMNMdUgsjEDHvOZxKTntXowb%2FMyU894i0wLVBWs8ABk7EqMcDBoFkg6QEIHXrB6VQNeNMAiiVj8svXHaYukUtKd9VfJOri0LJF%2BK29%2B%2FNMRpYWPu2mLm0TexkRJUfh4GS%2FZqtKAro0ZWuV6yrO0iYjFJSRZQzfMpRtLK1tIcCI0Wm14FQD00SZh4aqJd%2FI2OMcWPxK2l6z9fNKOr5Idrl6ZkqoKwZw3ut9NPuHfSnpaGLx2QzWpVWbq1PDOc2gjF1A4it43tJJNxEPrwp3WkJCYXWNzJnVl8ef5HsqLmNarrDRRkEdmX5UY6X7pf6jhR0ce3K%2BzdInJlbLBbM5dFJedkyDnilXuGzDDr%2BAlLdpdp%2B4DT4VoQhL%2BTHDWQ0%2Bld19UV62WS7yKN%2BhsUN%2BhooHI5shabU1C9Rf1NXhObnfC%2BxMMqh1MkGOqUBy9XE0iApQrAph7ZgQqPmxPNaw4Rg8Dy9ZbiabcpEQ3lOTvxm6FE7kQA4RCp0TXEJrz5OD%2BOLZzL9%2FA2rubm31bs0TZUxi8ULJtJ4BrwF3SDk8dbOm7TzIVEDvDHa6MLSi3ExCLZKnWT%2B08mKV4Ye%2Ba9216jfK8bko3YEbzRc0ZC5Sjl9n4rPQ7SFWP6%2F3osV1QtjK4qASJio%2FIhctqhgIPbMcofu&X-Amz-Signature=a353d8dfd75667d1e6dd3fc3c5455d2639896b9460b1c87003d50eec71e08d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
