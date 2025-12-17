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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL263N6U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjpXtFgwOoxNKXam9K04uTACcF6Pj%2FRuRmSz%2B%2FCv4rlAiEA3tNgO%2FOBqaGswwRpmapDIJ1XWTMkI0GrX7xbLsxV%2FPgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDCZ8%2F%2BhgNVO6dHsORCrcA77Rjq7xIb8wGdOGynocVDzGw2oNxgPnmogI1J%2BJLtbOjNW9cUdJUC7B7fXFfH5Doz3jJ%2FhLcyiohpRCpMLZMFu0l3C507jr8xgq7BR5Glpcxhd5t0i9xf%2FL8Z4d4EOJ%2B5VxB3O2jdi1ZMbbDJ3MthSD2UrGCCoxb9mqtEP5DAr0A6VZmqvqO7flEjPrqLik7uEyxIIe2nxERw1xroh4H%2BaTyorJRlvIG67DrtdH1uj31qek3kT6tGypodatEv9Rj4SzacRz%2FY5fML9aDeDI4TVQw%2B9hGVBtPI0%2Fu9g4Ow9HVA29o9hgO11dfdzVBDKjAWsSBoXr8UfPxpE7xXVrmKW9IDCUZTXQfiERCMuGeDtsrdqj6ObYjal539iZ%2BuS7kZjlkrmK%2BLS2TyTWb4nUivItMe6OyHQdp3cpa24sMWOSLWkWJSDqUXRSchtZlQDiZSyJf%2BZttei53OLfzdTlNmgH2p3KCExnR%2B7ox6oBwNJtsJLUI9WyQM3%2Fl4bkK0iKOQ1Hvn5X7FD1bKyyIwTa1vgCvyiyx7HQ22pfF8u02e%2BtBTuzhn%2Fo5J6BVXIC%2BU9BrBK%2FJ1ONIIRCh4mwz%2FiAMnWF6dAoPiYn2TPhwrIVH9yEPhLWvvMtt3nSWKXxMOfFisoGOqUBf21NCDtcoFRDIuS12yWqRbAs6LIRX3i%2FZel%2FCokfrB5XLoUBLSgl%2BCKhAGLBmfvWAvJfZNL4%2BO7O9pKVcmtaa%2B6Pw%2BXNDrMOmHeok6IfLXEG3I%2FIKFM3n9M2a8PBF1EvttP3tbXryaSP3pjJ4RF4VR4DsvJ4fbBgItvSPCvwa3Ar699q0CiKVUQg36MDB6r4KSntbzuqQagHT7eHiu1rKN%2BGtPCT&X-Amz-Signature=5f17b274ce447f8c67bf2445da4d4acaaf9114edd44f14fe7989055ecaf9a177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL263N6U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjpXtFgwOoxNKXam9K04uTACcF6Pj%2FRuRmSz%2B%2FCv4rlAiEA3tNgO%2FOBqaGswwRpmapDIJ1XWTMkI0GrX7xbLsxV%2FPgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDCZ8%2F%2BhgNVO6dHsORCrcA77Rjq7xIb8wGdOGynocVDzGw2oNxgPnmogI1J%2BJLtbOjNW9cUdJUC7B7fXFfH5Doz3jJ%2FhLcyiohpRCpMLZMFu0l3C507jr8xgq7BR5Glpcxhd5t0i9xf%2FL8Z4d4EOJ%2B5VxB3O2jdi1ZMbbDJ3MthSD2UrGCCoxb9mqtEP5DAr0A6VZmqvqO7flEjPrqLik7uEyxIIe2nxERw1xroh4H%2BaTyorJRlvIG67DrtdH1uj31qek3kT6tGypodatEv9Rj4SzacRz%2FY5fML9aDeDI4TVQw%2B9hGVBtPI0%2Fu9g4Ow9HVA29o9hgO11dfdzVBDKjAWsSBoXr8UfPxpE7xXVrmKW9IDCUZTXQfiERCMuGeDtsrdqj6ObYjal539iZ%2BuS7kZjlkrmK%2BLS2TyTWb4nUivItMe6OyHQdp3cpa24sMWOSLWkWJSDqUXRSchtZlQDiZSyJf%2BZttei53OLfzdTlNmgH2p3KCExnR%2B7ox6oBwNJtsJLUI9WyQM3%2Fl4bkK0iKOQ1Hvn5X7FD1bKyyIwTa1vgCvyiyx7HQ22pfF8u02e%2BtBTuzhn%2Fo5J6BVXIC%2BU9BrBK%2FJ1ONIIRCh4mwz%2FiAMnWF6dAoPiYn2TPhwrIVH9yEPhLWvvMtt3nSWKXxMOfFisoGOqUBf21NCDtcoFRDIuS12yWqRbAs6LIRX3i%2FZel%2FCokfrB5XLoUBLSgl%2BCKhAGLBmfvWAvJfZNL4%2BO7O9pKVcmtaa%2B6Pw%2BXNDrMOmHeok6IfLXEG3I%2FIKFM3n9M2a8PBF1EvttP3tbXryaSP3pjJ4RF4VR4DsvJ4fbBgItvSPCvwa3Ar699q0CiKVUQg36MDB6r4KSntbzuqQagHT7eHiu1rKN%2BGtPCT&X-Amz-Signature=9e247822a514d3aa910435c6103b39d58290e48784695fc245f3a44e0e49f60d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
