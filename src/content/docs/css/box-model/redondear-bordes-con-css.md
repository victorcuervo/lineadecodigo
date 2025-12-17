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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X3KC2PX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWvEqtnbtYikc6WRWjaXUflFC0PN0YYh%2BLjAMMsQBLZwIhALuZWiQcDanN4HJvu5ITCRblxuNUTuel1FeY6wPTXAk%2BKv8DCHcQABoMNjM3NDIzMTgzODA1IgyRVM1KD%2FonXLejBD4q3AM1I2ieVCovf2UGV%2Fs3csXiqgf%2FMcF9mndaLVFSVe0%2F4Id%2FuUEyJG1Rc57CMb9pAwFHIG0va1vGaNEu%2Fk5zqRe8MI4qudsFm0Fo3rY2%2BHpPEiWqTg0g7WmORqtP98vZMQcLy%2F60plUERyNAsGAYlYyEJbqfmFg1EzVzDrbEumBNYszNDZX3niOXM3x4h6MqFpsYDLdOUy6OfhgnRL%2FZsJH99ky%2Bj%2BcSilzQZpydvfsnjFqXUM%2FhS4OltsEFeyBAVL8uvJv0x5iQJoOW3xI3eDw8OivGl1zv%2B55EUu2Egst6K%2BvQE1XwVYNhSQ7OfDzpOGMhAsb6%2BblMuRlW2tdLcD%2BsJaH3trq%2BbYflH6Jm%2FrU8QqpGOGbzZ9s3Dx1G5YGyWC5twiLL5TidrYuSAU2kqJuycdWNoiGSQUN%2F4SV3QOdw83EhpwWECXGa7k1cwAj%2Bc0Fhso3z3eH9sPFVrHOTuNYPk%2BrMojDvX%2Bm957T5b6Vgmk56lLC5zFAnQelpjtIhYpRrG0ExxI4kwPFIAtIRZDVB1YxAi52UZNWzfV%2Fe5XjGXvFqiRtPS1%2BwJZpAup0lg6StmZ8OvW5l9li251vAtc%2FWvKAM6tXBd4Cr6oaJx%2FcVj7Ub%2F1bt8psbfqnwgzDSgonKBjqkAXbao2u98Z3wV0rfk%2FN9LQz98GzqfkcPIPmos0o6zA01PNBJx12r9LOG3XOi3JY8GTmZVQ7shMjZWR7QxXJI%2BKRtYC0QZBj%2FkNqGSnmgDoR2cFDSfeN%2FYmELGJd%2FC2jW17LTL0rzPuVDAdsexNsPv7bbLey%2Bgo%2F%2FTMlgdpX4KBk3SDGEmSBJ5mbT%2BlLDMbIpddYYpLD0oFdaZr6lkDJp%2B5QLSpSv&X-Amz-Signature=2dcb0e8a53f1c47a1b96c58793406825db1daa5bf617b095a7905e845759eddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X3KC2PX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWvEqtnbtYikc6WRWjaXUflFC0PN0YYh%2BLjAMMsQBLZwIhALuZWiQcDanN4HJvu5ITCRblxuNUTuel1FeY6wPTXAk%2BKv8DCHcQABoMNjM3NDIzMTgzODA1IgyRVM1KD%2FonXLejBD4q3AM1I2ieVCovf2UGV%2Fs3csXiqgf%2FMcF9mndaLVFSVe0%2F4Id%2FuUEyJG1Rc57CMb9pAwFHIG0va1vGaNEu%2Fk5zqRe8MI4qudsFm0Fo3rY2%2BHpPEiWqTg0g7WmORqtP98vZMQcLy%2F60plUERyNAsGAYlYyEJbqfmFg1EzVzDrbEumBNYszNDZX3niOXM3x4h6MqFpsYDLdOUy6OfhgnRL%2FZsJH99ky%2Bj%2BcSilzQZpydvfsnjFqXUM%2FhS4OltsEFeyBAVL8uvJv0x5iQJoOW3xI3eDw8OivGl1zv%2B55EUu2Egst6K%2BvQE1XwVYNhSQ7OfDzpOGMhAsb6%2BblMuRlW2tdLcD%2BsJaH3trq%2BbYflH6Jm%2FrU8QqpGOGbzZ9s3Dx1G5YGyWC5twiLL5TidrYuSAU2kqJuycdWNoiGSQUN%2F4SV3QOdw83EhpwWECXGa7k1cwAj%2Bc0Fhso3z3eH9sPFVrHOTuNYPk%2BrMojDvX%2Bm957T5b6Vgmk56lLC5zFAnQelpjtIhYpRrG0ExxI4kwPFIAtIRZDVB1YxAi52UZNWzfV%2Fe5XjGXvFqiRtPS1%2BwJZpAup0lg6StmZ8OvW5l9li251vAtc%2FWvKAM6tXBd4Cr6oaJx%2FcVj7Ub%2F1bt8psbfqnwgzDSgonKBjqkAXbao2u98Z3wV0rfk%2FN9LQz98GzqfkcPIPmos0o6zA01PNBJx12r9LOG3XOi3JY8GTmZVQ7shMjZWR7QxXJI%2BKRtYC0QZBj%2FkNqGSnmgDoR2cFDSfeN%2FYmELGJd%2FC2jW17LTL0rzPuVDAdsexNsPv7bbLey%2Bgo%2F%2FTMlgdpX4KBk3SDGEmSBJ5mbT%2BlLDMbIpddYYpLD0oFdaZr6lkDJp%2B5QLSpSv&X-Amz-Signature=d4a3043c9d5c8cb42279c441f67728b21807d6e902ec37ff6716957e4ebe9998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
