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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNOHQ2YD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0OKheIJAfLD1za%2BFzwO%2FQ7hH5dTovk%2BkCrXCper9OMwIgSYoI45OIyo7UdwoJCT%2FlJukoi8gcMlzN3JDDlwIciacqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP6sd%2B%2B7c64z0QLZircA5%2BWMfPjblLDyc%2F6OyaPA3xu9h%2BilKSkctVs8a0PD77KTvkd5qhT9TIwORXFysW14BD4WBchBL%2B7TBwL6CK51dTIpX8hQmWcf1Jy3V%2BiI79qCaah53dUaDF3tJ8N%2BqvNKh8vlBrnmce3f3PCcXUPuEu%2BRCHx%2FdTev%2FZhV7hlBrQZ1Lv4%2BJndMMTvDYODjfTB%2Fl0SaH1DH4YVMGe4OUzL1Q8oufPWS28gCAg%2FoZpOhiaG0IK8qZmT7HcDomVcS2rUU%2BJae4fGAcxffVcQVsEQSbidT6wDiMU7Qh8E8%2FKOh5NcUfP0JmOIHzOWiynSom0JBnxqPZQnc4UKCrx%2BkhAgZDdI0pTyOxxNbJGCgRhT7E7yfZX826uurjHS466CdwudmJ5HptAmuYhECu7dfeZIGnq1UXrKy4TmX1EnO7JJiEuIU3g5j5CXQCnumoisyqDlfPJlknCOgs%2FRFr4lINcgPMdCSz4DRgB6RMpMwUt9Ji8Je%2FKX0vkDYiDKV7mfdc0xPVN%2BRGRP0cA9Oh7auhi53CzTxXOh4bH%2BchBmJHwlDEHVSguHJip%2Fkr%2FO2HwDt5%2F7Bs6sUR5Or2BHCEY9fkFMtOQb1D%2Bywxp281LrPQzetqzl069b1QfZMt4rEyt0MIn90skGOqUB41DLgsPpJXM5w4%2BFUUqfTUPEIC8oCfxKYHmcq7mBLfLw8BcQ%2F9Z1F2O2v2dBNL%2FIKtM094Y%2BeNC8V2uhjGKN3D7jdfK4fv94AAX3SPtJY1kkqM2M4NhWFPJ0dzBMCV%2FNmsBn1zeI5huo3S52CQGFc9tQsffeggAKGoaEgf7BkfDD629wB0rFNm17Wd6vW2j6d8E0SkBYBOulwPARP757W1H1vpmd&X-Amz-Signature=9218d47e2193bdbe79ff4ff4c6140daac62611623322807650b590c7eea0aafc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNOHQ2YD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0OKheIJAfLD1za%2BFzwO%2FQ7hH5dTovk%2BkCrXCper9OMwIgSYoI45OIyo7UdwoJCT%2FlJukoi8gcMlzN3JDDlwIciacqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP6sd%2B%2B7c64z0QLZircA5%2BWMfPjblLDyc%2F6OyaPA3xu9h%2BilKSkctVs8a0PD77KTvkd5qhT9TIwORXFysW14BD4WBchBL%2B7TBwL6CK51dTIpX8hQmWcf1Jy3V%2BiI79qCaah53dUaDF3tJ8N%2BqvNKh8vlBrnmce3f3PCcXUPuEu%2BRCHx%2FdTev%2FZhV7hlBrQZ1Lv4%2BJndMMTvDYODjfTB%2Fl0SaH1DH4YVMGe4OUzL1Q8oufPWS28gCAg%2FoZpOhiaG0IK8qZmT7HcDomVcS2rUU%2BJae4fGAcxffVcQVsEQSbidT6wDiMU7Qh8E8%2FKOh5NcUfP0JmOIHzOWiynSom0JBnxqPZQnc4UKCrx%2BkhAgZDdI0pTyOxxNbJGCgRhT7E7yfZX826uurjHS466CdwudmJ5HptAmuYhECu7dfeZIGnq1UXrKy4TmX1EnO7JJiEuIU3g5j5CXQCnumoisyqDlfPJlknCOgs%2FRFr4lINcgPMdCSz4DRgB6RMpMwUt9Ji8Je%2FKX0vkDYiDKV7mfdc0xPVN%2BRGRP0cA9Oh7auhi53CzTxXOh4bH%2BchBmJHwlDEHVSguHJip%2Fkr%2FO2HwDt5%2F7Bs6sUR5Or2BHCEY9fkFMtOQb1D%2Bywxp281LrPQzetqzl069b1QfZMt4rEyt0MIn90skGOqUB41DLgsPpJXM5w4%2BFUUqfTUPEIC8oCfxKYHmcq7mBLfLw8BcQ%2F9Z1F2O2v2dBNL%2FIKtM094Y%2BeNC8V2uhjGKN3D7jdfK4fv94AAX3SPtJY1kkqM2M4NhWFPJ0dzBMCV%2FNmsBn1zeI5huo3S52CQGFc9tQsffeggAKGoaEgf7BkfDD629wB0rFNm17Wd6vW2j6d8E0SkBYBOulwPARP757W1H1vpmd&X-Amz-Signature=78ac575d5d0d2df519e7b53be02d70af4dcfca97ffa81885a4d6fed58501840b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
