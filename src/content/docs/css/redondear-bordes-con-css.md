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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUETO2SU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCGZQEKjUlvU118liLSUmAkThBK%2BpsATeYL6VGnHxaslQIhAPM9IxSOSqrAvq4xcWZzAlBfooFEsL53YBD0DVlHP9sTKv8DCEgQABoMNjM3NDIzMTgzODA1IgwzA6e2uSg4WxCuoe4q3APzJzslXvvfKMUgZG1%2FforFrjVxDP1O%2BIKkK1026onqALZY0wYBgrnwd9yCwQXHsr8hjVI3CvGIdkD9jH0oY008HUSnBPHHi8H%2BYblCVZ1D9WSg%2BVk2OiXp4vAFidD2LYiloxjrwsr%2BrTe%2FURCqe0haJmv0mYUqvKB%2B2ISnbQbGRFTozsJic0ZxWUDSBaM6Fq5VYyhKB%2BY4qqTGERJjnKsZtTQ5d8OGzEe59xlNa949b8rnqN5X%2FM0uBUc8wJhHEu6D12MQ%2Btz3KdeS9AV7YM0FPwWhguUwiShnAIvJzTTHRWYlLcrqJfUih3AUv76Veg7E65WiVdw579R5qDTHMGiecDRwsu2yULS8WK5lzNkb6adYaaPTdDegIPCgP35n695In7uwG5GsA%2B5jpxf0vbU5Y3WEBiqpfEURVj9TOl%2B8AQJqlojJPvhUHHy1sx%2BAgmWPb6XCxn8z7HrrVTxCbG5mU6TjO5rVg3VXOTHvRM%2Bey%2FaJ300b3l6hOgfN3%2BfJrzuk1dkjdeJ4tohN1%2FqGKS5zwiqHhc3cOMPiws%2BdjgJxmsobp92bbj5%2BVkzNhbjZOCOXB6TsoTLjp%2BDqH7vqszvbxahOL0SWylww8lU5HrTkf4oYn9qLYPcxsiSWVjD1vsbJBjqkAetS92bVTDKH1oqY%2FAAROn6ay4TFJM4SqmPS6xvE%2FpFljNslG%2BsO1clwP%2BnKUsfLcBUP%2BBIGRxE6hzrI4ux76sZGMyE27awGZeMAhNjH2L2CiptKH%2BAq9k26MFaMXiDirwwrisXYsrrFpgb7IWckjsf3cH26Tutej4SUniLkg5zkE1bEwqYnTUzUpFXfSItmf%2FSBFcephayrB4wUQEIIOuaYCAqS&X-Amz-Signature=5d1fb7a6837ca9eb493bc70d298c9ed8e538c812aff8153358d8697e565faaec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUETO2SU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCGZQEKjUlvU118liLSUmAkThBK%2BpsATeYL6VGnHxaslQIhAPM9IxSOSqrAvq4xcWZzAlBfooFEsL53YBD0DVlHP9sTKv8DCEgQABoMNjM3NDIzMTgzODA1IgwzA6e2uSg4WxCuoe4q3APzJzslXvvfKMUgZG1%2FforFrjVxDP1O%2BIKkK1026onqALZY0wYBgrnwd9yCwQXHsr8hjVI3CvGIdkD9jH0oY008HUSnBPHHi8H%2BYblCVZ1D9WSg%2BVk2OiXp4vAFidD2LYiloxjrwsr%2BrTe%2FURCqe0haJmv0mYUqvKB%2B2ISnbQbGRFTozsJic0ZxWUDSBaM6Fq5VYyhKB%2BY4qqTGERJjnKsZtTQ5d8OGzEe59xlNa949b8rnqN5X%2FM0uBUc8wJhHEu6D12MQ%2Btz3KdeS9AV7YM0FPwWhguUwiShnAIvJzTTHRWYlLcrqJfUih3AUv76Veg7E65WiVdw579R5qDTHMGiecDRwsu2yULS8WK5lzNkb6adYaaPTdDegIPCgP35n695In7uwG5GsA%2B5jpxf0vbU5Y3WEBiqpfEURVj9TOl%2B8AQJqlojJPvhUHHy1sx%2BAgmWPb6XCxn8z7HrrVTxCbG5mU6TjO5rVg3VXOTHvRM%2Bey%2FaJ300b3l6hOgfN3%2BfJrzuk1dkjdeJ4tohN1%2FqGKS5zwiqHhc3cOMPiws%2BdjgJxmsobp92bbj5%2BVkzNhbjZOCOXB6TsoTLjp%2BDqH7vqszvbxahOL0SWylww8lU5HrTkf4oYn9qLYPcxsiSWVjD1vsbJBjqkAetS92bVTDKH1oqY%2FAAROn6ay4TFJM4SqmPS6xvE%2FpFljNslG%2BsO1clwP%2BnKUsfLcBUP%2BBIGRxE6hzrI4ux76sZGMyE27awGZeMAhNjH2L2CiptKH%2BAq9k26MFaMXiDirwwrisXYsrrFpgb7IWckjsf3cH26Tutej4SUniLkg5zkE1bEwqYnTUzUpFXfSItmf%2FSBFcephayrB4wUQEIIOuaYCAqS&X-Amz-Signature=b50e57a270a80338d6fe3101c1bf6f4ec26e4fc3bfa81671232a3abd4e051b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
