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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67ZPD75%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGukIFRoUZ433P697s8Shayi0HTkNLauDPeIueb%2FuT%2BVAiEAwz7DBy1fBKebaPsWbPbkHCvlxWV5XnsXSxEgGkbrzKMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDhyuwLqV1KwFd8qFircA%2F2je7%2FY1%2Four%2FaNUF68qtBxU%2FdD8qnbQtZm0PsVFONEp6R0PEurQj%2BErzUYxlEd%2BK4ti6brKfObT5tIdbI1PsFGRINVwm%2FXIvJ7y3Gri8xthhLlagFh7iacPahga9Z4WXYWSv2iA6Foioc0oRdusRCvOhwDFFvygVsNIG9ONyKMpSDtDQ77ozjcT9i24E%2FxL9QGdtVL%2BrJoUvdzGkBpJx7MFqubnTbYp89oY6e56FL25qAxq8LIhsFA2AK8%2FyHOPNfQ2BPejiJV1yyEknRq%2FwU0IlzbyMW2O6FkjXBr9%2BNgpPoVP%2BLWFKZrgPLAXiDJ8bDIVwimiNrDgHCKgeBr2MmWHMbNCaCEu96BV%2FWx9Y4S4DXOoqQnN7joItkHQki6j1xWIf9W29eplBFKks07kDK2xIuhP3QJx9mNHtXNz4OjoPOmlkk59V3hKUgsRJKwkeAbAGgxHPnN6hzLmO0Hoa61M%2FA3gjxn4%2BpeCD1p1FGxH6KNxzf%2B7F2SgR%2BC0bsLJ%2FsrwL8tGf3aKNMQOPXY8N6iOKrutGmfmcBGdu1uSGjt42Nwq2bKjbGtIcEKeXJXWsiuNvEA4qJKF2esNECierKEY0PJetOffu5IjdFC9RBTab68CgC31Ds8VEeXMPSLyMkGOqUB0cIO3cnVjyHL1%2BgNmnt6GCLrhXvBfezZ637FM%2F886muDiHemw%2Btu9m9T08d1UrnJB49Dvec2gnrWwpec5ly9WiiSBqAmzITRJqSasHR1SNM9tlNgcFDvOJOhh4r9DQGCaObwr%2Br9QrEpfIY0rSFqBOrHFyiyU8OAxBxbBeh0cZoNfP8lTtnFsyqXMOLIU3lr795tx6CPrz4KAgaf58qqB0PrcBwE&X-Amz-Signature=bcdd90d71b0d7a81b80eec86775da74b7dbf2e51bf22649cf5b18a8dd61bf25e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67ZPD75%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGukIFRoUZ433P697s8Shayi0HTkNLauDPeIueb%2FuT%2BVAiEAwz7DBy1fBKebaPsWbPbkHCvlxWV5XnsXSxEgGkbrzKMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDhyuwLqV1KwFd8qFircA%2F2je7%2FY1%2Four%2FaNUF68qtBxU%2FdD8qnbQtZm0PsVFONEp6R0PEurQj%2BErzUYxlEd%2BK4ti6brKfObT5tIdbI1PsFGRINVwm%2FXIvJ7y3Gri8xthhLlagFh7iacPahga9Z4WXYWSv2iA6Foioc0oRdusRCvOhwDFFvygVsNIG9ONyKMpSDtDQ77ozjcT9i24E%2FxL9QGdtVL%2BrJoUvdzGkBpJx7MFqubnTbYp89oY6e56FL25qAxq8LIhsFA2AK8%2FyHOPNfQ2BPejiJV1yyEknRq%2FwU0IlzbyMW2O6FkjXBr9%2BNgpPoVP%2BLWFKZrgPLAXiDJ8bDIVwimiNrDgHCKgeBr2MmWHMbNCaCEu96BV%2FWx9Y4S4DXOoqQnN7joItkHQki6j1xWIf9W29eplBFKks07kDK2xIuhP3QJx9mNHtXNz4OjoPOmlkk59V3hKUgsRJKwkeAbAGgxHPnN6hzLmO0Hoa61M%2FA3gjxn4%2BpeCD1p1FGxH6KNxzf%2B7F2SgR%2BC0bsLJ%2FsrwL8tGf3aKNMQOPXY8N6iOKrutGmfmcBGdu1uSGjt42Nwq2bKjbGtIcEKeXJXWsiuNvEA4qJKF2esNECierKEY0PJetOffu5IjdFC9RBTab68CgC31Ds8VEeXMPSLyMkGOqUB0cIO3cnVjyHL1%2BgNmnt6GCLrhXvBfezZ637FM%2F886muDiHemw%2Btu9m9T08d1UrnJB49Dvec2gnrWwpec5ly9WiiSBqAmzITRJqSasHR1SNM9tlNgcFDvOJOhh4r9DQGCaObwr%2Br9QrEpfIY0rSFqBOrHFyiyU8OAxBxbBeh0cZoNfP8lTtnFsyqXMOLIU3lr795tx6CPrz4KAgaf58qqB0PrcBwE&X-Amz-Signature=3ad54d01c2475d2a92ac65d039028d9d61a32ae31181da1664dba9d27b043b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
