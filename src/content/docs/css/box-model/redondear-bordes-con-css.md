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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D5JTD7E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiVjLBFK91dYqy%2FWQB4wjao2faUPwRYosEfMzxbBdYjgIgWnKg93GE2Vbx8jU7cgHIV6Tlra44C%2Fedmz0AJTkr8o4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNqfF3xvEsd%2FygKJqircA8GrCono0EivAyLTyoN0Y0IHkRQWUtaWaV3TFe7JFGhb3PbtufsklKQrkPSsY2LFdQMnbQIfKuBE40pcnGfsPSpwwpPgebIVJkUn7T5AGgd7pnA%2FvJgBh4zEjPxc8hJRbC4eS7H7bSu5WpEAHc07VrMxAF7DKfeYTUSR5TC4nhJ8nXg%2BZrreDGlrKo4CXBrJ9AmumX4nHdKVgtq1fTX2mnKk1kufcWJYJj9CdkD3FB%2B1bGg0lXGosE5EG6d8vWfbjY%2F7kbRBmEqSM6iJtPfm86G%2FoHkuHCu3C%2B1fZKbb2YdVMHMV6YTBb1x3MPgiBp0V3mfoyvgCAPct38MtZ8ucrkTPuJLsLh4EhKMWDKwBjs1L8XISVDYbZwJRr3MHGf%2FSpXSrFDoHJXHucUEPAVgwoYqI8mm6v%2BegyYa7zq5FKXyrogHMt8kVdrXMmiUyFP4NzouqJpTbRq3%2BqZmKO9xGAz4O4Nb74DW2pudvFhp7iWUsScx8A7PTAlNKG7Z%2FNkn4QvgmZjF%2FH3QLQMlUQx%2F80aGX4jVsr5zCaEr4aqMUYcCZzIpwqYTx6NhaAtHDV1eCu05iQcXS3fuMf701dohpK72INNjPZTm%2FgLTs0YEeWv1sCc8AF2fdUs6uy8cdMJm3icoGOqUBNIc20p6YqV7pijJf7qHhIJUd75qFbHt0xm9BSP7amSNC0dSquy8V%2BMBHl5%2F89piszYJmdMQqWVGI3GAaoBwdFJwoLsalg5uTMQv3rnNGtxl39QqcV8WLB%2FHoosmYmNw4WDJv%2FUVS6zmwNnXy8I8n8orFbArnIW8EGm73xPClB5PnbvDZSXEZDaaKMtbgaZcp4oRRVYP8uQYQ0H9AgYHrQcmKaYap&X-Amz-Signature=a978ac79aad57f45676ea7fb6036822ca8271ba76fd5d7a99ccb8ad58e80eb33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D5JTD7E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiVjLBFK91dYqy%2FWQB4wjao2faUPwRYosEfMzxbBdYjgIgWnKg93GE2Vbx8jU7cgHIV6Tlra44C%2Fedmz0AJTkr8o4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNqfF3xvEsd%2FygKJqircA8GrCono0EivAyLTyoN0Y0IHkRQWUtaWaV3TFe7JFGhb3PbtufsklKQrkPSsY2LFdQMnbQIfKuBE40pcnGfsPSpwwpPgebIVJkUn7T5AGgd7pnA%2FvJgBh4zEjPxc8hJRbC4eS7H7bSu5WpEAHc07VrMxAF7DKfeYTUSR5TC4nhJ8nXg%2BZrreDGlrKo4CXBrJ9AmumX4nHdKVgtq1fTX2mnKk1kufcWJYJj9CdkD3FB%2B1bGg0lXGosE5EG6d8vWfbjY%2F7kbRBmEqSM6iJtPfm86G%2FoHkuHCu3C%2B1fZKbb2YdVMHMV6YTBb1x3MPgiBp0V3mfoyvgCAPct38MtZ8ucrkTPuJLsLh4EhKMWDKwBjs1L8XISVDYbZwJRr3MHGf%2FSpXSrFDoHJXHucUEPAVgwoYqI8mm6v%2BegyYa7zq5FKXyrogHMt8kVdrXMmiUyFP4NzouqJpTbRq3%2BqZmKO9xGAz4O4Nb74DW2pudvFhp7iWUsScx8A7PTAlNKG7Z%2FNkn4QvgmZjF%2FH3QLQMlUQx%2F80aGX4jVsr5zCaEr4aqMUYcCZzIpwqYTx6NhaAtHDV1eCu05iQcXS3fuMf701dohpK72INNjPZTm%2FgLTs0YEeWv1sCc8AF2fdUs6uy8cdMJm3icoGOqUBNIc20p6YqV7pijJf7qHhIJUd75qFbHt0xm9BSP7amSNC0dSquy8V%2BMBHl5%2F89piszYJmdMQqWVGI3GAaoBwdFJwoLsalg5uTMQv3rnNGtxl39QqcV8WLB%2FHoosmYmNw4WDJv%2FUVS6zmwNnXy8I8n8orFbArnIW8EGm73xPClB5PnbvDZSXEZDaaKMtbgaZcp4oRRVYP8uQYQ0H9AgYHrQcmKaYap&X-Amz-Signature=d4bbddd7b38272991e78848d410d5b30b128ac269aae5128a8c1c284012a6ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
