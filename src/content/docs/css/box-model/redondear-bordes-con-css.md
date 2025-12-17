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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5E7YIU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuwMV3VP6PesRVqQb0cWpZ71Xk%2BCL7oSYXF1BnPw0w8AIhAJM1ljPHFHD3XvnxB6%2BzRPM5pFqT%2BwReHaO4%2F%2BnmeIr1Kv8DCHoQABoMNjM3NDIzMTgzODA1Igzguinf9Av2e%2BZK9CQq3AOGeHn2lQQ61ZLS2K77iyBrZ2OML%2FZp5Bd71eS2KYV4wZ%2BMDJlkdeewN9tYJnTqyDGhNniguT0nDOePgjZPQrzlaLu9Cwg6WNMrIhM%2F1POkbl5hD1GwhyQKwAr%2BfDylNrJJOE63Di7Zcwds%2BEmI%2F5thSbt7OxsjebsiKlM%2Fgza%2FA8e0WehSIrXMOBMs%2FGIMCTH0ApPu%2FaSoS%2BNUhDUY8%2FEcscQkgFoNewwCAQC3HdGr%2BkObdJPx3pQfarTEuxlPvlkTpw8ZtNQcRRENWIC3hMbGDkxB7zxDxPi43f9drYEGXjMToJuTTf%2FFj%2BxWP7FIOtKBlPsJnY8oW1CZKk6mLigItQWM9kB7K9%2B3TDTx9DeW87r6B6NrhtfAAyQYlT4NYAh2bxfrJKhdCR6ds1rzoPFB%2Ft96FftP1Rb1SA90o6AZTv1zVNBEEHMLIzRtMAK4JGT1EsaCClikQDrP36gLI9jAraLLUXROkDGQyOUzsEKa2F1RgK6tRIDaBJV5zaRZO1ViDGQNGrC9QtlqhFDJvtttMPZELDztUXnV%2F2XdVC87lAGEStk8PuqbJ%2BjU1p%2Bd00tgoWi6iRmq%2FPvHw%2B5A%2FH4tL5UwtjvQjbz7BBbe5Kzktr2LUXUPWi2W%2BQG8oTCA04nKBjqkAU4PAw%2FTGclJzHeWdO2KYgfJndDTWS8g3P%2FdKTu8agPjk1pYp9NyPJTGEqQOomTCkPX8GTuyujuDdkpvFuZ8gqQmLm35sRyoOGEsCTUvhOcEnhCpKDoQInctzc8O3WzA30m6GFiSXm5p8ryDSRlxerlDDhRowB1VftR2prnld57UR2Eoi1AeEv3wf25kuMzMIXrLNeH54rquinTzrF4akcC3hGD8&X-Amz-Signature=3549d3f97b6f237bbd7f656cf41cf6e6ea14619a62ead8a1752e879b669be3fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5E7YIU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuwMV3VP6PesRVqQb0cWpZ71Xk%2BCL7oSYXF1BnPw0w8AIhAJM1ljPHFHD3XvnxB6%2BzRPM5pFqT%2BwReHaO4%2F%2BnmeIr1Kv8DCHoQABoMNjM3NDIzMTgzODA1Igzguinf9Av2e%2BZK9CQq3AOGeHn2lQQ61ZLS2K77iyBrZ2OML%2FZp5Bd71eS2KYV4wZ%2BMDJlkdeewN9tYJnTqyDGhNniguT0nDOePgjZPQrzlaLu9Cwg6WNMrIhM%2F1POkbl5hD1GwhyQKwAr%2BfDylNrJJOE63Di7Zcwds%2BEmI%2F5thSbt7OxsjebsiKlM%2Fgza%2FA8e0WehSIrXMOBMs%2FGIMCTH0ApPu%2FaSoS%2BNUhDUY8%2FEcscQkgFoNewwCAQC3HdGr%2BkObdJPx3pQfarTEuxlPvlkTpw8ZtNQcRRENWIC3hMbGDkxB7zxDxPi43f9drYEGXjMToJuTTf%2FFj%2BxWP7FIOtKBlPsJnY8oW1CZKk6mLigItQWM9kB7K9%2B3TDTx9DeW87r6B6NrhtfAAyQYlT4NYAh2bxfrJKhdCR6ds1rzoPFB%2Ft96FftP1Rb1SA90o6AZTv1zVNBEEHMLIzRtMAK4JGT1EsaCClikQDrP36gLI9jAraLLUXROkDGQyOUzsEKa2F1RgK6tRIDaBJV5zaRZO1ViDGQNGrC9QtlqhFDJvtttMPZELDztUXnV%2F2XdVC87lAGEStk8PuqbJ%2BjU1p%2Bd00tgoWi6iRmq%2FPvHw%2B5A%2FH4tL5UwtjvQjbz7BBbe5Kzktr2LUXUPWi2W%2BQG8oTCA04nKBjqkAU4PAw%2FTGclJzHeWdO2KYgfJndDTWS8g3P%2FdKTu8agPjk1pYp9NyPJTGEqQOomTCkPX8GTuyujuDdkpvFuZ8gqQmLm35sRyoOGEsCTUvhOcEnhCpKDoQInctzc8O3WzA30m6GFiSXm5p8ryDSRlxerlDDhRowB1VftR2prnld57UR2Eoi1AeEv3wf25kuMzMIXrLNeH54rquinTzrF4akcC3hGD8&X-Amz-Signature=b315b46813297b3165949b1ff3dc560f07603343c450c5735be6ae3be9a7ab5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
