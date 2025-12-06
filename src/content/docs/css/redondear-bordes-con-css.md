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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4UCKIDV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEUgHhL%2FA6u0dsIDJ%2FCFj%2FZ%2FSFJ6t4JR%2FuuA3XdzDamAiA5Efh7Cc4IGrGotQAsKDtBkJ6%2BR4cPw6y6bsKbXeUcMSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM9mt2CTNXBpgu1j5LKtwDWcvl7BLq5Knjv5eUaGeYrzOck2Kjzb4PhwuN9vKzSdd%2FRg%2B7g94l54mzluDLQE65LkSa0kE0UdP9UkIJEWOJ768FqqOBZWJtUD2TH7Ei%2B0H58Entf8bGzSViTXMn%2BULeEX%2FIQoPbzdA7e9d4JyffeKsj8N0VJcVhgFZPCc3G3Z2CPE4h4%2F3ZUGAu7dfVX%2Figfxn5ZhmiqJ5E9MfBNkQrxTvX1ZWAOD51x9LENLVh3KSp8CsFMatmC5zqakXiBnB3GTXkMFJqBy%2BaLmbKx8SnQXXbWXC4SryvO9j7zCz99dLgFumdYEmMKvtRrlYauTVMk3tmeT17PQrB7uJQPUD16VzQRHfGi8JYZFoY66%2BDsxu%2Bfd5r3pLBPGEcWgcX8tkRhc8iuFyH4j3tUXSOZJNySooQOGxaiV54Hc7lPlmDu45bhiJEyJhGaUrA9JGJY9OwxAYDfBQHWQ6pd8jsMMR68wMEqU7TVHELl5wlqXCrtEPANUoBOl5fwR0eazHWMplQR0mEmVxq%2FsX7omZPtQkmW3mMV8Cacp%2F7%2Bgav5%2Fys6oI4MGcGhWy3g%2BR8ltZsEgivMMqGWAPIGLGQZv1NveZMJ8P5m20iynz%2BAouTiCaszyj3kTxwm5DUTWxdng0w6t3OyQY6pgGJHgT1t%2BjLSjsU8G3OTOcZFq9GfeWimCH1Yhny3jB3bie8RDxcTsF641MiWZ0zJHcvUqvnZJqnoV7VU2vbO%2Fb5UjptCUREp5oPtzf3cuETbFZKMvSAqmLcEwZKiql%2FvhS0IEtYGelwnMr85S%2FhKIYRPwphLaUBdXMF4TgWuxKWqJYsM7UNt4nvo920IHHLkm7XP4ToBs81OcsrT%2FgFiO9vYPgAIJFH&X-Amz-Signature=b802ef126f91eb32eaea9073700b3e9e57d96b77e33ccf7d33c4d724759b01e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4UCKIDV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEUgHhL%2FA6u0dsIDJ%2FCFj%2FZ%2FSFJ6t4JR%2FuuA3XdzDamAiA5Efh7Cc4IGrGotQAsKDtBkJ6%2BR4cPw6y6bsKbXeUcMSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM9mt2CTNXBpgu1j5LKtwDWcvl7BLq5Knjv5eUaGeYrzOck2Kjzb4PhwuN9vKzSdd%2FRg%2B7g94l54mzluDLQE65LkSa0kE0UdP9UkIJEWOJ768FqqOBZWJtUD2TH7Ei%2B0H58Entf8bGzSViTXMn%2BULeEX%2FIQoPbzdA7e9d4JyffeKsj8N0VJcVhgFZPCc3G3Z2CPE4h4%2F3ZUGAu7dfVX%2Figfxn5ZhmiqJ5E9MfBNkQrxTvX1ZWAOD51x9LENLVh3KSp8CsFMatmC5zqakXiBnB3GTXkMFJqBy%2BaLmbKx8SnQXXbWXC4SryvO9j7zCz99dLgFumdYEmMKvtRrlYauTVMk3tmeT17PQrB7uJQPUD16VzQRHfGi8JYZFoY66%2BDsxu%2Bfd5r3pLBPGEcWgcX8tkRhc8iuFyH4j3tUXSOZJNySooQOGxaiV54Hc7lPlmDu45bhiJEyJhGaUrA9JGJY9OwxAYDfBQHWQ6pd8jsMMR68wMEqU7TVHELl5wlqXCrtEPANUoBOl5fwR0eazHWMplQR0mEmVxq%2FsX7omZPtQkmW3mMV8Cacp%2F7%2Bgav5%2Fys6oI4MGcGhWy3g%2BR8ltZsEgivMMqGWAPIGLGQZv1NveZMJ8P5m20iynz%2BAouTiCaszyj3kTxwm5DUTWxdng0w6t3OyQY6pgGJHgT1t%2BjLSjsU8G3OTOcZFq9GfeWimCH1Yhny3jB3bie8RDxcTsF641MiWZ0zJHcvUqvnZJqnoV7VU2vbO%2Fb5UjptCUREp5oPtzf3cuETbFZKMvSAqmLcEwZKiql%2FvhS0IEtYGelwnMr85S%2FhKIYRPwphLaUBdXMF4TgWuxKWqJYsM7UNt4nvo920IHHLkm7XP4ToBs81OcsrT%2FgFiO9vYPgAIJFH&X-Amz-Signature=411ac24e4c510afff4aff0ca5426792fd83cf079998405e1a0b7e36d41e37aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
