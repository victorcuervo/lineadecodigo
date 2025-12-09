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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5W2J4LJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6%2F%2BK%2B0Z1j3vWoogkk43yLc86Tlr5s%2BBDNjRso8QydPAiBUiCpEPqes1BtsFFSMjqvIt3jSuidWqyHNMQKNgnGVNCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUZottQoAdzBXwAa0KtwD8uXuBC3NJ0Tdj%2F3CMx%2FCLBrZJJg2IREiu2EuboNy6el4G4KSDkuPJDYG26jc87a4nqDfetoUTYDt93%2Bm8BKG7qhOPpOv8sfXe9MVGel814cM19jSyZiRVPy4CjwlU3w%2Ba84EdKKWXtCb3dHBFTjlYz64%2FcpaM3d50i1%2BZnukwtiZiRwU2ihTa1Cbqe77u0WiUOL5dQIp1Jxz4M2Tkq%2BWL4wx7SpLnF1WHEKTTHxGI9RHaVUPVlHuxjxW6DnOujBXz5eFNdEIRlpZaA7rMGBJYJ2RLWO6hkdYoBy2tNmEEw44V%2FeHquUpvHjd5GWuPk3Fq7L6zH4xMt7e6%2Ff3GptAdiaCh1dbYDAXoU%2Fl0EoXcSkG0sHiQ0yl9%2BZ7lXZ64v8unNWsP6n0kEF1DSDVim4uaHxyLjJEviQW37IYVQ21CldM4XYO%2F1N2lc%2BvJwHPB4pRWREbkWAXIF5TlkDeB5TKEKH1lYiM3O0UHkxIVCiqFMs8AvpX5TCj%2FdUHp%2FKL69zmWiW%2ByMBjBMdyG8V7tBS01NWRnYasVTW1epgWMUP5VngkCRBbbbe8TKwvFbUkCuHtFCOPFK1zbYnAxGg%2FndQuECZhPR66%2FTa%2BE9gG6VJmn1pH9uAdxIn4TBSPRDMwrojfyQY6pgHpLN1XGi8zVNlpUsg6Zm6aPqcyB0Vaj%2BEAdNNn7Yj3XTC9KZ1MvIvqIz3xYTDmsA2OquvbGNJFogiTySnXGMC93mKQ%2B1n8ThbLpSF%2BmtPm6ECBRH%2F88ZYs1qIfrayGe6LVRg7AE5mPSp0a0Ww6nADACmCwr7p%2BKqMotdCx3QotL3h%2BsjgA20e68FyauZK2cGboDivJ52kb7FBLK9tfuH7OhslNj%2BtK&X-Amz-Signature=5a1f0be82efe3ee6d948431d28541a238690bfd9914f9f440f674e182bff8c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5W2J4LJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6%2F%2BK%2B0Z1j3vWoogkk43yLc86Tlr5s%2BBDNjRso8QydPAiBUiCpEPqes1BtsFFSMjqvIt3jSuidWqyHNMQKNgnGVNCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUZottQoAdzBXwAa0KtwD8uXuBC3NJ0Tdj%2F3CMx%2FCLBrZJJg2IREiu2EuboNy6el4G4KSDkuPJDYG26jc87a4nqDfetoUTYDt93%2Bm8BKG7qhOPpOv8sfXe9MVGel814cM19jSyZiRVPy4CjwlU3w%2Ba84EdKKWXtCb3dHBFTjlYz64%2FcpaM3d50i1%2BZnukwtiZiRwU2ihTa1Cbqe77u0WiUOL5dQIp1Jxz4M2Tkq%2BWL4wx7SpLnF1WHEKTTHxGI9RHaVUPVlHuxjxW6DnOujBXz5eFNdEIRlpZaA7rMGBJYJ2RLWO6hkdYoBy2tNmEEw44V%2FeHquUpvHjd5GWuPk3Fq7L6zH4xMt7e6%2Ff3GptAdiaCh1dbYDAXoU%2Fl0EoXcSkG0sHiQ0yl9%2BZ7lXZ64v8unNWsP6n0kEF1DSDVim4uaHxyLjJEviQW37IYVQ21CldM4XYO%2F1N2lc%2BvJwHPB4pRWREbkWAXIF5TlkDeB5TKEKH1lYiM3O0UHkxIVCiqFMs8AvpX5TCj%2FdUHp%2FKL69zmWiW%2ByMBjBMdyG8V7tBS01NWRnYasVTW1epgWMUP5VngkCRBbbbe8TKwvFbUkCuHtFCOPFK1zbYnAxGg%2FndQuECZhPR66%2FTa%2BE9gG6VJmn1pH9uAdxIn4TBSPRDMwrojfyQY6pgHpLN1XGi8zVNlpUsg6Zm6aPqcyB0Vaj%2BEAdNNn7Yj3XTC9KZ1MvIvqIz3xYTDmsA2OquvbGNJFogiTySnXGMC93mKQ%2B1n8ThbLpSF%2BmtPm6ECBRH%2F88ZYs1qIfrayGe6LVRg7AE5mPSp0a0Ww6nADACmCwr7p%2BKqMotdCx3QotL3h%2BsjgA20e68FyauZK2cGboDivJ52kb7FBLK9tfuH7OhslNj%2BtK&X-Amz-Signature=87d08f0710b3a99f451c60e1c88f771643956fbb564ce83e2b37d19a29efe135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
