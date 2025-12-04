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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BHGDR6Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHC1O1LExXwVKQhnRXgfouihd1Ee8z2B%2FKRlNpHDw0YlAiA%2BBqgHijJVUWj9wsfyU4hGbax138C0emwYiRxp6gq6Wyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMHozvSo3FFGTVkxTgKtwDtQ8DoHg8X9IePQkaMldgJ8yAovU2Js3Vk22Go1Abr9aPXABNMyAZHEc81KStubDQjU9UFOUVECFUHRgwuZLLkRQMU1O1fO3KGAO1W9BGbgIsNyGBInlfvwFqlmQtNjRGO6Q9Zn6ZhnOWb8xALpioJ7zeoSYMHdfUpyEJu3RqlGCUKd7wH%2BVLstneESUGtEV6xF2Jr64VHrYAUvF2TH%2FUIMIVtAwuyhBYg4hGaP%2FPj8f2l2nKhZywGWBGCeqmGBF43f6dNmudiqB1ZOL8flfWrOYiExa7%2BZ0L88Rz%2BfoRTUncVwRoiLD8%2BU59ypc%2FdNigqAGJbmyaEZ6n5lUN9jBlZj6WEdMn6flY%2BUMlOd5oAmzjWIe9H1hCIO257LilmmdMZriFPz3OVw6%2B3qqC%2FAIoDDNV04Fkwz1enFQV2uGLClkGvnFOsWfbf68TsY024m%2BCRp7ZKO53d5JdUYZBUL%2FBeEfCBkjBamw%2B0r4Kn2TquKUSTL5kNKPcht7QM31GZtM7tNM%2BD3jWi%2FVxGMhhFubmZ%2F5GYK8ibd%2BmH56pwT27m%2BLIE3o%2BWOq%2BL5tnNMzzAwLc2lF2bZDp8DKOGBWBlhpMqWpdWhSNZqqwhJuX%2B44nGAx8nfBaefhGPQFmpYcw9NPDyQY6pgHVpkIoiLROfMQc70yp0zJpIf7Prbg6wr%2Boh6yVEzJls%2F9WRA6f63z%2BiBZwin4u9ATUFksUtM386SmTmocoCjE3ZEOcLEVR8jnLfEjup4HU2ABMZAvOzxhNc%2BZJgeUZwTEIu7oDpdYPltBdX4WqyOwYKDxyOHIB4JPhtr4%2BLuEJwKvhgjjgcSEg6%2FRPlEYXN22d4ZQ0xQ1ajbPo9AAKyAgjpRGZXsMw&X-Amz-Signature=dea7e8dc161d4c0099a41da7d2b361c9a5a2defd7d48899e802f29be5ab373d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BHGDR6Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHC1O1LExXwVKQhnRXgfouihd1Ee8z2B%2FKRlNpHDw0YlAiA%2BBqgHijJVUWj9wsfyU4hGbax138C0emwYiRxp6gq6Wyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMHozvSo3FFGTVkxTgKtwDtQ8DoHg8X9IePQkaMldgJ8yAovU2Js3Vk22Go1Abr9aPXABNMyAZHEc81KStubDQjU9UFOUVECFUHRgwuZLLkRQMU1O1fO3KGAO1W9BGbgIsNyGBInlfvwFqlmQtNjRGO6Q9Zn6ZhnOWb8xALpioJ7zeoSYMHdfUpyEJu3RqlGCUKd7wH%2BVLstneESUGtEV6xF2Jr64VHrYAUvF2TH%2FUIMIVtAwuyhBYg4hGaP%2FPj8f2l2nKhZywGWBGCeqmGBF43f6dNmudiqB1ZOL8flfWrOYiExa7%2BZ0L88Rz%2BfoRTUncVwRoiLD8%2BU59ypc%2FdNigqAGJbmyaEZ6n5lUN9jBlZj6WEdMn6flY%2BUMlOd5oAmzjWIe9H1hCIO257LilmmdMZriFPz3OVw6%2B3qqC%2FAIoDDNV04Fkwz1enFQV2uGLClkGvnFOsWfbf68TsY024m%2BCRp7ZKO53d5JdUYZBUL%2FBeEfCBkjBamw%2B0r4Kn2TquKUSTL5kNKPcht7QM31GZtM7tNM%2BD3jWi%2FVxGMhhFubmZ%2F5GYK8ibd%2BmH56pwT27m%2BLIE3o%2BWOq%2BL5tnNMzzAwLc2lF2bZDp8DKOGBWBlhpMqWpdWhSNZqqwhJuX%2B44nGAx8nfBaefhGPQFmpYcw9NPDyQY6pgHVpkIoiLROfMQc70yp0zJpIf7Prbg6wr%2Boh6yVEzJls%2F9WRA6f63z%2BiBZwin4u9ATUFksUtM386SmTmocoCjE3ZEOcLEVR8jnLfEjup4HU2ABMZAvOzxhNc%2BZJgeUZwTEIu7oDpdYPltBdX4WqyOwYKDxyOHIB4JPhtr4%2BLuEJwKvhgjjgcSEg6%2FRPlEYXN22d4ZQ0xQ1ajbPo9AAKyAgjpRGZXsMw&X-Amz-Signature=13a28211569a8559b4ddc663fa57b45d9b49077e1d55a4e62f0d205c14fd41f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
