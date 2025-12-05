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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDXLUSJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQSV0jDMfktvYuUN%2B1%2BV9cHLmQj1NmimCCRaAeBx%2By8AiEAw0z%2FmGu%2FEe6Sk%2FOUgwAbAYf6zxs2wu9sgfXxgrAV%2BRMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMyFc%2B2B717vqiCfZSrcA%2FvSZScrFt2zFt7l2nKN3MYErvEfridJ%2Fku7AAFdqbUtU310B2%2FWy0U3uhSHFA2s1OSL6uCDBv51atrydsILUQRZzCtmZynp47SZFcL9%2FRwZ5mpzEclZ%2FRGgh5YUg%2Fi28Yh683gAv6Af87qxwX2WG5hNxPLewzqj1V1yiqcjYlM3j4GSOsWTj5vCDM6Cu5e1cAXnxsfrWvZllB2%2BpC6SfIFMgJW6AeXJfXxRWCKMTnfJfhCNsSaFyulb7IkKFruPU5TOQ4k2zof3q0OPXAswQSH7U3lxdJpw4BaxBYXqVVMmt0jPMqHgIZOtGBfpGmyK8avEtRQe4uK22tVCse%2B1Z%2FfCN9GfrQAmm8gG9HtRTeZ6StedZcxguPlKFbzTc0mgMMvEjw7PKLF4XLXd4xAONF8oIqc6CVTgVgE3n%2B87H3lJMt2m0ZxXOWACTmbVr8X86QtlMd4qeojzV%2BmA2CEl6YTSQPXHAHtmfoTi3RE0saQiAXJU%2F9kktzWdc4JudqKwRYjeO%2BUdE07KLw3T4CQ4mE4dAOWhzIj4NBIyLJXdYh17k%2FZyvR3vbTUqs5u2fZR4H9IYcdgKRo2XxJZkGHblyqbs%2Bpe%2Fv0G52OjfbuvkXP8wJ14wdQB4tk%2FxgyfIMOjeyskGOqUBcCDLxDBVphCHPoOEmwbgbdu90SNm54XtuHqosuzq%2FdOkMh2Al6I0nW79wB16oQp0Q5U6tdilfJT59G99DbgpE443XKXgBhsRx9eWhBlPNfNqrTvLaLpgUuz%2Bba%2BJ9oFS2ZzG395wtBuCztGQj%2BXfic4OIA4JuxmlMSAr%2FWyLjgnepGbgNteRNiqx0A%2Fte1yWX6Q2r5Q764QbU7W3bGZp%2FzpdtuiR&X-Amz-Signature=f6472f7cd6764a978cfa346ab4b7fd284237cf95643b8e6121338e8dd665b875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDXLUSJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQSV0jDMfktvYuUN%2B1%2BV9cHLmQj1NmimCCRaAeBx%2By8AiEAw0z%2FmGu%2FEe6Sk%2FOUgwAbAYf6zxs2wu9sgfXxgrAV%2BRMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMyFc%2B2B717vqiCfZSrcA%2FvSZScrFt2zFt7l2nKN3MYErvEfridJ%2Fku7AAFdqbUtU310B2%2FWy0U3uhSHFA2s1OSL6uCDBv51atrydsILUQRZzCtmZynp47SZFcL9%2FRwZ5mpzEclZ%2FRGgh5YUg%2Fi28Yh683gAv6Af87qxwX2WG5hNxPLewzqj1V1yiqcjYlM3j4GSOsWTj5vCDM6Cu5e1cAXnxsfrWvZllB2%2BpC6SfIFMgJW6AeXJfXxRWCKMTnfJfhCNsSaFyulb7IkKFruPU5TOQ4k2zof3q0OPXAswQSH7U3lxdJpw4BaxBYXqVVMmt0jPMqHgIZOtGBfpGmyK8avEtRQe4uK22tVCse%2B1Z%2FfCN9GfrQAmm8gG9HtRTeZ6StedZcxguPlKFbzTc0mgMMvEjw7PKLF4XLXd4xAONF8oIqc6CVTgVgE3n%2B87H3lJMt2m0ZxXOWACTmbVr8X86QtlMd4qeojzV%2BmA2CEl6YTSQPXHAHtmfoTi3RE0saQiAXJU%2F9kktzWdc4JudqKwRYjeO%2BUdE07KLw3T4CQ4mE4dAOWhzIj4NBIyLJXdYh17k%2FZyvR3vbTUqs5u2fZR4H9IYcdgKRo2XxJZkGHblyqbs%2Bpe%2Fv0G52OjfbuvkXP8wJ14wdQB4tk%2FxgyfIMOjeyskGOqUBcCDLxDBVphCHPoOEmwbgbdu90SNm54XtuHqosuzq%2FdOkMh2Al6I0nW79wB16oQp0Q5U6tdilfJT59G99DbgpE443XKXgBhsRx9eWhBlPNfNqrTvLaLpgUuz%2Bba%2BJ9oFS2ZzG395wtBuCztGQj%2BXfic4OIA4JuxmlMSAr%2FWyLjgnepGbgNteRNiqx0A%2Fte1yWX6Q2r5Q764QbU7W3bGZp%2FzpdtuiR&X-Amz-Signature=5b0adc577a1d35706e898e9ae04d5c46d90e43e23c5258f7d18004024d2223f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
