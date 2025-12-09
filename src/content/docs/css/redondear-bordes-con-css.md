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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AST65A2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGllcIIdIwKGOEt%2FfBPm00k4g3crDHjzUfvncq0QjQLVAiART22QxOFPqKNAAXjZOF6FksXuGjXnO55gEM9CbwGW%2BSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUUpJkfu5rVWE5KlcKtwDZtheNbEusGUZbXpZkvFH5WPqET9mVgMzfBXy9SSJbalKFxyfw96B9tW93GPgwyf8q0ZG57g8EmORog%2Bk%2FI8Q9qD0OXwO2KnpGWfJvnoLiFdxlqDXEYvGobpq2dyqLmOb1Et%2BKhRMqeOHhgfpd%2Buob%2FtxhzQk4fFSH3jb39dNbV3U%2BSmZC8XiBWJgebRww1t%2BPYfI4ECq8840HBp1j0bB7aboLXfvSHITV2VvhY43jxXEt5EhJFeysW7RtFNDHfYZgb9Jn5mYBp4eaYXc6ZD7DAreFBK%2BJZ3nFxi1obocopfVA9eC%2BLnNJMf1Njg%2BFURSdAfSisO61UQExE0tyx%2FwFDMOMd7EhsWc9RD85nP3SKO580MprYNTKeI2Y0qzFT%2FSLktx5N0PwIUCxMPMNge62l8nG%2Bw4Mle165FaYXO0u81EQZXr2kq5Cg76sr3MEhFj7g2GjxEjW%2BrY5G2Hssvh%2BRKMsuqB0bac8y5%2FdiugD4uiZRCqOvhFEOZeyGb1VGKdo0%2B934mPVwHM31%2Bjt%2B7JNSWnOTYqfVio4sl4xpxSUx5r34voH6fSTiI%2BAKOV5dYUmG3AOFqoTk80BeUSynf4xsihXWvRCc9IMjjunTGAbeANAULJS3wTjrDet%2BIw5q3eyQY6pgGiCcF%2BU8Q3BOf3jBWNOSz9i8YRy%2BlIT07AVJ7Q43ePXEh3QZZIuZsWni19jVpQYWEkS8IUnzGf6Lakd%2Bod%2F5dlxEo7ETFtk6JPIQMXsEWdHNSN3LgPUfbJPCItQQmH%2Bix98LizkwKdiGju1Cy92%2FNWZZMr35zLD3H5oyR0RI84C7EP%2FnvgtX04rUqWQUoYnuxQj45Ur6whXXsIC23yIgoRo2jx%2F6VM&X-Amz-Signature=6c719e6a24eef70d070fe83df811475a84d43764ffbf01f9d2a85eebfd292132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AST65A2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGllcIIdIwKGOEt%2FfBPm00k4g3crDHjzUfvncq0QjQLVAiART22QxOFPqKNAAXjZOF6FksXuGjXnO55gEM9CbwGW%2BSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUUpJkfu5rVWE5KlcKtwDZtheNbEusGUZbXpZkvFH5WPqET9mVgMzfBXy9SSJbalKFxyfw96B9tW93GPgwyf8q0ZG57g8EmORog%2Bk%2FI8Q9qD0OXwO2KnpGWfJvnoLiFdxlqDXEYvGobpq2dyqLmOb1Et%2BKhRMqeOHhgfpd%2Buob%2FtxhzQk4fFSH3jb39dNbV3U%2BSmZC8XiBWJgebRww1t%2BPYfI4ECq8840HBp1j0bB7aboLXfvSHITV2VvhY43jxXEt5EhJFeysW7RtFNDHfYZgb9Jn5mYBp4eaYXc6ZD7DAreFBK%2BJZ3nFxi1obocopfVA9eC%2BLnNJMf1Njg%2BFURSdAfSisO61UQExE0tyx%2FwFDMOMd7EhsWc9RD85nP3SKO580MprYNTKeI2Y0qzFT%2FSLktx5N0PwIUCxMPMNge62l8nG%2Bw4Mle165FaYXO0u81EQZXr2kq5Cg76sr3MEhFj7g2GjxEjW%2BrY5G2Hssvh%2BRKMsuqB0bac8y5%2FdiugD4uiZRCqOvhFEOZeyGb1VGKdo0%2B934mPVwHM31%2Bjt%2B7JNSWnOTYqfVio4sl4xpxSUx5r34voH6fSTiI%2BAKOV5dYUmG3AOFqoTk80BeUSynf4xsihXWvRCc9IMjjunTGAbeANAULJS3wTjrDet%2BIw5q3eyQY6pgGiCcF%2BU8Q3BOf3jBWNOSz9i8YRy%2BlIT07AVJ7Q43ePXEh3QZZIuZsWni19jVpQYWEkS8IUnzGf6Lakd%2Bod%2F5dlxEo7ETFtk6JPIQMXsEWdHNSN3LgPUfbJPCItQQmH%2Bix98LizkwKdiGju1Cy92%2FNWZZMr35zLD3H5oyR0RI84C7EP%2FnvgtX04rUqWQUoYnuxQj45Ur6whXXsIC23yIgoRo2jx%2F6VM&X-Amz-Signature=2e1f96f37ab95624a6fdc37477ba4f9437b1ae3f656794314f10001a10a69a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
