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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYHIYBLG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkfDg17AgGK%2BUGxVZHZ0grX91Q1l1hKq%2Fc29uEx%2FhKbAiAOFmzBVRXDu4ZH%2FZfg%2B855xCoeSgJH9tYAK%2FN2HV1UbiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5eTlSN6JgEBE3pT4KtwDSiah9VpyKUWLOF2qZ89JEGIfTTMCqKkfIH0YqRKRHMjd%2BSS1r7odosO5mqQTVEwOMbSF3szQSV1ULFHns8oTuXjtWPda80bwIM7ZweolvkMq75sayEQ1zvm%2BtjUDLZytUGUs%2BseLdYtJfdg9dKWBcEMq5%2BaIcemrU%2FyaSxvv9c80WFjnstRRwV9ZSQu3H5fKOOYipa4D60cPMPHVUKNOvHap8Votfx2PXhb2nkjdzTYqMyNmq3sy5rT6jaPW0eVHFh%2Ftzw27GD38R%2FiCbdfeuUKh6%2Ffhn9JtkOWLsSuCUjnGLWlO2%2BR1PCJzUdC9ck%2Bg7WKeKPi%2FwFxOBOlv0qELpcAN1r2k3N0WlygneV4RNNKyzsgMZ%2BgsGnkCWFu8Y8N4O%2Baedofxb6kV4UOwtDia0y%2F5l3RrbD0oURJ6PidRk8sk%2BcReWuYUDR9QjBMZ0TKWWIhlGsBNEoOEJP0zmMxrJAd3T%2FLhZBda6YAFJVraFSaZgnbTGNoqbUEHPZv4g%2B5G5mU5%2F3vFHLp1MqzBEWfuSjMjpWpCxsFHQ6PDY6%2FvR%2Fva5SYD%2FIU6oUUqC8pv6sQIUWfLY1q0xUWzMz5on4hc%2FWxRbUJYlNfMNXqb7M2LpxL8NAZG6%2BgpwzrSxccwypnVyQY6pgGKYB489AlvQiDqJ99pi%2Be%2BDNS7aG%2FGw8alGUNUIQwG%2FYTn1Nowog6EPG%2B6S2jmi%2FmFGQ7HBRvnAc6REnTiA7sgqSIVA0odk5%2BIlTfP5VKZK3dJhj4%2BRRYKOL0pW7xV5FZU1j9lXmYt5P%2BDFQd0SVFffDxH2Mv6hVpBI9XHo4LkX36Q4NDny75HKY%2BiJHAuiEmp%2FD4kljsAe42kPhRdjJEpd%2F20lEzx&X-Amz-Signature=351535f73bab5a98315109ad5451e8df93a078584fef168b7931d1efc410e58a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYHIYBLG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkfDg17AgGK%2BUGxVZHZ0grX91Q1l1hKq%2Fc29uEx%2FhKbAiAOFmzBVRXDu4ZH%2FZfg%2B855xCoeSgJH9tYAK%2FN2HV1UbiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5eTlSN6JgEBE3pT4KtwDSiah9VpyKUWLOF2qZ89JEGIfTTMCqKkfIH0YqRKRHMjd%2BSS1r7odosO5mqQTVEwOMbSF3szQSV1ULFHns8oTuXjtWPda80bwIM7ZweolvkMq75sayEQ1zvm%2BtjUDLZytUGUs%2BseLdYtJfdg9dKWBcEMq5%2BaIcemrU%2FyaSxvv9c80WFjnstRRwV9ZSQu3H5fKOOYipa4D60cPMPHVUKNOvHap8Votfx2PXhb2nkjdzTYqMyNmq3sy5rT6jaPW0eVHFh%2Ftzw27GD38R%2FiCbdfeuUKh6%2Ffhn9JtkOWLsSuCUjnGLWlO2%2BR1PCJzUdC9ck%2Bg7WKeKPi%2FwFxOBOlv0qELpcAN1r2k3N0WlygneV4RNNKyzsgMZ%2BgsGnkCWFu8Y8N4O%2Baedofxb6kV4UOwtDia0y%2F5l3RrbD0oURJ6PidRk8sk%2BcReWuYUDR9QjBMZ0TKWWIhlGsBNEoOEJP0zmMxrJAd3T%2FLhZBda6YAFJVraFSaZgnbTGNoqbUEHPZv4g%2B5G5mU5%2F3vFHLp1MqzBEWfuSjMjpWpCxsFHQ6PDY6%2FvR%2Fva5SYD%2FIU6oUUqC8pv6sQIUWfLY1q0xUWzMz5on4hc%2FWxRbUJYlNfMNXqb7M2LpxL8NAZG6%2BgpwzrSxccwypnVyQY6pgGKYB489AlvQiDqJ99pi%2Be%2BDNS7aG%2FGw8alGUNUIQwG%2FYTn1Nowog6EPG%2B6S2jmi%2FmFGQ7HBRvnAc6REnTiA7sgqSIVA0odk5%2BIlTfP5VKZK3dJhj4%2BRRYKOL0pW7xV5FZU1j9lXmYt5P%2BDFQd0SVFffDxH2Mv6hVpBI9XHo4LkX36Q4NDny75HKY%2BiJHAuiEmp%2FD4kljsAe42kPhRdjJEpd%2F20lEzx&X-Amz-Signature=8382d2b433b87a5cac174407ca4cf3aa073b60e030e0ef0939819fd693672f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
