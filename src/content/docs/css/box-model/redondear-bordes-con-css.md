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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV75457Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICO%2F7P%2FuB%2Bfef6W8gkBRHdJIuv1LlFLRi%2BX22qfynaKaAiEA21kdjoIMhuFoYafL6XdK399mUZ0j0ngtpzzmHsZK0%2BMq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDHN7Jt84a5BqTHK7XircA3TFvgke40TQEl9MolcmGAoxvepFfy9WHyFtQXf8tdY4kfwwy3f0WlWLXsWmaa05ygsm3lH78%2FTL6zIeb%2BVKGv%2FKfsbALnacgMbp%2Fog8rxS6VYjcv5kb67fzLLlmMvsojk6e13ZciFJWy7UsEj%2FS%2Furf1nI52JT8%2BipZb6UaEqLLoFsTgmwcoIoNruzSEiVzucRPreLGm55v1CzG%2B1DHXGaNUeWIbUrFsIXcvMhUK%2Fy0g%2BX9%2Fqq0uMOb7smoaFkaZtIOKctSycN2T3P0XgmvIrIELGEO%2F2p2ql4iIL90EsKZWbFCYaWptKeLZkc8nqYgdWJMxhCCpj6ks5aANHCgwHbMroj3humu20ApLnc1aMKszTsCl%2BA8XTYzlUfKuNSFjXsHQTDu8ToJnU8L2BWrMjQRHUaKqgF1tM%2FwDHSGgjm%2BH7tZWB2eQe89T2g5eio%2BtKrT9tt8Yx4E3WiQ2fQIUwFaFHo4rU1ohjkj8JX91RlKOWToy8tEfPIcgrHAj3cCB%2BmMzgD2rJWOz4zbBZ7Lm%2BA%2FDcfOvqYbaC3JRLi%2B67ARWy1fsAFfxAQWdSG3RKHttRf%2Bu2GA7VXvXrnELR%2F4z%2BAJlahzaXZL8MzLXjk%2BEjf2XIu4rPO8F33Ihm4xMIWrisoGOqUBN3%2BdcA89BKcCEdF19X%2F0LpjoEEKD5PHUp4Kwx%2BO5j1IHc5LkCCT3K8aLc%2FAg9%2FNUxH%2B6Ojt6Mn1qzZq4GEvO69FpMSm63rXlJUKYcOWSg0Ax1SwILGtmfdp9z3VCe0%2BIEuAH%2BglQzR526tUHOkQDO7MEcNRkFyj%2F%2FrZJxF%2FxHYBG5QTgPy0K4r%2BIQ2Ly6kNekPMOV%2BVoBRXsmnNIlr47hTp%2FOk1w&X-Amz-Signature=ec26d755817cba90d2c7493d48eb6b5e55a119612bd5c7190ba5fad639af5c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV75457Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICO%2F7P%2FuB%2Bfef6W8gkBRHdJIuv1LlFLRi%2BX22qfynaKaAiEA21kdjoIMhuFoYafL6XdK399mUZ0j0ngtpzzmHsZK0%2BMq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDHN7Jt84a5BqTHK7XircA3TFvgke40TQEl9MolcmGAoxvepFfy9WHyFtQXf8tdY4kfwwy3f0WlWLXsWmaa05ygsm3lH78%2FTL6zIeb%2BVKGv%2FKfsbALnacgMbp%2Fog8rxS6VYjcv5kb67fzLLlmMvsojk6e13ZciFJWy7UsEj%2FS%2Furf1nI52JT8%2BipZb6UaEqLLoFsTgmwcoIoNruzSEiVzucRPreLGm55v1CzG%2B1DHXGaNUeWIbUrFsIXcvMhUK%2Fy0g%2BX9%2Fqq0uMOb7smoaFkaZtIOKctSycN2T3P0XgmvIrIELGEO%2F2p2ql4iIL90EsKZWbFCYaWptKeLZkc8nqYgdWJMxhCCpj6ks5aANHCgwHbMroj3humu20ApLnc1aMKszTsCl%2BA8XTYzlUfKuNSFjXsHQTDu8ToJnU8L2BWrMjQRHUaKqgF1tM%2FwDHSGgjm%2BH7tZWB2eQe89T2g5eio%2BtKrT9tt8Yx4E3WiQ2fQIUwFaFHo4rU1ohjkj8JX91RlKOWToy8tEfPIcgrHAj3cCB%2BmMzgD2rJWOz4zbBZ7Lm%2BA%2FDcfOvqYbaC3JRLi%2B67ARWy1fsAFfxAQWdSG3RKHttRf%2Bu2GA7VXvXrnELR%2F4z%2BAJlahzaXZL8MzLXjk%2BEjf2XIu4rPO8F33Ihm4xMIWrisoGOqUBN3%2BdcA89BKcCEdF19X%2F0LpjoEEKD5PHUp4Kwx%2BO5j1IHc5LkCCT3K8aLc%2FAg9%2FNUxH%2B6Ojt6Mn1qzZq4GEvO69FpMSm63rXlJUKYcOWSg0Ax1SwILGtmfdp9z3VCe0%2BIEuAH%2BglQzR526tUHOkQDO7MEcNRkFyj%2F%2FrZJxF%2FxHYBG5QTgPy0K4r%2BIQ2Ly6kNekPMOV%2BVoBRXsmnNIlr47hTp%2FOk1w&X-Amz-Signature=27ef7afc61215def7f55e7bd7cc0d5b341cac9df267564b190560aa942cc82a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
