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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSHTR5V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe%2BkV3V6%2BwRLk9WyWe%2FtfyGFTvw1v4RfVmJNwhIVGfJAiB9pHeVowLorieD7O%2FJUGr4YvDzsAmuK3Et8%2BBmqqzmlSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMlwEH0aMD2Wb%2BRKKoKtwDxeZix3liV%2B%2FA48413YfRMTCFNVat3fFB2yWfB0jZh99A0uuvo1%2BNgpJdvou%2BYwBOidSsIwukTk%2FEeOOdjf281lX6VE%2B%2Bj4DR%2FckLrm%2F72T7321HgM%2BQ5sF8RJItKlXkLK%2BZt3raKCdt07sjCCLCS4EFhRRIH819W%2BLjYLj5KdgL0lXNC%2BIKbrBe%2BW3Q6%2F%2Fo%2F5UkA09%2B%2BlCwkunPJ%2F%2FReg9%2FTXb8rC7qmu3%2BD4qslLZWX3DKUzFX9Aulah7czZyt%2F4ldLhWRknfMRZlYUU7DvWZwa%2BUmN2XPCu1YpksAUdTwiOli4bSR5AEIqkPIOLh0k7O0Wbm%2B7CDrva6zvKCZIIRnu2cnhlu%2BA8aO0ahS7lNLwsIPG06jyQWildAfmAWwwIwoVgZBUD6sq5gimuRQhVmeMW7V0HPRiW0Z9ArO5ChZ2mRsjjv2EgS1gBqDmayR%2FrHMPArgGe%2BzCOHQaLx35JYDEiF6gWc9y9iZ3SyRSgD8MqH3QuLdL8ZXYbYVhUj9tvtDVEwH8q%2BGyC%2FIkT1xF9xlAn0HaPKJ4K6BNCugq%2B5r%2BSmM32WtsI5sxOp26T9V8KHww8E5%2F02PyVg53abm0nNZQZ3FtxFGSQfIiGSDHleeTb5OOl4SPbWgtbZ4wps7KyQY6pgGrJAP5uwHJJ%2BA%2BKvEHiwRjil3y8Yu3iO9mekWf9OONE19v3I1imugMBMceBXJQZ8y95%2BGbo2rCCAmM8I7ibuGSwsgbrNDtoVW9Ev720jW2%2FmNR3sf%2Fw2Bm9umxsNjVrsVwhAqjmlMxWZxnf8WEmP2R7Hzf5QBLNmbw6l%2F0LgMm0vuGRJ29hpS%2FfQlvKCD%2BYOvrW%2FPGQqcS8Dkno%2BBWpicq%2FC%2BA19KN&X-Amz-Signature=c7e9e117e44ad0ca72cca1c17cb0535cfd66cf47f0a60ede0f4e7c76cb2f7a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSHTR5V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe%2BkV3V6%2BwRLk9WyWe%2FtfyGFTvw1v4RfVmJNwhIVGfJAiB9pHeVowLorieD7O%2FJUGr4YvDzsAmuK3Et8%2BBmqqzmlSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMlwEH0aMD2Wb%2BRKKoKtwDxeZix3liV%2B%2FA48413YfRMTCFNVat3fFB2yWfB0jZh99A0uuvo1%2BNgpJdvou%2BYwBOidSsIwukTk%2FEeOOdjf281lX6VE%2B%2Bj4DR%2FckLrm%2F72T7321HgM%2BQ5sF8RJItKlXkLK%2BZt3raKCdt07sjCCLCS4EFhRRIH819W%2BLjYLj5KdgL0lXNC%2BIKbrBe%2BW3Q6%2F%2Fo%2F5UkA09%2B%2BlCwkunPJ%2F%2FReg9%2FTXb8rC7qmu3%2BD4qslLZWX3DKUzFX9Aulah7czZyt%2F4ldLhWRknfMRZlYUU7DvWZwa%2BUmN2XPCu1YpksAUdTwiOli4bSR5AEIqkPIOLh0k7O0Wbm%2B7CDrva6zvKCZIIRnu2cnhlu%2BA8aO0ahS7lNLwsIPG06jyQWildAfmAWwwIwoVgZBUD6sq5gimuRQhVmeMW7V0HPRiW0Z9ArO5ChZ2mRsjjv2EgS1gBqDmayR%2FrHMPArgGe%2BzCOHQaLx35JYDEiF6gWc9y9iZ3SyRSgD8MqH3QuLdL8ZXYbYVhUj9tvtDVEwH8q%2BGyC%2FIkT1xF9xlAn0HaPKJ4K6BNCugq%2B5r%2BSmM32WtsI5sxOp26T9V8KHww8E5%2F02PyVg53abm0nNZQZ3FtxFGSQfIiGSDHleeTb5OOl4SPbWgtbZ4wps7KyQY6pgGrJAP5uwHJJ%2BA%2BKvEHiwRjil3y8Yu3iO9mekWf9OONE19v3I1imugMBMceBXJQZ8y95%2BGbo2rCCAmM8I7ibuGSwsgbrNDtoVW9Ev720jW2%2FmNR3sf%2Fw2Bm9umxsNjVrsVwhAqjmlMxWZxnf8WEmP2R7Hzf5QBLNmbw6l%2F0LgMm0vuGRJ29hpS%2FfQlvKCD%2BYOvrW%2FPGQqcS8Dkno%2BBWpicq%2FC%2BA19KN&X-Amz-Signature=a44c91cac727d61219d93281a89e7523d848029d75bbff9187841d4712b15c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
