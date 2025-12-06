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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ASQOUJF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjXHOXAyBEA1LP5vdIsl4QJQPNkymENK4GPRdN8GnIWAIhAL3uWJV1Tqa7r45kV%2FelZe5yW7kRLaALtBiFhvh2UEtKKv8DCHUQABoMNjM3NDIzMTgzODA1IgyBQiKSIORy8AhYd3sq3AOFnKfWEi5NinoLcQP2g1VjLPB3Ihdlb9RNuCG19Lm6%2Fi2UF45qufkT32RywQakDbG5Fi561JmIscWXZIBrKZNZV%2FHHphhtFHh8hEHRaAycVM5k%2BADKaqHeWmj53eQ7DWu9fNJby0vxi29%2FjPxx7imZPJu8F2O1ng%2Bn7dJ19pDfwJIDFnDHpush8YquQ%2B7e%2BVL6yLVAfLav190bthlVYQ2URpdOLab%2FdHP7gFuDMLKiEu3DdP5eTGUiuC%2BOGDTigk4F6kLxFfEh1SWqdmIKhrhQ8DWu6dJapudqCQDE2cdGTz1Bg5TlCr7jKWi12lLHRLjRBp%2FFroibj4p2JmnWYq0oGwy%2BYi1d6Hj7eLT27K8yKDNiFdvQGDPd6d6%2Ba2gIGLbqvXmzN5aiSnTzZzWpRK51vL5xTALs3chDtAG095krbIG8Qh%2BXOC5WoX4F8uqM5sEX%2BKiUXutC4lGUM7xVGKLoKGIkpOBrx%2FhDZsokEVhoY40ejUFglJaDlDwncJArL4CoQ4wCvDFEhit9WMTJEp2oBBDnwdappZjTQLu4h9L%2F63RZ%2B3JuqM%2F%2BeLUwpEPpQ06G9ONxD2HNRBQzseCryBiefEDiT0UMzZXqMbcBN91KhO%2B%2B230xvOJk2nmMxzCBp9DJBjqkAeWNLGCa68vfBbje5nBTohZ%2BuzZqFR60YGoZ9kUplboQTJkoE4uKe2bBWLxHs%2B2jKudyto2hx1SJ3tJhduMJoV2zxSFj4JJPry2inAEs%2FnLZIwiEA24sj%2FwbTemXkiN7e8ZUmLUmlgRFeM93Yjzy7phkrf9ynLHx9nk3Y4s6RByAAq5Sr2iY47hd4HFmHt2onJKIJZRJHAd9TDWbrK7TQCQZ0UXj&X-Amz-Signature=08bda44fea1c8c9b266b92fc5ce966f84664b22b45ddec6bc556a2bf8a15e5bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ASQOUJF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjXHOXAyBEA1LP5vdIsl4QJQPNkymENK4GPRdN8GnIWAIhAL3uWJV1Tqa7r45kV%2FelZe5yW7kRLaALtBiFhvh2UEtKKv8DCHUQABoMNjM3NDIzMTgzODA1IgyBQiKSIORy8AhYd3sq3AOFnKfWEi5NinoLcQP2g1VjLPB3Ihdlb9RNuCG19Lm6%2Fi2UF45qufkT32RywQakDbG5Fi561JmIscWXZIBrKZNZV%2FHHphhtFHh8hEHRaAycVM5k%2BADKaqHeWmj53eQ7DWu9fNJby0vxi29%2FjPxx7imZPJu8F2O1ng%2Bn7dJ19pDfwJIDFnDHpush8YquQ%2B7e%2BVL6yLVAfLav190bthlVYQ2URpdOLab%2FdHP7gFuDMLKiEu3DdP5eTGUiuC%2BOGDTigk4F6kLxFfEh1SWqdmIKhrhQ8DWu6dJapudqCQDE2cdGTz1Bg5TlCr7jKWi12lLHRLjRBp%2FFroibj4p2JmnWYq0oGwy%2BYi1d6Hj7eLT27K8yKDNiFdvQGDPd6d6%2Ba2gIGLbqvXmzN5aiSnTzZzWpRK51vL5xTALs3chDtAG095krbIG8Qh%2BXOC5WoX4F8uqM5sEX%2BKiUXutC4lGUM7xVGKLoKGIkpOBrx%2FhDZsokEVhoY40ejUFglJaDlDwncJArL4CoQ4wCvDFEhit9WMTJEp2oBBDnwdappZjTQLu4h9L%2F63RZ%2B3JuqM%2F%2BeLUwpEPpQ06G9ONxD2HNRBQzseCryBiefEDiT0UMzZXqMbcBN91KhO%2B%2B230xvOJk2nmMxzCBp9DJBjqkAeWNLGCa68vfBbje5nBTohZ%2BuzZqFR60YGoZ9kUplboQTJkoE4uKe2bBWLxHs%2B2jKudyto2hx1SJ3tJhduMJoV2zxSFj4JJPry2inAEs%2FnLZIwiEA24sj%2FwbTemXkiN7e8ZUmLUmlgRFeM93Yjzy7phkrf9ynLHx9nk3Y4s6RByAAq5Sr2iY47hd4HFmHt2onJKIJZRJHAd9TDWbrK7TQCQZ0UXj&X-Amz-Signature=96cc2bb1e631d64778ac8ffd4d85ccc18137d8f87bb34e03f92344cec2602fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
