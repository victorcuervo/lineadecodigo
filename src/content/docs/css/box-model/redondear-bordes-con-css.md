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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LVSGPJD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiztH0t8Uw1dD%2B7P4USa6qTM3brC8nLXroYN%2BTAI58jAiBlJld2e2T7cazyWveM79KeRFI7Q1dCHwiVqwdRBCGS5ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMa%2BTmGFa9cwrprp2JKtwDSJ8zo1JzcDrfQ%2FGs5SBsVYL6FMBayIhhUgCxoQunlNSmReWMMeBqjzZCusB%2FBoOoc12f6AtcOxAjMtZkZSedMyukWjgUvvbB5ZpqL5ZEWWhKSytT9a6pWwwLmvAobexjmdQXRSHepcbOiSoN6FKKFB1%2B9yUC%2Bxd6ydGBAdY7tgDsMKpe5SavB5D%2FnPi4k6weo9RkLRUXcDXHfCVKk7J7mywsWuYOnhdr8A5cHVmbRQiy8EkkKB6kLHcyWLe4Ke3yUy9TECuCgqGPvMh8f7v%2FL%2FDFv57c5f30yyzH3clEVfGANJTRx%2FUDi%2FoMdiZHzhJe%2FZM%2Bm7LQ5iYxg4xgxQvKd7HvGG%2BJMTizx41vAqO4%2FxX7dHFGVS653Fg%2BTxCimQgSwJlUlpsiIKwi9grkl3sAI0%2B8XlQbVvuGwixsFnYIg9vjGwGYL%2BjYfSlXOOgqRGWHJm3xMI2fNUKvs0s8wu1%2BCoHUF6pcQt7klv1IqR32j9hFPFabsn2QE8LOWFfHHPDpUhoIceLV%2F0auOZFSs7j5kJJ%2FKUgOgCZU9DM3oP6PgFNqSDnKY2vgG943Zdad0CGa50cMlEHJn%2FKx%2B3s0CDN%2FlDGL8jY2zaD9KBOf2dTB0bBpenn9lHG8KCIQrkIw%2Fs6IygY6pgEYp7zwDlERoiY8fP4wfCk9diRMC5y%2Fik3ByJKxyovFPRCmkKPrPbBwan15oN4tbxIRN9jz%2F7RygJg40dpKs5IJuuYrVmHfJWDbm7QOfVBwpj7%2Bhvzx5U9iZ7qVnugEh3VSmlOoubdJUgCAfNnVXqSim5q3bF3wSeFNljWmLAUegq2IMCrA9W8MSMszCwZg0iy7ZdocUAvGaKtby%2BrVIzThpADqG4Jc&X-Amz-Signature=526c35d94509bb2a25e55b048e75710d8861f10fcf309bc171167c7a9193fc42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LVSGPJD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiztH0t8Uw1dD%2B7P4USa6qTM3brC8nLXroYN%2BTAI58jAiBlJld2e2T7cazyWveM79KeRFI7Q1dCHwiVqwdRBCGS5ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMa%2BTmGFa9cwrprp2JKtwDSJ8zo1JzcDrfQ%2FGs5SBsVYL6FMBayIhhUgCxoQunlNSmReWMMeBqjzZCusB%2FBoOoc12f6AtcOxAjMtZkZSedMyukWjgUvvbB5ZpqL5ZEWWhKSytT9a6pWwwLmvAobexjmdQXRSHepcbOiSoN6FKKFB1%2B9yUC%2Bxd6ydGBAdY7tgDsMKpe5SavB5D%2FnPi4k6weo9RkLRUXcDXHfCVKk7J7mywsWuYOnhdr8A5cHVmbRQiy8EkkKB6kLHcyWLe4Ke3yUy9TECuCgqGPvMh8f7v%2FL%2FDFv57c5f30yyzH3clEVfGANJTRx%2FUDi%2FoMdiZHzhJe%2FZM%2Bm7LQ5iYxg4xgxQvKd7HvGG%2BJMTizx41vAqO4%2FxX7dHFGVS653Fg%2BTxCimQgSwJlUlpsiIKwi9grkl3sAI0%2B8XlQbVvuGwixsFnYIg9vjGwGYL%2BjYfSlXOOgqRGWHJm3xMI2fNUKvs0s8wu1%2BCoHUF6pcQt7klv1IqR32j9hFPFabsn2QE8LOWFfHHPDpUhoIceLV%2F0auOZFSs7j5kJJ%2FKUgOgCZU9DM3oP6PgFNqSDnKY2vgG943Zdad0CGa50cMlEHJn%2FKx%2B3s0CDN%2FlDGL8jY2zaD9KBOf2dTB0bBpenn9lHG8KCIQrkIw%2Fs6IygY6pgEYp7zwDlERoiY8fP4wfCk9diRMC5y%2Fik3ByJKxyovFPRCmkKPrPbBwan15oN4tbxIRN9jz%2F7RygJg40dpKs5IJuuYrVmHfJWDbm7QOfVBwpj7%2Bhvzx5U9iZ7qVnugEh3VSmlOoubdJUgCAfNnVXqSim5q3bF3wSeFNljWmLAUegq2IMCrA9W8MSMszCwZg0iy7ZdocUAvGaKtby%2BrVIzThpADqG4Jc&X-Amz-Signature=f7aa6410a0bf5de651cfb08ce55a8f3a797112babb16eb7343999bf6ab1cec0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
