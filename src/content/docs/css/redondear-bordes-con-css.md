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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWAASMLN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExnN3cQyN36JN7pKhJr4ufXbOnu%2B2TTdrGdAKaoey44AiAgxQPTYiyWjAoc0B94nWXdtGi0Hw0ADD5hVzbscxXW%2Bir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMaQQy%2FTGSFsXqHQSFKtwDWbVBUMWGT%2Bk%2FfZE3HqabwdbubdZRfufwnQqZTQ5xbzuPMltBLUTnrhIb53zWLBQtOU2pdRKqBv8ozBpK1N%2BZFq9ehdz3nwUcGf5dXxX5Lvl4IkvIAtK8oCr73wZpQgcEnZZPxy%2FX8TA6iMfxFw%2BghRSQPIONIn6hTRcfiVdyuZe9B3CrWlLK%2F3u%2Bi9aQ%2Bd5rkjFgXwS4dhgqQh1uIoB9iqBcZ3dQar5W1ittonKUrzMItqnuESuSTHcHSFddwjCpqCzL0KB6cXf%2BXv7XJhhsgShqBbgq76ACuctox7OyyUwtrKMHg8a4K2x%2FFj0U0QKMVG03Q3ukvfsWCBC%2BqO3I7Re9z9Mxjp88OlU%2F2PY6%2BtJmRWLzhDxL3bp2YVaGL2OCiLjHJqzy%2F1uxDhiQztg6JfwGWKJ4POIXPMS5%2Fu1x7piwqmm43%2FtXJhTugeUgXPoPQCfFTJ10qY9RmBBz%2BdncArzXKsqeFYCuog5RtGgdJjCY6tnUYKFC8rL9suBqeEQTOSwCKhNKMvLywJ3wcKEVLTTGHMx2%2BIy9aQ34%2Fm4ir2ilNVJs1c0J6UZliXd0kKA%2F6dILXB4BqircjYQFFlQAKhTeBQr9eEcZmn%2BwU5q2PvHziduYjmG9JKtbWIwwh57PyQY6pgElsVShw0OINYnx39qcTHuOfSm4v2vNYSVRxqLED01rVVEPFW9nNPxlI1vcRQNCuMk5ZlqpERkcxsZm27opXdSy4CEZvGnHuMzojHDahWxoMAoP%2B7X0LU6pKSkSe6FTmR%2BhmPd22xiz9hOS7FKGY%2FQ%2BFBv6WzrXYs3IFirJXAACu%2BLBXIJX5hIZxnzU2S3OLGserFrX3BnPUsukFyQoqmgW3KmQ8eiG&X-Amz-Signature=575d6a0e8de4374ce99f6291a98ef7a31d3df1984c3230feb6681fdfc458d37f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWAASMLN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExnN3cQyN36JN7pKhJr4ufXbOnu%2B2TTdrGdAKaoey44AiAgxQPTYiyWjAoc0B94nWXdtGi0Hw0ADD5hVzbscxXW%2Bir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMaQQy%2FTGSFsXqHQSFKtwDWbVBUMWGT%2Bk%2FfZE3HqabwdbubdZRfufwnQqZTQ5xbzuPMltBLUTnrhIb53zWLBQtOU2pdRKqBv8ozBpK1N%2BZFq9ehdz3nwUcGf5dXxX5Lvl4IkvIAtK8oCr73wZpQgcEnZZPxy%2FX8TA6iMfxFw%2BghRSQPIONIn6hTRcfiVdyuZe9B3CrWlLK%2F3u%2Bi9aQ%2Bd5rkjFgXwS4dhgqQh1uIoB9iqBcZ3dQar5W1ittonKUrzMItqnuESuSTHcHSFddwjCpqCzL0KB6cXf%2BXv7XJhhsgShqBbgq76ACuctox7OyyUwtrKMHg8a4K2x%2FFj0U0QKMVG03Q3ukvfsWCBC%2BqO3I7Re9z9Mxjp88OlU%2F2PY6%2BtJmRWLzhDxL3bp2YVaGL2OCiLjHJqzy%2F1uxDhiQztg6JfwGWKJ4POIXPMS5%2Fu1x7piwqmm43%2FtXJhTugeUgXPoPQCfFTJ10qY9RmBBz%2BdncArzXKsqeFYCuog5RtGgdJjCY6tnUYKFC8rL9suBqeEQTOSwCKhNKMvLywJ3wcKEVLTTGHMx2%2BIy9aQ34%2Fm4ir2ilNVJs1c0J6UZliXd0kKA%2F6dILXB4BqircjYQFFlQAKhTeBQr9eEcZmn%2BwU5q2PvHziduYjmG9JKtbWIwwh57PyQY6pgElsVShw0OINYnx39qcTHuOfSm4v2vNYSVRxqLED01rVVEPFW9nNPxlI1vcRQNCuMk5ZlqpERkcxsZm27opXdSy4CEZvGnHuMzojHDahWxoMAoP%2B7X0LU6pKSkSe6FTmR%2BhmPd22xiz9hOS7FKGY%2FQ%2BFBv6WzrXYs3IFirJXAACu%2BLBXIJX5hIZxnzU2S3OLGserFrX3BnPUsukFyQoqmgW3KmQ8eiG&X-Amz-Signature=eef702178554a7a3fde0877715716d2d977590e8bb27075ba3754a9666653dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
