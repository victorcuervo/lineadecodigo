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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADU7RTX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS05N%2B%2BJqdiQLYO6izSsRR2wBWMEze0JWhw01MrworuwIhAIHbkyvvNeb%2BYVBpyDtQJ31PUmVfggfJkBHG8vtjo74LKv8DCGwQABoMNjM3NDIzMTgzODA1IgwhTwrI2Q45qP6Gw2wq3APO14RNNvc%2F73lQuOfGywknddXP9PgmXtms73cEysbCeRbueNlZaBIRHeKMy32UW22BkAkktfGgpiNRTMwdmLumSot1Q6i9OXF1mtjkC7gb60F7%2B8V70B9Me%2B5OuMhn9sdrwxKfbIDvbt%2FIo2UEb40KHVq0rl%2FSSH3ltyeHP0UqA00%2Bt2%2BvtDzPUZcCj%2FVjTMW9OA7t666CT2vmX1SYhsfXe0ZQOMesTOlroXnAQR4KfHJ%2BUFpeRnZ9decHj4AcntZqJBsfONZYdon%2FAGkr4CrAn30E%2FQyxT20TfgK%2BWzw%2FrWFYUhEWPjV4H9SDqpETycu2oOC6J8X8jd88BiERXRa6ZEilA732YZJYnTuKase9ctB6MuCvdmz7QImhYzfzXIml7mXMporgFLkw%2FzVW7RT%2BFFtGWqVqR7ogdLRMRppYFZK%2BHh1NFC%2BqAh2nZ4F0UFg7%2F9kVR2LorNG9j%2BouCYyzHQnRCRITnOq23jCa65I5jR2QUkkyRE5JG%2BXujeed4zg6De3aTb8OkR8CVDUhlzst4BQsBTzexn0MM%2BkJd8FkUa8pIE%2FIGCqguPjZxIq794o%2BRl97bbNdiDKdBf4SUz7Lz48nqGcQrRQAQkihpBM3zTJSL7z%2FCwLN4YqGGzDJws7JBjqkAbAp2xaDmRM59ErR6MtID8k4j3SzlgDEgYCe6hvPZrZf8lPAPjgpzp1j4tkMBFYNoeMegYR1CWuDCboNHFc8DnULSTDREud8hntB8HQd74qSQqp03UNOZv08HE5IAot443aMU%2ByV9S66bPujOdKHC%2BLXklBcGVMRSQ9VNFwlTKcWQsnmc6VCAJ7AAK1xtHPQzhCFlwyARgwCzlV%2BbQGgje5nKLbL&X-Amz-Signature=341afaeb0498e717b6b09baba8875fbd0c1aa9e932da4db59412c07bd835f155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADU7RTX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS05N%2B%2BJqdiQLYO6izSsRR2wBWMEze0JWhw01MrworuwIhAIHbkyvvNeb%2BYVBpyDtQJ31PUmVfggfJkBHG8vtjo74LKv8DCGwQABoMNjM3NDIzMTgzODA1IgwhTwrI2Q45qP6Gw2wq3APO14RNNvc%2F73lQuOfGywknddXP9PgmXtms73cEysbCeRbueNlZaBIRHeKMy32UW22BkAkktfGgpiNRTMwdmLumSot1Q6i9OXF1mtjkC7gb60F7%2B8V70B9Me%2B5OuMhn9sdrwxKfbIDvbt%2FIo2UEb40KHVq0rl%2FSSH3ltyeHP0UqA00%2Bt2%2BvtDzPUZcCj%2FVjTMW9OA7t666CT2vmX1SYhsfXe0ZQOMesTOlroXnAQR4KfHJ%2BUFpeRnZ9decHj4AcntZqJBsfONZYdon%2FAGkr4CrAn30E%2FQyxT20TfgK%2BWzw%2FrWFYUhEWPjV4H9SDqpETycu2oOC6J8X8jd88BiERXRa6ZEilA732YZJYnTuKase9ctB6MuCvdmz7QImhYzfzXIml7mXMporgFLkw%2FzVW7RT%2BFFtGWqVqR7ogdLRMRppYFZK%2BHh1NFC%2BqAh2nZ4F0UFg7%2F9kVR2LorNG9j%2BouCYyzHQnRCRITnOq23jCa65I5jR2QUkkyRE5JG%2BXujeed4zg6De3aTb8OkR8CVDUhlzst4BQsBTzexn0MM%2BkJd8FkUa8pIE%2FIGCqguPjZxIq794o%2BRl97bbNdiDKdBf4SUz7Lz48nqGcQrRQAQkihpBM3zTJSL7z%2FCwLN4YqGGzDJws7JBjqkAbAp2xaDmRM59ErR6MtID8k4j3SzlgDEgYCe6hvPZrZf8lPAPjgpzp1j4tkMBFYNoeMegYR1CWuDCboNHFc8DnULSTDREud8hntB8HQd74qSQqp03UNOZv08HE5IAot443aMU%2ByV9S66bPujOdKHC%2BLXklBcGVMRSQ9VNFwlTKcWQsnmc6VCAJ7AAK1xtHPQzhCFlwyARgwCzlV%2BbQGgje5nKLbL&X-Amz-Signature=d57d8442b7875605350bac1061efc8386815eac0ec5c7e567e06c8a83cbbea62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
