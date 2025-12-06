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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X262VG3T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIED7ERLPEofDgUTLpwUyMYO2d0fv041C3raFICKiK7CuAiEA0E%2B4bC0jKfmBV%2F7WHcSGWG%2BAujKh%2FPhNYyM3IycCCYMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAyXp2vdEcak6U555CrcA7xMPg4FTjgcIhoLrOjtYZE73rJN1TXdShrbY57qwPsWY3caB%2F7WbWuRbz5n1r%2BPTpGlTYSPzcCkaAFOslg2vn6U8jUgOiUKAAFZAo7Hqtf63eIBdsi7ZZzmaNm98sJTLr5Lnb83QOi7zDy6MKbz2HHIqqYgMWtjQp%2FYpQVJiUZ%2BBtItptAjd5cTKbaxnR1PYqjb2qqIT%2Fcmo0rCjjbWDpp3YFI6DNMw0p105JNXJSeXRNfSJBMeFGvPWH6zsJbew2L61hW%2FmTiddPR3Kkk2dvxbwilrJ6bKGt1GTGmpj%2B7l3dumzELI5F6sZ%2BT%2FusKjjqzOesfoTKZCrqD43sWpn5OfTOq2JWE6vO%2FvjAKLe0q3mangiT4EKvYKK6fVKF2sPNA0hZVnQ6%2BD9VJDIXz2P5uFPTuzkRa0%2ByF4wdMqvD59gV7RlShrkltlVhR5btb3qEVVoMhXHD02vSG86SL1DtABqnYxCv8P6clExS%2Ba8SQcYKkomcnfumLNo6ibxPrvWeFZg%2B7xPsuW3VbpyD6j0lK1dlYBE5StrlznxkmVTyv8xPAxQF40umBrR5Cr3%2FHKL9TibQnzOyR8W5HxLGiznTpoEAn7RP1xb%2BoNXKPFtem0hJjKWqtu5heWEXKJMP68z8kGOqUBZGKKx59%2BXP2ig9HFkbpupU0NAJBLdtG8OY7R8NF1bLbBY5L0znL2UBZZDGQxCz0vX06DG%2BuPe3AzjyC8C22WstNKC4zFx9%2BMd8BQv2lapTgMOordKPohuA5ax0RfMSRti2D%2Bu%2BA7D3LUMKQBBHnCzIHvkWo25BdvMtOF%2FyAxRBtw73ksuicltGKt7fp5a%2BwZVkNkTFg5SPjW%2FV2c52C8%2BZJCBDUB&X-Amz-Signature=c6aa7f772a4479216a145e5e0740fde8ffda8d9e4225f5cbd064bb9a8411d3c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X262VG3T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIED7ERLPEofDgUTLpwUyMYO2d0fv041C3raFICKiK7CuAiEA0E%2B4bC0jKfmBV%2F7WHcSGWG%2BAujKh%2FPhNYyM3IycCCYMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAyXp2vdEcak6U555CrcA7xMPg4FTjgcIhoLrOjtYZE73rJN1TXdShrbY57qwPsWY3caB%2F7WbWuRbz5n1r%2BPTpGlTYSPzcCkaAFOslg2vn6U8jUgOiUKAAFZAo7Hqtf63eIBdsi7ZZzmaNm98sJTLr5Lnb83QOi7zDy6MKbz2HHIqqYgMWtjQp%2FYpQVJiUZ%2BBtItptAjd5cTKbaxnR1PYqjb2qqIT%2Fcmo0rCjjbWDpp3YFI6DNMw0p105JNXJSeXRNfSJBMeFGvPWH6zsJbew2L61hW%2FmTiddPR3Kkk2dvxbwilrJ6bKGt1GTGmpj%2B7l3dumzELI5F6sZ%2BT%2FusKjjqzOesfoTKZCrqD43sWpn5OfTOq2JWE6vO%2FvjAKLe0q3mangiT4EKvYKK6fVKF2sPNA0hZVnQ6%2BD9VJDIXz2P5uFPTuzkRa0%2ByF4wdMqvD59gV7RlShrkltlVhR5btb3qEVVoMhXHD02vSG86SL1DtABqnYxCv8P6clExS%2Ba8SQcYKkomcnfumLNo6ibxPrvWeFZg%2B7xPsuW3VbpyD6j0lK1dlYBE5StrlznxkmVTyv8xPAxQF40umBrR5Cr3%2FHKL9TibQnzOyR8W5HxLGiznTpoEAn7RP1xb%2BoNXKPFtem0hJjKWqtu5heWEXKJMP68z8kGOqUBZGKKx59%2BXP2ig9HFkbpupU0NAJBLdtG8OY7R8NF1bLbBY5L0znL2UBZZDGQxCz0vX06DG%2BuPe3AzjyC8C22WstNKC4zFx9%2BMd8BQv2lapTgMOordKPohuA5ax0RfMSRti2D%2Bu%2BA7D3LUMKQBBHnCzIHvkWo25BdvMtOF%2FyAxRBtw73ksuicltGKt7fp5a%2BwZVkNkTFg5SPjW%2FV2c52C8%2BZJCBDUB&X-Amz-Signature=fc6ecdb753e6c02ce8a5b8edbc96728f517f98da0c5252824e9f2d67eac4909a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
