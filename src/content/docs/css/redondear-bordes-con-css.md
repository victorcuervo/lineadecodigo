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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TE2S53K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEF3%2FwzUenwBptzI1VJwA8pFXQsVK5i47UEnRJwJEn02AiEAiJf4%2Fz12BvgyQITcMBKOedk%2FmkXIAzOazIQVzU6aUtMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDE733%2Bn3TfUKbmiUKircA8TD0b7eGDFF8pFBtHmzjGggIz65HZx8xXn70IbxOrrdeTqTJftTX5XETfpX0LxfUyeNleDs0IVnUuHBWOBT3GOA%2FZzt9566BP7x6wzpaG%2Bbr9GckddaLajjaBq7VNody7EAmly4EJp5YO2BnLEw%2F8Zx5Y88F3ltK%2Fun0VX1A6kNnhlBz7%2BVwM8M73Q6pdrlAEh21JozBu20CJ0w%2Fdo2bfbULOtUqpwF%2BYNykWWSOjvueu8cpsWvyneeJ6fCVaPKszAx2wuUhyoypfjHkpcarVSEkOBWq1aIvDNSyt6Wz31gw5yFhiBgYG7govBTg7RPA8sT%2BYkGDlgGId9Dr%2Fqsz6HKFqL2xxRfjIaapnXUkpZ323ZO3%2FkDZdZD%2BbvCfpK%2BW%2BweMEIdik3NyeH7YUj3ZDJDELl22dFNuA%2FmEElpDxXQxFTcDb%2FK5O7AIn6bXoPM3Q40PR0aU2jGbNzy9kOSW4UoQV6gCR6MD3bucaN1CfuQ7nFIiFMoMEG%2BGvJtJhrwb6ie2YXC5NdrXH3WGC4Lzn%2B%2Fcwteqv9tVI49t5i8Gjmt7rUoCpZIad6bqCAUYk5LnxPUPoC4a28Ny8qGQGD%2BBLcr7t3riSLramoY9jAHmtfaVj5xg9jxdT7pc8bDMKGqxckGOqUByYoQPLXPZfYuYTIdqyXlleHLiF%2BSkpS3gDMY6M5yjixEZuZRHleghcr56YJ3FtwyZ8HOUj8ZoTDYeVGZHFbLadE7SjQOtlKK1Cxlhw%2BeReXQT1rxPalx7onk2On4mOqP%2B%2BQagxpBD5ZxD4lTL9HzR%2FqVszoCAlglOEZvvETZS6a24Gu0idpwwHfyom9VFXsNhuMY0xWTY2RWxSpg9uTZiF87cFo%2F&X-Amz-Signature=4d2780ba3d504bdb2e4d6edebdb23acad6a6e9fdbd15b742178e5b42fe74c6e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TE2S53K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEF3%2FwzUenwBptzI1VJwA8pFXQsVK5i47UEnRJwJEn02AiEAiJf4%2Fz12BvgyQITcMBKOedk%2FmkXIAzOazIQVzU6aUtMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDE733%2Bn3TfUKbmiUKircA8TD0b7eGDFF8pFBtHmzjGggIz65HZx8xXn70IbxOrrdeTqTJftTX5XETfpX0LxfUyeNleDs0IVnUuHBWOBT3GOA%2FZzt9566BP7x6wzpaG%2Bbr9GckddaLajjaBq7VNody7EAmly4EJp5YO2BnLEw%2F8Zx5Y88F3ltK%2Fun0VX1A6kNnhlBz7%2BVwM8M73Q6pdrlAEh21JozBu20CJ0w%2Fdo2bfbULOtUqpwF%2BYNykWWSOjvueu8cpsWvyneeJ6fCVaPKszAx2wuUhyoypfjHkpcarVSEkOBWq1aIvDNSyt6Wz31gw5yFhiBgYG7govBTg7RPA8sT%2BYkGDlgGId9Dr%2Fqsz6HKFqL2xxRfjIaapnXUkpZ323ZO3%2FkDZdZD%2BbvCfpK%2BW%2BweMEIdik3NyeH7YUj3ZDJDELl22dFNuA%2FmEElpDxXQxFTcDb%2FK5O7AIn6bXoPM3Q40PR0aU2jGbNzy9kOSW4UoQV6gCR6MD3bucaN1CfuQ7nFIiFMoMEG%2BGvJtJhrwb6ie2YXC5NdrXH3WGC4Lzn%2B%2Fcwteqv9tVI49t5i8Gjmt7rUoCpZIad6bqCAUYk5LnxPUPoC4a28Ny8qGQGD%2BBLcr7t3riSLramoY9jAHmtfaVj5xg9jxdT7pc8bDMKGqxckGOqUByYoQPLXPZfYuYTIdqyXlleHLiF%2BSkpS3gDMY6M5yjixEZuZRHleghcr56YJ3FtwyZ8HOUj8ZoTDYeVGZHFbLadE7SjQOtlKK1Cxlhw%2BeReXQT1rxPalx7onk2On4mOqP%2B%2BQagxpBD5ZxD4lTL9HzR%2FqVszoCAlglOEZvvETZS6a24Gu0idpwwHfyom9VFXsNhuMY0xWTY2RWxSpg9uTZiF87cFo%2F&X-Amz-Signature=9a0f118cc792ea03bc14b024eb80773cfa77fc9fbe1bdb5b7d1d61ce5d6faf68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
