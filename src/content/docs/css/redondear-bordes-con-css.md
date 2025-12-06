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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRCO3VF2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMSjgy5axO6Ip508LaUt5aKrZ47Ec2wy5BXayjW2dBNQIhAISDLWMyp55TZHMGwdbaMu6hASNr73VWP2tkhjEWe479Kv8DCGkQABoMNjM3NDIzMTgzODA1IgwAuMPtsSjsJQLs2Ysq3ANAMsEKODZ%2BdGm3csbdCJR00nuJLLmS2iUWPD573buVE%2FIhemImSzpScuK86FU3Rj%2BE9a3NpuN00E6x%2B8yG7iWCSdpv8OL9OAvTTpgWLodjQQL5w7IMvaJe0o5l73%2ForSYuJT%2FikYAJyIgBb%2BUfeP7PItiz9EfPi57gLjKX4ZykJheg8qCz9Fm7jISgsJTDOPr0bjSflvl2pqJGyJM4qJfJ73Wb9yUCgYb1tw9RXvZjRRPVN%2BC5QlZQwZS2fCkAdDUW0UGtmt7bywsZ5Yr3KoaruaEa2KFuafQzWprEsxkEEWalh2qVgpcJHRY9pGS7LAdyTvl%2FIMnyKaAn%2FDZjb%2Br3SAWUUlt08F%2Bnrh7niUwkV8EvZef9QhFWeJgDnmMeTxKLVifW5m0NnoJCC0xPyaXbChOED0UdHkamBuOsIxEL8xSCFfF2LAZGv0Rwk4uAQcQsNu8khdDJa64fNZv878G2m63ybS9K%2FhBnRoPsbO2oqWj1jy8jr%2FDlD0%2FldGI%2FL4VjH9OJ0lQrlog%2BGO6lFTBdohS2jkGJFF0Iu6MtDrPxS03qTtO2CuCusZb8kd0pGpLKJXEiLn%2BatFn3tpHrp4SQWTv3OEcmT9I1LpsaX5gelZ5W%2FpSXfLCfCU6USDDf6M3JBjqkAR5qg%2FZqtO70GFrX3UWFy1TXfkNOlMkOB33Af9%2B3QuN6tCLx7RrjXi6SxKJb3P6hK3%2BO9aZB8ROZEhtgDpl4EYng0oRG26Lbe0W4akx8GEbUEURy7hw6v8FmU420NbFT6%2FTYjzkUofz0vKcjjoAvK2BC0G4s%2B8EdIh0Zrx%2BHB5HgfffwT6%2FqF4y0I2iV0KMDGYTlVI1lJ9tYTiSYBQrUfF9lz9LC&X-Amz-Signature=34e12bbf4281946329a79321005b29e58c0fe347c94e5e6b72edb6d42f7ce24f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRCO3VF2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMSjgy5axO6Ip508LaUt5aKrZ47Ec2wy5BXayjW2dBNQIhAISDLWMyp55TZHMGwdbaMu6hASNr73VWP2tkhjEWe479Kv8DCGkQABoMNjM3NDIzMTgzODA1IgwAuMPtsSjsJQLs2Ysq3ANAMsEKODZ%2BdGm3csbdCJR00nuJLLmS2iUWPD573buVE%2FIhemImSzpScuK86FU3Rj%2BE9a3NpuN00E6x%2B8yG7iWCSdpv8OL9OAvTTpgWLodjQQL5w7IMvaJe0o5l73%2ForSYuJT%2FikYAJyIgBb%2BUfeP7PItiz9EfPi57gLjKX4ZykJheg8qCz9Fm7jISgsJTDOPr0bjSflvl2pqJGyJM4qJfJ73Wb9yUCgYb1tw9RXvZjRRPVN%2BC5QlZQwZS2fCkAdDUW0UGtmt7bywsZ5Yr3KoaruaEa2KFuafQzWprEsxkEEWalh2qVgpcJHRY9pGS7LAdyTvl%2FIMnyKaAn%2FDZjb%2Br3SAWUUlt08F%2Bnrh7niUwkV8EvZef9QhFWeJgDnmMeTxKLVifW5m0NnoJCC0xPyaXbChOED0UdHkamBuOsIxEL8xSCFfF2LAZGv0Rwk4uAQcQsNu8khdDJa64fNZv878G2m63ybS9K%2FhBnRoPsbO2oqWj1jy8jr%2FDlD0%2FldGI%2FL4VjH9OJ0lQrlog%2BGO6lFTBdohS2jkGJFF0Iu6MtDrPxS03qTtO2CuCusZb8kd0pGpLKJXEiLn%2BatFn3tpHrp4SQWTv3OEcmT9I1LpsaX5gelZ5W%2FpSXfLCfCU6USDDf6M3JBjqkAR5qg%2FZqtO70GFrX3UWFy1TXfkNOlMkOB33Af9%2B3QuN6tCLx7RrjXi6SxKJb3P6hK3%2BO9aZB8ROZEhtgDpl4EYng0oRG26Lbe0W4akx8GEbUEURy7hw6v8FmU420NbFT6%2FTYjzkUofz0vKcjjoAvK2BC0G4s%2B8EdIh0Zrx%2BHB5HgfffwT6%2FqF4y0I2iV0KMDGYTlVI1lJ9tYTiSYBQrUfF9lz9LC&X-Amz-Signature=f794e3ec44babd642bcb2d80229d245c07a4eb0d82dedfc19198084e2bcd572a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
