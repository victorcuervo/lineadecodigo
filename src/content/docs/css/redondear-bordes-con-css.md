---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LERYS7H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCN5wGaYyyXlui2gXkywKnuxHPdk8yaj%2B34RkIeDXctugIhAIv2MsB35Z4Q7reSt7Q0zwwYUFmtRUh4%2BLTatYEnsl7OKv8DCDcQABoMNjM3NDIzMTgzODA1IgzHQAOIm4hydkDRI%2F8q3AM1rJ1hSJUjzXYMkpe0NPRpmnS23gmgwfYey5ksgHMi8VV9%2F2ysGDMRiEAYLoXEBLKLLUtrlw292N%2BQ3UTss1chGgC3wX7I7mXXrXGEURktg0zCEtq%2Ftl%2FAg8yNjvE1hq%2BiYxUSiwBGY%2Bd3fdltt4QJkcDmMjiiOanSyTUrRAhRCoP5a6ID%2FY6Vo%2BdEy1TtdkQdVUnJNez2T1Q9iwhdzRd21LAjlWLwwl8UTq%2Bj8UXLWg02NwDN%2B8uDdLJwN7aH7C7BonqlefgEZpaJvmfpS3JzHtNTTleaB54H1fBLgOeeyofXUv64LJlBGZJz3eYHytzu2W8PjEdLcSIHBtqC8aT40hH3RYH3Knd5%2FJ8IZxUGHPv0ku%2B9c1EIzDLiEfPxXtxq0CkRU4qIBjISKHj4Bs9%2BGbbnrdY03hILHAmUiNEu9HXabhaQsiUVVWPISF%2BJHKFJbIWiZNP7yqye71Nzo%2B%2FCv0KoB1ULICgZkkWbNg362J23T99cGFzX565si5R2sRsUDQzO29HHs8rqaOLtN4u%2BERdiR8X9bKZahc4WRjFvOO3tk4czVYK2u5eXLkHgf5oX%2FLY4W2J0IGzIl8Yo4XeA3GPb9n%2B2xk5TJluB0frM2q4o23Vzqw3%2Bt4T9dzCQ3cLJBjqkAUTY619%2FlyATRM56tiaa%2FHoqsgOFkVFtQFo35L9Fb1c9piuen3aKWh7l%2F5BQBenJBZSh%2B6i5MZHllQMk08ctzrNAIcMQWd1v19cWmjSBR6sWkVyOt0EbeVGTqDGWZfVyXRDYoOTF9wC3FTEccIblAOsN%2FxgWlaiWpXVE7qRIrQeFZrFPzpggw8lmwnzTX5dPs86OqZm4lYhlRJWhr8TKQE5n71XY&X-Amz-Signature=532d8f798ecab26554d3a8ec84840a24755d9da28a2f79e262c5a0b1904b2176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LERYS7H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCN5wGaYyyXlui2gXkywKnuxHPdk8yaj%2B34RkIeDXctugIhAIv2MsB35Z4Q7reSt7Q0zwwYUFmtRUh4%2BLTatYEnsl7OKv8DCDcQABoMNjM3NDIzMTgzODA1IgzHQAOIm4hydkDRI%2F8q3AM1rJ1hSJUjzXYMkpe0NPRpmnS23gmgwfYey5ksgHMi8VV9%2F2ysGDMRiEAYLoXEBLKLLUtrlw292N%2BQ3UTss1chGgC3wX7I7mXXrXGEURktg0zCEtq%2Ftl%2FAg8yNjvE1hq%2BiYxUSiwBGY%2Bd3fdltt4QJkcDmMjiiOanSyTUrRAhRCoP5a6ID%2FY6Vo%2BdEy1TtdkQdVUnJNez2T1Q9iwhdzRd21LAjlWLwwl8UTq%2Bj8UXLWg02NwDN%2B8uDdLJwN7aH7C7BonqlefgEZpaJvmfpS3JzHtNTTleaB54H1fBLgOeeyofXUv64LJlBGZJz3eYHytzu2W8PjEdLcSIHBtqC8aT40hH3RYH3Knd5%2FJ8IZxUGHPv0ku%2B9c1EIzDLiEfPxXtxq0CkRU4qIBjISKHj4Bs9%2BGbbnrdY03hILHAmUiNEu9HXabhaQsiUVVWPISF%2BJHKFJbIWiZNP7yqye71Nzo%2B%2FCv0KoB1ULICgZkkWbNg362J23T99cGFzX565si5R2sRsUDQzO29HHs8rqaOLtN4u%2BERdiR8X9bKZahc4WRjFvOO3tk4czVYK2u5eXLkHgf5oX%2FLY4W2J0IGzIl8Yo4XeA3GPb9n%2B2xk5TJluB0frM2q4o23Vzqw3%2Bt4T9dzCQ3cLJBjqkAUTY619%2FlyATRM56tiaa%2FHoqsgOFkVFtQFo35L9Fb1c9piuen3aKWh7l%2F5BQBenJBZSh%2B6i5MZHllQMk08ctzrNAIcMQWd1v19cWmjSBR6sWkVyOt0EbeVGTqDGWZfVyXRDYoOTF9wC3FTEccIblAOsN%2FxgWlaiWpXVE7qRIrQeFZrFPzpggw8lmwnzTX5dPs86OqZm4lYhlRJWhr8TKQE5n71XY&X-Amz-Signature=9bd0cc8fc2b10e1cd4fb984a7372da227b30e1a2dcbd22aac184c3854fc09e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
