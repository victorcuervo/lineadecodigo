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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCX4N3RC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZpwkrVgrbDyYY4KToUSNw8By6bW4Qt%2BX0Ip9kA%2Bmh3QIhAJjLKTaF01XW6tBgDLQS0d8C%2BTPhvw0FBJgxIysp07lMKv8DCGsQABoMNjM3NDIzMTgzODA1IgwIzb%2FKwBRyWwF2y%2B8q3AO8oLsL7cMKS0he5yPiPxvxNhsZY6qEtQn7WbJHrEmXauObrD7K5s96VvYm51AnG%2BzjdWfw0JZbTTRotPMUvAxMlMl48EIOCoUAiFiOXUGtoS%2BFO8DIb0%2Ba5ksZHuo5ucs1tBUM%2FrIgd82uTZ8w3nXFCU3oYn0ir0sV9yf3qLelCNVAqmrzltEGsK4eryaDQdy6tat9PqObtDNHJZNWJTDReiKEAbeFrDj7QzvyOX1vXXE5QNZ%2BscqYxEV%2FMP1DnXFdUeC28f8RuZvI46Mfr%2F%2B9Jh%2Fan0ghHSbEtcQZLxXDcwv%2Bi6Qw%2BNs6rUKzqUdc0UFpyhoJ3a4miiUrpt7ajRq6iN8CrLp8PgudC2V5ePwenqw92ABAkJW3jrU4yBZSWJTu8pT89aZvhAVd8%2FpMjMjmeDSKFAJYwN8Jq7xXINDUJNeu39LuDKz3Lv4ECsGXESAjxpM4GW5wHkzooix%2BiVqqRrEoXMmEUXM1%2BjGmzmNstkre7zgCGizoL96NCBC%2FxdxaP4%2BhSxUkvy0QFKhl0XbyuCgPmxPYrtUXkE8B6JIcgnusRXulYzfWeg%2FJQP%2Bfe4ftcpmXWEVTvgloRLprM166YmemBIQ0eYFEE50C7bKwOl5WyzWV%2FOF3aXaVbzCPp87JBjqkAb25MG%2F3W4X%2FqWlfDCBohDz%2B05udRyL%2FMWvBJhbRkQAOSyhgtbmldXChiaJgYDnQ5VcDFQW2GA5dFzat%2BGziq7zJl5GwXCzK75CB%2Bz%2Bjl18lc9bXGbxwG261JNzUaBRQ5oYCAH7h8BLypOoIcLh0YsUHl4cmKYtidU%2BK3jYgHsdR2GTThH%2BHCliTv90jD5HKdaH8MivzNX7gvcAUo2pKSKK61nkM&X-Amz-Signature=29f3526cb664b2ae7c4196a80350255fa96dece99f336747a126c16c035edd2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCX4N3RC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZpwkrVgrbDyYY4KToUSNw8By6bW4Qt%2BX0Ip9kA%2Bmh3QIhAJjLKTaF01XW6tBgDLQS0d8C%2BTPhvw0FBJgxIysp07lMKv8DCGsQABoMNjM3NDIzMTgzODA1IgwIzb%2FKwBRyWwF2y%2B8q3AO8oLsL7cMKS0he5yPiPxvxNhsZY6qEtQn7WbJHrEmXauObrD7K5s96VvYm51AnG%2BzjdWfw0JZbTTRotPMUvAxMlMl48EIOCoUAiFiOXUGtoS%2BFO8DIb0%2Ba5ksZHuo5ucs1tBUM%2FrIgd82uTZ8w3nXFCU3oYn0ir0sV9yf3qLelCNVAqmrzltEGsK4eryaDQdy6tat9PqObtDNHJZNWJTDReiKEAbeFrDj7QzvyOX1vXXE5QNZ%2BscqYxEV%2FMP1DnXFdUeC28f8RuZvI46Mfr%2F%2B9Jh%2Fan0ghHSbEtcQZLxXDcwv%2Bi6Qw%2BNs6rUKzqUdc0UFpyhoJ3a4miiUrpt7ajRq6iN8CrLp8PgudC2V5ePwenqw92ABAkJW3jrU4yBZSWJTu8pT89aZvhAVd8%2FpMjMjmeDSKFAJYwN8Jq7xXINDUJNeu39LuDKz3Lv4ECsGXESAjxpM4GW5wHkzooix%2BiVqqRrEoXMmEUXM1%2BjGmzmNstkre7zgCGizoL96NCBC%2FxdxaP4%2BhSxUkvy0QFKhl0XbyuCgPmxPYrtUXkE8B6JIcgnusRXulYzfWeg%2FJQP%2Bfe4ftcpmXWEVTvgloRLprM166YmemBIQ0eYFEE50C7bKwOl5WyzWV%2FOF3aXaVbzCPp87JBjqkAb25MG%2F3W4X%2FqWlfDCBohDz%2B05udRyL%2FMWvBJhbRkQAOSyhgtbmldXChiaJgYDnQ5VcDFQW2GA5dFzat%2BGziq7zJl5GwXCzK75CB%2Bz%2Bjl18lc9bXGbxwG261JNzUaBRQ5oYCAH7h8BLypOoIcLh0YsUHl4cmKYtidU%2BK3jYgHsdR2GTThH%2BHCliTv90jD5HKdaH8MivzNX7gvcAUo2pKSKK61nkM&X-Amz-Signature=3c8a1fc5dec5a27638d839a00b717f2c5b9908547ba0325499e273d9e32fe993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
