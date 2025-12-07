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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVOAW6MA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FJjcscYdGlrC9ET%2Bs3ynuGv9yo9K2OeEWfe7HfMLivQIhAMOPbktQ6BrC7TYRJg337V6TIKT28%2BcD8XOl011lUB%2FMKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbioAalYWE3mUOIJEq3AMoXqsbDAsXdrtiWbDB1o1ZEuISgiEz8p%2FHeGHv9SX6oZukYW5naQz36p%2Bq7QAspPMKV9zL7SkxA1yqocZ1Fv5d2XMK2PIHbEn0F96Ll9ODAcIEU%2BuwQWQMQTKft7XSvsZhpi1EB%2B68M2yNfCcRsPFTSj2BB93UYYz8IF5H5thh2Efly4jiTM4Zy8CfqyHrT7%2BFU%2FPeOiXJrne%2FW6Xy9sLqAjCRKIs21SLOd4%2Fihr%2B86pmCsyQjdFgG3DH2IVjvhad3mn5LoyRznXz5WCgZTJ7gR9giJKHJ5FdFy%2FuXN4FSs%2Fx8gy2H1X7nGM6YeAbiaFny4IOTYRN1YpXDbt60c3KA1T%2FUK%2FW8nY6IwRmOa1OTgsQ8AcxgEKmWWWJggaYJY4LexY0GkTBjjUEwJhLoMit5X5uRmEywLsJrZdu8TRrJVypgeJx9IXhwgCbvQwCAuCZtxKAmMnLo%2FS5EgLJPklJyMWdXFJ%2FuXpo2ynORRiaED9PgvwAad5dur%2FE7N3BSWCq%2F0gWhKnP3v9HTfjZ8okyvi7TobAiTFgKE86B3UxXLcHZ539Rhc2pXLxBZtBHJzGZMWnbnF7TjS7YtXxqeuLhXTlazAhV6lCFxruZgPchq%2BhFkEza45U9wSrp5CjDH%2FdLJBjqkAT94J%2FowE%2BhPt4EcghCbvU%2BCxWuxm5sHoCFWYl14wR2eNCe9JjokzhG%2FGfiYg3N5gN9usOLS%2FYAQ9hzV2VV9sJyDLWrMVtgLD3QPRbZ7LDR7Vso3zG%2BJI1LZwg8r7BDpdC%2BJ9HEPGrKXMVwzMRE2dSkpKW2LjV%2BMTZxtBsLLTcBmennNku%2FmtcWC2bDgWSqjGPh27fH%2F%2FghsP5%2FUEYub0aIVK8Ie&X-Amz-Signature=357d140876826abbc41f464cbf3e9a9b74b2db1d8b13fcb3069a133aa71a03ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVOAW6MA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FJjcscYdGlrC9ET%2Bs3ynuGv9yo9K2OeEWfe7HfMLivQIhAMOPbktQ6BrC7TYRJg337V6TIKT28%2BcD8XOl011lUB%2FMKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbioAalYWE3mUOIJEq3AMoXqsbDAsXdrtiWbDB1o1ZEuISgiEz8p%2FHeGHv9SX6oZukYW5naQz36p%2Bq7QAspPMKV9zL7SkxA1yqocZ1Fv5d2XMK2PIHbEn0F96Ll9ODAcIEU%2BuwQWQMQTKft7XSvsZhpi1EB%2B68M2yNfCcRsPFTSj2BB93UYYz8IF5H5thh2Efly4jiTM4Zy8CfqyHrT7%2BFU%2FPeOiXJrne%2FW6Xy9sLqAjCRKIs21SLOd4%2Fihr%2B86pmCsyQjdFgG3DH2IVjvhad3mn5LoyRznXz5WCgZTJ7gR9giJKHJ5FdFy%2FuXN4FSs%2Fx8gy2H1X7nGM6YeAbiaFny4IOTYRN1YpXDbt60c3KA1T%2FUK%2FW8nY6IwRmOa1OTgsQ8AcxgEKmWWWJggaYJY4LexY0GkTBjjUEwJhLoMit5X5uRmEywLsJrZdu8TRrJVypgeJx9IXhwgCbvQwCAuCZtxKAmMnLo%2FS5EgLJPklJyMWdXFJ%2FuXpo2ynORRiaED9PgvwAad5dur%2FE7N3BSWCq%2F0gWhKnP3v9HTfjZ8okyvi7TobAiTFgKE86B3UxXLcHZ539Rhc2pXLxBZtBHJzGZMWnbnF7TjS7YtXxqeuLhXTlazAhV6lCFxruZgPchq%2BhFkEza45U9wSrp5CjDH%2FdLJBjqkAT94J%2FowE%2BhPt4EcghCbvU%2BCxWuxm5sHoCFWYl14wR2eNCe9JjokzhG%2FGfiYg3N5gN9usOLS%2FYAQ9hzV2VV9sJyDLWrMVtgLD3QPRbZ7LDR7Vso3zG%2BJI1LZwg8r7BDpdC%2BJ9HEPGrKXMVwzMRE2dSkpKW2LjV%2BMTZxtBsLLTcBmennNku%2FmtcWC2bDgWSqjGPh27fH%2F%2FghsP5%2FUEYub0aIVK8Ie&X-Amz-Signature=c4f41ee7a06b93247a5ec72a76f2465d0917bfd071c18e54f018455f588af0aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
