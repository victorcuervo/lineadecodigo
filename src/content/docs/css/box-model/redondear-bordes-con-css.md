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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JBJSXJA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGMhGDTr8EHSnOgGSC5NR%2BC83nPj7ZRHVWzsJRQql1SAiBJzoCcezMdbXMtCTchFroLp8EfBXeQlcVv1Y1m8O9JsSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMqvSJDZFuy%2F0fxpPIKtwDilcD6a6mWgTiH33xPQbof1PZ91q9qZk3cECkJ1ORQl4OHxxDsb485Tg8FyGgB8BunxGQLZq3vMJZ%2BweA5cdN3EyXxC0rYx0tLe4cMk5NrZsEiwv4%2Bgwc9TRcWxMKXImn%2FLdE0yzhfuaEPKAg39gJP%2BmumW7nwsOYaYAUlGL6%2BSfpgVmHgLptSk%2F38EfO76iOFEMu5vTfqKg8Wj2ced%2B0hx2xGk7oMOwhPEcTU8Jks6Bu5hoMfpA3ZMCVCjv8VmIc42gezekMOJH%2FOb25drdS7bzdjBwenOr4pSNM137s5bnbYMZSn5317GN2lH%2FZ3AkuwkzJO3FXmF2Vo%2FCF4ggMKiHZYH1IpbL0l%2F%2B66luxCkWU725vQJQyQUuHZDrkC45cV55ahFzapHAzgTmk0x9HDR4AD44oOrfo9GxFqWdxrHJ3%2FX5TsuZuRwR5n59lSiQKeuJpZ3eF96DunXIkgMAApxA0C69a4NQnSPmM5%2FrT90sM1BkaLj4gwEdXW9gUkfFR%2BEJxZXcHpX4Rb2kk9WAJTwfioyI45dfBM7l6cS72tiWn6gRCAG4hWF5ju9XOtmR3OJ19ZnSCUCJkyC4B52q5YmM9Y%2BCRrer6SrE6vUQVsrHiZo8dGEZsN4kjzg8w946KygY6pgGWGA97vmmkpW5Q0Bg8XWE1fXI53xKxOE6nVnXgsWuSRFCOFojiTJiE9EdKt%2Fjz%2FL%2B1fNw%2BX3TbOX%2Bx%2BsQdjRHZVpH1h44iq27tByFUdaXr3qAI%2FPV6GT9RaKVSjhW%2BLqu6NyaCX3XDUoL8Xr3D2DBI4YIev0%2BH3R0mGQYwpsExOG4m6T80mGS2e7r8JcL0Ka6cffkuQJPMjI56CT6lRHz56hI6MfDo&X-Amz-Signature=c430b992904ffb8b088c9d2e9b5275896bc1eb5c8b6074ab094905c5f91c8671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JBJSXJA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGMhGDTr8EHSnOgGSC5NR%2BC83nPj7ZRHVWzsJRQql1SAiBJzoCcezMdbXMtCTchFroLp8EfBXeQlcVv1Y1m8O9JsSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMqvSJDZFuy%2F0fxpPIKtwDilcD6a6mWgTiH33xPQbof1PZ91q9qZk3cECkJ1ORQl4OHxxDsb485Tg8FyGgB8BunxGQLZq3vMJZ%2BweA5cdN3EyXxC0rYx0tLe4cMk5NrZsEiwv4%2Bgwc9TRcWxMKXImn%2FLdE0yzhfuaEPKAg39gJP%2BmumW7nwsOYaYAUlGL6%2BSfpgVmHgLptSk%2F38EfO76iOFEMu5vTfqKg8Wj2ced%2B0hx2xGk7oMOwhPEcTU8Jks6Bu5hoMfpA3ZMCVCjv8VmIc42gezekMOJH%2FOb25drdS7bzdjBwenOr4pSNM137s5bnbYMZSn5317GN2lH%2FZ3AkuwkzJO3FXmF2Vo%2FCF4ggMKiHZYH1IpbL0l%2F%2B66luxCkWU725vQJQyQUuHZDrkC45cV55ahFzapHAzgTmk0x9HDR4AD44oOrfo9GxFqWdxrHJ3%2FX5TsuZuRwR5n59lSiQKeuJpZ3eF96DunXIkgMAApxA0C69a4NQnSPmM5%2FrT90sM1BkaLj4gwEdXW9gUkfFR%2BEJxZXcHpX4Rb2kk9WAJTwfioyI45dfBM7l6cS72tiWn6gRCAG4hWF5ju9XOtmR3OJ19ZnSCUCJkyC4B52q5YmM9Y%2BCRrer6SrE6vUQVsrHiZo8dGEZsN4kjzg8w946KygY6pgGWGA97vmmkpW5Q0Bg8XWE1fXI53xKxOE6nVnXgsWuSRFCOFojiTJiE9EdKt%2Fjz%2FL%2B1fNw%2BX3TbOX%2Bx%2BsQdjRHZVpH1h44iq27tByFUdaXr3qAI%2FPV6GT9RaKVSjhW%2BLqu6NyaCX3XDUoL8Xr3D2DBI4YIev0%2BH3R0mGQYwpsExOG4m6T80mGS2e7r8JcL0Ka6cffkuQJPMjI56CT6lRHz56hI6MfDo&X-Amz-Signature=3306686be76636a625bf466e99bea426f6d3a9016d31ee59e6ce94fef7ddda4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
