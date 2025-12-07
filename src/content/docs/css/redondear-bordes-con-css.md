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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB55NOGE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4rzOwy8vrrrqaHOIuqG72MQoYaK5zeKFpOjpyu6nEDAiA3BSyLips8MALMCe9A8hoy87Y68TCVNaJK4oQG3LUU1yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaG2HNceNfcIYmfozKtwDWShl5ZDu6bLmkA0B7KVVBQHR432xMO36OhSZJxVc0LVdOP8Vu7vacs5HmYv%2F7ieRLtjShZjEypaB5MWKGEqIsMrocCg5fovtDDRUyoLCafNz1dFkQGJwgeae320pDvNISrehR7PB92UTw%2B1QFypiiKBYVtY0fMYZYIrDnAyurSF46EN3gGok80D2LsG%2FdirsDj3XGPS3wYIiuv0kt18y06EyD5UNnkSB11aaKM%2BFP4PqestlF9qvI%2BZ89I%2B%2F6w3I%2BZujWOnMVj%2B97cIzoZJ2Z5dx4D2o4aK%2BngAiEerfz3HWtAkeyRigYbvffeRT2w4MgpBIDfCIw61xBibdtKXMkCYbQWfxI6Zmii2LGnPaje9TTm7BRN6%2BkmEJzZ8sHMDFGknIyOIURATV5HqeXt%2FlUOIAI3ZpcDxsZ7DxjW903VZ%2BBNICHA1pVWFsbIjI9aiif6Tq0nuqQCtl7fmOQr5Wwr39w9fCPj6L7xeq%2BV4wkJo2aFW1c0HEKmks%2Fi5rcBabZD3nUk0eywPlWhp9IHtMcVzDntxGwyTAZZP7YWKq8X6gDzSonM5aSUBShTfcEd5zauQIe3mtuEakgveOcLXMQGUrkcPzVWoWB7zxbdzYHY6O5yHc%2BtYONHhmE80w1LzWyQY6pgFo5DLlAUe6k42fn8IgukCiSvUEUxalHn99HG5JI8o1SyqMcAH9TXTx7T8Js8GHj4UGWhawKoaH%2BYBo6hSOfmEwsrdL8KLgKTJbcdUKzQRyeboHs3s1XX60NwyCKctwShischKli%2FFok%2F6QOJp2FaK7YYE4iqaELdV%2BCefoeRutrj0FBkEnwtP6h3wqa0hiagMeKU7aENdQR9KF0U1wDlGVbBneWqWB&X-Amz-Signature=5dd57ca4db63dd593d5a72c33b34923cb99d9613d812173e996b4e92d37d53d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB55NOGE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4rzOwy8vrrrqaHOIuqG72MQoYaK5zeKFpOjpyu6nEDAiA3BSyLips8MALMCe9A8hoy87Y68TCVNaJK4oQG3LUU1yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaG2HNceNfcIYmfozKtwDWShl5ZDu6bLmkA0B7KVVBQHR432xMO36OhSZJxVc0LVdOP8Vu7vacs5HmYv%2F7ieRLtjShZjEypaB5MWKGEqIsMrocCg5fovtDDRUyoLCafNz1dFkQGJwgeae320pDvNISrehR7PB92UTw%2B1QFypiiKBYVtY0fMYZYIrDnAyurSF46EN3gGok80D2LsG%2FdirsDj3XGPS3wYIiuv0kt18y06EyD5UNnkSB11aaKM%2BFP4PqestlF9qvI%2BZ89I%2B%2F6w3I%2BZujWOnMVj%2B97cIzoZJ2Z5dx4D2o4aK%2BngAiEerfz3HWtAkeyRigYbvffeRT2w4MgpBIDfCIw61xBibdtKXMkCYbQWfxI6Zmii2LGnPaje9TTm7BRN6%2BkmEJzZ8sHMDFGknIyOIURATV5HqeXt%2FlUOIAI3ZpcDxsZ7DxjW903VZ%2BBNICHA1pVWFsbIjI9aiif6Tq0nuqQCtl7fmOQr5Wwr39w9fCPj6L7xeq%2BV4wkJo2aFW1c0HEKmks%2Fi5rcBabZD3nUk0eywPlWhp9IHtMcVzDntxGwyTAZZP7YWKq8X6gDzSonM5aSUBShTfcEd5zauQIe3mtuEakgveOcLXMQGUrkcPzVWoWB7zxbdzYHY6O5yHc%2BtYONHhmE80w1LzWyQY6pgFo5DLlAUe6k42fn8IgukCiSvUEUxalHn99HG5JI8o1SyqMcAH9TXTx7T8Js8GHj4UGWhawKoaH%2BYBo6hSOfmEwsrdL8KLgKTJbcdUKzQRyeboHs3s1XX60NwyCKctwShischKli%2FFok%2F6QOJp2FaK7YYE4iqaELdV%2BCefoeRutrj0FBkEnwtP6h3wqa0hiagMeKU7aENdQR9KF0U1wDlGVbBneWqWB&X-Amz-Signature=2f9d048e4c719a7dffaa21cd72ae4954b4da6ee4cc916a58469a29968b771efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
