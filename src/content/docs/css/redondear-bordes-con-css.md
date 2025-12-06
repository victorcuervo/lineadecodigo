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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWEBQJDW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7p0ne3AC6j7wakC%2FMf2A%2Fi6Q5zhhA9AheEoUeupS8mAiAzJk0mzzrrehMz%2Bzd3PcOQ%2BYg7xqFLm4ELoG6Osde55ir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMIAMsr3I0eTQn%2Bg24KtwDSwuO2Jj2d%2F9VdXJVPkKL5JXT%2Bn7S05aczvmXI0CoJQzXGP4kS605t2Gx9Brb3WUZM4L0u%2FDJJSFMzcHnaDQ66KTAMqQ5ug8aIueMzGMhtae2047ZWfU3b%2BJmrgtnIgagwR4qncUQobUHpAGfO%2Bo5xzWJsRhJHl0lC8HwPDKlz%2BmYdA3bHDspeMmLwca0Dk51NVoquPdfZ5nwkOVAAUQ%2FA94%2F%2F8lgDvmuFPFroU3nrvQRKyfyhLY2hHRudU0EOARnSoKTM2ae6NSbMvhF65QebOigzB8yHeBqKWJXaGX%2F%2Fr87rNEYK6AVHzJ5JU%2FzJWLEHpXh7CIHtIzUJLkMpzIeiTNBEizmGbb1ASAwVwbOuZsFJAADJzrNaVQrvjFhzdHYlK4oTQqnqNbKVydrML%2B0CSBeOLdMvmhiSpqOUq5nunHsmgie1lZ11gogv%2B3AgELJTWThlpaLS98bqVwC199PiiAHyPSjt%2FnJ4KXl4L7jIQEXldxuZ84hl1LQ%2BjopnrxrsHdGFLp7y8FNu8IStgncetK8l913oCmnNA3TKLE0n6p9%2BgDTTN3M6UOO7NVcijC%2BdVwJvbjpG7m2QwEp16Ny3TJBdUY%2BhYIY3zAv90Zphs%2FVnqLbw4Cfc4UTb5swyszRyQY6pgHqKW8RgPYy6osTS4aPCoz0ZhjVq3MU8yKdrYW0A5MNX4D%2FwmYgh7tO6eyMo7Cixb8xK415tlgaaYeMJ02yDxrcp76dIQCLwygO%2BXPfds4pWruP8k0ZONCXM%2BdiEA7JTELDQ4GAgaRGWh4%2FHujZayApGfkN3YvBV1%2BLNMHC8v%2F%2FSbxOsSd2HDcFK5Zz6n7Ql0HQRTTHXifGLBcWh6InwK%2FjlHU32dsT&X-Amz-Signature=4efb30c2b3b4dc222992f91979d2de2cbb72d9a14594f2f08df557ce358750f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWEBQJDW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7p0ne3AC6j7wakC%2FMf2A%2Fi6Q5zhhA9AheEoUeupS8mAiAzJk0mzzrrehMz%2Bzd3PcOQ%2BYg7xqFLm4ELoG6Osde55ir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMIAMsr3I0eTQn%2Bg24KtwDSwuO2Jj2d%2F9VdXJVPkKL5JXT%2Bn7S05aczvmXI0CoJQzXGP4kS605t2Gx9Brb3WUZM4L0u%2FDJJSFMzcHnaDQ66KTAMqQ5ug8aIueMzGMhtae2047ZWfU3b%2BJmrgtnIgagwR4qncUQobUHpAGfO%2Bo5xzWJsRhJHl0lC8HwPDKlz%2BmYdA3bHDspeMmLwca0Dk51NVoquPdfZ5nwkOVAAUQ%2FA94%2F%2F8lgDvmuFPFroU3nrvQRKyfyhLY2hHRudU0EOARnSoKTM2ae6NSbMvhF65QebOigzB8yHeBqKWJXaGX%2F%2Fr87rNEYK6AVHzJ5JU%2FzJWLEHpXh7CIHtIzUJLkMpzIeiTNBEizmGbb1ASAwVwbOuZsFJAADJzrNaVQrvjFhzdHYlK4oTQqnqNbKVydrML%2B0CSBeOLdMvmhiSpqOUq5nunHsmgie1lZ11gogv%2B3AgELJTWThlpaLS98bqVwC199PiiAHyPSjt%2FnJ4KXl4L7jIQEXldxuZ84hl1LQ%2BjopnrxrsHdGFLp7y8FNu8IStgncetK8l913oCmnNA3TKLE0n6p9%2BgDTTN3M6UOO7NVcijC%2BdVwJvbjpG7m2QwEp16Ny3TJBdUY%2BhYIY3zAv90Zphs%2FVnqLbw4Cfc4UTb5swyszRyQY6pgHqKW8RgPYy6osTS4aPCoz0ZhjVq3MU8yKdrYW0A5MNX4D%2FwmYgh7tO6eyMo7Cixb8xK415tlgaaYeMJ02yDxrcp76dIQCLwygO%2BXPfds4pWruP8k0ZONCXM%2BdiEA7JTELDQ4GAgaRGWh4%2FHujZayApGfkN3YvBV1%2BLNMHC8v%2F%2FSbxOsSd2HDcFK5Zz6n7Ql0HQRTTHXifGLBcWh6InwK%2FjlHU32dsT&X-Amz-Signature=567e2865f6205008ee5fa531413c91c27ee14f9ef1b6d4b5f90d82356229b31c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
