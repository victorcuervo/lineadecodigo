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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX2IYBBF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTbb%2FDpVY51SvhhAQxAbFOugtiIcbqtnfVemPDfSPf5QIhAJdMgK%2Bty%2FdH8SCM0%2BomV7YOuEvJpU0Z9EWnDTdo3SbEKv8DCH8QABoMNjM3NDIzMTgzODA1IgxPxWmkqfq07NkuIp0q3APre6ElnKr97sUBYXjO%2FSUh1pgBXuFFhYhFhTqKvRp3JTP7Gb8gC%2BiciLMUNBmytKB5kTi6HaOAQ9k7iurWMMUEzW6Oj%2FZ58ikAgGUEgTvG4OC%2Fw8D8z0f2HMrPG53h8lE72LBJAFePFyfktpbhgWSoVoVYnCRzl95eEqsqxIdFy75WCKjWfi79MoGnksft81AnzZp5tVfxpeL19FtXCOzO4mhYLOELow6emVdYkAnHjEvFkh3POwUYf76Qf8ktj2zG44yfafoK2RGqfgUgRftDpRV%2FktAPNu5iYk%2BQA6M9DMdui4raeM73LyD2RH2%2FcSgy%2FnlZ%2BbFA%2F2JEEMDTSzdML5wtwglDXx%2Fkl1yXqEs4%2FmWd7NBoKR2DCfmqQU0dojK448%2BnP7tz70VlSrDLOtNS8iLl4PCxe42NOX1LYjfzpYKRWRz6FoX4O7haPlvUqn%2BGPS2BA0ZLmFoENhukAznkTXNNz3lOIZ4HQTxkDxEzbFE9kVmBeLeaJI%2BX%2BnrlVIE0u%2FQ5fV%2FRqNNJFi7znkzllWWhfo5%2BYU5rt%2BljOO3mI5nag32s3gk7Klzy81axqGusVrt8mhn%2BDp%2FmeKZiPUZZM3qdh5AUA5E2bP4DYA%2FEk%2FpbiR%2F3MSCG8VTM7jDA09LJBjqkAblGz3WOLeBSMuEsKTzEjWyp7Yl0YhGlYg%2FGvedPRl%2Bjk7Ixf4nvJsatKkoky79yXYq9py2ogLE73%2FK0auStigTdbiHDq%2B5F5joydSeRQTnCyXTR1AYtARTyZ3t8RYoutZr9%2B32Wvj62Af7GW93f3Rbwlo%2FEaVTht1en%2Foo7qgQih%2FfHMbO6cQj6Fx54GMcmcx8%2B32JH7GmImwyP0VMJEIkRa4rL&X-Amz-Signature=0ee3b0cfb6095e28599ec6845bc1ef6b1b147995ea9c1dbb87cb29903c5c01f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX2IYBBF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTbb%2FDpVY51SvhhAQxAbFOugtiIcbqtnfVemPDfSPf5QIhAJdMgK%2Bty%2FdH8SCM0%2BomV7YOuEvJpU0Z9EWnDTdo3SbEKv8DCH8QABoMNjM3NDIzMTgzODA1IgxPxWmkqfq07NkuIp0q3APre6ElnKr97sUBYXjO%2FSUh1pgBXuFFhYhFhTqKvRp3JTP7Gb8gC%2BiciLMUNBmytKB5kTi6HaOAQ9k7iurWMMUEzW6Oj%2FZ58ikAgGUEgTvG4OC%2Fw8D8z0f2HMrPG53h8lE72LBJAFePFyfktpbhgWSoVoVYnCRzl95eEqsqxIdFy75WCKjWfi79MoGnksft81AnzZp5tVfxpeL19FtXCOzO4mhYLOELow6emVdYkAnHjEvFkh3POwUYf76Qf8ktj2zG44yfafoK2RGqfgUgRftDpRV%2FktAPNu5iYk%2BQA6M9DMdui4raeM73LyD2RH2%2FcSgy%2FnlZ%2BbFA%2F2JEEMDTSzdML5wtwglDXx%2Fkl1yXqEs4%2FmWd7NBoKR2DCfmqQU0dojK448%2BnP7tz70VlSrDLOtNS8iLl4PCxe42NOX1LYjfzpYKRWRz6FoX4O7haPlvUqn%2BGPS2BA0ZLmFoENhukAznkTXNNz3lOIZ4HQTxkDxEzbFE9kVmBeLeaJI%2BX%2BnrlVIE0u%2FQ5fV%2FRqNNJFi7znkzllWWhfo5%2BYU5rt%2BljOO3mI5nag32s3gk7Klzy81axqGusVrt8mhn%2BDp%2FmeKZiPUZZM3qdh5AUA5E2bP4DYA%2FEk%2FpbiR%2F3MSCG8VTM7jDA09LJBjqkAblGz3WOLeBSMuEsKTzEjWyp7Yl0YhGlYg%2FGvedPRl%2Bjk7Ixf4nvJsatKkoky79yXYq9py2ogLE73%2FK0auStigTdbiHDq%2B5F5joydSeRQTnCyXTR1AYtARTyZ3t8RYoutZr9%2B32Wvj62Af7GW93f3Rbwlo%2FEaVTht1en%2Foo7qgQih%2FfHMbO6cQj6Fx54GMcmcx8%2B32JH7GmImwyP0VMJEIkRa4rL&X-Amz-Signature=1d5dbb6703a220198748b23c4bb9f5762f318205099e70b32f4edd0eeb20f393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
