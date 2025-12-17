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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FH3CYG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsesLQfZ87mdmay9EooLrxbKB2ilyLOiTugQy%2Fs842fQIhAKlCmWVx2%2BsfEXBSWdFAAWkdpqxG0Bbx3swRhQ4eH%2BhxKv8DCH8QABoMNjM3NDIzMTgzODA1IgwcbvCgljRdAVix8Aoq3ANhFrmSGHy%2BpAfAwTCyQGQ1a0IYB74odFXelPLaAH4d0PE2q7H%2BZ6T0Lg5r7MeuwNyKSGszlUTKMKOAZBwKtQqsb5rR9pdh4wfrhpvpVOMFq%2Bqd4de%2B0fBbHMifVcWVlQ%2BKdGDMrpfE24UwcMwNIGyQnSeZGecwW8w4ZQMyGgrN138refp13uDz%2FQRKpV66awLn1AqHiNPNHUT9yQZSrEIyABN5LvHtiIf9uUCowUryt0OXhYqSoDTE0tDoSOjQoBNqnXUK36L4t2fEjb3VFNJGtvnJbf26Wd5j4TSX78q4eQbmOLv%2FeFPH9utPDPjpQWMncudf0NYJrF%2Be7HdAtAztpYYMnK58%2Bvjk5tCva%2BSP4qZT7FaBWU%2F4KGbofkCkUa11mHmUPfmgtUG0101gbZSlVmdsll2zCSaMMkoATSfHFbTZSWB9SJtpRd2R70UeK8nbTK5whICbSmzwDEK6jTmwPdTaZQcgIRpEY%2BKtAAT12%2BemkyWJUgBp3nbE26g4V34%2BpCuD%2BYqgDOdVVC%2F5g5P7b0jpPP5KY%2Br8YLKS3k07Od9XUBzxtE21C8Dew46dXaIdAV1X3RlLKAwQhEQR%2BizDT5TUe7CNRhju5XZcDr%2FB5kpXqh7xkc8zpw%2B%2FMDCN4YrKBjqkAYm7HWFtxIywDToLyuuVCcGnyvhXlfyTAJnj4XDKRbDw4c7Rrr6azKvp8MtYBevIPIozi9qKZHLMLFqw6a3hFVMywR%2FM52JxnyDOkJRUmMkzJ4fjEqRBogFeu0uxtSEnFWDZJjzk7yTQM7GxECTkTgN8nfPRsGpt7eTUOgsJmcJ1de1GStgJyjUcpKjP7lo9j8w%2F1cNZc%2FbU7v%2BnAMU0mdpIkQy1&X-Amz-Signature=8987c7746c90edc8b4d90fb339386aa503017ec2a96959dcb30fac339bf11046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FH3CYG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsesLQfZ87mdmay9EooLrxbKB2ilyLOiTugQy%2Fs842fQIhAKlCmWVx2%2BsfEXBSWdFAAWkdpqxG0Bbx3swRhQ4eH%2BhxKv8DCH8QABoMNjM3NDIzMTgzODA1IgwcbvCgljRdAVix8Aoq3ANhFrmSGHy%2BpAfAwTCyQGQ1a0IYB74odFXelPLaAH4d0PE2q7H%2BZ6T0Lg5r7MeuwNyKSGszlUTKMKOAZBwKtQqsb5rR9pdh4wfrhpvpVOMFq%2Bqd4de%2B0fBbHMifVcWVlQ%2BKdGDMrpfE24UwcMwNIGyQnSeZGecwW8w4ZQMyGgrN138refp13uDz%2FQRKpV66awLn1AqHiNPNHUT9yQZSrEIyABN5LvHtiIf9uUCowUryt0OXhYqSoDTE0tDoSOjQoBNqnXUK36L4t2fEjb3VFNJGtvnJbf26Wd5j4TSX78q4eQbmOLv%2FeFPH9utPDPjpQWMncudf0NYJrF%2Be7HdAtAztpYYMnK58%2Bvjk5tCva%2BSP4qZT7FaBWU%2F4KGbofkCkUa11mHmUPfmgtUG0101gbZSlVmdsll2zCSaMMkoATSfHFbTZSWB9SJtpRd2R70UeK8nbTK5whICbSmzwDEK6jTmwPdTaZQcgIRpEY%2BKtAAT12%2BemkyWJUgBp3nbE26g4V34%2BpCuD%2BYqgDOdVVC%2F5g5P7b0jpPP5KY%2Br8YLKS3k07Od9XUBzxtE21C8Dew46dXaIdAV1X3RlLKAwQhEQR%2BizDT5TUe7CNRhju5XZcDr%2FB5kpXqh7xkc8zpw%2B%2FMDCN4YrKBjqkAYm7HWFtxIywDToLyuuVCcGnyvhXlfyTAJnj4XDKRbDw4c7Rrr6azKvp8MtYBevIPIozi9qKZHLMLFqw6a3hFVMywR%2FM52JxnyDOkJRUmMkzJ4fjEqRBogFeu0uxtSEnFWDZJjzk7yTQM7GxECTkTgN8nfPRsGpt7eTUOgsJmcJ1de1GStgJyjUcpKjP7lo9j8w%2F1cNZc%2FbU7v%2BnAMU0mdpIkQy1&X-Amz-Signature=dd08f7361059a880d81e7fb89ceabdb050b5e659362e070a8c608a1bd88dccad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
