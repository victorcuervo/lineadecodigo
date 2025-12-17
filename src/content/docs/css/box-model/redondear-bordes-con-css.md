---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBXK2QYL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL3SDdNlVnP9CYp1Iepro6odMTQwQlpZhm%2FTDvpNc7xgIgLIv38C%2B%2BVIxHwhyvuL4yrTXtt8RF26IAzXhUDtqI6sQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDGsRKZObLPPhr1254SrcA%2B1j%2Fkd8p6mu1nguMaS8sx35uHCwJex3Cz5iAhKcUjEf5RxxOh%2BwfR%2FEtTubq0KHP1mnK2BBVk5qPWl7gDzWWJrwNc%2F2Aruf1NRNqFo%2FxzD5x81kQTlp9gSyUGXhNLsCrj6sw%2B2ajL4UchWsCzM2kP0D3CVxKqY%2Fl0Pm8JnI1JZLcdRBN5ZkJ%2BSWMPg8kydtVE2VOMa%2BybUK6URtYq0O%2F4MFU%2B7EljXdVoWebAXpqzUIQOVYq%2FbRqw93z5TkZEwVKniPvzsY%2F0Yl6DtXHmRPvlOCSUVe2l7nZ5lAT5MaDKugieHzKtmU1HbSEKrdAT4KqS8ZBEXM67GX4%2FPpadwvvNtkdncXtVZgAIHOV7iBAMYuLRWQ9JUj1jp0ZcOsCEnLQP1gglc%2FI2Z61r3ggrYb16LSsn0EQBRWRn5u5krkKbYlerb4GeupeTO2P%2BVkBDsiMX9uyYiROSbZkpIylwrPiZIWpvGTEOV%2F1eTvHmPlEyDyx1ARWtEhlFjOOlesTCCNq2I8heyAcFp51tCUjgqMaBXAaQrgD5gcbeZQtglzZjqjOt1qQSzFYrkivxG1mdo0FOZ9DGsiIssnoOAfs7Sy6kr4337QkCcyqGVlPCtSFLiB%2FwK0Uq3ta9F8uSbgMI%2FpiMoGOqUBZbhINrNt0v43YUIumn3IiL9PH1sZww5qcCfF%2BLi09XsepC6%2FvwtNj5Ad4bN58i8AKD9PVYFV3CwZWKFjjBkNn7bq5YfmccdERnddizF4ZKD3gsohsWZmEq3Gaq%2Fli8jf0zUeFGE%2FWGobihGeeFFpKe8EdnBhG4r6jgcrZEGl9caeDqJ2yohGvTlMOvpsvn1JVZh47Y3LEYLTvPFI1FOHRcVfK2nU&X-Amz-Signature=ff272733b1539dc616b6d81f0dd242a670e081fe57d9e7a619c95a506a6dea02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBXK2QYL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL3SDdNlVnP9CYp1Iepro6odMTQwQlpZhm%2FTDvpNc7xgIgLIv38C%2B%2BVIxHwhyvuL4yrTXtt8RF26IAzXhUDtqI6sQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDGsRKZObLPPhr1254SrcA%2B1j%2Fkd8p6mu1nguMaS8sx35uHCwJex3Cz5iAhKcUjEf5RxxOh%2BwfR%2FEtTubq0KHP1mnK2BBVk5qPWl7gDzWWJrwNc%2F2Aruf1NRNqFo%2FxzD5x81kQTlp9gSyUGXhNLsCrj6sw%2B2ajL4UchWsCzM2kP0D3CVxKqY%2Fl0Pm8JnI1JZLcdRBN5ZkJ%2BSWMPg8kydtVE2VOMa%2BybUK6URtYq0O%2F4MFU%2B7EljXdVoWebAXpqzUIQOVYq%2FbRqw93z5TkZEwVKniPvzsY%2F0Yl6DtXHmRPvlOCSUVe2l7nZ5lAT5MaDKugieHzKtmU1HbSEKrdAT4KqS8ZBEXM67GX4%2FPpadwvvNtkdncXtVZgAIHOV7iBAMYuLRWQ9JUj1jp0ZcOsCEnLQP1gglc%2FI2Z61r3ggrYb16LSsn0EQBRWRn5u5krkKbYlerb4GeupeTO2P%2BVkBDsiMX9uyYiROSbZkpIylwrPiZIWpvGTEOV%2F1eTvHmPlEyDyx1ARWtEhlFjOOlesTCCNq2I8heyAcFp51tCUjgqMaBXAaQrgD5gcbeZQtglzZjqjOt1qQSzFYrkivxG1mdo0FOZ9DGsiIssnoOAfs7Sy6kr4337QkCcyqGVlPCtSFLiB%2FwK0Uq3ta9F8uSbgMI%2FpiMoGOqUBZbhINrNt0v43YUIumn3IiL9PH1sZww5qcCfF%2BLi09XsepC6%2FvwtNj5Ad4bN58i8AKD9PVYFV3CwZWKFjjBkNn7bq5YfmccdERnddizF4ZKD3gsohsWZmEq3Gaq%2Fli8jf0zUeFGE%2FWGobihGeeFFpKe8EdnBhG4r6jgcrZEGl9caeDqJ2yohGvTlMOvpsvn1JVZh47Y3LEYLTvPFI1FOHRcVfK2nU&X-Amz-Signature=411dae66b6c006f86f0934b7cb75cc3568a90ce8be8933e5c67c0a2517881ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
