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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F7RO6P4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqO0q%2BrPtRK95ECy8iZFyoU8rzSoEs1D%2BrYNvzRPIioQIhAMoGV%2Fakgnj0aorPz0rr%2FRyH7cmSGmITNE8HBsnwjnVFKv8DCFUQABoMNjM3NDIzMTgzODA1Igw5%2FWzD6m6oEBFZ2WUq3AN6iIOHjW2iW1hSNE8tYeR6rcGyxtCoDYCPFs%2BYGlxYNOnBiLrJkAJEEpyQNlfuV8HmHqIVTbBGABniaQuEoKNFL63X9hW6O%2Fa4xvag16hdpA4IB0qOZy4HVeXuDDPMERqc7vTafP1l4CPFuJ10Mw8REPpwzA6P0%2BLVhwC66Gi1FLaFfjcyOOgSm5sJba7966PkrnHrg4iAFYO%2FEWLn0J4czDi0FavAwlMyJldhtCZxraO%2FXZd9hEa0RSQ4Cu2c5vWP4W%2FMeXSoQoDO2noB8iOZTibe9tq2K4mEU2UMwFDU7tzTcsB9s9F4JcvtvStu5kWQfyC90L%2Bz7n1jHvLLs%2FSIR%2FbJ2TaO1UHLh9n5jCvP75OGb%2BUiqjddh0atL4nDRyv6neI8rMUU8AWB3WM%2FEx4lr9L5PEWdnFsuekxCCPISfvZdxKM0KEHe4Mp46FwNWIX9%2BH%2BCzG9E2W7bQ2Y9EOejDbsjUSlpsafLMbZZcedduY6tEwcTsypc7E6bvZTnFh8mq9Qeur4PRFSjWWbgj60UYlim4LamJEnPYGbyVGwbOoyFoBGrffOQfhcbbHiWlt110BaToqD40xN7Y6ahlTumvXSazMACYL5ptD12T6I9%2Bvxu4ZhCjDEpXmzDtTDYrMnJBjqkAQqZFoftf%2BgvYZnN9wTHsZJ1fvG%2BIcm5Bs%2BKXuOGHbcfqgyGnSvGhBp72qTgU6DdVizB%2F8g3wgaehx93w3N9o7%2Bcv9EeNwMmnkBf9OGFnuQr2ywU25vpmQdMilowO4%2BBW9iCWf2vD4lrnLvswhVOJDI3uCByGBq96rcW3mPol1mwTNMgiIRdFdkbEyBVAsuz%2B6fszVsiiJtG%2FDQw2%2BUnQiyiyTgI&X-Amz-Signature=f57f15f7b7f4db5b0d874457d52b5e1e14588c50ed0376dbf713e4962bc78647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F7RO6P4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqO0q%2BrPtRK95ECy8iZFyoU8rzSoEs1D%2BrYNvzRPIioQIhAMoGV%2Fakgnj0aorPz0rr%2FRyH7cmSGmITNE8HBsnwjnVFKv8DCFUQABoMNjM3NDIzMTgzODA1Igw5%2FWzD6m6oEBFZ2WUq3AN6iIOHjW2iW1hSNE8tYeR6rcGyxtCoDYCPFs%2BYGlxYNOnBiLrJkAJEEpyQNlfuV8HmHqIVTbBGABniaQuEoKNFL63X9hW6O%2Fa4xvag16hdpA4IB0qOZy4HVeXuDDPMERqc7vTafP1l4CPFuJ10Mw8REPpwzA6P0%2BLVhwC66Gi1FLaFfjcyOOgSm5sJba7966PkrnHrg4iAFYO%2FEWLn0J4czDi0FavAwlMyJldhtCZxraO%2FXZd9hEa0RSQ4Cu2c5vWP4W%2FMeXSoQoDO2noB8iOZTibe9tq2K4mEU2UMwFDU7tzTcsB9s9F4JcvtvStu5kWQfyC90L%2Bz7n1jHvLLs%2FSIR%2FbJ2TaO1UHLh9n5jCvP75OGb%2BUiqjddh0atL4nDRyv6neI8rMUU8AWB3WM%2FEx4lr9L5PEWdnFsuekxCCPISfvZdxKM0KEHe4Mp46FwNWIX9%2BH%2BCzG9E2W7bQ2Y9EOejDbsjUSlpsafLMbZZcedduY6tEwcTsypc7E6bvZTnFh8mq9Qeur4PRFSjWWbgj60UYlim4LamJEnPYGbyVGwbOoyFoBGrffOQfhcbbHiWlt110BaToqD40xN7Y6ahlTumvXSazMACYL5ptD12T6I9%2Bvxu4ZhCjDEpXmzDtTDYrMnJBjqkAQqZFoftf%2BgvYZnN9wTHsZJ1fvG%2BIcm5Bs%2BKXuOGHbcfqgyGnSvGhBp72qTgU6DdVizB%2F8g3wgaehx93w3N9o7%2Bcv9EeNwMmnkBf9OGFnuQr2ywU25vpmQdMilowO4%2BBW9iCWf2vD4lrnLvswhVOJDI3uCByGBq96rcW3mPol1mwTNMgiIRdFdkbEyBVAsuz%2B6fszVsiiJtG%2FDQw2%2BUnQiyiyTgI&X-Amz-Signature=7d0588076a86c9d3285508d87ba0157e18b8df6cc8fe8e2a9168fa8817c050eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
