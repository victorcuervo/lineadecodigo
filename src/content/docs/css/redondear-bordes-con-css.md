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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT7OEZ37%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1wM66QJjIW4J2nLdbh%2BqZtHYmFIMk0u4zGl3ftLMKxQIgAiQiA6LUjD7PzFzZ4DtzsR08X8qYZjhDyP7puDoOf1AqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEMI3aBydDX3Dv%2BZircA%2FIDWglAaZM1ehOhMWFh0jmd5Cvs%2BvbN5K4qybw4UjYsqniMDUY9dBYenzuMILKRpUBHbmSkH04xK%2FNb%2FSVADcD5EpmU5%2BJ%2BFKc5aIameHB2y2eyMv%2F4XjiZbVL7LXIc4KlLlnK4aHPwrV9%2BJUCyEE0ESh%2F2C9NvLSvkFpgk9I0oa9a1W3hiAX7q%2BLyn4EpmK16TPZct%2FKdJ2srQR9bx3pNh9CzW59CH4dUfgcuVGIIKaKXkjpZybDIIi6nz0zIW3V0JvLmxDBhWhlq2QF%2B9HzEDjtlg9ZnDmQEoyAq9S9KFv6hQ3wxaSWUfOhYg49O67ZRw8FCu%2FiOH%2FqW3NMP%2BeyG952NthmnX1nYPzC3JkTtQNAqkqZFwQy3ea33SXz50v3zpux893YtiPgf0L0WvaYicOrE8Psadp4h4vFpXQlB%2B7nphlMJ1VRNdqzyAN%2F1lmlj22LQijwudPypUMivcCBZhU8VrIuIondTMsrWx5HmVNtJXfSOG%2BEv4RoX2UkPieBOsZnS5NhSOFMu%2BUQkd2WLpEDp%2BAZlSGd2AAHpdZKk7zrX3%2BQV2gzdaO9dn6XCfDL5aTpLOKU3jTj25Pr2Otj27qD0FnV5mwyJbS%2BwxtLMTydYZIt1qvrR6mbr5MNHH18kGOqUBsZNlEij7eVmVnF1gnLMh4DTQw1EyulHV4lXJ54srzAkpyfj5AAnwZzo3PpkBmEf1DyOqBB5PdLCZDB0TDn2sgtUGDbzneDhC8g78BdVfEe%2F93taFUAVpsbfQUUV3R8ZooP3ikDOD3cU4EP110dcUOdoXjfciDsMafozs33I4igUjTID542%2FLumwF5UPYtVzqY9hhtpbj2QYjXWiLe%2FAx7G0UFxHt&X-Amz-Signature=6c352e3f8c0ceb45c4eb38f2c32e50c46cb44538e734dca6509ebee329399017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT7OEZ37%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1wM66QJjIW4J2nLdbh%2BqZtHYmFIMk0u4zGl3ftLMKxQIgAiQiA6LUjD7PzFzZ4DtzsR08X8qYZjhDyP7puDoOf1AqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEMI3aBydDX3Dv%2BZircA%2FIDWglAaZM1ehOhMWFh0jmd5Cvs%2BvbN5K4qybw4UjYsqniMDUY9dBYenzuMILKRpUBHbmSkH04xK%2FNb%2FSVADcD5EpmU5%2BJ%2BFKc5aIameHB2y2eyMv%2F4XjiZbVL7LXIc4KlLlnK4aHPwrV9%2BJUCyEE0ESh%2F2C9NvLSvkFpgk9I0oa9a1W3hiAX7q%2BLyn4EpmK16TPZct%2FKdJ2srQR9bx3pNh9CzW59CH4dUfgcuVGIIKaKXkjpZybDIIi6nz0zIW3V0JvLmxDBhWhlq2QF%2B9HzEDjtlg9ZnDmQEoyAq9S9KFv6hQ3wxaSWUfOhYg49O67ZRw8FCu%2FiOH%2FqW3NMP%2BeyG952NthmnX1nYPzC3JkTtQNAqkqZFwQy3ea33SXz50v3zpux893YtiPgf0L0WvaYicOrE8Psadp4h4vFpXQlB%2B7nphlMJ1VRNdqzyAN%2F1lmlj22LQijwudPypUMivcCBZhU8VrIuIondTMsrWx5HmVNtJXfSOG%2BEv4RoX2UkPieBOsZnS5NhSOFMu%2BUQkd2WLpEDp%2BAZlSGd2AAHpdZKk7zrX3%2BQV2gzdaO9dn6XCfDL5aTpLOKU3jTj25Pr2Otj27qD0FnV5mwyJbS%2BwxtLMTydYZIt1qvrR6mbr5MNHH18kGOqUBsZNlEij7eVmVnF1gnLMh4DTQw1EyulHV4lXJ54srzAkpyfj5AAnwZzo3PpkBmEf1DyOqBB5PdLCZDB0TDn2sgtUGDbzneDhC8g78BdVfEe%2F93taFUAVpsbfQUUV3R8ZooP3ikDOD3cU4EP110dcUOdoXjfciDsMafozs33I4igUjTID542%2FLumwF5UPYtVzqY9hhtpbj2QYjXWiLe%2FAx7G0UFxHt&X-Amz-Signature=0251b84160afe579f7cd972fbed5fc74c971dd021dad1a1af6d06c1177e9792b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
