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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C7V3RZB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO4vQl2n%2F8meu47Eln%2FEtOg62J4kqaQT8OE1aZ4sqcSQIgcQQZ4ZPshtf5e4c1%2Fi2mjfW4upKupB5z1cPZZQHxw3Uq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBWJbWMZiOL3Qf5ZkSrcAwU7cEIWXwati7x1vuAQ1oxnAUWIsqahnOmyjzDoSkk9eeucVXGuCZeKnUqQjwVLm96aLrUGrZUKPijEJMdDOR3WujiktJ6HG18K1KyVA4MXKp9xTW20RH%2FJpFysnNGdhu70itPvtZLBFNswgCXBO73NEI4wUgOQWLAGdFfI2XSWcftaOTMZs1rHvZIAW%2Bb%2BMM9YHmn%2BzBro5sGlaR3%2B9p4Fbqj23U9A6E8UIXiJNHUvvY%2BEtMObMFC6VZ7gJ6%2FlNOYqK%2FDm47p%2FYVbjgYw14dsfquQOI%2ByRvY9YC6HUm%2FE%2B86YM4VQFhMlcpvRc09Rq1L807ucVnzjYzt6Usv7VRskOZiIoBSOFsbgPbEebXmf4fcQgVWei2GKd9%2FEhY%2FkG%2BVdMnrWyuvmSg3mm4Kw8JD2hInQUa8tFcSNDXTsrR0ImVjjKLfpNvkfY8CdklAT8WXmd7gWYY90kjW4u6vkRxlHy4Lb3g7X2wDiajhT%2F3BVkQDo3W9EsI3nKECckqUs93y%2BqB683V7CtqIyp6v2X2yO2SNoE%2BSKJdwP8dJ5qbaPJiUcIwgeR85a%2BBnONfkpMQJZLBdo6%2BG2HqxLPg9jdPFRfz7X4iC9yVyFn7FIGegqd0LLenMTAqz580Uk6MITfh8oGOqUB0K%2FzUMa97nz6fpZB8BQpCxO5v8474EbavxZziw1azD3AxVNNcuwWlqMivZSDNIeUbeVI7fV%2BSp7RXFpQ5vIm9%2BHvrbsIl3ya8%2Bke%2BydL3pqqzgPLUVKb4fL9pkQVYHiORC%2FOBIYGe0drUa1hrnA1G0g25IxqgAZ5GP9CKS7VTMSWOfl6liT5dL6yplFwf7QEGkh4iKcuyyP%2BxYN%2BeeW9pr5e%2F7xG&X-Amz-Signature=2e0eb27256b608cb013e2195522abeeb0a8db400db2abcdd24ae44fb22e5ae4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C7V3RZB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO4vQl2n%2F8meu47Eln%2FEtOg62J4kqaQT8OE1aZ4sqcSQIgcQQZ4ZPshtf5e4c1%2Fi2mjfW4upKupB5z1cPZZQHxw3Uq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBWJbWMZiOL3Qf5ZkSrcAwU7cEIWXwati7x1vuAQ1oxnAUWIsqahnOmyjzDoSkk9eeucVXGuCZeKnUqQjwVLm96aLrUGrZUKPijEJMdDOR3WujiktJ6HG18K1KyVA4MXKp9xTW20RH%2FJpFysnNGdhu70itPvtZLBFNswgCXBO73NEI4wUgOQWLAGdFfI2XSWcftaOTMZs1rHvZIAW%2Bb%2BMM9YHmn%2BzBro5sGlaR3%2B9p4Fbqj23U9A6E8UIXiJNHUvvY%2BEtMObMFC6VZ7gJ6%2FlNOYqK%2FDm47p%2FYVbjgYw14dsfquQOI%2ByRvY9YC6HUm%2FE%2B86YM4VQFhMlcpvRc09Rq1L807ucVnzjYzt6Usv7VRskOZiIoBSOFsbgPbEebXmf4fcQgVWei2GKd9%2FEhY%2FkG%2BVdMnrWyuvmSg3mm4Kw8JD2hInQUa8tFcSNDXTsrR0ImVjjKLfpNvkfY8CdklAT8WXmd7gWYY90kjW4u6vkRxlHy4Lb3g7X2wDiajhT%2F3BVkQDo3W9EsI3nKECckqUs93y%2BqB683V7CtqIyp6v2X2yO2SNoE%2BSKJdwP8dJ5qbaPJiUcIwgeR85a%2BBnONfkpMQJZLBdo6%2BG2HqxLPg9jdPFRfz7X4iC9yVyFn7FIGegqd0LLenMTAqz580Uk6MITfh8oGOqUB0K%2FzUMa97nz6fpZB8BQpCxO5v8474EbavxZziw1azD3AxVNNcuwWlqMivZSDNIeUbeVI7fV%2BSp7RXFpQ5vIm9%2BHvrbsIl3ya8%2Bke%2BydL3pqqzgPLUVKb4fL9pkQVYHiORC%2FOBIYGe0drUa1hrnA1G0g25IxqgAZ5GP9CKS7VTMSWOfl6liT5dL6yplFwf7QEGkh4iKcuyyP%2BxYN%2BeeW9pr5e%2F7xG&X-Amz-Signature=851039c2c34c0094db31bbd98ab0379b8303eb432ebc818e19cc2150f8a41635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
