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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IV25F26%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL2Zg3M2gDdrDiQ61oMZqFeoOFdxsJKF3C8aCOPFfYvgIgJAyfhogep0tmUNXFxqR%2FiAVFXvyfkalGrHhm9Ls1ZCEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZaxnB5LKDHU8OF1CrcA7Pghg50HfFOWOcGYYE9XU%2FnZOFF3pF6fQswvm0AxeDk%2BVolUw1q5JUODg4plRFjyYdQi1yDO2OhHQm%2FZK3jUpJdwoE9q7DncQOZqWYsnlev3cCPfWtm2AyMBqgi38Cn%2FQI1P3nwUXcofsagYa3ZLqT4K1j6KCSl99nD0cyuBCi5IVX2lcbdEEOTGl8MF2bLcYaq2p1ykynEurJuoSqwWVfTWH8ARGiyIxSXkf3%2FYWNiIfryW4d%2BcIQppQmC9GsJvIc8BqOltSapyQAmeI%2FHySiqWZAZuQZlCfqsfMiM5qpF8SoCKiEagOBc2hdodl4wDjfq37T5UL%2FBHikYQNiJAqY0Nb%2BzG7ArwbOLclSS56w1GHEiBCBpP28VTh0YoYu0Htmw7I1IAISwozd5grbFOaUhFyJajN1XirgY4MPWYe4YSh0RkXRGtOiX9rkJfMVHdHjZc%2BFRJjFp4DXkQiJ0eJFeir5Ku31J%2Bpi3SoADXPCgbqo13fxWOgyAau45f5KVskDFVLUd40S7wvPMymK70fXsnEc7k3C%2B7XFUQk4iOAD44yHgToBpzP7yhmy98T%2FITNCNBMWKjOd0IyFgAO1bk1fTl1Sow%2FI2cK56M53Jt1037%2FGVNMScJsX7gEUgMLDu2ckGOqUBEobEPOLQpQAVgR3tB%2FlMKwCpKxKLC4yT%2FC7Ej6KCxyKfoXWMBJt5ciyPIj3yipGdXHljLWIU%2F7oM7%2BhIJXgTSYW%2FElwiyWLs1sJf3Q54qiYyX3iNJlxBSIvhFzNBf0TGWl1UJDwPbi6tjvDJo2BlvRd%2BOzvnnLrr%2F2%2FMBloXHmFbn8eng9fkuEddfR1EI%2F%2B%2Fqq3u62THau5W86Mcfe0NU7fK4RqR&X-Amz-Signature=7c954dafd6537d4893d820e664b8a954c0b82365e5ef40ce9cfec922422100bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IV25F26%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL2Zg3M2gDdrDiQ61oMZqFeoOFdxsJKF3C8aCOPFfYvgIgJAyfhogep0tmUNXFxqR%2FiAVFXvyfkalGrHhm9Ls1ZCEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZaxnB5LKDHU8OF1CrcA7Pghg50HfFOWOcGYYE9XU%2FnZOFF3pF6fQswvm0AxeDk%2BVolUw1q5JUODg4plRFjyYdQi1yDO2OhHQm%2FZK3jUpJdwoE9q7DncQOZqWYsnlev3cCPfWtm2AyMBqgi38Cn%2FQI1P3nwUXcofsagYa3ZLqT4K1j6KCSl99nD0cyuBCi5IVX2lcbdEEOTGl8MF2bLcYaq2p1ykynEurJuoSqwWVfTWH8ARGiyIxSXkf3%2FYWNiIfryW4d%2BcIQppQmC9GsJvIc8BqOltSapyQAmeI%2FHySiqWZAZuQZlCfqsfMiM5qpF8SoCKiEagOBc2hdodl4wDjfq37T5UL%2FBHikYQNiJAqY0Nb%2BzG7ArwbOLclSS56w1GHEiBCBpP28VTh0YoYu0Htmw7I1IAISwozd5grbFOaUhFyJajN1XirgY4MPWYe4YSh0RkXRGtOiX9rkJfMVHdHjZc%2BFRJjFp4DXkQiJ0eJFeir5Ku31J%2Bpi3SoADXPCgbqo13fxWOgyAau45f5KVskDFVLUd40S7wvPMymK70fXsnEc7k3C%2B7XFUQk4iOAD44yHgToBpzP7yhmy98T%2FITNCNBMWKjOd0IyFgAO1bk1fTl1Sow%2FI2cK56M53Jt1037%2FGVNMScJsX7gEUgMLDu2ckGOqUBEobEPOLQpQAVgR3tB%2FlMKwCpKxKLC4yT%2FC7Ej6KCxyKfoXWMBJt5ciyPIj3yipGdXHljLWIU%2F7oM7%2BhIJXgTSYW%2FElwiyWLs1sJf3Q54qiYyX3iNJlxBSIvhFzNBf0TGWl1UJDwPbi6tjvDJo2BlvRd%2BOzvnnLrr%2F2%2FMBloXHmFbn8eng9fkuEddfR1EI%2F%2B%2Fqq3u62THau5W86Mcfe0NU7fK4RqR&X-Amz-Signature=32ba9119de9efc586b457c8cbb5539abb7cb41a35900f85cffc7737b7ed94797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
