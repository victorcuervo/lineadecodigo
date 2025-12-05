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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24UZNP6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVyy0fukq7EloHdgAd%2F4Y%2BQKoQ6p58Nw9HhF2eqsv%2BuAiBZQajKJ3B0V9bHut6miIzXUSmjOjhS0%2Bi1dTNeRKMiYir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMSWqv6lx1OGPPEXPeKtwDdyWli%2F0zRnLqd5kxhKtLwBebbIi9kBgX%2FbJOuGOPHABRz6r6s7qUmXghpY5aocO4KFtJ7CWLRgA1UEftTurGEHOJQzVB4UKBnT8vEtVe0jBnyWOZrAnwTrCrn%2Fzi6XrweIj0mf8mEwN%2ByZvOqzEbrQ0hXt6Aaq7ylFRaXHcG%2FZ6025x6gEyWdpPLYwZLTxR29zwXwJNLKh83%2F23ngZ2mGoWFtwOukDKHsKphzu4vdVRuKaZgOAFf%2Bt4D44y1RbbgOhhb%2Bls3%2BYtOdOjQXzml6N%2FaZsM6caiXO5h6LY8w3vlszIpBkUAxCF5iC9OhLhmVFyt4pyWFPxES5vZ4%2BFXMWQkDQvDiOIZiKT9lK1%2Bkiwm2uEw1aM014BWgmLRWjKqsT9Nt0z9sco0UlhDFKIG2CZknT2310MtGgJmPHhRhb8ONF75ricNl93%2BU%2FbfB86fC159xyF%2F%2Fs760YNr%2BUPMO8wgwpMZhZKQyr%2FdydspjQSM40ZsFBiXy0Su%2BREZhgyeyHNnAPsxiaqhZp3Jy8qcIUtJPtxjB4EDxc0EVKaFvh4XnWb3iOyJ9uoooefM74Tp146fPoPfcM08iw4%2F5WRPcI%2FigFDiA57mJuy8448%2FieKaVuaMcxC2I6CQ43MQwxfbLyQY6pgHEz1nSt0JBujzOU7qZFnzaE0DCriFtvlJUqM8YOB%2BVfWxJcFmycuDOASiOA%2FLpJJkQRiKjDFro%2F0nvtdjbpiTlXQRcAvboutjHOM0dzFBQoHcHeptOpHN5VP%2FOBOMPsMaAgI8SOOB%2BqilbVJcR8pyi%2BCHLFxnqJ076hh2uFww6sL1U32qt2C78XYP%2F6fAtLN5Df2tma%2FJnbI6B9n4Ix6JUFRinf1S%2F&X-Amz-Signature=5002d2781b0e08133a634d1082e39c86f337cc90717f3676f401f6f3d8704783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24UZNP6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVyy0fukq7EloHdgAd%2F4Y%2BQKoQ6p58Nw9HhF2eqsv%2BuAiBZQajKJ3B0V9bHut6miIzXUSmjOjhS0%2Bi1dTNeRKMiYir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMSWqv6lx1OGPPEXPeKtwDdyWli%2F0zRnLqd5kxhKtLwBebbIi9kBgX%2FbJOuGOPHABRz6r6s7qUmXghpY5aocO4KFtJ7CWLRgA1UEftTurGEHOJQzVB4UKBnT8vEtVe0jBnyWOZrAnwTrCrn%2Fzi6XrweIj0mf8mEwN%2ByZvOqzEbrQ0hXt6Aaq7ylFRaXHcG%2FZ6025x6gEyWdpPLYwZLTxR29zwXwJNLKh83%2F23ngZ2mGoWFtwOukDKHsKphzu4vdVRuKaZgOAFf%2Bt4D44y1RbbgOhhb%2Bls3%2BYtOdOjQXzml6N%2FaZsM6caiXO5h6LY8w3vlszIpBkUAxCF5iC9OhLhmVFyt4pyWFPxES5vZ4%2BFXMWQkDQvDiOIZiKT9lK1%2Bkiwm2uEw1aM014BWgmLRWjKqsT9Nt0z9sco0UlhDFKIG2CZknT2310MtGgJmPHhRhb8ONF75ricNl93%2BU%2FbfB86fC159xyF%2F%2Fs760YNr%2BUPMO8wgwpMZhZKQyr%2FdydspjQSM40ZsFBiXy0Su%2BREZhgyeyHNnAPsxiaqhZp3Jy8qcIUtJPtxjB4EDxc0EVKaFvh4XnWb3iOyJ9uoooefM74Tp146fPoPfcM08iw4%2F5WRPcI%2FigFDiA57mJuy8448%2FieKaVuaMcxC2I6CQ43MQwxfbLyQY6pgHEz1nSt0JBujzOU7qZFnzaE0DCriFtvlJUqM8YOB%2BVfWxJcFmycuDOASiOA%2FLpJJkQRiKjDFro%2F0nvtdjbpiTlXQRcAvboutjHOM0dzFBQoHcHeptOpHN5VP%2FOBOMPsMaAgI8SOOB%2BqilbVJcR8pyi%2BCHLFxnqJ076hh2uFww6sL1U32qt2C78XYP%2F6fAtLN5Df2tma%2FJnbI6B9n4Ix6JUFRinf1S%2F&X-Amz-Signature=a4a87cb00e77d5ca1de59c5921d11e7bac6ed826bf2b3650731eba6bacef4828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
