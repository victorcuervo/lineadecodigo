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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6T2NGTY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8GMmfKA2IGJpHPuZ4lAc1RvHRp18zbCtxKj36iINpaAiEAx0L9GDsLfCeg5%2FicAC%2Bt%2FvGN9YEYg1WvynGUtYxsY2sq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBwub6JK4ATVh9lOxSrcA0AY6jZpwzHvrmzYYuhJpJ6%2B25dF5af1m8tiEgRWq8Y2tfT5zZY6InGQ%2FP5FmtnUrVzZAGXgGLL%2FsBwXMfTWS5zkVW25fXfisOsWrEGUf%2FwElhRvSiJB8l3kqPgj8wwQsS2IQoEsen1RueBC74daz5oa5VAMbU5ccK3w13E3Y43yc55saiJJ8X4hiEKg%2FgW5H1qNFHc0kFsnz8t2f3CTJxaDlOvm9UETFFuSfjM9kVH10NquTN8FavurqBwqkpa0CrPzGwGXEqGfhNLo4EKMe%2FnDisKlQltoP%2Fk5Rhw2xqXWd8H7hlsFia27UfovBk%2FEhcLJMrhVrCvIcBG5XDT%2Fxf8P%2FYGEI7cOw91k2ilbVHzXWD7MD7yFm8V6LyMoBi4Cs0Oj3Fz8aSeWBElVbwphsNeL6qegQMvT4sKmDBWkYHZBhgW1Tp4bQIRWiu%2BX6ljDVQ7c%2BpNl3eagQZRQ1hhDUjHr3aLC6NfE49d1i5VL%2FnHWTtK9l7SrHMdcBosrdZ9VJpY658YPvThYpDOosGuThzXe2pquTTha6SmLIViTcnkNym2beka0SKUjGA8%2FwUB5qB%2F%2BoWZ4bJQUx%2FvY5F8OCiR7SqrFwnFJDgruNlKWuzTA920Y%2B4qXEjggb5imMKiPisoGOqUBo8Lsi%2FudeFxspcZO0pbgkrM4A93Bn7UVChk%2BUbXvTm2g6x7crioZ4Jt7hgymaAquxb%2B8G1KaEOdtZqXAFBIQljdTCcNufWhfqfylxYpHbnnd6M%2BhuEMqD9GL32VbPlXuAaZ2AE5uEhEqMvPC5SzYjfLHKuN9wLxRgdj4VVZSAdoUXLIMevv7%2FXXAXiO3NQFIWlh3TiFo%2F%2BOe88lARtxSADYQLj3a&X-Amz-Signature=2597086a53fa2217286b66056e145276c2aee439d01a39dce91837e472dd62cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6T2NGTY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8GMmfKA2IGJpHPuZ4lAc1RvHRp18zbCtxKj36iINpaAiEAx0L9GDsLfCeg5%2FicAC%2Bt%2FvGN9YEYg1WvynGUtYxsY2sq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBwub6JK4ATVh9lOxSrcA0AY6jZpwzHvrmzYYuhJpJ6%2B25dF5af1m8tiEgRWq8Y2tfT5zZY6InGQ%2FP5FmtnUrVzZAGXgGLL%2FsBwXMfTWS5zkVW25fXfisOsWrEGUf%2FwElhRvSiJB8l3kqPgj8wwQsS2IQoEsen1RueBC74daz5oa5VAMbU5ccK3w13E3Y43yc55saiJJ8X4hiEKg%2FgW5H1qNFHc0kFsnz8t2f3CTJxaDlOvm9UETFFuSfjM9kVH10NquTN8FavurqBwqkpa0CrPzGwGXEqGfhNLo4EKMe%2FnDisKlQltoP%2Fk5Rhw2xqXWd8H7hlsFia27UfovBk%2FEhcLJMrhVrCvIcBG5XDT%2Fxf8P%2FYGEI7cOw91k2ilbVHzXWD7MD7yFm8V6LyMoBi4Cs0Oj3Fz8aSeWBElVbwphsNeL6qegQMvT4sKmDBWkYHZBhgW1Tp4bQIRWiu%2BX6ljDVQ7c%2BpNl3eagQZRQ1hhDUjHr3aLC6NfE49d1i5VL%2FnHWTtK9l7SrHMdcBosrdZ9VJpY658YPvThYpDOosGuThzXe2pquTTha6SmLIViTcnkNym2beka0SKUjGA8%2FwUB5qB%2F%2BoWZ4bJQUx%2FvY5F8OCiR7SqrFwnFJDgruNlKWuzTA920Y%2B4qXEjggb5imMKiPisoGOqUBo8Lsi%2FudeFxspcZO0pbgkrM4A93Bn7UVChk%2BUbXvTm2g6x7crioZ4Jt7hgymaAquxb%2B8G1KaEOdtZqXAFBIQljdTCcNufWhfqfylxYpHbnnd6M%2BhuEMqD9GL32VbPlXuAaZ2AE5uEhEqMvPC5SzYjfLHKuN9wLxRgdj4VVZSAdoUXLIMevv7%2FXXAXiO3NQFIWlh3TiFo%2F%2BOe88lARtxSADYQLj3a&X-Amz-Signature=13910a2397c1694e0da4e5ba00aafeb095c6d086e62d71a6560b49edfcf9de4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
