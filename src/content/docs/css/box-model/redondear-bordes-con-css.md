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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632NMOQZK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCv3%2B90617YV7TLluhXbGuRRNv0HyFXj4u%2Fc1aP%2Bw4FgIgGpuTizuNAJSfUdU7zRf1XzH%2Fo%2BvWFmYNlAA4dalc7DMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFzpZNtkaTIm7J2JUyrcA1v3TlL8X%2BOcazjTGC7H7HBPVDylLNiXWX0jkkdgjHa7tXFfex4jZpF3In5t4Nj4Z1LGnKDQTXE0lVE9R8G0mD6GIV60WXZ4a1z0tnGCIhXYON9fSopDlHf2Q0SSFxZZJSp1Wx%2BDKuWbUFFAYG50qUAqY5ltqtFbIZiBi%2BRDewtCRmLnJ9PurBPzm4g7Pw8sdG59xm4n7SBXv3SxFXyIO27Q3kZdTRwhhG0qt0%2F49TX%2BQRXmiBUvXT0oRWbzYKiOJmjgIf7K703R7ccJMdV7Ch6MSTAxVciI0LerRVeP7wr8Uw2HWbXaN2vAObZb6H9ddn9%2BltgoginswSe7OZEPStmTIdSwHyUTH%2BETc%2BpCBTEiMc%2FsT0c%2FPDK5%2BpgEZcDzsfbcL4cWziBzAqgd3nC44shJptZWnIi%2BT3mcPb7mJFkG%2FVp94ZBsBGRJOnGrerBckDxHzCRxkqPiAtiC8AJPQhIshc779PLx4LEoMKPCkAwkKkO21pcZyKUc%2BHyJitOtFSiMeev4WdOBB9%2F8Z4%2FI6UCZvcLX2DzHsOFBzmtG2zHpMLpKkx5Eljj3EzGENxJlRGtjl21B7DfaHp2pdtl6G8300xmua%2BIPobOTbXpLrKmfsW7ePHngiO1sWx74MOHRicoGOqUB5pYUhe1pjZqnSX9dO7gr0uNhdlAFYMAeBOkJGW76xUxix%2BwizXuM2NZLy5uCqhmc2M4AwoT0sd5mRtUTXv9VLn9mFVOr9Zpaei4H6vbusxrC6uMq1N86kEBN4cFvJgZpuPcHDrrNDv0VYqXx%2FnDzy5%2BApqrBbmoYfVRF2mbg7moiXlMz1N0tG35BJfMMojRtR77OIFeaVBPsbUF%2FpJTdpbpP84K8&X-Amz-Signature=423531b87999143f9f41ff561a88c87bf61445005c3d7065fb974fa8ee0c72e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632NMOQZK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCv3%2B90617YV7TLluhXbGuRRNv0HyFXj4u%2Fc1aP%2Bw4FgIgGpuTizuNAJSfUdU7zRf1XzH%2Fo%2BvWFmYNlAA4dalc7DMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFzpZNtkaTIm7J2JUyrcA1v3TlL8X%2BOcazjTGC7H7HBPVDylLNiXWX0jkkdgjHa7tXFfex4jZpF3In5t4Nj4Z1LGnKDQTXE0lVE9R8G0mD6GIV60WXZ4a1z0tnGCIhXYON9fSopDlHf2Q0SSFxZZJSp1Wx%2BDKuWbUFFAYG50qUAqY5ltqtFbIZiBi%2BRDewtCRmLnJ9PurBPzm4g7Pw8sdG59xm4n7SBXv3SxFXyIO27Q3kZdTRwhhG0qt0%2F49TX%2BQRXmiBUvXT0oRWbzYKiOJmjgIf7K703R7ccJMdV7Ch6MSTAxVciI0LerRVeP7wr8Uw2HWbXaN2vAObZb6H9ddn9%2BltgoginswSe7OZEPStmTIdSwHyUTH%2BETc%2BpCBTEiMc%2FsT0c%2FPDK5%2BpgEZcDzsfbcL4cWziBzAqgd3nC44shJptZWnIi%2BT3mcPb7mJFkG%2FVp94ZBsBGRJOnGrerBckDxHzCRxkqPiAtiC8AJPQhIshc779PLx4LEoMKPCkAwkKkO21pcZyKUc%2BHyJitOtFSiMeev4WdOBB9%2F8Z4%2FI6UCZvcLX2DzHsOFBzmtG2zHpMLpKkx5Eljj3EzGENxJlRGtjl21B7DfaHp2pdtl6G8300xmua%2BIPobOTbXpLrKmfsW7ePHngiO1sWx74MOHRicoGOqUB5pYUhe1pjZqnSX9dO7gr0uNhdlAFYMAeBOkJGW76xUxix%2BwizXuM2NZLy5uCqhmc2M4AwoT0sd5mRtUTXv9VLn9mFVOr9Zpaei4H6vbusxrC6uMq1N86kEBN4cFvJgZpuPcHDrrNDv0VYqXx%2FnDzy5%2BApqrBbmoYfVRF2mbg7moiXlMz1N0tG35BJfMMojRtR77OIFeaVBPsbUF%2FpJTdpbpP84K8&X-Amz-Signature=6982959e564f4314e59ef6b7fbd84e1adf9fa033af3fb51e1baf96e505cf0564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
