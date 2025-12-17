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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F4PUV7L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD82BULj324UN%2BzOlpo%2BddgY%2BG81G%2B5a7dXJZ0weaU%2BUAIgGgg9ehEiaououNUJGgrhW9JqjVt2d4OrYDg6mOk3BNMq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMZE%2Bw2jf5dTXusWyircA7YyWXuCsB2vl%2BUA3XgUEo4SQN7wylSrWY7M4NfaPF8Vo8cuBqgKePAsnS2ONpsS3Ssi%2Bu3b1wQC5IWX1A0PBucfQla%2F4ZhJAuECPzVSCrhkwHZYSrq%2BHJqbG2%2FR%2Bj0%2Bd6EhOt3jer1rMnytGBnXo9nwzkH7FmBK5w6rMAzp4Rp4ctj39eu1RocDaIIIRNrnGtNTz9udR5i2Nv9CnCjcIWWACdVI9uahio4nOoq%2FCKFlu%2FDouzNZOYvtF0ECcGQ8p2z9MuSebWvFDs0XVLJjlS9uVto4ZhOO%2Fzj9G0e3zOkk8zpttlbtCEO%2Fbhj8OAdcfGbeOsx%2FM%2BeRPGOSce3x141bW9kHbtDV2d1GQSCjziJN%2BIQXnrx1ZLpU0qf8igchuQqiRVsRCZXtSshRPvuWktmyNqCwdE9mUBYeNpQInpXJ%2BWYKHAIxoTHF7EN98Qrd15dNMGe9qCIodS4Q8hKwFT%2B52kjeijFZoxDpNYlZkAy654F2q2l%2FRqu8ChsbnEZt6AfcA0dBdCDAdz9LKXEI3aPo6uU8VbhKuqkqiK44GfmpW2A0ybNUcH6gl2AukqN1EEQOOXuxVVr%2BXAvDBJxRjgECfheMPr%2BGYwbu2mL5qLUUOkcq1sLOuqur3dOjMMqyiMoGOqUBCyLvKCw%2FM%2F2zSoDGa09206IO2P4ikS1rZQDGqXbM0g3dFO%2FXkFesbDmzEUVZauO92fpXBrauNmqQjxHSv%2FYpsOQ2gUBqFUG1IllK6EVn33FX7y2D7SL8OXHogWF9plaqU2afikcrJlLs4ZWE3fV0Jz5j5UOeuZCP1jUi2a8mn8fsO%2B0YqXV7VJFvPV15JmrXZ8P2djEfBE9C7ZOCEL4Lz7kl56X9&X-Amz-Signature=bbc31a0a4e825e3a8abc4ca528d327ad55661fde9a27bbc2221c2ed0a4521c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F4PUV7L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD82BULj324UN%2BzOlpo%2BddgY%2BG81G%2B5a7dXJZ0weaU%2BUAIgGgg9ehEiaououNUJGgrhW9JqjVt2d4OrYDg6mOk3BNMq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMZE%2Bw2jf5dTXusWyircA7YyWXuCsB2vl%2BUA3XgUEo4SQN7wylSrWY7M4NfaPF8Vo8cuBqgKePAsnS2ONpsS3Ssi%2Bu3b1wQC5IWX1A0PBucfQla%2F4ZhJAuECPzVSCrhkwHZYSrq%2BHJqbG2%2FR%2Bj0%2Bd6EhOt3jer1rMnytGBnXo9nwzkH7FmBK5w6rMAzp4Rp4ctj39eu1RocDaIIIRNrnGtNTz9udR5i2Nv9CnCjcIWWACdVI9uahio4nOoq%2FCKFlu%2FDouzNZOYvtF0ECcGQ8p2z9MuSebWvFDs0XVLJjlS9uVto4ZhOO%2Fzj9G0e3zOkk8zpttlbtCEO%2Fbhj8OAdcfGbeOsx%2FM%2BeRPGOSce3x141bW9kHbtDV2d1GQSCjziJN%2BIQXnrx1ZLpU0qf8igchuQqiRVsRCZXtSshRPvuWktmyNqCwdE9mUBYeNpQInpXJ%2BWYKHAIxoTHF7EN98Qrd15dNMGe9qCIodS4Q8hKwFT%2B52kjeijFZoxDpNYlZkAy654F2q2l%2FRqu8ChsbnEZt6AfcA0dBdCDAdz9LKXEI3aPo6uU8VbhKuqkqiK44GfmpW2A0ybNUcH6gl2AukqN1EEQOOXuxVVr%2BXAvDBJxRjgECfheMPr%2BGYwbu2mL5qLUUOkcq1sLOuqur3dOjMMqyiMoGOqUBCyLvKCw%2FM%2F2zSoDGa09206IO2P4ikS1rZQDGqXbM0g3dFO%2FXkFesbDmzEUVZauO92fpXBrauNmqQjxHSv%2FYpsOQ2gUBqFUG1IllK6EVn33FX7y2D7SL8OXHogWF9plaqU2afikcrJlLs4ZWE3fV0Jz5j5UOeuZCP1jUi2a8mn8fsO%2B0YqXV7VJFvPV15JmrXZ8P2djEfBE9C7ZOCEL4Lz7kl56X9&X-Amz-Signature=12f91908b41bdba3e2e74522e22d340d1a66452102e34f5652fadeb82abe5fc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
