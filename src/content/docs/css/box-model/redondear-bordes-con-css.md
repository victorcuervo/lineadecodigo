---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHJJTL6R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFsleslYgRIooAaLuO9vO46700nPx8JYnjEPoukRp2YwIhALhVuRWPGhxaPuwjtgZVpUkZzUqjh5TbA%2F3nahKjw7cHKv8DCHsQABoMNjM3NDIzMTgzODA1Igxo0aIc4P2rzMe7OBkq3AM25Afh0AKc8BzgCD9DXYBPv%2BRbIjUwHJrrPmrjv56OnXgvCC1EwWy3eJ2ow7GIheI7XmE7AtqViDanAIe%2FD25v9lYTGiG8cl4n3L8PYKqeFW9X5qzheg%2FunQcUZ2iXFvB4TZQIOsSKdyMGSsnvz583zGKdMbhimkb%2FkHT2OtTIzKkF8EYYoG9Vd4XRKTtbAY0iT25KPuN21DpTAk6mS19cMZEuz2xuWcbvS29MuQM8wbTnmwoCz7nzOP4lgPH2NFj3SzMfm7loH05eADvGd%2FOnl9TUEuo%2BOnAvN5sU68X%2BlcZRRjHjfBNd141aE%2Bjhe5JLl2f5rQKkZiPNzox%2Fg0A%2BHqeL8qAbfUb0nPrwkiuqan9EWouzEfpR%2FNLAMOPuldUIC3D2mwZZ1Lqs3aEKolyckWFVvjxxfse0Ny%2FDTeWoExhJnsGng8iYdnK6ZLFwJHKbBwXy9mC3cHHMcfb0KAb0rNXU9WpM3TCa1JZqDHLiub%2FrppUNmja1NS8Ok%2BAbeo8WANQcISSvO8VNM6c%2F9g3adfWknPiYkoS6gqruHyExzIBIgrRZ5PQDrwqaahph2R%2BNXjNIhvowXRCvQtTe84I2QVt5q%2FUfXpB6Eayy%2BuhARqm%2Bfj7LGWl1Dp33ZTDe8InKBjqkAcTTgpCtPAvUspKS4Nx6CuCEgyJWL1JUM%2Ff22d6QrckJZTH87X8OUNCy73d8DJRMktFuLW23mGors%2BsKag74ZTJ525ENrRqde4XzUD%2BRMlQLm%2BLYY22MNQHwWb1wRiq9DcnIVCgBPRvR8ltRzqPVKG3iOcMQBse0k0jFUJtY6ERsucQWvufRbJF2faDtzLHECz5tOGbls7LzoNkSjE3GKs8javLZ&X-Amz-Signature=f056992a3127118ff275b28891e91b9582aa08db907968763b8e1f462e24de78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHJJTL6R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFsleslYgRIooAaLuO9vO46700nPx8JYnjEPoukRp2YwIhALhVuRWPGhxaPuwjtgZVpUkZzUqjh5TbA%2F3nahKjw7cHKv8DCHsQABoMNjM3NDIzMTgzODA1Igxo0aIc4P2rzMe7OBkq3AM25Afh0AKc8BzgCD9DXYBPv%2BRbIjUwHJrrPmrjv56OnXgvCC1EwWy3eJ2ow7GIheI7XmE7AtqViDanAIe%2FD25v9lYTGiG8cl4n3L8PYKqeFW9X5qzheg%2FunQcUZ2iXFvB4TZQIOsSKdyMGSsnvz583zGKdMbhimkb%2FkHT2OtTIzKkF8EYYoG9Vd4XRKTtbAY0iT25KPuN21DpTAk6mS19cMZEuz2xuWcbvS29MuQM8wbTnmwoCz7nzOP4lgPH2NFj3SzMfm7loH05eADvGd%2FOnl9TUEuo%2BOnAvN5sU68X%2BlcZRRjHjfBNd141aE%2Bjhe5JLl2f5rQKkZiPNzox%2Fg0A%2BHqeL8qAbfUb0nPrwkiuqan9EWouzEfpR%2FNLAMOPuldUIC3D2mwZZ1Lqs3aEKolyckWFVvjxxfse0Ny%2FDTeWoExhJnsGng8iYdnK6ZLFwJHKbBwXy9mC3cHHMcfb0KAb0rNXU9WpM3TCa1JZqDHLiub%2FrppUNmja1NS8Ok%2BAbeo8WANQcISSvO8VNM6c%2F9g3adfWknPiYkoS6gqruHyExzIBIgrRZ5PQDrwqaahph2R%2BNXjNIhvowXRCvQtTe84I2QVt5q%2FUfXpB6Eayy%2BuhARqm%2Bfj7LGWl1Dp33ZTDe8InKBjqkAcTTgpCtPAvUspKS4Nx6CuCEgyJWL1JUM%2Ff22d6QrckJZTH87X8OUNCy73d8DJRMktFuLW23mGors%2BsKag74ZTJ525ENrRqde4XzUD%2BRMlQLm%2BLYY22MNQHwWb1wRiq9DcnIVCgBPRvR8ltRzqPVKG3iOcMQBse0k0jFUJtY6ERsucQWvufRbJF2faDtzLHECz5tOGbls7LzoNkSjE3GKs8javLZ&X-Amz-Signature=a6163f5b108ad968786e55fab7fdfef9709d9cf7605448e36988388125d719ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
