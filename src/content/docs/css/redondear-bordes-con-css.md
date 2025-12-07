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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRRYOPAK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMQkFjYPmLNefz5GNCcthlqhArWdSQwX0poJrgay73XAiBGA2MCN1DVfesshtBh5izl78ywNhGSL8vXdOYN5YJKASqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3H0yivyf64Dd2qswKtwD%2BCbSmrPdbImSluBM2YStDTE%2BpsKqHCxdDt%2By2FrMG4wGCh60ySD7Wefh7RHPD0hVIsCvtKyI5HLLVVCDHh9DMzinVnlzlL7YEAEqlzZjp3rhUezkvbpy%2BFZUu0PVgvugPlIEZY7gb8ngDujis%2FNs7qjtowSIhrnDaFEOrKrdkSuOE8MQL4HMcjA16u1B6Xx%2F3eA5RBcpPVItKR7KUg8k5pfmFKPJjm7bgyAT27cHbj4pQ7dx3KEIjffOQmmTwQmjLf1dCDPwMCj63v0My8cENMitv7kGEuN%2FdS4bytaol5IKEYoOPI3P9rnKMHrQh1Yjeo6KmY1X%2B8sFMY2ICuz8amFHp9MloHc2NgBMwBdOkuEH9i0elb7Rk5MlgQr71BhJAEbD35Su1WRRUNL77jo6jkQubgxsukYCLtbUXcNZISHIsTNi2J9wTQWwyJj47KZgIts1BiTnIcXSIcYWfxkjSQU1KvmLbQ7bAre0yZfyH6qkMvwsnOnqMSy9Fq21za%2FX3dVERKJsWtyxO6KcGyV9nEqyhGNTG5C8oy77AJblpzCIxKxWPtYJBIL6bV7HNpHOsO0w0l1XRhOo0JF9XwllaH0H%2F2CaLFCU3%2Bj6tdz9NmE8UCbY2LMGPWzwCCYwz7vWyQY6pgG%2BjuhOFikxKtk%2FonZ392KVDizXDiSTsc0bhU%2FCMFFTwLxn7xW6kVSHpUQw4BIlwzcXjAWYJJjwv3o8aDvXqGuC7MTll1vN5ClU4h67gg2Jiwl1pkABdzAMaUaWe2CU4eL3Zw49qGAdWdtlfSDSU%2Fl9n6Q%2FPZ%2FXcrisCoq1B9WstQFhd4UXrRVl1S6Kn9a%2BO1Cjw7YLT97KP%2BRbG8VMbVRtpQ3xeyiJ&X-Amz-Signature=94ee8380a23a0ecab58a21cfc9ac05e64ffba2d32cab1014f68081473ff54ce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRRYOPAK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMQkFjYPmLNefz5GNCcthlqhArWdSQwX0poJrgay73XAiBGA2MCN1DVfesshtBh5izl78ywNhGSL8vXdOYN5YJKASqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3H0yivyf64Dd2qswKtwD%2BCbSmrPdbImSluBM2YStDTE%2BpsKqHCxdDt%2By2FrMG4wGCh60ySD7Wefh7RHPD0hVIsCvtKyI5HLLVVCDHh9DMzinVnlzlL7YEAEqlzZjp3rhUezkvbpy%2BFZUu0PVgvugPlIEZY7gb8ngDujis%2FNs7qjtowSIhrnDaFEOrKrdkSuOE8MQL4HMcjA16u1B6Xx%2F3eA5RBcpPVItKR7KUg8k5pfmFKPJjm7bgyAT27cHbj4pQ7dx3KEIjffOQmmTwQmjLf1dCDPwMCj63v0My8cENMitv7kGEuN%2FdS4bytaol5IKEYoOPI3P9rnKMHrQh1Yjeo6KmY1X%2B8sFMY2ICuz8amFHp9MloHc2NgBMwBdOkuEH9i0elb7Rk5MlgQr71BhJAEbD35Su1WRRUNL77jo6jkQubgxsukYCLtbUXcNZISHIsTNi2J9wTQWwyJj47KZgIts1BiTnIcXSIcYWfxkjSQU1KvmLbQ7bAre0yZfyH6qkMvwsnOnqMSy9Fq21za%2FX3dVERKJsWtyxO6KcGyV9nEqyhGNTG5C8oy77AJblpzCIxKxWPtYJBIL6bV7HNpHOsO0w0l1XRhOo0JF9XwllaH0H%2F2CaLFCU3%2Bj6tdz9NmE8UCbY2LMGPWzwCCYwz7vWyQY6pgG%2BjuhOFikxKtk%2FonZ392KVDizXDiSTsc0bhU%2FCMFFTwLxn7xW6kVSHpUQw4BIlwzcXjAWYJJjwv3o8aDvXqGuC7MTll1vN5ClU4h67gg2Jiwl1pkABdzAMaUaWe2CU4eL3Zw49qGAdWdtlfSDSU%2Fl9n6Q%2FPZ%2FXcrisCoq1B9WstQFhd4UXrRVl1S6Kn9a%2BO1Cjw7YLT97KP%2BRbG8VMbVRtpQ3xeyiJ&X-Amz-Signature=a522eb07d034d47369927e17407d5bee530b6dd07e6598385f41defd1f033f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
