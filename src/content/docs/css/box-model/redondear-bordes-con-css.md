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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRLGFQV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL3eKJy7g1P78PtLJoQ%2BJjYlDm6gLC907AdHVpkGLtZAIhAObrBwIXxF%2FvWYuKowTwXqdmHosWUhIUjQOPuaaFD3K5KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLmDWzP4YYo9kyPaUq3AOwawnGEiFQdhEa%2FexUF%2FENOWnPmHY1RwOBuk9GdJFwJTi21AoWRD3KX08p21hz4%2BcejRPW8gxuodRvv5VyA9RlVFsyiltOLWTkZejJEpFXJcTeXeUOSX1BdIaQ12rPAeoCI%2ByLaahFaKxDzlsvW3tef0cy3%2B7Gqptb0CCpSdFims2kFQcyeW6MZeb%2B15ePMTP18z4OqGGyPMYCTcgcLraKnuL%2BvnNG6Ut5C6g%2F1O1lh6ArQ%2BnuJkVM3HOujSMxypn13Rsg2%2FasvbxP0IUu7PihVMiHqvbYTUgNfOZTd40yTF8C4eJ0zBzyAJcpsENLv8UirP3KXog7ac5GvAsMKq6q8GB3SEY2kDpaMoVbE%2FoGPH670wcJ1Tvjlequpou9JzI4MPIh72on0g89Axnazn8pddG%2FFa7xj76kLPr17QSsf9SuAywzoT0IxmUqZ4U16F9z%2BXOdI3%2B99Mlhl8iyUSbfqzlm7MRYJqvhYtEWxNcwrnGbshySBAXp%2BCs%2BgzA6%2BoZiHZxMnbwhWQRR9dpJofgGnzKeXEXENxEsP80r1VY0bXWiB3XYJZlIvMjMMDxrUYhTRaVrTYm%2Bql7AeR63IeKA7HcMTR5uAOuGswbU4QvF6ds9Czo87LF9G1SpJDDz%2F4rKBjqkAR6%2FhMTvUIwkRdG9Kmy12jRnXXHJBSRhAjcpQa9VFaCkFMaI4TlE7Vo8VrIWtG1Gp%2FTwe6KOUc3phOQYr2QMFWHAI8rjaR3DlL3t17a9WlyTb9WqRvTMFLGSuXnWFHxpw3PKO6lq8FHwhWjuWRzEBhxE8vuE%2FK2i26ADas059uU3TCMZ1hv3niKdvwasS3QmmjQbyHBt02Nbal9xD5uTZX7PVdbf&X-Amz-Signature=737a87c8cb7f8d2c9ef9ef9753bc1fe47dc79c87e69221e2b150d24d4da50dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRLGFQV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL3eKJy7g1P78PtLJoQ%2BJjYlDm6gLC907AdHVpkGLtZAIhAObrBwIXxF%2FvWYuKowTwXqdmHosWUhIUjQOPuaaFD3K5KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLmDWzP4YYo9kyPaUq3AOwawnGEiFQdhEa%2FexUF%2FENOWnPmHY1RwOBuk9GdJFwJTi21AoWRD3KX08p21hz4%2BcejRPW8gxuodRvv5VyA9RlVFsyiltOLWTkZejJEpFXJcTeXeUOSX1BdIaQ12rPAeoCI%2ByLaahFaKxDzlsvW3tef0cy3%2B7Gqptb0CCpSdFims2kFQcyeW6MZeb%2B15ePMTP18z4OqGGyPMYCTcgcLraKnuL%2BvnNG6Ut5C6g%2F1O1lh6ArQ%2BnuJkVM3HOujSMxypn13Rsg2%2FasvbxP0IUu7PihVMiHqvbYTUgNfOZTd40yTF8C4eJ0zBzyAJcpsENLv8UirP3KXog7ac5GvAsMKq6q8GB3SEY2kDpaMoVbE%2FoGPH670wcJ1Tvjlequpou9JzI4MPIh72on0g89Axnazn8pddG%2FFa7xj76kLPr17QSsf9SuAywzoT0IxmUqZ4U16F9z%2BXOdI3%2B99Mlhl8iyUSbfqzlm7MRYJqvhYtEWxNcwrnGbshySBAXp%2BCs%2BgzA6%2BoZiHZxMnbwhWQRR9dpJofgGnzKeXEXENxEsP80r1VY0bXWiB3XYJZlIvMjMMDxrUYhTRaVrTYm%2Bql7AeR63IeKA7HcMTR5uAOuGswbU4QvF6ds9Czo87LF9G1SpJDDz%2F4rKBjqkAR6%2FhMTvUIwkRdG9Kmy12jRnXXHJBSRhAjcpQa9VFaCkFMaI4TlE7Vo8VrIWtG1Gp%2FTwe6KOUc3phOQYr2QMFWHAI8rjaR3DlL3t17a9WlyTb9WqRvTMFLGSuXnWFHxpw3PKO6lq8FHwhWjuWRzEBhxE8vuE%2FK2i26ADas059uU3TCMZ1hv3niKdvwasS3QmmjQbyHBt02Nbal9xD5uTZX7PVdbf&X-Amz-Signature=541fe6c92ed6a1d08836b3a93eef4ef956ab41230b94b7e66a2b87882f5d5608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
