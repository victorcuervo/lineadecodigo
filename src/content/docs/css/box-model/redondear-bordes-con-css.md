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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMXUHBGS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsvu7Cy8BvgfvqGUEYeTMxN47RTcvkp2UwaK8rVipUWQIhAJTjaS3z%2BMHU6fXcabUvVRQ%2F0UHfv2BmHpbpe7xcFbDHKv8DCHQQABoMNjM3NDIzMTgzODA1Igwgeo5hWqNglCByuQcq3AMBMqzf7iU5s4D39vXBNF43WPPj7Yfw3Y3DEHSIUtpt7J9VyPomVqATIJcjMKz%2FEAGCrp%2BfgB2gylBmXn1Z622RNk%2F54vNULl7a0n%2BXKv70yLHdr7OF1sqR6LE2xn7jEaXbSBdcZ%2BoBAZ36MrMkpAT0K8QfyKYc8NJftT4CTBPRcBqP%2FecNMGxT%2B1MWS0CbZ8xC6cH5d0awSHLvO7ViU6nst%2BCFS1e24oXjyFs6jn84Xfg%2BMWxcUd8F4C4129rdUJpnZWTV8QxFQzhvCS4g5NdYeIRRMvscWdKrnu23U76NF%2Bm7Wa8aBviMZoz4aY7YbVtbLP5CfRbf%2B5vSbiyYAk78xmKbN1XbOHz7soVZObI7ZlAT%2BjQ4Cjbg5ERjCSON6zPvLnzBCQwGqV3t1G5WScg2iZ1AX9HV0a4mfkcoCL7yhhIvm%2B1v7SoeIupQmWDt85xGix3YfFWmHkoW420w6ZF9koxWlwl2Ry5R97eUkYqM6iFVHpnTWcfOd8JNM3%2Br04zccF1Qc22h%2FTmuK%2FrGulL1hvo3MkQuWBM53JaZkpHRS5iHRaGhwz7gdKwrT0m%2Bq7NUT2rkYTXX3Y1TRiIK7kHg50MYMsQcK6PPr75Z%2FgSLu%2FP2ZD2bP%2Fg6hGyu%2BDD%2FsojKBjqkAZmzGb8vgqVYV%2F0PQNLSLox3dIwmNTrOxfit46ASjT2vz8FCPrg%2BxqqYgSdfDrMxFNXeTBq%2BUD6FfL7YFuMd7juW2lnaZXivHVzBSqAii9zntMhHV5ZUQOfVLmqe5T0rUGuu2FWlYgFIhnJoBbFpgivrg7QzapdP1NzRHwmoDB4rUQir3hSz7vyEws8pjVVAEkffzRzT1m7A9o%2FkmTmP9Apos46n&X-Amz-Signature=c6c3341212180ead6bd3a01cdf90bafe4b17a5932ebcf54397281ec7717ed711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMXUHBGS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsvu7Cy8BvgfvqGUEYeTMxN47RTcvkp2UwaK8rVipUWQIhAJTjaS3z%2BMHU6fXcabUvVRQ%2F0UHfv2BmHpbpe7xcFbDHKv8DCHQQABoMNjM3NDIzMTgzODA1Igwgeo5hWqNglCByuQcq3AMBMqzf7iU5s4D39vXBNF43WPPj7Yfw3Y3DEHSIUtpt7J9VyPomVqATIJcjMKz%2FEAGCrp%2BfgB2gylBmXn1Z622RNk%2F54vNULl7a0n%2BXKv70yLHdr7OF1sqR6LE2xn7jEaXbSBdcZ%2BoBAZ36MrMkpAT0K8QfyKYc8NJftT4CTBPRcBqP%2FecNMGxT%2B1MWS0CbZ8xC6cH5d0awSHLvO7ViU6nst%2BCFS1e24oXjyFs6jn84Xfg%2BMWxcUd8F4C4129rdUJpnZWTV8QxFQzhvCS4g5NdYeIRRMvscWdKrnu23U76NF%2Bm7Wa8aBviMZoz4aY7YbVtbLP5CfRbf%2B5vSbiyYAk78xmKbN1XbOHz7soVZObI7ZlAT%2BjQ4Cjbg5ERjCSON6zPvLnzBCQwGqV3t1G5WScg2iZ1AX9HV0a4mfkcoCL7yhhIvm%2B1v7SoeIupQmWDt85xGix3YfFWmHkoW420w6ZF9koxWlwl2Ry5R97eUkYqM6iFVHpnTWcfOd8JNM3%2Br04zccF1Qc22h%2FTmuK%2FrGulL1hvo3MkQuWBM53JaZkpHRS5iHRaGhwz7gdKwrT0m%2Bq7NUT2rkYTXX3Y1TRiIK7kHg50MYMsQcK6PPr75Z%2FgSLu%2FP2ZD2bP%2Fg6hGyu%2BDD%2FsojKBjqkAZmzGb8vgqVYV%2F0PQNLSLox3dIwmNTrOxfit46ASjT2vz8FCPrg%2BxqqYgSdfDrMxFNXeTBq%2BUD6FfL7YFuMd7juW2lnaZXivHVzBSqAii9zntMhHV5ZUQOfVLmqe5T0rUGuu2FWlYgFIhnJoBbFpgivrg7QzapdP1NzRHwmoDB4rUQir3hSz7vyEws8pjVVAEkffzRzT1m7A9o%2FkmTmP9Apos46n&X-Amz-Signature=bf4cd1306892bec429684bdc3ee2c3efea8f3f127e16b0ea0156a978bc2530e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
