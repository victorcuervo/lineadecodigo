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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUY2YM6G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpCLDZ5J0K8NwZeZh8qDPxnezmK4m4Nl66T%2BSudj5kZwIhAN9pk6G01xGM1EEC%2FMf1H9zlA4ENBBGSdaXzRwQRLqV8Kv8DCHUQABoMNjM3NDIzMTgzODA1IgyORktMEZTrJ5ft%2BBIq3ANKLfYJ5k8Ww0ebSV9aM2laMdNnQVESb9NyhTaDbH1WsnmhSmAlfCNxzg6q7mprZHTkn7bhaWWcl8nYxJhnvgm0YcrMm4rGgTOWdhuXvjLtAlQiNdO%2FsgEp9I5iV%2BLG3M2BbRT5EyTce13PE8I1MN1NW1AEhiaprDXP%2BR5FvMmyaUoRvmXpzrvkHUJiHyFzb2nsBWevinuwhxB47dKQPgGEUZVBRGBx9Jdc720NtPRS2qrUXB%2FRMPU%2BOtDnB13vICjnR2Y2z9jmX6PnAc0cPWtXsIQ0%2BRpoB9dgbDHUpOSXejXQveM4XBRs%2BQlg7ey9%2BORMGp4bSli46t42SfJ6CqzQ1JoJb6%2BszlEaNeK8z7SxLjMaBn4%2BdI5SXJr9d7sEsJzQ0J83xE%2BWVrstysvEyT4Lqrj7WqmP0kzEkvcFcy3kY4fDqWqLI%2FDJ%2B%2B0Evt6ljfvqo0n8hOQVuyIAdacvngStw%2Ba1yeeZqedO1Qad%2B5TmCHWxYdZ33wOHYMelOASTz9%2Brfys9bxqnOgJqlDHKQBpNHWcRzt0nVMvry2%2FvnPSB%2FHUjwd16Au5ufkPZ794cRt79hZduK%2BN0cBLHtJo1kr2yIQrkbwvHEW8XvFKf5eXnoHaofJ00pBuQwsnOOTDOptDJBjqkAavlIj%2FbHOAnr4m1Yfe53cfKJAJAqXBhjKgLcOXxvL1ds27SKO1EMJ0NBCxlgu0XVdq%2BzTsJtMcmn7%2BMGtHIunH6mcM66ulGz1VXSR4X1a1BvOlMwiLXB5628dibNOzxhUBDj3oBWaDca5Y7LxqIR1P2iK%2FvPh2dAzQnuKY%2F52XNKLqgPmT%2FubhmONzjQVn0Jb%2Fk9zXfn7RsM5SbPsy5qNrArTiZ&X-Amz-Signature=833cfca64d0819394c3155a23e71abf5a226a32023615cae85e4bb6951dc2f6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUY2YM6G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpCLDZ5J0K8NwZeZh8qDPxnezmK4m4Nl66T%2BSudj5kZwIhAN9pk6G01xGM1EEC%2FMf1H9zlA4ENBBGSdaXzRwQRLqV8Kv8DCHUQABoMNjM3NDIzMTgzODA1IgyORktMEZTrJ5ft%2BBIq3ANKLfYJ5k8Ww0ebSV9aM2laMdNnQVESb9NyhTaDbH1WsnmhSmAlfCNxzg6q7mprZHTkn7bhaWWcl8nYxJhnvgm0YcrMm4rGgTOWdhuXvjLtAlQiNdO%2FsgEp9I5iV%2BLG3M2BbRT5EyTce13PE8I1MN1NW1AEhiaprDXP%2BR5FvMmyaUoRvmXpzrvkHUJiHyFzb2nsBWevinuwhxB47dKQPgGEUZVBRGBx9Jdc720NtPRS2qrUXB%2FRMPU%2BOtDnB13vICjnR2Y2z9jmX6PnAc0cPWtXsIQ0%2BRpoB9dgbDHUpOSXejXQveM4XBRs%2BQlg7ey9%2BORMGp4bSli46t42SfJ6CqzQ1JoJb6%2BszlEaNeK8z7SxLjMaBn4%2BdI5SXJr9d7sEsJzQ0J83xE%2BWVrstysvEyT4Lqrj7WqmP0kzEkvcFcy3kY4fDqWqLI%2FDJ%2B%2B0Evt6ljfvqo0n8hOQVuyIAdacvngStw%2Ba1yeeZqedO1Qad%2B5TmCHWxYdZ33wOHYMelOASTz9%2Brfys9bxqnOgJqlDHKQBpNHWcRzt0nVMvry2%2FvnPSB%2FHUjwd16Au5ufkPZ794cRt79hZduK%2BN0cBLHtJo1kr2yIQrkbwvHEW8XvFKf5eXnoHaofJ00pBuQwsnOOTDOptDJBjqkAavlIj%2FbHOAnr4m1Yfe53cfKJAJAqXBhjKgLcOXxvL1ds27SKO1EMJ0NBCxlgu0XVdq%2BzTsJtMcmn7%2BMGtHIunH6mcM66ulGz1VXSR4X1a1BvOlMwiLXB5628dibNOzxhUBDj3oBWaDca5Y7LxqIR1P2iK%2FvPh2dAzQnuKY%2F52XNKLqgPmT%2FubhmONzjQVn0Jb%2Fk9zXfn7RsM5SbPsy5qNrArTiZ&X-Amz-Signature=13dd44a85831679c6daa1dea8e67aa012cff0422f7e29d27437c260c78a36ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
