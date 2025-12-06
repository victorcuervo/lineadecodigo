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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ARLNRQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHSiAADjn9WrNgVJTye17gvXcRvswvLxdKfoYQR4nSLAiAhuvTNPvZOaeE%2FYWo%2FhyRzYrpuMA6RweaiGwt%2BtTOkYir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM7saguyYW8Z6WFDpmKtwDla%2B9VYOF6NHCRjAAkyTqZKodHQtqX7mjUg9ohOGWnBuc5GhV7RKvqNZZ4QunkmVE0z1TX8cRdEvxtCVKIFsz%2FYW9mTIWGIKK61ibveOUkmapod4z4294YvWovTrelIlo6vZOkNk5Jn%2Be68nCdPFQwYKlp8nJ0spRsY%2BzO3iRxEIIlMMe8PY6qzDpCRs2tjprpeVnagUbZWipCAzYqadipcKHCmP%2BPOZlzwuvHTA7hwTWP5yDQ1qTARYm%2FEMWJukV0DfPRgWpE81lYS4p8c6OnUu1w635DTJFvRWfzEHCgrEd7G5Nz61FFctVXjepxphUUEDDtWsSsqCg%2BlbUFKtxssB%2Fdr9irckh89VntpEmTQBJnqwiJ0w5YGC%2FLyzVbLNn28z1XXg3GuccF9lP3DlTHNdb5m8rEPKBR0EytembcUKJBkM9XGoEo9ATewPJebs8Meit2nm69cpIJ0fGmQI1CXhAShihT5fguy2XcrEL%2FaH6VuXLGXqGnbB2EjCXDQmQxEycyHDo2IxVR5EPIcRMp9c3lm5WQTKWkDmQNx%2BFE6oULJd%2BpXiTM%2BkX3wpouvrUl6qALscQGO1HVVlRxJLVae35W6vMeIq7WRUddQuNcDLXmbvzYDrY4NMc4iUwi57PyQY6pgH1TlOY%2F8cLBcE6zfPNncV%2BtIHddmbuxsTNVupIGNk9WprnVpszEP%2BK4mm%2BcSPVRJNPa4naOuCGH6K9YIn0KN6oaO7m%2BlMEoenTlacddmuuqfQUrij%2B5bXFcP3vWuQT7bfaq6VhcxXzzFJZ91JIqsHM539tM5EJrx3vJmZrXIgyEFvv3gugHg5iUX496Tw2ckXpxW7krru%2Bmt6Zh2bl3AWnbMpJ8UlX&X-Amz-Signature=b8f62617bad359cbfa1229a0f1093b4a068c4043820f964b274f74dcab329563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ARLNRQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHSiAADjn9WrNgVJTye17gvXcRvswvLxdKfoYQR4nSLAiAhuvTNPvZOaeE%2FYWo%2FhyRzYrpuMA6RweaiGwt%2BtTOkYir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM7saguyYW8Z6WFDpmKtwDla%2B9VYOF6NHCRjAAkyTqZKodHQtqX7mjUg9ohOGWnBuc5GhV7RKvqNZZ4QunkmVE0z1TX8cRdEvxtCVKIFsz%2FYW9mTIWGIKK61ibveOUkmapod4z4294YvWovTrelIlo6vZOkNk5Jn%2Be68nCdPFQwYKlp8nJ0spRsY%2BzO3iRxEIIlMMe8PY6qzDpCRs2tjprpeVnagUbZWipCAzYqadipcKHCmP%2BPOZlzwuvHTA7hwTWP5yDQ1qTARYm%2FEMWJukV0DfPRgWpE81lYS4p8c6OnUu1w635DTJFvRWfzEHCgrEd7G5Nz61FFctVXjepxphUUEDDtWsSsqCg%2BlbUFKtxssB%2Fdr9irckh89VntpEmTQBJnqwiJ0w5YGC%2FLyzVbLNn28z1XXg3GuccF9lP3DlTHNdb5m8rEPKBR0EytembcUKJBkM9XGoEo9ATewPJebs8Meit2nm69cpIJ0fGmQI1CXhAShihT5fguy2XcrEL%2FaH6VuXLGXqGnbB2EjCXDQmQxEycyHDo2IxVR5EPIcRMp9c3lm5WQTKWkDmQNx%2BFE6oULJd%2BpXiTM%2BkX3wpouvrUl6qALscQGO1HVVlRxJLVae35W6vMeIq7WRUddQuNcDLXmbvzYDrY4NMc4iUwi57PyQY6pgH1TlOY%2F8cLBcE6zfPNncV%2BtIHddmbuxsTNVupIGNk9WprnVpszEP%2BK4mm%2BcSPVRJNPa4naOuCGH6K9YIn0KN6oaO7m%2BlMEoenTlacddmuuqfQUrij%2B5bXFcP3vWuQT7bfaq6VhcxXzzFJZ91JIqsHM539tM5EJrx3vJmZrXIgyEFvv3gugHg5iUX496Tw2ckXpxW7krru%2Bmt6Zh2bl3AWnbMpJ8UlX&X-Amz-Signature=68e836213b7ee066241d888075320cfa2070edfb77d2ee10d561ac3ffb3481ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
