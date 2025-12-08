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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6P7WFFM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEr2y3r4v19F3Um9tO%2BQ%2FbGbNB61xLfez3kPfupdlZYsAiEA3JDAZJKTJaAMHB1WVO7dASyJ9GFe0UMoCa0jWXrcpREqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYvoi6m6yytQeOVdCrcAyCIUzrPyShuHHdViMpd0nx7mvZs%2Fshrc3Q3hyERdRz%2FzzeTKY%2F2BOIuoLZ8coYYx7UuoJziBs3yMxaEcp7rjsjriuLDV2NHvN2CKH4hcCo2n2RNzf10pWqxteClqHZo6MPgvfGAREuNVj%2F1T3slGA%2BSkqT0D8RsvcIwAzTAmfl6Ue31V%2Fjz%2BDhscIJURHV1nXqCgMaxeSqpTWsAlW0uKGi1p1aVNJajFqBGJGshsn7B7GBPGmpEetwTamNAhMv%2FXi2Rs%2FXN%2FNSW8rgOB0lSgPsLAcq4ZES7ypQUGBGZD71QMW9yMSlTrPRsIQGL34f02GxDKn%2F0NRfj4gJF9w3RbozJaJBo1ITZ2FkVmt226nQTvj5LyxZifVWYITIfr%2FGSGc3ihedBGd4e2Re7XL4SYzar8WPJ6kMG20hE2QNEJOs7N44SkRqLxHoKUg4lC1TaQtinTN0LrjEpYE7NJQpNOVU3bB6Cx86Hhuskj4KVUoHXxsRjbhZrW1OUn8m3vQdMsg%2F22B2nlkV6Hy2v14hXxqgROcXhZxGqDCrPGVTa%2BVt5iJDZQuFCp5b%2FGFdKiqHenHDFKfamiQAiC2SM2b2k5Wdl4xBUy6tlQQgoBtma0Q2P8ZaCVxWyvNESDPvVMNqP28kGOqUB%2F7tG%2B8bHOs%2B5Zz3SoZQo9xz9Lpw5%2FXpD4i%2BSQVblhoIbWg7YUqIOoI2QmWrcL9a%2B%2Fwgg1EWZcN1kWGrcryguh4WAKuyXNL0XFWfTHWU5zMEQ6PFLVVTlNgTY%2Bys1ipABLxuGFInr1iOcTcKOm763iywvsS1U97R6wb4sfe6fboy2c3aEQqnK5WtopY1xmLyDyRxF2VYqbmYuNFt8NGXAMuZrQBdP&X-Amz-Signature=f64c04c591cd42748fe5dbd4360e4abe1dc029d0ac8f13cbccbfd4ecbd08f830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6P7WFFM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEr2y3r4v19F3Um9tO%2BQ%2FbGbNB61xLfez3kPfupdlZYsAiEA3JDAZJKTJaAMHB1WVO7dASyJ9GFe0UMoCa0jWXrcpREqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYvoi6m6yytQeOVdCrcAyCIUzrPyShuHHdViMpd0nx7mvZs%2Fshrc3Q3hyERdRz%2FzzeTKY%2F2BOIuoLZ8coYYx7UuoJziBs3yMxaEcp7rjsjriuLDV2NHvN2CKH4hcCo2n2RNzf10pWqxteClqHZo6MPgvfGAREuNVj%2F1T3slGA%2BSkqT0D8RsvcIwAzTAmfl6Ue31V%2Fjz%2BDhscIJURHV1nXqCgMaxeSqpTWsAlW0uKGi1p1aVNJajFqBGJGshsn7B7GBPGmpEetwTamNAhMv%2FXi2Rs%2FXN%2FNSW8rgOB0lSgPsLAcq4ZES7ypQUGBGZD71QMW9yMSlTrPRsIQGL34f02GxDKn%2F0NRfj4gJF9w3RbozJaJBo1ITZ2FkVmt226nQTvj5LyxZifVWYITIfr%2FGSGc3ihedBGd4e2Re7XL4SYzar8WPJ6kMG20hE2QNEJOs7N44SkRqLxHoKUg4lC1TaQtinTN0LrjEpYE7NJQpNOVU3bB6Cx86Hhuskj4KVUoHXxsRjbhZrW1OUn8m3vQdMsg%2F22B2nlkV6Hy2v14hXxqgROcXhZxGqDCrPGVTa%2BVt5iJDZQuFCp5b%2FGFdKiqHenHDFKfamiQAiC2SM2b2k5Wdl4xBUy6tlQQgoBtma0Q2P8ZaCVxWyvNESDPvVMNqP28kGOqUB%2F7tG%2B8bHOs%2B5Zz3SoZQo9xz9Lpw5%2FXpD4i%2BSQVblhoIbWg7YUqIOoI2QmWrcL9a%2B%2Fwgg1EWZcN1kWGrcryguh4WAKuyXNL0XFWfTHWU5zMEQ6PFLVVTlNgTY%2Bys1ipABLxuGFInr1iOcTcKOm763iywvsS1U97R6wb4sfe6fboy2c3aEQqnK5WtopY1xmLyDyRxF2VYqbmYuNFt8NGXAMuZrQBdP&X-Amz-Signature=18384a0d7155de5b42b92925bd240fdba061b8bf1c73e2188a5235f751f23491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
