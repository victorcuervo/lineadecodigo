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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ44NIMW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQc8hkPlfvlDiSj%2Bx0mQ0gQyIViGwo1P6NgdfYtUzwuQIhAP287%2Borj3GrPqJcs0XL3rzFxs7kQaYtxsyohtEzy%2FjYKv8DCHsQABoMNjM3NDIzMTgzODA1IgzC0bk4lzwhkg%2BJWxQq3AOEJat6cs88zlXOPqWKE86hhcjmg4YnvIapxao2%2Fo6UPpnlhAgVqzbU1hYJrC1X8jDkIFrvoGhyQ4tBHXcsIXTyD4u2%2BpsOq6Sy0bRslupgaLZZVJnRH58R0HS0PAJFnV%2F7SyaIfsLQdEo2c9zjnlUtlmh3kuIwUHflC2RDqyUM4hYNAowuVx%2Fdi8AKRI2cRe8x6mNdfmGT%2FrRHbw0Vq69SbyN5W1jXH7LhyUnCDOz0aqPw09VE03%2B%2BaI8KkfCJREFI%2F8LMldNyrb3GNSW41ghZWaFhh8dnSR%2BbklCFSq97ZmWx4s%2Fbmwk3cWoVtb8n73x3NSepl%2BGoDQ3v3NeudDziP3YhfS%2FueFHRn4mRrM727n%2B93STImvWNFl46iRIJLrUZED0RFG0F6mTsUkNJ4s1aJCjMxTYEHNMCQJOkFvn4vykbhbD9p%2FQhG6%2B39lVfX9xhpBLSsz2NJ4HKl1pNJZ3tcUtfOCc%2B5kKxaONtXMYlGHlc77o6PZuAKVn0vt93N8dvD4MMm9StVju%2B6kMjjft3nKb1Q9JZF1CEIhfoaYz2U1yk4vM0G7L8m89vFJTpYKnskrasu7kKbX6buDf2k0ai5aZhMADAxTn2GrPdFt7R7FOuF%2FtQHFMeuAIpzjCk8InKBjqkATokpMvspk7c2QFHhjq9%2FZqCyQ9ygMJd28y%2BD7ZaV3Z0nSoqYKM9lAEbcWGaAY%2FTqTvgCs5mHpgFjsfDd5QN05HyBZ6BUc21PwpkCEB9nYC6hQQ1aP5OzDh6GPa0yrYtEYqafe%2Fjw6AEC3MyIivvvORs8mkbrHnSso0ah2uSajZ5KTGlAvUz45%2F69jncofCy0s8XWIl3h21xaFTIKFT2JFZrquOy&X-Amz-Signature=a68b16f87d21a571d03bc8216e82b32f03b9a6569e5df2b9c4615dfe98cb07b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ44NIMW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQc8hkPlfvlDiSj%2Bx0mQ0gQyIViGwo1P6NgdfYtUzwuQIhAP287%2Borj3GrPqJcs0XL3rzFxs7kQaYtxsyohtEzy%2FjYKv8DCHsQABoMNjM3NDIzMTgzODA1IgzC0bk4lzwhkg%2BJWxQq3AOEJat6cs88zlXOPqWKE86hhcjmg4YnvIapxao2%2Fo6UPpnlhAgVqzbU1hYJrC1X8jDkIFrvoGhyQ4tBHXcsIXTyD4u2%2BpsOq6Sy0bRslupgaLZZVJnRH58R0HS0PAJFnV%2F7SyaIfsLQdEo2c9zjnlUtlmh3kuIwUHflC2RDqyUM4hYNAowuVx%2Fdi8AKRI2cRe8x6mNdfmGT%2FrRHbw0Vq69SbyN5W1jXH7LhyUnCDOz0aqPw09VE03%2B%2BaI8KkfCJREFI%2F8LMldNyrb3GNSW41ghZWaFhh8dnSR%2BbklCFSq97ZmWx4s%2Fbmwk3cWoVtb8n73x3NSepl%2BGoDQ3v3NeudDziP3YhfS%2FueFHRn4mRrM727n%2B93STImvWNFl46iRIJLrUZED0RFG0F6mTsUkNJ4s1aJCjMxTYEHNMCQJOkFvn4vykbhbD9p%2FQhG6%2B39lVfX9xhpBLSsz2NJ4HKl1pNJZ3tcUtfOCc%2B5kKxaONtXMYlGHlc77o6PZuAKVn0vt93N8dvD4MMm9StVju%2B6kMjjft3nKb1Q9JZF1CEIhfoaYz2U1yk4vM0G7L8m89vFJTpYKnskrasu7kKbX6buDf2k0ai5aZhMADAxTn2GrPdFt7R7FOuF%2FtQHFMeuAIpzjCk8InKBjqkATokpMvspk7c2QFHhjq9%2FZqCyQ9ygMJd28y%2BD7ZaV3Z0nSoqYKM9lAEbcWGaAY%2FTqTvgCs5mHpgFjsfDd5QN05HyBZ6BUc21PwpkCEB9nYC6hQQ1aP5OzDh6GPa0yrYtEYqafe%2Fjw6AEC3MyIivvvORs8mkbrHnSso0ah2uSajZ5KTGlAvUz45%2F69jncofCy0s8XWIl3h21xaFTIKFT2JFZrquOy&X-Amz-Signature=1be866077e7d93ccc27e5cb0b33416dcf160a0df1cacbfe65c6601cba5c7746e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
