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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGKJEWIQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIE0gJvT6aeNsHzmDXf7VYG9Tr3PNj%2BBh46hkbVxRh3jfAiBZ05wT6ef0bl7FDbLLiUG7C5S1Ia9hsvN9UvgqlNlP0Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMzYv4ErEmYmPs0udNKtwDvf%2BzZlHmt3D%2Fn3fF4%2FqH9iHmmEND06t6ncnUnTM20xgRNmLE5PUVvf8Q%2Bp2Fetwty8wdzcGUtqZRXIwjPiZ5HXDPL7%2Fw%2F85hrOZMas%2BskHA%2FepbbjLM2Ro%2B9gec9IzRlYcA28vO4pGu%2F%2BwGNmpGm6f03%2F647%2FSictdzndQslxOdFYyUoNNAE6xeikWMiwe24igAYsqbP6AROZOf7KiNv0%2BOeU8lkHGWPrQ%2B6ve4YQfR2wRL9nBipmLw4wYD2zsaEDbzId2W5xZYjb23DvqkMrOmKcJEG89u65LlMve5%2FTnsvtg9a7widd92AzySrrQ%2FArrgc0OXqWXeUGucRdylPKGNVRzH5JskOwGO84ZNlOhXz3MrXbeHzZTxHLyhjd%2BHipm2geV%2FFoIwA1u5MCi2RgAENgHfO14STBWWsUj5%2BmRvAKXMCV4MIYsx9gE9YrNGXROFl%2Bcxi1iveAQTP7m9FRnQ%2Bga7gLs169MaKeVejinR2zl0lY3zXV9Qe7Vg%2B5c%2FQO%2B4rdubkXL%2BLoxzOp%2F9%2FVZlr4DGsbOFkbKT2y5zQb8tvqR6Fmd3xD6e0heQLK4l1sFfybkV0Hw%2B2UaKCaRxanyXjsINwNzuY443durqkEPo4fTpOBX2SwAZ0%2BVcwipDEyQY6pgFPd60GZXE25UKWPUQB7BxZ9JlO8XJQA3TYkmivQEne8Ou351O4KV8Jebvk0NRxE1g7NpJZPxdM58VQhwcEKt4IBuLrjmcIkdDaKzhpY9gidOx1D%2BoJPASL5shUpwnd%2Bh4S2D7mL69wq7PPuRyXSepAHByk3fRXzszH715MZRnIp5iqfHjdK3NN2Kwbg4YFR6YqxMcHiq6qEK3kstlLIIizH1q9z1QD&X-Amz-Signature=b9fe373cadccb86733db4cb75779135a02ffe8b5f264e4a2b3c9eb6d169025d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGKJEWIQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIE0gJvT6aeNsHzmDXf7VYG9Tr3PNj%2BBh46hkbVxRh3jfAiBZ05wT6ef0bl7FDbLLiUG7C5S1Ia9hsvN9UvgqlNlP0Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMzYv4ErEmYmPs0udNKtwDvf%2BzZlHmt3D%2Fn3fF4%2FqH9iHmmEND06t6ncnUnTM20xgRNmLE5PUVvf8Q%2Bp2Fetwty8wdzcGUtqZRXIwjPiZ5HXDPL7%2Fw%2F85hrOZMas%2BskHA%2FepbbjLM2Ro%2B9gec9IzRlYcA28vO4pGu%2F%2BwGNmpGm6f03%2F647%2FSictdzndQslxOdFYyUoNNAE6xeikWMiwe24igAYsqbP6AROZOf7KiNv0%2BOeU8lkHGWPrQ%2B6ve4YQfR2wRL9nBipmLw4wYD2zsaEDbzId2W5xZYjb23DvqkMrOmKcJEG89u65LlMve5%2FTnsvtg9a7widd92AzySrrQ%2FArrgc0OXqWXeUGucRdylPKGNVRzH5JskOwGO84ZNlOhXz3MrXbeHzZTxHLyhjd%2BHipm2geV%2FFoIwA1u5MCi2RgAENgHfO14STBWWsUj5%2BmRvAKXMCV4MIYsx9gE9YrNGXROFl%2Bcxi1iveAQTP7m9FRnQ%2Bga7gLs169MaKeVejinR2zl0lY3zXV9Qe7Vg%2B5c%2FQO%2B4rdubkXL%2BLoxzOp%2F9%2FVZlr4DGsbOFkbKT2y5zQb8tvqR6Fmd3xD6e0heQLK4l1sFfybkV0Hw%2B2UaKCaRxanyXjsINwNzuY443durqkEPo4fTpOBX2SwAZ0%2BVcwipDEyQY6pgFPd60GZXE25UKWPUQB7BxZ9JlO8XJQA3TYkmivQEne8Ou351O4KV8Jebvk0NRxE1g7NpJZPxdM58VQhwcEKt4IBuLrjmcIkdDaKzhpY9gidOx1D%2BoJPASL5shUpwnd%2Bh4S2D7mL69wq7PPuRyXSepAHByk3fRXzszH715MZRnIp5iqfHjdK3NN2Kwbg4YFR6YqxMcHiq6qEK3kstlLIIizH1q9z1QD&X-Amz-Signature=8084641afdfa543ff415906ccc2046a45438f9bd86aec96ef29768b14e5a521d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
