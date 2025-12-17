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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG72WXSX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAraSsFoeUPQsNSMUy4AooSWw5uU4yg2r13zbMkYzdVJAiEA4Kz8XO6KSJYuFMtFmf7feTI3AEUA02PfRJhzuBlw9ywq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDIwWd6j4OqlUsuUOyrcA9uMh8HctRVXwFR5MIxlHxD0wenZ5d%2FgOl%2B7tVIBsydxI0Z5JUYonjmIbTsEADYA1%2BlHAIjVgrk%2F5Kx3lGx0ONh3lRgA%2FL7qGk%2BACErMZ%2FqJJlmahPSYYa1m2JNapAYl%2F9agw%2FHt6y8SJZ3ju28CBiAttJOV25ST4p%2B44UFeTeoeOWr2x0yh1wKesOQFE1CTYtPQQCon22miyUrGUfLx6da7gHrEwR4Nd6ASd%2BHbtIrf1Ed7umqFJBzXJfiVw0K%2B4PzNUChWAFnHtwFaupZWUx6YttkhXGImzxJ4DByPsVqFEBDguBt8t3AX8GMUhe15qKahXyeBpiz7h9eew%2BRTJNF0OUgmIUiignnj5JpJTMhZfM8Teui3uUf6uvZO0mjZaoMV32RSLqYjB1ypX%2BnjrLdetHecvLA4RSfPBPFVyp1NWbZmgurFmCDqcD6Lzauf3GLL8YLmA8A2l9ljQ4A6bUfpaJtl41FQoqUscjxRdq5evBFj%2BfYup%2FvTkBJF2llPgZg6wjw544H%2Ffbw3p6Zj4oq0fCYj%2Flbmt9YYppjadD8FSxgRC%2B9z0gRLe0N%2B%2FrTgx3fge9ueSi9mDND%2BbcgtR0JOgUVFkB3lWC7%2Fzatjjt00FlmSFNAmyYSgBOQLMIGPisoGOqUB0FotZezIpjaE2g2CY8LfFzFcAgRObGvk8gAvw7iVrqJyOFtkoCdLPvyaKJkMAbscImnYhNI1V9%2BPm2EX16u4UcxMWRD8o3D0w2rGgan4Ma1MR%2Fmo6kc4%2FuPjHb1TCeHmIlAtQ9qR%2FgvxSA%2FFrJ3L%2FtEWuZ%2FDz%2FgmAn7Ym%2FlI2L3W5h5z24w3EOZBySazMi%2BUqWdeZEOgBrGxXcgQpRbK2dIg1AHI&X-Amz-Signature=06c046169a880bf48c36572d96b0ce0b4c1205f336ef3fba420cf4f71247ad00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG72WXSX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAraSsFoeUPQsNSMUy4AooSWw5uU4yg2r13zbMkYzdVJAiEA4Kz8XO6KSJYuFMtFmf7feTI3AEUA02PfRJhzuBlw9ywq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDIwWd6j4OqlUsuUOyrcA9uMh8HctRVXwFR5MIxlHxD0wenZ5d%2FgOl%2B7tVIBsydxI0Z5JUYonjmIbTsEADYA1%2BlHAIjVgrk%2F5Kx3lGx0ONh3lRgA%2FL7qGk%2BACErMZ%2FqJJlmahPSYYa1m2JNapAYl%2F9agw%2FHt6y8SJZ3ju28CBiAttJOV25ST4p%2B44UFeTeoeOWr2x0yh1wKesOQFE1CTYtPQQCon22miyUrGUfLx6da7gHrEwR4Nd6ASd%2BHbtIrf1Ed7umqFJBzXJfiVw0K%2B4PzNUChWAFnHtwFaupZWUx6YttkhXGImzxJ4DByPsVqFEBDguBt8t3AX8GMUhe15qKahXyeBpiz7h9eew%2BRTJNF0OUgmIUiignnj5JpJTMhZfM8Teui3uUf6uvZO0mjZaoMV32RSLqYjB1ypX%2BnjrLdetHecvLA4RSfPBPFVyp1NWbZmgurFmCDqcD6Lzauf3GLL8YLmA8A2l9ljQ4A6bUfpaJtl41FQoqUscjxRdq5evBFj%2BfYup%2FvTkBJF2llPgZg6wjw544H%2Ffbw3p6Zj4oq0fCYj%2Flbmt9YYppjadD8FSxgRC%2B9z0gRLe0N%2B%2FrTgx3fge9ueSi9mDND%2BbcgtR0JOgUVFkB3lWC7%2Fzatjjt00FlmSFNAmyYSgBOQLMIGPisoGOqUB0FotZezIpjaE2g2CY8LfFzFcAgRObGvk8gAvw7iVrqJyOFtkoCdLPvyaKJkMAbscImnYhNI1V9%2BPm2EX16u4UcxMWRD8o3D0w2rGgan4Ma1MR%2Fmo6kc4%2FuPjHb1TCeHmIlAtQ9qR%2FgvxSA%2FFrJ3L%2FtEWuZ%2FDz%2FgmAn7Ym%2FlI2L3W5h5z24w3EOZBySazMi%2BUqWdeZEOgBrGxXcgQpRbK2dIg1AHI&X-Amz-Signature=15a1fff3a01a04521d128460f979091b0c79bc9e8bbea9513a3d2a9c9d283f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
