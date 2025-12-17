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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UWMZBPM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFbfW8%2FULsjoeH8dnky37zm75xDufrw%2FpSYycqEz%2FjuAIgD8GDuPDXlP6KgQQ2e2sqsXd3KonluWC2E8l0FkWWti8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDCKk3YKkv1tmXWfscyrcA85Af9tGtJ1DRYfyjywJ4LHo2cphqk3SFUWbipCmf9rY0zu5bQSWDeHlO%2FaJ%2BCl9%2FT54YCEULbg87MnXs9cFbNLlFC4QcPTL9JHSpZzrTYhQ60toV7RUQPcdstd7gSiTo%2FaD2J9FLv5dMkMTKMF655KHtnJk8APchL6sJMpbShNqDc3skUYIhJablm1vIMcY8MqLDpDhM7d6fOcASq%2FR2wtvgoul97MJNs24MFMixowalvPd8%2FrHivtkuvqBK6H%2FWxhc%2FXks6EVas8Zb59RGR1J2w83RU6JLjvubHvFrBwRM6CrftClfpz8LJZLIjqtoyQ10n5%2FthR9B%2FbgXcqyYR10QbcAbgdAiUlIYgpcgaQAB2ssFTo7OsiiXHYB6i8Rm%2Ftgx4j7DtdYp%2FMczb01xjc%2Bug8u0So9pLGGh0kq12SHU0qlgCW7aiTBcUX6SgveGjWSlC3iFmMHHkOzN%2B7ztDnM33GlHZGUfsB%2FljJBXoUoQ3hdUfeZ0l%2BX69%2F%2FW8nX4YabL1Zct1dtreP6H1eK6j59Agxygx%2BmZy%2BZVjiUjlwgCUWUb49CSSKXOYyA0SLgv5xjsJNqtdFU4pgRJu497rIRZ80%2Fv2sDbIXqvyWxhzBWp41SxVyvjBiJ2esZdMNmyiMoGOqUBr4hmUzbjMD5dmzK6ZZM%2F1UF6C7zTjPTQWwqFjqWSCbgdq2qy7rKzo7MS%2B9gsUwYUFXF9byzdKsTBMLPmMpfnLDq6fF5VyzcrT%2FroiRoupNRKWxQJdHLS2v7rurxm9HJbV3g6GTeJYu6H%2BW63jwcgJBb%2FsCB06Nce2p79ekV8he%2FEuM%2BGIte3GpX%2BBzMcP2iYEMjUfkdJWnEbD4ylI%2BSjsTquF%2Bip&X-Amz-Signature=9914861c5e5b16311cf11c8b2f2ce6d07992c6b7f029ca3caf38588d0d6a927d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UWMZBPM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFbfW8%2FULsjoeH8dnky37zm75xDufrw%2FpSYycqEz%2FjuAIgD8GDuPDXlP6KgQQ2e2sqsXd3KonluWC2E8l0FkWWti8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDCKk3YKkv1tmXWfscyrcA85Af9tGtJ1DRYfyjywJ4LHo2cphqk3SFUWbipCmf9rY0zu5bQSWDeHlO%2FaJ%2BCl9%2FT54YCEULbg87MnXs9cFbNLlFC4QcPTL9JHSpZzrTYhQ60toV7RUQPcdstd7gSiTo%2FaD2J9FLv5dMkMTKMF655KHtnJk8APchL6sJMpbShNqDc3skUYIhJablm1vIMcY8MqLDpDhM7d6fOcASq%2FR2wtvgoul97MJNs24MFMixowalvPd8%2FrHivtkuvqBK6H%2FWxhc%2FXks6EVas8Zb59RGR1J2w83RU6JLjvubHvFrBwRM6CrftClfpz8LJZLIjqtoyQ10n5%2FthR9B%2FbgXcqyYR10QbcAbgdAiUlIYgpcgaQAB2ssFTo7OsiiXHYB6i8Rm%2Ftgx4j7DtdYp%2FMczb01xjc%2Bug8u0So9pLGGh0kq12SHU0qlgCW7aiTBcUX6SgveGjWSlC3iFmMHHkOzN%2B7ztDnM33GlHZGUfsB%2FljJBXoUoQ3hdUfeZ0l%2BX69%2F%2FW8nX4YabL1Zct1dtreP6H1eK6j59Agxygx%2BmZy%2BZVjiUjlwgCUWUb49CSSKXOYyA0SLgv5xjsJNqtdFU4pgRJu497rIRZ80%2Fv2sDbIXqvyWxhzBWp41SxVyvjBiJ2esZdMNmyiMoGOqUBr4hmUzbjMD5dmzK6ZZM%2F1UF6C7zTjPTQWwqFjqWSCbgdq2qy7rKzo7MS%2B9gsUwYUFXF9byzdKsTBMLPmMpfnLDq6fF5VyzcrT%2FroiRoupNRKWxQJdHLS2v7rurxm9HJbV3g6GTeJYu6H%2BW63jwcgJBb%2FsCB06Nce2p79ekV8he%2FEuM%2BGIte3GpX%2BBzMcP2iYEMjUfkdJWnEbD4ylI%2BSjsTquF%2Bip&X-Amz-Signature=a95bd1f1e191132d59703d7fed64152cb30a036f7c8107072e011ccddf7ca6d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
