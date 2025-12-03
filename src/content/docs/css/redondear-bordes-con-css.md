---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMTWVKDR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDAhMXC7%2FWoHBgM%2FEu97JKAYXmvUaerEc4Ee37WTmzUSwIhALtr356kJZZgfGLYAXbcjo%2F2N19uwKMdbhiOZ%2Fq6q75EKv8DCDcQABoMNjM3NDIzMTgzODA1IgzqqJRrQMI2chSJEYAq3APQ7xpBl6%2BlKFHw6Wm1VgxktovP47TsHk1H2%2FWM5JPstOUDTkI5AXzQnNumCT2mcgIX%2FUJDRk6PkukmAU3y9SL0CkaUezdyAU3UgcjQQrklHQHxpF5jJouGO%2Fwvzk7lZbgojRtvpOTjuzKUArUt%2BWpeBIMvuiMeFI5GYjHdj66kqyGkqROtEztK4z%2FzPmnyc%2FpZNpXswJtwy32onxVCR3tEXy%2BJEF%2FZWWy9LTVodqLvSmyL9Jqe1JSTEWQbrRt%2FUC7pYdVpwIy%2FKEyBfGFrYCNJvQaTMdyL69q5Vkb5WoQdc8eDSptk6XU%2B9kVRBm4S%2Fv0hEXS6wF8vZ%2FLzOEb%2FgC89NfP7D1oijd6MRtoWn5hSD7lM%2FwwGBkP6Y%2BgvXSTLoMN%2BP53zG5i1NSUWhZUUlCfZPSwk6tMaZ7dtBH34mfDgTeVMt1P4UWSvDEHVRCevr1b%2BeETLrdwExrNPqezFEcHKYVNKQaeH%2BU0BcEDgiKPCbHjTX8gnadKSx%2FaFvR0uUdpFpZCpsnzKpJosxfSyBvYu%2FSkgh1LNy1Emmv%2F7MlBKienchd8wLLzjuz%2Bj58glEdLXpJEZuHHXvMGJ02tucoz1PTa9h8Q4SzgGbMirzJfViRZ1ehYfOjvNg5oTKzDp3MLJBjqkAZe9h8XOXLQTRwmwGlXVem6VFe6YnfzvwC6ZtyMORuqWP6cnRnrs6cROY0%2BVAgMLkq0EtscEav9py7CrgXn4qhV%2BYO7tlkv7hinnK3L0oRnXxqc3e0f0c3NE98uOMOsLjjWRpegb1rw6sajQ9TaoTXBMrHkTZINLd4vr%2BjDTj%2B0355PB3w4J4svYQSW31mvjBqNlifANoBsQoYQDKtlnmvyqxv25&X-Amz-Signature=cefe1f3ac5e443d83d91398dd81aa64e5e2c1bc23adf7fefd421c958baa0c00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMTWVKDR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDAhMXC7%2FWoHBgM%2FEu97JKAYXmvUaerEc4Ee37WTmzUSwIhALtr356kJZZgfGLYAXbcjo%2F2N19uwKMdbhiOZ%2Fq6q75EKv8DCDcQABoMNjM3NDIzMTgzODA1IgzqqJRrQMI2chSJEYAq3APQ7xpBl6%2BlKFHw6Wm1VgxktovP47TsHk1H2%2FWM5JPstOUDTkI5AXzQnNumCT2mcgIX%2FUJDRk6PkukmAU3y9SL0CkaUezdyAU3UgcjQQrklHQHxpF5jJouGO%2Fwvzk7lZbgojRtvpOTjuzKUArUt%2BWpeBIMvuiMeFI5GYjHdj66kqyGkqROtEztK4z%2FzPmnyc%2FpZNpXswJtwy32onxVCR3tEXy%2BJEF%2FZWWy9LTVodqLvSmyL9Jqe1JSTEWQbrRt%2FUC7pYdVpwIy%2FKEyBfGFrYCNJvQaTMdyL69q5Vkb5WoQdc8eDSptk6XU%2B9kVRBm4S%2Fv0hEXS6wF8vZ%2FLzOEb%2FgC89NfP7D1oijd6MRtoWn5hSD7lM%2FwwGBkP6Y%2BgvXSTLoMN%2BP53zG5i1NSUWhZUUlCfZPSwk6tMaZ7dtBH34mfDgTeVMt1P4UWSvDEHVRCevr1b%2BeETLrdwExrNPqezFEcHKYVNKQaeH%2BU0BcEDgiKPCbHjTX8gnadKSx%2FaFvR0uUdpFpZCpsnzKpJosxfSyBvYu%2FSkgh1LNy1Emmv%2F7MlBKienchd8wLLzjuz%2Bj58glEdLXpJEZuHHXvMGJ02tucoz1PTa9h8Q4SzgGbMirzJfViRZ1ehYfOjvNg5oTKzDp3MLJBjqkAZe9h8XOXLQTRwmwGlXVem6VFe6YnfzvwC6ZtyMORuqWP6cnRnrs6cROY0%2BVAgMLkq0EtscEav9py7CrgXn4qhV%2BYO7tlkv7hinnK3L0oRnXxqc3e0f0c3NE98uOMOsLjjWRpegb1rw6sajQ9TaoTXBMrHkTZINLd4vr%2BjDTj%2B0355PB3w4J4svYQSW31mvjBqNlifANoBsQoYQDKtlnmvyqxv25&X-Amz-Signature=563a3666daa81909d00835b5fb5024e34087bf67f84dc420b4f0b69781365e48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
