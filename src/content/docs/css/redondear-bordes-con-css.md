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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WLTIIKO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC09DkkVj9uG52YhNnR0uwEB008fzeRh5Y4t3V8WLj%2BRgIhAOV867ILakvy9%2Fkmn8ONLtj8iid1NmrtvNFAX5qZYg2aKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBNMwHuZmksIOtjDMq3AMyDROWFkA2dFHhy7iXeUZlo2qUhsDyfM%2BaOHt2329vQ1fRVZCuWaiXYjbBIWkr31Y78RwnkU5dKCx9dvX308f6PpsiMPFvzcaxit9W%2BZ8rdMP62CX4JelP9Zt%2BOyNxkvOqI3b8MEPOmp2%2BdYu01lEIosJYka9jeQdGAJLEaP0JtBcjjK7wetkxL38Kj6fWUF1TYcSWKfg5IbZwiVqs6VHLwvah6vacUOKyiCNluopnX%2FTsrY1FIzmuHPnCE79auaakNjzv1O7LXVebZ5b4jIggftLR3RHOOAs%2Boa8egdjhQMCNSjcQNKBAn93diZv1CmR9lW8FTX0aLry5gmeLnfeRRMoqDGoJMjrKOOkPXC755U%2FKxruALEqtzWfLL7lFtofCeFSqyMXlgnqVIVpWrPQLdQn%2BajQeXnfaqjGkgqJVfxzcSQYx1k6oQjx7NlsLcloiMcdH%2FCWwaazAvI5RITcBhW%2FlGtiz0oWdMWw69pp20RqlYzxqko%2BykvG6%2FtNn5v%2FsB9m9p%2BI5MCo7SSXjNnd3lhs3%2BEqvsk%2FfDONkkswcXdt6TEt3VG9O8gKy3aMbC6W0eUXa5enxaYYFHU2JKFOW%2FGDuVIZTdCIhXWRsp%2BlmcF6GzMNwChJrXqGiczDqo9TJBjqkAbpm6px8VeGcEM28H%2FhlcpRmAe%2FqT6cvvVnxrNGwTz5SfnwMFEfLwiFexqsD8OotfcAIuv226tXDaEmYqihUFjcjvJ30%2FZIgjO%2BdbQ2N32BM5MwDE%2BS8DDjBPnYpnHeSmsa07NMeU2hQSbZWkn8hcFjnuVsSmExvrx5fvXPkHb2XlzitdZ359RPVYzlHtneynBASMv4%2BbWPBy0XU9fZERy9j9mid&X-Amz-Signature=3b00e1349240d534404b59fb23a7eb0ca68584a6561c852833eccb49249af839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WLTIIKO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC09DkkVj9uG52YhNnR0uwEB008fzeRh5Y4t3V8WLj%2BRgIhAOV867ILakvy9%2Fkmn8ONLtj8iid1NmrtvNFAX5qZYg2aKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBNMwHuZmksIOtjDMq3AMyDROWFkA2dFHhy7iXeUZlo2qUhsDyfM%2BaOHt2329vQ1fRVZCuWaiXYjbBIWkr31Y78RwnkU5dKCx9dvX308f6PpsiMPFvzcaxit9W%2BZ8rdMP62CX4JelP9Zt%2BOyNxkvOqI3b8MEPOmp2%2BdYu01lEIosJYka9jeQdGAJLEaP0JtBcjjK7wetkxL38Kj6fWUF1TYcSWKfg5IbZwiVqs6VHLwvah6vacUOKyiCNluopnX%2FTsrY1FIzmuHPnCE79auaakNjzv1O7LXVebZ5b4jIggftLR3RHOOAs%2Boa8egdjhQMCNSjcQNKBAn93diZv1CmR9lW8FTX0aLry5gmeLnfeRRMoqDGoJMjrKOOkPXC755U%2FKxruALEqtzWfLL7lFtofCeFSqyMXlgnqVIVpWrPQLdQn%2BajQeXnfaqjGkgqJVfxzcSQYx1k6oQjx7NlsLcloiMcdH%2FCWwaazAvI5RITcBhW%2FlGtiz0oWdMWw69pp20RqlYzxqko%2BykvG6%2FtNn5v%2FsB9m9p%2BI5MCo7SSXjNnd3lhs3%2BEqvsk%2FfDONkkswcXdt6TEt3VG9O8gKy3aMbC6W0eUXa5enxaYYFHU2JKFOW%2FGDuVIZTdCIhXWRsp%2BlmcF6GzMNwChJrXqGiczDqo9TJBjqkAbpm6px8VeGcEM28H%2FhlcpRmAe%2FqT6cvvVnxrNGwTz5SfnwMFEfLwiFexqsD8OotfcAIuv226tXDaEmYqihUFjcjvJ30%2FZIgjO%2BdbQ2N32BM5MwDE%2BS8DDjBPnYpnHeSmsa07NMeU2hQSbZWkn8hcFjnuVsSmExvrx5fvXPkHb2XlzitdZ359RPVYzlHtneynBASMv4%2BbWPBy0XU9fZERy9j9mid&X-Amz-Signature=c4d89563205f48741a1462eff552184bd1e7a9d513ddd072bcec23911d9d152d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
