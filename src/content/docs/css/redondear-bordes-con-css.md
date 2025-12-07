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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIJKIWVR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVrSA%2BDIJ2A89TxtKxeqD83evadmbdSEkvWzhtk4lkZgIhAJP%2BdbPe7UEApkODDY9Ip89gNNaYfID%2Bkckxjnd1re8oKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLLD1fRYIiBRi7VZ4q3ANzI2B7h71Kc6bar39wqiatOfSGvBUiUNO4%2BkFpjM%2BxH311hlfQcNdOCvMPz253PnDjnYRRvBVXr8UVC0b73%2Bz1wT6x7Q9Ytu8tLtq0uNoYXTF2V5NQ5HuMu1gHtfZMvIOiC9C8JtdSIPhYz1q6BeXHVdo8YkZyjS7WCC0U3nY%2BMzKAI5paWgad6B7E23pV63cSEyyXlHXV%2BIfr1lxiuVhF5aq59rOg8GCVDtURO8m%2BHJguFok85yzr50JEb1%2F1z%2FjBj7xb38BFm29ze9p7bc6hP7MZ9CAq5pIGOcOy%2BCDWNMmyDcRChFZnUIz2WW67iQ2m1RLX7Yj93bl3xk1uG8j6w%2B1t1mmIDiujEhnuWtSp3Im82iMepD29hnDztziL9nmN%2BvrdFtpShMUw0PBntH4p8l6ER6%2BNI3WfORgLNBZ%2FK9Fw8kdpAvuU%2FNWbRJJFDUM%2B7MPv7jL0hMgawG07llk%2FK58eaVFDzvBwMAj%2BItxc2l%2BXgRxJbDknMIq07ggfmcIfKWT00MbF6aEYW%2FB9V6EGYe8FKwPkKKwArFI4LU9RWkiqrkEeselL5bAFWRXKkLwu%2BdVW%2FXkGQHmzYoO2789kWst5BB2N90fpvFWos307rvgWbAI7%2Bx02GDYfKDDHmdXJBjqkAeXoaGGCW8EL24GnsWhPlieRgtzxSQFf2zRW4H1mqaAe4rNSrpVYA0oYyWggSn13iLswmYg297fUZZitwgFauFZI91j1%2BRu5rN1xdDyIWUp%2FBfE8k90QHU0v2YEgdJespyT1DLTobpVWdH3I22SeWEmfYL3H5UkXbvptHBZevPxejjsF%2BYYFxgu4jFiECCcST1WstG3NK4zHVit6WE4VFI1ORVdR&X-Amz-Signature=11beaf357bf4a3e926976945eabc734b35108e2a7217359ce29ed79ffdb48563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIJKIWVR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVrSA%2BDIJ2A89TxtKxeqD83evadmbdSEkvWzhtk4lkZgIhAJP%2BdbPe7UEApkODDY9Ip89gNNaYfID%2Bkckxjnd1re8oKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLLD1fRYIiBRi7VZ4q3ANzI2B7h71Kc6bar39wqiatOfSGvBUiUNO4%2BkFpjM%2BxH311hlfQcNdOCvMPz253PnDjnYRRvBVXr8UVC0b73%2Bz1wT6x7Q9Ytu8tLtq0uNoYXTF2V5NQ5HuMu1gHtfZMvIOiC9C8JtdSIPhYz1q6BeXHVdo8YkZyjS7WCC0U3nY%2BMzKAI5paWgad6B7E23pV63cSEyyXlHXV%2BIfr1lxiuVhF5aq59rOg8GCVDtURO8m%2BHJguFok85yzr50JEb1%2F1z%2FjBj7xb38BFm29ze9p7bc6hP7MZ9CAq5pIGOcOy%2BCDWNMmyDcRChFZnUIz2WW67iQ2m1RLX7Yj93bl3xk1uG8j6w%2B1t1mmIDiujEhnuWtSp3Im82iMepD29hnDztziL9nmN%2BvrdFtpShMUw0PBntH4p8l6ER6%2BNI3WfORgLNBZ%2FK9Fw8kdpAvuU%2FNWbRJJFDUM%2B7MPv7jL0hMgawG07llk%2FK58eaVFDzvBwMAj%2BItxc2l%2BXgRxJbDknMIq07ggfmcIfKWT00MbF6aEYW%2FB9V6EGYe8FKwPkKKwArFI4LU9RWkiqrkEeselL5bAFWRXKkLwu%2BdVW%2FXkGQHmzYoO2789kWst5BB2N90fpvFWos307rvgWbAI7%2Bx02GDYfKDDHmdXJBjqkAeXoaGGCW8EL24GnsWhPlieRgtzxSQFf2zRW4H1mqaAe4rNSrpVYA0oYyWggSn13iLswmYg297fUZZitwgFauFZI91j1%2BRu5rN1xdDyIWUp%2FBfE8k90QHU0v2YEgdJespyT1DLTobpVWdH3I22SeWEmfYL3H5UkXbvptHBZevPxejjsF%2BYYFxgu4jFiECCcST1WstG3NK4zHVit6WE4VFI1ORVdR&X-Amz-Signature=fe848d4c9befacd705de904d4c7629403fcaea66487ee82a77b7823370c62b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
