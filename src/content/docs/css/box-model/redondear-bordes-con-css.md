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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPQXUD3U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUUy9ZEgJPjqiSQ6qvfxN%2BZVPp8CuWN%2Fa4OTiSDf4Q8AiEA35glt%2BIwPXJO6XNueWZtsLybUM6W7%2BrEXhySYYscBpgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnFLLTHPSs3IeEn5yrcAyLBpYga%2BG%2F%2BjIRsk8Chexg7P2qhfWly7lBKPD6FKmNFhf6aMySH6iRI7f4Y9DVwgzFsQo17nwGtp2d4T3Or6sl0Gj4TPCQ75c2XpL7fXEfNHikDY4lkXsBlPa2%2Fd9nlB6hOF5%2FKvtc9yhJCrUhibtOom8n%2FeiHwvKgcBvTuNzuITsK67oauy9CNRpbhlsqdcfgxVAwu0hRc3m5BS90x36feC4YqV3jW0RvtAH96a1fwuoKDXIXGZzU8pQl5m3E1d%2BfKtuSmc8RQfQ66P7EetYWn1G81f6CkIEau765lo2oaiVxsX8KyRAssqxkJXNEnpSEplgVOx0a%2FiAeL5CaBq0SUof2J%2Ffe9LwO4CB1sAPfjFgCT6SapCCfcZtJkbRKrUb889ddFmLm%2FkJwpnid9X66sxxudC7Hni0UKYhu4edtkX89VLphbnITYmnL2DzLk%2BglvpLLlcqRxbqf7TPBqX5nsZT9sqU385W9hu%2FauDhlSEh4k%2FjalgGfiTbEsHfQNsRyWnUnMSrFlcQWwGh5xxYFlNeMxbNhhinsijQJoooa%2BSy3ijJ3uQZ2oducPAX%2BxeVeGc4ER495bQeCyiSiZEVM44e2jx8VnLCWeIvok4gzFkKdYsKThisQtbuZiMOuBi8oGOqUBd3VwOlufxVYGsKTk7wzo8UOMxeeSCy5i4HpwAkIO5wP0bCqq0T4%2FPzyMIXCRzSQXRZ2mqwZjHDtp0ebceewR%2FvUeSVmqR1lHrLSXuPr8YBrt5cEw5d%2B2%2BCa7F8BmXVnFleS%2BxuakH%2B%2BmjtusrzmOd0GcYvqyhMba2twZJEzvXu0uPtAYT8CkfopnZjOeo0Q2bquzBmEAoe6LhgyZhjAc4Cp%2BfYAg&X-Amz-Signature=ada0207ba16d4abbb403a33366e9d2a8be3175beb5548bc5fc5eab4ab4c14c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPQXUD3U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUUy9ZEgJPjqiSQ6qvfxN%2BZVPp8CuWN%2Fa4OTiSDf4Q8AiEA35glt%2BIwPXJO6XNueWZtsLybUM6W7%2BrEXhySYYscBpgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnFLLTHPSs3IeEn5yrcAyLBpYga%2BG%2F%2BjIRsk8Chexg7P2qhfWly7lBKPD6FKmNFhf6aMySH6iRI7f4Y9DVwgzFsQo17nwGtp2d4T3Or6sl0Gj4TPCQ75c2XpL7fXEfNHikDY4lkXsBlPa2%2Fd9nlB6hOF5%2FKvtc9yhJCrUhibtOom8n%2FeiHwvKgcBvTuNzuITsK67oauy9CNRpbhlsqdcfgxVAwu0hRc3m5BS90x36feC4YqV3jW0RvtAH96a1fwuoKDXIXGZzU8pQl5m3E1d%2BfKtuSmc8RQfQ66P7EetYWn1G81f6CkIEau765lo2oaiVxsX8KyRAssqxkJXNEnpSEplgVOx0a%2FiAeL5CaBq0SUof2J%2Ffe9LwO4CB1sAPfjFgCT6SapCCfcZtJkbRKrUb889ddFmLm%2FkJwpnid9X66sxxudC7Hni0UKYhu4edtkX89VLphbnITYmnL2DzLk%2BglvpLLlcqRxbqf7TPBqX5nsZT9sqU385W9hu%2FauDhlSEh4k%2FjalgGfiTbEsHfQNsRyWnUnMSrFlcQWwGh5xxYFlNeMxbNhhinsijQJoooa%2BSy3ijJ3uQZ2oducPAX%2BxeVeGc4ER495bQeCyiSiZEVM44e2jx8VnLCWeIvok4gzFkKdYsKThisQtbuZiMOuBi8oGOqUBd3VwOlufxVYGsKTk7wzo8UOMxeeSCy5i4HpwAkIO5wP0bCqq0T4%2FPzyMIXCRzSQXRZ2mqwZjHDtp0ebceewR%2FvUeSVmqR1lHrLSXuPr8YBrt5cEw5d%2B2%2BCa7F8BmXVnFleS%2BxuakH%2B%2BmjtusrzmOd0GcYvqyhMba2twZJEzvXu0uPtAYT8CkfopnZjOeo0Q2bquzBmEAoe6LhgyZhjAc4Cp%2BfYAg&X-Amz-Signature=0d25bf412c305fbfd4499434bee5dbc9a0a5cd86e095e19d7b58d5930880e014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
