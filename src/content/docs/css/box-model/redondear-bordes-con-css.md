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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFM4YGY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmMV7ou2sTToR9B2jPPSmcKHU8ML7V97JsXzvNE%2FFOEwIhANzSHcBuFVHvJOyOCla3n%2FnDobShlsRmu8kQz65FopTMKv8DCH8QABoMNjM3NDIzMTgzODA1IgxCWcTDnOQZ5IjDeakq3AO1HRaONDi5BpuUubH3KsDJpC8fMdoWscTGalEVuMWnFpVg1aTcJIJwRQmbK8Q00%2BFMVHC%2F9nC1SqVS%2FEJD3deFkN4NwmoiqXUjPrw4qegGmuwQlJn1kxH%2BIRpitxVnCfgxWpE7GZB%2BxLTnhzxBmCNLggvz42MnRsweipF9tSzcr%2Fl%2FfgwrxMZjkPoRHfsXFnApSYRfwSD9oLbcInC7F2TfVr4%2FHdJGHWzwY8XWWctGZI8tUED9%2Fht5v5%2BoXGtYoWnepbV0e1euHRDmHf%2B6esfs8kUt%2Fuby%2B0o11lsF0MdAUgl003Knb3tnjUs4v5roMlDs8IbGijQRsf0rmBdUI5Rbw1NLzNrwfbErSxL6AAGJOx4tNjUCzBaNCTLxY2ak92svhKvbH80Ef0pzugBO6XBnPqy4m49WIh6GwXK%2BC1V13AJTNS%2FVhxYYigH7NXOr2aFecYbdm6PlaIvPNsykXESeXQ8gmZ338b7Y%2FF8RfV7KxcGqNmr8tRqc1qGR0Q9FYWTwsLF5RUtDsLuq4YlIB5bm4oKce6x9XZ1pDcYMpYHjTIMCOyjzcHXUi%2FpTjqpr4RMifSks%2FcKcxN6Cgp%2B6oOyce81UGxSjCu2jDH1H1Bb1a86%2BDw23fVlI0kN2bTDX4YrKBjqkATNxEL94fneyJyS%2Fjf7i55isZO3jKmo7D%2FMs1vN3BPY56odeF6yBmHxsDQ6i1Tkyk4op0ETxRxIcinqsaUPgzwOm2x5qIm4Cistdsuc9v4wb6Q6CDEp7c%2FA4MwqfDLaQfEFmWtvDt%2BuOyxSO1etuS5OYQKlQGOYyEx%2Fjp8AP5AzA9zY6DkIaVl%2FkdBqaZCSrQgqGjwVAacqL71lO9qswcMAK2Zpq&X-Amz-Signature=d3feb8db59973c724363cc0e471f1fd70b1a14f98aa4cbf4703dafd69765e6ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFM4YGY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmMV7ou2sTToR9B2jPPSmcKHU8ML7V97JsXzvNE%2FFOEwIhANzSHcBuFVHvJOyOCla3n%2FnDobShlsRmu8kQz65FopTMKv8DCH8QABoMNjM3NDIzMTgzODA1IgxCWcTDnOQZ5IjDeakq3AO1HRaONDi5BpuUubH3KsDJpC8fMdoWscTGalEVuMWnFpVg1aTcJIJwRQmbK8Q00%2BFMVHC%2F9nC1SqVS%2FEJD3deFkN4NwmoiqXUjPrw4qegGmuwQlJn1kxH%2BIRpitxVnCfgxWpE7GZB%2BxLTnhzxBmCNLggvz42MnRsweipF9tSzcr%2Fl%2FfgwrxMZjkPoRHfsXFnApSYRfwSD9oLbcInC7F2TfVr4%2FHdJGHWzwY8XWWctGZI8tUED9%2Fht5v5%2BoXGtYoWnepbV0e1euHRDmHf%2B6esfs8kUt%2Fuby%2B0o11lsF0MdAUgl003Knb3tnjUs4v5roMlDs8IbGijQRsf0rmBdUI5Rbw1NLzNrwfbErSxL6AAGJOx4tNjUCzBaNCTLxY2ak92svhKvbH80Ef0pzugBO6XBnPqy4m49WIh6GwXK%2BC1V13AJTNS%2FVhxYYigH7NXOr2aFecYbdm6PlaIvPNsykXESeXQ8gmZ338b7Y%2FF8RfV7KxcGqNmr8tRqc1qGR0Q9FYWTwsLF5RUtDsLuq4YlIB5bm4oKce6x9XZ1pDcYMpYHjTIMCOyjzcHXUi%2FpTjqpr4RMifSks%2FcKcxN6Cgp%2B6oOyce81UGxSjCu2jDH1H1Bb1a86%2BDw23fVlI0kN2bTDX4YrKBjqkATNxEL94fneyJyS%2Fjf7i55isZO3jKmo7D%2FMs1vN3BPY56odeF6yBmHxsDQ6i1Tkyk4op0ETxRxIcinqsaUPgzwOm2x5qIm4Cistdsuc9v4wb6Q6CDEp7c%2FA4MwqfDLaQfEFmWtvDt%2BuOyxSO1etuS5OYQKlQGOYyEx%2Fjp8AP5AzA9zY6DkIaVl%2FkdBqaZCSrQgqGjwVAacqL71lO9qswcMAK2Zpq&X-Amz-Signature=b71027c6dcd3a3fc5f690129671e7e706e385be5b68383bf1e2b28ad6dc812e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
