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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAHVTTGU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlJbOxHzxvpRBZx3QyLKf7B3CsOx1lnD%2FRfYy2cFebggIgB2%2FPtx2dAzACcRupjg7xuFtkKI%2F5pPAqlw1XzTBHqK4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOefSyJyzNivCf0nPCrcA3eex97YEOCtyqMxvjqSwJhehylaXdrGY7GRajVrdo0NB7oirQjgSWKSmpiF%2F2UwRdY3WQIy7pk%2BlWEtHsm8bv37oRa%2BHO4yEYFFw68pySFwHEMCvkmYuf3koreNVS5%2FreuGAMYMUMWmaqMa1vP8Hjbu9oJiQxaLBtvW2XkO4nAifx6YY1UaJm%2BeDHiQhbaoKbVCV3pmOuoe9yusEzlQIGcYOti63M7ZHfG66%2FZ%2BaHSou6XO%2BOi1Tbv8hr1CIpyn%2B1Mk1IYi684UQGZG0jb8BdCim4UXFWyOd%2B3Nhumt0WisSF9JMsy01mruRc0q%2Bnb6gBUqvt0mcjumWn%2B0NJPmE5VdUnpYCq0ztSK%2FLKUfeMECj9vFoptnBaFCWmtOgeMgdECRUdosRT7DCqIinVEoxD%2Be7ekJc4KrsXyDC71oqmMtfWEUUm2XW42oerefVs8mtJu8ipj%2FIO7yayh62Zr7K0QfiugRJGjMJAdRDoJfr4X%2BsqYkXEZpSrrnpaj5xE3NAw85Y%2FHuJuwbv0W%2B2jFA7nNaebejITcK37VQr3s4JdWMy8qvAG2GSnigGq2knPTkc5NQQMF%2BczUjGpE83sb6K3cR2cLTEW2krnNxk1jyE0nQfAJZQp0tasGZuZ7jMN7H0ckGOqUBcxUETaNUEILsrP6vSA4Ugt5pBHOGJ29ZVg8tPlOpITm6ut9HTFFpsemG%2FxK1sP%2BQHlrJ%2B7BZkk9xO1B6WRSyD9aSLIZwJ8aL%2B6SH4u%2BYT5gxnIHQIc4bFY28P6F2Q0XNhSDARdL4oAukP5lXRlUMW6zR9ifWvL2IaYuqBUpY5loTkyLNw9EeP37k6UD2Kh5%2FWwAxNYgdKqqL%2B15d2OHxQ%2FbpSKag&X-Amz-Signature=51a24173bfddbce1e6aafd7faefae1cf48903317a24accdfc7168405d8ea2cc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAHVTTGU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlJbOxHzxvpRBZx3QyLKf7B3CsOx1lnD%2FRfYy2cFebggIgB2%2FPtx2dAzACcRupjg7xuFtkKI%2F5pPAqlw1XzTBHqK4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOefSyJyzNivCf0nPCrcA3eex97YEOCtyqMxvjqSwJhehylaXdrGY7GRajVrdo0NB7oirQjgSWKSmpiF%2F2UwRdY3WQIy7pk%2BlWEtHsm8bv37oRa%2BHO4yEYFFw68pySFwHEMCvkmYuf3koreNVS5%2FreuGAMYMUMWmaqMa1vP8Hjbu9oJiQxaLBtvW2XkO4nAifx6YY1UaJm%2BeDHiQhbaoKbVCV3pmOuoe9yusEzlQIGcYOti63M7ZHfG66%2FZ%2BaHSou6XO%2BOi1Tbv8hr1CIpyn%2B1Mk1IYi684UQGZG0jb8BdCim4UXFWyOd%2B3Nhumt0WisSF9JMsy01mruRc0q%2Bnb6gBUqvt0mcjumWn%2B0NJPmE5VdUnpYCq0ztSK%2FLKUfeMECj9vFoptnBaFCWmtOgeMgdECRUdosRT7DCqIinVEoxD%2Be7ekJc4KrsXyDC71oqmMtfWEUUm2XW42oerefVs8mtJu8ipj%2FIO7yayh62Zr7K0QfiugRJGjMJAdRDoJfr4X%2BsqYkXEZpSrrnpaj5xE3NAw85Y%2FHuJuwbv0W%2B2jFA7nNaebejITcK37VQr3s4JdWMy8qvAG2GSnigGq2knPTkc5NQQMF%2BczUjGpE83sb6K3cR2cLTEW2krnNxk1jyE0nQfAJZQp0tasGZuZ7jMN7H0ckGOqUBcxUETaNUEILsrP6vSA4Ugt5pBHOGJ29ZVg8tPlOpITm6ut9HTFFpsemG%2FxK1sP%2BQHlrJ%2B7BZkk9xO1B6WRSyD9aSLIZwJ8aL%2B6SH4u%2BYT5gxnIHQIc4bFY28P6F2Q0XNhSDARdL4oAukP5lXRlUMW6zR9ifWvL2IaYuqBUpY5loTkyLNw9EeP37k6UD2Kh5%2FWwAxNYgdKqqL%2B15d2OHxQ%2FbpSKag&X-Amz-Signature=90aaa65eaab97170c58124a9dabcd8b6c89b012f702c684b6b953cea6b2b9cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
