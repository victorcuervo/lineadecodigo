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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626BSW4BT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmMs5j0uhPh1CRE0H%2BW5rhTp9MyQgGfjglw%2FdufbFvKAiEAw3Nwx2d2pbAE5guGf5lfuRRTLB83ON2A7oFlzH8V53Iq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDL2MPBCAZn6RDfj8pircAx%2F87h4feF7swXRGEmt%2FzKMKBsfhVrN5nIcBLXdX8uZG8mPlyj4xdQmHkiDEQDIk6VNDju3YzFfH5iyzUUNOnDyzvyZ2ABp0Kzeen7voGXuK9ktBHibahr5c2GUPF874aJNhsFO9taBEUn7NiBXCp2mhRyvayzoaCNMUatomSLtR9gxpdliUvc4zNNsPF8pdAlkRShrcz8eWDpBlChqUYJbScSuaEp77Vo%2FhfAxUSNSE4%2FCTaflE1J%2F012BVvDrMEklsRvmLtgZn9EWQlTYOdL6%2BJIPpqaVXLmMLy9XdXgu8g9t2ilcgHGXrYxLHyz7tZm51KHsUk8YTwcqGrBZUI3O2mgjtTj1teiXM6SSHAYtkw%2Ff3A1hxWp4NywplMOvslS574JWQDRMiFtgbPb%2BX6FV3D3qI%2Flb7bihrHfUI4c4eIyiJAJFKA46v9cDDcKSNUt2UY%2Ft%2BCt%2FMVvP%2FZpV%2BvmO0P43yMgMVERnQKJhwN1nwxAjzhwg948SjazoX1TPumoEjCxTMQttlgAOlBu%2FW29%2F7OVlMv4rUAEmj0RipeT0wKQP7g78o4zySXbUfiRueJNA%2BJmpZIj8%2FiTULJ6eqpQCe0xE%2FrjHoGQb7rJHkk8dKMZ4p%2FUo0NjYdah%2FSMMP7h8oGOqUBTNBPT6TTx3VwtxycGg2pc57%2B%2FcNHPPhixfs6ifiQ%2FBOQ%2B151ZkW1p59tYGzgb179DqsMIBzEVVVpN92DL60AWsUxTwcSBgLV8mNGzQSOj76gb2OY6NFR9UhutGYytsV9%2Fk9TrEpRN%2F2%2FDGS%2BkbC6F1EgdZL%2BQKwXv%2BbfAl3RGkrzgRxB0SoyaHVR2iKNleLoblL0uc8%2FeGqWnaO2oZ8%2BcgFlAEjO&X-Amz-Signature=fd3cf9deaac29d7223ddfa2f374c3375d91d3932c81b3245111d4e890707a3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626BSW4BT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmMs5j0uhPh1CRE0H%2BW5rhTp9MyQgGfjglw%2FdufbFvKAiEAw3Nwx2d2pbAE5guGf5lfuRRTLB83ON2A7oFlzH8V53Iq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDL2MPBCAZn6RDfj8pircAx%2F87h4feF7swXRGEmt%2FzKMKBsfhVrN5nIcBLXdX8uZG8mPlyj4xdQmHkiDEQDIk6VNDju3YzFfH5iyzUUNOnDyzvyZ2ABp0Kzeen7voGXuK9ktBHibahr5c2GUPF874aJNhsFO9taBEUn7NiBXCp2mhRyvayzoaCNMUatomSLtR9gxpdliUvc4zNNsPF8pdAlkRShrcz8eWDpBlChqUYJbScSuaEp77Vo%2FhfAxUSNSE4%2FCTaflE1J%2F012BVvDrMEklsRvmLtgZn9EWQlTYOdL6%2BJIPpqaVXLmMLy9XdXgu8g9t2ilcgHGXrYxLHyz7tZm51KHsUk8YTwcqGrBZUI3O2mgjtTj1teiXM6SSHAYtkw%2Ff3A1hxWp4NywplMOvslS574JWQDRMiFtgbPb%2BX6FV3D3qI%2Flb7bihrHfUI4c4eIyiJAJFKA46v9cDDcKSNUt2UY%2Ft%2BCt%2FMVvP%2FZpV%2BvmO0P43yMgMVERnQKJhwN1nwxAjzhwg948SjazoX1TPumoEjCxTMQttlgAOlBu%2FW29%2F7OVlMv4rUAEmj0RipeT0wKQP7g78o4zySXbUfiRueJNA%2BJmpZIj8%2FiTULJ6eqpQCe0xE%2FrjHoGQb7rJHkk8dKMZ4p%2FUo0NjYdah%2FSMMP7h8oGOqUBTNBPT6TTx3VwtxycGg2pc57%2B%2FcNHPPhixfs6ifiQ%2FBOQ%2B151ZkW1p59tYGzgb179DqsMIBzEVVVpN92DL60AWsUxTwcSBgLV8mNGzQSOj76gb2OY6NFR9UhutGYytsV9%2Fk9TrEpRN%2F2%2FDGS%2BkbC6F1EgdZL%2BQKwXv%2BbfAl3RGkrzgRxB0SoyaHVR2iKNleLoblL0uc8%2FeGqWnaO2oZ8%2BcgFlAEjO&X-Amz-Signature=43748454963493ae33be7fb1051cd2b95cf46b8b069f3a5b6e41c64a8999e869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
