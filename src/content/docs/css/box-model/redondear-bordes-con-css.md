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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSND46L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOk%2BzZ7zEgIsIaISW1ylIPrFhhTHxBucEXzHCWiGr44QIhAMsphL1ZLhLMv0iiN%2BcNxR4cRUl3q5glP4MrdvRVKNV8Kv8DCHUQABoMNjM3NDIzMTgzODA1Igx%2FLMQg%2BYdLXvU%2Ffvoq3AN%2BgZgccEcDi83NJ4f7Qff7PbmF84II%2FEM5H4f123AwUrg%2FIALOxe2EadJLqf5IckSMaIL%2BWdgJGJXQl9j6u6qvpPaLUl1WlpOdJ2zrljegljP8O5sGHWySE8Fxj1WcsFv%2F87J0lpBi04fmsD%2BOpM89I%2ByQiBWUVEuulIokuOo3W4sjXVvnRfu7Hqjo8nB%2FK%2FzGGxPv38YfF%2FwsrHPaRMt7%2BL9OLgOuz4hB6J9bhqUpjZYpWuDh6fDw7uNUruhlyRRd3HwR01YBG%2Fmzg9a8OqwLBKQHRKEBd0nF0hCxzPq%2BZyr3%2FTu49eEScgc4eg18GIaMFAMlpY35N1zxXX%2FEZCNV5UJFozeypLGWofL%2BvVXS6hZq1VdUCMI5SPJWk1Nhy2d9gsislWEs3iYbFrNl5BnToNEBasQMzNPg2wv0LO3zxcrmIb3aARd%2BBPu0ZDdUn%2FMWoZeE7miBAiL0y1cCnXAFw0ItH7lq%2BSplhAlKbCMethhwqZf3cb1mbehh6Mgyy4xBQ9Y3ZCkKTQsF742BvplhcSe0nt3PudrBRmreh35tX7wd6aCxvjk8CK2u40KmoxgF%2BJHnRVTqSBgMPnDQl0sxYVa9tWLt6VYFpO6t%2B2XD%2Bc3Y2Bo70kwqIrtshTDIzojKBjqkAdvlVipEHqvPDXQgeREl35t18a%2BIDYvAVD8Upnt8fLYiPLsjp%2F1UuICv5wcSUkNKWIKQoF4fqcODKWk4fFI57AgmX01hmeGypbK2WvTWGV7DhEUtu3dnGPZCsXQP7MYtlAT3pVGQJKlAGAbc5RpsUsArxMLqZenGXyvZkOCelBnxWamoQ%2BF%2FmQYqhrLFR1w7qOwbCTq50EsbHJb6NIrZVbYNNUsO&X-Amz-Signature=6ed389335d890e1969d17ae227decc822672ac2af21ce4d7144cb273dcf46c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSND46L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOk%2BzZ7zEgIsIaISW1ylIPrFhhTHxBucEXzHCWiGr44QIhAMsphL1ZLhLMv0iiN%2BcNxR4cRUl3q5glP4MrdvRVKNV8Kv8DCHUQABoMNjM3NDIzMTgzODA1Igx%2FLMQg%2BYdLXvU%2Ffvoq3AN%2BgZgccEcDi83NJ4f7Qff7PbmF84II%2FEM5H4f123AwUrg%2FIALOxe2EadJLqf5IckSMaIL%2BWdgJGJXQl9j6u6qvpPaLUl1WlpOdJ2zrljegljP8O5sGHWySE8Fxj1WcsFv%2F87J0lpBi04fmsD%2BOpM89I%2ByQiBWUVEuulIokuOo3W4sjXVvnRfu7Hqjo8nB%2FK%2FzGGxPv38YfF%2FwsrHPaRMt7%2BL9OLgOuz4hB6J9bhqUpjZYpWuDh6fDw7uNUruhlyRRd3HwR01YBG%2Fmzg9a8OqwLBKQHRKEBd0nF0hCxzPq%2BZyr3%2FTu49eEScgc4eg18GIaMFAMlpY35N1zxXX%2FEZCNV5UJFozeypLGWofL%2BvVXS6hZq1VdUCMI5SPJWk1Nhy2d9gsislWEs3iYbFrNl5BnToNEBasQMzNPg2wv0LO3zxcrmIb3aARd%2BBPu0ZDdUn%2FMWoZeE7miBAiL0y1cCnXAFw0ItH7lq%2BSplhAlKbCMethhwqZf3cb1mbehh6Mgyy4xBQ9Y3ZCkKTQsF742BvplhcSe0nt3PudrBRmreh35tX7wd6aCxvjk8CK2u40KmoxgF%2BJHnRVTqSBgMPnDQl0sxYVa9tWLt6VYFpO6t%2B2XD%2Bc3Y2Bo70kwqIrtshTDIzojKBjqkAdvlVipEHqvPDXQgeREl35t18a%2BIDYvAVD8Upnt8fLYiPLsjp%2F1UuICv5wcSUkNKWIKQoF4fqcODKWk4fFI57AgmX01hmeGypbK2WvTWGV7DhEUtu3dnGPZCsXQP7MYtlAT3pVGQJKlAGAbc5RpsUsArxMLqZenGXyvZkOCelBnxWamoQ%2BF%2FmQYqhrLFR1w7qOwbCTq50EsbHJb6NIrZVbYNNUsO&X-Amz-Signature=c94333579c20827af83c258db846ee9c90bd5922a8b358084616e78deca9e1dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
