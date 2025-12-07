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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF7OQSOL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0q%2F4tIHqzcWVnTbE%2BGNYqHa%2B9fgZl0F9w1kScJsoPVQIhAODGrsWYPdgTuywzhWFB3y9Ef1BdM1prYRvqADjiaWY6KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDlnB2P%2Ftr95uLkBMq3AMoA3bMIcphqfQ%2By7M%2FXZ%2BSQfmkbYaMYZGkB5resEI%2BOVRAAEmqI14jBRqa3X5D4fC09Ob0NXphLlJ%2F2Nf0%2FaOk%2FEGLo2WlIqLsdGfy0rpyqq92Tr5EKmRmhPZaTjDHqEAJA2nok3Hlt1dE0QCdLZFR7RmXuCyizPOVJoL0jVX%2FMWrh8%2BWGAwu%2FK%2FgIXKoptg2oO90sWRudOG6R%2BBMHebinyuseLdyEJRwg%2FEt0L5YUIiWgtv9s1upqAdcsvrbbTnziA6rXNOBv0%2BaQomRL%2BqZyspmUIw4YU%2BzuHYZbhc1GLRVs3E22Ymhup8Ij2P2CzYEMFjpRbbMDjI991xU4xLvujlbntjGVaGg54vdR6FFtcmYz2TuIeD7yuc0Y8Nl1qstSNPdrIB5KCOEqUOfkdLadqJ0%2F9s4RPdVGXFjsx2CGLfbP7tC%2FqzrGZgX4IlCWyZrVK%2FR6UrrwKSrQ%2FCkz%2BSj3sfoFs0Hfzy%2FShABoOZ32IPMRmVkQPjXJBHpgVT%2FtWxORfzE1r6g%2FrKFX6P62v4lRABDcoD06mb%2BYzMmsUv34DTQjMMtgoMWCYvlG8TwEmt0bJ%2FyH2AAXnIoIXa%2F7b8PbBk5RBHRvIPN%2BxBnDAe25%2Fr7BZl%2BVh0o%2FDsM1mDD%2Fo9TJBjqkAa80l%2FXhm08BNqFIDqs0Z4BzHGSKYdYmEgLUUqslUIpItzk4YU2tmk%2F5T9SuD8PS4Cc5NLFnFuRHdu6lzcCTeHi0vuNk1348fel8q8RQSdWrHeabnYy2DEGAHKX5UhP7N7E1v1u7G2TC91RvFXaJQRo0h7xeJhPKiy3VZ%2Fh7wAmn4S6p%2F5YvfVRfTGl3yWxEX7DgIVGmwtskoP4arL%2BLUOBi4sAr&X-Amz-Signature=8512d32a0013c56eb5c59b0849dac3abcf6e26d413a2ac080ac09d28308c96ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF7OQSOL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0q%2F4tIHqzcWVnTbE%2BGNYqHa%2B9fgZl0F9w1kScJsoPVQIhAODGrsWYPdgTuywzhWFB3y9Ef1BdM1prYRvqADjiaWY6KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDlnB2P%2Ftr95uLkBMq3AMoA3bMIcphqfQ%2By7M%2FXZ%2BSQfmkbYaMYZGkB5resEI%2BOVRAAEmqI14jBRqa3X5D4fC09Ob0NXphLlJ%2F2Nf0%2FaOk%2FEGLo2WlIqLsdGfy0rpyqq92Tr5EKmRmhPZaTjDHqEAJA2nok3Hlt1dE0QCdLZFR7RmXuCyizPOVJoL0jVX%2FMWrh8%2BWGAwu%2FK%2FgIXKoptg2oO90sWRudOG6R%2BBMHebinyuseLdyEJRwg%2FEt0L5YUIiWgtv9s1upqAdcsvrbbTnziA6rXNOBv0%2BaQomRL%2BqZyspmUIw4YU%2BzuHYZbhc1GLRVs3E22Ymhup8Ij2P2CzYEMFjpRbbMDjI991xU4xLvujlbntjGVaGg54vdR6FFtcmYz2TuIeD7yuc0Y8Nl1qstSNPdrIB5KCOEqUOfkdLadqJ0%2F9s4RPdVGXFjsx2CGLfbP7tC%2FqzrGZgX4IlCWyZrVK%2FR6UrrwKSrQ%2FCkz%2BSj3sfoFs0Hfzy%2FShABoOZ32IPMRmVkQPjXJBHpgVT%2FtWxORfzE1r6g%2FrKFX6P62v4lRABDcoD06mb%2BYzMmsUv34DTQjMMtgoMWCYvlG8TwEmt0bJ%2FyH2AAXnIoIXa%2F7b8PbBk5RBHRvIPN%2BxBnDAe25%2Fr7BZl%2BVh0o%2FDsM1mDD%2Fo9TJBjqkAa80l%2FXhm08BNqFIDqs0Z4BzHGSKYdYmEgLUUqslUIpItzk4YU2tmk%2F5T9SuD8PS4Cc5NLFnFuRHdu6lzcCTeHi0vuNk1348fel8q8RQSdWrHeabnYy2DEGAHKX5UhP7N7E1v1u7G2TC91RvFXaJQRo0h7xeJhPKiy3VZ%2Fh7wAmn4S6p%2F5YvfVRfTGl3yWxEX7DgIVGmwtskoP4arL%2BLUOBi4sAr&X-Amz-Signature=1babb735b0ce880e04f814f1eb6b832b2f9a43e374d3835612889fae41f5fa69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
