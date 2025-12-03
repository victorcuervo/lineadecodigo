---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRSF53MP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCF3k%2BZN1GCxBajobxIX78T9vwlkH6JkZvXjatTk7GItgIgU%2FoKJSApQcu6l0XEEdMuH8MKc1ZrrIhcMG72l%2B4yXE0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGuxmglylwUMyPjUtircA277m%2FI%2BCN4MC8GAVEEyZHxwVUomFoGBiPcqdQmjnvUjWDjZvnJ%2F7jGwdDYV4yKtEu7RB2exU1js8lu4ve9hH4%2F5c5MTZZ%2F%2FowSNZddtEouA78gK%2F09zssqaZyO8rev8p5iP2FJrGSw5rYkCgsn5qoDEbBBCZj0OcRnbkp8h%2BDUd0BkoW1CsfGpv5IwlaChi1uxY1fVzQ6csK%2B6TGJjD8jqfw3yQpmWg5D6ONaBw6koJQJcXrsmBEPLcsU029uG%2BI2z%2B1nJveaGEUzmvPRLsw0iO98LxpzNhkpga%2F%2BwB%2B%2BNxHNJZErFrZCqnZEVHZgtKSG5OOzUeZuOgmA6rI6feIJN%2B3UigKJz4W0z8Mpwqc%2Bp5tPlEvkUJ1CmLWa3JMs2A0q%2BaPz2Nir5EfNPla6TPymk5Pkk5lOwsfl3HadK3z5lVmYfEP6rvrikPU8zSndrcgkFs9z8J3k8SFp%2BZVIE%2FWEI4EAoFoG0QnIBjTnNs7o5EUGSF30Dd1%2ByXP1DaHE%2BhQee4sqYufc2Y4TJFa79lgPlCzT7cY9qjvx60drWYhRsIi%2FyFPn3WEKxfdfXsZaVJkjJP0181MeIIejzSCgjONwL0L1ZVT39YfAB892mX4apj07V%2Buvg4XTndI0VNMKiRwskGOqUBKZPg0LBzsSsDlHZlPIyN%2FJfjtXItwFil8HH%2FPfWrG24KEgnbrOYhq7ANMJKfmM2RRfG%2F8Y0Mu%2B6ps%2FCBn%2BBflwnB%2FfQgnKaTB4d7sBLKy5HPipRRvBLuSZZ4FMJofUE%2F%2FTrdLUXxVhEXGAF0eGvrAppfN39EGEfYDm9jKMTVHuqtNzGE3T7204kVYKb7V%2BRFOOlwlvzYuGGEGV5BlqVTjUCdUo9c&X-Amz-Signature=610fd8489b3f5eb2f09a43bdcaf6d66515dd2d951df11d81ec46a2ddc90d44fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRSF53MP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCF3k%2BZN1GCxBajobxIX78T9vwlkH6JkZvXjatTk7GItgIgU%2FoKJSApQcu6l0XEEdMuH8MKc1ZrrIhcMG72l%2B4yXE0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGuxmglylwUMyPjUtircA277m%2FI%2BCN4MC8GAVEEyZHxwVUomFoGBiPcqdQmjnvUjWDjZvnJ%2F7jGwdDYV4yKtEu7RB2exU1js8lu4ve9hH4%2F5c5MTZZ%2F%2FowSNZddtEouA78gK%2F09zssqaZyO8rev8p5iP2FJrGSw5rYkCgsn5qoDEbBBCZj0OcRnbkp8h%2BDUd0BkoW1CsfGpv5IwlaChi1uxY1fVzQ6csK%2B6TGJjD8jqfw3yQpmWg5D6ONaBw6koJQJcXrsmBEPLcsU029uG%2BI2z%2B1nJveaGEUzmvPRLsw0iO98LxpzNhkpga%2F%2BwB%2B%2BNxHNJZErFrZCqnZEVHZgtKSG5OOzUeZuOgmA6rI6feIJN%2B3UigKJz4W0z8Mpwqc%2Bp5tPlEvkUJ1CmLWa3JMs2A0q%2BaPz2Nir5EfNPla6TPymk5Pkk5lOwsfl3HadK3z5lVmYfEP6rvrikPU8zSndrcgkFs9z8J3k8SFp%2BZVIE%2FWEI4EAoFoG0QnIBjTnNs7o5EUGSF30Dd1%2ByXP1DaHE%2BhQee4sqYufc2Y4TJFa79lgPlCzT7cY9qjvx60drWYhRsIi%2FyFPn3WEKxfdfXsZaVJkjJP0181MeIIejzSCgjONwL0L1ZVT39YfAB892mX4apj07V%2Buvg4XTndI0VNMKiRwskGOqUBKZPg0LBzsSsDlHZlPIyN%2FJfjtXItwFil8HH%2FPfWrG24KEgnbrOYhq7ANMJKfmM2RRfG%2F8Y0Mu%2B6ps%2FCBn%2BBflwnB%2FfQgnKaTB4d7sBLKy5HPipRRvBLuSZZ4FMJofUE%2F%2FTrdLUXxVhEXGAF0eGvrAppfN39EGEfYDm9jKMTVHuqtNzGE3T7204kVYKb7V%2BRFOOlwlvzYuGGEGV5BlqVTjUCdUo9c&X-Amz-Signature=8d5b3c71299a6f3de8ca4c8784f0927c8f914117d004dcd97a904469da6e37f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
