---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5NYIBHG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIA2HjTlC9x3PNhcHxNIgF28%2FUKfRVlVAuJaGz61b%2BZW8AiEA2HSrQLw3FaCQOpWCQDiYQF9QSdElcUCDk7oxLN3nr7Aq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDE150B%2Fcb2mxs5V%2BOyrcA1YXwfuusfMmLY%2FWf2wE0hWe2nNZQAixqzeFLocD8u9lAyT2hoLAx63D2dYeOCMHM9vxx1GwtD0upSu5ktMaMywaEQg1ilU74xEAXToY%2FcHlfm5LkWNyyMmDLCspBvs%2FwCse%2F0lDJq3dl3ZVBtn6bcpOilinxsQW2mgdC8IeZLzrTDATUaLRzcO1J5GqZ%2Bq3Qhrutzo623YFYeGhp9QN4SKjomcpNn0M7XT3RxXqebg%2FCV4UrDg5o4dYPHl8bQeLDQkvoEAh049MnLnr9hz5AjNmBSJSJnyEVuSumXajRBWbfc%2B5DmqeMkPbtC2lijE%2Fu26jBOg%2F9noiRDDELoiwi3nKkQ6uo1wzdrnsb4tJk%2FeuGM9k00COkiIBjel%2BwwgXBtQCS5qvzNObUnEKNbaideeIvKJ1gwpHBJtLOp4YZsv1A4NU2dnmLpGYTVq8HPdrQYvS8j%2F%2F6un6d6Ac%2F4erltegvstSTUD2F9LwKJHrPhPrLPcac2Fnn1XDwtk6K%2Bf5I%2FLUXjAEBJtJHVzmRD8Kzut6OPrZt1WHJlC%2BEQn5yxLX%2FNowJTnxF9L8OxkLXAWsMwU8KJVm4EA2U8D78RhUbND7E5lVQ%2FclVA%2FHps%2F408m8odp95GsUCnZ6JQCgMNi9wskGOqUBT3gTWU39yxyeipyfcCm9ZvrPqJSlAv3goXihcv0u9fa%2BtJju%2F9dAhNqLknhcVKamqOMxz1EGFGWv5CNbjJakmtG9RrCkaQ6ymXcuf%2FBFRnyp4Um4%2BZ%2F8w%2BAKXSH5cSIoL7s95DbZQ9wrPOzPQxZVayiUyEwrWi2vn8LuhWhczkeBcZ2TEROVlpvtwj4%2FiwabXK3dC9crV7AN6MOaS6F75Vm5c2bf&X-Amz-Signature=a485c634b87d32c00f626a3ac627046373a8de1d139799c56dc0240c27ba4ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5NYIBHG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIA2HjTlC9x3PNhcHxNIgF28%2FUKfRVlVAuJaGz61b%2BZW8AiEA2HSrQLw3FaCQOpWCQDiYQF9QSdElcUCDk7oxLN3nr7Aq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDE150B%2Fcb2mxs5V%2BOyrcA1YXwfuusfMmLY%2FWf2wE0hWe2nNZQAixqzeFLocD8u9lAyT2hoLAx63D2dYeOCMHM9vxx1GwtD0upSu5ktMaMywaEQg1ilU74xEAXToY%2FcHlfm5LkWNyyMmDLCspBvs%2FwCse%2F0lDJq3dl3ZVBtn6bcpOilinxsQW2mgdC8IeZLzrTDATUaLRzcO1J5GqZ%2Bq3Qhrutzo623YFYeGhp9QN4SKjomcpNn0M7XT3RxXqebg%2FCV4UrDg5o4dYPHl8bQeLDQkvoEAh049MnLnr9hz5AjNmBSJSJnyEVuSumXajRBWbfc%2B5DmqeMkPbtC2lijE%2Fu26jBOg%2F9noiRDDELoiwi3nKkQ6uo1wzdrnsb4tJk%2FeuGM9k00COkiIBjel%2BwwgXBtQCS5qvzNObUnEKNbaideeIvKJ1gwpHBJtLOp4YZsv1A4NU2dnmLpGYTVq8HPdrQYvS8j%2F%2F6un6d6Ac%2F4erltegvstSTUD2F9LwKJHrPhPrLPcac2Fnn1XDwtk6K%2Bf5I%2FLUXjAEBJtJHVzmRD8Kzut6OPrZt1WHJlC%2BEQn5yxLX%2FNowJTnxF9L8OxkLXAWsMwU8KJVm4EA2U8D78RhUbND7E5lVQ%2FclVA%2FHps%2F408m8odp95GsUCnZ6JQCgMNi9wskGOqUBT3gTWU39yxyeipyfcCm9ZvrPqJSlAv3goXihcv0u9fa%2BtJju%2F9dAhNqLknhcVKamqOMxz1EGFGWv5CNbjJakmtG9RrCkaQ6ymXcuf%2FBFRnyp4Um4%2BZ%2F8w%2BAKXSH5cSIoL7s95DbZQ9wrPOzPQxZVayiUyEwrWi2vn8LuhWhczkeBcZ2TEROVlpvtwj4%2FiwabXK3dC9crV7AN6MOaS6F75Vm5c2bf&X-Amz-Signature=b6c3a5234f9e76cb8458ef471fcea18314cd3d7a3d379299887b40955e46f462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
