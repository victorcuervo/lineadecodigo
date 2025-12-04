---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZXQINX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDhkQ5zhN3OA3BUNn1XWE%2FglHEJWF0nRgjkmQVBOcILFwIgCzt1zrFrovQijrASBF0pPUX5JtJvLaMxyw3VzqZiwwMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKDBT8BjkqLOaDq4oircA8N8gu9U%2BWj%2Bq9RIlVpX2uTZW7qfP8Cqgh%2FZVIcCbi6xqPhdDCUGkpYPAmnJCUnC1LTX4HpSrZJu8EGecEgoSuWvb2iSxQPBBT%2Fp4F%2FfoVR9rnC2Oio6trKxWTJrjtKjqa%2B%2Bek9CGwBmGuBYYLN%2FWjxcpe4UkFTd6jM10biCEfpa5LFRhie4K2n74PZ9w7YX4A3b5kXf1B5u4HZWihtjr5%2FBdJcEKzyRuVdFOgT1xP%2BP7MDa3BbdgdTs3sh2%2FMkNWDbAc6OuD7uaUV68hNioPVxtrqjv8bxFRvY73LDQNtmq1jhJP%2FrleMiUOK937mKKtGU3thZj0FdLS0OycgF14fIJIQiqNGqCaYUDvqJo3gGiy5mPLNgn8m2rOj28JN0PQ1r4G8RwuYbuaDSrhfikdaPp%2B2xBBeP6RnV2sneLaw1jAUNXjQQgRxtDO9I8t9qhdm9tIXrt%2BzzycTa7oFqCY1bmQ2efnNJJ8Y53JsC04YTg92PB3KIGt5o%2BJ3thb%2Bedppw7ZiCtPgIxRj3va9jViG%2BVWJf9Dvdw92BjixmPsn7DPtWvDrIvaMSt%2FlyFEKsDEdvv%2BcKEGzL%2FhV3MvIG1o8k24Hap%2BOGcNPiLlMJzeVivw%2BLR19k9BsERMYSMMOTKxMkGOqUBt2XFYrpWng1MRzVJu9bdkuqVvjBMihZeD2EY8ryxNa0611S9fW93gvNs2RGh4wrhgPWMno5fp3htKwgqavhPQ8fhrzFHRxuW%2FsGDm0t5j05EBaLjSMCEUFKYilMkqSEF9%2Fey%2FzpHuuKuXi2lSgxv57uifignPH48tS3y%2BsmAe9DSizTcRfxbJdrjQJlD4ncKJ2uVrg6yKDHAKxwZo8v%2FlyGTyK3M&X-Amz-Signature=64d19fe8977e6bb0fdc38965e054d7a58ff27d9af8a58e0bab609e5d3173958a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZXQINX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDhkQ5zhN3OA3BUNn1XWE%2FglHEJWF0nRgjkmQVBOcILFwIgCzt1zrFrovQijrASBF0pPUX5JtJvLaMxyw3VzqZiwwMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKDBT8BjkqLOaDq4oircA8N8gu9U%2BWj%2Bq9RIlVpX2uTZW7qfP8Cqgh%2FZVIcCbi6xqPhdDCUGkpYPAmnJCUnC1LTX4HpSrZJu8EGecEgoSuWvb2iSxQPBBT%2Fp4F%2FfoVR9rnC2Oio6trKxWTJrjtKjqa%2B%2Bek9CGwBmGuBYYLN%2FWjxcpe4UkFTd6jM10biCEfpa5LFRhie4K2n74PZ9w7YX4A3b5kXf1B5u4HZWihtjr5%2FBdJcEKzyRuVdFOgT1xP%2BP7MDa3BbdgdTs3sh2%2FMkNWDbAc6OuD7uaUV68hNioPVxtrqjv8bxFRvY73LDQNtmq1jhJP%2FrleMiUOK937mKKtGU3thZj0FdLS0OycgF14fIJIQiqNGqCaYUDvqJo3gGiy5mPLNgn8m2rOj28JN0PQ1r4G8RwuYbuaDSrhfikdaPp%2B2xBBeP6RnV2sneLaw1jAUNXjQQgRxtDO9I8t9qhdm9tIXrt%2BzzycTa7oFqCY1bmQ2efnNJJ8Y53JsC04YTg92PB3KIGt5o%2BJ3thb%2Bedppw7ZiCtPgIxRj3va9jViG%2BVWJf9Dvdw92BjixmPsn7DPtWvDrIvaMSt%2FlyFEKsDEdvv%2BcKEGzL%2FhV3MvIG1o8k24Hap%2BOGcNPiLlMJzeVivw%2BLR19k9BsERMYSMMOTKxMkGOqUBt2XFYrpWng1MRzVJu9bdkuqVvjBMihZeD2EY8ryxNa0611S9fW93gvNs2RGh4wrhgPWMno5fp3htKwgqavhPQ8fhrzFHRxuW%2FsGDm0t5j05EBaLjSMCEUFKYilMkqSEF9%2Fey%2FzpHuuKuXi2lSgxv57uifignPH48tS3y%2BsmAe9DSizTcRfxbJdrjQJlD4ncKJ2uVrg6yKDHAKxwZo8v%2FlyGTyK3M&X-Amz-Signature=693252cada4c9c3b52fdfe70a9d6252a1f1fd9b21a8cb43822ca759c1c88ab46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
