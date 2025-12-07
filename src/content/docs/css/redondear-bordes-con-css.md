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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XE5L4OO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeVmCRgnWj96HsKPNbop2%2BPcNrsiqwklBVA8yNbPis7AiB6ZdKnBmSeTFUid157RpCytBlA5lLeqcj7lUYIIHczqiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSPxW8u3jnas9SXQBKtwDqka2KV2vsEcVswx%2FsEr1T0x94mVmCnqoPoT48OkC%2FVwS9yTBQxCmRe%2Fn8j4X4ISTSy6HJRJAKWp9oL%2Ffr0z%2FpDMntv1vm9qRYoZq5FGoUxJybwJuYIAoUiAO74cWYlZeTYHAzmLPntAfrQCFr9jOEtRhAxG2t8pkx76Bd43tShjq6%2BCmKh1LLNCT78MF9%2FI%2BGNSDD0jZcxuWWUSpO8a%2F1XHFxdjoGnG2ILmqqA%2B8n8Ku%2FFWGESXKcN2k0yi0dH1ZvTasOTIMqKAhyxZEef0tKMClOD1Z6O8Ltm5CW6Xpg%2B92ZWpYtG9CltKk2FO1%2BXkquwPxNr2%2Bn%2F6NuRX5VESoZmTQ4rI4B2yMPS9QWX%2FfO4UI1gp9vXOUGUvkBwIHR%2Fc0QaaloelQagkTpkjA9Lkr9qHOBk5NNvV8UffoulJWKTN0ayM8Bucjz0%2FKx2jiGg2QuqcRmHTH8jJ759AXkuimpbDxIJQbJRIyvbMFN2ht6gYpmJOKTfzEN1wsFZCoPuZBTSzTQnB5eWIKsxoOhfYYvUoqJjI%2BlYl1j59xFAELr9gtCuq%2FgOnjS8tpE%2BVZIwYU2qRpGQOVG4tPFwgAX9MkT1ZI%2F%2BM%2FOhzivSVFz6eMmXbJmRTOfryfNcvDHrUwjKjXyQY6pgEDtPaULCShfa2OtrwZxZJ0wKYRtig%2BZ%2FKivJGDU2nGVETqvvwJija2MOWd%2BObc1xLJhv%2Fo6kOtG4pTDri0UIYe78vXzODCzzCDi7EUuUOqUnx9XirLHLiRP65TUfVZ%2F5TJ6OXIs25K5ZrG4NydruBOGtlzwUqNf5IQi6gczjNOapR4ce52QwN%2FCddyWBnyu6v8xmgyEe4Jt1NL3GAIGPbpr6RtXgg%2F&X-Amz-Signature=f872c5ea68215c35c5ba911d2ac5c12c900a581fba17926735c5868b3021030a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XE5L4OO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeVmCRgnWj96HsKPNbop2%2BPcNrsiqwklBVA8yNbPis7AiB6ZdKnBmSeTFUid157RpCytBlA5lLeqcj7lUYIIHczqiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSPxW8u3jnas9SXQBKtwDqka2KV2vsEcVswx%2FsEr1T0x94mVmCnqoPoT48OkC%2FVwS9yTBQxCmRe%2Fn8j4X4ISTSy6HJRJAKWp9oL%2Ffr0z%2FpDMntv1vm9qRYoZq5FGoUxJybwJuYIAoUiAO74cWYlZeTYHAzmLPntAfrQCFr9jOEtRhAxG2t8pkx76Bd43tShjq6%2BCmKh1LLNCT78MF9%2FI%2BGNSDD0jZcxuWWUSpO8a%2F1XHFxdjoGnG2ILmqqA%2B8n8Ku%2FFWGESXKcN2k0yi0dH1ZvTasOTIMqKAhyxZEef0tKMClOD1Z6O8Ltm5CW6Xpg%2B92ZWpYtG9CltKk2FO1%2BXkquwPxNr2%2Bn%2F6NuRX5VESoZmTQ4rI4B2yMPS9QWX%2FfO4UI1gp9vXOUGUvkBwIHR%2Fc0QaaloelQagkTpkjA9Lkr9qHOBk5NNvV8UffoulJWKTN0ayM8Bucjz0%2FKx2jiGg2QuqcRmHTH8jJ759AXkuimpbDxIJQbJRIyvbMFN2ht6gYpmJOKTfzEN1wsFZCoPuZBTSzTQnB5eWIKsxoOhfYYvUoqJjI%2BlYl1j59xFAELr9gtCuq%2FgOnjS8tpE%2BVZIwYU2qRpGQOVG4tPFwgAX9MkT1ZI%2F%2BM%2FOhzivSVFz6eMmXbJmRTOfryfNcvDHrUwjKjXyQY6pgEDtPaULCShfa2OtrwZxZJ0wKYRtig%2BZ%2FKivJGDU2nGVETqvvwJija2MOWd%2BObc1xLJhv%2Fo6kOtG4pTDri0UIYe78vXzODCzzCDi7EUuUOqUnx9XirLHLiRP65TUfVZ%2F5TJ6OXIs25K5ZrG4NydruBOGtlzwUqNf5IQi6gczjNOapR4ce52QwN%2FCddyWBnyu6v8xmgyEe4Jt1NL3GAIGPbpr6RtXgg%2F&X-Amz-Signature=93d1de715447b01dcf46092111c34e2f182bb7f47fa2cefe5d46a351985eb944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
