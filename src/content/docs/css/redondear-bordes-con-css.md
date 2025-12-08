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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VXHM4XC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3HQ%2BonVHen%2Fc8bxgPAsGFNP4Fs5oAqDIxVsN%2BQLQ60AiBIIvTX2DAOW1IB%2BrOO95HEGH9BYCKLRku9AbjQ284FRiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7sTtElisM8bHADwhKtwD2mv%2F8I%2FzwHr3MS%2BCwGBLVQolCt5rHIzWxDApHjQgkhVMb006uul0%2BUpfxfyhKkgGz2KDgUYJQipnaJumEzDd3ygFN09dBsEk6cSF%2B14fUTCrqZ%2BymGlZWXfmxSZ0SEySGf68El3L1971E3Hd7gw19lQITTr5d6PTaZ97pc%2B2mdXK4q8u4aGF3Itnp1A3iUGw5zeW4ld5Ma37PHHNavDVEuAKGLxJW1xhEwFrVsClNmsufwCQhYIpBjVzVMQVANv1%2FuWZ6njyXEKlLXJ8ETLjlO7h7Q8%2BBCARjZu1fQg4MqO%2FfGZsGgkl2ulFhMq30bPNG%2BYdKURbjTKOrGni6LX5Dvhtk8njdF3hak2zVFLx9WtFhwWS5dMPBlxA7qm%2B5XnAVKzsz8DMnn4xTsDajPqGkpriF90kOfNr768ubYl6uSOAT3Ionq4vY77AA5kL39HKeY9BUNPRXeLL6j4POSbCvjB782aIGtZQt%2B1QsOp73dpP0XWiP2HykOooopBVY%2BhUCQb9r7%2FDhJSj7yIgpet%2FQMLM0pZhZZLU431QP7b4BMHPh5FwWKy5GFxyUprAG4HQ42na9mj1scq0wdQECmhLV0PxGpBzgaUeB2yENy0ulWO%2B8YGMXoIifMqjm14wsO%2FYyQY6pgFw0edTfziHQ%2B%2FYLOcOL6%2FZLxKxJ%2FInoi%2FTSt3p74jzP9KE4M7vDA6Ug%2BlXNp%2FfTM0j3fCRonNls8woL%2BRn42srdkLCDNxR9qDupx7b%2BIqYMBKaLvsVQruBYUyV9K8Y3y65uOBhYd6EYcFcZ2z9WhZo81lsFfFt1swPNmIp89Ob44eoGchQBGitrLMHyyiA892oEIIfqh%2BQwdM996QywcNKbd5zTUFc&X-Amz-Signature=6ad043ae899ef49fc62fd7a79b3ac5f1a0773dced4b408fdf8bea94e87170616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VXHM4XC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3HQ%2BonVHen%2Fc8bxgPAsGFNP4Fs5oAqDIxVsN%2BQLQ60AiBIIvTX2DAOW1IB%2BrOO95HEGH9BYCKLRku9AbjQ284FRiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7sTtElisM8bHADwhKtwD2mv%2F8I%2FzwHr3MS%2BCwGBLVQolCt5rHIzWxDApHjQgkhVMb006uul0%2BUpfxfyhKkgGz2KDgUYJQipnaJumEzDd3ygFN09dBsEk6cSF%2B14fUTCrqZ%2BymGlZWXfmxSZ0SEySGf68El3L1971E3Hd7gw19lQITTr5d6PTaZ97pc%2B2mdXK4q8u4aGF3Itnp1A3iUGw5zeW4ld5Ma37PHHNavDVEuAKGLxJW1xhEwFrVsClNmsufwCQhYIpBjVzVMQVANv1%2FuWZ6njyXEKlLXJ8ETLjlO7h7Q8%2BBCARjZu1fQg4MqO%2FfGZsGgkl2ulFhMq30bPNG%2BYdKURbjTKOrGni6LX5Dvhtk8njdF3hak2zVFLx9WtFhwWS5dMPBlxA7qm%2B5XnAVKzsz8DMnn4xTsDajPqGkpriF90kOfNr768ubYl6uSOAT3Ionq4vY77AA5kL39HKeY9BUNPRXeLL6j4POSbCvjB782aIGtZQt%2B1QsOp73dpP0XWiP2HykOooopBVY%2BhUCQb9r7%2FDhJSj7yIgpet%2FQMLM0pZhZZLU431QP7b4BMHPh5FwWKy5GFxyUprAG4HQ42na9mj1scq0wdQECmhLV0PxGpBzgaUeB2yENy0ulWO%2B8YGMXoIifMqjm14wsO%2FYyQY6pgFw0edTfziHQ%2B%2FYLOcOL6%2FZLxKxJ%2FInoi%2FTSt3p74jzP9KE4M7vDA6Ug%2BlXNp%2FfTM0j3fCRonNls8woL%2BRn42srdkLCDNxR9qDupx7b%2BIqYMBKaLvsVQruBYUyV9K8Y3y65uOBhYd6EYcFcZ2z9WhZo81lsFfFt1swPNmIp89Ob44eoGchQBGitrLMHyyiA892oEIIfqh%2BQwdM996QywcNKbd5zTUFc&X-Amz-Signature=c558f2acaf6b2e46faf7681b7a7aae04367ef14c640eee4e6cfd948fa80a3d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
