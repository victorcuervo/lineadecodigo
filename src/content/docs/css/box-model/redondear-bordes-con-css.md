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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODYCOYR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbV9OEs49NoB%2FChGOL4z0JPkIdW%2FQkHTLKnnXvCmbQQgIhAK%2FElnuUKyJaqIw5Utu1mNxhyb2bWUxk%2BDPtmJU8xwTLKv8DCHsQABoMNjM3NDIzMTgzODA1Igwim19G31vSSDMp5jAq3AM%2BXsNGLDCoLktqhMcdoxA1nXR2WTXOZTCT04rtU1mrRPf%2FuFHhYGGnCZm2nYvLq%2Bef%2B%2FY72JBMIB6NLR%2BzTG5PJA8qC%2BDNxTOvKhMCosFqUM4kKEo451ml9fZqqdLGYukz5jeKWueAGVl7YCFv3oQgtOR%2FGd3xiU6kg1j9kZk9rDlgEXsfclI%2FccFF9c0jbg%2FFBwpM3AZCRLPJLd04eFv4x4mB6CL8PjRoCoKAJgHHrDFHR23c38FNS24O0AKTCR4jUcr%2BQxA%2FLJ4ETQxR7G5TBLvVMkvZvUaJHvGiz%2FT2ulrQlV7f9xYF%2Bhbm2YFc27zDyYx7TeEgIdN3HLx%2Bk%2F3JmaX3HkRFAPCbkeuv6cakFkHHgXUoggMyHt%2BO76i26P4TlabKbkOHhZjp9nhZt7CCQl2fHt6VTPOnNGEvpA5eYN3HqFoJseK3qOPREjgHi6CAQbWJxH6VXKTIAxSAKz%2F%2FYpTqQIFsvI6ZgFK2iQDJD4yo1axyqv3R7EgeIU94I07akO5kmOcke9emX4TNtySyPLKwjoVXIa5OqGE8LzrMoviFZW4sWytM5m%2F2PBvVgnos1Gqc9CK4687MnsWQFIZuXuoZCoZw2Rw5YO%2FmMsU8aQj0F9%2B1hyQfLA5UGTDd8InKBjqkAchbj9L4MKFikh8dGdp3FAIGKDu%2B2nwWkUEAq7h9a%2Fzq4meEsNXc5fsTgk3c2gx2rqOsqZ7kPpYTwX5bhCIAnYcjkzW9kYnaZSXSovFPKgY3kC3Y2jDaERmrmDOCGK5X0nYwH60C6PTf91aB5KFMwclk2qB%2Bb6l9onHKZpM%2BEUIm7LCzWwmiowrgps3o%2B39yB4ULDCWRO%2BUd0uIXVHVcctMj4V4f&X-Amz-Signature=9a09ba0aa758394ac71d3e79815b0a101e710b48ff8c8d01fe076fc153fe0193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODYCOYR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbV9OEs49NoB%2FChGOL4z0JPkIdW%2FQkHTLKnnXvCmbQQgIhAK%2FElnuUKyJaqIw5Utu1mNxhyb2bWUxk%2BDPtmJU8xwTLKv8DCHsQABoMNjM3NDIzMTgzODA1Igwim19G31vSSDMp5jAq3AM%2BXsNGLDCoLktqhMcdoxA1nXR2WTXOZTCT04rtU1mrRPf%2FuFHhYGGnCZm2nYvLq%2Bef%2B%2FY72JBMIB6NLR%2BzTG5PJA8qC%2BDNxTOvKhMCosFqUM4kKEo451ml9fZqqdLGYukz5jeKWueAGVl7YCFv3oQgtOR%2FGd3xiU6kg1j9kZk9rDlgEXsfclI%2FccFF9c0jbg%2FFBwpM3AZCRLPJLd04eFv4x4mB6CL8PjRoCoKAJgHHrDFHR23c38FNS24O0AKTCR4jUcr%2BQxA%2FLJ4ETQxR7G5TBLvVMkvZvUaJHvGiz%2FT2ulrQlV7f9xYF%2Bhbm2YFc27zDyYx7TeEgIdN3HLx%2Bk%2F3JmaX3HkRFAPCbkeuv6cakFkHHgXUoggMyHt%2BO76i26P4TlabKbkOHhZjp9nhZt7CCQl2fHt6VTPOnNGEvpA5eYN3HqFoJseK3qOPREjgHi6CAQbWJxH6VXKTIAxSAKz%2F%2FYpTqQIFsvI6ZgFK2iQDJD4yo1axyqv3R7EgeIU94I07akO5kmOcke9emX4TNtySyPLKwjoVXIa5OqGE8LzrMoviFZW4sWytM5m%2F2PBvVgnos1Gqc9CK4687MnsWQFIZuXuoZCoZw2Rw5YO%2FmMsU8aQj0F9%2B1hyQfLA5UGTDd8InKBjqkAchbj9L4MKFikh8dGdp3FAIGKDu%2B2nwWkUEAq7h9a%2Fzq4meEsNXc5fsTgk3c2gx2rqOsqZ7kPpYTwX5bhCIAnYcjkzW9kYnaZSXSovFPKgY3kC3Y2jDaERmrmDOCGK5X0nYwH60C6PTf91aB5KFMwclk2qB%2Bb6l9onHKZpM%2BEUIm7LCzWwmiowrgps3o%2B39yB4ULDCWRO%2BUd0uIXVHVcctMj4V4f&X-Amz-Signature=28a26ba71f334c23bc6acdf3c6faa28856c42697f1dcf77d28cfcdfea8641570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
