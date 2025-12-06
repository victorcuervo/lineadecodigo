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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJQFH5F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV213PEDk%2FvA3zFnbCRRcRm6Sk5IKEnjPQ81PDj2QIMAiB7UXaRfGwEP9wF1wFaGPym%2Fe6KlHjZQ8UKEm2AE6eGgir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIML4WykU3NkPIOYBvpKtwDW2Mj5ynEhnWxqoc%2Ba3Hk6YmDbA0686gBz22Ll9BVCZCoK2NauS8abyLAuCX8SI%2B4X3GnWW%2FP7dN926wo3Qj9TVuDqXFhR0fbRsbZpYSwQWRu%2BuH7A6M9%2FcJW8haAL86SHm7U19LYpT6dnTT%2F0gdiZlkY18RNrhpv2GyL4Ty14B1paQE6IoRoYr22vHqs%2BeIHbLZV8Gl1MW%2BpxIyW4JPB1bj54xflP%2BskkF93bCsF0zMkagXzYqY5wdR6waDk1Q%2Fmxi8qpBL0vuip1%2BuEz%2BPU9BaUzeJNbskEEtA%2BHQodtkAK8f8DWoeNqB%2FYnjO0kQNLbdV6WMN91wcp8KCiQ1fUm6EenSmJFd4Eyot6WPIsgs4k7l6SXW6lzlcIzvgYhCM%2BiqHHgHP1GJZtQgV5pd1OYaR77bOum%2FOgy%2Fn%2FW3ms%2Fy0QH%2B1tRPM24B9h%2BFcHI%2FnNxwN4MWobs5ykvwx9UNsHn03r1Ax%2F3mlbk7AZfuLTq%2FwSHne561Vx9lIuIvDlnfo%2BN7F0sYHf6KMdJETgE5Zqv576aUijMyioRG6phGGYXTABV2hXrHx7ihu1GtM715jacraM6zgst%2BUg2HpnnkLqC%2FUcZYYbqYkW3BhXP0CGp2FGZ%2F0fEmrvsMh374Qwo6bQyQY6pgEGS49pIGUN4cdZkc%2FYrafq%2FL6dc5yGX4%2FAPNDN0g03JpVeOZdlnbjmu8ckoGUt%2FMBoVRZJyxlukLkae60zkwoOt7Di%2BXBD94DLSWUZNYv2Cw%2B%2FJgO%2Fzeyws8wYNUlJcS%2BtpoCZ0r1EAeIvEVMeGVnLmaeXgg%2B4tfDDXFUF4OeWmTpKNbhRhJx9rWbaHze3PJP3SQXfTKrl%2BwXlcp23pSWMQG4kMyXW&X-Amz-Signature=38030c7c6f5fc2f870629fd07418bbbf752f884d0f753f751ed3c60a36e598bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJQFH5F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV213PEDk%2FvA3zFnbCRRcRm6Sk5IKEnjPQ81PDj2QIMAiB7UXaRfGwEP9wF1wFaGPym%2Fe6KlHjZQ8UKEm2AE6eGgir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIML4WykU3NkPIOYBvpKtwDW2Mj5ynEhnWxqoc%2Ba3Hk6YmDbA0686gBz22Ll9BVCZCoK2NauS8abyLAuCX8SI%2B4X3GnWW%2FP7dN926wo3Qj9TVuDqXFhR0fbRsbZpYSwQWRu%2BuH7A6M9%2FcJW8haAL86SHm7U19LYpT6dnTT%2F0gdiZlkY18RNrhpv2GyL4Ty14B1paQE6IoRoYr22vHqs%2BeIHbLZV8Gl1MW%2BpxIyW4JPB1bj54xflP%2BskkF93bCsF0zMkagXzYqY5wdR6waDk1Q%2Fmxi8qpBL0vuip1%2BuEz%2BPU9BaUzeJNbskEEtA%2BHQodtkAK8f8DWoeNqB%2FYnjO0kQNLbdV6WMN91wcp8KCiQ1fUm6EenSmJFd4Eyot6WPIsgs4k7l6SXW6lzlcIzvgYhCM%2BiqHHgHP1GJZtQgV5pd1OYaR77bOum%2FOgy%2Fn%2FW3ms%2Fy0QH%2B1tRPM24B9h%2BFcHI%2FnNxwN4MWobs5ykvwx9UNsHn03r1Ax%2F3mlbk7AZfuLTq%2FwSHne561Vx9lIuIvDlnfo%2BN7F0sYHf6KMdJETgE5Zqv576aUijMyioRG6phGGYXTABV2hXrHx7ihu1GtM715jacraM6zgst%2BUg2HpnnkLqC%2FUcZYYbqYkW3BhXP0CGp2FGZ%2F0fEmrvsMh374Qwo6bQyQY6pgEGS49pIGUN4cdZkc%2FYrafq%2FL6dc5yGX4%2FAPNDN0g03JpVeOZdlnbjmu8ckoGUt%2FMBoVRZJyxlukLkae60zkwoOt7Di%2BXBD94DLSWUZNYv2Cw%2B%2FJgO%2Fzeyws8wYNUlJcS%2BtpoCZ0r1EAeIvEVMeGVnLmaeXgg%2B4tfDDXFUF4OeWmTpKNbhRhJx9rWbaHze3PJP3SQXfTKrl%2BwXlcp23pSWMQG4kMyXW&X-Amz-Signature=574bcf69acfdff06a6a3f89b2866083b2d14e4d6b2e25cf3204dddc87b662a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
