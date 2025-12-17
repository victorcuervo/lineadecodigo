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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQY5RFXQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2BYYk1xiMcnn24hB2ZuwY7Q8ohwOH1U0PA1%2FY%2Bw8dtQIhALV1RThr9hL%2For4CYbyc6NAzdOswBFIRsCl%2Fsljb6%2FQoKv8DCHMQABoMNjM3NDIzMTgzODA1Igwa7YM1OE%2FtZ32YVdIq3APSEA0fEuvdeYoWkvFbFHcqaRfohcCkvu%2FZ2WAyAyRhjWRCdSnhSXOsD4k4JIOJKxBzXylz1lR8tDe6%2BOZeLXNOB%2FUa6%2BPCElFLUNW%2BTVy5kzb3ql4nfTP3VL0lLGlYqpCyusY%2FFoEp5or5OJ0LtrMvHP0Mi1cJpG4SaOs9eyhbmtYkfWxNGDCz5UWxEAEOERQFnBwMAo86QuuBFQsyysrJ9KDsKJ6tgjqUamqoy%2BSKUybpdBOrvnH3hOCTsGAIJWSqpXq2LHNCQWwYEe5QsXdHDRQEcYG4zaHcFDwGNAHPaOKjYAsY1JQ9opW%2BTRLpTs%2FYX0jtJHD0huJxYBB67cUbF6wQC%2B2Y3QrzA9AasAduq82TNcaUAPnyEgYwucH2rdBumNNjWZoZAtC6GTk9w8qm6N7jWkNDbvdoFTPC7ju3EfCP7BhHqFjEpv3Rcg%2FhliVSV2iSBdQa1t6NnN098Qrqy0Sjpz%2FRD%2FmOZzRJfwvv6pTPmM%2FepVh6q2YlB6leE%2FCxL8JH6BA9sb8p%2BbljbOoqIXmV2xXWmeABUnRS5CUmfkL03UFDMZmky8ai6k%2FGJi%2FnLi3zR%2FALLws1I5dci3Ec9odpIjs5kPqf%2FEux3ZjqkAglZhQpFP2D%2F%2BWWujD5l4jKBjqkAU9Mko8HQqDqmpMn9ZGIMEzRIKIsZ3ZBNkXuZuTyCF%2BydtKsjEIrntZF8hqoyjlDghUZR0fyf4bGV0mA6Y5qPPlEMQ%2FWYT7P3%2Fp6J4u1l1YZ%2F6b3cxrqikygcf2EvBOtemxQ4jB7GmiVuGxKGV8c3y5ZE32r8houDCzQWfFFOVOU7Gxi7YFNRz7o%2FP9vdLr24S%2Fm1OnGEPN9s%2BWnQ9pyCMm%2B%2BCgx&X-Amz-Signature=4bd49d4bb11991463988599ef3aed9eda39d50873f9e8aae44cb83fa4eebc4f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQY5RFXQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2BYYk1xiMcnn24hB2ZuwY7Q8ohwOH1U0PA1%2FY%2Bw8dtQIhALV1RThr9hL%2For4CYbyc6NAzdOswBFIRsCl%2Fsljb6%2FQoKv8DCHMQABoMNjM3NDIzMTgzODA1Igwa7YM1OE%2FtZ32YVdIq3APSEA0fEuvdeYoWkvFbFHcqaRfohcCkvu%2FZ2WAyAyRhjWRCdSnhSXOsD4k4JIOJKxBzXylz1lR8tDe6%2BOZeLXNOB%2FUa6%2BPCElFLUNW%2BTVy5kzb3ql4nfTP3VL0lLGlYqpCyusY%2FFoEp5or5OJ0LtrMvHP0Mi1cJpG4SaOs9eyhbmtYkfWxNGDCz5UWxEAEOERQFnBwMAo86QuuBFQsyysrJ9KDsKJ6tgjqUamqoy%2BSKUybpdBOrvnH3hOCTsGAIJWSqpXq2LHNCQWwYEe5QsXdHDRQEcYG4zaHcFDwGNAHPaOKjYAsY1JQ9opW%2BTRLpTs%2FYX0jtJHD0huJxYBB67cUbF6wQC%2B2Y3QrzA9AasAduq82TNcaUAPnyEgYwucH2rdBumNNjWZoZAtC6GTk9w8qm6N7jWkNDbvdoFTPC7ju3EfCP7BhHqFjEpv3Rcg%2FhliVSV2iSBdQa1t6NnN098Qrqy0Sjpz%2FRD%2FmOZzRJfwvv6pTPmM%2FepVh6q2YlB6leE%2FCxL8JH6BA9sb8p%2BbljbOoqIXmV2xXWmeABUnRS5CUmfkL03UFDMZmky8ai6k%2FGJi%2FnLi3zR%2FALLws1I5dci3Ec9odpIjs5kPqf%2FEux3ZjqkAglZhQpFP2D%2F%2BWWujD5l4jKBjqkAU9Mko8HQqDqmpMn9ZGIMEzRIKIsZ3ZBNkXuZuTyCF%2BydtKsjEIrntZF8hqoyjlDghUZR0fyf4bGV0mA6Y5qPPlEMQ%2FWYT7P3%2Fp6J4u1l1YZ%2F6b3cxrqikygcf2EvBOtemxQ4jB7GmiVuGxKGV8c3y5ZE32r8houDCzQWfFFOVOU7Gxi7YFNRz7o%2FP9vdLr24S%2Fm1OnGEPN9s%2BWnQ9pyCMm%2B%2BCgx&X-Amz-Signature=d9618035872d737701b2a081163a439f2e753dcca2db75384286a67cfbee3986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
