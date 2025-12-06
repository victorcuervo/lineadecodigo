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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OATSLXG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEABoA6bXLVOxQxX3%2FD%2B1kdppKw80dYaZvDYFpMK5eBSAiEA4%2FTIEhEYTwn6R54wI8RaH9i%2FJix1Ub8QiN54QtpcF8Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDP%2BpQoBIznPxZgVdHCrcAwAy5RopmJely3ToMfGjczSFyugQQwHUM7Pg%2FBSp%2BotNXje0d%2B4TzFjBapYrnG8G4YvIMigvFN3eKOSLpevwq4rEGOZPwsr8Z4OCZCjo01hLQ1Wb9KC%2F7E3E5f%2Bxpy%2BME7%2BskD3nz6g0AkhW9RqVeQ3DLp0bG2FUHfTqUVwRmCKu3Lv3%2FYxLrQopdVS4UdkPHZvA7WVuGQNMumKJ4eaoM9niVJoSx8vtl%2FwCOeqNesw8i35ysfHH2xBqkA1Lh4t8EHlyYKnzvcLpa6cSnSNptJCPvr8YOcGIFDzBFnZwu0%2Fv02UzZ8eqax9KQI3fV%2BbIS1GD1jPJmcCyBMI4vy7UcCGZQME89ODWW1%2FWxg2HwlYx5n1OFzVab34kFkxnziaLVZT%2BoyAEn5tmahd6YxN9L5JKuW5vCRnvLA2wz62m9WEWTi5Ue75nutQjYiZmOaBhDJvLyFXPHDwid%2B5571T8sc%2BmX5nK8p4VTbwK48%2BWOBaLJsi3peeXB%2BH1DM1Q9r8vymGbbov0K3YkA%2BdM6sMrt90OVP94D5mBlu35TqJKRKWt1sVM3nwu6WNulGtfaIJi%2BiQymRrhWjnq%2FvABQjNP%2BqpxWfG0gkcPOnZgED3cbqinxxnn1yGoibECssNIMNXL0ckGOqUBs0b15egsIro8tfE1lZ5vH%2BRlP1SMirnDgxC2kU3JASxkORYN4CQTWtcqqi%2BsrpCYUvjZy82mYiH%2BkDQXo7ZrrENf1pKwisb5SAvmwQztbhr8ZfBHf5d5dkKqDx07Cqz%2Bd2v9hLG0Mir%2F4wAflzm2hs586scgquYypi6qsLh92D%2FEPuQdebJJud7DjJNdoLw0Uw8UtwltXIVFVLBeAcYVvlwJr6sq&X-Amz-Signature=23cbf18e43e000455693944e2363bc286efce6f513a60cf647d7a111acd56985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OATSLXG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEABoA6bXLVOxQxX3%2FD%2B1kdppKw80dYaZvDYFpMK5eBSAiEA4%2FTIEhEYTwn6R54wI8RaH9i%2FJix1Ub8QiN54QtpcF8Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDP%2BpQoBIznPxZgVdHCrcAwAy5RopmJely3ToMfGjczSFyugQQwHUM7Pg%2FBSp%2BotNXje0d%2B4TzFjBapYrnG8G4YvIMigvFN3eKOSLpevwq4rEGOZPwsr8Z4OCZCjo01hLQ1Wb9KC%2F7E3E5f%2Bxpy%2BME7%2BskD3nz6g0AkhW9RqVeQ3DLp0bG2FUHfTqUVwRmCKu3Lv3%2FYxLrQopdVS4UdkPHZvA7WVuGQNMumKJ4eaoM9niVJoSx8vtl%2FwCOeqNesw8i35ysfHH2xBqkA1Lh4t8EHlyYKnzvcLpa6cSnSNptJCPvr8YOcGIFDzBFnZwu0%2Fv02UzZ8eqax9KQI3fV%2BbIS1GD1jPJmcCyBMI4vy7UcCGZQME89ODWW1%2FWxg2HwlYx5n1OFzVab34kFkxnziaLVZT%2BoyAEn5tmahd6YxN9L5JKuW5vCRnvLA2wz62m9WEWTi5Ue75nutQjYiZmOaBhDJvLyFXPHDwid%2B5571T8sc%2BmX5nK8p4VTbwK48%2BWOBaLJsi3peeXB%2BH1DM1Q9r8vymGbbov0K3YkA%2BdM6sMrt90OVP94D5mBlu35TqJKRKWt1sVM3nwu6WNulGtfaIJi%2BiQymRrhWjnq%2FvABQjNP%2BqpxWfG0gkcPOnZgED3cbqinxxnn1yGoibECssNIMNXL0ckGOqUBs0b15egsIro8tfE1lZ5vH%2BRlP1SMirnDgxC2kU3JASxkORYN4CQTWtcqqi%2BsrpCYUvjZy82mYiH%2BkDQXo7ZrrENf1pKwisb5SAvmwQztbhr8ZfBHf5d5dkKqDx07Cqz%2Bd2v9hLG0Mir%2F4wAflzm2hs586scgquYypi6qsLh92D%2FEPuQdebJJud7DjJNdoLw0Uw8UtwltXIVFVLBeAcYVvlwJr6sq&X-Amz-Signature=f60b752897aef91676e785cf43f95c455afaf128176224870d2f387efbac4a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
