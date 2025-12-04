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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPR3GQT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIAvB1j9s6elfWVim5j0xSc1AilrPHX3NZruN9H7chpL0AiEAw22gnULVVGsMDDo8WbgdcKPQk0tsMdMpC1qCIPWwdOoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDlTrFSLBbl1GAdEmircAwA5lh93s11YAtwgGrEnB3yn%2FexdlgXEuoRT3P0GAw2CuNahct91Y9EYWTtTNEkK5uPRW9%2BwjEGty5ijPsjmmZcJwadJFCcqehbGkVwfPRgI37Bvba9E3C%2FGpqvRNe1QW%2BZZ%2B7tyd7x%2FUlYc1AzxEahRapMAYtxwDwXCdA5x1KrtZ4pW7Pb%2B3TYPx2m4QhKDy2xNM4DHey2SK%2Bx0hRUWUueW7M2PG6HGDpOVNgw2PWEOhSWnch18VNVynOFU8qg8V%2FTgGpUQilHIhqLr0WffoOXu%2BX2Ne5mGSoKrKhH1914FGi%2FaeEzWYDSaBEBOYI3FBEGFZ0A4JaU1c%2FZwXWTxZEFTo4QcW7yGQchEoF7I4mTI9pp2jwBEZyJv0WqPIys2rUBsL3HB29B72neKe9tSgk5lAzZH6BjFiojUopVBvitJ%2B0gOGR7RUPRSfWHiBgLOUk5724qu7gT1%2BQD9LQq4%2Fv4vBvmVBWjnBSxD8bnKmz8ajXbS0kyqOV330GsSA%2Fxb1ZwFz3mdsya7SBRut32gUGD7l487sOiyNWnDrOoD0wwpEXP7b2diMWpvRIO1NlZFLfptOGScxK3s%2FuWT067ViaBH577a3SO8N0CIpXaxVvTlMtomQAHivYCPaYv3MNG%2BxskGOqUBWWeL2cW69J9uX8pvcMUdJI8lyHGVLSPwpZbU5LRd%2B2A%2Bj9t6TRoQK0YM26TE8v4xQcHsW5uE4KmJ0NLEDbw60eYl6jVb2LpVsKpZmw%2Bf9on6yaru9FZaY1BC3VUtJBqXi1a9vRj3Jdwb20H6Q8and1%2B2Sqj2htuCdZKEbaj%2BE7QL6ZIcpJU%2Fo6r9GK7ZJYcqcE1QgDacvRWFeUkNdNOq51AReKbK&X-Amz-Signature=c9bf7ed941c5c54897d1dbc2e18dd6ccbfc041fafaa4b4ee07ee5cec19938f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPR3GQT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIAvB1j9s6elfWVim5j0xSc1AilrPHX3NZruN9H7chpL0AiEAw22gnULVVGsMDDo8WbgdcKPQk0tsMdMpC1qCIPWwdOoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDlTrFSLBbl1GAdEmircAwA5lh93s11YAtwgGrEnB3yn%2FexdlgXEuoRT3P0GAw2CuNahct91Y9EYWTtTNEkK5uPRW9%2BwjEGty5ijPsjmmZcJwadJFCcqehbGkVwfPRgI37Bvba9E3C%2FGpqvRNe1QW%2BZZ%2B7tyd7x%2FUlYc1AzxEahRapMAYtxwDwXCdA5x1KrtZ4pW7Pb%2B3TYPx2m4QhKDy2xNM4DHey2SK%2Bx0hRUWUueW7M2PG6HGDpOVNgw2PWEOhSWnch18VNVynOFU8qg8V%2FTgGpUQilHIhqLr0WffoOXu%2BX2Ne5mGSoKrKhH1914FGi%2FaeEzWYDSaBEBOYI3FBEGFZ0A4JaU1c%2FZwXWTxZEFTo4QcW7yGQchEoF7I4mTI9pp2jwBEZyJv0WqPIys2rUBsL3HB29B72neKe9tSgk5lAzZH6BjFiojUopVBvitJ%2B0gOGR7RUPRSfWHiBgLOUk5724qu7gT1%2BQD9LQq4%2Fv4vBvmVBWjnBSxD8bnKmz8ajXbS0kyqOV330GsSA%2Fxb1ZwFz3mdsya7SBRut32gUGD7l487sOiyNWnDrOoD0wwpEXP7b2diMWpvRIO1NlZFLfptOGScxK3s%2FuWT067ViaBH577a3SO8N0CIpXaxVvTlMtomQAHivYCPaYv3MNG%2BxskGOqUBWWeL2cW69J9uX8pvcMUdJI8lyHGVLSPwpZbU5LRd%2B2A%2Bj9t6TRoQK0YM26TE8v4xQcHsW5uE4KmJ0NLEDbw60eYl6jVb2LpVsKpZmw%2Bf9on6yaru9FZaY1BC3VUtJBqXi1a9vRj3Jdwb20H6Q8and1%2B2Sqj2htuCdZKEbaj%2BE7QL6ZIcpJU%2Fo6r9GK7ZJYcqcE1QgDacvRWFeUkNdNOq51AReKbK&X-Amz-Signature=c84ca779f8dde78cb10fab6d3308f17d5c4ab9d729aa5df410416c639758d5d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
