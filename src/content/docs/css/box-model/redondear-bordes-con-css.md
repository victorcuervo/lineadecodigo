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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6G7XX7P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3PJhkcvZHX6Ew49VNAljH1H0KXV6rsOIdmMu2DnOi%2FAiBpsir%2FO0FMCvwnZNwRPJjhosOgFUsxynYlTvSFQML1hCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMsVdXcAnG29GRDynGKtwDIx%2BqJNXjveZghj7rZ06HySe34805NI04gtH7ekcbaqn0Hzp8%2FZU1iNZ%2BVVF8gvkQFWIaYWOAJ7uTdorHjtZZ98VEB8Kx2kJffto4WxvqCuBlXB%2Bski0uVId47eNXfZTRLvanoUNHZe5tV9Fv1n5veF%2Bp9QMEkXmH%2B%2BYLfAG1eQTlsNEZfVxdTut3%2BOULalYH%2FESQPsQBzQ6Du0i8Sw8J7pcvGXPFC%2FBL6HKSBnMtzB75r597Zfwcb7AaoLx%2F8cZTXDQil9oYrwPBu%2BNeviDBYGcvZTd9PqYkLERZlrGOJ%2B2iuLDqooDbNzDYPp0hDl4TL5KH%2B0MtKbX9nAYKwGfaAGPh%2B00EejIHkrckPuyDJwPBMTuc%2Bv3gb5AvpZc90N%2BDBuB8w8Cfm3L5lztrK%2FgPCICf5STofYsIfUr9n%2F8RymS%2BBA19t20sDX2bA9GOa39pppYQn5vvwacM8bPfsdr4cLEDYWylF6uVFrsJVXxwSe0eOEftELntT5vmFrS%2F9CzivsD4By%2BwnTTwRKUN5iALd4HmoIyZsCcmEMTr1rdXgzqJrCGvIpkuuhkzJ59KjDeVBsJEKzbioPWiiwd3F9d88LYbB5eKJW2HBOewNoEP5BsPTznCHg8KSq0PspYwkeGKygY6pgEAe5dkTj2kWozAZP4823W99yIwtwc6cAW4hpsBLTdLe3TCuL5ejAI5BeLn%2FYvCquLiHL3Pq8pZLLVbEg%2FoCJO9ZxZvhBrb2zRB9L5mH5qcnPeYv7PJv502fvEG3jWVuQhh%2BOat2NdOHeAFnpZr4atS2yFy5JBFrbglWuGHZYP4O9TJW4jSKRghH%2BPp6mZYv4ffjoOrtKHspGvQCE0XZwJ0gwkgDpNN&X-Amz-Signature=f32f4e49e75b47ebf0baa34fe84d9b5c8864d44593f1c9ff6ec63b256fcecd3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6G7XX7P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3PJhkcvZHX6Ew49VNAljH1H0KXV6rsOIdmMu2DnOi%2FAiBpsir%2FO0FMCvwnZNwRPJjhosOgFUsxynYlTvSFQML1hCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMsVdXcAnG29GRDynGKtwDIx%2BqJNXjveZghj7rZ06HySe34805NI04gtH7ekcbaqn0Hzp8%2FZU1iNZ%2BVVF8gvkQFWIaYWOAJ7uTdorHjtZZ98VEB8Kx2kJffto4WxvqCuBlXB%2Bski0uVId47eNXfZTRLvanoUNHZe5tV9Fv1n5veF%2Bp9QMEkXmH%2B%2BYLfAG1eQTlsNEZfVxdTut3%2BOULalYH%2FESQPsQBzQ6Du0i8Sw8J7pcvGXPFC%2FBL6HKSBnMtzB75r597Zfwcb7AaoLx%2F8cZTXDQil9oYrwPBu%2BNeviDBYGcvZTd9PqYkLERZlrGOJ%2B2iuLDqooDbNzDYPp0hDl4TL5KH%2B0MtKbX9nAYKwGfaAGPh%2B00EejIHkrckPuyDJwPBMTuc%2Bv3gb5AvpZc90N%2BDBuB8w8Cfm3L5lztrK%2FgPCICf5STofYsIfUr9n%2F8RymS%2BBA19t20sDX2bA9GOa39pppYQn5vvwacM8bPfsdr4cLEDYWylF6uVFrsJVXxwSe0eOEftELntT5vmFrS%2F9CzivsD4By%2BwnTTwRKUN5iALd4HmoIyZsCcmEMTr1rdXgzqJrCGvIpkuuhkzJ59KjDeVBsJEKzbioPWiiwd3F9d88LYbB5eKJW2HBOewNoEP5BsPTznCHg8KSq0PspYwkeGKygY6pgEAe5dkTj2kWozAZP4823W99yIwtwc6cAW4hpsBLTdLe3TCuL5ejAI5BeLn%2FYvCquLiHL3Pq8pZLLVbEg%2FoCJO9ZxZvhBrb2zRB9L5mH5qcnPeYv7PJv502fvEG3jWVuQhh%2BOat2NdOHeAFnpZr4atS2yFy5JBFrbglWuGHZYP4O9TJW4jSKRghH%2BPp6mZYv4ffjoOrtKHspGvQCE0XZwJ0gwkgDpNN&X-Amz-Signature=1094d610432485a413e415e03030784937462745ba8c35818f3591ddd134f4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
