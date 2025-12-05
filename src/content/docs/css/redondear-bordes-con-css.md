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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXR7526%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdbql0eFfrBYUohkINGw4dAKnIp1PnnCb7zi9OXx9DMwIhAIf%2BmB46jUPcZUarBAElaCnNHEjtROibSoE04rmQ52NoKv8DCE8QABoMNjM3NDIzMTgzODA1Igzxbs%2B1U0uCKv8kP6cq3AMt7vJQGKpncEyJ7plfknGi%2Bu4ZfYONfwEyol%2FSLSI96t7c0vVufO0ipsExVLYAV20QPTdOS1k0ZzPKv2AdaK86El%2BM%2B0eV19UBS1bs2kmMAGrh7eMADtzAUW%2B0GAJhSIil%2Feitb5vIkfCuNlsMcby1EWyH8MFvyMnqOv7aC%2FzFmwQ8tZrKGKyuaCoEK4FwcMqAqQ896VaX9TvS5CCXzNdT%2Bz4lORf9hjorQtsNpSFmxQ0ogwlcPjYyuup3SAGEvkQxnCPuZK5Fwd9pr1B2MYHCUyP1h3NkzmT1BTPPyLjMSiH09U0v%2FdyoaRETTafwUKGKyxKjbHn5B3bTWQZz6Ty%2BP%2Bie0DbCTLM6qiRHRv2kQVlHHi4%2F7tUuyFS4S8COYu9w0dEWhpkqjOOaiU5BCFOz6QRDH8y%2B%2Fb3rw0a9UERtu1n7fXj1edUW2J7%2Bn9Fyyk9eDzgji%2Ff9Rn%2FhVZ%2FDfwQkalMXCNY1cOgLjCalb8d8NmyyvNSJiCD2Y8%2BonwDOP4UTmgwaEGWX6VD71992anQUZBHS4CFy7WV74rtb%2F5SJRTAZs%2FrmXelJ2G57fn%2FytQPJaRzFqr5pm1oHb83GqeXiQcjKDwtM7yNE1TijrS6TtrrR6kLfPGxSsMv4pzDyjMjJBjqkAZCySznnAWBBNU9TyMz34SYWWuvO1oo5Qn9B9yMlNzXbUwICR43tBGllYpRnqz%2FsYNY5o2nyN9QSzJ3qqQ9EOh6y3qzF8uxnNL6M00dIhRkyOPoO1XNH0w77eGnYkgf4vawAHau4C5Kc1v8cErfOcLeuEGsK6ezxP7cKLyO85EcqscuQ%2FpO%2BaQaPLD2uw3VuzSmSQaUvQa%2FnVsogbh5YRb8nlR9%2B&X-Amz-Signature=3a2362ad02be8bc56b478a0d9c7392cfea732caedca39b67c5e92d93d9df54ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXR7526%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdbql0eFfrBYUohkINGw4dAKnIp1PnnCb7zi9OXx9DMwIhAIf%2BmB46jUPcZUarBAElaCnNHEjtROibSoE04rmQ52NoKv8DCE8QABoMNjM3NDIzMTgzODA1Igzxbs%2B1U0uCKv8kP6cq3AMt7vJQGKpncEyJ7plfknGi%2Bu4ZfYONfwEyol%2FSLSI96t7c0vVufO0ipsExVLYAV20QPTdOS1k0ZzPKv2AdaK86El%2BM%2B0eV19UBS1bs2kmMAGrh7eMADtzAUW%2B0GAJhSIil%2Feitb5vIkfCuNlsMcby1EWyH8MFvyMnqOv7aC%2FzFmwQ8tZrKGKyuaCoEK4FwcMqAqQ896VaX9TvS5CCXzNdT%2Bz4lORf9hjorQtsNpSFmxQ0ogwlcPjYyuup3SAGEvkQxnCPuZK5Fwd9pr1B2MYHCUyP1h3NkzmT1BTPPyLjMSiH09U0v%2FdyoaRETTafwUKGKyxKjbHn5B3bTWQZz6Ty%2BP%2Bie0DbCTLM6qiRHRv2kQVlHHi4%2F7tUuyFS4S8COYu9w0dEWhpkqjOOaiU5BCFOz6QRDH8y%2B%2Fb3rw0a9UERtu1n7fXj1edUW2J7%2Bn9Fyyk9eDzgji%2Ff9Rn%2FhVZ%2FDfwQkalMXCNY1cOgLjCalb8d8NmyyvNSJiCD2Y8%2BonwDOP4UTmgwaEGWX6VD71992anQUZBHS4CFy7WV74rtb%2F5SJRTAZs%2FrmXelJ2G57fn%2FytQPJaRzFqr5pm1oHb83GqeXiQcjKDwtM7yNE1TijrS6TtrrR6kLfPGxSsMv4pzDyjMjJBjqkAZCySznnAWBBNU9TyMz34SYWWuvO1oo5Qn9B9yMlNzXbUwICR43tBGllYpRnqz%2FsYNY5o2nyN9QSzJ3qqQ9EOh6y3qzF8uxnNL6M00dIhRkyOPoO1XNH0w77eGnYkgf4vawAHau4C5Kc1v8cErfOcLeuEGsK6ezxP7cKLyO85EcqscuQ%2FpO%2BaQaPLD2uw3VuzSmSQaUvQa%2FnVsogbh5YRb8nlR9%2B&X-Amz-Signature=abf2b557209283879cd44e718cdc4ae8b6dedf7068445b05a28043cafaeb39db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
