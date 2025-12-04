---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WOMJS5G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHwSt7KAxQn8nXQl1hsJniEzMOt3oTkwBYFxVu9KeNQhAiEAxqGJ0tW3ESaFfJNIPJ3%2FsaaXDZv5C7CA2GI1G6wQNqQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDP4%2BxvwyrKD1TifZxyrcA8eHJSAHSFCHctAgXZscIOQTbapXDWYFjvfi4F6UW41ROlaB9zNrgVgk%2F2hSbGgF6%2FiAWeHFxli7oe8aFdmpjnkPPBEOvvQEha3o8V%2BKM9SA%2Fk9aDwDIAdUD%2FpisSlKRKU8hejJemPcahRBDHeFDYvyDGTwqRJ31TUmMkBf09cTjcWiMotVysy0H7nFYp7ZKmxS2cQj0Ag2b2n2rzRNj%2BQF5WRRCmOSv%2BU3fTS9YSTpeTCUsXho3PJ5VLzXQ1Nm5w1wkJGQDgHCVrm%2F0yil%2BObA6%2FxGOKigXUYsR1LMtVgDJq0Z2UVRjELU5iYbhVgEUkH2qCRGjzConUUT8FCuflt3lPVYOpoDCYSOygNgBhst8dtyIZ7f%2BkL%2BGMU%2BCJ%2FCJEQLnRw6p3VWWJKiRPJVrIt3xeVk%2FFSrtty0TyUKp%2BF2QuATIq1yu%2FSqLPQEPOT19j21V2cb5H3hpMvq%2BkMhKijHee7gs7tv%2BMPWmnctwk2e1rrTbYLK6rOKuWJj3MsJq8bniaYRSz6vMYywTuxhIdjgk49CIkUvrCiIP%2Bu7T1JvYLzZzout1DwnEQcdYg%2Bk3M9yBMmrM4x8gUErn4hRwogFkrcEE04KUGfSr88j0rtwlLlKeAedkjZ9QdDinMLrLxMkGOqUBfaAQbCWYvuzS%2B8iKJV6K2kZ2wkGj5GvehfHIE2IQh2f7zXEhSxhH4ONUC4GoySApPhkOeO9sFr%2BjbT6qA%2BF1mnrJLcp3O9bweG777%2Bm8XCmyzTEb%2B%2F1mG8PCDR8N0rB7HwbQTt302CT4BRNfh9F%2Bx4%2FCsM2TKDSUP4prisO4Rw%2FTU%2B%2B2x87g%2FoL57qmMXKcBPCXsVak8dTCnE9pxbExqmgY9xYAZ&X-Amz-Signature=12ecd9739f285bffdb28fcfb2560b2e414b58432dc168255303ce37ec00f9ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WOMJS5G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHwSt7KAxQn8nXQl1hsJniEzMOt3oTkwBYFxVu9KeNQhAiEAxqGJ0tW3ESaFfJNIPJ3%2FsaaXDZv5C7CA2GI1G6wQNqQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDP4%2BxvwyrKD1TifZxyrcA8eHJSAHSFCHctAgXZscIOQTbapXDWYFjvfi4F6UW41ROlaB9zNrgVgk%2F2hSbGgF6%2FiAWeHFxli7oe8aFdmpjnkPPBEOvvQEha3o8V%2BKM9SA%2Fk9aDwDIAdUD%2FpisSlKRKU8hejJemPcahRBDHeFDYvyDGTwqRJ31TUmMkBf09cTjcWiMotVysy0H7nFYp7ZKmxS2cQj0Ag2b2n2rzRNj%2BQF5WRRCmOSv%2BU3fTS9YSTpeTCUsXho3PJ5VLzXQ1Nm5w1wkJGQDgHCVrm%2F0yil%2BObA6%2FxGOKigXUYsR1LMtVgDJq0Z2UVRjELU5iYbhVgEUkH2qCRGjzConUUT8FCuflt3lPVYOpoDCYSOygNgBhst8dtyIZ7f%2BkL%2BGMU%2BCJ%2FCJEQLnRw6p3VWWJKiRPJVrIt3xeVk%2FFSrtty0TyUKp%2BF2QuATIq1yu%2FSqLPQEPOT19j21V2cb5H3hpMvq%2BkMhKijHee7gs7tv%2BMPWmnctwk2e1rrTbYLK6rOKuWJj3MsJq8bniaYRSz6vMYywTuxhIdjgk49CIkUvrCiIP%2Bu7T1JvYLzZzout1DwnEQcdYg%2Bk3M9yBMmrM4x8gUErn4hRwogFkrcEE04KUGfSr88j0rtwlLlKeAedkjZ9QdDinMLrLxMkGOqUBfaAQbCWYvuzS%2B8iKJV6K2kZ2wkGj5GvehfHIE2IQh2f7zXEhSxhH4ONUC4GoySApPhkOeO9sFr%2BjbT6qA%2BF1mnrJLcp3O9bweG777%2Bm8XCmyzTEb%2B%2F1mG8PCDR8N0rB7HwbQTt302CT4BRNfh9F%2Bx4%2FCsM2TKDSUP4prisO4Rw%2FTU%2B%2B2x87g%2FoL57qmMXKcBPCXsVak8dTCnE9pxbExqmgY9xYAZ&X-Amz-Signature=c99c04b841b728f1dc6f987cca0ae173dcad981eda99c8d8419f079733d9e067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
