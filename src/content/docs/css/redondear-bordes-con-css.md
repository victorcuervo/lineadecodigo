---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSZKXVU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAU9uMCH5BDa4VYoYqt4t49zSEYD7VstrXglO2d3pYORAiBswaNMV9Q70NJjJIYXnY%2BfMwn9Pk0NSRmt9%2Faw4Cw80Sr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMLPufWNckuK%2BTkBbHKtwDzqOEHOZhj%2BVN9CyCBujtcQ1v%2FTczwNUBiEEUSDrISQE2vV7usCu8E0a%2BQ%2FYmEz8s6%2B5xutdRmXvIWEifETrrXAJwfLQA44zDXh4YaRWss2jmPkYJ7N1pFd631%2BgKTxYdBNpgq0HWdRJRZpynlDDN8gR8O46bLltuLWNxnIRvDedq5B1Z%2BiCRKhZRdXSdzWahmsAhyGMhOBl1VAZERf2GrhFSHqlgswbtpsPWrBRAEaLFBgf%2BunQQjSX4UVEP24WR1w98PR7h5Tq6GzVwjXg%2BUS2nV7UzuzUtuHxqQlp%2BhVcu%2FkIzpjQSe0fkYzM1Icn1qx8HQJcYbH75z2S9W%2BASuJCFFLRTJGB%2FsrabtsVjBZDipZxDtnk57Zf0i662DPm0KEp9W3hdEhB7yMyaHR1j6BXGBKLPnkgejGcbe60dwvYHdxYT4%2FY6qkxPRKlcGd2AvzS9r9hunCkPuK0vEc3lrhcH8LHA2GdeEK1pwGS%2FAScgeFp8rg5mI8lgqCRvLKezdB9Fh5jdpHNQKsxBfI9%2B31mjex5TOFjfvXcNilXthpSjTWst50xAO%2B7btpfPZBeeyzX0Yhvek6hUn8hf%2Bz12hVkS2u01dapA99LD68gP%2BzgnYm3dZtGDU47reBcwh93CyQY6pgHwhZxfb%2Bg5iDbEBdIbZ9YYuKf6Tv5APiEbU21EV8fayOU0YNWkQ5dMf%2BzXfuUfgIMIab5T%2BqJdmNBhBEpfzNIL1IPQlUOOE9smLGbDvFfRwI47dZO0jpqmupKQ4uzE2Mjj11MaQedc0SeO%2BJYpPoiQEKiHww4KbjIqxk33cafMxE9%2FE7in2jRv0583iXmSxYa1T5dXArs%2BSc5KMorbe4DMRlUBlq6j&X-Amz-Signature=2427b8b9eccd77e2c4eaaf741c1eefa00e8f70d6112c167791141d27a1540d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSZKXVU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAU9uMCH5BDa4VYoYqt4t49zSEYD7VstrXglO2d3pYORAiBswaNMV9Q70NJjJIYXnY%2BfMwn9Pk0NSRmt9%2Faw4Cw80Sr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMLPufWNckuK%2BTkBbHKtwDzqOEHOZhj%2BVN9CyCBujtcQ1v%2FTczwNUBiEEUSDrISQE2vV7usCu8E0a%2BQ%2FYmEz8s6%2B5xutdRmXvIWEifETrrXAJwfLQA44zDXh4YaRWss2jmPkYJ7N1pFd631%2BgKTxYdBNpgq0HWdRJRZpynlDDN8gR8O46bLltuLWNxnIRvDedq5B1Z%2BiCRKhZRdXSdzWahmsAhyGMhOBl1VAZERf2GrhFSHqlgswbtpsPWrBRAEaLFBgf%2BunQQjSX4UVEP24WR1w98PR7h5Tq6GzVwjXg%2BUS2nV7UzuzUtuHxqQlp%2BhVcu%2FkIzpjQSe0fkYzM1Icn1qx8HQJcYbH75z2S9W%2BASuJCFFLRTJGB%2FsrabtsVjBZDipZxDtnk57Zf0i662DPm0KEp9W3hdEhB7yMyaHR1j6BXGBKLPnkgejGcbe60dwvYHdxYT4%2FY6qkxPRKlcGd2AvzS9r9hunCkPuK0vEc3lrhcH8LHA2GdeEK1pwGS%2FAScgeFp8rg5mI8lgqCRvLKezdB9Fh5jdpHNQKsxBfI9%2B31mjex5TOFjfvXcNilXthpSjTWst50xAO%2B7btpfPZBeeyzX0Yhvek6hUn8hf%2Bz12hVkS2u01dapA99LD68gP%2BzgnYm3dZtGDU47reBcwh93CyQY6pgHwhZxfb%2Bg5iDbEBdIbZ9YYuKf6Tv5APiEbU21EV8fayOU0YNWkQ5dMf%2BzXfuUfgIMIab5T%2BqJdmNBhBEpfzNIL1IPQlUOOE9smLGbDvFfRwI47dZO0jpqmupKQ4uzE2Mjj11MaQedc0SeO%2BJYpPoiQEKiHww4KbjIqxk33cafMxE9%2FE7in2jRv0583iXmSxYa1T5dXArs%2BSc5KMorbe4DMRlUBlq6j&X-Amz-Signature=f6c0035bc68fff6269d1608bf81417c9ceac751fe509c03f77f12da952d94448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
