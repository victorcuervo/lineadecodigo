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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNQZDKH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9KmeT2%2FHsnmCa%2B6orzNtbxZq07d9CZiSdmVYFreNFSgIhALG2Xh4nNiuQRORHzUGIbh8GcWqk9k1cKwlU0DNxRCDIKv8DCH8QABoMNjM3NDIzMTgzODA1IgyzFNv0qgeTzU9oVFoq3ANbLZ%2FWPvBCFy1v6QqlWKTxvTnKHwaJ2rkTfsm13fEOVZGTRqtg%2BozS%2BBZHXfH71s6xXamx7LUNSV5Mz9q8bgeq8XAZEMfEMKnSmGrXk9MJb4UcBHU8KQ4AV5khG8OTgvqVgVNej3TFHBzDsNaJBglukUSxZIuFpld7u36c8jLvtcU%2FjIXiLrs6vng%2FCAHvzUUtFx7OCWnwBL4e0E9ZSanYOpVBqZYGjcpIa%2F7PRVQgzFQmb8wMLeITMuAM7x0hctXLXESk5dz07fqMZw7fbyFjEKkwEPQMlv2affG0iPDqSPR11YPd3MsvIJaS9UcyQkjcnnZvfC1iS8CC2dg6qU0T4%2B%2Fwfeot1zMY48QsXfh078JRMXjelmgnJqm0lL8E7%2FoadQsSRq5bGY%2BuRyJDkwMD6E67JKiVnILMh1sXnUEWbusaQ3WBBKIXfPLzIVvNchmdUbiAgJAlP3jO3LapXAJH1S%2BG21EjfLscx3oM7CcPYEeO9uVkaJNrfjXraUk5eO%2FeX931xdQm%2BfRISpRg8sxqJtAd98U7ehVz5rwR3VnQUFEWwXWP3GabvZZTPQMPcZmO%2FugLjqJSi5yb0JJ5m92XEi1hB7d2pOqINDdNSmmwxTT79pM669ksj2w8PDDc4YrKBjqkAa3ULbGi8GM3WIEDChT4418CByLUyDpg1%2FZTSDmKWa%2BpPwIBFsirxcMWoE9Jq70Y%2FGzfvt8lPVfyqA222c9dp%2BdhZvZMTAR%2FYRROckJsGEFdANmYlus0Y0bM%2FtnLwKvrunRwmDhvzXiDVGNURijM%2FKhamo05YulpDpiheJzRUqH550kY03W9gZhvQNPrPDhNP32DdCWXdzdF0BifnlUG%2BmdDCuho&X-Amz-Signature=0619be9cbdd2b67acae8c84bdb47b6bbc621fec623abb3f30f3f32c9dbe02956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNQZDKH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9KmeT2%2FHsnmCa%2B6orzNtbxZq07d9CZiSdmVYFreNFSgIhALG2Xh4nNiuQRORHzUGIbh8GcWqk9k1cKwlU0DNxRCDIKv8DCH8QABoMNjM3NDIzMTgzODA1IgyzFNv0qgeTzU9oVFoq3ANbLZ%2FWPvBCFy1v6QqlWKTxvTnKHwaJ2rkTfsm13fEOVZGTRqtg%2BozS%2BBZHXfH71s6xXamx7LUNSV5Mz9q8bgeq8XAZEMfEMKnSmGrXk9MJb4UcBHU8KQ4AV5khG8OTgvqVgVNej3TFHBzDsNaJBglukUSxZIuFpld7u36c8jLvtcU%2FjIXiLrs6vng%2FCAHvzUUtFx7OCWnwBL4e0E9ZSanYOpVBqZYGjcpIa%2F7PRVQgzFQmb8wMLeITMuAM7x0hctXLXESk5dz07fqMZw7fbyFjEKkwEPQMlv2affG0iPDqSPR11YPd3MsvIJaS9UcyQkjcnnZvfC1iS8CC2dg6qU0T4%2B%2Fwfeot1zMY48QsXfh078JRMXjelmgnJqm0lL8E7%2FoadQsSRq5bGY%2BuRyJDkwMD6E67JKiVnILMh1sXnUEWbusaQ3WBBKIXfPLzIVvNchmdUbiAgJAlP3jO3LapXAJH1S%2BG21EjfLscx3oM7CcPYEeO9uVkaJNrfjXraUk5eO%2FeX931xdQm%2BfRISpRg8sxqJtAd98U7ehVz5rwR3VnQUFEWwXWP3GabvZZTPQMPcZmO%2FugLjqJSi5yb0JJ5m92XEi1hB7d2pOqINDdNSmmwxTT79pM669ksj2w8PDDc4YrKBjqkAa3ULbGi8GM3WIEDChT4418CByLUyDpg1%2FZTSDmKWa%2BpPwIBFsirxcMWoE9Jq70Y%2FGzfvt8lPVfyqA222c9dp%2BdhZvZMTAR%2FYRROckJsGEFdANmYlus0Y0bM%2FtnLwKvrunRwmDhvzXiDVGNURijM%2FKhamo05YulpDpiheJzRUqH550kY03W9gZhvQNPrPDhNP32DdCWXdzdF0BifnlUG%2BmdDCuho&X-Amz-Signature=a05a69ae8364af113bf8bd0e9e115e22af9db81e597bd97c811f85b431137410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
