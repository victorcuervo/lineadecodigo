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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXYVKN26%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BrExanNhH0D65S2srv99NsuZMvEo3FJ7rrV7ZDdDFEAiBoLM8GALzb74dhTnz6AP9NzcPdOGBIvY3mvVoB6GlS6CqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4%2Fr5pRMHRbdtjf0CKtwDuxm%2FHOtgKY3bPfgsD5pm346nLYB7intTkUwtdCBe0zwjfZp2sXgbhG4ueH9BEkIRtuYzTtV8WJsNlxJoChefQMJafBCxfLmqn6N6P1FdJDGqdXr1xm9u44wCPLkQwv%2Bv4oPD%2BqAww8o04fmdULpDKeRh%2FN53XBZuXB3rPYXb51v2cT%2FGpwjVltiiGCoAvVT%2BnmUOC2TGgUowRAdoGb8vMQD8mLMYWnvqxSEKgBwS54DsWcgHi8RZH7KCzGw0%2Fx0afcpIE1bV0HRwseGfsXfn%2BjDBziVQLsfRG7JGQzMhRsmKz3AafjSfmGLY4CMtFZiqjp7nFwtXFF15HAVa3%2BicdbsoWVOr8xD8k%2F834dF%2BFhsg9UNHrngp5j5k8OCbTd2x%2FdNh1CACk4AQTOS5kAgnSW3xNG94ma95iCq6BErZgtxZuVcXz9svUT8QKWzaSM52I5RzY%2BBQAQDntSjVeAXs22%2F5I6xezFMbICIM5yWJrJO5DznIuFE%2Fx%2FjL%2Bw1eTbpepvN0zvxCmgu2zs3f7DzA5YXcbqHTU73DF%2FEorGJCXsvo%2BRlomfXWg5ct3Av6lmNhodwkCwSrp%2FOF%2BiwnftnqBcDEMS4cy0rHtCr8a1EFDiRzjlzgMppLhq43XR4wyaHdyQY6pgEhdH2CwUMFxS0MHZA3vwgeA%2BQOOc%2B3Sy2Ry8CBlyOGRLAmhGZPxCGr1xLvfCeYWtJgjk7GEGVuj4FI3NKOmQ%2FS87rtolS%2BcTHfxzz0RSHggdw7kuDdi2LwzSnaHl2l8Dcd8Kn2r%2BGwo%2Bv5ZrztSuJK5y8RHnzc9X8Ah4OyyXERJr5VbeocuLLw4kd3NZ8lwdBOOSWVuQF%2BRGgRm8eyBCK0gIoVZW13&X-Amz-Signature=1e525eac7287b67cd663d3a7cd4315852975b1d05f9e30431568a1267d519fa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXYVKN26%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BrExanNhH0D65S2srv99NsuZMvEo3FJ7rrV7ZDdDFEAiBoLM8GALzb74dhTnz6AP9NzcPdOGBIvY3mvVoB6GlS6CqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4%2Fr5pRMHRbdtjf0CKtwDuxm%2FHOtgKY3bPfgsD5pm346nLYB7intTkUwtdCBe0zwjfZp2sXgbhG4ueH9BEkIRtuYzTtV8WJsNlxJoChefQMJafBCxfLmqn6N6P1FdJDGqdXr1xm9u44wCPLkQwv%2Bv4oPD%2BqAww8o04fmdULpDKeRh%2FN53XBZuXB3rPYXb51v2cT%2FGpwjVltiiGCoAvVT%2BnmUOC2TGgUowRAdoGb8vMQD8mLMYWnvqxSEKgBwS54DsWcgHi8RZH7KCzGw0%2Fx0afcpIE1bV0HRwseGfsXfn%2BjDBziVQLsfRG7JGQzMhRsmKz3AafjSfmGLY4CMtFZiqjp7nFwtXFF15HAVa3%2BicdbsoWVOr8xD8k%2F834dF%2BFhsg9UNHrngp5j5k8OCbTd2x%2FdNh1CACk4AQTOS5kAgnSW3xNG94ma95iCq6BErZgtxZuVcXz9svUT8QKWzaSM52I5RzY%2BBQAQDntSjVeAXs22%2F5I6xezFMbICIM5yWJrJO5DznIuFE%2Fx%2FjL%2Bw1eTbpepvN0zvxCmgu2zs3f7DzA5YXcbqHTU73DF%2FEorGJCXsvo%2BRlomfXWg5ct3Av6lmNhodwkCwSrp%2FOF%2BiwnftnqBcDEMS4cy0rHtCr8a1EFDiRzjlzgMppLhq43XR4wyaHdyQY6pgEhdH2CwUMFxS0MHZA3vwgeA%2BQOOc%2B3Sy2Ry8CBlyOGRLAmhGZPxCGr1xLvfCeYWtJgjk7GEGVuj4FI3NKOmQ%2FS87rtolS%2BcTHfxzz0RSHggdw7kuDdi2LwzSnaHl2l8Dcd8Kn2r%2BGwo%2Bv5ZrztSuJK5y8RHnzc9X8Ah4OyyXERJr5VbeocuLLw4kd3NZ8lwdBOOSWVuQF%2BRGgRm8eyBCK0gIoVZW13&X-Amz-Signature=b085caebed3e8b3cb6092b4f831100af731084149967c080ca1cffb9ad55be55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
