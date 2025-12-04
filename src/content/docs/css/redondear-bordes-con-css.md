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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD6BP6JK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBdDjen6HIyFVXG1Y8ppKB4YfHLT3yVoIIER3FS0ekiBAiALSx1yQNpd6heXB1e5mGBMyVR9qeKxZww0JnD5P%2BPpgyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM0R13raM%2Bo26KdnXNKtwDeUJiPGH76f4bOx4ueDPwiZ4Rxobm2puJoqF1ypMiNRtlE7gYiPTJgMZa47iBqTcnIHT7vUxMLUP%2BTXWqbHmH%2F8KV0F5Mcz%2B189kDUpy37La8LAZuyYe%2FEfiQVC9W%2FqysnvhwTAeaLfsM1nbE925pFysRx6%2F0k6pzRrFm2d%2Fx99aw4WrB%2FZXfu5m%2F9OAazr26AEl9Bbkm3KXQTcb52MNRmvbbjn4pBwv1JnfMqT87oyjMZchEba8y08ONpLLy%2FA6NGow9svUV5i1FGn2%2B1daVNJP2FH4mCHHDCgZLNU1%2FUbBh7bXJCnLJmXohpK9Njg0%2FRsC8uxeyiXlRpWUQneWHL6iVj26HwaNlvGjpsZSXmBfyF49ERgyzPiAcBfG1n%2FW%2Fcl5jmCzHucvtatoKCCy%2FxVur1HKqwI7HHO4hCJJ34YUwkG7Nhp8uNvzDyxgKZI6zbniWCZCQBiGKzjYWVXw%2BXVlOqg%2FM2aOGRuF%2F3X2lOcDQwRh5SRASzaqQLt62GHTNi64jAscrbECPx3N3Hc0p4zGKvNd45vFCq8gmkiB%2BASrtasCWwFLjN4%2FeUxpRe1gFr%2B3oUnnTMQaX9MjuplNTTyk9%2BqdXkYEwS7YWrZw3GDkdXIVIARVuApAoZPUwzoXFyQY6pgHq7kiYLXXiFGNbfJxWBt5J7IYFrB7eaeTVLurN0WFyln9oTS8tknI3qUKigHQmChMaMAUMMl1FkBuD6DzVl3cXt7W8KY%2FMDhSk%2FIjUrzQdPFaRkjqdjIttg0pdf1BaVIv%2BJWDA6KzorMCXK3%2Br1eKr1cK0WvEsNzUkqEbhGoyVh%2Fm15zcG5tnnopPfQoe%2F%2Btp4mzgLNOwGHA85DdzBxmoUgG0adV00&X-Amz-Signature=d0dad581ed60e1745dc1799b52c4a7db89d004decd38252e678b4ce8b1955604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD6BP6JK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBdDjen6HIyFVXG1Y8ppKB4YfHLT3yVoIIER3FS0ekiBAiALSx1yQNpd6heXB1e5mGBMyVR9qeKxZww0JnD5P%2BPpgyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM0R13raM%2Bo26KdnXNKtwDeUJiPGH76f4bOx4ueDPwiZ4Rxobm2puJoqF1ypMiNRtlE7gYiPTJgMZa47iBqTcnIHT7vUxMLUP%2BTXWqbHmH%2F8KV0F5Mcz%2B189kDUpy37La8LAZuyYe%2FEfiQVC9W%2FqysnvhwTAeaLfsM1nbE925pFysRx6%2F0k6pzRrFm2d%2Fx99aw4WrB%2FZXfu5m%2F9OAazr26AEl9Bbkm3KXQTcb52MNRmvbbjn4pBwv1JnfMqT87oyjMZchEba8y08ONpLLy%2FA6NGow9svUV5i1FGn2%2B1daVNJP2FH4mCHHDCgZLNU1%2FUbBh7bXJCnLJmXohpK9Njg0%2FRsC8uxeyiXlRpWUQneWHL6iVj26HwaNlvGjpsZSXmBfyF49ERgyzPiAcBfG1n%2FW%2Fcl5jmCzHucvtatoKCCy%2FxVur1HKqwI7HHO4hCJJ34YUwkG7Nhp8uNvzDyxgKZI6zbniWCZCQBiGKzjYWVXw%2BXVlOqg%2FM2aOGRuF%2F3X2lOcDQwRh5SRASzaqQLt62GHTNi64jAscrbECPx3N3Hc0p4zGKvNd45vFCq8gmkiB%2BASrtasCWwFLjN4%2FeUxpRe1gFr%2B3oUnnTMQaX9MjuplNTTyk9%2BqdXkYEwS7YWrZw3GDkdXIVIARVuApAoZPUwzoXFyQY6pgHq7kiYLXXiFGNbfJxWBt5J7IYFrB7eaeTVLurN0WFyln9oTS8tknI3qUKigHQmChMaMAUMMl1FkBuD6DzVl3cXt7W8KY%2FMDhSk%2FIjUrzQdPFaRkjqdjIttg0pdf1BaVIv%2BJWDA6KzorMCXK3%2Br1eKr1cK0WvEsNzUkqEbhGoyVh%2Fm15zcG5tnnopPfQoe%2F%2Btp4mzgLNOwGHA85DdzBxmoUgG0adV00&X-Amz-Signature=e8993ef753f98cc77a00cb5a907cadb205ff9c26c512feae9d2c7da660b167db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
