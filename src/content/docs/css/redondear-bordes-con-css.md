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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJFS6ZX2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDppow7LjhzhFPg1chlJTsLbjaoGB3iEdAXnEolsF8Z5AiEA6ORFiJgupu8InR%2FsRCOfLiZktTOBf%2BkL5UGnXd%2FVrX8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIbeRSq8LvwtlNinSrcA%2B%2BwxNU%2F2SBzF4Y06ncuHwbGGEgXQq0Y9sjjoWYDcTbceM%2FFYyg2uvYMmBViDA%2FXEQBgTimLpVbiwCN9GUSlUi92Qq8aNZ5Exv%2BUlQ3GWy5PX9GjlzfzxDXvrwobTsNHYLa%2BcrR4Gam%2Fq%2F%2F7BXe9AmWifkgWJ65ex90Mxvj935xa5XM9KqhkpYwgAcdBIxFEMBIgXArfL6QsoZN2qxXWAmvjT5Kk5YeIpo4AhpRhshRbVB5KiOLRUFicXRYczCVYf5TvVytZl3nKbL32cA01AHFt30mVQCz992sKcvMh7a9hvsGxBO9NE3e6gMlA9M%2BYklKQfWuh%2Fk%2BDxKOjnhji08haEiVuYgeYDH8xTwv5cLck0DHUre%2Bn9PLQLCQzoIZ0k3DHYpPtmTmbEMh8MEZraDUS2PQHM2Xf%2BgenZI1gO6s1GXxejTLHg2jq388dxhAIOCkDLJVkUM0at0kUvIDJ3jh4ISCADJk%2F%2BBlaRw9l7jx%2BpMkIqLOzf0jkM%2BcsvN4tfHW9ZBAOzELVRnwcQ4ng%2BCA5Z0vZj6iekpe6oYFazDGVoDRw%2Bx8U1kRQoE1PSirJhubSwpwVLoYAaas9AreZi3KBP2n5BO3RDHldkSbnUXeAFHp9JgnO7Z6ltavoMMbz2skGOqUBAv%2FTZQdkd4mspv0M1XU8MhnoOfEvtuGOfrBSYbyCAoAQQxmFuJt9YAbs7VSjwVNjRWcGrgIoI8mZ1G7HHbXkusyXlwJtVCjA3L09SvewV2PbnkswELKKW0Vbg820VWkPGi6PWrbnqhmZTtP8VxcSsySf2j8L0zVbwxwoa6FEDph993EQ7h%2FsCSWLf4xsNa1%2FAk9GGM2c9iJjvB4IdzATJNYDBUG0&X-Amz-Signature=73db22cb25f3fbec50955f3ecea85d04266434ffb607494bd0c2aadb95a25002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJFS6ZX2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDppow7LjhzhFPg1chlJTsLbjaoGB3iEdAXnEolsF8Z5AiEA6ORFiJgupu8InR%2FsRCOfLiZktTOBf%2BkL5UGnXd%2FVrX8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIbeRSq8LvwtlNinSrcA%2B%2BwxNU%2F2SBzF4Y06ncuHwbGGEgXQq0Y9sjjoWYDcTbceM%2FFYyg2uvYMmBViDA%2FXEQBgTimLpVbiwCN9GUSlUi92Qq8aNZ5Exv%2BUlQ3GWy5PX9GjlzfzxDXvrwobTsNHYLa%2BcrR4Gam%2Fq%2F%2F7BXe9AmWifkgWJ65ex90Mxvj935xa5XM9KqhkpYwgAcdBIxFEMBIgXArfL6QsoZN2qxXWAmvjT5Kk5YeIpo4AhpRhshRbVB5KiOLRUFicXRYczCVYf5TvVytZl3nKbL32cA01AHFt30mVQCz992sKcvMh7a9hvsGxBO9NE3e6gMlA9M%2BYklKQfWuh%2Fk%2BDxKOjnhji08haEiVuYgeYDH8xTwv5cLck0DHUre%2Bn9PLQLCQzoIZ0k3DHYpPtmTmbEMh8MEZraDUS2PQHM2Xf%2BgenZI1gO6s1GXxejTLHg2jq388dxhAIOCkDLJVkUM0at0kUvIDJ3jh4ISCADJk%2F%2BBlaRw9l7jx%2BpMkIqLOzf0jkM%2BcsvN4tfHW9ZBAOzELVRnwcQ4ng%2BCA5Z0vZj6iekpe6oYFazDGVoDRw%2Bx8U1kRQoE1PSirJhubSwpwVLoYAaas9AreZi3KBP2n5BO3RDHldkSbnUXeAFHp9JgnO7Z6ltavoMMbz2skGOqUBAv%2FTZQdkd4mspv0M1XU8MhnoOfEvtuGOfrBSYbyCAoAQQxmFuJt9YAbs7VSjwVNjRWcGrgIoI8mZ1G7HHbXkusyXlwJtVCjA3L09SvewV2PbnkswELKKW0Vbg820VWkPGi6PWrbnqhmZTtP8VxcSsySf2j8L0zVbwxwoa6FEDph993EQ7h%2FsCSWLf4xsNa1%2FAk9GGM2c9iJjvB4IdzATJNYDBUG0&X-Amz-Signature=0b8d2aeef29e9332d5d4d9ae6dd39ef6f39f939974361ecead710bbccd70c01e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
