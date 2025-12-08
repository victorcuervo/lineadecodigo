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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSS4YAC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkWF3AxUG4igICz9MiSpRdj66kYWSM2fU9enahUXDc6AiEApMHv6Iw0K8wY3uqk0u1XnVQ4XV%2Bkjim0nRKDLkL%2BOYQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvxbAs7wbdlreYPuSrcA2bVdREDk7%2BS6PGDGBsimoJMH9%2FAFTrehmfmVfIRof%2FB9idxSZutyoskA6OY20AEQZBg9DppdRZSyh9Qav%2BcxuKEXB4EoUfC94gjXPNPgH%2FmUzycAUueeEbv7VXa%2FRA9L6w1VG76Vp3rSEOPHsRsGbjVwgVeYoI4uM9NkYcmF5khm%2BKPLzBFUrtaE1X%2BviIsTeEppU4vb6F8pxERGdgIWR10lHxn3wdqsJhp9%2Fwi4T%2BNHkFx6p5AGBFF0snV11RWCrAHt%2FVzDevuzY0vyK6h0B5lg%2ByEQpaf2qM9wcgg0qvN5%2BYfNFWV8ZyuE1zYvkR2XgLOAi0ZANabcCCQngEskZVXvsigC6xeFEXS51RxvlnIjvesc5D%2FPA77ioofJGz47gNWx55FX%2BPkI2EiPtGqRLpOVYMbDgEsp%2FHMzgkeSNsefUrifowtbX4xFbOyvwZKLOUrrl6a4GadKo%2B60Icf9u6JOFi4h5RQ9eVybHEX3RuJwMBigxpYzxI4DjNQNlWZjhUS%2FKCFspQfOYMPJRUlxvJFdT1O%2FKMAKLPzi%2Br06SC1kIkWOHhRGVIsiF7qt5dpF8HXF%2B0FPjugGQCPw2BF9RdTYgQeYrf%2Fq4LZqfbPAOdOSPARTJcbLlve%2B95WMI3u2ckGOqUBLCDyYf6UxnW2BX%2FUe6z4Wf3QGjTCxryFv1o%2BySjSV1qK97%2FzSVqrDiTB2TzVB%2BqvFo0P3nK2hG3dv1c8qJKw30RP3K4cBIs5jwVkGWs5U6KjP%2FSss4M%2BRvPeOuY6cFdm529CjXD4fXIwzpvEQINlaFEqvwI55%2FQAH1iG56W4taOS3DPTzOB2b74a9bQOcWrEjBIU4S%2BU9Iol%2BixgoQKSaF3AkWlR&X-Amz-Signature=5e3aa5fdd4b2f4d7bda14652851c2f266865c9abead7fa016be6930968fb64ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSS4YAC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkWF3AxUG4igICz9MiSpRdj66kYWSM2fU9enahUXDc6AiEApMHv6Iw0K8wY3uqk0u1XnVQ4XV%2Bkjim0nRKDLkL%2BOYQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvxbAs7wbdlreYPuSrcA2bVdREDk7%2BS6PGDGBsimoJMH9%2FAFTrehmfmVfIRof%2FB9idxSZutyoskA6OY20AEQZBg9DppdRZSyh9Qav%2BcxuKEXB4EoUfC94gjXPNPgH%2FmUzycAUueeEbv7VXa%2FRA9L6w1VG76Vp3rSEOPHsRsGbjVwgVeYoI4uM9NkYcmF5khm%2BKPLzBFUrtaE1X%2BviIsTeEppU4vb6F8pxERGdgIWR10lHxn3wdqsJhp9%2Fwi4T%2BNHkFx6p5AGBFF0snV11RWCrAHt%2FVzDevuzY0vyK6h0B5lg%2ByEQpaf2qM9wcgg0qvN5%2BYfNFWV8ZyuE1zYvkR2XgLOAi0ZANabcCCQngEskZVXvsigC6xeFEXS51RxvlnIjvesc5D%2FPA77ioofJGz47gNWx55FX%2BPkI2EiPtGqRLpOVYMbDgEsp%2FHMzgkeSNsefUrifowtbX4xFbOyvwZKLOUrrl6a4GadKo%2B60Icf9u6JOFi4h5RQ9eVybHEX3RuJwMBigxpYzxI4DjNQNlWZjhUS%2FKCFspQfOYMPJRUlxvJFdT1O%2FKMAKLPzi%2Br06SC1kIkWOHhRGVIsiF7qt5dpF8HXF%2B0FPjugGQCPw2BF9RdTYgQeYrf%2Fq4LZqfbPAOdOSPARTJcbLlve%2B95WMI3u2ckGOqUBLCDyYf6UxnW2BX%2FUe6z4Wf3QGjTCxryFv1o%2BySjSV1qK97%2FzSVqrDiTB2TzVB%2BqvFo0P3nK2hG3dv1c8qJKw30RP3K4cBIs5jwVkGWs5U6KjP%2FSss4M%2BRvPeOuY6cFdm529CjXD4fXIwzpvEQINlaFEqvwI55%2FQAH1iG56W4taOS3DPTzOB2b74a9bQOcWrEjBIU4S%2BU9Iol%2BixgoQKSaF3AkWlR&X-Amz-Signature=77e6c824bace3d3b4567e507efe73243214b1ef1380ed8666e0d485671561797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
