---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUEKZ7IQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEFhLhh%2FfM2CcIUC1iwpMhiEyOPKCnIMSOEx0X8Mt0lgAiAFqYzAtyh2pGyNrLO8J8woEBr6K6BIEgBsBXPnc1nV%2FCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMWj2ffrHucNTV3AbzKtwD68anXKmcWhSnQ9jxnTqeV8ATkkVWQSsdGXO0RIVnjPJrSAyr%2BVUWPFiQN7EcTC2psSMmzqIP%2FDuY0wZNN8zt92h3FLjorFncSEcGRw9Ai2EEoA%2BSjMTIyX5iSaF8EHynlGJEapL%2Bp1Y0xlrQdwTt1t%2BRlu%2BVF%2B98EQ%2BYe4eoEgq9aycSSdrnPgfIBshIyqGYLwBnKOgvyf36MCjKUdQZYFoPZbdlsqxP%2F%2FzB6vW9GfWzGydj6Dar8p2C8z6zEXFq0nD5MdzNOltyt%2BDpyhwnOvRDkEzQvDY%2BCU6bIH2wZR2hsImUdWg25%2F2AovQsGptN2cCqFwPWacvxO42ZTkvywD55K5kUS95CpanA3ypBqDx5spCE1j9acyOuVz%2BNStMMyBoLxbRDWl2LgReOVplr3tVGjsFmvd36zXWX3%2B0BGmwmXsP0dGEwBCc0xaziTGoclOWtJwKwEFTs7%2FZmX1sXctJg3AfisStyioA31Uy8r%2F8jVUb1F2t3%2FB6dPMd6CaH1%2BrenEPtVQAs%2BOeTTOF65n9TzJyyvsE7Lsb1cM8m7WpB7RzjM6WyW%2FBCmH%2Bdxcfpz4jqzJqSnuvGDiQfJ1IvGz%2FQ%2BEsq5SDmHluTf066FbVLtFi3RPJsROElTDqgw44XFyQY6pgFVOqH1OrcLXUJUYDrAQukcwAB5rUXAzD1xgvbolSA8n1Y9Yc1FcWaFQ5n80zNl9T%2B3AT8NStvqdOKtsW2MiqrAveX3ub3rRCpRF%2BcTcpvkdUkOr1X84c1y0a2hgPDedtbD0lN0q7O32n9peB5zhi6RglSNdmiTvPfj6NG3D5mwMLCdZnBAr60KW8WxNJlo6jnek%2Bdk%2FgfValpP7QX%2BuaAUQ%2FRBxh4S&X-Amz-Signature=3f500007644ffe4a32520f6bee3378009f0405020a4a0bd6e3e5631739eca09f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUEKZ7IQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEFhLhh%2FfM2CcIUC1iwpMhiEyOPKCnIMSOEx0X8Mt0lgAiAFqYzAtyh2pGyNrLO8J8woEBr6K6BIEgBsBXPnc1nV%2FCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMWj2ffrHucNTV3AbzKtwD68anXKmcWhSnQ9jxnTqeV8ATkkVWQSsdGXO0RIVnjPJrSAyr%2BVUWPFiQN7EcTC2psSMmzqIP%2FDuY0wZNN8zt92h3FLjorFncSEcGRw9Ai2EEoA%2BSjMTIyX5iSaF8EHynlGJEapL%2Bp1Y0xlrQdwTt1t%2BRlu%2BVF%2B98EQ%2BYe4eoEgq9aycSSdrnPgfIBshIyqGYLwBnKOgvyf36MCjKUdQZYFoPZbdlsqxP%2F%2FzB6vW9GfWzGydj6Dar8p2C8z6zEXFq0nD5MdzNOltyt%2BDpyhwnOvRDkEzQvDY%2BCU6bIH2wZR2hsImUdWg25%2F2AovQsGptN2cCqFwPWacvxO42ZTkvywD55K5kUS95CpanA3ypBqDx5spCE1j9acyOuVz%2BNStMMyBoLxbRDWl2LgReOVplr3tVGjsFmvd36zXWX3%2B0BGmwmXsP0dGEwBCc0xaziTGoclOWtJwKwEFTs7%2FZmX1sXctJg3AfisStyioA31Uy8r%2F8jVUb1F2t3%2FB6dPMd6CaH1%2BrenEPtVQAs%2BOeTTOF65n9TzJyyvsE7Lsb1cM8m7WpB7RzjM6WyW%2FBCmH%2Bdxcfpz4jqzJqSnuvGDiQfJ1IvGz%2FQ%2BEsq5SDmHluTf066FbVLtFi3RPJsROElTDqgw44XFyQY6pgFVOqH1OrcLXUJUYDrAQukcwAB5rUXAzD1xgvbolSA8n1Y9Yc1FcWaFQ5n80zNl9T%2B3AT8NStvqdOKtsW2MiqrAveX3ub3rRCpRF%2BcTcpvkdUkOr1X84c1y0a2hgPDedtbD0lN0q7O32n9peB5zhi6RglSNdmiTvPfj6NG3D5mwMLCdZnBAr60KW8WxNJlo6jnek%2Bdk%2FgfValpP7QX%2BuaAUQ%2FRBxh4S&X-Amz-Signature=c93b4dd5909d49d29201b66fa76ba19ddf03c1d7e124d7f206af416c4acb7482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
