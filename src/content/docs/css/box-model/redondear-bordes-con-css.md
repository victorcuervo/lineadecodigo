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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYGUZ47%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJXwUNV3YG5tvmzcbj3xQvJ0h84WLg9NryhKUdu1rtdQIhALY%2BeEilOeTKRC191h0B9zKh%2BBXyL56OoUMTN2ieLapqKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqET1Ipa51HHkf%2Fpgq3AOl0YVGYJtdSGtoDQYUZOF0%2BY62VkPaJYH%2FftRWXOTO%2BT8LsfDLCzg185Kak8AhlMw%2FOiz5XgfV%2FkVaLoCDrMf3oYxtLCKLonmA0NWWKSouv3jfXcNI8m69ItXlB86yoissABWYHSbMoYnMpgCQFulImoe5fyj%2F%2BQoFgiurThvnin6DJanug7H4VJDjQKd7MUrui14eElW5sXDWl1v4tvkrAWDhbVml4DyfrDnlyiLSj5dR8juhqL8y0JxfIt%2BKIqWXVLUsSapJMCHcWWcIoA9qenxtThrqHAQTIoveao%2FUQ0QutAD7seHD0q3L8zZ5dL%2BEbaqS0gx427Af6Ef5Wwd%2Fk2MFlkUqcr195aBy3KnNwLTY8aWHL1CD1dTfEFNKfgbn1ZASCXFvDX5%2FdJv6k04t8wiWN0kW%2FisBdwnWGfitWS61YTqu0Gj%2B5RH4g7xJLQZMLxhpYbbG1UreKSMSfd4f5pqDPpIqSki1iJ9CGTfnwtX27QZCS8rJCjDCxMuDw32lXcsTj6d9MpgMqdhGZV80nuuvjjd9NnZQpDBeN0axQCuwSa1K0QkJLxJ7omZEINKeenS7g2%2FVNOvBK7DtK67jHRLVQMh1vQq0DPb7gEkbkXYNxB7fqwJPkYdBZDD5gIvKBjqkAfzKvpaiUuNTAPIQHAEl7ozBoQPNfNWZwUSMmud92GZvQAhJ6zCKbXduE1bD4Z4GLBjtQuwLhCCAMNkiItNRczoKi1dsNGUtLgE%2BpS0P3e4N7QXMkGB2CVB43YzE%2FP6F6OiWj7B823Y9gXQXpVTEwCt6f9z6BF5wuX0jrcVcoL9tlywz3V1VzoXi%2F%2BdyOWh6dtGjG9ibx6XFgn073SOWsBpJ4gjF&X-Amz-Signature=fd9bc4b539898057df5d5d67f2bd1ad3e9ae558cd930825602c5ec25ed178f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYGUZ47%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJXwUNV3YG5tvmzcbj3xQvJ0h84WLg9NryhKUdu1rtdQIhALY%2BeEilOeTKRC191h0B9zKh%2BBXyL56OoUMTN2ieLapqKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqET1Ipa51HHkf%2Fpgq3AOl0YVGYJtdSGtoDQYUZOF0%2BY62VkPaJYH%2FftRWXOTO%2BT8LsfDLCzg185Kak8AhlMw%2FOiz5XgfV%2FkVaLoCDrMf3oYxtLCKLonmA0NWWKSouv3jfXcNI8m69ItXlB86yoissABWYHSbMoYnMpgCQFulImoe5fyj%2F%2BQoFgiurThvnin6DJanug7H4VJDjQKd7MUrui14eElW5sXDWl1v4tvkrAWDhbVml4DyfrDnlyiLSj5dR8juhqL8y0JxfIt%2BKIqWXVLUsSapJMCHcWWcIoA9qenxtThrqHAQTIoveao%2FUQ0QutAD7seHD0q3L8zZ5dL%2BEbaqS0gx427Af6Ef5Wwd%2Fk2MFlkUqcr195aBy3KnNwLTY8aWHL1CD1dTfEFNKfgbn1ZASCXFvDX5%2FdJv6k04t8wiWN0kW%2FisBdwnWGfitWS61YTqu0Gj%2B5RH4g7xJLQZMLxhpYbbG1UreKSMSfd4f5pqDPpIqSki1iJ9CGTfnwtX27QZCS8rJCjDCxMuDw32lXcsTj6d9MpgMqdhGZV80nuuvjjd9NnZQpDBeN0axQCuwSa1K0QkJLxJ7omZEINKeenS7g2%2FVNOvBK7DtK67jHRLVQMh1vQq0DPb7gEkbkXYNxB7fqwJPkYdBZDD5gIvKBjqkAfzKvpaiUuNTAPIQHAEl7ozBoQPNfNWZwUSMmud92GZvQAhJ6zCKbXduE1bD4Z4GLBjtQuwLhCCAMNkiItNRczoKi1dsNGUtLgE%2BpS0P3e4N7QXMkGB2CVB43YzE%2FP6F6OiWj7B823Y9gXQXpVTEwCt6f9z6BF5wuX0jrcVcoL9tlywz3V1VzoXi%2F%2BdyOWh6dtGjG9ibx6XFgn073SOWsBpJ4gjF&X-Amz-Signature=876514d0cc3a06b0602d67b7770d70bfebd8ecc523e997614fb80e2f0ca86bbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
