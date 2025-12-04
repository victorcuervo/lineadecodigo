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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZFIPYN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8h1MDNlhXbKDYUfDBLqjDdV5M7W2z1zu%2Bd84IRCCY9AiEA4XZnL1bDEEK2dblGdowyOI5LH0LIvfk65dj65HD4H%2BQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBGWR3eVnpQe9WO%2BfSrcA71eW8magB5l2PN%2BVaKXWaFc91u3l17cIJT77QGhoep%2B3d0q8FmsFV5mMy2RXq2CgHuXk%2BhP7%2Frsnr%2FJ3HCeOdGi40tt7B5W9Zwng87ARlh93XqO0hNwH4vsKhsEZtoIJam1OqiGTz6%2F1P1Vsg97qMXqAq1IO2GJV7N3NL3o8WJwXgIieRVRFlnDOph16q8myV1Ca6EeLx%2F4HY2pNzoXklRsQerdMFYE0MFZLvs8g8C%2FwkeNdaNdJYC5FmfvVYCmMSoV%2FRvfI2bzeFkKe4OiU9F1wXQH0Krf2juuvaRlXOEatzkeoXaI7dUSrKa4eZaQHMSuCamzenTuz13uC7ZcOYm9CmnnEP5EUxTDpV8IMfxbg%2BY5SV96zmzElS9Ols5iFqQp%2F%2FnjlaKaeaeWPLFK7egMN0I%2BzAt5ag2W7mfmo6zHd0jr4t4vK9MrnNGVPfKX%2BM3dUAiMlwKeqJ8x%2BshtEEKvPXQSyMPWhj2KpK1u%2BueIkVz7kWWg9FBC%2FcvTL%2FmBR5vuvE%2B%2FlmBWLDG3f%2BsawVeABy9CzxvC3rWTikDAzOEpNwio7VgC%2BjMK6ZJX%2BVomPZGWbiORQmcthlCGi1MvE4KRG5EZi1QBKKPae6BFIZn0FfkTget%2BPrMv0CBbMLKMyMkGOqUBBNizCwRaVFQWVgnuIRrf%2FhjEqwHrGla0AXyMKsL7581%2Biuyv9FZ8puFxuje9j%2FJMm49tSgLRemU0byHOHbsvtc42LeNOPytCEZz6slxy9r%2BGTzrlR2clmkN4Rb0kJf3BuWZJC2wKg8M5W0DSHMHjVZlp%2B6Gu9nFemQkBVj7W3O3Z9CzehzMFBHySB652RLpz4JGgqUJN4ttusIEDg52vXVSUc7ZG&X-Amz-Signature=e68a1e98e371c346905e534e3fc0dd3096ebb45049a46c06d91480dd720ce8aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZFIPYN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8h1MDNlhXbKDYUfDBLqjDdV5M7W2z1zu%2Bd84IRCCY9AiEA4XZnL1bDEEK2dblGdowyOI5LH0LIvfk65dj65HD4H%2BQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBGWR3eVnpQe9WO%2BfSrcA71eW8magB5l2PN%2BVaKXWaFc91u3l17cIJT77QGhoep%2B3d0q8FmsFV5mMy2RXq2CgHuXk%2BhP7%2Frsnr%2FJ3HCeOdGi40tt7B5W9Zwng87ARlh93XqO0hNwH4vsKhsEZtoIJam1OqiGTz6%2F1P1Vsg97qMXqAq1IO2GJV7N3NL3o8WJwXgIieRVRFlnDOph16q8myV1Ca6EeLx%2F4HY2pNzoXklRsQerdMFYE0MFZLvs8g8C%2FwkeNdaNdJYC5FmfvVYCmMSoV%2FRvfI2bzeFkKe4OiU9F1wXQH0Krf2juuvaRlXOEatzkeoXaI7dUSrKa4eZaQHMSuCamzenTuz13uC7ZcOYm9CmnnEP5EUxTDpV8IMfxbg%2BY5SV96zmzElS9Ols5iFqQp%2F%2FnjlaKaeaeWPLFK7egMN0I%2BzAt5ag2W7mfmo6zHd0jr4t4vK9MrnNGVPfKX%2BM3dUAiMlwKeqJ8x%2BshtEEKvPXQSyMPWhj2KpK1u%2BueIkVz7kWWg9FBC%2FcvTL%2FmBR5vuvE%2B%2FlmBWLDG3f%2BsawVeABy9CzxvC3rWTikDAzOEpNwio7VgC%2BjMK6ZJX%2BVomPZGWbiORQmcthlCGi1MvE4KRG5EZi1QBKKPae6BFIZn0FfkTget%2BPrMv0CBbMLKMyMkGOqUBBNizCwRaVFQWVgnuIRrf%2FhjEqwHrGla0AXyMKsL7581%2Biuyv9FZ8puFxuje9j%2FJMm49tSgLRemU0byHOHbsvtc42LeNOPytCEZz6slxy9r%2BGTzrlR2clmkN4Rb0kJf3BuWZJC2wKg8M5W0DSHMHjVZlp%2B6Gu9nFemQkBVj7W3O3Z9CzehzMFBHySB652RLpz4JGgqUJN4ttusIEDg52vXVSUc7ZG&X-Amz-Signature=6c7818ca1f6bd338d0e4f589c935b669f88481fe9c9dd339c23dda8642e1c865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
