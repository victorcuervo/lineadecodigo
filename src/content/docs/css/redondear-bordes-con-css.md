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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I6BWQ6R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIERAu1qgkMidmhi13JA3tvVJSLdCHLn55mD1LIyH%2FIN1AiBDbRYfleqWCiH70scNbcYo8ly6mOP24Sv2OiUJ2G9rsir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMJOAiV91WNGJ3YIvDKtwDVi9JC7hgpC4IPqlmEY3rr1v3nDHlVvvcVjpJTB8SXe3SW%2BJdI2qPDjONhi26c1%2FjVW84hBeNFGWn4un98qNwvDCRORTcOrrlOmfWhETxjWz40rVHq%2B09xwPQcn7qtxvaT0Bshh8toDPmR%2Bjv%2Bs3xfH%2Bhw%2BAiiWt215h45iruyt8VDAjoolGB6bKe%2FftWxB1OoMlniQb%2FVgl218kkaJWG%2Bsqx6VF26q28WPxRyiB0yIDuNcrce0O1w3c7h0ZFQqdJpC19xxxJYYgCUWcduIe8qIFcNpu3%2BVlST4k18jLH1QdKVK6pOIyKQKCDgqIYF%2F9qiiTpR4S1UpXf1RrtbIZxhH3IxugllLZ8k3wxa0rNwOJWRP8NNCcrjs0GFTmI6YggBK54U2OENn45GjuVId5d1XIN9XuC2XiiOlahNjfLnonHbbp4LUO9RYP%2BcCpGsM2Fq4EdcR7HKne3Q2Sil6BxJWIKUD3C3RH0hsyg%2FKsq0B6N9GyyM0vC6nYV9roZdYmhmw%2FY2MK4YCj212RdIyDK50qKrprp4gZn3JH0VgiXkcI%2B8RSyLUHYS1%2BthrfdIt1R8teMi69salZ%2F1iBH5K5WQpZrZEs%2Fhe8ra87%2Brj2%2FOjw53aHsIjRNyw22bokwl6LGyQY6pgHGbZz8Wft0ip%2B0gabSsOLBpkyBHEfs1bxfWeGaAcedwtBfdqoo2kq8t19oiFXZpJnx53GMgF6raJ927j%2B1Gm%2BHDNgfznPTsj9R%2BZCClsee7YP%2BvLGhimqInhEu7pF%2BVO5bGVRA%2FblmVfLxXn0OCkjwGgNKwKpNst%2FTIa%2BQ7OKE8wXqy3PLX8J7uoWxU17QiwtQtmXkEYVSVOb7%2FBjZFeJAvOtffbAg&X-Amz-Signature=7d73d2df8e736ac60f8542885fd3df2a731d4dbcfbd2a01149f1a1e1ead3453f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I6BWQ6R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIERAu1qgkMidmhi13JA3tvVJSLdCHLn55mD1LIyH%2FIN1AiBDbRYfleqWCiH70scNbcYo8ly6mOP24Sv2OiUJ2G9rsir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMJOAiV91WNGJ3YIvDKtwDVi9JC7hgpC4IPqlmEY3rr1v3nDHlVvvcVjpJTB8SXe3SW%2BJdI2qPDjONhi26c1%2FjVW84hBeNFGWn4un98qNwvDCRORTcOrrlOmfWhETxjWz40rVHq%2B09xwPQcn7qtxvaT0Bshh8toDPmR%2Bjv%2Bs3xfH%2Bhw%2BAiiWt215h45iruyt8VDAjoolGB6bKe%2FftWxB1OoMlniQb%2FVgl218kkaJWG%2Bsqx6VF26q28WPxRyiB0yIDuNcrce0O1w3c7h0ZFQqdJpC19xxxJYYgCUWcduIe8qIFcNpu3%2BVlST4k18jLH1QdKVK6pOIyKQKCDgqIYF%2F9qiiTpR4S1UpXf1RrtbIZxhH3IxugllLZ8k3wxa0rNwOJWRP8NNCcrjs0GFTmI6YggBK54U2OENn45GjuVId5d1XIN9XuC2XiiOlahNjfLnonHbbp4LUO9RYP%2BcCpGsM2Fq4EdcR7HKne3Q2Sil6BxJWIKUD3C3RH0hsyg%2FKsq0B6N9GyyM0vC6nYV9roZdYmhmw%2FY2MK4YCj212RdIyDK50qKrprp4gZn3JH0VgiXkcI%2B8RSyLUHYS1%2BthrfdIt1R8teMi69salZ%2F1iBH5K5WQpZrZEs%2Fhe8ra87%2Brj2%2FOjw53aHsIjRNyw22bokwl6LGyQY6pgHGbZz8Wft0ip%2B0gabSsOLBpkyBHEfs1bxfWeGaAcedwtBfdqoo2kq8t19oiFXZpJnx53GMgF6raJ927j%2B1Gm%2BHDNgfznPTsj9R%2BZCClsee7YP%2BvLGhimqInhEu7pF%2BVO5bGVRA%2FblmVfLxXn0OCkjwGgNKwKpNst%2FTIa%2BQ7OKE8wXqy3PLX8J7uoWxU17QiwtQtmXkEYVSVOb7%2FBjZFeJAvOtffbAg&X-Amz-Signature=07fdb7fe6dbd2477f321f25cbd1e4c18f3ec7c17d590457e398fe856c6b56cdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
