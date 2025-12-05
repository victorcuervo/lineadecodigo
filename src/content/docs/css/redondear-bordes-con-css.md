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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q72HT6XM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjltWLun%2BabeBgSLI3Nz6CT1ONl6GBnXtewV58AQLVUAIhAL8il8zVjcmfLR%2Bs1HzBdigSTRsVOkz1SzGiKBjThHZvKv8DCGAQABoMNjM3NDIzMTgzODA1IgxCl4C51Zuw2j3pGssq3AOSz6DxO5ZV8UEZEGSIp61trGzkfHnvaj30RepG7N6ilb1ZSsGPWo2qjT5x3%2F9lhGK2plE26dRGlKkkQPC%2F6IFC1LZes5JdGMT%2BlVLZFY9NiO%2FKAO7%2BOt9DF0NaaGteazmIzL81qIUyd3hwpipVDKcyWr5BNX3TMpuF1z1J9Y3LY4QhEINPqOfC88xrEY95d2%2BsgaEdT3N%2BAkoFBrNNlm25SizotwM0iGQ3P60AMtmNTvEgfpDeqej%2FWCOsgOM44QGy421p359rDu2C4z3BTiAjLaapo8dI2UVv7lH53dTomVT8mML%2FGRlp22q5UKGOiYGBkQsYAnR%2B3kjlD%2BkCZOnzfoTHFPDmehd5fCSxofFEKvw3yKIOvUSVm36XENcPqCgtPzu8kFRXjy63%2F15BjuwuRjL50RL0r4e1UEkptDDyp6NXq4HMe1JRWwIe1rUbXjKR1y%2BHsfby0gAA9uOIqK%2Fjd4fXpxwJd%2ByRnVF%2BypqHA2E5HHibtKuu76R0Lndz7t7lqGZNQqvE8c%2BwbCk5K1UuZp95ZhHDdi8jU5kUo6myych3ImJ%2FFrPFNm6bFoPiz6RH4rsxGFnk1SKAVNPBP0i1oZxUEEGfbmUlw5YqPRiKzeW0xe35AJiEQedCFzC%2B4cvJBjqkAd1HzkfNck%2FPVp0%2Fqe9mjc8t3DFneXPyBk2XuCC%2B5kMFEyfrWU32s96hHyW5yJCBh6LMp5IV0z%2F8L0uVDBJoAea1QM4nUwo5ZQC8RpPFLZrHV2dSsW5C4eZIjAm2bM1f5YKmXpQdW0d0s1vBDIQdK21b8O4esEY%2BBDVNN1%2B5dyRGGY8BGaB8bUdRvyThGeZTKLVSonUIQEQXS4mnz8YOd9GLTbMs&X-Amz-Signature=55fd3026fcf935ae459eae4772e5904f8040a9e93909e665e14cfe3dad0c28ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q72HT6XM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjltWLun%2BabeBgSLI3Nz6CT1ONl6GBnXtewV58AQLVUAIhAL8il8zVjcmfLR%2Bs1HzBdigSTRsVOkz1SzGiKBjThHZvKv8DCGAQABoMNjM3NDIzMTgzODA1IgxCl4C51Zuw2j3pGssq3AOSz6DxO5ZV8UEZEGSIp61trGzkfHnvaj30RepG7N6ilb1ZSsGPWo2qjT5x3%2F9lhGK2plE26dRGlKkkQPC%2F6IFC1LZes5JdGMT%2BlVLZFY9NiO%2FKAO7%2BOt9DF0NaaGteazmIzL81qIUyd3hwpipVDKcyWr5BNX3TMpuF1z1J9Y3LY4QhEINPqOfC88xrEY95d2%2BsgaEdT3N%2BAkoFBrNNlm25SizotwM0iGQ3P60AMtmNTvEgfpDeqej%2FWCOsgOM44QGy421p359rDu2C4z3BTiAjLaapo8dI2UVv7lH53dTomVT8mML%2FGRlp22q5UKGOiYGBkQsYAnR%2B3kjlD%2BkCZOnzfoTHFPDmehd5fCSxofFEKvw3yKIOvUSVm36XENcPqCgtPzu8kFRXjy63%2F15BjuwuRjL50RL0r4e1UEkptDDyp6NXq4HMe1JRWwIe1rUbXjKR1y%2BHsfby0gAA9uOIqK%2Fjd4fXpxwJd%2ByRnVF%2BypqHA2E5HHibtKuu76R0Lndz7t7lqGZNQqvE8c%2BwbCk5K1UuZp95ZhHDdi8jU5kUo6myych3ImJ%2FFrPFNm6bFoPiz6RH4rsxGFnk1SKAVNPBP0i1oZxUEEGfbmUlw5YqPRiKzeW0xe35AJiEQedCFzC%2B4cvJBjqkAd1HzkfNck%2FPVp0%2Fqe9mjc8t3DFneXPyBk2XuCC%2B5kMFEyfrWU32s96hHyW5yJCBh6LMp5IV0z%2F8L0uVDBJoAea1QM4nUwo5ZQC8RpPFLZrHV2dSsW5C4eZIjAm2bM1f5YKmXpQdW0d0s1vBDIQdK21b8O4esEY%2BBDVNN1%2B5dyRGGY8BGaB8bUdRvyThGeZTKLVSonUIQEQXS4mnz8YOd9GLTbMs&X-Amz-Signature=9efb25523a8542ac23b1ab996f8d976989a588b751c484266b12cfd8612154a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
