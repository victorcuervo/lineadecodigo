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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UO3JA5A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIHoGViuzJWgLw9%2BwsYuU9V1G7T3W2PQJlW87s3OYtH0sAiBcTQ9%2BWhWa2f0c%2FAgAz70oCLtIBImW4yiXmMmT%2BrmRwir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMSqVI5ws%2FDjRDoiTcKtwDjlRytMN9%2BSAq%2FOms7qZ0XJj4NKPdFIz0G6yraRLFTakgg4KYGlhVZTGfb2ILu2Mdwl0hDn%2FlH7iHmPUY4hpUo%2FLSHV5A8n6rVmkprWl6hYlq3zpMVnXJw14VHA%2FAin0THWq7tJpcNVt%2FgvsoVtYyG75GNb4QFT%2BxUXEjQHdeR8BSDU23LgRiJQrLDUCNGifTfkh91L0w9phFCp%2FKqWNoGmp0%2BGj3XruB1ZAZAvUQ1RlBlNGR%2B6KiMzhh6YGGfmn2j0GOLiwFHebLtURl%2FkqD0wPKR8xws%2B%2BV6WU8J5IXiw0vhFHWgSrLI7FINPCq3hTUGAoV6QAS4vKJvyD3y%2BAUB6HsqdQpndYOeesHaVJDCuFJNavZIEPx40FOC7K3njC8%2FbLWPtvM5g%2F32bCp%2FnpdFhjAiz%2F7jfUIewhVKFeTW46jZ404nq2Js1xi0wuLxQ%2FCX2LksNl%2F83Q862ZVCUEVrHLFaN5VY21ybnancBATPhTdMqiBXa670U6EeyxdTac%2Fl951Ckoeqq599CI4%2B3XKsMVxYeBbfQFgqEmbSPmO%2FJ9RzzH8T%2F13B114A%2Fnc7F2%2FRpEij0xLzMrckaW3PZmu5bViqvSutfUEyBEhsWcfoWHBSAW0ZsjfXTh04vwwo8rEyQY6pgFCoERrz10n4ukJtxp9d5zLwYHIy4FBXNIl6DkcEnZSnPHYun9d9XODsk8XKeuYdaSHcGW4DsK02PD7Bqeah%2BkGmRrEkVZ9mA%2FCxwq1mdy8oMlXHLAnvkNfH4%2FXWBpARBD7Idig9YUB%2FAS%2FvQRuagf3EeXjFONZ%2FbioCeigRrRAyGq9s60Vlam3s5XoFLttgY9ziFk4W1FJ6B2i7XKc4%2B%2FwY%2FqueJHJ&X-Amz-Signature=558b7ffd061fe2931631d8a80f05acc729383e574ed70553a228eaa3596e5820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UO3JA5A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIHoGViuzJWgLw9%2BwsYuU9V1G7T3W2PQJlW87s3OYtH0sAiBcTQ9%2BWhWa2f0c%2FAgAz70oCLtIBImW4yiXmMmT%2BrmRwir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMSqVI5ws%2FDjRDoiTcKtwDjlRytMN9%2BSAq%2FOms7qZ0XJj4NKPdFIz0G6yraRLFTakgg4KYGlhVZTGfb2ILu2Mdwl0hDn%2FlH7iHmPUY4hpUo%2FLSHV5A8n6rVmkprWl6hYlq3zpMVnXJw14VHA%2FAin0THWq7tJpcNVt%2FgvsoVtYyG75GNb4QFT%2BxUXEjQHdeR8BSDU23LgRiJQrLDUCNGifTfkh91L0w9phFCp%2FKqWNoGmp0%2BGj3XruB1ZAZAvUQ1RlBlNGR%2B6KiMzhh6YGGfmn2j0GOLiwFHebLtURl%2FkqD0wPKR8xws%2B%2BV6WU8J5IXiw0vhFHWgSrLI7FINPCq3hTUGAoV6QAS4vKJvyD3y%2BAUB6HsqdQpndYOeesHaVJDCuFJNavZIEPx40FOC7K3njC8%2FbLWPtvM5g%2F32bCp%2FnpdFhjAiz%2F7jfUIewhVKFeTW46jZ404nq2Js1xi0wuLxQ%2FCX2LksNl%2F83Q862ZVCUEVrHLFaN5VY21ybnancBATPhTdMqiBXa670U6EeyxdTac%2Fl951Ckoeqq599CI4%2B3XKsMVxYeBbfQFgqEmbSPmO%2FJ9RzzH8T%2F13B114A%2Fnc7F2%2FRpEij0xLzMrckaW3PZmu5bViqvSutfUEyBEhsWcfoWHBSAW0ZsjfXTh04vwwo8rEyQY6pgFCoERrz10n4ukJtxp9d5zLwYHIy4FBXNIl6DkcEnZSnPHYun9d9XODsk8XKeuYdaSHcGW4DsK02PD7Bqeah%2BkGmRrEkVZ9mA%2FCxwq1mdy8oMlXHLAnvkNfH4%2FXWBpARBD7Idig9YUB%2FAS%2FvQRuagf3EeXjFONZ%2FbioCeigRrRAyGq9s60Vlam3s5XoFLttgY9ziFk4W1FJ6B2i7XKc4%2B%2FwY%2FqueJHJ&X-Amz-Signature=c69a2318962a8bbacb3705e19bb05195abadb59b06eff53930f43e7a6728ba11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
