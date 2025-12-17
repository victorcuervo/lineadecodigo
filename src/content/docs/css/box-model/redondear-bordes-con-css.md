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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNFDBYDV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpQUveBN2NkZiWjtYf%2BpSmkZknbTXHqkmcgh2DhVnIPAiEA%2BYFRonDscRd2NzfZx3yyFfyqSQKUj2ELrjtandc17p0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdoG%2FoQ9dQ1eu2reircA7y%2F2%2BTcyzlYPZnV%2FdjKijDB2brBkDVyBzzIzhA6A7rLWfOuhX1qlaCHNoDzSy%2FPEkuVPKAJ3BnuArNUQ7VVyNoT8kPELRlOj%2FsOG6%2FKks%2Fkc5qc73Q88v5E%2FXSxRLH5VEFTWmwE8Y4s98f9l987cJnPKN%2Bv48ao37xtgMjOQ5S0QL11N6U%2F%2FS7fUS6908360EagCdObFZUtYsorEdQTDwplSehARCoEMsZk9gsluFb8lsS2GMLU4QyHua2sAgz44YCyOoZfBOK0hfWFPh3GSdRIExHUC7CdvM9hPmPOMBKefq0lPDzHcjuHJ8Z0ngVuLj4L1kid0j3SKAh4K27PLn06U%2B5IiS%2Bahtgov%2BxO2jzDxHemfzoNHkuyodp3hKcvx3GZkC0nn1XdPP5OX4q1SeCNCNVhS63ym4g%2FxEafn8NkmSVyp1lf6WvzcuU9%2F90ElqcpmPitr7shebHPVVTeA8wVmQTLo%2Bw5IdzGSt1ZO1EM%2FeTEiK0%2B63SWqm4G80R5eri9GuUrYGtiAQD0NA%2BTr8Om68%2Fg3poZO8YIq2adG2WmqJYYFDKXCe09Uh5hXdg8z32F87bg7%2F5lbogLU3h8JAIt6njfTxZDb%2Fz4pTcHyC5wzVu4VYg7Or32eoYOMIyfi8oGOqUBFxBxW%2BtVIlZpjmmBju%2FTftb%2F%2BfMltYFmqw%2FerTEDydEQzf1oODucY%2FODYtXUiTxz%2FIlankIXwXraIdhxGAP7QzoHgNDLP6NWUbldUWgfGczZA%2BZkzH8bq9xsOBCvCveuyMpvrHat4U2%2BHWiNE5lTPsebfqm1zAFTVJtmt7SKRzu%2FVfRRgflhazb1St7CnsmmuiOmL2LoswI18mXRWPCFkuaFDT0Y&X-Amz-Signature=e4ccb697aafd0c4d832ec4f4b3d7cad99904f6ee23600972608e07e6e1f26de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNFDBYDV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpQUveBN2NkZiWjtYf%2BpSmkZknbTXHqkmcgh2DhVnIPAiEA%2BYFRonDscRd2NzfZx3yyFfyqSQKUj2ELrjtandc17p0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdoG%2FoQ9dQ1eu2reircA7y%2F2%2BTcyzlYPZnV%2FdjKijDB2brBkDVyBzzIzhA6A7rLWfOuhX1qlaCHNoDzSy%2FPEkuVPKAJ3BnuArNUQ7VVyNoT8kPELRlOj%2FsOG6%2FKks%2Fkc5qc73Q88v5E%2FXSxRLH5VEFTWmwE8Y4s98f9l987cJnPKN%2Bv48ao37xtgMjOQ5S0QL11N6U%2F%2FS7fUS6908360EagCdObFZUtYsorEdQTDwplSehARCoEMsZk9gsluFb8lsS2GMLU4QyHua2sAgz44YCyOoZfBOK0hfWFPh3GSdRIExHUC7CdvM9hPmPOMBKefq0lPDzHcjuHJ8Z0ngVuLj4L1kid0j3SKAh4K27PLn06U%2B5IiS%2Bahtgov%2BxO2jzDxHemfzoNHkuyodp3hKcvx3GZkC0nn1XdPP5OX4q1SeCNCNVhS63ym4g%2FxEafn8NkmSVyp1lf6WvzcuU9%2F90ElqcpmPitr7shebHPVVTeA8wVmQTLo%2Bw5IdzGSt1ZO1EM%2FeTEiK0%2B63SWqm4G80R5eri9GuUrYGtiAQD0NA%2BTr8Om68%2Fg3poZO8YIq2adG2WmqJYYFDKXCe09Uh5hXdg8z32F87bg7%2F5lbogLU3h8JAIt6njfTxZDb%2Fz4pTcHyC5wzVu4VYg7Or32eoYOMIyfi8oGOqUBFxBxW%2BtVIlZpjmmBju%2FTftb%2F%2BfMltYFmqw%2FerTEDydEQzf1oODucY%2FODYtXUiTxz%2FIlankIXwXraIdhxGAP7QzoHgNDLP6NWUbldUWgfGczZA%2BZkzH8bq9xsOBCvCveuyMpvrHat4U2%2BHWiNE5lTPsebfqm1zAFTVJtmt7SKRzu%2FVfRRgflhazb1St7CnsmmuiOmL2LoswI18mXRWPCFkuaFDT0Y&X-Amz-Signature=9d4f812cce86e8385378f52019e15aded7c98f6946c8de3139f2f379486d2562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
