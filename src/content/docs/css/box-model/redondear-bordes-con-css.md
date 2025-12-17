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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664QDDMNN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrAZlwEBMXuSsVZG9Xq8ESlEE5yLgufRQsyWPI1a8W%2BAiBn4WqX34%2F3nGfxPNZTIbsO0lxmj2ugG9FSCK8AnCryCyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMUB3F47NMAEFddwioKtwDJ%2B9WDGG%2B2ltthIVx%2BKVbO8cmpkE2fNCsaAveRiZdDxRGl9pKFZCSfy0u0iMSzI%2FEae3PtXs4VAZ9%2B4070a4849WqyHc0G6nzI%2BHYMG7zV73nkghXpj4%2BoSP%2F6heXgvnSJl49Vho0VocUNgG6HBKdm%2ByoxeVJLJb0oMhTmlvLJVJwNmWk4QsMsot7TOPkhM0O0eptKaFY3cH16VpR8k0nmbuLl0vBKZhC6rryAJr8TP2sDKuQQTB0k95%2BzkP2M60H59KSLSvAnMMQru5fWNG%2FWLRkR8znfPDOFKvTV32XcmLngWZKWEmu0HSEK8mIwYvFQjGlgU%2BvJmoNTpHEn86we7mW7%2FVIH%2FBBydmGVocuZ6HO2Nq8diHUaiJoC35SiUKXN3b%2FnDXkR4%2FJNd5EItq%2BR%2FDGM0RQPBdsbTCi5CqeqC9HwuvE8pTj%2BjbFgkvQ8V%2Bv0MixHiZRRsOhxK%2FgAMmfDh1YbBXAP587p0UROert%2Bl7mZRThkHyyLSqWVlOMlZ%2Ft2jdC5P%2BdTetDusXV58NczqyJ2R6xBUnTjJaZ%2BGts%2Bi9s6okVOB94FkCii5dwke%2Flsbj5OdzX0Evn7%2Fu7FBivj8%2B%2BlKN8wdmnU%2FfhtH%2F777aTrQlUh1z%2FwQ1vXmQwvKqKygY6pgH%2Fr7hC3vXp4a5GB9wBcfCy4NOGJfzyGedYUgWDUST5FC3SawDjGOCH1fQEn%2BVWRZ7%2BCmwUNIAuLgFFODTuJun6keUArkK5j%2BEUbkw%2BZfglEgMYWtzv25TRW%2F9iXojQwOdT0jpnWS%2BpAYvLkm3TnLzdmizidwD9grwX%2Bpmf2qLf9fr8SBJMN9kOuGE%2FyARzINL%2F1XedsdYu5ZESfWdjYh2OtmWTe%2Bik&X-Amz-Signature=a0fc322363a07bc4eb2caefbdbe8d525e7e0963b1ad809a94f6e1415a7d2a988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664QDDMNN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrAZlwEBMXuSsVZG9Xq8ESlEE5yLgufRQsyWPI1a8W%2BAiBn4WqX34%2F3nGfxPNZTIbsO0lxmj2ugG9FSCK8AnCryCyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMUB3F47NMAEFddwioKtwDJ%2B9WDGG%2B2ltthIVx%2BKVbO8cmpkE2fNCsaAveRiZdDxRGl9pKFZCSfy0u0iMSzI%2FEae3PtXs4VAZ9%2B4070a4849WqyHc0G6nzI%2BHYMG7zV73nkghXpj4%2BoSP%2F6heXgvnSJl49Vho0VocUNgG6HBKdm%2ByoxeVJLJb0oMhTmlvLJVJwNmWk4QsMsot7TOPkhM0O0eptKaFY3cH16VpR8k0nmbuLl0vBKZhC6rryAJr8TP2sDKuQQTB0k95%2BzkP2M60H59KSLSvAnMMQru5fWNG%2FWLRkR8znfPDOFKvTV32XcmLngWZKWEmu0HSEK8mIwYvFQjGlgU%2BvJmoNTpHEn86we7mW7%2FVIH%2FBBydmGVocuZ6HO2Nq8diHUaiJoC35SiUKXN3b%2FnDXkR4%2FJNd5EItq%2BR%2FDGM0RQPBdsbTCi5CqeqC9HwuvE8pTj%2BjbFgkvQ8V%2Bv0MixHiZRRsOhxK%2FgAMmfDh1YbBXAP587p0UROert%2Bl7mZRThkHyyLSqWVlOMlZ%2Ft2jdC5P%2BdTetDusXV58NczqyJ2R6xBUnTjJaZ%2BGts%2Bi9s6okVOB94FkCii5dwke%2Flsbj5OdzX0Evn7%2Fu7FBivj8%2B%2BlKN8wdmnU%2FfhtH%2F777aTrQlUh1z%2FwQ1vXmQwvKqKygY6pgH%2Fr7hC3vXp4a5GB9wBcfCy4NOGJfzyGedYUgWDUST5FC3SawDjGOCH1fQEn%2BVWRZ7%2BCmwUNIAuLgFFODTuJun6keUArkK5j%2BEUbkw%2BZfglEgMYWtzv25TRW%2F9iXojQwOdT0jpnWS%2BpAYvLkm3TnLzdmizidwD9grwX%2Bpmf2qLf9fr8SBJMN9kOuGE%2FyARzINL%2F1XedsdYu5ZESfWdjYh2OtmWTe%2Bik&X-Amz-Signature=20ea453b2b22326b75e3aca836273d4dad4290db53beff92fc5fddb1f446269c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
