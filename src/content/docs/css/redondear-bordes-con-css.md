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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWRGWXGE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCARS8ZXTFN55sBdGUx6ussym1Q9ptB3ZtqBaQTnvDcIQIhAPQFQdStiq0NJnsJ%2BnXFzzW8o%2BYEXO3NU4f0Oq4RRkC6Kv8DCEkQABoMNjM3NDIzMTgzODA1Igw%2FplnDoFKrew6CXl4q3APN0EHal3PzKkG9mEvW2GA0ADjw7py%2BBKeZqnwPEjGhOVLwRZlVOo6nlOA8C2p7VY5R94cqLjKVT7ZiDbW%2FLJl4Vz%2F3e4q22BYjSHybQ19XQz7tgLz4M4Pqbw7kUJ%2B37dG0gxv9mDwg7F8s6RFurcIV1B%2F8JPfd64iiIFnPavInAgujZqc%2FtJY2nk3PivnI6GwQkrgls0OTd8tybUZDTcpmGZhs%2FlsXFpZfcc7QiROlPdNwrDNV%2FawMXxrTzhOswklzYzMjECCVMG4Kkg6EICUYdOvf3tdgGPUaNtaZA%2FZiGaUWS6p23AoPHnHu%2FwDG%2BYbkOn%2FHw9FK37LvF4kgIaiOeBAH2VsGhHehFvR1hO944EWG7CoLmcKeRCQtYZQ17fW20w%2FfekGd4UYsO5VwhfD7nDMCFufQOWj9n68fiZcXKGuqPv%2Bv1loT4Iu6meOCTCSdmIRInk%2Fn4%2Bou%2FM3OHeEBrzPf3NDotZp5i3gc9TWELPTfORgBOp5oqw6LJkTR7GQH6GiEd4pB3gkU9eJN%2Fubdn%2FyUTHy8JAlV2i%2B7DsDdO6XrwF1ZVFzjOlRVGGDN322D79Vvf1xCEiSTLKOLuO1WfbyHYCnbM6JiZErYjOll1%2FjmhyJtSTduZaOCBzCt3MbJBjqkAWxsHxbDg4RYCmwRfgT9oLbdlkOnjNrjfJSy3fAZSXRO26OH0hCkgHn4K6iJP0OvqWPqdVHERhtttMwzQKbpWsQyzr7NqcW2%2BOnzFslSn3qj5X2bIQqGUVYlnmhR1KtvacaIYU4uWgdYE5KBuX8iDjArcXIxaMBV2WKyGlCeRqPOYka1Bb8ZqU2%2BOM0kbXk0YEwZJHzj2dST8dGO%2FcbJKl08BkCc&X-Amz-Signature=a9ac00aacb320c574ac68aeb274fc09fd7e5d3a45dd96f0977135749c6b1cbfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWRGWXGE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCARS8ZXTFN55sBdGUx6ussym1Q9ptB3ZtqBaQTnvDcIQIhAPQFQdStiq0NJnsJ%2BnXFzzW8o%2BYEXO3NU4f0Oq4RRkC6Kv8DCEkQABoMNjM3NDIzMTgzODA1Igw%2FplnDoFKrew6CXl4q3APN0EHal3PzKkG9mEvW2GA0ADjw7py%2BBKeZqnwPEjGhOVLwRZlVOo6nlOA8C2p7VY5R94cqLjKVT7ZiDbW%2FLJl4Vz%2F3e4q22BYjSHybQ19XQz7tgLz4M4Pqbw7kUJ%2B37dG0gxv9mDwg7F8s6RFurcIV1B%2F8JPfd64iiIFnPavInAgujZqc%2FtJY2nk3PivnI6GwQkrgls0OTd8tybUZDTcpmGZhs%2FlsXFpZfcc7QiROlPdNwrDNV%2FawMXxrTzhOswklzYzMjECCVMG4Kkg6EICUYdOvf3tdgGPUaNtaZA%2FZiGaUWS6p23AoPHnHu%2FwDG%2BYbkOn%2FHw9FK37LvF4kgIaiOeBAH2VsGhHehFvR1hO944EWG7CoLmcKeRCQtYZQ17fW20w%2FfekGd4UYsO5VwhfD7nDMCFufQOWj9n68fiZcXKGuqPv%2Bv1loT4Iu6meOCTCSdmIRInk%2Fn4%2Bou%2FM3OHeEBrzPf3NDotZp5i3gc9TWELPTfORgBOp5oqw6LJkTR7GQH6GiEd4pB3gkU9eJN%2Fubdn%2FyUTHy8JAlV2i%2B7DsDdO6XrwF1ZVFzjOlRVGGDN322D79Vvf1xCEiSTLKOLuO1WfbyHYCnbM6JiZErYjOll1%2FjmhyJtSTduZaOCBzCt3MbJBjqkAWxsHxbDg4RYCmwRfgT9oLbdlkOnjNrjfJSy3fAZSXRO26OH0hCkgHn4K6iJP0OvqWPqdVHERhtttMwzQKbpWsQyzr7NqcW2%2BOnzFslSn3qj5X2bIQqGUVYlnmhR1KtvacaIYU4uWgdYE5KBuX8iDjArcXIxaMBV2WKyGlCeRqPOYka1Bb8ZqU2%2BOM0kbXk0YEwZJHzj2dST8dGO%2FcbJKl08BkCc&X-Amz-Signature=9632fba33367f8324d408a0c030a01aa2add44c43f5473af7a9926a2a2730ef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
