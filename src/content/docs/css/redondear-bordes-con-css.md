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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM266BBW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnZTL3GMX5asbvJ%2BSA7sC47LNeaFyQTmcksN6Dsi7o%2BAiEAuRvKAMBSJQMLKRROXEHMDsHV9WUladMKbT5oYVmIjN0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDERLgr2s5t1%2BhuoutircA527NptCmpmMirS2tBU3ka%2BYPMlRsYj0bR0WB2CBCUe14x163nmGVmbTHfYcbT6Ctj1jeMS8WPNxT8sUQA0bAKPVnTsS7QZUVvGiExfvDJjg9%2F%2BHrUYYg6%2BnrOQAFl40S2T67GLFvDqbP9A4Iwcut7GpjGSdjV%2F1gB5kLGX2WEu9mJtSFDxAGIi5LQYGPqSiRfCjqO1WFKCtur6piEWOMLCYmER5nH3BFXUtUj%2BC92dnYf27fP3jVE6q7nonw%2Buvf%2FbL6m%2FLhxI7i%2BUFLYDDD3VKE85ztyQwynzbfIxOHTYygVK3Aa%2FnaPz8%2BssGzGkGrAZY6Bqho6vPuTOmX%2BPmgfNRTidADmMX1b%2BLiINBSsXKVKXy0b6k%2FTNAkIBZ7Q8PHqpzL9bvpaMz8OtPaFbmf1R9U72gpae%2FDmDTS40VZUBnugnOjSKARjI27EIDo3xkJqQU7PoLbOhzqf9AGBtgnzR8Lb1xCkJQuCpXgcpWiovDMHKLpPZJjSQaptOmzbIH5aGpdeP6FyUgsP8RwUUpJ4I3cxSHJObv3R7fxuTN9PVormwWZElQT4tdHwYL8LuX0d9%2BfYG9ddghgjVV4uqkGOTNTZEaVuBkR8y8cLC8r4IV4On6jNrbkI4%2B9A8TMKXrz8kGOqUBWrcvswKCy0QV86IZmiEjEIFw9niU5SmKOCDUxL0XEcBcIoFAjoF6nV6XkrC3Encnjc%2BYMyBE1YZeRs6ODDOnsOQLCe%2BFzGrZ0NUa%2BynT%2Bh8LfrciBoSLW9B7mvt0NidUAg7ZakuPhjn8oFwiDCp5xlnKrL94LLX%2Fsw1gmGnidlXK27KMkbPkQl8qNsUdpxgD00utAUofjOOTgTCOHz0V9TXvAGVI&X-Amz-Signature=24d763f4aeca92f11657d586c3b17239ac2ec2fad5652e5f43fd1b03da719229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM266BBW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnZTL3GMX5asbvJ%2BSA7sC47LNeaFyQTmcksN6Dsi7o%2BAiEAuRvKAMBSJQMLKRROXEHMDsHV9WUladMKbT5oYVmIjN0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDERLgr2s5t1%2BhuoutircA527NptCmpmMirS2tBU3ka%2BYPMlRsYj0bR0WB2CBCUe14x163nmGVmbTHfYcbT6Ctj1jeMS8WPNxT8sUQA0bAKPVnTsS7QZUVvGiExfvDJjg9%2F%2BHrUYYg6%2BnrOQAFl40S2T67GLFvDqbP9A4Iwcut7GpjGSdjV%2F1gB5kLGX2WEu9mJtSFDxAGIi5LQYGPqSiRfCjqO1WFKCtur6piEWOMLCYmER5nH3BFXUtUj%2BC92dnYf27fP3jVE6q7nonw%2Buvf%2FbL6m%2FLhxI7i%2BUFLYDDD3VKE85ztyQwynzbfIxOHTYygVK3Aa%2FnaPz8%2BssGzGkGrAZY6Bqho6vPuTOmX%2BPmgfNRTidADmMX1b%2BLiINBSsXKVKXy0b6k%2FTNAkIBZ7Q8PHqpzL9bvpaMz8OtPaFbmf1R9U72gpae%2FDmDTS40VZUBnugnOjSKARjI27EIDo3xkJqQU7PoLbOhzqf9AGBtgnzR8Lb1xCkJQuCpXgcpWiovDMHKLpPZJjSQaptOmzbIH5aGpdeP6FyUgsP8RwUUpJ4I3cxSHJObv3R7fxuTN9PVormwWZElQT4tdHwYL8LuX0d9%2BfYG9ddghgjVV4uqkGOTNTZEaVuBkR8y8cLC8r4IV4On6jNrbkI4%2B9A8TMKXrz8kGOqUBWrcvswKCy0QV86IZmiEjEIFw9niU5SmKOCDUxL0XEcBcIoFAjoF6nV6XkrC3Encnjc%2BYMyBE1YZeRs6ODDOnsOQLCe%2BFzGrZ0NUa%2BynT%2Bh8LfrciBoSLW9B7mvt0NidUAg7ZakuPhjn8oFwiDCp5xlnKrL94LLX%2Fsw1gmGnidlXK27KMkbPkQl8qNsUdpxgD00utAUofjOOTgTCOHz0V9TXvAGVI&X-Amz-Signature=733a8b17b52a50903219d66367768a4db6f008852730151b28ea42a9e841fa18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
