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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUB2YGMR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb4%2Bq1bSPLRvXjOZ%2F8ZB1jJsUxWcHAcxS8ExZvdJLSmAIgVLXLyMTeYzl3kaQ3OxxQK%2F5rJ3EfyGydnNAm4oUWlusqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJQFItRPv%2BSyAN8qSrcA1%2BmP0qI%2FRAYpAklLKgL3ilebp1vVlvuK8gfi2c3Q9nrsMz19iqVBkks4RzMRVKn2p8Sp8kFp7UwcYSrkwCC1IJsMgqfajPGRzaBom10mNomOrqQUy0U8YSmTJ9scen1F9vKam9PevBj1B1BCIDfwo9adPIz3y1VStlqDLJNGErYQLy5bM0J3OZ6nV9AIQ3M9fRaGr0lYJLETpMa3Jp3Iap8NWGO9cmI82X%2Fhto%2B3Q%2BjtFMXBgk4WwpZNYKuGD4bSupCAkTBuxlHmG9WI4vvM4n1k5nq2B4STdocc9OYCuPTqs8DOg4EqY5c6SAnZAF%2Bk03fmhgDzAw07CM9ZQccOAjoQFQlaaOEW0KknRw92g4n%2B4BbPs71h2Wdq1U8S3C%2FcA82lZQcfiXjALrpzt8zSd30xyGEGLSsJQRE%2BGg3Riu0xyfMKCtGduHoxxmmz56gsj2BOaMpolpT8agXYoDgBGPVo%2Buu%2FLlqcDMwwzD7sfOq%2Bh0YTylDLj4%2FIPZIE6JykWpv6UdPO4FCBROvdp0donJzrDQomg9Zj%2FZPhTU8pg1e%2B8FJz64L2vlzvdG5Spn8WSe%2FXIUb%2BoPQVZrXWa0v5IN6aM6ItRTF3V6FPEgDn8d56zK8dURN%2BdFR6BDoMNqU2ckGOqUBLjQUUeJ2hQoKaicvDlh6Q3UE65U3HdGuXvVz0qg6a0EQzjGia1La6nK13IT8LnuaLXpIlnxMOUkeKo6uIjpqB7hE%2FDopXrFxEAObXvE80rvNM8FyxjTTbFpX8bEmw1pBY%2Ff2S6D2cAefob7B%2B%2F%2Fpplrg5QV6m5UA97lyM0xYg9F5KOFVHsL2d6dYC4%2BMe0dsOWCgHG3PkvRhmJf%2B%2B%2BtdG0Q1Bgo5&X-Amz-Signature=de23ffb076c9a7d79c53018d7801ba441a9973cfaa67fb83e993836c559d6553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUB2YGMR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb4%2Bq1bSPLRvXjOZ%2F8ZB1jJsUxWcHAcxS8ExZvdJLSmAIgVLXLyMTeYzl3kaQ3OxxQK%2F5rJ3EfyGydnNAm4oUWlusqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJQFItRPv%2BSyAN8qSrcA1%2BmP0qI%2FRAYpAklLKgL3ilebp1vVlvuK8gfi2c3Q9nrsMz19iqVBkks4RzMRVKn2p8Sp8kFp7UwcYSrkwCC1IJsMgqfajPGRzaBom10mNomOrqQUy0U8YSmTJ9scen1F9vKam9PevBj1B1BCIDfwo9adPIz3y1VStlqDLJNGErYQLy5bM0J3OZ6nV9AIQ3M9fRaGr0lYJLETpMa3Jp3Iap8NWGO9cmI82X%2Fhto%2B3Q%2BjtFMXBgk4WwpZNYKuGD4bSupCAkTBuxlHmG9WI4vvM4n1k5nq2B4STdocc9OYCuPTqs8DOg4EqY5c6SAnZAF%2Bk03fmhgDzAw07CM9ZQccOAjoQFQlaaOEW0KknRw92g4n%2B4BbPs71h2Wdq1U8S3C%2FcA82lZQcfiXjALrpzt8zSd30xyGEGLSsJQRE%2BGg3Riu0xyfMKCtGduHoxxmmz56gsj2BOaMpolpT8agXYoDgBGPVo%2Buu%2FLlqcDMwwzD7sfOq%2Bh0YTylDLj4%2FIPZIE6JykWpv6UdPO4FCBROvdp0donJzrDQomg9Zj%2FZPhTU8pg1e%2B8FJz64L2vlzvdG5Spn8WSe%2FXIUb%2BoPQVZrXWa0v5IN6aM6ItRTF3V6FPEgDn8d56zK8dURN%2BdFR6BDoMNqU2ckGOqUBLjQUUeJ2hQoKaicvDlh6Q3UE65U3HdGuXvVz0qg6a0EQzjGia1La6nK13IT8LnuaLXpIlnxMOUkeKo6uIjpqB7hE%2FDopXrFxEAObXvE80rvNM8FyxjTTbFpX8bEmw1pBY%2Ff2S6D2cAefob7B%2B%2F%2Fpplrg5QV6m5UA97lyM0xYg9F5KOFVHsL2d6dYC4%2BMe0dsOWCgHG3PkvRhmJf%2B%2B%2BtdG0Q1Bgo5&X-Amz-Signature=75734776ef08dd40545dfedb44e38712c500a2163c2b5983ee14ad78939a23f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
