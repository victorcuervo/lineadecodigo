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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QAJPORR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4pVEhMjcODDnOYWo72NBHcrmtFRESLEs%2Bj3TRZQhWiwIhAJ6U5E4ox6s2EmNUO%2B3MLO7K6P8gBebq%2F12vbpOcAXLeKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV1PpHZCteTH3%2FdAsq3AMfy89puxhbUcfHrp46nCYagUMHzyKkavDz76bT73PTJ8zpbUeWkwf221on2%2F6qvAqYWaQXJnIa%2Bbhl8RC93k7zWUyX%2FY8Plj4GaYfBvu5xkbvfOSg3NMK1EeJHNYp%2F0MWt3k2XJ4HADDRidSo2XPzsT3xGLfnHgNjxVmmtnpJ22VYOccYZp4CijkwXwAW%2F0CnjnS1nPrPKGaVEenwenEoBglgja4UnToik1pdnHakx00vnQhHMoeI8Mg9mViuC2%2BkNUmwuggMZB%2FsE81mF19hmpoHISK1%2FJOPwLuHhBSK%2Bdht4Eg2Qj%2FDIVddjV%2FSBopZY1Zy1%2FuXtAZMcfg5reNV3rQH37lw%2Fh7xqmBHEGN5bax2yR9lEnAkVmUFNMMY1XF5IWRNweQB0j25cKUMgkpBxr1r61vdh59fUYILsEW%2F6B%2Bb20sfbTOLPcow%2FQeMy3Dq3WHVwYvpVUfqpi0lLqu7xUr3RTcdbxgu0tmBg%2FvmUCKvhaEETNG4aP%2BrHwadzcYoKu99AXRpVRbM2n7OHsOIdPSdxEW82Vzelf17Z0G8Or3sliA4LJOCeqndc%2FHUFyBM5yhbwol4Ld5OfiOKyWamw3iXB9bdSqpTV7MquT%2FWlu1rbEd1TEia5oEznWTDdoIvKBjqkAfirD%2BrN7hTgpG%2BmwsCUpCbQD0SliAkRxVfrY%2Fns9axe%2FYHVrTpjx0KTwzVUdUSXLp6GymrPn1MPhdXVOcr6ptuNq7sktxMVZMGypNuznjzmX4bKJHjdZE5BM3IE9NP%2Fck2hKKWqbTtrLFKstC%2BtDFooKACk1wZAFUfvQ0HMxrdS5URDDzAZ%2BUyNOLIy4HVcb14UnUbN0wSdCdzvosQgzk2QXkXp&X-Amz-Signature=93734e69d32b61fc32ca8b69788a95d803c3ad0d7fd3c879475e81706cfa5088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QAJPORR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4pVEhMjcODDnOYWo72NBHcrmtFRESLEs%2Bj3TRZQhWiwIhAJ6U5E4ox6s2EmNUO%2B3MLO7K6P8gBebq%2F12vbpOcAXLeKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV1PpHZCteTH3%2FdAsq3AMfy89puxhbUcfHrp46nCYagUMHzyKkavDz76bT73PTJ8zpbUeWkwf221on2%2F6qvAqYWaQXJnIa%2Bbhl8RC93k7zWUyX%2FY8Plj4GaYfBvu5xkbvfOSg3NMK1EeJHNYp%2F0MWt3k2XJ4HADDRidSo2XPzsT3xGLfnHgNjxVmmtnpJ22VYOccYZp4CijkwXwAW%2F0CnjnS1nPrPKGaVEenwenEoBglgja4UnToik1pdnHakx00vnQhHMoeI8Mg9mViuC2%2BkNUmwuggMZB%2FsE81mF19hmpoHISK1%2FJOPwLuHhBSK%2Bdht4Eg2Qj%2FDIVddjV%2FSBopZY1Zy1%2FuXtAZMcfg5reNV3rQH37lw%2Fh7xqmBHEGN5bax2yR9lEnAkVmUFNMMY1XF5IWRNweQB0j25cKUMgkpBxr1r61vdh59fUYILsEW%2F6B%2Bb20sfbTOLPcow%2FQeMy3Dq3WHVwYvpVUfqpi0lLqu7xUr3RTcdbxgu0tmBg%2FvmUCKvhaEETNG4aP%2BrHwadzcYoKu99AXRpVRbM2n7OHsOIdPSdxEW82Vzelf17Z0G8Or3sliA4LJOCeqndc%2FHUFyBM5yhbwol4Ld5OfiOKyWamw3iXB9bdSqpTV7MquT%2FWlu1rbEd1TEia5oEznWTDdoIvKBjqkAfirD%2BrN7hTgpG%2BmwsCUpCbQD0SliAkRxVfrY%2Fns9axe%2FYHVrTpjx0KTwzVUdUSXLp6GymrPn1MPhdXVOcr6ptuNq7sktxMVZMGypNuznjzmX4bKJHjdZE5BM3IE9NP%2Fck2hKKWqbTtrLFKstC%2BtDFooKACk1wZAFUfvQ0HMxrdS5URDDzAZ%2BUyNOLIy4HVcb14UnUbN0wSdCdzvosQgzk2QXkXp&X-Amz-Signature=a4ed20f0ba11be14c3f60810a8bd6830132b9482f07c1343f0a401140ea18435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
