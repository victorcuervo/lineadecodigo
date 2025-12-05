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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XR3QO4B%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJwVI1Hei%2FNgXf22qzi73WagDEY9Pxohvlygnmtwl7LAiEA1JeMC2XSEGbbaBRltNM%2FbmddhB4F%2BhS0Fe2GClcyrhIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDI%2FhjV8S1dP1M1rTGCrcA0TkZLlvc0S%2Fyn%2F%2F5Ag2%2BWwZKrYFO0NRwM%2BeRCOXDaNwbXa94q6rDXeM7ugPz2NBrdz9B7mUgqhvDa%2BLp2X%2FMgb%2FJVOe8KTelQH6hqQpxGc782jPFxdRrpz8ToSQCopSKtuMEgEXlX5nq0GSKEa2SVHIJaISxPMHQpMOX1NI339AF04sHOQ%2F5WiAj3koksCb6Kya%2FI6PS0TwrNNqFKM%2BqF9G6TzcuWG9JYj4h8AHQ1CcNTCZfk4YSkF5K4BK6oqNVUo88c8vS3QuDrMsiqn3uFPDxQGemH47F7UQXIQ9H4QDFIwQHX1V8hIK9ISgaLXgAAmWqzcPKe2RSQVnjuQyQe7F3NeKGlsZiZVx0H302CiMmPYBF3RYIPTpZBG6fbTr6jG6LEWmLuxxMKaK7FmiYWFA2YaJfIGNuQKM0aLB3Rt%2FMajGMkSHMYNo5DPV%2BTR27fFvfx1XsDfgDiK8s%2F1uS8P4xIknMgdFc%2B7npT%2F5518QkeBFZHJq9GQRGeYCd%2Fq6jjSfxa9Fb%2FXTbt%2FO5yMNoYllhACgP7UoX6F21gxzgxO4pWLlKkrI2nwpyduZXIwxb8faa75J8SMXHeZyvu60awxMp5fmXIT0uBy1J0Gl64RX1vemHSZB%2BhbOMbonMKmMyMkGOqUBby2IIlzFRe31ACqYrZGMz8tRZxi3umXtbPAa6yj3KBgsYZqRx0g%2BvBktm3Sl9%2Fb04csbdSBTnjXjoEQm8SiVAHWKVhMsIy5bKuwj%2Fh2ga6IU2bgL8wAYHKTAA7kIzM3TCWhJ69WzLpPzHZUcpCwW9Aeq63c8wPsKBcpUuaxkOKBlmQfbsAVrFt%2BYEny%2B6Bn%2Ftis2LgVYocX5REwQfqNFF7X69aKA&X-Amz-Signature=5bf69fc03f52d2149e9e981785caae4bf8d8a4992ebc0100b14da402ab4ac5e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XR3QO4B%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJwVI1Hei%2FNgXf22qzi73WagDEY9Pxohvlygnmtwl7LAiEA1JeMC2XSEGbbaBRltNM%2FbmddhB4F%2BhS0Fe2GClcyrhIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDI%2FhjV8S1dP1M1rTGCrcA0TkZLlvc0S%2Fyn%2F%2F5Ag2%2BWwZKrYFO0NRwM%2BeRCOXDaNwbXa94q6rDXeM7ugPz2NBrdz9B7mUgqhvDa%2BLp2X%2FMgb%2FJVOe8KTelQH6hqQpxGc782jPFxdRrpz8ToSQCopSKtuMEgEXlX5nq0GSKEa2SVHIJaISxPMHQpMOX1NI339AF04sHOQ%2F5WiAj3koksCb6Kya%2FI6PS0TwrNNqFKM%2BqF9G6TzcuWG9JYj4h8AHQ1CcNTCZfk4YSkF5K4BK6oqNVUo88c8vS3QuDrMsiqn3uFPDxQGemH47F7UQXIQ9H4QDFIwQHX1V8hIK9ISgaLXgAAmWqzcPKe2RSQVnjuQyQe7F3NeKGlsZiZVx0H302CiMmPYBF3RYIPTpZBG6fbTr6jG6LEWmLuxxMKaK7FmiYWFA2YaJfIGNuQKM0aLB3Rt%2FMajGMkSHMYNo5DPV%2BTR27fFvfx1XsDfgDiK8s%2F1uS8P4xIknMgdFc%2B7npT%2F5518QkeBFZHJq9GQRGeYCd%2Fq6jjSfxa9Fb%2FXTbt%2FO5yMNoYllhACgP7UoX6F21gxzgxO4pWLlKkrI2nwpyduZXIwxb8faa75J8SMXHeZyvu60awxMp5fmXIT0uBy1J0Gl64RX1vemHSZB%2BhbOMbonMKmMyMkGOqUBby2IIlzFRe31ACqYrZGMz8tRZxi3umXtbPAa6yj3KBgsYZqRx0g%2BvBktm3Sl9%2Fb04csbdSBTnjXjoEQm8SiVAHWKVhMsIy5bKuwj%2Fh2ga6IU2bgL8wAYHKTAA7kIzM3TCWhJ69WzLpPzHZUcpCwW9Aeq63c8wPsKBcpUuaxkOKBlmQfbsAVrFt%2BYEny%2B6Bn%2Ftis2LgVYocX5REwQfqNFF7X69aKA&X-Amz-Signature=b20ff43c5c0146e53b414fd5f5f9d820bbdf748bfd094f01d1b06525442fa83f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
