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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLUMZXCY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyu57E3Hn0km4qC%2FSSkQX6Bg2FF2GGohnR3hJwPi2nAAiBRmqHLCrTNNoqOb4%2F197e0EpD8Hc1z14j%2FH48e2MOEfSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5anxRTa54pPywd3VKtwD6z1Zscjl8O0KV3fTp3BeJ%2Be2aho8%2B0TX1MMtS8%2FpOgAvPro9%2ByPLGVvSkjySEdosSBgTI%2FPOz1N19Q%2FJxhv8GHYzBcCu89JQ7cAPr3BFXjFsfEVvNkiQowQ6DseWOCb0sSpyyh3CvWp%2BjCL3XG5GWedk6LvZ65h%2BlGEq%2BD1GXYcxbbVGa%2FYz9bM%2FCLii3gW%2Bdem2o%2FI94SC9D0Q7QKfEUgs88wEZwAuTe%2BI8ilU4KjosmQ35MAwq7TvrZnesZjbEd2rWSY%2BpEx5cQNpXGjhTJpibshIIhH8OkZDFQdq%2FmqZw1Lk1ASoodcywg3DCNvHT1wEchFSx7Rxx9Ef00RX%2BWkDOfMkkkn6IiZRHdd2G4ftAtr%2By%2FKmqhPaHg4SEvgdNQRKoaIvT6U62Fvl00JqVwaFWmldpY0rjiaaQwovdFXKhu2qJA2XH%2FfW60wnuc8hx6w6BtX%2Fv5Md37%2BXrjMz7azF0YzQlDduRUktzLo8B1lPM8YsLcuD0Q5%2FFnIXCieN3BopVJo1eojnFly06rzu7Qj8l%2FFybDzfIkvhpRrcTYXiJXJzzG8WUYyspn32LOPpLk3reCVFsaYdDu0KsfGoIBKVQQA2Qk7aVESXo5VbFq2k5cSFc8osyjeLOq4AwypjUyQY6pgG3bkliAC0t6vM2ut7JenLtTOyTBtf8D2FAkijqGzgZuFjoeJK56pnHrmjSsQMXaH8Q8s6847JbUZ6IGFMYehK0afPYPayIYYSZwOgj4jR3T5LuE6vkLwnkzWLJGFbFS5HWgeBWcwfSdswxW1AmMMvc%2Bi993H3bPkW0sXlOTlzaoVfr7uZtiptQZmLCLv0QNFaiKac6KKGxqfwJABp2jYW%2FSbmm8lBI&X-Amz-Signature=557fc8a5b43fb5cd7273848c4f17101ba361ee0ebaa11452faa27a39eeb256e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLUMZXCY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyu57E3Hn0km4qC%2FSSkQX6Bg2FF2GGohnR3hJwPi2nAAiBRmqHLCrTNNoqOb4%2F197e0EpD8Hc1z14j%2FH48e2MOEfSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5anxRTa54pPywd3VKtwD6z1Zscjl8O0KV3fTp3BeJ%2Be2aho8%2B0TX1MMtS8%2FpOgAvPro9%2ByPLGVvSkjySEdosSBgTI%2FPOz1N19Q%2FJxhv8GHYzBcCu89JQ7cAPr3BFXjFsfEVvNkiQowQ6DseWOCb0sSpyyh3CvWp%2BjCL3XG5GWedk6LvZ65h%2BlGEq%2BD1GXYcxbbVGa%2FYz9bM%2FCLii3gW%2Bdem2o%2FI94SC9D0Q7QKfEUgs88wEZwAuTe%2BI8ilU4KjosmQ35MAwq7TvrZnesZjbEd2rWSY%2BpEx5cQNpXGjhTJpibshIIhH8OkZDFQdq%2FmqZw1Lk1ASoodcywg3DCNvHT1wEchFSx7Rxx9Ef00RX%2BWkDOfMkkkn6IiZRHdd2G4ftAtr%2By%2FKmqhPaHg4SEvgdNQRKoaIvT6U62Fvl00JqVwaFWmldpY0rjiaaQwovdFXKhu2qJA2XH%2FfW60wnuc8hx6w6BtX%2Fv5Md37%2BXrjMz7azF0YzQlDduRUktzLo8B1lPM8YsLcuD0Q5%2FFnIXCieN3BopVJo1eojnFly06rzu7Qj8l%2FFybDzfIkvhpRrcTYXiJXJzzG8WUYyspn32LOPpLk3reCVFsaYdDu0KsfGoIBKVQQA2Qk7aVESXo5VbFq2k5cSFc8osyjeLOq4AwypjUyQY6pgG3bkliAC0t6vM2ut7JenLtTOyTBtf8D2FAkijqGzgZuFjoeJK56pnHrmjSsQMXaH8Q8s6847JbUZ6IGFMYehK0afPYPayIYYSZwOgj4jR3T5LuE6vkLwnkzWLJGFbFS5HWgeBWcwfSdswxW1AmMMvc%2Bi993H3bPkW0sXlOTlzaoVfr7uZtiptQZmLCLv0QNFaiKac6KKGxqfwJABp2jYW%2FSbmm8lBI&X-Amz-Signature=797d872b675adc531dab6a436ae36ebbc2aa10a021ed8ed60f34d859c896e879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
