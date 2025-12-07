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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSZQ6XZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlf4QVU2u3azi%2BE268CwRR5614uNGGxstghOhCFHpHVAiA3uPJvtRDZokx07wHzpA9Y%2FDrhOiyIRsrVs7zvDomx3iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyY%2Fwg%2Bz845v5L13KtwDdMo9VDzXVnKv%2BLI7pi3dfa%2Bf9hMqnnjSr0mcs4JcpSXxuUn5s9klsmTc0bAl4zhMgwS2uNO3NSOIX0c8mWmvmNRUD0brXNRNNWWZmhl%2BDvsstpEnNQIzQUYPpIfnVdFANHgd0wgeU0KMXHRiPdwnRu9W4dplb7oYmUjvIf5fE4y2cMgaF0FRz6PiqJlYFye47SCwrOzS9YcIlfr6%2BGE37NdHeaBTDkYA2uC5Z%2BM3eMx1gV7jjQXalZy2R5wMlK4nbQlu1xDg7ZtQXmNJcLM1sMcUmiwxTenIMJZ3gU6n6nIqDaWEoo1DfnUojil1G4znkBRVi9tqhzz9jSNTsrCf1693a90Eb9jlma%2BPcVosJl0ZLmYDHGEXQNe97VKXXFK4%2Bx8f%2BvagP7eDOunYKDTU%2FGb0CkW9flwM5xh5%2FYF72w2qtAbrspaCaRTAnWgnW8LC%2FE1%2BDjSkreBoZyZopPzs6caqHbMj2t%2BEL6Y0d1f1WmywLn89FG3j8wpfd43sm8fyvImLs1E2CT%2FsnDrxGCVcerPrB1n%2B8SWBIPOBSGbS0XAQKhQC6eZ9%2Bt%2FEkm7qYdhgMwRi%2B2TwkzaFeR7hWA8YbLz7hhOViXaRszOmEHW7fseDOHeDEwh86G8pIqUw4JrVyQY6pgF4WJAkS1rwuj9pBdkuJbpyXu6g72%2F3asBS%2FWQthtOSguRi92TC2u%2Flg1iXNf39yC4wBE5L04WPqyaAFyc0n7PTLQbKvh4I77bLz%2BUmVNarTfd%2BSUATtzNfQb7yA7RQokWXftzNu6f7bW2QBqvZQFjQF5sRu4YMPnr%2Bqy8IrOS0wWF8aiSdmk%2BYZatcxtuI3j12iMNWupclZ5seip%2BMJ4%2BaFOWp2Adk&X-Amz-Signature=8dcfe65f2342c918f9330c4d4a31a4f2a52886e3c4b3f0c09350bf956c763254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSZQ6XZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlf4QVU2u3azi%2BE268CwRR5614uNGGxstghOhCFHpHVAiA3uPJvtRDZokx07wHzpA9Y%2FDrhOiyIRsrVs7zvDomx3iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyY%2Fwg%2Bz845v5L13KtwDdMo9VDzXVnKv%2BLI7pi3dfa%2Bf9hMqnnjSr0mcs4JcpSXxuUn5s9klsmTc0bAl4zhMgwS2uNO3NSOIX0c8mWmvmNRUD0brXNRNNWWZmhl%2BDvsstpEnNQIzQUYPpIfnVdFANHgd0wgeU0KMXHRiPdwnRu9W4dplb7oYmUjvIf5fE4y2cMgaF0FRz6PiqJlYFye47SCwrOzS9YcIlfr6%2BGE37NdHeaBTDkYA2uC5Z%2BM3eMx1gV7jjQXalZy2R5wMlK4nbQlu1xDg7ZtQXmNJcLM1sMcUmiwxTenIMJZ3gU6n6nIqDaWEoo1DfnUojil1G4znkBRVi9tqhzz9jSNTsrCf1693a90Eb9jlma%2BPcVosJl0ZLmYDHGEXQNe97VKXXFK4%2Bx8f%2BvagP7eDOunYKDTU%2FGb0CkW9flwM5xh5%2FYF72w2qtAbrspaCaRTAnWgnW8LC%2FE1%2BDjSkreBoZyZopPzs6caqHbMj2t%2BEL6Y0d1f1WmywLn89FG3j8wpfd43sm8fyvImLs1E2CT%2FsnDrxGCVcerPrB1n%2B8SWBIPOBSGbS0XAQKhQC6eZ9%2Bt%2FEkm7qYdhgMwRi%2B2TwkzaFeR7hWA8YbLz7hhOViXaRszOmEHW7fseDOHeDEwh86G8pIqUw4JrVyQY6pgF4WJAkS1rwuj9pBdkuJbpyXu6g72%2F3asBS%2FWQthtOSguRi92TC2u%2Flg1iXNf39yC4wBE5L04WPqyaAFyc0n7PTLQbKvh4I77bLz%2BUmVNarTfd%2BSUATtzNfQb7yA7RQokWXftzNu6f7bW2QBqvZQFjQF5sRu4YMPnr%2Bqy8IrOS0wWF8aiSdmk%2BYZatcxtuI3j12iMNWupclZ5seip%2BMJ4%2BaFOWp2Adk&X-Amz-Signature=7c0d006a07f4ae65df4e5e6a485dbf18778c971ce8dd7068cb7b5b99bc8fc51f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
