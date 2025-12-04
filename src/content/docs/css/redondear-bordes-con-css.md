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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAG6KGR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQD7XfheAxEaFXuBcckNso%2Fqv%2B0ySmHXRfdMsrqR4yfPIwIgMaQ9qTcLijrn9byuAQREZ5gn03HHXAdzWsumGZbjkIAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDJWxL2ZTakyL3GAnvSrcAyzdO9xxQiSv81seB3oGl7D2IaH931Nt3wJRPz8J3GN421Wc5Lp4t%2FV1%2B2jftqxX2A7qCbsBH0sNXMDroyvpuk9uIl7Pxf%2F4Zx7e3PrW4%2F26jR4AsCbBfLikhG1tbddpGWkBH1Pz3bGZVpFrX3IKL1KIAs%2FdWmliHQXFN1fWyzK6zCy2%2BnbWl%2B1%2FX2ZeFc4DCCY3FiMc1cfJ1eVKOfZ5FfiTf9it5H8Miuw%2F9VeKXDyJDLchA%2FDZ82vY52nghYJntQkNan%2BLHW7rYoPttQRttJGIOJKgVKOio7bSHkjyp6jinaqO28FJ6TJVjqSljFrbHp%2FEhw67x%2B64RSEKYa3G4tufL2j09tuD%2B59cUMMSFpXbUMnwqhJiAMEbqI7in84%2B887x9HdAdR5ssv%2FUnrNiIr2t60WdaarGCqEPX15RXlB8M%2F909V%2FnhrcbnJ4rJWa6qO%2B%2BcPfxmA2ypTX6PRyZjd8hiJE%2F09e%2Fr1d%2F1ICH10DuFKV7oSdsWE3rRg2THh%2Ff56wlqiJzOGb1ul3i%2FWqpBzbXAfYGrk3JJpSCzdmCyPztyPEUW1oJGp6GFVVRh7VJFGTvJVyLvOUkjE3yswKD03XQBZh%2F9j%2FOReRaNlUdLPVb%2FoFzWBH4A9LuEZXmMJG1w8kGOqUBXpp%2B51iUN8XROkQfIMq%2B7IuxYYU9TVhEPawAAMQcl7R%2BXI%2BoVGiT6qj7uImelBYDcQDEuMWYaexazI%2FIBEApdAO8zumF%2FqOnFsCY2oNTy5jj99RGrfBD0%2B9a3Ow%2BVwfaZcVjnl2cvt2plgK%2FO%2BL2zKpLzmKp5QesD%2B%2Fa3RIAYDWThv6%2BXj%2Fek%2FiEzmZNCyr%2B5VXcvGw1L8DiaE3nMacVlSJigcIb&X-Amz-Signature=9606f255f916c18f4b7f7bbc66ed6df66dbeed27bdd4775b46426fb492211d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAG6KGR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQD7XfheAxEaFXuBcckNso%2Fqv%2B0ySmHXRfdMsrqR4yfPIwIgMaQ9qTcLijrn9byuAQREZ5gn03HHXAdzWsumGZbjkIAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDJWxL2ZTakyL3GAnvSrcAyzdO9xxQiSv81seB3oGl7D2IaH931Nt3wJRPz8J3GN421Wc5Lp4t%2FV1%2B2jftqxX2A7qCbsBH0sNXMDroyvpuk9uIl7Pxf%2F4Zx7e3PrW4%2F26jR4AsCbBfLikhG1tbddpGWkBH1Pz3bGZVpFrX3IKL1KIAs%2FdWmliHQXFN1fWyzK6zCy2%2BnbWl%2B1%2FX2ZeFc4DCCY3FiMc1cfJ1eVKOfZ5FfiTf9it5H8Miuw%2F9VeKXDyJDLchA%2FDZ82vY52nghYJntQkNan%2BLHW7rYoPttQRttJGIOJKgVKOio7bSHkjyp6jinaqO28FJ6TJVjqSljFrbHp%2FEhw67x%2B64RSEKYa3G4tufL2j09tuD%2B59cUMMSFpXbUMnwqhJiAMEbqI7in84%2B887x9HdAdR5ssv%2FUnrNiIr2t60WdaarGCqEPX15RXlB8M%2F909V%2FnhrcbnJ4rJWa6qO%2B%2BcPfxmA2ypTX6PRyZjd8hiJE%2F09e%2Fr1d%2F1ICH10DuFKV7oSdsWE3rRg2THh%2Ff56wlqiJzOGb1ul3i%2FWqpBzbXAfYGrk3JJpSCzdmCyPztyPEUW1oJGp6GFVVRh7VJFGTvJVyLvOUkjE3yswKD03XQBZh%2F9j%2FOReRaNlUdLPVb%2FoFzWBH4A9LuEZXmMJG1w8kGOqUBXpp%2B51iUN8XROkQfIMq%2B7IuxYYU9TVhEPawAAMQcl7R%2BXI%2BoVGiT6qj7uImelBYDcQDEuMWYaexazI%2FIBEApdAO8zumF%2FqOnFsCY2oNTy5jj99RGrfBD0%2B9a3Ow%2BVwfaZcVjnl2cvt2plgK%2FO%2BL2zKpLzmKp5QesD%2B%2Fa3RIAYDWThv6%2BXj%2Fek%2FiEzmZNCyr%2B5VXcvGw1L8DiaE3nMacVlSJigcIb&X-Amz-Signature=327f72296b8d09a4a85181b92482add3b8f439ae2b7bfaf1ee3b81976941e7f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
