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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XT3H5Y6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBu9V%2FytiJw8zQKxRm49DUdy5YSz%2BV7EIZRX0TPgZmiKAiAUomiZeOB9mv9LDPYw42VZOb7bghCa8MkXj4H3rQGAVSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMfPAbxzUfTtp%2BFh9EKtwDua9DpUhEqzAxSobESwhZyrh%2BEegyR7TYPX5KViJ61Xs9dqq4dl3zmbbheQQeTGft5VWk6BHgF7FiHkL80tkoDeONDQi07pb%2B9rsTEaXf62DIcZR4deyHGeU7%2FbngUVZcI9ZbqhT2UXMcyuhENE6XOpZ8VNZ8qrAYpMcLoDBhpfYc%2BMXoBnyJxkEe%2FSR7SheBPS2k1Ac3ZJi%2FtOyFB7UmWWXvXJwc6g%2BKMJlqhLPCjr2%2FyhdG1OS22UtBTzwdopqk5uiFvXqLtm0bNA7hRaZtcHdwxilMeoVg9KnW6tX84ma1u20y3XYx%2B1BYyNxvZSvyAJf7Ak4lAEBTW%2F5UFACmZM3ne5M9jErWK8Pp%2Biyfzua%2BXblPPLNFff%2FCe1q75hGxEW7Yc2GHXdhKxQaEwGnpSsPinkobKod%2F8gowUU3uW%2Bk3Vg5dSkaIG8djor8PbHuxyatdKtz0QYs2q7JF8NJ4MrkKOxXpO%2FOVbPuc6J6FpewFuYmGW7d%2BzeaBGk5VeIF1v6qKy1z9bAUyPZ2pmX%2FC%2FwWgvMJnPbLuGwIDt%2BTmwaQHummNZxX5hvfz4a5F8dnoC0ekNU%2FqCNe2nLXgIZGaqXEu2WeY%2FlvKCNKhmdY%2FZtUHecwEg7Z1T9IWjdwwyqHGyQY6pgEwVNpN1mkEX3ToePzfc8Mvn8z%2BwciqaWBWz%2Bww9sGjydYAtoS7c%2BRY1qoRiJr0CxL5hZNNo%2BKLSW2P5dmWkpvC%2BjL%2FqCBg8Len62mC5O3G6x726ow0nc%2B1XImIJJySPyqIntexN9XvN3y4fnUbeEUMgRc4fchaw3z5hqb7%2BjMmd1Lbb2hIQH%2FqZikx9%2FpHfjTQniCSghiE4qnkgWMTsH8RKgrU7jDg&X-Amz-Signature=eed05fdf33da28cc5525f8acf92729025260eb03c73cced267c292bf5b1792a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XT3H5Y6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBu9V%2FytiJw8zQKxRm49DUdy5YSz%2BV7EIZRX0TPgZmiKAiAUomiZeOB9mv9LDPYw42VZOb7bghCa8MkXj4H3rQGAVSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMfPAbxzUfTtp%2BFh9EKtwDua9DpUhEqzAxSobESwhZyrh%2BEegyR7TYPX5KViJ61Xs9dqq4dl3zmbbheQQeTGft5VWk6BHgF7FiHkL80tkoDeONDQi07pb%2B9rsTEaXf62DIcZR4deyHGeU7%2FbngUVZcI9ZbqhT2UXMcyuhENE6XOpZ8VNZ8qrAYpMcLoDBhpfYc%2BMXoBnyJxkEe%2FSR7SheBPS2k1Ac3ZJi%2FtOyFB7UmWWXvXJwc6g%2BKMJlqhLPCjr2%2FyhdG1OS22UtBTzwdopqk5uiFvXqLtm0bNA7hRaZtcHdwxilMeoVg9KnW6tX84ma1u20y3XYx%2B1BYyNxvZSvyAJf7Ak4lAEBTW%2F5UFACmZM3ne5M9jErWK8Pp%2Biyfzua%2BXblPPLNFff%2FCe1q75hGxEW7Yc2GHXdhKxQaEwGnpSsPinkobKod%2F8gowUU3uW%2Bk3Vg5dSkaIG8djor8PbHuxyatdKtz0QYs2q7JF8NJ4MrkKOxXpO%2FOVbPuc6J6FpewFuYmGW7d%2BzeaBGk5VeIF1v6qKy1z9bAUyPZ2pmX%2FC%2FwWgvMJnPbLuGwIDt%2BTmwaQHummNZxX5hvfz4a5F8dnoC0ekNU%2FqCNe2nLXgIZGaqXEu2WeY%2FlvKCNKhmdY%2FZtUHecwEg7Z1T9IWjdwwyqHGyQY6pgEwVNpN1mkEX3ToePzfc8Mvn8z%2BwciqaWBWz%2Bww9sGjydYAtoS7c%2BRY1qoRiJr0CxL5hZNNo%2BKLSW2P5dmWkpvC%2BjL%2FqCBg8Len62mC5O3G6x726ow0nc%2B1XImIJJySPyqIntexN9XvN3y4fnUbeEUMgRc4fchaw3z5hqb7%2BjMmd1Lbb2hIQH%2FqZikx9%2FpHfjTQniCSghiE4qnkgWMTsH8RKgrU7jDg&X-Amz-Signature=1fa9e42131eb882e9bbed89f3b37a4dc5858477accf215ba08134459f33d9e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
