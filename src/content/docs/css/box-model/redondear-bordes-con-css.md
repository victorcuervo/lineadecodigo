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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2RETAAY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjmbW7d64zJ7BH5zPAxeIZ9ODoQYciAHFXExCbW8NJYAiEA8QDf9dpSK98Qecnd3BBHyydrD23JrUBZ7l0UqyR5mF0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCcdkwwS3yZZQWmjeircA79E2xe9vKQO6b3nJHgem2O1KmTmcBJwlBtmnN1DTFurb2TXTJttEkrL4puxZKOqG%2F05Z38kPvR6tfsB3fzVURtO6yEONFCSqslP1YFQTaK3%2FkC1xLpe7xd%2FtPr8y16%2FdmXtMXdvnoKC72TbO5bIUB2EFAt49bujxGRtYfjBZ7OX%2B3lj6QYpuXLBDctV7StEL7isBmkFKeQQS7gyoomjqrUT5AvYZyArk89wqARe6EVX4wCk3tnGJXypRtMpIQn6qvYJWMC6%2FMRbLL%2FDEbUnnfRCsZFHl51ZD16Vaa4RFOS4JbesYQ%2BUxvIjdjZE%2Bh3HogG12xXsGb7AEc8ej3mFhSB6LRAw0E%2F5NLZKC9v7F%2BqsRwPkNTGFF6vDrbmkVU29ukNhiFAlllGPhTWQFqMvwIC7Esrc257h0hy7ME6t6ERjUqfYgEis4IM1wiG%2FJNH%2F3fW5KLY9u2oonucGSlPIaHFu0HbahGtcUI92lNrOPANe%2Fjyc9WkW9UNn5qmzh80ZEmZsn3JRO8M8cL%2F3C%2BaEYwy%2FirCubIxW3pow5kcNqt8UcW3vvlQa07yaKT4S6nJHZWSAZKOSHVZL4EqELbyq8bSQ3dh2FaotxHtE8eZpgCnm6pDhqgvYwZrZzvuLMIHxicoGOqUBQPiskVL2tiLFvFRSUdUM2LTWH7MS6lC4fJOm6Ezds7wvneH43jCSGTX8Jx6gX%2Fd1FLJmrxT9MMOTiBKS9VCUhoBriAC5bfzbFD%2B%2FKwn37be1IKwbjQg%2B6B7ShxDbxnsW%2FLo5sK6OsmixG8OrlT8mM1Xc84zDS3oU76t%2FDzVBB4HwFAAyHaY2aVAEWyOkeldFtJDqhO2LmNafnKc2pNmlUut7GbYF&X-Amz-Signature=0d840b2e5dd5294b8c02c9e563c59ca5f5a78e42d34d89c16482c98a763dfbb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2RETAAY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjmbW7d64zJ7BH5zPAxeIZ9ODoQYciAHFXExCbW8NJYAiEA8QDf9dpSK98Qecnd3BBHyydrD23JrUBZ7l0UqyR5mF0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCcdkwwS3yZZQWmjeircA79E2xe9vKQO6b3nJHgem2O1KmTmcBJwlBtmnN1DTFurb2TXTJttEkrL4puxZKOqG%2F05Z38kPvR6tfsB3fzVURtO6yEONFCSqslP1YFQTaK3%2FkC1xLpe7xd%2FtPr8y16%2FdmXtMXdvnoKC72TbO5bIUB2EFAt49bujxGRtYfjBZ7OX%2B3lj6QYpuXLBDctV7StEL7isBmkFKeQQS7gyoomjqrUT5AvYZyArk89wqARe6EVX4wCk3tnGJXypRtMpIQn6qvYJWMC6%2FMRbLL%2FDEbUnnfRCsZFHl51ZD16Vaa4RFOS4JbesYQ%2BUxvIjdjZE%2Bh3HogG12xXsGb7AEc8ej3mFhSB6LRAw0E%2F5NLZKC9v7F%2BqsRwPkNTGFF6vDrbmkVU29ukNhiFAlllGPhTWQFqMvwIC7Esrc257h0hy7ME6t6ERjUqfYgEis4IM1wiG%2FJNH%2F3fW5KLY9u2oonucGSlPIaHFu0HbahGtcUI92lNrOPANe%2Fjyc9WkW9UNn5qmzh80ZEmZsn3JRO8M8cL%2F3C%2BaEYwy%2FirCubIxW3pow5kcNqt8UcW3vvlQa07yaKT4S6nJHZWSAZKOSHVZL4EqELbyq8bSQ3dh2FaotxHtE8eZpgCnm6pDhqgvYwZrZzvuLMIHxicoGOqUBQPiskVL2tiLFvFRSUdUM2LTWH7MS6lC4fJOm6Ezds7wvneH43jCSGTX8Jx6gX%2Fd1FLJmrxT9MMOTiBKS9VCUhoBriAC5bfzbFD%2B%2FKwn37be1IKwbjQg%2B6B7ShxDbxnsW%2FLo5sK6OsmixG8OrlT8mM1Xc84zDS3oU76t%2FDzVBB4HwFAAyHaY2aVAEWyOkeldFtJDqhO2LmNafnKc2pNmlUut7GbYF&X-Amz-Signature=9847fefef79f398eeffa36775292d5b2a018f28bfa08916c11af6c977643283e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
