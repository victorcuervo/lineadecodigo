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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2BT26QQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWvjhUJhCp45If35nXhAU7%2FiPLZSZaGNjl%2BpPoUQl8dAiEA2PjLRX0GRzDFQt5UCi2g5%2F1gvod2Xmbzi%2Bi3huC17Ncq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDM9e9G1BId9Fk4RM%2BircAz7Q%2FRJUrdGSRLMlhh4pyPXDkZ8mJogSFmH2ZrPmron8RjDGWPHt%2FTI4a85qYEk5KdHkKIX6gcq7ttHDPisSzGsEZp8lFET9eJdbisYPnz0Iz2chR3MQfHTS0xt%2BSnZWeuTsDn%2FcfTme1zhlIwZ6a8Kmx3kb%2BS4k7QKHHEENcEdjFdiEzHBCpSkaBb3SrCSoyyu%2BAcygZkXPCL28xhqjs%2BiIRxLnH%2BybjrdaXkOUL2nY982vENeN4472zX3HEmuIICtgjaW8gP3vDxKsYsdmcwVLbpv3lasLV0ORlDk%2Fct%2F1VYPmYsWu7MSyvALbkYQCcbhuq3ofBSlsfFT2NEuSAjkozmeQMSzyR4i2rmoTZzdmTa%2F%2BeVn4YcPFWcdrsxaI0KL8QMZ51f4v0sNADA4zhJor8UW%2B5NGSjKxZMvH25sZCIxkwLhgyhyDibcA6oG5oGGFYwC8YKY1Dcudhw9ObNbHkW7sQ28%2FDQNhCXVX5TK%2F6HzgeeDQH3iX%2F4oRfMVDOtzo7%2FazGGZBGWmDGAsYW4Bjf2JY9eI%2FB0kmuZGPYl%2B8p3PVyLOObxMxlnqBgz4u%2BzZucgH%2F7jFsjjfd1tGyTcMEP3ezu%2BJ2%2BmXquimIx2uJzzlFZQBq3Di%2FKgCEsMJTHisoGOqUBXoTVxK%2F2R16KQQphMSO5378rxvqydjkNmu%2FWHkNV8pmCTtSHphM4u6Eviyt47oGizRYMgpku3J5yPjsM1P5c0HXKBjquwWSQBA4%2FJAqrBnQCdhSgzw54F7HcKm7cj0kcAqzyYedEwEPDGf%2FxbmEY7SaXUWrRgAh8Vis0%2FO0nSX83fR7LoD81ek0Qf%2FtGB53yfgi6AheIwoSQ0oOfh0BCbSnUhck%2F&X-Amz-Signature=f7bbd2492562b1fb135d76b896294817115264872b893233c544691dc9c6ec2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2BT26QQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWvjhUJhCp45If35nXhAU7%2FiPLZSZaGNjl%2BpPoUQl8dAiEA2PjLRX0GRzDFQt5UCi2g5%2F1gvod2Xmbzi%2Bi3huC17Ncq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDM9e9G1BId9Fk4RM%2BircAz7Q%2FRJUrdGSRLMlhh4pyPXDkZ8mJogSFmH2ZrPmron8RjDGWPHt%2FTI4a85qYEk5KdHkKIX6gcq7ttHDPisSzGsEZp8lFET9eJdbisYPnz0Iz2chR3MQfHTS0xt%2BSnZWeuTsDn%2FcfTme1zhlIwZ6a8Kmx3kb%2BS4k7QKHHEENcEdjFdiEzHBCpSkaBb3SrCSoyyu%2BAcygZkXPCL28xhqjs%2BiIRxLnH%2BybjrdaXkOUL2nY982vENeN4472zX3HEmuIICtgjaW8gP3vDxKsYsdmcwVLbpv3lasLV0ORlDk%2Fct%2F1VYPmYsWu7MSyvALbkYQCcbhuq3ofBSlsfFT2NEuSAjkozmeQMSzyR4i2rmoTZzdmTa%2F%2BeVn4YcPFWcdrsxaI0KL8QMZ51f4v0sNADA4zhJor8UW%2B5NGSjKxZMvH25sZCIxkwLhgyhyDibcA6oG5oGGFYwC8YKY1Dcudhw9ObNbHkW7sQ28%2FDQNhCXVX5TK%2F6HzgeeDQH3iX%2F4oRfMVDOtzo7%2FazGGZBGWmDGAsYW4Bjf2JY9eI%2FB0kmuZGPYl%2B8p3PVyLOObxMxlnqBgz4u%2BzZucgH%2F7jFsjjfd1tGyTcMEP3ezu%2BJ2%2BmXquimIx2uJzzlFZQBq3Di%2FKgCEsMJTHisoGOqUBXoTVxK%2F2R16KQQphMSO5378rxvqydjkNmu%2FWHkNV8pmCTtSHphM4u6Eviyt47oGizRYMgpku3J5yPjsM1P5c0HXKBjquwWSQBA4%2FJAqrBnQCdhSgzw54F7HcKm7cj0kcAqzyYedEwEPDGf%2FxbmEY7SaXUWrRgAh8Vis0%2FO0nSX83fR7LoD81ek0Qf%2FtGB53yfgi6AheIwoSQ0oOfh0BCbSnUhck%2F&X-Amz-Signature=01488f733a94ccc31553be7bcecc17e7d42526cce7c4e4a04aece31672c3364f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
