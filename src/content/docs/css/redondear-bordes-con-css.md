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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URYE5CDO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFDVggL44gj3dU9glC8z2AMc2%2Bq%2FaeCVRkaV6sXflLshAiEAqvGQLncyKUwTuRMrkVt8YNy4hX4jW%2BgeAoa4qfPVQvoq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHGCwPJNMM6nvxG1eircAztQ8i5RyatD%2Fc65deMc7h3Oio7xC9P3s7xHVWhL7XqyXMjB2E8Vz2rLpmMJ4kdwvMZs8dDZb1MzVuJDEd86B9eKOMdNaC0CY6G6oJyXISw5p6yJjjTyKp0w1kvNlMHaBzdabyNMoQPTjFMfBPg3D%2BtaMM8OaIdmmtxAtKbQKWrgjzJIvezVxxMtxyjBdMD10LaeHCbMRDFBBj7jg92Sk0H6x6%2Bs6nEV3vuVdhYx15q3%2BVi%2FZk6AgoUS3b%2F3n5ng8v6HR2KncrqB9wgSZizL9LdzLr75Nn5OLmAxoQZf1wLiFptGw4n1XVX9RQe7C8cyMT3zO8rtVcW0hwYGsk9BHnAeAzgnYH9X6Q4kW98larMk8RWm4N8FGYrkP5ySvSk%2BFEfRCr68%2FwXvRWP0CCpxeX0uxkznQpr4OpJTRqEa%2B8OSyMrrrGbRE%2Bc2qQaIDoazn0Rzct6516Dtfs1xYR%2FTJ2esAgKDJMzITmGO9J26Cj1RJTHqNmwXRf3x3sHuZpjHCa2MsD7BBTFQUA0ynhZQ0rSLbiPDSDBcPsgDlHed0UbdK2In6ADiEKUCkIo8cLw%2FHGHH22QP8Hqa5VgM0gDJ5rPJwBqr8WjXEePuAURK%2FXhtLG6NvSv1336LQeaVMJ2rxckGOqUBp%2FlhG5uC8RR0kR%2FFTR%2Fb32uoWyLLJyEx1IddbGbrLgnRVXJ41L64u9XcL9A5w4PwsMH7MKxQridooE2Ms1SDoT9BTE6kTlKD2ryM3GLZenAwx9bd6Y8wR5OOlTDt9%2BWBNFMnOHm2TKzI2dMdOwx6nNOLppaHAia2qx0GniBEnEV4bjOBgGdy3%2F7wiDkuhgrRpQJR0rkfMlXssRepEs64lDSc4Y2Y&X-Amz-Signature=b7139366a15dfc3af291cbc659f56385949c6fe9435652d0aa877a5267930684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URYE5CDO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFDVggL44gj3dU9glC8z2AMc2%2Bq%2FaeCVRkaV6sXflLshAiEAqvGQLncyKUwTuRMrkVt8YNy4hX4jW%2BgeAoa4qfPVQvoq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHGCwPJNMM6nvxG1eircAztQ8i5RyatD%2Fc65deMc7h3Oio7xC9P3s7xHVWhL7XqyXMjB2E8Vz2rLpmMJ4kdwvMZs8dDZb1MzVuJDEd86B9eKOMdNaC0CY6G6oJyXISw5p6yJjjTyKp0w1kvNlMHaBzdabyNMoQPTjFMfBPg3D%2BtaMM8OaIdmmtxAtKbQKWrgjzJIvezVxxMtxyjBdMD10LaeHCbMRDFBBj7jg92Sk0H6x6%2Bs6nEV3vuVdhYx15q3%2BVi%2FZk6AgoUS3b%2F3n5ng8v6HR2KncrqB9wgSZizL9LdzLr75Nn5OLmAxoQZf1wLiFptGw4n1XVX9RQe7C8cyMT3zO8rtVcW0hwYGsk9BHnAeAzgnYH9X6Q4kW98larMk8RWm4N8FGYrkP5ySvSk%2BFEfRCr68%2FwXvRWP0CCpxeX0uxkznQpr4OpJTRqEa%2B8OSyMrrrGbRE%2Bc2qQaIDoazn0Rzct6516Dtfs1xYR%2FTJ2esAgKDJMzITmGO9J26Cj1RJTHqNmwXRf3x3sHuZpjHCa2MsD7BBTFQUA0ynhZQ0rSLbiPDSDBcPsgDlHed0UbdK2In6ADiEKUCkIo8cLw%2FHGHH22QP8Hqa5VgM0gDJ5rPJwBqr8WjXEePuAURK%2FXhtLG6NvSv1336LQeaVMJ2rxckGOqUBp%2FlhG5uC8RR0kR%2FFTR%2Fb32uoWyLLJyEx1IddbGbrLgnRVXJ41L64u9XcL9A5w4PwsMH7MKxQridooE2Ms1SDoT9BTE6kTlKD2ryM3GLZenAwx9bd6Y8wR5OOlTDt9%2BWBNFMnOHm2TKzI2dMdOwx6nNOLppaHAia2qx0GniBEnEV4bjOBgGdy3%2F7wiDkuhgrRpQJR0rkfMlXssRepEs64lDSc4Y2Y&X-Amz-Signature=b9548ef13a8e415b8340771c9b58bef990f4978934036362be29735fd8876136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
