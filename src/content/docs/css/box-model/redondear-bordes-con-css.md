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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GE3KYAU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrVPpTGy1Rh%2BhkJ7V0Y9G%2BbZPqWUsyxn8z%2BQp5m6dyVgIhAPxIf6pfIa4ijgoMnru6ADqy2gUpuk1iO6grozGKKBp5Kv8DCHsQABoMNjM3NDIzMTgzODA1Igx83h%2FN4lL3eNwH69wq3ANO5TXwuJ7YRkC7q1G4xVP0xW8tLGPWwMEyIzayUW3HPD7qWiKRoVNEwbl7vnsaNC4NzxyrAAXnMjTEa6GLEku1cW5bmMqycUe8YPS0Qi7ixs9jaEwoZT%2BxggZ%2F2lAzM7r%2FHXMDd6Eq52eWCzaLcMzrUQNEXp9y057BzfvBi3XI3GhIYmzUrQdVgX2aqAz5Yimd1QVC01A9tnhf9JN2%2FCpEGvB5fRMMVEkzYP7bPp2xvdHJLOFBSgn6QemGGo1T%2FuAb%2BQLzwivBtFHzr9dpETxtbSgolO%2BrE5A4m0LQMJ5WkSJ8aY8bBXqs6UB7hHM6RA8xfnUUIkaIRfZlrbUWqdc1Rbb%2FM8Sca4i8Khfeabbj6e0XRR525c%2FFZr1fBQDb9MJVauCkFfAKCtJhFhCyY1tkfD5Vd0EChOIUjMwdFtMxYr8hmeohleVIBwV1w9Y7EjcZKpOebXO5MIYj62KrOsK8IEyAT6Q3O%2BPDSvAKZJWe1LmVaiHe4QwNNYjiYfOu6oAaIOXodHUemFn0tASE9le7q59DpBMrbQ%2B8Xf1r988U19hpyPBNDBLN6ktFXl9Tq2sMX4gt%2F1KEy7ig6BqEK9fdr8trwCUxCHPkzhFxaedP9qEPNob9W7o4OA3AmzCI8YnKBjqkAUch86eFs5jedxRaoLfpVpcbklKgGQZuZkEmy2qoxo9Ge3aVXi0aqUkVZOv9bz03PIEm7uIl0N5etm9hI50zsinamdRepFRX2aa%2FIVagHV84X1WdwUKJoRyScBueF0F9TwXQgHfi6K8SUaZznFPX5OlOhUjVZAOPt94U5QR0euDjYBkeJL2g0AS4875QoMuilBggtL5FGBZBUl%2BReJdwvd6jdvYj&X-Amz-Signature=76fbb0bddb4c13aa8b2d96094545098997e9f1845354ecc33d9ed5cba5c96cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GE3KYAU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrVPpTGy1Rh%2BhkJ7V0Y9G%2BbZPqWUsyxn8z%2BQp5m6dyVgIhAPxIf6pfIa4ijgoMnru6ADqy2gUpuk1iO6grozGKKBp5Kv8DCHsQABoMNjM3NDIzMTgzODA1Igx83h%2FN4lL3eNwH69wq3ANO5TXwuJ7YRkC7q1G4xVP0xW8tLGPWwMEyIzayUW3HPD7qWiKRoVNEwbl7vnsaNC4NzxyrAAXnMjTEa6GLEku1cW5bmMqycUe8YPS0Qi7ixs9jaEwoZT%2BxggZ%2F2lAzM7r%2FHXMDd6Eq52eWCzaLcMzrUQNEXp9y057BzfvBi3XI3GhIYmzUrQdVgX2aqAz5Yimd1QVC01A9tnhf9JN2%2FCpEGvB5fRMMVEkzYP7bPp2xvdHJLOFBSgn6QemGGo1T%2FuAb%2BQLzwivBtFHzr9dpETxtbSgolO%2BrE5A4m0LQMJ5WkSJ8aY8bBXqs6UB7hHM6RA8xfnUUIkaIRfZlrbUWqdc1Rbb%2FM8Sca4i8Khfeabbj6e0XRR525c%2FFZr1fBQDb9MJVauCkFfAKCtJhFhCyY1tkfD5Vd0EChOIUjMwdFtMxYr8hmeohleVIBwV1w9Y7EjcZKpOebXO5MIYj62KrOsK8IEyAT6Q3O%2BPDSvAKZJWe1LmVaiHe4QwNNYjiYfOu6oAaIOXodHUemFn0tASE9le7q59DpBMrbQ%2B8Xf1r988U19hpyPBNDBLN6ktFXl9Tq2sMX4gt%2F1KEy7ig6BqEK9fdr8trwCUxCHPkzhFxaedP9qEPNob9W7o4OA3AmzCI8YnKBjqkAUch86eFs5jedxRaoLfpVpcbklKgGQZuZkEmy2qoxo9Ge3aVXi0aqUkVZOv9bz03PIEm7uIl0N5etm9hI50zsinamdRepFRX2aa%2FIVagHV84X1WdwUKJoRyScBueF0F9TwXQgHfi6K8SUaZznFPX5OlOhUjVZAOPt94U5QR0euDjYBkeJL2g0AS4875QoMuilBggtL5FGBZBUl%2BReJdwvd6jdvYj&X-Amz-Signature=de82da066d01a2f1a600f4708c4c0162dcff5521f17231d38751beabc2a36a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
