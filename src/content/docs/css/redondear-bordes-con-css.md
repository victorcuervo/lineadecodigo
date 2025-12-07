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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXKMKP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYqS2gDHPycRc8dzDEZ8olh4TOmxxTuksF2hWoO4uEPAiEAr%2FHsRjLHzVkL46udqZajy3Q3goJImXQPseqNSwuOjX8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJh1CedmE7Nz5VKdgCrcA4P%2BOnqxFMqLFYjaVU%2BV8mGr4cNG%2FyKxgQrjsnc%2Bq2XbkKTwb1oF6yDkq6yEO2OIg0Hhr6inUsFwTB7qG221KA6WZwPjc9a6u44l1EZZe1EripkqstaSKWhlwvZEqZxasCsNh0lrBRvdJrv%2FoZSOC4vTLN%2Bu38YdXFXN7egC7%2F5fWmje9PPn4dDdRLoxFWGXp7bYK%2FoBUmoJQkc0aUefKsbV%2BqVKgd2sWGBAWfWTxGpTnaLvY1UcfxqY9rdZjNUwPHXMudVU9eszmFH5A0Gi7%2FBuyxwxL2XGpYrtr8u6kuxhdh5CathNcRFrcN3nMIMVEJ7qdgG2Yju2ZIlkJTicyR9Er%2FuNz%2B8i7vjWcIrs0qXACo8e6QT63jabBC8zG%2B1zjbVRESq0A6MZ1oX472Ub9iKDpaBx23Roe32gr2jrt6qPjT79R2NrsvFgslcKKMBXTkmgYuRvN%2FjDfpYMfk29o3q76Kj4dXLQ8N4IQO0ZPaczfPbj2J93TdZ1cUAr7%2FnqQBzOjX%2B%2FPlWnxTMxtM48wVYnQntNfiVMpb0t%2FH34aOD8I7drlWKF8IKkUMN3ra4BB9iVZH1%2BMTpRgm5GtB0D7PU5H0YLNbVkrmVLFXs0P%2BP2wpR9GWMhSj5dJ%2FcEMMGa1ckGOqUByCX2O91FW%2B8lz7s9HORT17B299OoNINXOVkjgQXGrZ8OZu3LKU%2FIxi5ucyAhD81J5jXepRd%2BHJOQ14Lraq7d%2FeacdwXFjtsJbSeRB8nNKX%2BIAidVq%2BRXhh7c3Zp0ZITCKrRiqpdXAGjeLws5NK%2FwcqYRAEe9QL7UmMcfvaoo3l2%2F2BrIhBiV2Nh33mEBZGdE7N8I4leNmVHfoJzFiYmGswJRLtcS&X-Amz-Signature=234afdc10000f8fdfbf5c0ed1d82422d63882d0921306a3a1e5508de79819dba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXKMKP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYqS2gDHPycRc8dzDEZ8olh4TOmxxTuksF2hWoO4uEPAiEAr%2FHsRjLHzVkL46udqZajy3Q3goJImXQPseqNSwuOjX8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJh1CedmE7Nz5VKdgCrcA4P%2BOnqxFMqLFYjaVU%2BV8mGr4cNG%2FyKxgQrjsnc%2Bq2XbkKTwb1oF6yDkq6yEO2OIg0Hhr6inUsFwTB7qG221KA6WZwPjc9a6u44l1EZZe1EripkqstaSKWhlwvZEqZxasCsNh0lrBRvdJrv%2FoZSOC4vTLN%2Bu38YdXFXN7egC7%2F5fWmje9PPn4dDdRLoxFWGXp7bYK%2FoBUmoJQkc0aUefKsbV%2BqVKgd2sWGBAWfWTxGpTnaLvY1UcfxqY9rdZjNUwPHXMudVU9eszmFH5A0Gi7%2FBuyxwxL2XGpYrtr8u6kuxhdh5CathNcRFrcN3nMIMVEJ7qdgG2Yju2ZIlkJTicyR9Er%2FuNz%2B8i7vjWcIrs0qXACo8e6QT63jabBC8zG%2B1zjbVRESq0A6MZ1oX472Ub9iKDpaBx23Roe32gr2jrt6qPjT79R2NrsvFgslcKKMBXTkmgYuRvN%2FjDfpYMfk29o3q76Kj4dXLQ8N4IQO0ZPaczfPbj2J93TdZ1cUAr7%2FnqQBzOjX%2B%2FPlWnxTMxtM48wVYnQntNfiVMpb0t%2FH34aOD8I7drlWKF8IKkUMN3ra4BB9iVZH1%2BMTpRgm5GtB0D7PU5H0YLNbVkrmVLFXs0P%2BP2wpR9GWMhSj5dJ%2FcEMMGa1ckGOqUByCX2O91FW%2B8lz7s9HORT17B299OoNINXOVkjgQXGrZ8OZu3LKU%2FIxi5ucyAhD81J5jXepRd%2BHJOQ14Lraq7d%2FeacdwXFjtsJbSeRB8nNKX%2BIAidVq%2BRXhh7c3Zp0ZITCKrRiqpdXAGjeLws5NK%2FwcqYRAEe9QL7UmMcfvaoo3l2%2F2BrIhBiV2Nh33mEBZGdE7N8I4leNmVHfoJzFiYmGswJRLtcS&X-Amz-Signature=e19794f92a2a9c040ba9b89871642cd235bc5da495efb3c7268a294b141376fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
