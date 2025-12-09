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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EDAMBB2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAkY5E78q63i0zbRqxzIOs%2Ba6pj1qWrX5tgQO9WVVHLAiA03iBq7OXEXxuYadBm1xYElbTaOVpVlWm%2BkmQamb%2FWhSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr34jAP%2F1rbp9nlJcKtwDexasJ92AxAI9jb%2BN7PLCm1voL4%2BARDbSzNOaC9nvlR7uUUNVGyniAQfGiOnyvy4K%2Flxr%2BeDxgk4b9TCrAhL12GnW%2FhijlLn2hHEBGrbjff%2FGJQIAca4Gdq%2FvyBUQEXNYlyi8xpzg3Y9gt8yHmZIDzYD%2F29DSKOh1SsD38pZjIh770u661QLsZLozSzRqw3t0JVUM2aBWHOpDS1aWu4g%2BLpgGxHGIR9lR2pCzhKLjImXRXk0HlqiTF8P289pX0mY9oBayA7FBI%2FFWpj66O0yf64HsRIchHSXc9Zby7HKHukQSP5aX8pIyWMopIwNBgybqRPIMUl0xtQBFtEuH73WkXywE8%2FeZjT5ZSlRuLONXsmNFHa2As3N2FddwAYMEePFigovg%2BejIOPz4T1CwknUs0qk%2BASdECQSB4uJGZyYjVgOQNM24tupDlbLqTyrgt901NSVrSoyNmSYrHb3vWL6qrop6U%2Bu9bmeEt7Hm3DPWU5w3jo%2BsugASwugnHPgQO0anVA8vHfmEW24bnT6kLA3O1zdFSIpxg2DbyCuJ4SUL6QWPM8OW%2BhvgQ8nDO3EGJ0itgRtC4KDZrQA6lyArquND9NBCYwDGYlsIKaA2%2B4soLtSva7T%2F1xLyREJlFskw9eXeyQY6pgF7OuSlYYVQgaplHyEpvFRpOgEl8hfkfNUApPkUpVWzsGek7JFzHro5FyRjY7et07EfS2lMO7dF%2F4ig%2BT0%2F8R%2F21NkEr7rR6D0tu%2BLPtc%2B9gvn4d%2B5xUFLr1%2BYjXGAkO5mX38Tf1Hv%2Fs8bDY8y%2FKctO3v%2F7MvAKG0W%2FOZ8nHeARWx5HJ2qER9qut8P5lSY97bKNgZMqZpqn7ygdFi2MmPK8KtiKg5ow&X-Amz-Signature=d2451f31f8009556f931f3701882a1fdc54a590670ebaf1909f3460863f6ec07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EDAMBB2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAkY5E78q63i0zbRqxzIOs%2Ba6pj1qWrX5tgQO9WVVHLAiA03iBq7OXEXxuYadBm1xYElbTaOVpVlWm%2BkmQamb%2FWhSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr34jAP%2F1rbp9nlJcKtwDexasJ92AxAI9jb%2BN7PLCm1voL4%2BARDbSzNOaC9nvlR7uUUNVGyniAQfGiOnyvy4K%2Flxr%2BeDxgk4b9TCrAhL12GnW%2FhijlLn2hHEBGrbjff%2FGJQIAca4Gdq%2FvyBUQEXNYlyi8xpzg3Y9gt8yHmZIDzYD%2F29DSKOh1SsD38pZjIh770u661QLsZLozSzRqw3t0JVUM2aBWHOpDS1aWu4g%2BLpgGxHGIR9lR2pCzhKLjImXRXk0HlqiTF8P289pX0mY9oBayA7FBI%2FFWpj66O0yf64HsRIchHSXc9Zby7HKHukQSP5aX8pIyWMopIwNBgybqRPIMUl0xtQBFtEuH73WkXywE8%2FeZjT5ZSlRuLONXsmNFHa2As3N2FddwAYMEePFigovg%2BejIOPz4T1CwknUs0qk%2BASdECQSB4uJGZyYjVgOQNM24tupDlbLqTyrgt901NSVrSoyNmSYrHb3vWL6qrop6U%2Bu9bmeEt7Hm3DPWU5w3jo%2BsugASwugnHPgQO0anVA8vHfmEW24bnT6kLA3O1zdFSIpxg2DbyCuJ4SUL6QWPM8OW%2BhvgQ8nDO3EGJ0itgRtC4KDZrQA6lyArquND9NBCYwDGYlsIKaA2%2B4soLtSva7T%2F1xLyREJlFskw9eXeyQY6pgF7OuSlYYVQgaplHyEpvFRpOgEl8hfkfNUApPkUpVWzsGek7JFzHro5FyRjY7et07EfS2lMO7dF%2F4ig%2BT0%2F8R%2F21NkEr7rR6D0tu%2BLPtc%2B9gvn4d%2B5xUFLr1%2BYjXGAkO5mX38Tf1Hv%2Fs8bDY8y%2FKctO3v%2F7MvAKG0W%2FOZ8nHeARWx5HJ2qER9qut8P5lSY97bKNgZMqZpqn7ygdFi2MmPK8KtiKg5ow&X-Amz-Signature=7ae75e695962ed765b44229eef9b94fe20d851663c4d7ad6fe75bb0dd0613654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
