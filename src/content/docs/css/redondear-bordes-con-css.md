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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRVESR23%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESAxV%2BZbB29CzG9gKxaljPL2SK83x2118JFE59GnRd7AiBNePVB0lWYp2NwdcfWwgmFr24i1AYUfXk01nREsh8QsyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCap06H3ACDLvSvbSKtwD0Tzzejw1lpqy7saP1slFahLvQNExr7QY2rYcBT%2FRa1UU68AIuIZiDRm9ls2TlekibjC779Op%2Fpb1UEQ%2Fr4m8E0MwFxEetM%2FMaPY6I3CUkLS6ybJEQji0%2FZ0tdUWUsBXwFlSdAzy0FYuab84%2Ba06KXcLMkPJ6rBsMfuWupZi%2BY8mD6f4uaOwmqAZyMiV%2F1iIAMH%2BEUY3b1ob5f%2FbiZupNnlX5iJ%2Bnpp2Y00pfKRlHQWMRSWNLgYtuEAXIZ4GRzs6XmMY2o37rme6zs3ArxM9MzOdX1JPV1QfDtzr%2FTsFVQ4GeifSkjzH8KJB%2BpyWdlrv2dRcD2ke7zT6LmBv7zQQlK6hXvrUO5Q1143eni78xbN6hBnXR7VB9QQpvEnjk%2FMTaxDca0nquxWQ3aMs96p%2FDBw7cO7lH4I7l4E9zashQp6LD6stujdDkCJ6KYeyrurEf8HlI6FHsimyqs5bRz57SWuDgw2kcKVn0I9KHo4N3bgn5lunrAHG23O7LkqLJmAq6FEs%2FvxsyoW8ENZzX7qyblpNGY%2FPwH7UKrIhyl4r1KIoSKzBxGqu%2FrlM7A0xxIbXFXVoUeFA38uy%2Fz%2BdONDySQY6ShvZSxWqS%2BBOymLRKeXK1PpRygTbUaoX4%2B48w%2FOjdyQY6pgEioynAg9iXC%2FFFfFM8%2FDFJZHUAbqogu%2B3%2BEWxAmUeqx7DdqwvqPX43hm1DRb%2F91szZA6YjYRRYaEuFaPcST4YS7vaZlg32y2WRSljZ71C80dU%2Bh02ACnDGt4rlSq4YlU04Akv64HVcZjcwFsZd3ZtVvnX7zIibDBrnhxjjtl5R0oXG5hWXR%2FLm%2FinFw68oDavRpMY02YbedgW0UWhIQUjEN%2FBAmaS7&X-Amz-Signature=682eabd32da5e9c5c2e0ace8afa420a648360b9a6efa496d56231608979cc306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRVESR23%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESAxV%2BZbB29CzG9gKxaljPL2SK83x2118JFE59GnRd7AiBNePVB0lWYp2NwdcfWwgmFr24i1AYUfXk01nREsh8QsyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCap06H3ACDLvSvbSKtwD0Tzzejw1lpqy7saP1slFahLvQNExr7QY2rYcBT%2FRa1UU68AIuIZiDRm9ls2TlekibjC779Op%2Fpb1UEQ%2Fr4m8E0MwFxEetM%2FMaPY6I3CUkLS6ybJEQji0%2FZ0tdUWUsBXwFlSdAzy0FYuab84%2Ba06KXcLMkPJ6rBsMfuWupZi%2BY8mD6f4uaOwmqAZyMiV%2F1iIAMH%2BEUY3b1ob5f%2FbiZupNnlX5iJ%2Bnpp2Y00pfKRlHQWMRSWNLgYtuEAXIZ4GRzs6XmMY2o37rme6zs3ArxM9MzOdX1JPV1QfDtzr%2FTsFVQ4GeifSkjzH8KJB%2BpyWdlrv2dRcD2ke7zT6LmBv7zQQlK6hXvrUO5Q1143eni78xbN6hBnXR7VB9QQpvEnjk%2FMTaxDca0nquxWQ3aMs96p%2FDBw7cO7lH4I7l4E9zashQp6LD6stujdDkCJ6KYeyrurEf8HlI6FHsimyqs5bRz57SWuDgw2kcKVn0I9KHo4N3bgn5lunrAHG23O7LkqLJmAq6FEs%2FvxsyoW8ENZzX7qyblpNGY%2FPwH7UKrIhyl4r1KIoSKzBxGqu%2FrlM7A0xxIbXFXVoUeFA38uy%2Fz%2BdONDySQY6ShvZSxWqS%2BBOymLRKeXK1PpRygTbUaoX4%2B48w%2FOjdyQY6pgEioynAg9iXC%2FFFfFM8%2FDFJZHUAbqogu%2B3%2BEWxAmUeqx7DdqwvqPX43hm1DRb%2F91szZA6YjYRRYaEuFaPcST4YS7vaZlg32y2WRSljZ71C80dU%2Bh02ACnDGt4rlSq4YlU04Akv64HVcZjcwFsZd3ZtVvnX7zIibDBrnhxjjtl5R0oXG5hWXR%2FLm%2FinFw68oDavRpMY02YbedgW0UWhIQUjEN%2FBAmaS7&X-Amz-Signature=807cbdb696c69f94c312c3d8900eb091882b8c4bd532f757d56477f0f59eb6f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
