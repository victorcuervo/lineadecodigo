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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GCFGP7A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU3CHzEkEv4po%2BM1Ko2eYaKHUPumQsm8%2B3d%2FkfLZ17qAIgO6dy6Dt30wPo7rAEB4qHfdV%2BK6vp1j8i8td9AYbD1U4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNf3rI9zmrbW2RhnfSrcA%2BeY%2BRN2Ggzk6DCGArDSaVdp6sXdm%2FEMHGhpmw5I5j3YlXfuvKIJXwaCKRYd9WbYR0lmldhktGjjSl4ixZ0q5pyLhs9fDuUv3E7Fbec51wF2ozLcljKXmhlC%2B7q6Ka3BXIoZZ%2BO8KEG0XLOeXRLTFlkbqFI6K99P4c9QU9n%2B1CEtC6hU5uc0JpPlZoQDjkn94V4Rhl9i3OMCNj1s9izF8jI6JmSVZYOTwjhqogOZAPKdpYJewQ4b9zdb%2BRJF8xk7jmmdZ0tM2K6N7ogdiF69SW0wpFShgIAWx1LPHpzuzCP2jQBEnPwLlNoGC1qIC8Lm4g3rZb0q73g6DYNa%2BFt8RFtPgmSECsRbvvFBtL2W3vMKpz0eIRNB1Ow1entu7H9abuFz9yoxRj8O7MdUJUJ3hS%2BTi9UwIJH60yhdrMNflIZ3lmyM9inxWmwXK5xflZcopj2Q%2Bu0AfviQwvX1c7RY61aCMvfeW3cAM4luH1R%2Bal%2Bi3nGRnUl7VtxUJpdLv9Q27vcptn%2FPfoU7o5JiyZMey8QW%2B09WAW4IqrGJ20Acb7tQJ0cPKWz0RU5pmcTNN%2FI13U3L4H43S6CtiVVQbFhL3cgn5E%2B5yfNgHsBhf8iKknqiSxDN6G4Gq2VJJFD%2BMPiLyMkGOqUB1%2BgpTRTfTd%2FP3WI2qU1rqI%2FpwtselaUSL3KMbv9UUcYLBUzH6TE1VbV7sraAjhbpXcKl6vutUqesM2i%2F38maDhPluCgfsNudlr9P2D51U7toQokzBUhSLnlSe9UpX0QFz6qUTlHDOKFO31TTX0TWGZyaarYk0FcB%2FidaVXzRqW3aXW0Ys%2Bn3ePgyy%2FPBc%2BbsGcuPjO8e92OrxSqzBAeurPe8j1u8&X-Amz-Signature=f09ab137cfabbe67c246e981e3ddefdb75ef0a81f86095ca8abe9208baab2d71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GCFGP7A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU3CHzEkEv4po%2BM1Ko2eYaKHUPumQsm8%2B3d%2FkfLZ17qAIgO6dy6Dt30wPo7rAEB4qHfdV%2BK6vp1j8i8td9AYbD1U4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNf3rI9zmrbW2RhnfSrcA%2BeY%2BRN2Ggzk6DCGArDSaVdp6sXdm%2FEMHGhpmw5I5j3YlXfuvKIJXwaCKRYd9WbYR0lmldhktGjjSl4ixZ0q5pyLhs9fDuUv3E7Fbec51wF2ozLcljKXmhlC%2B7q6Ka3BXIoZZ%2BO8KEG0XLOeXRLTFlkbqFI6K99P4c9QU9n%2B1CEtC6hU5uc0JpPlZoQDjkn94V4Rhl9i3OMCNj1s9izF8jI6JmSVZYOTwjhqogOZAPKdpYJewQ4b9zdb%2BRJF8xk7jmmdZ0tM2K6N7ogdiF69SW0wpFShgIAWx1LPHpzuzCP2jQBEnPwLlNoGC1qIC8Lm4g3rZb0q73g6DYNa%2BFt8RFtPgmSECsRbvvFBtL2W3vMKpz0eIRNB1Ow1entu7H9abuFz9yoxRj8O7MdUJUJ3hS%2BTi9UwIJH60yhdrMNflIZ3lmyM9inxWmwXK5xflZcopj2Q%2Bu0AfviQwvX1c7RY61aCMvfeW3cAM4luH1R%2Bal%2Bi3nGRnUl7VtxUJpdLv9Q27vcptn%2FPfoU7o5JiyZMey8QW%2B09WAW4IqrGJ20Acb7tQJ0cPKWz0RU5pmcTNN%2FI13U3L4H43S6CtiVVQbFhL3cgn5E%2B5yfNgHsBhf8iKknqiSxDN6G4Gq2VJJFD%2BMPiLyMkGOqUB1%2BgpTRTfTd%2FP3WI2qU1rqI%2FpwtselaUSL3KMbv9UUcYLBUzH6TE1VbV7sraAjhbpXcKl6vutUqesM2i%2F38maDhPluCgfsNudlr9P2D51U7toQokzBUhSLnlSe9UpX0QFz6qUTlHDOKFO31TTX0TWGZyaarYk0FcB%2FidaVXzRqW3aXW0Ys%2Bn3ePgyy%2FPBc%2BbsGcuPjO8e92OrxSqzBAeurPe8j1u8&X-Amz-Signature=8cdff8d4be941bab11ad375488b8d1430199fdaffd9799b87120ba0431af9a08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
