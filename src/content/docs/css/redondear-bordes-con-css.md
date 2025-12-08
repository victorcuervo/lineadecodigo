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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZ34VZO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCuAvOj%2B3B8RQSqpt6W%2Ft8UTFyE%2BbnZS5RF3eKNuTeWAiAyEJmltFAKP%2FY41TJbWUyYJwMGn3mBO2tgV2z8Tb2v%2BCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwdQKFofZ6L6FC%2Be4KtwDCWs1XNKZm7q3MkGjRfF0TahkZJd9pjcbNjINSg47VngeJ8K68HPnKSC1%2BXx7fujWm33KFHIaCI8qK3JU4RPAg9Z%2BrXPSt9RauuFyr3yOwFT2nHW3ZP8wLfhDQ6a9afrN6FjrEOsvzL0TAZWf1JF6vXzxoc0CeDfJPzp1uGwzXQVHKcw4i%2FJZg3YyscNTfACyQqUMTBJ0aROgzbHaXVqtjZY0DIhRbI4oh4BGa4cetzq4W0Ku5TwNF4njLwFWUzrE6uDiwyhvP%2F6ab36OpcSnbtJQYwlo3OS8C2q4053yNGh72gxUu1kXbvIX24xmG%2Fo2bT8CoKSduVFQIvTU3ui4g0jgLWko6NKq1ZCjukaPEdoJ8CaVRjMngleZfZK793%2FF8hVoYhb1oFYExf0ASP3bEpd8keOtIlZQe1lvlPwMCmkWKaUKR1mHmWfmo%2FW4tQqrW77%2F0SvuQ92luTlITX5EyQHd4h0d36h%2BDK9RuqO5fzaZtpAjBGdlEZ1Vuqq57VqQkRwpO7VRprd%2FR0gUz8SVcbD18ytG6hLdoR1w01cdFLZjzf7rkIqqOmF1ptd9P7WwLJVOOzg74eaSuLPRnf1SWZ9C2De%2BNf9P0tNckN2IEsruB%2Bs9YjDDdFxy%2FVAwubTcyQY6pgGfErLY7t8oTmWfHVwnreqESGYypHzbIV1LZHyBnOq4Xdyjt7uK5U4ZS7QlXMjHfC%2F3xPfJP5WIBAS9UtM5Lfxo9F26S5mwGM3FGqvtFrP8A0sgBsnxJsXbMeNoaG5RmR7YRx6AJNLQ4GB15lno7%2BSJcluwxEfrCkJW3LkrERDERDq6rdb32oIgrToGnBbB6H%2B6ohZKKuFy11faQOCcwecfVsZfJ4rI&X-Amz-Signature=1c82536b6337b621445f10a956e8062fb313b82e06e04e1f1ac9b6ddbfcb0739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZ34VZO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCuAvOj%2B3B8RQSqpt6W%2Ft8UTFyE%2BbnZS5RF3eKNuTeWAiAyEJmltFAKP%2FY41TJbWUyYJwMGn3mBO2tgV2z8Tb2v%2BCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwdQKFofZ6L6FC%2Be4KtwDCWs1XNKZm7q3MkGjRfF0TahkZJd9pjcbNjINSg47VngeJ8K68HPnKSC1%2BXx7fujWm33KFHIaCI8qK3JU4RPAg9Z%2BrXPSt9RauuFyr3yOwFT2nHW3ZP8wLfhDQ6a9afrN6FjrEOsvzL0TAZWf1JF6vXzxoc0CeDfJPzp1uGwzXQVHKcw4i%2FJZg3YyscNTfACyQqUMTBJ0aROgzbHaXVqtjZY0DIhRbI4oh4BGa4cetzq4W0Ku5TwNF4njLwFWUzrE6uDiwyhvP%2F6ab36OpcSnbtJQYwlo3OS8C2q4053yNGh72gxUu1kXbvIX24xmG%2Fo2bT8CoKSduVFQIvTU3ui4g0jgLWko6NKq1ZCjukaPEdoJ8CaVRjMngleZfZK793%2FF8hVoYhb1oFYExf0ASP3bEpd8keOtIlZQe1lvlPwMCmkWKaUKR1mHmWfmo%2FW4tQqrW77%2F0SvuQ92luTlITX5EyQHd4h0d36h%2BDK9RuqO5fzaZtpAjBGdlEZ1Vuqq57VqQkRwpO7VRprd%2FR0gUz8SVcbD18ytG6hLdoR1w01cdFLZjzf7rkIqqOmF1ptd9P7WwLJVOOzg74eaSuLPRnf1SWZ9C2De%2BNf9P0tNckN2IEsruB%2Bs9YjDDdFxy%2FVAwubTcyQY6pgGfErLY7t8oTmWfHVwnreqESGYypHzbIV1LZHyBnOq4Xdyjt7uK5U4ZS7QlXMjHfC%2F3xPfJP5WIBAS9UtM5Lfxo9F26S5mwGM3FGqvtFrP8A0sgBsnxJsXbMeNoaG5RmR7YRx6AJNLQ4GB15lno7%2BSJcluwxEfrCkJW3LkrERDERDq6rdb32oIgrToGnBbB6H%2B6ohZKKuFy11faQOCcwecfVsZfJ4rI&X-Amz-Signature=62de08b34df26c457fd85d8402599b4c16bf4e5b3a3de3ff47057a32b96e5747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
