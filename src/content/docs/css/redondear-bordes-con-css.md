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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y7W6KHL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfvNJQUhxWL2Dlh%2BSkY46UFRBUvkwqD8ibg0UicWOvWQIhALHN1wwVRqWMv%2Fnqe%2Byz3CD6BZ6MdT73bjwlTprS2UY3KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmIher%2Bx2dxF0gUo4q3AOHSm6yU7VuhB2KRHf9%2BiwTvBSFjv7eN0mVBDaBABVMTy8T2PCZxAJ952PyMoBiz2tNTRE5umwrjU6%2FqMXMVpHwWVIYHs8KzCYqpTb3cSvPLKbci%2FE44j2vTS7jMwEcSfFXl21t%2FdjJ2q2H3l6JAW5mfwuw3%2BEewAvp26ovkFks%2BJjoJaCSsT5kFaENLyyABKmI4Jl2UcCn8U0esVlbTwaJqPviJhUPX4e983Bpzg3YoW41ZNcebP9ffd46HPZFQPSzPprcedTGWwL1REtXeUPtzBFtqJqfvH5Apdp9tprjO0YohPUpeG%2BC8Pq9s5PY2Tryv0fRRp1cm%2BEoDyUc%2BiRYN71J%2Febu67kcyu%2Fr78kv8yVLIpqyGTTxG1fZZWTvafG7RLU2QVJoWal4oBp3T29jZhw64oqs9HkujIJ6sQJ7nKmg11ozGJcTbbpLOiLQ7TDM7oT5KMdOO%2BEPQ2DpH%2FhdOHzNMw4oqfUOL4Hh4lwmw9fSUq3D4kjY1PGOgJC%2F8j1ma3fpiwswKfXEAquIGaLX61qzWa8cvKIZSECbKK7dUno9B49Ccj3fUfK1T4hjhjTVMit6gO1F1mKRIwKqt6ARi1wXDv7AD72CABfsZYPm5szKc0nunO215M8yiDDf7dnJBjqkATT%2BVqbnMSM6IRm54%2FXC8bAgTJHfe4FgKK%2FxQSDCzlKkqG4cZ6iv1JluVdd%2F%2FZ%2F3Q1gMcZAWwUl3VTsm67vYK0E%2FcECMfHk%2BKpm%2FBE66i9oVPJ3gh0%2FA%2FfkuEgjc2Rvcm37dBgnOa5%2FHaB9%2B0abPJ1D5XlLsILeH6ghGz5%2FlL1L922hIVBCUYhpYGaQCxoVJwKBUcRH0AKzDYJRI%2Bj1j8MjLE1V%2B&X-Amz-Signature=b9aa650b31692eeeaeaed993d998bfc29745c31590a1b9052d024b69131a25da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y7W6KHL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfvNJQUhxWL2Dlh%2BSkY46UFRBUvkwqD8ibg0UicWOvWQIhALHN1wwVRqWMv%2Fnqe%2Byz3CD6BZ6MdT73bjwlTprS2UY3KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmIher%2Bx2dxF0gUo4q3AOHSm6yU7VuhB2KRHf9%2BiwTvBSFjv7eN0mVBDaBABVMTy8T2PCZxAJ952PyMoBiz2tNTRE5umwrjU6%2FqMXMVpHwWVIYHs8KzCYqpTb3cSvPLKbci%2FE44j2vTS7jMwEcSfFXl21t%2FdjJ2q2H3l6JAW5mfwuw3%2BEewAvp26ovkFks%2BJjoJaCSsT5kFaENLyyABKmI4Jl2UcCn8U0esVlbTwaJqPviJhUPX4e983Bpzg3YoW41ZNcebP9ffd46HPZFQPSzPprcedTGWwL1REtXeUPtzBFtqJqfvH5Apdp9tprjO0YohPUpeG%2BC8Pq9s5PY2Tryv0fRRp1cm%2BEoDyUc%2BiRYN71J%2Febu67kcyu%2Fr78kv8yVLIpqyGTTxG1fZZWTvafG7RLU2QVJoWal4oBp3T29jZhw64oqs9HkujIJ6sQJ7nKmg11ozGJcTbbpLOiLQ7TDM7oT5KMdOO%2BEPQ2DpH%2FhdOHzNMw4oqfUOL4Hh4lwmw9fSUq3D4kjY1PGOgJC%2F8j1ma3fpiwswKfXEAquIGaLX61qzWa8cvKIZSECbKK7dUno9B49Ccj3fUfK1T4hjhjTVMit6gO1F1mKRIwKqt6ARi1wXDv7AD72CABfsZYPm5szKc0nunO215M8yiDDf7dnJBjqkATT%2BVqbnMSM6IRm54%2FXC8bAgTJHfe4FgKK%2FxQSDCzlKkqG4cZ6iv1JluVdd%2F%2FZ%2F3Q1gMcZAWwUl3VTsm67vYK0E%2FcECMfHk%2BKpm%2FBE66i9oVPJ3gh0%2FA%2FfkuEgjc2Rvcm37dBgnOa5%2FHaB9%2B0abPJ1D5XlLsILeH6ghGz5%2FlL1L922hIVBCUYhpYGaQCxoVJwKBUcRH0AKzDYJRI%2Bj1j8MjLE1V%2B&X-Amz-Signature=0822c2574351e6cea32bfe219e52927560de7154aa8e9e9db52332d847bac568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
