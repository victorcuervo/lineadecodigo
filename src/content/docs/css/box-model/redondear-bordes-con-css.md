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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGCFKE5Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC3BGEdpiGB1P%2FUNdm2GaQIR2Ig5c0%2FyT4MQ85W%2F4fVAiBwuDxg1JVru1eWRkn%2Bn5bDFPVbQIoOi7mspL5r4LWm8Cr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMywVM6WvSMu1KcuoTKtwDLtE5Nd6o4ITmVtCiPaYEmz2fvZKsLj0tXNGuHWnFNy6pvAiOq4t9Zja4XvbI0wHP008HehBFSLJaWpzFcpkX9HlL1lk7Tf9IavW9%2BglvJ72sxJ48zsqnEyrvP3WG8Gn4eYbbC0wB7PGMttVJqiezVaqt5rJtQq1ly6Yabkbu%2Bjeyll7bNtZwBpRiM08hENv7965geJ11kTfXiN%2FBmNpXXPV%2FlrxWju64tuehZlBbTPnsTjPGE%2BSP%2FOw5XjFu7b5%2BQWi7rszSzJKMvKHEf1NpXmlEWmIx%2Faoiia3YfWSXIFCtwKDeXalx0%2Byos%2Bf6KJ8vrkgW1l9MHDbUzhsK1jrbuV%2FYr38OiD8zP5xuwTFDX5wgTaQXsVlfmO%2FCw3XxGBuyH3yVNLuJPJtba%2BjYbQRh6fESJja9k%2Beh2Z7v6A8tZeQKxe8OBn7hou4T1uAVCw2fJkhY4ZrKUvBrSFaTbbs3G9oP21vxeMgLdrKbT1OdZihQg7ZT0W%2FmSue4cQOmDynkmbVCRKMsYil%2B6LtEwSXhAc9LcanMyrazF2lO0je84hg5MyVA68hGOAJWiR2HewNNxdcKEpJDbB3VuGFEyEEgvJCTwren7%2FWy8U4MF6S5YH53ySG8J7JBarZtTMQwzPCJygY6pgEQkne17AO7u1EbD81AbugWsMElZVTlzR2R%2BpAvlmGEDp9EpgLcUJfFco%2F%2FciVzuP%2BM6IlnELlm4RQZIhQx6GhxsMcnFZUSvQtr60GkbTl0Xu5zz7BHOevgPmVmGfc6HY3Cx2E0xKU1aUQ1f69Adv9VI6pF65ydsX2Y7pILp8Ajj4JjpdTjZS7hWNtQ8XHHQjvYURpTETuuZ0%2F9L4xtXuxmX%2Bkei%2Fxx&X-Amz-Signature=3ffc7ee6212214c2739753b1c9d2f24e53d494182b1ac7e18f7981c183bbc6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGCFKE5Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC3BGEdpiGB1P%2FUNdm2GaQIR2Ig5c0%2FyT4MQ85W%2F4fVAiBwuDxg1JVru1eWRkn%2Bn5bDFPVbQIoOi7mspL5r4LWm8Cr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMywVM6WvSMu1KcuoTKtwDLtE5Nd6o4ITmVtCiPaYEmz2fvZKsLj0tXNGuHWnFNy6pvAiOq4t9Zja4XvbI0wHP008HehBFSLJaWpzFcpkX9HlL1lk7Tf9IavW9%2BglvJ72sxJ48zsqnEyrvP3WG8Gn4eYbbC0wB7PGMttVJqiezVaqt5rJtQq1ly6Yabkbu%2Bjeyll7bNtZwBpRiM08hENv7965geJ11kTfXiN%2FBmNpXXPV%2FlrxWju64tuehZlBbTPnsTjPGE%2BSP%2FOw5XjFu7b5%2BQWi7rszSzJKMvKHEf1NpXmlEWmIx%2Faoiia3YfWSXIFCtwKDeXalx0%2Byos%2Bf6KJ8vrkgW1l9MHDbUzhsK1jrbuV%2FYr38OiD8zP5xuwTFDX5wgTaQXsVlfmO%2FCw3XxGBuyH3yVNLuJPJtba%2BjYbQRh6fESJja9k%2Beh2Z7v6A8tZeQKxe8OBn7hou4T1uAVCw2fJkhY4ZrKUvBrSFaTbbs3G9oP21vxeMgLdrKbT1OdZihQg7ZT0W%2FmSue4cQOmDynkmbVCRKMsYil%2B6LtEwSXhAc9LcanMyrazF2lO0je84hg5MyVA68hGOAJWiR2HewNNxdcKEpJDbB3VuGFEyEEgvJCTwren7%2FWy8U4MF6S5YH53ySG8J7JBarZtTMQwzPCJygY6pgEQkne17AO7u1EbD81AbugWsMElZVTlzR2R%2BpAvlmGEDp9EpgLcUJfFco%2F%2FciVzuP%2BM6IlnELlm4RQZIhQx6GhxsMcnFZUSvQtr60GkbTl0Xu5zz7BHOevgPmVmGfc6HY3Cx2E0xKU1aUQ1f69Adv9VI6pF65ydsX2Y7pILp8Ajj4JjpdTjZS7hWNtQ8XHHQjvYURpTETuuZ0%2F9L4xtXuxmX%2Bkei%2Fxx&X-Amz-Signature=0d5761ca86180a62306efa58196709261234c204f8127420c39ae29789316558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
