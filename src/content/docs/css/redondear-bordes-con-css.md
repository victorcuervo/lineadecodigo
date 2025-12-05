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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7OLH4B%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuZ9D3vpnLm%2B3iQ0UXYS9hW2fxvWIfJmzk%2BjDFUGXVVAiAHgpCd6fAQ66h%2BWjQWofKfK15nOF9x%2Bt2I%2FM4FxcKNlSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMflM7QMx%2BYRFQ4hVkKtwD598%2FbPyKJdTKMiuZFuDn3nI3Ccb4sSRwhxUtgC70TDjE9IBBCZSJngAVTDof2CkVTHc4g4ZVzOIbk88Ae3JStG%2FOg5zocuyEpZLfbu3VrVuUnznY%2F0Wd3YqpL0B3pXxCEs%2BZsf8G6zMDV%2BPQxtvJFvm0Eeyih0zee5TEWEbV7UtDZOyVrA7mR9s73f%2BeqO7WAZrTEAqpRw0Lm5aPGqwAxLckgzlJoVeSFLTVnog6r4mIQBcVY1F%2Fs%2Bws1lZFbL%2F8Hazay1Zob60LXeHoSssk%2BYdQ6MMhN%2BuYmfUAzEeByNL%2BiFEBX195ZVKm0nbOBFF%2FeLJhVFyNn9vFRrdo2EyIE672gZZsSVYzcBoPIrEFqObCeWGtEGVnjNnmk%2BC9YbvFhM8fknW6WA%2BSXqLYsEZYlw7rgWKeltsXvTOM%2B6326EhY0FO%2FIe4Gp4asDmQCMLyIwfhgl4aSUY41EyfPMkaLh5LlXJAti7WbovO%2BcFQbfzbr8SJ1Lrm5MMs9G28a943yb3bEjVnik0onrUeoZT8BCL5hLoGP5ZXHJbj9h9VGlbTTGtVS%2FsUaYPUUe6HSEougjDdnN5cYjCdW6FdzE6QQHFT7riM4Igii%2F29HzCl%2Ba6U8k7GbSXkuJAcwbXownuLLyQY6pgFsqJCPQpFp3DKP6QQIXnIzgqPrDW5ikExJ7cF2eN1%2FJFhzgpbsEhnIiTeNSb8Kqdl442xz3zQdSwJVJsg924HotLTp%2FCdniin17YRNvwVgIsqfnEQvZHokegfxQB63XBiMJixubIdbBY0yY%2FlQqJ8qgSGBSsC5Y%2BEXsRyX8RN2AZmqo7SIbYYpO3MDjOB6uB1OQhHcJYMRSXvJFiNYa%2B5HMENDTZLr&X-Amz-Signature=4b896efebc9dd12c4bc68d4d4d449c5491da520bdd47373d9ad646f2e29e2ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7OLH4B%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuZ9D3vpnLm%2B3iQ0UXYS9hW2fxvWIfJmzk%2BjDFUGXVVAiAHgpCd6fAQ66h%2BWjQWofKfK15nOF9x%2Bt2I%2FM4FxcKNlSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMflM7QMx%2BYRFQ4hVkKtwD598%2FbPyKJdTKMiuZFuDn3nI3Ccb4sSRwhxUtgC70TDjE9IBBCZSJngAVTDof2CkVTHc4g4ZVzOIbk88Ae3JStG%2FOg5zocuyEpZLfbu3VrVuUnznY%2F0Wd3YqpL0B3pXxCEs%2BZsf8G6zMDV%2BPQxtvJFvm0Eeyih0zee5TEWEbV7UtDZOyVrA7mR9s73f%2BeqO7WAZrTEAqpRw0Lm5aPGqwAxLckgzlJoVeSFLTVnog6r4mIQBcVY1F%2Fs%2Bws1lZFbL%2F8Hazay1Zob60LXeHoSssk%2BYdQ6MMhN%2BuYmfUAzEeByNL%2BiFEBX195ZVKm0nbOBFF%2FeLJhVFyNn9vFRrdo2EyIE672gZZsSVYzcBoPIrEFqObCeWGtEGVnjNnmk%2BC9YbvFhM8fknW6WA%2BSXqLYsEZYlw7rgWKeltsXvTOM%2B6326EhY0FO%2FIe4Gp4asDmQCMLyIwfhgl4aSUY41EyfPMkaLh5LlXJAti7WbovO%2BcFQbfzbr8SJ1Lrm5MMs9G28a943yb3bEjVnik0onrUeoZT8BCL5hLoGP5ZXHJbj9h9VGlbTTGtVS%2FsUaYPUUe6HSEougjDdnN5cYjCdW6FdzE6QQHFT7riM4Igii%2F29HzCl%2Ba6U8k7GbSXkuJAcwbXownuLLyQY6pgFsqJCPQpFp3DKP6QQIXnIzgqPrDW5ikExJ7cF2eN1%2FJFhzgpbsEhnIiTeNSb8Kqdl442xz3zQdSwJVJsg924HotLTp%2FCdniin17YRNvwVgIsqfnEQvZHokegfxQB63XBiMJixubIdbBY0yY%2FlQqJ8qgSGBSsC5Y%2BEXsRyX8RN2AZmqo7SIbYYpO3MDjOB6uB1OQhHcJYMRSXvJFiNYa%2B5HMENDTZLr&X-Amz-Signature=404831d750b7edf56ba94de3a7589f611da53df22b7d989522929a98eb9d72c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
