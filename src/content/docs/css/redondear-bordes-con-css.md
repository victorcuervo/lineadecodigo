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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626M2BCO7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLjUTtBZRXwkAD1FqTwHm%2FifXs2rOAi3XXXtxA2HxBbAiB7QLzI%2BTfOUb0Cn%2Bsi4k8qXiay0bKrzVWpRet3nDuCXCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMgdgxFCU%2FaeDz7F2ZKtwDWprU17AIVD9WtMZvOX%2BE3aKAhuurjVTFOeDeEgkIUhzdCQy8gHd02Z9A4vPif0wNBvKVVKxJugiWEIYPGPkwC92s10i%2FnGNzZ%2FjgveBYfflSY8FkbidVfbPhbc%2Fl5%2BPf6RULoiqCQXP%2B%2FH31UC%2FB0Ka%2Btva%2FOop1MKCjPG29Jc7yzP05ynx4%2FBpTCKqLfmMRc72%2BiNg2EJrRgHjnMwZlPwvsDICL4ozXXd4OPk11kZIiBKUGhV%2B%2FotcwLston6JeV10NClPDaoIXbAvvGVNAKe8r7lIq2cKxJpjOazSjmXBkAzIb3ZbznzRxCF69WHMjw5qauVt1%2FIRox20OZSv3AAhHRLBv9JZ26IzBaUUkNjk9Znn3mYDmIYZPq%2Bv5lyq3qsRWjxgixZKU9mqYN%2FjC1QC8iHPvzv8NpMkpCpvbPwVgNK4RIgNHskrwbDWcTCCjrwVyAKBetTMDOqneeAOl6qwTiGmI75r%2FZ7S%2FRiVWmZEk19ghmu1L32s3o%2Far5tVm0tznvRL5HCeI9rmLamtxVSzD0hVpM5F0pKGhdURDJxVcQRZ1%2BhvOmM3vGDbCICyxo9kgw8cm6tD2W%2FttKkVniJocLEFGXTY1FpngwQlZp7EYeUQ3kRbz0MLrlN0w0KfOyQY6pgFkBnxHhys%2BvF2FguODMnkNY1bogNFz7LYqtVlbiLR1kJWn%2BRzF2eboNziAhoMKMeTLT2E3cexwJsnjyGqvqOPY8TG%2F66DCykbJIsyvakigrecTbWieByn9TB8CKZqYKR3QxAa6dZw28ZRww026FaqlAxYtZ8HDLu%2F14Xpix%2B%2FQLW1pA31fum%2FTF%2BI9sQFJBwqZ%2BNW9KBqL%2BlEeetdZWIJ30g8Fsj4u&X-Amz-Signature=fe9a454519d0536d6a445fcaa84312b0469d0078e4ff47c42767b0535ef1f2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626M2BCO7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLjUTtBZRXwkAD1FqTwHm%2FifXs2rOAi3XXXtxA2HxBbAiB7QLzI%2BTfOUb0Cn%2Bsi4k8qXiay0bKrzVWpRet3nDuCXCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMgdgxFCU%2FaeDz7F2ZKtwDWprU17AIVD9WtMZvOX%2BE3aKAhuurjVTFOeDeEgkIUhzdCQy8gHd02Z9A4vPif0wNBvKVVKxJugiWEIYPGPkwC92s10i%2FnGNzZ%2FjgveBYfflSY8FkbidVfbPhbc%2Fl5%2BPf6RULoiqCQXP%2B%2FH31UC%2FB0Ka%2Btva%2FOop1MKCjPG29Jc7yzP05ynx4%2FBpTCKqLfmMRc72%2BiNg2EJrRgHjnMwZlPwvsDICL4ozXXd4OPk11kZIiBKUGhV%2B%2FotcwLston6JeV10NClPDaoIXbAvvGVNAKe8r7lIq2cKxJpjOazSjmXBkAzIb3ZbznzRxCF69WHMjw5qauVt1%2FIRox20OZSv3AAhHRLBv9JZ26IzBaUUkNjk9Znn3mYDmIYZPq%2Bv5lyq3qsRWjxgixZKU9mqYN%2FjC1QC8iHPvzv8NpMkpCpvbPwVgNK4RIgNHskrwbDWcTCCjrwVyAKBetTMDOqneeAOl6qwTiGmI75r%2FZ7S%2FRiVWmZEk19ghmu1L32s3o%2Far5tVm0tznvRL5HCeI9rmLamtxVSzD0hVpM5F0pKGhdURDJxVcQRZ1%2BhvOmM3vGDbCICyxo9kgw8cm6tD2W%2FttKkVniJocLEFGXTY1FpngwQlZp7EYeUQ3kRbz0MLrlN0w0KfOyQY6pgFkBnxHhys%2BvF2FguODMnkNY1bogNFz7LYqtVlbiLR1kJWn%2BRzF2eboNziAhoMKMeTLT2E3cexwJsnjyGqvqOPY8TG%2F66DCykbJIsyvakigrecTbWieByn9TB8CKZqYKR3QxAa6dZw28ZRww026FaqlAxYtZ8HDLu%2F14Xpix%2B%2FQLW1pA31fum%2FTF%2BI9sQFJBwqZ%2BNW9KBqL%2BlEeetdZWIJ30g8Fsj4u&X-Amz-Signature=54dde95b1b88773b396e25fa7fdbb4e2f6addf1d4af06bd388f8ee5124838482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
