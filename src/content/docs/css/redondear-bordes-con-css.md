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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB7FWLFI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWl8ZKn4oconviCG7160Ntce3hyVX8m62TfeyX7KnXCAiA727cnw%2FbB3DVHuHxLsKezcL%2Ffo6N%2F3mrSEaswFVYBJir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMerWNcXZ2vm4Erzu%2FKtwDPHeQuVqojQFGesDjX90u2V6tFMhcr212yrulwtRDeS7v6jkJwKpfdwSaw61VBExq2ogqyGWnYwY9Vgo605fJwZi9egncPEieem8bAYtVE2ZhvpIx9%2BuyiXGmDrv7SMhta8gDoS221A0ZA9SMT8WdkICo4KjRzvRbdPfLcvfIw2eNkWvuJwnc%2FzfCmQRE5uhtxDaZUlB5k0DgyxkXaet5iA09mk2g3LMDYIsyBt%2BRVVNLjbbwXR8YVMk93LRcc4WkJJuhzG7JqFZZpIR3%2BlslSLFKrkNpJExHcTUVzqJAHVVSWIumLchrECv3%2FA6sc%2F9WZ49v7asiZe8aFUB4drc0%2Fm5l9u0arV0XHiBG8toqCW7rfC2LotdGh%2B%2FWErsAItNJLWJDNI8aNrsCt7mUnUnL8EU9rHq0zuIpt7UCRiODq2czKVZ%2F%2Ftg%2Fm0KywTkF3qHNGBpTTmjf3hqQLCHIzcTo%2BNDdnZ8l8wbiV8adAv9V%2FEc08IKAATL2w9xIeduI7%2FN0abEYDrymnE6wgHs0bNwLrUS2THOBPJGs5sBV0Am6TMdjecLQ0xeI%2BpchiMyQIyjiVtWAMUM8afooSgh1XO6IqFpDZJoGTcItliOoEc44fN%2FunsGVzDNDtkFqWbcwqsfRyQY6pgFykttspLYIf9UVlC36LoyOyg0g07YfZwzvEnC6ll8x3eIboOm27szE9JkXw9Iy4KuSrgyRGsQolbCG7YexaqMeS8DKm9RwaxI5pyRK5wLh9gtVSYo2J5i%2FtMHRepsr4m72RLEjOUUbfdJs9zTdhGgaskqCPtSYBC3KevHyMH1U47Fg3xXmo90nR%2F6VplVkWdHR4PBUUiHHNrcwgKQc2dsVnM%2Bsd9DH&X-Amz-Signature=a99472f09ed16aeefef08c30d5aafc7f571d6745f8b39c1c8961d36687558d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB7FWLFI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWl8ZKn4oconviCG7160Ntce3hyVX8m62TfeyX7KnXCAiA727cnw%2FbB3DVHuHxLsKezcL%2Ffo6N%2F3mrSEaswFVYBJir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMerWNcXZ2vm4Erzu%2FKtwDPHeQuVqojQFGesDjX90u2V6tFMhcr212yrulwtRDeS7v6jkJwKpfdwSaw61VBExq2ogqyGWnYwY9Vgo605fJwZi9egncPEieem8bAYtVE2ZhvpIx9%2BuyiXGmDrv7SMhta8gDoS221A0ZA9SMT8WdkICo4KjRzvRbdPfLcvfIw2eNkWvuJwnc%2FzfCmQRE5uhtxDaZUlB5k0DgyxkXaet5iA09mk2g3LMDYIsyBt%2BRVVNLjbbwXR8YVMk93LRcc4WkJJuhzG7JqFZZpIR3%2BlslSLFKrkNpJExHcTUVzqJAHVVSWIumLchrECv3%2FA6sc%2F9WZ49v7asiZe8aFUB4drc0%2Fm5l9u0arV0XHiBG8toqCW7rfC2LotdGh%2B%2FWErsAItNJLWJDNI8aNrsCt7mUnUnL8EU9rHq0zuIpt7UCRiODq2czKVZ%2F%2Ftg%2Fm0KywTkF3qHNGBpTTmjf3hqQLCHIzcTo%2BNDdnZ8l8wbiV8adAv9V%2FEc08IKAATL2w9xIeduI7%2FN0abEYDrymnE6wgHs0bNwLrUS2THOBPJGs5sBV0Am6TMdjecLQ0xeI%2BpchiMyQIyjiVtWAMUM8afooSgh1XO6IqFpDZJoGTcItliOoEc44fN%2FunsGVzDNDtkFqWbcwqsfRyQY6pgFykttspLYIf9UVlC36LoyOyg0g07YfZwzvEnC6ll8x3eIboOm27szE9JkXw9Iy4KuSrgyRGsQolbCG7YexaqMeS8DKm9RwaxI5pyRK5wLh9gtVSYo2J5i%2FtMHRepsr4m72RLEjOUUbfdJs9zTdhGgaskqCPtSYBC3KevHyMH1U47Fg3xXmo90nR%2F6VplVkWdHR4PBUUiHHNrcwgKQc2dsVnM%2Bsd9DH&X-Amz-Signature=bb8f5fe412af85a05db5c02adae628401648d8a5d35dddea8a5fd1d4df7a0b1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
