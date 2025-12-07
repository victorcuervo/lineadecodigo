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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U67R2JU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdTiGX%2Bbyvo2c5QPcGrUXl3JAaB10FAZu%2B32yTL9t7RwIgKIjqh1H08LSUB67fmk0e7O19q5dCEHrMmNgD5Wvq%2BosqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcBOR37JwGZAb%2Bx8CrcAzTvKXlCV0osE7qgraIHXCyIEqh1poaLdxfclmJS4v1otoz95O0hZv3FmrJESEJMFRnxQ59JOA1VlneBan2y83iQubf%2BJvat5kwAZViIzbC%2F0dRaN2mFoNs9TnhkhGcYMM%2F1iQIdn8yeAjOWL5hJ%2BwnXwkuYqy%2FsdRyffLqkKuszq1I%2BsfuMaeQjy7939EGAx%2Fx3hf1nH2IR%2BR%2Bjb5PVMdEupw8L0ZpjzNt7k7KkPNAsaz9aaEqHbRFeUItSDancqx3U4HGReqH5lyR6NTe3CE3GGy%2B9fVLbQWF%2FEmALkbEGvuX21E9RYKBNs59ixDqkf2pe2ep83U4HwC3wY%2B4cf68EdlINyFfdA3i4KezAPdxcDsWoxifl5Cs%2BotFTG%2BYHezteuNhKUGhxNxV8hmCvp4uYIgeFmvIsEb2mgulQRaVkq3r55yxB%2BKO4yanMmGsSKfNLnTcH%2BAakaxmG7%2FUCgQdtVO7bfuKpFASlGg7TWeCY7bp50J3%2BeW5F5R4QR%2FOhGUbMk8%2F5sUuaqM6qxDhmu680FTJSfr522LqUuz1eJGV23Q8d3v0peu2nmdlD7ii%2BTkmMyBAA4nWSzAYa6VXhZ13OTGtxqd%2BHNaCj2OHp4CDvyIErpP1az3PKYhdsMLD%2B0skGOqUB6XRA4fMCcM6EldF3Kstl64AWg%2BnyC19PAJJhq5RzDrJtjjyDENnSXlPiyhWt0kZRtx7GPy82GrF3GIDDZs%2BdjA11Xmsjy2Ue7U%2Bd%2BoLubhtPuLAZs%2BePbb7jI6rK9WLX9HbSaERS7aujWULOorC%2BUWpHerypxpUuMzi%2FUEYgWBA6IEK1ZWdNEmdAETXE3JiJ%2FISdUCyXOg82Y3oWtnlVbE5If59D&X-Amz-Signature=c9fb541b1696a790a00f8c3c67c98a7e2bc19a651e8bc5aa6c19433c4b5461d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U67R2JU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdTiGX%2Bbyvo2c5QPcGrUXl3JAaB10FAZu%2B32yTL9t7RwIgKIjqh1H08LSUB67fmk0e7O19q5dCEHrMmNgD5Wvq%2BosqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcBOR37JwGZAb%2Bx8CrcAzTvKXlCV0osE7qgraIHXCyIEqh1poaLdxfclmJS4v1otoz95O0hZv3FmrJESEJMFRnxQ59JOA1VlneBan2y83iQubf%2BJvat5kwAZViIzbC%2F0dRaN2mFoNs9TnhkhGcYMM%2F1iQIdn8yeAjOWL5hJ%2BwnXwkuYqy%2FsdRyffLqkKuszq1I%2BsfuMaeQjy7939EGAx%2Fx3hf1nH2IR%2BR%2Bjb5PVMdEupw8L0ZpjzNt7k7KkPNAsaz9aaEqHbRFeUItSDancqx3U4HGReqH5lyR6NTe3CE3GGy%2B9fVLbQWF%2FEmALkbEGvuX21E9RYKBNs59ixDqkf2pe2ep83U4HwC3wY%2B4cf68EdlINyFfdA3i4KezAPdxcDsWoxifl5Cs%2BotFTG%2BYHezteuNhKUGhxNxV8hmCvp4uYIgeFmvIsEb2mgulQRaVkq3r55yxB%2BKO4yanMmGsSKfNLnTcH%2BAakaxmG7%2FUCgQdtVO7bfuKpFASlGg7TWeCY7bp50J3%2BeW5F5R4QR%2FOhGUbMk8%2F5sUuaqM6qxDhmu680FTJSfr522LqUuz1eJGV23Q8d3v0peu2nmdlD7ii%2BTkmMyBAA4nWSzAYa6VXhZ13OTGtxqd%2BHNaCj2OHp4CDvyIErpP1az3PKYhdsMLD%2B0skGOqUB6XRA4fMCcM6EldF3Kstl64AWg%2BnyC19PAJJhq5RzDrJtjjyDENnSXlPiyhWt0kZRtx7GPy82GrF3GIDDZs%2BdjA11Xmsjy2Ue7U%2Bd%2BoLubhtPuLAZs%2BePbb7jI6rK9WLX9HbSaERS7aujWULOorC%2BUWpHerypxpUuMzi%2FUEYgWBA6IEK1ZWdNEmdAETXE3JiJ%2FISdUCyXOg82Y3oWtnlVbE5If59D&X-Amz-Signature=5830886f4015cb3e9f06e2dfebb79edbbdc3f10910bdbd6307048476aa0d08f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
