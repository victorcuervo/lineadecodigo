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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667STQ3NHN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUY43D%2BJ5mCmgVvMzGQYqfsiMzRuDEA%2FTZHgN2LrJFOAIhAMfy%2FVinZ31qUHUcpvGgvLAgCr0RtYgUVzM3lQUvwYeAKv8DCHgQABoMNjM3NDIzMTgzODA1IgzO2CDRAB8guMAtjlgq3AM%2BW0G61H%2FnwbkekXVo4oFmSBEe2ak2jxU%2Fb1o0PvPAgHLfQtm9eFQ%2BfoZZENIUqzTgNVUHSH0W9kiHh5Jgk4poBAbtH8HMhOzZ7%2B5mzS9fWFsDDodl%2BR%2BXDr9CNouTySctB%2BHq09Wz2vHyvEKV8oBnfl6LQF3d%2BAe%2B6O3HeoRz0PIetNYQcm5ESWyUtmmXveRNCW%2FKcABXn8ikyZDgAzzs0GyTPjJ%2BZ55dLawlV5PZImCCRqws2lnWuBIOM6Voeaj6APolJAyvUxFVDnvjYQbE1clBy8gLwI0XxIetymaFBkQjS1H8yaVFGBYzUWg2JgnyiVPFZ3XCo8rH%2BVtor3%2FkGgo5x%2FAwgfIsgWueCwajASvbCjXTtVrJUBpGGnLyxOSgvvi02DVrZn%2BbnHW0l8%2B00nATynd8lU8q%2B193t1eWwnMH9wxifjJh3jR1S%2FbCyFrQi1MGZdj03Iz1UhaMksi%2FNc%2BSdXfe%2B%2FL1GbFYkqxeZmU%2Bb3nDzIGow6cE9BU3Hpb8SBynA2MXMyAYgBqawcaz8zLALr1RZJUGot2fDyvN48CUuDSRGzpZAgEnXKWt9v581ubPWtaaRHe7OlpV7pHsp%2Bkj%2BDh%2BdZIhsRIV%2Baly8M6ZMtUUmHjHzeqshTDUnYnKBjqkARBK6uEW2oejs8DeZP2yRhzlxy95JhDZZFnX94JZs0nZJHbovFCo2hdqR15423jebI%2BvJg4clq3dHTMenNCGy4DSfKRhkErG09lU2HJ2naA3ZP%2BftNl5P%2FWn2f5HhAWOV5XxbWpH%2F3%2BZugHHRSmZeBvheHK4sOP%2BNaD8e9XeM%2BtQlLbCksEkh6%2B9drhXuUV1kF%2Fv0myhbLTNP8z7eahxmzxoAkJ9&X-Amz-Signature=b003a53f912c2b02c078e469fa775852285525faebce66e999b23365553bd8dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667STQ3NHN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUY43D%2BJ5mCmgVvMzGQYqfsiMzRuDEA%2FTZHgN2LrJFOAIhAMfy%2FVinZ31qUHUcpvGgvLAgCr0RtYgUVzM3lQUvwYeAKv8DCHgQABoMNjM3NDIzMTgzODA1IgzO2CDRAB8guMAtjlgq3AM%2BW0G61H%2FnwbkekXVo4oFmSBEe2ak2jxU%2Fb1o0PvPAgHLfQtm9eFQ%2BfoZZENIUqzTgNVUHSH0W9kiHh5Jgk4poBAbtH8HMhOzZ7%2B5mzS9fWFsDDodl%2BR%2BXDr9CNouTySctB%2BHq09Wz2vHyvEKV8oBnfl6LQF3d%2BAe%2B6O3HeoRz0PIetNYQcm5ESWyUtmmXveRNCW%2FKcABXn8ikyZDgAzzs0GyTPjJ%2BZ55dLawlV5PZImCCRqws2lnWuBIOM6Voeaj6APolJAyvUxFVDnvjYQbE1clBy8gLwI0XxIetymaFBkQjS1H8yaVFGBYzUWg2JgnyiVPFZ3XCo8rH%2BVtor3%2FkGgo5x%2FAwgfIsgWueCwajASvbCjXTtVrJUBpGGnLyxOSgvvi02DVrZn%2BbnHW0l8%2B00nATynd8lU8q%2B193t1eWwnMH9wxifjJh3jR1S%2FbCyFrQi1MGZdj03Iz1UhaMksi%2FNc%2BSdXfe%2B%2FL1GbFYkqxeZmU%2Bb3nDzIGow6cE9BU3Hpb8SBynA2MXMyAYgBqawcaz8zLALr1RZJUGot2fDyvN48CUuDSRGzpZAgEnXKWt9v581ubPWtaaRHe7OlpV7pHsp%2Bkj%2BDh%2BdZIhsRIV%2Baly8M6ZMtUUmHjHzeqshTDUnYnKBjqkARBK6uEW2oejs8DeZP2yRhzlxy95JhDZZFnX94JZs0nZJHbovFCo2hdqR15423jebI%2BvJg4clq3dHTMenNCGy4DSfKRhkErG09lU2HJ2naA3ZP%2BftNl5P%2FWn2f5HhAWOV5XxbWpH%2F3%2BZugHHRSmZeBvheHK4sOP%2BNaD8e9XeM%2BtQlLbCksEkh6%2B9drhXuUV1kF%2Fv0myhbLTNP8z7eahxmzxoAkJ9&X-Amz-Signature=a589e0f009fa1bdbe9d08cf7ff5af8f4003cb78b61c86435f7d10289158a3e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
