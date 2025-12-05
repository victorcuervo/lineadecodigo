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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ITJQMJW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgIbjXkjqVQbcZQnuVxp0%2FYp0jT1OldBNfEeehHTM1%2FwIgHfDjjx4pKfgm%2BM8ihWo8qGEfadJJ%2F0Ln6QAhs1QnhV4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDO60yTCzNyNP0JOBBCrcAzdpO0lSnCSVOR0cets34l%2Btku%2BOy7j1ByaB1jmlBnfd0IgC6MpYSfAV3OVw0FkIbI11tzc%2FqYrUO4kjcFc22X7UjbvKnRe%2FaZVOj5mc59YU%2FNaw%2FuRS%2B4G6Kh2%2Bibgfgp1oEt2xWvnHIx8HG%2FPSdw6AlFqmSWaLLVEJAI5VwEQO4Wl%2BGztDpKmImyYen6DftqNZMLMg%2BCdeyJ9DgSwQ0kKtmvPo0Fy3AmCir%2B4cmhsg20xx8NliDREBeFQmgSZuEyBWvnT1a2VJjtxe6h77ScsqNccN3rtq1pLjaXUQi50%2BJappNotTmuF%2BtB8niP5YeSB1tTycF8eg844JpFUqPenADbma3NdlD4Zl3PAA55g%2FW%2BGlVQhFKzVgzYQ3ZRb1k7H0J2mm4slTEPWmLiHVwGwpW39iy8rMmxuT33cypBb%2ByaDPhlHqqUMEDxs4I74HBSnFjC5c%2BMQ%2F0VSZ9k%2Bi1gRcqLgT6uGsFRMUp21xffUovzYHBynIrhvXIiBqrP78JwUmaQWPp8WSUM%2Bf7qLXkU9mfRSHRMf0SO9srDfaFP0HPpFco%2F7YXiXNvGMH%2FMGAjOdPALWLSFhxRRIvwap3YqvKCyeX8lwVRTkFzTsLln0KULPfcIgi8kRRZioGMOyIzckGOqUBPtjJlFD0qQWnIqQLju4bvUkfIkpwLGQ5zosemlIU%2FZNECUp6W1XkzmblkDVb37%2BPRvCgy856G5jW5fhupvN3w%2BtiHkzmACZex2UqW%2Fs%2Bll9KP0mdyJFpjEO98u6JI8aAS1NjvKKOxGHONYJOqIj0LaJguHUxMtpNVKjU4DEBxq3MbljSIbfkSDDDeJnHLxSrYYUII45ErBzFsw7pT67z7bh1Zz6O&X-Amz-Signature=a6d44c822aac3bcd4a12d09bc0ff31d78419c5b6c3077eb47ab9013895ff17de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ITJQMJW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgIbjXkjqVQbcZQnuVxp0%2FYp0jT1OldBNfEeehHTM1%2FwIgHfDjjx4pKfgm%2BM8ihWo8qGEfadJJ%2F0Ln6QAhs1QnhV4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDO60yTCzNyNP0JOBBCrcAzdpO0lSnCSVOR0cets34l%2Btku%2BOy7j1ByaB1jmlBnfd0IgC6MpYSfAV3OVw0FkIbI11tzc%2FqYrUO4kjcFc22X7UjbvKnRe%2FaZVOj5mc59YU%2FNaw%2FuRS%2B4G6Kh2%2Bibgfgp1oEt2xWvnHIx8HG%2FPSdw6AlFqmSWaLLVEJAI5VwEQO4Wl%2BGztDpKmImyYen6DftqNZMLMg%2BCdeyJ9DgSwQ0kKtmvPo0Fy3AmCir%2B4cmhsg20xx8NliDREBeFQmgSZuEyBWvnT1a2VJjtxe6h77ScsqNccN3rtq1pLjaXUQi50%2BJappNotTmuF%2BtB8niP5YeSB1tTycF8eg844JpFUqPenADbma3NdlD4Zl3PAA55g%2FW%2BGlVQhFKzVgzYQ3ZRb1k7H0J2mm4slTEPWmLiHVwGwpW39iy8rMmxuT33cypBb%2ByaDPhlHqqUMEDxs4I74HBSnFjC5c%2BMQ%2F0VSZ9k%2Bi1gRcqLgT6uGsFRMUp21xffUovzYHBynIrhvXIiBqrP78JwUmaQWPp8WSUM%2Bf7qLXkU9mfRSHRMf0SO9srDfaFP0HPpFco%2F7YXiXNvGMH%2FMGAjOdPALWLSFhxRRIvwap3YqvKCyeX8lwVRTkFzTsLln0KULPfcIgi8kRRZioGMOyIzckGOqUBPtjJlFD0qQWnIqQLju4bvUkfIkpwLGQ5zosemlIU%2FZNECUp6W1XkzmblkDVb37%2BPRvCgy856G5jW5fhupvN3w%2BtiHkzmACZex2UqW%2Fs%2Bll9KP0mdyJFpjEO98u6JI8aAS1NjvKKOxGHONYJOqIj0LaJguHUxMtpNVKjU4DEBxq3MbljSIbfkSDDDeJnHLxSrYYUII45ErBzFsw7pT67z7bh1Zz6O&X-Amz-Signature=7eb01a95306545f64782ac4f6a8c0e29c91d0e31dafb42830bbaab35519eddee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
