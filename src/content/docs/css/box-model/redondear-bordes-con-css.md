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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6XCCTNU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbMHX3lr8KACY8ti0EAPERaMApEAdintUeXVm%2BitktwQIgA9aeC26FPZTO%2F0si3S%2B5ouAoNfPndviKsDseTE5ZgU4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXFnwUrqi0LslEXkyrcAw3HM9rqGX5HRHhV0oxz0ze4HbInjZXuMnWtwy2sU6kOSXCsgoacvKRU3hOLx%2BTc6wqCFYJtFk8q3Av4JYPE%2FAWbi2vCNNrEco8U7rYPpVglr19o2srFNIsOsgCi9UCgAVotvTTikYihQ%2F9IRTcw8FDxRaVrLmNmgxSNrIvYdPIC%2FYl4PstuBU9N0UcondvYJfY1MCFPpLPPwTViYYudpEG7xjsZj7%2F6oajm68OuSZu%2FvjLlKZpPnE5f7VhcOyOBfUaXzoVl7k4yFAYxmFMz97G9PaZZ3Gs%2B%2Fc2rOcoT4i8FUHlNkQFUDcrLie9J5B8RbnGW%2FiVM2akpkReYzTKMLiZGTyG5mh1hKezE0YwtRF5La5RNwty2fTnRMW9X30XFIOfLjNEaf8h5BwGGVvSL3r4kA%2Fg7f%2FDfVxv1iYkbD48ERM4%2BvzOefV0DC0A7LsEwIYDGnLuOK1LKMvBoPPzIAdwnxan7Aa76RqoRnrjhK%2FbA5omKWB6rp4zY5NrFh9asr%2F3mNrQc3n0Ew6cGMnNA%2FzfoyQo5fJzftHKGFtder%2FxHKao6MFh9VCre0TVztAsfZ8tf4T2WNjfWvT%2FlkLCkCwixarDVXJhtGZVMFk9nsd5j5NfdHYmm3m48alicMLmfi8oGOqUBffOfjJZarHsA866BGo%2BabMn1YPGwOr1xjS2Hb%2FIVDO4G4F%2BXSQL7G6Q9mGAi8AQmcVEbZpmjVzmoOTsTsK0%2BroDRA%2B05jC%2FqKgrKBrDPYIkjxoquuYBhy6Wr0HO48cctGLZ%2BVek5KC1GjfuUaiaPz%2F4iHnQYTIf7NQXo0o8WEFq7SR2z5XcmdmTr9n11NFBqs8RwZIoFuU6Sk%2B046Pz6yuFJyOEv&X-Amz-Signature=c386b6d3e01929626c011a3612a3970ea47b6a539c86530d9f26ec359f6ffc11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6XCCTNU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbMHX3lr8KACY8ti0EAPERaMApEAdintUeXVm%2BitktwQIgA9aeC26FPZTO%2F0si3S%2B5ouAoNfPndviKsDseTE5ZgU4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXFnwUrqi0LslEXkyrcAw3HM9rqGX5HRHhV0oxz0ze4HbInjZXuMnWtwy2sU6kOSXCsgoacvKRU3hOLx%2BTc6wqCFYJtFk8q3Av4JYPE%2FAWbi2vCNNrEco8U7rYPpVglr19o2srFNIsOsgCi9UCgAVotvTTikYihQ%2F9IRTcw8FDxRaVrLmNmgxSNrIvYdPIC%2FYl4PstuBU9N0UcondvYJfY1MCFPpLPPwTViYYudpEG7xjsZj7%2F6oajm68OuSZu%2FvjLlKZpPnE5f7VhcOyOBfUaXzoVl7k4yFAYxmFMz97G9PaZZ3Gs%2B%2Fc2rOcoT4i8FUHlNkQFUDcrLie9J5B8RbnGW%2FiVM2akpkReYzTKMLiZGTyG5mh1hKezE0YwtRF5La5RNwty2fTnRMW9X30XFIOfLjNEaf8h5BwGGVvSL3r4kA%2Fg7f%2FDfVxv1iYkbD48ERM4%2BvzOefV0DC0A7LsEwIYDGnLuOK1LKMvBoPPzIAdwnxan7Aa76RqoRnrjhK%2FbA5omKWB6rp4zY5NrFh9asr%2F3mNrQc3n0Ew6cGMnNA%2FzfoyQo5fJzftHKGFtder%2FxHKao6MFh9VCre0TVztAsfZ8tf4T2WNjfWvT%2FlkLCkCwixarDVXJhtGZVMFk9nsd5j5NfdHYmm3m48alicMLmfi8oGOqUBffOfjJZarHsA866BGo%2BabMn1YPGwOr1xjS2Hb%2FIVDO4G4F%2BXSQL7G6Q9mGAi8AQmcVEbZpmjVzmoOTsTsK0%2BroDRA%2B05jC%2FqKgrKBrDPYIkjxoquuYBhy6Wr0HO48cctGLZ%2BVek5KC1GjfuUaiaPz%2F4iHnQYTIf7NQXo0o8WEFq7SR2z5XcmdmTr9n11NFBqs8RwZIoFuU6Sk%2B046Pz6yuFJyOEv&X-Amz-Signature=bc73c05d2f73df6c8c3ae539bcf5b37464a08b91144f6ad515bb93b66168c535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
