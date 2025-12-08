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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637FF765L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGJgTlxnOBc9hpSmEk1huaafoP3cR6qZKKYcZHgJJRWAiAi3sKsjEM04hUW%2FvupVHU%2FLHYM0ZLBcKoBUIFOel1diSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBFNpZCSa9iEMUjLzKtwDLY8hzlBNOrL%2FPJtCok4Zr4v%2B%2BwkKLEGdCle1c9%2FAI1Xbs%2FwPP%2BednFpkoXbTZeAKIjnRi6AOtQQ7onzZcr%2BDruWKAuCyVXUJgm4QHLYYe7WzB%2BokqrVU%2FwhFB9W6YOQJW%2FSGdN6JL1EtHBt%2Fm1xwO1X8wB9Q6ap5X7L5pXSEGu0u6jOprcAi3Ur7CnkodaTVLpd6865UhLKF44Zh8KkDzkjFO7erRwKk%2Bl%2F8E52f7p0hqHJD7Rt33s8wS7XoZsTEj2SLlufaWlc0LFJQN78QZF33kzoL2ilo%2F3v9NB%2BQmA1f5KeZmPcMeOlQYw3TbO8x2m6iZj%2FoGD02TCbzzgFGG7rTkFI%2BXHVZw2JCsPcfCPH2FjmBQmkKt7VvIPnGrhmmzGs9MN2W%2F7pA9pE1J7Fox13sbFmEfHXYZ1PvtqXo93c8tg%2B2kn4OXsDdNi357l2bG%2BSwZLiTCzV3aRD4LA2mcv%2FxQIo%2Fb19EG2%2FMkIvIjoPGvrPtWPcTkN5t8uq%2BZiul%2FtB0l8RZ9l55%2BAiMKZIVOxsWuxRAytWhcl7tMZh7pyS1AfKIUPAZ1BpGRNqeW3ueEpozrUZ6UBjtI12OMBCmYnh3Hw8CiP7DN%2BBWfmLm6ETqxIb0KeV9%2BsaAO%2BQwk%2B7ZyQY6pgFSYP9SxN3YiDenNKZgdKTh5eu54CDCveyRUOAMa2zoQclIJdt8QYnWNZ1vBWubS8xCV0m6qd%2FNkfIjeLSicMhxeJVOoqnpWCphkFx5AwO%2F7Wy%2F1UDDTuCnaiYvCbd2dyeTDuVa%2Bw%2FBwiyomQPXnM%2FHBiGobzQx5RQFrftk%2FslY4sfv0q4Cl0ail68AsFCb4SZbJl96Sow%2BLEM9U5b9o8lJxZI%2BP5j0&X-Amz-Signature=2cc6d5f9e40afa018b6c4d6d650c95787e450f88445a37e9e282f8710f526b0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637FF765L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGJgTlxnOBc9hpSmEk1huaafoP3cR6qZKKYcZHgJJRWAiAi3sKsjEM04hUW%2FvupVHU%2FLHYM0ZLBcKoBUIFOel1diSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBFNpZCSa9iEMUjLzKtwDLY8hzlBNOrL%2FPJtCok4Zr4v%2B%2BwkKLEGdCle1c9%2FAI1Xbs%2FwPP%2BednFpkoXbTZeAKIjnRi6AOtQQ7onzZcr%2BDruWKAuCyVXUJgm4QHLYYe7WzB%2BokqrVU%2FwhFB9W6YOQJW%2FSGdN6JL1EtHBt%2Fm1xwO1X8wB9Q6ap5X7L5pXSEGu0u6jOprcAi3Ur7CnkodaTVLpd6865UhLKF44Zh8KkDzkjFO7erRwKk%2Bl%2F8E52f7p0hqHJD7Rt33s8wS7XoZsTEj2SLlufaWlc0LFJQN78QZF33kzoL2ilo%2F3v9NB%2BQmA1f5KeZmPcMeOlQYw3TbO8x2m6iZj%2FoGD02TCbzzgFGG7rTkFI%2BXHVZw2JCsPcfCPH2FjmBQmkKt7VvIPnGrhmmzGs9MN2W%2F7pA9pE1J7Fox13sbFmEfHXYZ1PvtqXo93c8tg%2B2kn4OXsDdNi357l2bG%2BSwZLiTCzV3aRD4LA2mcv%2FxQIo%2Fb19EG2%2FMkIvIjoPGvrPtWPcTkN5t8uq%2BZiul%2FtB0l8RZ9l55%2BAiMKZIVOxsWuxRAytWhcl7tMZh7pyS1AfKIUPAZ1BpGRNqeW3ueEpozrUZ6UBjtI12OMBCmYnh3Hw8CiP7DN%2BBWfmLm6ETqxIb0KeV9%2BsaAO%2BQwk%2B7ZyQY6pgFSYP9SxN3YiDenNKZgdKTh5eu54CDCveyRUOAMa2zoQclIJdt8QYnWNZ1vBWubS8xCV0m6qd%2FNkfIjeLSicMhxeJVOoqnpWCphkFx5AwO%2F7Wy%2F1UDDTuCnaiYvCbd2dyeTDuVa%2Bw%2FBwiyomQPXnM%2FHBiGobzQx5RQFrftk%2FslY4sfv0q4Cl0ail68AsFCb4SZbJl96Sow%2BLEM9U5b9o8lJxZI%2BP5j0&X-Amz-Signature=c077e1d1cc2f3a27906349a4d0fe20206d7bc1d9f3da19a9a1c02357b6525345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
