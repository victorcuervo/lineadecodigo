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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQQON2VQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8AGdhv9RhVu9OkFqIxgo3wxLuSwtDcfjS1fPTspRGKAIhAMm8VuvLLn%2BCFoTR0qtThEUtlKl7LcoMjc3RBvL7hvTBKv8DCHcQABoMNjM3NDIzMTgzODA1IgzhLp%2FABmyLFdG0Vj8q3ANsNPbGzCnOckwLhRH2z1CnYXcT1IrOBt%2BF7ztOOxfWKGQO4G9Nyk4sHdbdPSx2k%2FsQCYtgyGPWiZ7Znn2lDt7dgWnlUGXbcjjpBETcrclzZaqz6gA4Cll8FtpCankFLcXKLDK4%2BKKSxKUTYJtxxBBgajBPkBa70ojRF6U0HJOh4oyZmI%2BELEa%2FMQXeuCw8fCHfFzJdy%2Fqx5jnSDyel9WNywBF1p3Z8xVJjBPUFVCmZVKCKtlaLtvooyhSNFvVkQO1f0Nk3saziQUs4BYa5fqeN%2FigzGIG3Yw4uC3rEDrcsew55408zBwK63mjIeEmoUAs1lDH1%2FqkLIWbEmxLt10oANKnAxkat5%2FKOdeuQrQKsLKT5jSBOEFHyBhQ76X4r%2BnsgiwUI3nkpbeNsJgfW7kij4LBADiGspNzEPvsZm%2F6lw%2FSc21fkjylgWu8CaflEP316BRJCLLCP3Tv7kEn2UVaEk2ScNix2TJG7d3pAm2O9QwuBl0IniupQaUIO8RnQVToAjqHx%2Bi68qnfuMZrXeDGUsNK9iUcOUBzeBRh3OV7NFUvztXZYnWlDjXB9zrob%2Fe9M%2BrlssQuFyLiLz0fqL7kjnbK2HoOOo1gjV7M4SgyxC2VMNkHlO0hppNtaLjCVg4nKBjqkAbhLrthz4Y%2BvzmQ3sP9A4tjuG5uqEIHBg2dEv4AExriI6CuCVX7Ns7p7x4KHW%2B6jF2Z4mAB1xNhxJ3EuXLQNAJbejBHRqsQG8pAJ1uU1sIKCyimBmXb0QRpBTd03SkgvxvhrH5qoKz%2B6x4%2FbsqGUbdmShAv8EARBIcHqJ7RVQnZ8oXrxutaokrFmIXpY02J3g%2Fn3md3xbY03TpONAWO0wJdJxUEu&X-Amz-Signature=a67811172ed8ffea16c92bc2f561a246e97b304f05721a9df6beba235edaf991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQQON2VQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8AGdhv9RhVu9OkFqIxgo3wxLuSwtDcfjS1fPTspRGKAIhAMm8VuvLLn%2BCFoTR0qtThEUtlKl7LcoMjc3RBvL7hvTBKv8DCHcQABoMNjM3NDIzMTgzODA1IgzhLp%2FABmyLFdG0Vj8q3ANsNPbGzCnOckwLhRH2z1CnYXcT1IrOBt%2BF7ztOOxfWKGQO4G9Nyk4sHdbdPSx2k%2FsQCYtgyGPWiZ7Znn2lDt7dgWnlUGXbcjjpBETcrclzZaqz6gA4Cll8FtpCankFLcXKLDK4%2BKKSxKUTYJtxxBBgajBPkBa70ojRF6U0HJOh4oyZmI%2BELEa%2FMQXeuCw8fCHfFzJdy%2Fqx5jnSDyel9WNywBF1p3Z8xVJjBPUFVCmZVKCKtlaLtvooyhSNFvVkQO1f0Nk3saziQUs4BYa5fqeN%2FigzGIG3Yw4uC3rEDrcsew55408zBwK63mjIeEmoUAs1lDH1%2FqkLIWbEmxLt10oANKnAxkat5%2FKOdeuQrQKsLKT5jSBOEFHyBhQ76X4r%2BnsgiwUI3nkpbeNsJgfW7kij4LBADiGspNzEPvsZm%2F6lw%2FSc21fkjylgWu8CaflEP316BRJCLLCP3Tv7kEn2UVaEk2ScNix2TJG7d3pAm2O9QwuBl0IniupQaUIO8RnQVToAjqHx%2Bi68qnfuMZrXeDGUsNK9iUcOUBzeBRh3OV7NFUvztXZYnWlDjXB9zrob%2Fe9M%2BrlssQuFyLiLz0fqL7kjnbK2HoOOo1gjV7M4SgyxC2VMNkHlO0hppNtaLjCVg4nKBjqkAbhLrthz4Y%2BvzmQ3sP9A4tjuG5uqEIHBg2dEv4AExriI6CuCVX7Ns7p7x4KHW%2B6jF2Z4mAB1xNhxJ3EuXLQNAJbejBHRqsQG8pAJ1uU1sIKCyimBmXb0QRpBTd03SkgvxvhrH5qoKz%2B6x4%2FbsqGUbdmShAv8EARBIcHqJ7RVQnZ8oXrxutaokrFmIXpY02J3g%2Fn3md3xbY03TpONAWO0wJdJxUEu&X-Amz-Signature=dec5e6f166fa4220dd72f782d0a721342c6d05b27f2eb79689d3bd50cf740543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
