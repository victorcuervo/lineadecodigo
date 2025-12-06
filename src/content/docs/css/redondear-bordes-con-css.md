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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3CPWVMT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqER7l5p03AothdR%2BOJ66yVju0ZqsCkOssZOqXmrgbBQIhAJNDDMEgED%2FA0%2BfpHj3sDHocSYKL9SpBmE3haNUSmrhSKv8DCG8QABoMNjM3NDIzMTgzODA1Igzd4MnYLg%2BhJ9S8rJ8q3APLC%2BX1shLF%2BuVq9DSm%2FASZBWMm9RuDpje8cdMYQKFD%2Bdds3zOmUD%2FIHBv3E3vEHL8Hgi%2B%2BcM7%2B4Er5AAouUTnmBJxnv586FEirpddgTRm0BHIi7HdScusNBs4zanc0gh%2B5NM9dddiO9rttdxGcKeQaOAhshJjZrg51bRIYkz1acRlIxS%2BpJdBctbVrgzEB8NG%2FxXAxmiAEzoCMSnUVrmUFNG4C9MKn7cFk9wUxWRSzwiGYr9oKkLCQzTeBHcnB3SiB5MQ5JDt5vSm%2Fd3i%2B6%2FPGl9%2BEixp%2Blj9axyZxbvJw8g4vTAEd1XNSbuv6Vdm%2FFZL%2Bb2ND7aTdHvGOHu%2FXo%2FcRgd6dNnut0lGLSu3vjj0PB61Yckmxj1R4HchAEstv9PFF0paSVCW2yNcKnSVxImpoo5iANm6oKTYxcSKR0mKn0vLGgVJ9I5lwS8gHMGobvxPzQ3iR%2B0DveuqJZTNpuDn%2BcbaIQvVnZwuPmyAJJ%2Fj3oyChnOuOgVi2ti5yPNgLpaOMq4I%2BFS0RxomMu%2BD%2BQ2jr0ARv9ESgKNNjR9xi98o8dJh%2FearYLr5aQ%2FzDOTOpKjvqcR2NX5zntp37aDGwvLa7CMWNVo4Fkv27GaYGmdND0q4P6GuZdb1tP%2BHoXzCV%2Fc7JBjqkAbQUU38hsN9fL%2FQEb3TbzTIT%2BxOD1WxXEj0G3bhhYSG2sLIugC0Qwth0jazF3wI9zbcCDPFpnNGhR6LQhzl06FggcRti74yI44gqFZc5H3lYYZff%2FEbiQswzHZHKxBPVroUhKi4d%2FDaflg0lpLTAIi%2Bf7hPPinBINMxfXqISn1GMfhyW3d4JcomHEl649PzNCVW12f4I%2FGExCQO%2Fdzmxi3pMHr%2BT&X-Amz-Signature=aa2178d83528a4941fdbbd8536f901bda19d17fad0b33180107df8d1cc76e01c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3CPWVMT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqER7l5p03AothdR%2BOJ66yVju0ZqsCkOssZOqXmrgbBQIhAJNDDMEgED%2FA0%2BfpHj3sDHocSYKL9SpBmE3haNUSmrhSKv8DCG8QABoMNjM3NDIzMTgzODA1Igzd4MnYLg%2BhJ9S8rJ8q3APLC%2BX1shLF%2BuVq9DSm%2FASZBWMm9RuDpje8cdMYQKFD%2Bdds3zOmUD%2FIHBv3E3vEHL8Hgi%2B%2BcM7%2B4Er5AAouUTnmBJxnv586FEirpddgTRm0BHIi7HdScusNBs4zanc0gh%2B5NM9dddiO9rttdxGcKeQaOAhshJjZrg51bRIYkz1acRlIxS%2BpJdBctbVrgzEB8NG%2FxXAxmiAEzoCMSnUVrmUFNG4C9MKn7cFk9wUxWRSzwiGYr9oKkLCQzTeBHcnB3SiB5MQ5JDt5vSm%2Fd3i%2B6%2FPGl9%2BEixp%2Blj9axyZxbvJw8g4vTAEd1XNSbuv6Vdm%2FFZL%2Bb2ND7aTdHvGOHu%2FXo%2FcRgd6dNnut0lGLSu3vjj0PB61Yckmxj1R4HchAEstv9PFF0paSVCW2yNcKnSVxImpoo5iANm6oKTYxcSKR0mKn0vLGgVJ9I5lwS8gHMGobvxPzQ3iR%2B0DveuqJZTNpuDn%2BcbaIQvVnZwuPmyAJJ%2Fj3oyChnOuOgVi2ti5yPNgLpaOMq4I%2BFS0RxomMu%2BD%2BQ2jr0ARv9ESgKNNjR9xi98o8dJh%2FearYLr5aQ%2FzDOTOpKjvqcR2NX5zntp37aDGwvLa7CMWNVo4Fkv27GaYGmdND0q4P6GuZdb1tP%2BHoXzCV%2Fc7JBjqkAbQUU38hsN9fL%2FQEb3TbzTIT%2BxOD1WxXEj0G3bhhYSG2sLIugC0Qwth0jazF3wI9zbcCDPFpnNGhR6LQhzl06FggcRti74yI44gqFZc5H3lYYZff%2FEbiQswzHZHKxBPVroUhKi4d%2FDaflg0lpLTAIi%2Bf7hPPinBINMxfXqISn1GMfhyW3d4JcomHEl649PzNCVW12f4I%2FGExCQO%2Fdzmxi3pMHr%2BT&X-Amz-Signature=222d9e30ba040af290a2d86ac50c024472b3a51eab06848952152f67bda95034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
