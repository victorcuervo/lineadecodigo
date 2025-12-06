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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYBURQE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQBl9NijEvrH1DJQaMAmT6NGbq7js%2BvALv3tqKvo3u%2BAiEAs94rax4o%2FTUPtl0jDcmDtdNlcvgwhgHVugZ511cQtvQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFV5s%2BL8maXZ1vz4MircA1lkqnNeQ80p3mnArm%2B2WW1MWN6KWfetiTgOcPhdy%2BG%2FV%2FMfcGgzGgxwDjHRZainrcNOQZw4nSOBi0gla6EvYwiWH08z%2BHzi5nrisq1ys9CzTVhYZrN8F%2BorJSZWqv%2BTITUcEzjZtGwjc5LOAE90d74rFAir3a77675QX7iSwQn1D8b4fQwx5TuXk91%2FieddALO3z2HFAS400KGYytm2jO84M2NHtd1QlCOSaZSU4z14lsXuQZDanc3whju%2Fl4E6SR6zF%2B%2BET2jiIbiPIvL2mNnq%2FEfnqEk43kA7Qqz2yatA8IjXHX2MjPohmLiCBREV3Qxu5keVdCdt54BKAkDyvuQ5qfoUcXAOFD1vtlmUXFVH75FTZgetD9d2%2Fmr7RrvzuIoG6lhxyoImg%2B2IVUiwqTi4GiGd3g2zCu%2FvFVAwoOAye%2F7xqTRnXes7%2FkEhKNYteWvdtTzZ7s8gt1jrmL0vpoK%2BG6rxbHmQsy3tZq2lB2ZBja2fM2IWJA5fP9ihLTUnz%2Btuo13LmoVGNzAZn0rZwwR3Vynx23mDI3XpQr4xz9cbP6Xx5r9e6gY4b5MM7lqhFM%2B0MC5aCS8gRPOI1t0l0W1j43NwyEKgJDd8Ap2SBHY%2B9XXQ8d1G1OvVr0EzMIzrz8kGOqUBl2a6noBnJoI%2F2FfWBwbHLpBvOgHIxOmiR9CGzMUnlOPhFcF1Tp2Y%2FEXvWRvPy9cqZ101uvaRzGeRsFtDdTriKnJklVpyTWicbmHiqP%2Fu9AKxmzqCusGgxV3bt3tEWUR3HAagLXq0pp8J8Lra%2BB8IKCRBL14lS43bKNMwatcDe7PeOfTeT0U64oEqvqPVZeXFV%2F%2F3fQPcUg18pyKV26akidXjQOmc&X-Amz-Signature=68838dad60c3b85b25c98a89cdaec84bc056701c7a98cdffe9274949627d7fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYBURQE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQBl9NijEvrH1DJQaMAmT6NGbq7js%2BvALv3tqKvo3u%2BAiEAs94rax4o%2FTUPtl0jDcmDtdNlcvgwhgHVugZ511cQtvQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFV5s%2BL8maXZ1vz4MircA1lkqnNeQ80p3mnArm%2B2WW1MWN6KWfetiTgOcPhdy%2BG%2FV%2FMfcGgzGgxwDjHRZainrcNOQZw4nSOBi0gla6EvYwiWH08z%2BHzi5nrisq1ys9CzTVhYZrN8F%2BorJSZWqv%2BTITUcEzjZtGwjc5LOAE90d74rFAir3a77675QX7iSwQn1D8b4fQwx5TuXk91%2FieddALO3z2HFAS400KGYytm2jO84M2NHtd1QlCOSaZSU4z14lsXuQZDanc3whju%2Fl4E6SR6zF%2B%2BET2jiIbiPIvL2mNnq%2FEfnqEk43kA7Qqz2yatA8IjXHX2MjPohmLiCBREV3Qxu5keVdCdt54BKAkDyvuQ5qfoUcXAOFD1vtlmUXFVH75FTZgetD9d2%2Fmr7RrvzuIoG6lhxyoImg%2B2IVUiwqTi4GiGd3g2zCu%2FvFVAwoOAye%2F7xqTRnXes7%2FkEhKNYteWvdtTzZ7s8gt1jrmL0vpoK%2BG6rxbHmQsy3tZq2lB2ZBja2fM2IWJA5fP9ihLTUnz%2Btuo13LmoVGNzAZn0rZwwR3Vynx23mDI3XpQr4xz9cbP6Xx5r9e6gY4b5MM7lqhFM%2B0MC5aCS8gRPOI1t0l0W1j43NwyEKgJDd8Ap2SBHY%2B9XXQ8d1G1OvVr0EzMIzrz8kGOqUBl2a6noBnJoI%2F2FfWBwbHLpBvOgHIxOmiR9CGzMUnlOPhFcF1Tp2Y%2FEXvWRvPy9cqZ101uvaRzGeRsFtDdTriKnJklVpyTWicbmHiqP%2Fu9AKxmzqCusGgxV3bt3tEWUR3HAagLXq0pp8J8Lra%2BB8IKCRBL14lS43bKNMwatcDe7PeOfTeT0U64oEqvqPVZeXFV%2F%2F3fQPcUg18pyKV26akidXjQOmc&X-Amz-Signature=2b27b3c6d243c1149aca63ce148da03ec1b2c3dd1eb97b429340e0049cbcb03e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
