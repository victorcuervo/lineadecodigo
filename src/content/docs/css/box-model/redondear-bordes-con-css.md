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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTK6POYJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWBuaB%2BrZYzcji22OsBvh3gmtOFWfE0heyk44uWC9%2B4AiEApAcNjvJyDVEjUP9wb4L07%2FkBE7DNF%2Bc8KSnFxhnqVRAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKANRkbJ7ovPHegCeyrcA7U6Ekwo4wPVcXzH3MZKrECXuABLfYK%2B9EW2yGJx4vFYqbPweDl27wF44lJwmVJJb4acJzdETrDgfcJeIbDi4NnEtwaDKOPDcAU3s5JMMtU69BrmPiWs3e5DAGoQ2tmlo38CTgWUKJRaXXxQAweagJt4jVDgI4UOlKI%2FYcbxs%2BokP7ynykUxe44McUJAAsy5i%2FntqFQlpYFaMYywneGc2cOCEOh2kjg60jqekPeV0avBOi%2BXU02sY6V8r9o0a1tFiItmqNPEPck95Tw0iVS4%2Ftje4isXjzpaXV94GfI4GjqOR8kp9a0TpWUHz2105ZUaPq3frI%2BqIvSr%2FH64qKUNYH1rnwN8sVcfLkZBJ3Bnryh%2BJaIwHfoP44bNsVkOw%2Fq3EBSBLdTC3s6eXtmEKAgco6yHVYfmrcRgBFmkQnhowKFKNzBxjGK2tk8TeJAKI22lL8FoLR1Fk7byXa8YrfIdrD1ROfAPuc%2BuPg5sYHZGAhGto%2B%2B1ZRnZJA6AwOWabPrrY90cqRC22TgT2yWIKhp9tl6nZVqsL3lQNZ6%2BCzLv%2FtZfeyPFsM4YH2Iiifz%2FQ2oGisnF8MOwMxq9zx5krN7wFc%2FP3cBJzeWOWa9N6po9t%2BiolXCCDlwJJesnNTBsMKmgi8oGOqUBep6I6VzKxPGR8aIZlXZvzMhEDKRsPgOAcdfyyYZVOH2ovQZqxoya925C682J0R%2BvcOpslu5snzonUo9aZqGGVJPVC0LVYJsxPdcBQyWk%2BGoQckJhszCWND%2BG59TNxWz4DefObXRumY6BZB56iPbZpE9909eJ3ggl7TWUOicovsJDXQcDwvU6rqZVjosc7zAnrPyuc0dTEiOcfGO1ixLoxgrVsuzS&X-Amz-Signature=70ed4fc39414050cde05dc4acb685cb314bf42c32ef2ab0fb3b0c22b9a647497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTK6POYJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWBuaB%2BrZYzcji22OsBvh3gmtOFWfE0heyk44uWC9%2B4AiEApAcNjvJyDVEjUP9wb4L07%2FkBE7DNF%2Bc8KSnFxhnqVRAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKANRkbJ7ovPHegCeyrcA7U6Ekwo4wPVcXzH3MZKrECXuABLfYK%2B9EW2yGJx4vFYqbPweDl27wF44lJwmVJJb4acJzdETrDgfcJeIbDi4NnEtwaDKOPDcAU3s5JMMtU69BrmPiWs3e5DAGoQ2tmlo38CTgWUKJRaXXxQAweagJt4jVDgI4UOlKI%2FYcbxs%2BokP7ynykUxe44McUJAAsy5i%2FntqFQlpYFaMYywneGc2cOCEOh2kjg60jqekPeV0avBOi%2BXU02sY6V8r9o0a1tFiItmqNPEPck95Tw0iVS4%2Ftje4isXjzpaXV94GfI4GjqOR8kp9a0TpWUHz2105ZUaPq3frI%2BqIvSr%2FH64qKUNYH1rnwN8sVcfLkZBJ3Bnryh%2BJaIwHfoP44bNsVkOw%2Fq3EBSBLdTC3s6eXtmEKAgco6yHVYfmrcRgBFmkQnhowKFKNzBxjGK2tk8TeJAKI22lL8FoLR1Fk7byXa8YrfIdrD1ROfAPuc%2BuPg5sYHZGAhGto%2B%2B1ZRnZJA6AwOWabPrrY90cqRC22TgT2yWIKhp9tl6nZVqsL3lQNZ6%2BCzLv%2FtZfeyPFsM4YH2Iiifz%2FQ2oGisnF8MOwMxq9zx5krN7wFc%2FP3cBJzeWOWa9N6po9t%2BiolXCCDlwJJesnNTBsMKmgi8oGOqUBep6I6VzKxPGR8aIZlXZvzMhEDKRsPgOAcdfyyYZVOH2ovQZqxoya925C682J0R%2BvcOpslu5snzonUo9aZqGGVJPVC0LVYJsxPdcBQyWk%2BGoQckJhszCWND%2BG59TNxWz4DefObXRumY6BZB56iPbZpE9909eJ3ggl7TWUOicovsJDXQcDwvU6rqZVjosc7zAnrPyuc0dTEiOcfGO1ixLoxgrVsuzS&X-Amz-Signature=07a1cb1732b4655f7b61df9e1a846e7ed2e2ce3fdc9512da115a91fc1f828626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
