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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KRAVYWE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHSfRsSV1f86Zl3Stwm1dSy3OSqJ606461szQCTetV%2BAiEAqt5WIeZwPydRRiKQlLCtt5aeyZ7vxwQb3aD5ckg5NzAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEzC7xv32mfQplyIlyrcA5%2F3%2BiaTWXVzZUvzB0vwwNaUhnLUbQaQ5OPPqDzO0cBZBoKhwNeS%2BE8aTcfYeBsZNpDP3gL%2F837%2FYWbE1eXuHTHHkNk39JmPG%2F66%2FBKyU1v3ORjQBTAjc1S6r%2BnUdNpGQwtIUN9qeUq3DCnYnQZcD976beM0Gao4PjKSGuL8dQuSyMSH5o94haaZZYWvk3xMYFrce%2BCDBNwRPuW%2FuIVMuvOraZpz1qKilJirPkCErUIBLhxV3cz%2BsbJCTgodvifEBjhPHCDl118GEU9f8zZX4WNavPPPt3MQA8zGyg4dVuHDbzWLj4zERCHqCXTIKmw01aLBFmxb9A6CeN1qTfGBBdK7%2FZHHAbgDQFEHgcGCMbiMjP0CzDjNAVxBF4iACdF2LrY9wuw7MQk%2ByeGK9Erc%2FQT9zKQHca3OUhwpgTeN6D2czNLRQBqr23gLjHGRqPTKs6g14rWHO1Vt54VVFujYxVBlNNH0UYjvczsV43Mirb%2ByzA8NZKEGkk4yFhuKZV85Iv4K1SXDf5qrv%2FfgUqeokLX6Aty5OTmNfcoi6iew9v4KupExfBc%2F0jGI1%2Bc%2BTBgg2KD0GV4C1I%2Bvj81%2BKL95YN67LkTBdtTT69S9bzG5wqLeq7iT8YT3MNNdU1fwMJfqy8kGOqUBUMl%2FmqdftsDKoP1qQNFDlPBIMlAQ1a608ljNx5OWZA2iqn5A0dQ%2BajiZsH0AJhrAtnvmRfQ9KS%2BqFYc9%2Fm%2By%2FIIogekpHf3nvujI%2FLCRwTx38n1Tg3m6P%2Bw1WeCj9rblDLa4foYd2muJ5tJ61oRTL7Hrsi%2FaNdXaDIzYXRMWNUggChzhpRZWxhWCsJXt1fEYReNfVsZT2cQNPxrdUJL8tDXc6NuK&X-Amz-Signature=778cf2216b90ac34c1fdf0aa2f9ec1ae83a7dd38db0ca579e63f0ea19c8772c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KRAVYWE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHSfRsSV1f86Zl3Stwm1dSy3OSqJ606461szQCTetV%2BAiEAqt5WIeZwPydRRiKQlLCtt5aeyZ7vxwQb3aD5ckg5NzAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEzC7xv32mfQplyIlyrcA5%2F3%2BiaTWXVzZUvzB0vwwNaUhnLUbQaQ5OPPqDzO0cBZBoKhwNeS%2BE8aTcfYeBsZNpDP3gL%2F837%2FYWbE1eXuHTHHkNk39JmPG%2F66%2FBKyU1v3ORjQBTAjc1S6r%2BnUdNpGQwtIUN9qeUq3DCnYnQZcD976beM0Gao4PjKSGuL8dQuSyMSH5o94haaZZYWvk3xMYFrce%2BCDBNwRPuW%2FuIVMuvOraZpz1qKilJirPkCErUIBLhxV3cz%2BsbJCTgodvifEBjhPHCDl118GEU9f8zZX4WNavPPPt3MQA8zGyg4dVuHDbzWLj4zERCHqCXTIKmw01aLBFmxb9A6CeN1qTfGBBdK7%2FZHHAbgDQFEHgcGCMbiMjP0CzDjNAVxBF4iACdF2LrY9wuw7MQk%2ByeGK9Erc%2FQT9zKQHca3OUhwpgTeN6D2czNLRQBqr23gLjHGRqPTKs6g14rWHO1Vt54VVFujYxVBlNNH0UYjvczsV43Mirb%2ByzA8NZKEGkk4yFhuKZV85Iv4K1SXDf5qrv%2FfgUqeokLX6Aty5OTmNfcoi6iew9v4KupExfBc%2F0jGI1%2Bc%2BTBgg2KD0GV4C1I%2Bvj81%2BKL95YN67LkTBdtTT69S9bzG5wqLeq7iT8YT3MNNdU1fwMJfqy8kGOqUBUMl%2FmqdftsDKoP1qQNFDlPBIMlAQ1a608ljNx5OWZA2iqn5A0dQ%2BajiZsH0AJhrAtnvmRfQ9KS%2BqFYc9%2Fm%2By%2FIIogekpHf3nvujI%2FLCRwTx38n1Tg3m6P%2Bw1WeCj9rblDLa4foYd2muJ5tJ61oRTL7Hrsi%2FaNdXaDIzYXRMWNUggChzhpRZWxhWCsJXt1fEYReNfVsZT2cQNPxrdUJL8tDXc6NuK&X-Amz-Signature=e3bd83cd10e4dae43d6bd71e387b890d2f2c0f4182290ced1cb57718c0283bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
