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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4643LIU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx0cMNHMvftd%2BRpmKYaqwTqaHXw2rIVwZl%2F90k662%2FTAiEA4H9g36sdQUBBWAX9q2YXebjMRPmGF%2BplkPiPgsebJyQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMirj4YNrI0%2BMybIpSrcAwEN9M4b2lLI3whLUrohtuuC1UZCvWmJ5acKfjtcH8cV9oezGatzomipkhBkieiggKPGj1sSBNFLn14%2BlGcO6nps%2F5Abhi%2FHtYKkJKDvzKGuM%2FWTj1BIZyWMXSNqmpObQ62aIZOM8Q9TdHPLBa7V4j1GjAhnZlZi0At2iJrd4xUcFKUtv7vJf0Xac2o0XEuSqLV%2BEVSnFKmWyLMzF269aNU3vgF8qSWHSINGsUI5OfXIv4lwIu0GuAQ03mhAQwpKUKqnZ051hMnzDSVCZ5JSKr1ft2FRbiQPAffe5p2%2B5DLgD4iC%2FRrA8YI9RN859un5oBDJnfG%2BQuDOxzh0%2BZGdAGbIXXNP6IlcEkqvD%2FXC9xI%2BJ3xJOZvg9ozrh4KXknYukmxFSyow1otr2U%2FoxGlH6o5uY2WH%2FxDm53GHAVtCduo12NUtxwzt1pmSEi2Bnz3xfnN%2BxbakNTd7nZKY7%2FGXOjTE1eOC4x4vLzNq41fQd3hDJi001q2a2dqwMgAzYIA5tKmxiVEiLIYazB8sAZSwjwNGoVEuv4uQjKwX21%2B5HJ0adiNYQRpeG4cFajollEuXaVEHtr%2B366%2F5Uk0FZleFQdO9LQKwJ2MtOQUBQoLgr%2FqppxM4jh0vbPml5V03MIuJzckGOqUBTlzLhWwJ0pSYlIp%2Ba63PB0J0fUBGnDLIueTU17YAzHCaLXFZRE5wRLzEbCzeGO%2BIuDANIC%2BdGVJmPHJqgptVKEGDMGy%2Bm1qSfv5aeD7bnvx3CCflN%2Fqms4kCmjOpoKj9n9%2BTIw9G4%2Fq7Ll5%2FVCy2X5biFwd61nSqg%2BOxPSISFWxM7lNuD%2B8ZQVg9hvTYYlQtDg6%2FktsaTFctF9MMXSXkV5I3PJhM&X-Amz-Signature=bc2799e3609c46c12ff54a86b1a098805689974a0bba3fb8ea0668f13196a115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4643LIU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx0cMNHMvftd%2BRpmKYaqwTqaHXw2rIVwZl%2F90k662%2FTAiEA4H9g36sdQUBBWAX9q2YXebjMRPmGF%2BplkPiPgsebJyQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMirj4YNrI0%2BMybIpSrcAwEN9M4b2lLI3whLUrohtuuC1UZCvWmJ5acKfjtcH8cV9oezGatzomipkhBkieiggKPGj1sSBNFLn14%2BlGcO6nps%2F5Abhi%2FHtYKkJKDvzKGuM%2FWTj1BIZyWMXSNqmpObQ62aIZOM8Q9TdHPLBa7V4j1GjAhnZlZi0At2iJrd4xUcFKUtv7vJf0Xac2o0XEuSqLV%2BEVSnFKmWyLMzF269aNU3vgF8qSWHSINGsUI5OfXIv4lwIu0GuAQ03mhAQwpKUKqnZ051hMnzDSVCZ5JSKr1ft2FRbiQPAffe5p2%2B5DLgD4iC%2FRrA8YI9RN859un5oBDJnfG%2BQuDOxzh0%2BZGdAGbIXXNP6IlcEkqvD%2FXC9xI%2BJ3xJOZvg9ozrh4KXknYukmxFSyow1otr2U%2FoxGlH6o5uY2WH%2FxDm53GHAVtCduo12NUtxwzt1pmSEi2Bnz3xfnN%2BxbakNTd7nZKY7%2FGXOjTE1eOC4x4vLzNq41fQd3hDJi001q2a2dqwMgAzYIA5tKmxiVEiLIYazB8sAZSwjwNGoVEuv4uQjKwX21%2B5HJ0adiNYQRpeG4cFajollEuXaVEHtr%2B366%2F5Uk0FZleFQdO9LQKwJ2MtOQUBQoLgr%2FqppxM4jh0vbPml5V03MIuJzckGOqUBTlzLhWwJ0pSYlIp%2Ba63PB0J0fUBGnDLIueTU17YAzHCaLXFZRE5wRLzEbCzeGO%2BIuDANIC%2BdGVJmPHJqgptVKEGDMGy%2Bm1qSfv5aeD7bnvx3CCflN%2Fqms4kCmjOpoKj9n9%2BTIw9G4%2Fq7Ll5%2FVCy2X5biFwd61nSqg%2BOxPSISFWxM7lNuD%2B8ZQVg9hvTYYlQtDg6%2FktsaTFctF9MMXSXkV5I3PJhM&X-Amz-Signature=41d696364c7477e4949d65a4f7a56e3aead7db795fa15264ae65816626347f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
