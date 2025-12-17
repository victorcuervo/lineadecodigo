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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7JMCMH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb%2BbjRvVbnBShcmNxOc19yjemS%2BzEG7F2lBqeX5GZQgAIgZ2LBfDfdsb5v7wXkJlquDG32oDEPi97itrQgTU2mRxUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDmcIhIPURHC%2Bmf1LircA0POWtJZpjc4NX8pnZeqP%2F%2BV0GVTzuJsKiNcwJu3USP%2FNkTe2kS2678P2aMyfGM3QmiawV%2FiV%2FqIpV0EYhYPuDubJpljNIYEJ8%2FR9bXAqMhMQ8DCDYFb%2BHbuLpusWiUzoD9pnU0nf5p340k%2FrwjNk%2FIPtXr0%2ByEgsMnH73KVqJApaOs1sPounTDBEkCpoDAIO3PvxsPmZEMWPW1eCd%2BtUNewn4ECPh67aY1VgiSWN5iQn2z%2BQtHESot1ZdXyHz2l7x%2Fm67uXF0%2FZVYL7gQ9Cy71p1a%2FSJvAopUlDSYdKW5M5cSkMMEUqOXmgAwVx%2FiF6aGHU34DIczZWYKrezLYIT83bo%2BtjnvU9151XIFCTPYMweZfyEXwxn0EUy9SnLqC5e%2BQfIKbUYHPZNn%2F%2BHtyplqfymjydUijYlUL1OFDuSMnHs63TUpbnVFHTp30GrZ7a5os%2BGNk0GYh%2BegQ%2BLUnfnhfP%2ByKK4ly%2F8Wq5tsi5BZhg2z%2BDuuXEIWPdjkLodm4CdrD0Qni70%2B%2FYwgs2mbYUHI2zVTQCoQVl9Q3Gr8tvYp4XELgJQZWWSThf6RR%2Fy0XNs%2FPZs1sb6eXtMWSQGB0bG39v8goYF4eZXs4995MQ8w%2FXYGpwe8gltUlGNRPXMJvOiMoGOqUBDLS4LHuNiGC008kLu9%2BXL8gGGKA7uYjVn%2BiRmkpKz1Edo7X550OfyFBf9NNheSkNHd66E9eXrPalSdKQQHF1c%2FTfWSCcaPmDMcI8JUAZZ%2Fum6ga4s1w%2FmsvnonHCfzf8L3OcHyPTA4wmuUVZ7TEbXhwKqNm4vYHEbYzFEqWDbX9IkELLBFCF3wmsu%2BRXSUyjJsr9mBRAsjYTzRy1hW7OQCMlmqa8&X-Amz-Signature=0927f6bcc06b1bb25e9d5e79bfe14c1eb0cca4ed75e8f559814bb62e274f0b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7JMCMH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb%2BbjRvVbnBShcmNxOc19yjemS%2BzEG7F2lBqeX5GZQgAIgZ2LBfDfdsb5v7wXkJlquDG32oDEPi97itrQgTU2mRxUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDmcIhIPURHC%2Bmf1LircA0POWtJZpjc4NX8pnZeqP%2F%2BV0GVTzuJsKiNcwJu3USP%2FNkTe2kS2678P2aMyfGM3QmiawV%2FiV%2FqIpV0EYhYPuDubJpljNIYEJ8%2FR9bXAqMhMQ8DCDYFb%2BHbuLpusWiUzoD9pnU0nf5p340k%2FrwjNk%2FIPtXr0%2ByEgsMnH73KVqJApaOs1sPounTDBEkCpoDAIO3PvxsPmZEMWPW1eCd%2BtUNewn4ECPh67aY1VgiSWN5iQn2z%2BQtHESot1ZdXyHz2l7x%2Fm67uXF0%2FZVYL7gQ9Cy71p1a%2FSJvAopUlDSYdKW5M5cSkMMEUqOXmgAwVx%2FiF6aGHU34DIczZWYKrezLYIT83bo%2BtjnvU9151XIFCTPYMweZfyEXwxn0EUy9SnLqC5e%2BQfIKbUYHPZNn%2F%2BHtyplqfymjydUijYlUL1OFDuSMnHs63TUpbnVFHTp30GrZ7a5os%2BGNk0GYh%2BegQ%2BLUnfnhfP%2ByKK4ly%2F8Wq5tsi5BZhg2z%2BDuuXEIWPdjkLodm4CdrD0Qni70%2B%2FYwgs2mbYUHI2zVTQCoQVl9Q3Gr8tvYp4XELgJQZWWSThf6RR%2Fy0XNs%2FPZs1sb6eXtMWSQGB0bG39v8goYF4eZXs4995MQ8w%2FXYGpwe8gltUlGNRPXMJvOiMoGOqUBDLS4LHuNiGC008kLu9%2BXL8gGGKA7uYjVn%2BiRmkpKz1Edo7X550OfyFBf9NNheSkNHd66E9eXrPalSdKQQHF1c%2FTfWSCcaPmDMcI8JUAZZ%2Fum6ga4s1w%2FmsvnonHCfzf8L3OcHyPTA4wmuUVZ7TEbXhwKqNm4vYHEbYzFEqWDbX9IkELLBFCF3wmsu%2BRXSUyjJsr9mBRAsjYTzRy1hW7OQCMlmqa8&X-Amz-Signature=a2776671c795a04dddc4b30fe8a5693fcd3c719f777a087891944f34667e2770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
