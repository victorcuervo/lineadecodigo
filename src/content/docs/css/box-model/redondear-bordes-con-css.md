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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6L4WCZP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9J0A6DELcqZ9AzA%2BlYkwG2GVRDBLjmu0ddDSgJ8WREAiB64Gm295F1AEYPwX7qSxxWaVswVm9bYnFEfNByewz6KSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMKZOucXk82J5eKHhTKtwDLWJI4GDOOLCLOiiJST5GSPuRg2hkp8pRbuwiK9JS5dueda%2FI2TzbK3ovX6Y5QK5frAlHmOm%2F9%2FfAdN5naSYT5uetGjvXTGcMt7eZTFUTbdu8s1C5Tq5erFH62Zj4VhhtwW5E25Gjnvy3hL1j%2F5bH3B4fxK2UAp4S4opJhK1txNDTM%2FPMbm8Q%2FXLMM2PTBPNZfuZzaD%2FmoIe0MomBZ1jcAVM78hurFELj%2FeHjtq1wICnPEgK25ph20RRqpCIIVQAsUqSFcH%2Bf5MO5ZyaPL1ani1ZlcL5ctabIKJsPI1%2FCJ93XLiJAMPrlKZv3IX4oTPKQEYDXHYzFw3FpnHd%2FssDNdRZIc6oYgrUiqKHjekeYsySgQQoWZci2kVLae0RKYf02g36eIWB5wpb3T4RSmKQHJT0zTAVDLPLIl9WIZQ4Wgz0OEa9QBJYvjl9Ml6RcNPHqYyupHUV3yasVrhrQjraR4yTZUBjtFGVgZ3ouxxntGt9wFFfsvATJyW%2FeVqWNKxUvy2asoxXhoUFt8nY1xNDGUesawvoGf7jgZwTFPbpZZngOLCEMzo4kWErF67KgqVtndSrH11FhkAl3HOzoZZFDs4DcKjGFgseyhlsUBZHvbprkmoOzPbDgJnlPocIwjuqIygY6pgF5zGt53x1kk%2F18E6yDS7zihQMUW9X4D%2F4MdmAGbTn8tkArQIE%2B%2FACvmxCcyt%2FK5T0S5jjFkMdYNBk%2FP0G3tO%2FGUv%2BRrd9mJG4he5xJ464gs7Xp%2BLemJXcoImC0cI99htHNY7MRT0S%2BlqRjvKTDgSrfQvle0H7MFCNJK2yBcJUVP7yICRTKzLotVVFGPGIUFCkqvUjwTi6stw3nOD2yAi8%2BFztovJKf&X-Amz-Signature=0176922b43af37c822758a9a4d60873a9dedf4abecdf882f43e4bc8e72c20e36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6L4WCZP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9J0A6DELcqZ9AzA%2BlYkwG2GVRDBLjmu0ddDSgJ8WREAiB64Gm295F1AEYPwX7qSxxWaVswVm9bYnFEfNByewz6KSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMKZOucXk82J5eKHhTKtwDLWJI4GDOOLCLOiiJST5GSPuRg2hkp8pRbuwiK9JS5dueda%2FI2TzbK3ovX6Y5QK5frAlHmOm%2F9%2FfAdN5naSYT5uetGjvXTGcMt7eZTFUTbdu8s1C5Tq5erFH62Zj4VhhtwW5E25Gjnvy3hL1j%2F5bH3B4fxK2UAp4S4opJhK1txNDTM%2FPMbm8Q%2FXLMM2PTBPNZfuZzaD%2FmoIe0MomBZ1jcAVM78hurFELj%2FeHjtq1wICnPEgK25ph20RRqpCIIVQAsUqSFcH%2Bf5MO5ZyaPL1ani1ZlcL5ctabIKJsPI1%2FCJ93XLiJAMPrlKZv3IX4oTPKQEYDXHYzFw3FpnHd%2FssDNdRZIc6oYgrUiqKHjekeYsySgQQoWZci2kVLae0RKYf02g36eIWB5wpb3T4RSmKQHJT0zTAVDLPLIl9WIZQ4Wgz0OEa9QBJYvjl9Ml6RcNPHqYyupHUV3yasVrhrQjraR4yTZUBjtFGVgZ3ouxxntGt9wFFfsvATJyW%2FeVqWNKxUvy2asoxXhoUFt8nY1xNDGUesawvoGf7jgZwTFPbpZZngOLCEMzo4kWErF67KgqVtndSrH11FhkAl3HOzoZZFDs4DcKjGFgseyhlsUBZHvbprkmoOzPbDgJnlPocIwjuqIygY6pgF5zGt53x1kk%2F18E6yDS7zihQMUW9X4D%2F4MdmAGbTn8tkArQIE%2B%2FACvmxCcyt%2FK5T0S5jjFkMdYNBk%2FP0G3tO%2FGUv%2BRrd9mJG4he5xJ464gs7Xp%2BLemJXcoImC0cI99htHNY7MRT0S%2BlqRjvKTDgSrfQvle0H7MFCNJK2yBcJUVP7yICRTKzLotVVFGPGIUFCkqvUjwTi6stw3nOD2yAi8%2BFztovJKf&X-Amz-Signature=8dbe19d4bc87c2c4e133b5656c239ffa547b167a8d0b293e06e435416ef46743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
