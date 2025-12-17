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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZAH5OD2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqiTk5T7DxfNrW8pP6UA38xIgbmZj8MtGWxiO4DmdaRQIgaFxjKcpdxGXTZKTcXSD3N99JDNjkb1VUbCAgk65O%2Bv0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDOx0jify4JuNIVe9KircAy3AndzWHoH3CmfaHSdynA%2BJvH%2FXt%2BVr5lr9rlMCfQ1db7NGtR6PciYv29avPIkluWIpHIiWo93z%2FhPUVyaDBXnFb%2B4cuSRNpDdML%2Bd2aaareAT5sdoBHo2giXvk5J0BkhiGRjkRRrKTOJCc9sTWtU2JYL9M5qwLVp1AOhJSiAyonC0cvnLXlrPU3XLBZig0x5eRe0e7w9H%2BBhPEQEAVCS9frBTMpH63KPxb8jd0ha5aePnWfW2KtHeT6VzRnlOzpg9HWJRH1ylljkC6VtNQrKMee4gs44K6MrnbJkl5V99mWS3GIj3XQR0NHWFxK5t2ybc3GXjvWadYre0AjwB8vL027NgNi1zucnB1XgMbf0H0Ib8lmqC3G%2FjI1P8YJyF02hOWaCJ%2BOE77wJf0%2BOWXf98jPCBeNVNV9PeMOd8iYU4M0%2FiwuXHuIflizhZyBdiFhj8kbwQwzM549NVMp7I4%2FTfNnZezj4dtq%2FVpVIYaogfHmFdV%2BHCe%2Bts6nFVnJRrZpUEuV1Ob%2BDtlSuZRTEpszvh%2BCsmTQ4VphQgIzGOtPihmNDbIVc%2B%2Ff2XNzBFwvKiIHy4nS%2FYA3KXhU8aemDySL9gN6mDC2Q9vKu9Dbsx6Gs762SnnODxn5U366NLQMJ%2FwicoGOqUB6nDi%2BtUGLmElUEh76XnxRrIHqpRJtqo4SSK2hBlMg3DlpcxVNwyWhPc1Qc6a5lJyMwARCa%2B43Rx4ns60J3yerIyAPVGa%2Bm2z1rx845JIVnxhQSNPH1GpCXlM04F%2FjooSQ0l1j4kIwzv9H8WciTPk2IyHUSSlA4fu%2B86touVm5fLDQsJ2npwNo7Dzru9ddsim4bPA0McFqKXCe9nwkWj92SglHrzr&X-Amz-Signature=9dc97f05a8033c933c19a00398668c37461becf34b1df841e74237dbfa5ca19a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZAH5OD2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqiTk5T7DxfNrW8pP6UA38xIgbmZj8MtGWxiO4DmdaRQIgaFxjKcpdxGXTZKTcXSD3N99JDNjkb1VUbCAgk65O%2Bv0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDOx0jify4JuNIVe9KircAy3AndzWHoH3CmfaHSdynA%2BJvH%2FXt%2BVr5lr9rlMCfQ1db7NGtR6PciYv29avPIkluWIpHIiWo93z%2FhPUVyaDBXnFb%2B4cuSRNpDdML%2Bd2aaareAT5sdoBHo2giXvk5J0BkhiGRjkRRrKTOJCc9sTWtU2JYL9M5qwLVp1AOhJSiAyonC0cvnLXlrPU3XLBZig0x5eRe0e7w9H%2BBhPEQEAVCS9frBTMpH63KPxb8jd0ha5aePnWfW2KtHeT6VzRnlOzpg9HWJRH1ylljkC6VtNQrKMee4gs44K6MrnbJkl5V99mWS3GIj3XQR0NHWFxK5t2ybc3GXjvWadYre0AjwB8vL027NgNi1zucnB1XgMbf0H0Ib8lmqC3G%2FjI1P8YJyF02hOWaCJ%2BOE77wJf0%2BOWXf98jPCBeNVNV9PeMOd8iYU4M0%2FiwuXHuIflizhZyBdiFhj8kbwQwzM549NVMp7I4%2FTfNnZezj4dtq%2FVpVIYaogfHmFdV%2BHCe%2Bts6nFVnJRrZpUEuV1Ob%2BDtlSuZRTEpszvh%2BCsmTQ4VphQgIzGOtPihmNDbIVc%2B%2Ff2XNzBFwvKiIHy4nS%2FYA3KXhU8aemDySL9gN6mDC2Q9vKu9Dbsx6Gs762SnnODxn5U366NLQMJ%2FwicoGOqUB6nDi%2BtUGLmElUEh76XnxRrIHqpRJtqo4SSK2hBlMg3DlpcxVNwyWhPc1Qc6a5lJyMwARCa%2B43Rx4ns60J3yerIyAPVGa%2Bm2z1rx845JIVnxhQSNPH1GpCXlM04F%2FjooSQ0l1j4kIwzv9H8WciTPk2IyHUSSlA4fu%2B86touVm5fLDQsJ2npwNo7Dzru9ddsim4bPA0McFqKXCe9nwkWj92SglHrzr&X-Amz-Signature=5d3fc9e24d4e594edd1af07e13cbf2e738457f1880b802f1d3f05d85b1a939e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
