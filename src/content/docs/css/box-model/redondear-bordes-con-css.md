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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4O5UMLJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjAfiZ6jQ9kE8kSRQOHEnU5Qc2x%2B%2BUqzbjtk4scgqvlgIgUOZFLSmXlgzI33Lpaod841mohES%2Bl%2BtYUmRwzIsYNvsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB%2F1bKs2wob4bmOzzircA%2F44kXJAGWgeacMhM1OcH9OlRoogdONkwY%2BhdnlNaJs4xdR6sBERCfCw1qfaV61wHy1F7l6Eq%2FCPCbrjaZtegpOIq8046trbMnGjux6n%2BkQjON1uu%2FQO4BH7tDo3UyplG2XV%2BO0ccyV21P8JIILWUXiZB%2Bl7czM1sPlv3yvKUY%2Fjpp87pU8UnmDT9wX9hihpaX4%2BbgSpzbD6y7rlRngBoZyWusXJHNGMaCa2kRXw2z8J75%2BhFvxXueFytkjEoXcyYGrg%2Flya8WDMaqh5yewtcbsPEiGjoi8d3C7oafV3D9haoKljfEj93fx0Q3dydvY5zO57Evn3caqtyCa5GqEkL8ED6Dd6LQUfxXpvkjrtbO6w3f6bHarhABDGCz%2FUUUfz55uUjZLVcwCsx6KyWG5yVc44oxVxNOxYBfOQ%2BQn8nR0ya8uHa6YRw7qkFBx17uy9ogS64snUQ%2FIJ5xPOCA8hzudXM7Ri8iLSifC1uark%2FLZ7aVgP0fU4gf2FSk9pczIUlxJe6TroFO%2BhPCJgs19yiDUb8Eofb0bfi2VXgEkiKXafietNCt7BdnEvFTmEwSj3af%2BeNscajLV5rORiBUyMpBexF%2BK6PCAb52wEf35AT5UxMM8If%2FcnkLwj21VjMNLeh8oGOqUBOMWmRhc9LYbuswq6WbaIXMus0LxgULY4tuEkXbyQrHyXTaZsi7dzLalKcqqjU53hQP49lbm0mVMAFRHj00DS8Dy1SZ%2FcaAasntnYE%2FanyWauq2gmv0XsFXfPkEiRw6ioIAUyge6z3mC7z3YVAKdx%2FaVaJ3ct81GeJeeJc%2F%2F%2FKVpgzdiIMaq1c7NwmJAqmGItxHSj3xfZN1ME2044cB57b5EgOW3v&X-Amz-Signature=e63d688cbf0f2b4be89a2c9ac7e3eca66ce1c0f84a212db08b56aa31c42b1784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4O5UMLJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjAfiZ6jQ9kE8kSRQOHEnU5Qc2x%2B%2BUqzbjtk4scgqvlgIgUOZFLSmXlgzI33Lpaod841mohES%2Bl%2BtYUmRwzIsYNvsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB%2F1bKs2wob4bmOzzircA%2F44kXJAGWgeacMhM1OcH9OlRoogdONkwY%2BhdnlNaJs4xdR6sBERCfCw1qfaV61wHy1F7l6Eq%2FCPCbrjaZtegpOIq8046trbMnGjux6n%2BkQjON1uu%2FQO4BH7tDo3UyplG2XV%2BO0ccyV21P8JIILWUXiZB%2Bl7czM1sPlv3yvKUY%2Fjpp87pU8UnmDT9wX9hihpaX4%2BbgSpzbD6y7rlRngBoZyWusXJHNGMaCa2kRXw2z8J75%2BhFvxXueFytkjEoXcyYGrg%2Flya8WDMaqh5yewtcbsPEiGjoi8d3C7oafV3D9haoKljfEj93fx0Q3dydvY5zO57Evn3caqtyCa5GqEkL8ED6Dd6LQUfxXpvkjrtbO6w3f6bHarhABDGCz%2FUUUfz55uUjZLVcwCsx6KyWG5yVc44oxVxNOxYBfOQ%2BQn8nR0ya8uHa6YRw7qkFBx17uy9ogS64snUQ%2FIJ5xPOCA8hzudXM7Ri8iLSifC1uark%2FLZ7aVgP0fU4gf2FSk9pczIUlxJe6TroFO%2BhPCJgs19yiDUb8Eofb0bfi2VXgEkiKXafietNCt7BdnEvFTmEwSj3af%2BeNscajLV5rORiBUyMpBexF%2BK6PCAb52wEf35AT5UxMM8If%2FcnkLwj21VjMNLeh8oGOqUBOMWmRhc9LYbuswq6WbaIXMus0LxgULY4tuEkXbyQrHyXTaZsi7dzLalKcqqjU53hQP49lbm0mVMAFRHj00DS8Dy1SZ%2FcaAasntnYE%2FanyWauq2gmv0XsFXfPkEiRw6ioIAUyge6z3mC7z3YVAKdx%2FaVaJ3ct81GeJeeJc%2F%2F%2FKVpgzdiIMaq1c7NwmJAqmGItxHSj3xfZN1ME2044cB57b5EgOW3v&X-Amz-Signature=ef67796bfcd8e05012e601e8abc9cc97a5e0261b58a8e3f7582799ba9c453169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
