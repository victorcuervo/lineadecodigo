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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC6QANJR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BO4jj5L7iiWelwsu07m18PvY2YWXR4DIcubitB0AjaAiBDTMHAdydV2sHqH8DWfSQMzXRDeGo1d3xHQPalzCFLgCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyFMbpa7EKYxkeBXKtwDS1VDP3w7aFRtUjLnIserwY5NIdw9MGLylWOdy%2FvaYu%2B8uLfiZCxno6hffETL%2BgP9jfDKKZlq7%2FJ9H%2B6fxiFO%2Fi0zW0i%2F1GkiECfql4WyusuyPvJ34rLFf1nnJpRxTCtcRP3EUHhBYjhO5mb6qSJt3Tje87atmWoPV6ke%2FysH5Ie8BLxoDm0x3VlN0nU2UOmkbRbkK1YxsGcNl8b7ZVF4sHok3kOoL7Esisui8%2FHOKf%2B4k1LQ0hIKEcuHeD%2BM2ewDUIbXC%2F%2BdJI3qOIXty%2BTZwujXpf9Z1SwCPm4JEbosT23vuqAka6%2BDNJgCJno3BrdDhnKxe2nfLyrYXXDdFVUSRLnfnNZ9M7LVyyrZ7S9%2Bcw0CmYaafaB6H21UZ1D2sxh24Mt9vkBiqH9ybpr7%2F4Z%2F3eRFlcg6Uq%2FlUJZJgY%2Bf7%2FkuQF3CDG5htKb5CqqbWFIrATuZdCisgnIiQakf0mt7ff1nLPYOsctUYLvQIaK7mvs3PkKfU2T0XCT4lyU21EHdCYp76H%2FzcQMN%2FscdnKcUDYgO4R%2FSdMCnXUTCcHoggYx6T%2FooPDu4a9Qg6qpLdmOuVUxbHzIFbCzdoyteH6rCSuLR1bnqnkGsmhUZrXQ%2Fn85xGG3Oht36Ww5rBAUwmundyQY6pgEnU6L5TU1YunEMUPBtA%2FwI2KOo5EM39tDcH34nvpw8ezs8wQ5uX154T3OfaspyFHXTU05z5r%2BK4PwX7cJUxO%2FH4LMMO%2BoWu7KNmPwpKrpopxKCosnWDtJ%2BscuusQ5DA0pklQG4twvP0RB08LcBC3RmnTn82BwWy5b9jGX6RqiStyn516UcVtXw5LDnFDG3pNhaM5ZAfDtXpZMUYsDoZi%2FrQUMQRdIe&X-Amz-Signature=dee6208de2d814eb82ee2f18bced506d37b70733dc07047f1b6bf1f81b88d6fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC6QANJR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BO4jj5L7iiWelwsu07m18PvY2YWXR4DIcubitB0AjaAiBDTMHAdydV2sHqH8DWfSQMzXRDeGo1d3xHQPalzCFLgCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyFMbpa7EKYxkeBXKtwDS1VDP3w7aFRtUjLnIserwY5NIdw9MGLylWOdy%2FvaYu%2B8uLfiZCxno6hffETL%2BgP9jfDKKZlq7%2FJ9H%2B6fxiFO%2Fi0zW0i%2F1GkiECfql4WyusuyPvJ34rLFf1nnJpRxTCtcRP3EUHhBYjhO5mb6qSJt3Tje87atmWoPV6ke%2FysH5Ie8BLxoDm0x3VlN0nU2UOmkbRbkK1YxsGcNl8b7ZVF4sHok3kOoL7Esisui8%2FHOKf%2B4k1LQ0hIKEcuHeD%2BM2ewDUIbXC%2F%2BdJI3qOIXty%2BTZwujXpf9Z1SwCPm4JEbosT23vuqAka6%2BDNJgCJno3BrdDhnKxe2nfLyrYXXDdFVUSRLnfnNZ9M7LVyyrZ7S9%2Bcw0CmYaafaB6H21UZ1D2sxh24Mt9vkBiqH9ybpr7%2F4Z%2F3eRFlcg6Uq%2FlUJZJgY%2Bf7%2FkuQF3CDG5htKb5CqqbWFIrATuZdCisgnIiQakf0mt7ff1nLPYOsctUYLvQIaK7mvs3PkKfU2T0XCT4lyU21EHdCYp76H%2FzcQMN%2FscdnKcUDYgO4R%2FSdMCnXUTCcHoggYx6T%2FooPDu4a9Qg6qpLdmOuVUxbHzIFbCzdoyteH6rCSuLR1bnqnkGsmhUZrXQ%2Fn85xGG3Oht36Ww5rBAUwmundyQY6pgEnU6L5TU1YunEMUPBtA%2FwI2KOo5EM39tDcH34nvpw8ezs8wQ5uX154T3OfaspyFHXTU05z5r%2BK4PwX7cJUxO%2FH4LMMO%2BoWu7KNmPwpKrpopxKCosnWDtJ%2BscuusQ5DA0pklQG4twvP0RB08LcBC3RmnTn82BwWy5b9jGX6RqiStyn516UcVtXw5LDnFDG3pNhaM5ZAfDtXpZMUYsDoZi%2FrQUMQRdIe&X-Amz-Signature=87707edf4d358a2041d0e9ce87b6d2efd216d9ceac5211a3a9cdf30680bd184b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
