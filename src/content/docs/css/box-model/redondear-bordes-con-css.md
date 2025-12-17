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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YALK3U3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi%2Bh7kji9Br1iw3MLZLcTvnfL4rUWrJUyFYN38s%2FOckAiEAwYWMc5M1X4VB4AeLl0H8nf%2ByytwGVKoUoVQZ%2B7stVSwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMohLjLM79yzshWSrSrcA7a7dUJmTf5HqxnAygp1XSpdHP9qIyyT2cYpF6eeSU7PRzSrgRghkNRz7x0mD5aF2QlOJaNtk4%2Fv11kxmxr5JsSyvHeOsGxakXOH1ELNEWf3NftWLBbJtbCKZmmWdfHY2munphdFa0vfHgxwAFA2TDqRDrN4HEbHeUR3Sxgo6c%2FFj82Y59JBgEfbuYX4AyrSqOagIjh%2BxthL3vdtv0CuE66F7dSn%2FUN0c%2FiFeEmIlKRuwOb4jlEUddC2pDR%2BD7FbV9zCYx5DsORrOgBmb3TNO%2BY48KHBbalv%2B%2BzDvy%2FVCLgLomt080eBEpRjAskr0LLt4ppoqrchrjWXn4t4vzZgIAjwPjSyDNPGRxnfP62Een8%2FeL8TryyZ7mgxm7kPFkfucBQarrX2FxWifEV6e7omsklXXrjQaqZfKE9MriFy6oWHWsri8JB06faUC8jdZMo7KrFYNI3GO93Urv3fFXbax75G8G7gOVkvSHML3q8384oib1CPcDgdLWRzdkAOH8UQ3%2ByWCe1hjKunttQlgYOJvmXgzZS5536Fecn66%2BQEsJUWYEaXpyWS5NnAgP9mWSL8p0mElp7gtd5iyq631nL0es6cXlulj7WrJH3SwQICCNNrILwY7fV4UwOcxI86MIOgi8oGOqUBZwDu3fjwonDF1M8ZV2JTuXOXJAAhSsZPCADIJ9IO1qKYKkABkcu4O0XTuxSgmNLv1%2F2%2BY2sigmfmH8ARTA1oJemLuAa3wFHPAjB4i%2FP9obDBUorYBDQSCCOEpii7wjYDF4scth6V9LOUQG5zOvwTXLHbsGuFiIzvhSdTZ27tRz4o7J%2FA16wXrjIF5iicksjPS8OnexAEXbK13QoPN2iSaU%2BTLkSq&X-Amz-Signature=6b59ffcb9cdb9d30cd195b649af8b54c9310cc8e24865682d6ca80a6c9bde865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YALK3U3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi%2Bh7kji9Br1iw3MLZLcTvnfL4rUWrJUyFYN38s%2FOckAiEAwYWMc5M1X4VB4AeLl0H8nf%2ByytwGVKoUoVQZ%2B7stVSwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMohLjLM79yzshWSrSrcA7a7dUJmTf5HqxnAygp1XSpdHP9qIyyT2cYpF6eeSU7PRzSrgRghkNRz7x0mD5aF2QlOJaNtk4%2Fv11kxmxr5JsSyvHeOsGxakXOH1ELNEWf3NftWLBbJtbCKZmmWdfHY2munphdFa0vfHgxwAFA2TDqRDrN4HEbHeUR3Sxgo6c%2FFj82Y59JBgEfbuYX4AyrSqOagIjh%2BxthL3vdtv0CuE66F7dSn%2FUN0c%2FiFeEmIlKRuwOb4jlEUddC2pDR%2BD7FbV9zCYx5DsORrOgBmb3TNO%2BY48KHBbalv%2B%2BzDvy%2FVCLgLomt080eBEpRjAskr0LLt4ppoqrchrjWXn4t4vzZgIAjwPjSyDNPGRxnfP62Een8%2FeL8TryyZ7mgxm7kPFkfucBQarrX2FxWifEV6e7omsklXXrjQaqZfKE9MriFy6oWHWsri8JB06faUC8jdZMo7KrFYNI3GO93Urv3fFXbax75G8G7gOVkvSHML3q8384oib1CPcDgdLWRzdkAOH8UQ3%2ByWCe1hjKunttQlgYOJvmXgzZS5536Fecn66%2BQEsJUWYEaXpyWS5NnAgP9mWSL8p0mElp7gtd5iyq631nL0es6cXlulj7WrJH3SwQICCNNrILwY7fV4UwOcxI86MIOgi8oGOqUBZwDu3fjwonDF1M8ZV2JTuXOXJAAhSsZPCADIJ9IO1qKYKkABkcu4O0XTuxSgmNLv1%2F2%2BY2sigmfmH8ARTA1oJemLuAa3wFHPAjB4i%2FP9obDBUorYBDQSCCOEpii7wjYDF4scth6V9LOUQG5zOvwTXLHbsGuFiIzvhSdTZ27tRz4o7J%2FA16wXrjIF5iicksjPS8OnexAEXbK13QoPN2iSaU%2BTLkSq&X-Amz-Signature=7b99e28e36eaec11a1e2298c917fda9fa79f060bc041b6318a748eccbf285628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
