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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL6K263F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4Tvo2kmGR7CsTjnba47IaU8hJrg5kDforI3atIcIuMAiBMd7PGa3RZg0tbrmbZor72lLe8SHoZNAkBofVcF%2BE16yr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMb14X3aJs1eu%2Bx6Q6KtwDuAXfHqn7mJfSl6xmVhOTb9Sx46clOdF1oOfAUZUOKBdBMv8GWPiozYm%2BHmYSkb5fv6BEhjDBc%2B9BmpvuWRHJvDHYTqvBDpMORg7A5YYCkPoMVNp4o93RnULGdl8nB7VagGea%2FcvgvlZLLkPU%2FJzpLoshE%2F5ykN%2Fg3Qf6DDOMbBZHHJKSqKDj8LcjmjqxtpxKZofP%2BixZVjDUEmV0cicucPN63oEMAyBJ8mXCXykYA7m5N%2Fn%2BIvS6iCRbBy5UChyZy%2ByyijkeN2MCbL1bTw0Ep3%2Fr8Z6Mr%2FWhhmWG%2FNZvoEAt1K4NvZqVLCnlqBvML%2Frys1fbG%2FSTy3qPWS6GHnN3lzO7erjHf393VUTEinlhngKNH%2BmfVJl68rFoOTSbp7WhiQZtCfgbkELTd1PgSAcyHWX%2F2EcMOEAXNyNHVwQNC5buKyO9rhK1oz%2FIjJahxhIg9omYqnL6KmirrC1VIQkKpjS96vLQeJ%2FB1Klox59M%2FfPKbgr%2FrN30bQvVIWehqK%2Bf0eyzrbcztUHxC5vXUMxdughDEYd7u996lexBSzn0W8m5B%2Bo96iWgF0TQ4AqoQgiDS%2Bzl3GuUv53XiD%2F8mXQKj9xBAk3FsQM8gYKv5Anu7hQx6o0DUA55xky1Ujkw3c6IygY6pgEr8Wf%2FOnWzsh1zirk%2FaawzSGxlcShMxZ5yLic83TLILF1XvvNx3o38T1GUBgYMyIaAJ8dGrm5JWbMWOg3N0su2usKgQfxb00IlVVytBK1aLgTdkIVIqKRwln2Un%2Fn%2F%2FaXiJwsLrKkbrVZlTTozZO4VDxSUqWS4fwVa9bo0ax%2B3z1C3SKaGxf61Lkxdqh9i5ajshajx943qNTvFKXFjsWmQYTH%2Bdf2W&X-Amz-Signature=c909a5c1265ac6ae6ffa77d35880b98ba05e0c3a0d15b66238490fac46d77062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL6K263F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4Tvo2kmGR7CsTjnba47IaU8hJrg5kDforI3atIcIuMAiBMd7PGa3RZg0tbrmbZor72lLe8SHoZNAkBofVcF%2BE16yr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMb14X3aJs1eu%2Bx6Q6KtwDuAXfHqn7mJfSl6xmVhOTb9Sx46clOdF1oOfAUZUOKBdBMv8GWPiozYm%2BHmYSkb5fv6BEhjDBc%2B9BmpvuWRHJvDHYTqvBDpMORg7A5YYCkPoMVNp4o93RnULGdl8nB7VagGea%2FcvgvlZLLkPU%2FJzpLoshE%2F5ykN%2Fg3Qf6DDOMbBZHHJKSqKDj8LcjmjqxtpxKZofP%2BixZVjDUEmV0cicucPN63oEMAyBJ8mXCXykYA7m5N%2Fn%2BIvS6iCRbBy5UChyZy%2ByyijkeN2MCbL1bTw0Ep3%2Fr8Z6Mr%2FWhhmWG%2FNZvoEAt1K4NvZqVLCnlqBvML%2Frys1fbG%2FSTy3qPWS6GHnN3lzO7erjHf393VUTEinlhngKNH%2BmfVJl68rFoOTSbp7WhiQZtCfgbkELTd1PgSAcyHWX%2F2EcMOEAXNyNHVwQNC5buKyO9rhK1oz%2FIjJahxhIg9omYqnL6KmirrC1VIQkKpjS96vLQeJ%2FB1Klox59M%2FfPKbgr%2FrN30bQvVIWehqK%2Bf0eyzrbcztUHxC5vXUMxdughDEYd7u996lexBSzn0W8m5B%2Bo96iWgF0TQ4AqoQgiDS%2Bzl3GuUv53XiD%2F8mXQKj9xBAk3FsQM8gYKv5Anu7hQx6o0DUA55xky1Ujkw3c6IygY6pgEr8Wf%2FOnWzsh1zirk%2FaawzSGxlcShMxZ5yLic83TLILF1XvvNx3o38T1GUBgYMyIaAJ8dGrm5JWbMWOg3N0su2usKgQfxb00IlVVytBK1aLgTdkIVIqKRwln2Un%2Fn%2F%2FaXiJwsLrKkbrVZlTTozZO4VDxSUqWS4fwVa9bo0ax%2B3z1C3SKaGxf61Lkxdqh9i5ajshajx943qNTvFKXFjsWmQYTH%2Bdf2W&X-Amz-Signature=236df8a58a968a8959ac46b63f5e288c4644d1cde8809648e33d106a06ea1dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
