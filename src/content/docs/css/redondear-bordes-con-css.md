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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FUCP7YD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgajZukV1gAMWaUMM7ryyifTqnd5gQUSSo4x%2Bywirf7AiAJNk9c4FRHYAXfLEox0jnas3C4v%2FJDXOwa0ZBNE2GeqiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7fsoQKSI951muPJXKtwDlkelUxkLGrTll0%2FryeU1SRpn%2B1FKfPCjZExVj%2FdeaavkvGZ9u3Tsh%2BgcLKzO2nNJDV7LveXcHm0d9HuLi5qop9XPQjUJHCbe5SmvIgdHziv0vHUvVcgYBpr7KL8r4bsUsrJO1Y84swuvErCxoqLvDZERD3MzK%2Bpb9a%2Bdd%2B4COdTF1dmUutr4BSRAaR8983iDAwTu2hriwhWVo%2FVYDJx9uHHDQiyS3a9RAldcKj0uoGmnxV2J%2FFRgRoSIS1HzldiEv3I7PHRfnVgfnTTCvqkhXCGZLsYGAYpfBMi9GJRf%2FoKgztoD9iAFfYLB3SdtppA0nXNwHFYcUNEUo03SAkbHBqzfjG6bHNXF2T%2F6GJE%2BI3z9PnreWRcDJ1fcvpsy7bhdDWKoeMhMnLKcsWr2Nygo8PQHwh8hUyyGtw7658qaOKTf9gIVo3Fu25PkRQEt3G%2FHVaIrPiqJECa232avAeEhcKbqIG2qWJ1oDGLQjf9SZNZGJMc6YJtkoHEqZANPWF30lptHwhF%2BpCKWHX1czr9g9qHZfIYKXf%2Fp%2ByoBxRFql%2BLQWIBdmTzixKCizWbn0wVKsmn1t85dRE5VZgdDVz2H2sfuPPLscyf1V%2F99izcL2oFM4B%2BPA0ZGOYsKZSAwz6HYyQY6pgFo1ZuOUu8zsJjcjk%2BN%2FKzknCZXtQPe1UjI1XyWgIz5w%2FyjfQuWilh4eo%2FajhAdtorJemhOOONvy07gRiuEmUVXN2bK1I5kR3Klm9SuR2dZ9xFgG3GXnwtLEtoCuu3hPzgxxQ2IDpDDu%2FzKFXNmv%2F63BXpRtLCgcXSWf5YIuaF%2FO8eBsW6i9jlTqFI%2FbGNTlMABGqJa8QpezCo%2BR5DRNijlDzlEKnyg&X-Amz-Signature=cfa91dd272a3e7cb99a1f8da23ffd8bb7317f5f5594d3c101689eaad3c7af66d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FUCP7YD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgajZukV1gAMWaUMM7ryyifTqnd5gQUSSo4x%2Bywirf7AiAJNk9c4FRHYAXfLEox0jnas3C4v%2FJDXOwa0ZBNE2GeqiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7fsoQKSI951muPJXKtwDlkelUxkLGrTll0%2FryeU1SRpn%2B1FKfPCjZExVj%2FdeaavkvGZ9u3Tsh%2BgcLKzO2nNJDV7LveXcHm0d9HuLi5qop9XPQjUJHCbe5SmvIgdHziv0vHUvVcgYBpr7KL8r4bsUsrJO1Y84swuvErCxoqLvDZERD3MzK%2Bpb9a%2Bdd%2B4COdTF1dmUutr4BSRAaR8983iDAwTu2hriwhWVo%2FVYDJx9uHHDQiyS3a9RAldcKj0uoGmnxV2J%2FFRgRoSIS1HzldiEv3I7PHRfnVgfnTTCvqkhXCGZLsYGAYpfBMi9GJRf%2FoKgztoD9iAFfYLB3SdtppA0nXNwHFYcUNEUo03SAkbHBqzfjG6bHNXF2T%2F6GJE%2BI3z9PnreWRcDJ1fcvpsy7bhdDWKoeMhMnLKcsWr2Nygo8PQHwh8hUyyGtw7658qaOKTf9gIVo3Fu25PkRQEt3G%2FHVaIrPiqJECa232avAeEhcKbqIG2qWJ1oDGLQjf9SZNZGJMc6YJtkoHEqZANPWF30lptHwhF%2BpCKWHX1czr9g9qHZfIYKXf%2Fp%2ByoBxRFql%2BLQWIBdmTzixKCizWbn0wVKsmn1t85dRE5VZgdDVz2H2sfuPPLscyf1V%2F99izcL2oFM4B%2BPA0ZGOYsKZSAwz6HYyQY6pgFo1ZuOUu8zsJjcjk%2BN%2FKzknCZXtQPe1UjI1XyWgIz5w%2FyjfQuWilh4eo%2FajhAdtorJemhOOONvy07gRiuEmUVXN2bK1I5kR3Klm9SuR2dZ9xFgG3GXnwtLEtoCuu3hPzgxxQ2IDpDDu%2FzKFXNmv%2F63BXpRtLCgcXSWf5YIuaF%2FO8eBsW6i9jlTqFI%2FbGNTlMABGqJa8QpezCo%2BR5DRNijlDzlEKnyg&X-Amz-Signature=541c669ac812ffebf72d8380e903833339ab0c51d308decf4fd0e124adfe6f48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
