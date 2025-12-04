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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3N2M446%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCypSN5qcDINgevAV6sqdofDPKuFJP4XuauGei8uoeiKQIgY%2F4Izqu%2F1flIg3hpPxadURcFakZdF9gaUpPnFLcqv%2Bgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLl3IBZo66YxIoZ%2F7yrcA76kIspLTQxDyHk2zK5U%2FUiUFyRvUQX9hMzBMYdX8n416GU%2FQgwKrk4V69d4A5pQ1CN%2BwTRRO%2FQHOYsSDak2wSSF5NPCG7XiD7RZpbpMPWd2EhKTybaEuzqi4M6lwOu8IJXoq8dXPcYGUDWZrIZKPSGF7qB2pwpD6Ynct5xtmrLwqcAQEuFJBDSUlEDJMAJYtCbxms4y0w97Pgiwp1nHUNxUs3PM0mV%2B5JOTgZkNs%2B8IjQ4pnOx8NqG1YhLmHC0nQuGO9C7mq%2FKzabvZ7mpBWheoKO%2F9Bh0rP%2F1u4zBCXgK2gE%2BLnVbHuTEE80uARa7Gnap5noDUyPMV4vhroJOYaHBknoncfp7oJCd1qlAYDYNOCOwQAh%2BbqAvVPET8XrvxDaoh4Zyn%2BOJTPgVeelYi4kEY%2Fp5e7olguTCk1ZEevj4zBJh%2FXYmYPsKZWEG7mH9USLGZsEWukVheHRRDoU3GiTEZdjyF0w4fbXd9mNqii7gz%2BH1Pud4O1jIWGa94htejclnSfvveUE8FO9QnO5vgU90ICzk4DAPcrBjcDYPJgKLC06q4QTk76bIhamcm9dn8JQEgoHfWddEg4ZU83qGxQLTVoH60Sq5go3lfQXIxbZ7KTPDoia6FGF7sBTfRMOLTw8kGOqUBReAKwRaTlgySBSFGYPVhpfmZ4SpCgbAFbanwqguPm1wxgzLm8vcNh3KbFKvfFRsFozmzEu8G47FKlSrKT2aiBdDu6lDNu7A6JCtsMuVhhCYO5oXVtfvu%2F4smfhvyX%2BAG3xViZ8aU%2Bbo9mhLxboptkoNwHZcYl6Lb7Q8Bit8mFCZS36PM5DQ6brL1zBl6afHIGhD%2BijNl0pHuSuNCG7xy%2BL9hIxux&X-Amz-Signature=855b34cdf4aebfae9f4bd9f5ba4b64b0f5e8aff9056761f5fedfb28ae18114ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3N2M446%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCypSN5qcDINgevAV6sqdofDPKuFJP4XuauGei8uoeiKQIgY%2F4Izqu%2F1flIg3hpPxadURcFakZdF9gaUpPnFLcqv%2Bgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLl3IBZo66YxIoZ%2F7yrcA76kIspLTQxDyHk2zK5U%2FUiUFyRvUQX9hMzBMYdX8n416GU%2FQgwKrk4V69d4A5pQ1CN%2BwTRRO%2FQHOYsSDak2wSSF5NPCG7XiD7RZpbpMPWd2EhKTybaEuzqi4M6lwOu8IJXoq8dXPcYGUDWZrIZKPSGF7qB2pwpD6Ynct5xtmrLwqcAQEuFJBDSUlEDJMAJYtCbxms4y0w97Pgiwp1nHUNxUs3PM0mV%2B5JOTgZkNs%2B8IjQ4pnOx8NqG1YhLmHC0nQuGO9C7mq%2FKzabvZ7mpBWheoKO%2F9Bh0rP%2F1u4zBCXgK2gE%2BLnVbHuTEE80uARa7Gnap5noDUyPMV4vhroJOYaHBknoncfp7oJCd1qlAYDYNOCOwQAh%2BbqAvVPET8XrvxDaoh4Zyn%2BOJTPgVeelYi4kEY%2Fp5e7olguTCk1ZEevj4zBJh%2FXYmYPsKZWEG7mH9USLGZsEWukVheHRRDoU3GiTEZdjyF0w4fbXd9mNqii7gz%2BH1Pud4O1jIWGa94htejclnSfvveUE8FO9QnO5vgU90ICzk4DAPcrBjcDYPJgKLC06q4QTk76bIhamcm9dn8JQEgoHfWddEg4ZU83qGxQLTVoH60Sq5go3lfQXIxbZ7KTPDoia6FGF7sBTfRMOLTw8kGOqUBReAKwRaTlgySBSFGYPVhpfmZ4SpCgbAFbanwqguPm1wxgzLm8vcNh3KbFKvfFRsFozmzEu8G47FKlSrKT2aiBdDu6lDNu7A6JCtsMuVhhCYO5oXVtfvu%2F4smfhvyX%2BAG3xViZ8aU%2Bbo9mhLxboptkoNwHZcYl6Lb7Q8Bit8mFCZS36PM5DQ6brL1zBl6afHIGhD%2BijNl0pHuSuNCG7xy%2BL9hIxux&X-Amz-Signature=72146381a42d80e3d88249eb9791e35154034dcde6aa1add733c249ccb601727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
