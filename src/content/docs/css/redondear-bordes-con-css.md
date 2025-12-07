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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYHVDI4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3mo70wiqZTNS5RENrjO17se3dHwyZ4PtpkNJeXJX3tQIhALS0Pu%2FuhZ848iBzQEK1sKWqMiwe9B1s%2BbXQ%2BX6vBCKkKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUVsOT0%2BrH5Yy%2BZ2wq3APCIs0gqvFYouciWCwXpZ83%2FCgWN%2B0geKDX%2Bzu3tWcWcrcjWA%2BWUWv5G41DGtLKO9hLugqpbwuZJYqfEC6o52%2FU%2B8H%2B7m7HO45hq2WzQnvglBxmAVp9afjk%2FeiVsRR95m1hiPjIVyKc%2FdnUXFP5vC%2FVxaZnwVWGNde1lS5PSi3SCrBIsjOl6URjq6C%2BMt19Dhy%2F388F%2F2Ah68iNroZ5v%2FFjGqm0dj%2BqjVRBz4ZXtaVa2jjhqNGqHx2d5x3OM578LhFvkMvaSZO8HLrTFm8f1LFf26%2BeedpXgJHbtStVlmZmjTRqjeUl3xHEPUoJhOehMZo2%2F577IlWQf2XO7FEKTyTc1b3K2FHFxPp%2BRypVwUYnC5YfkbbwyCllJFImscksUPmPGuu%2B6JHxnMOiSVayJo9H1kRKCanXVdUtVeRRzSiyrdufqkiVwq2pv0IKG%2FhA%2Bj4P2fARci0hjNDXYbHmn%2BYbYfUsBjH0qtAYqQFyaFUv1537%2BoGwSfI3pvf5vKCx7YqjA%2B1bVMydrJhvNyQBzntrSVY2Rgugfeg5TglH43r6jruvdsgmn%2BpbOORB3aMrSp93zEL3Rv70qvju66wEL%2FUiPE0dFym2qU1coy%2BY%2Bny1DKVOzo17ZTbTUTpBZjD%2F%2FdLJBjqkAc7BVC9AFp7FGWJvMhpbdSTCk2qZYy5zEWORgqh8IAQVgbU841LQJs9sQAeXtWLvd7Il32izquQZpC%2BH%2BYHHRI%2F21sTtXo4eX0%2FVXlG7PeoeGjI0KT%2FnU2NcGIiRE5%2FS5rgVFgfmLVd4200JDpU8dbx66w5WB%2BTkFf0CnOXKErq9CV%2BokRSjQYx%2F5YiU0lV1QlVH7Z%2FjLe8ZNBwAwQozYcL8seS3&X-Amz-Signature=3c3a87a2e1750790516379492fa6c6e4ce23a1824693884464a63d65197039b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYHVDI4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3mo70wiqZTNS5RENrjO17se3dHwyZ4PtpkNJeXJX3tQIhALS0Pu%2FuhZ848iBzQEK1sKWqMiwe9B1s%2BbXQ%2BX6vBCKkKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUVsOT0%2BrH5Yy%2BZ2wq3APCIs0gqvFYouciWCwXpZ83%2FCgWN%2B0geKDX%2Bzu3tWcWcrcjWA%2BWUWv5G41DGtLKO9hLugqpbwuZJYqfEC6o52%2FU%2B8H%2B7m7HO45hq2WzQnvglBxmAVp9afjk%2FeiVsRR95m1hiPjIVyKc%2FdnUXFP5vC%2FVxaZnwVWGNde1lS5PSi3SCrBIsjOl6URjq6C%2BMt19Dhy%2F388F%2F2Ah68iNroZ5v%2FFjGqm0dj%2BqjVRBz4ZXtaVa2jjhqNGqHx2d5x3OM578LhFvkMvaSZO8HLrTFm8f1LFf26%2BeedpXgJHbtStVlmZmjTRqjeUl3xHEPUoJhOehMZo2%2F577IlWQf2XO7FEKTyTc1b3K2FHFxPp%2BRypVwUYnC5YfkbbwyCllJFImscksUPmPGuu%2B6JHxnMOiSVayJo9H1kRKCanXVdUtVeRRzSiyrdufqkiVwq2pv0IKG%2FhA%2Bj4P2fARci0hjNDXYbHmn%2BYbYfUsBjH0qtAYqQFyaFUv1537%2BoGwSfI3pvf5vKCx7YqjA%2B1bVMydrJhvNyQBzntrSVY2Rgugfeg5TglH43r6jruvdsgmn%2BpbOORB3aMrSp93zEL3Rv70qvju66wEL%2FUiPE0dFym2qU1coy%2BY%2Bny1DKVOzo17ZTbTUTpBZjD%2F%2FdLJBjqkAc7BVC9AFp7FGWJvMhpbdSTCk2qZYy5zEWORgqh8IAQVgbU841LQJs9sQAeXtWLvd7Il32izquQZpC%2BH%2BYHHRI%2F21sTtXo4eX0%2FVXlG7PeoeGjI0KT%2FnU2NcGIiRE5%2FS5rgVFgfmLVd4200JDpU8dbx66w5WB%2BTkFf0CnOXKErq9CV%2BokRSjQYx%2F5YiU0lV1QlVH7Z%2FjLe8ZNBwAwQozYcL8seS3&X-Amz-Signature=4b1a4918a4ff7efc4c1c8a0f54783f5293bc4c904058e429c6adcd94d0b2b24d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
