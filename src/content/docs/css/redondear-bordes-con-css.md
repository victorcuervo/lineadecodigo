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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ITXUTZO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5OA%2Bq2VZ14bKidtrcgBm5uPyGg%2BjaWHPRNKnlNJSXRQIhAIQydMa7mp07mVqfn0GVkk5M469%2BlNK5v06cXpFCHXcIKv8DCGsQABoMNjM3NDIzMTgzODA1Igy6A5xKtM52tVouYVQq3AO4qO61UDPg4S2vzl0Fh6u7%2BDSsYSjfeCtjJV4pBx31n6wmKAXBB7WTGC7G42sk5M%2B2De5awFx16wU%2Fbqww4qai56xiptThgOx6XAZsbiZ3GGa0wr%2FE65DoEihMgesb0f1gmeNObkqmX0Y2nKsZ6NAqqlMde1oF7kbX1vSgLkU8ihrUurkbH6vBrU8XxrJOkZHkHRFCOe0uq%2BnuSyACpoCxOqMEXY7qx6xS4tn6sXfsNOqhF6eY7iMTv5hmU3npxEFdKqooJxgVYLxcVjexQRmti5G0iTq7uRv0Z2wCsrfWR2jAuklBjGzI8q9Ekt%2BJeVH0QCX6zPyWEVbcnnp0SbbLLl2EKTEztD9p9kQIvvp3CiRxLHEPkR57I0VweHEnX%2Bw3lmTUMD0YiicfdBOnG72TGIdIzV8RM%2BQUKHkqPNTzNOpoBBpMCymD5%2FXmg8k3bPXrZfD0Eqm8CLiDTa7KSIju3%2FyCXSJoxNCLIIDeORujqC7MYYpT2sRPVNncNg5bgibMm%2FBte%2BVQjMMDHcyyV%2BSQ71GLQizOArZULV%2B7h7Ql7rwbLuQ2Ol7VJhf%2BhFxI5kF2tkq7jpI3TAHUyK9j6O4lzcbPxwKpGTKKRxgFb2NHKq%2FnMmESYjy7d4zuHTCYqM7JBjqkAQ0VzNugGdHQWTrzGra1mns3qlO9%2Fpjw73mdyM1QGuxfSUXUJ30PQKMQICzR9PuMUSZNSXRXtu3LTCf%2FPo4RcyUU28eTjZfZkZ7Vb00WyBYbbmLCyXTf2oXplaznkhubny1fMqAWdlNlwlF6aYuzikc1fpwkgmWnwJwWMX1Bhsk31QJieIj%2BOIXRrpOQPTS5jwnccxY6uSq2RJgDcRjyhkuavSN7&X-Amz-Signature=f4e7613fc0ee08b820afd6a09604807cba04fad4b9fa5a04cedb6f10561df873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ITXUTZO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5OA%2Bq2VZ14bKidtrcgBm5uPyGg%2BjaWHPRNKnlNJSXRQIhAIQydMa7mp07mVqfn0GVkk5M469%2BlNK5v06cXpFCHXcIKv8DCGsQABoMNjM3NDIzMTgzODA1Igy6A5xKtM52tVouYVQq3AO4qO61UDPg4S2vzl0Fh6u7%2BDSsYSjfeCtjJV4pBx31n6wmKAXBB7WTGC7G42sk5M%2B2De5awFx16wU%2Fbqww4qai56xiptThgOx6XAZsbiZ3GGa0wr%2FE65DoEihMgesb0f1gmeNObkqmX0Y2nKsZ6NAqqlMde1oF7kbX1vSgLkU8ihrUurkbH6vBrU8XxrJOkZHkHRFCOe0uq%2BnuSyACpoCxOqMEXY7qx6xS4tn6sXfsNOqhF6eY7iMTv5hmU3npxEFdKqooJxgVYLxcVjexQRmti5G0iTq7uRv0Z2wCsrfWR2jAuklBjGzI8q9Ekt%2BJeVH0QCX6zPyWEVbcnnp0SbbLLl2EKTEztD9p9kQIvvp3CiRxLHEPkR57I0VweHEnX%2Bw3lmTUMD0YiicfdBOnG72TGIdIzV8RM%2BQUKHkqPNTzNOpoBBpMCymD5%2FXmg8k3bPXrZfD0Eqm8CLiDTa7KSIju3%2FyCXSJoxNCLIIDeORujqC7MYYpT2sRPVNncNg5bgibMm%2FBte%2BVQjMMDHcyyV%2BSQ71GLQizOArZULV%2B7h7Ql7rwbLuQ2Ol7VJhf%2BhFxI5kF2tkq7jpI3TAHUyK9j6O4lzcbPxwKpGTKKRxgFb2NHKq%2FnMmESYjy7d4zuHTCYqM7JBjqkAQ0VzNugGdHQWTrzGra1mns3qlO9%2Fpjw73mdyM1QGuxfSUXUJ30PQKMQICzR9PuMUSZNSXRXtu3LTCf%2FPo4RcyUU28eTjZfZkZ7Vb00WyBYbbmLCyXTf2oXplaznkhubny1fMqAWdlNlwlF6aYuzikc1fpwkgmWnwJwWMX1Bhsk31QJieIj%2BOIXRrpOQPTS5jwnccxY6uSq2RJgDcRjyhkuavSN7&X-Amz-Signature=4fbae861fc15cdcb1d15e0ffb10904edf9d7f8be945cbf7355c32c81b6285e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
