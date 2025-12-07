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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQR2Y6GM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSzBzrNy8DK6YGM2Qld%2FDFfA6JvhoVmDRiI2JjL25EhQIhAMfyn1R69A1UkWVFBtKDNq9Nvawbq%2FGuFhxyo6Uao%2Ff1KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIHYWmadlIWQwqyQMq3AMolFw6gA6p0P4VBIcxA8ZHQMnMiyI5Yrnr%2Bh3vJXJlot3PL8MxPQTNgJyaSNYTglZLTHVut3G2aIstRZ7QgNwJzAV1szVIJyoyp2ukziLDBA3C7MU9RKcPsVocfVD25EZ1B%2B594vguKKYQOqR0jYQBEEPngzpmLQiZkgvrhCjx7vdjPRJ5WdVfes0knDlt%2BH3Otzpmt5LZfnRc3GxfIN%2Bdt2j3utPPaVwKWh0nr7k7naN0vXDmaNJYvbyTg70%2BNgi8XwW6Zhkj0YWks0U6kiyYuUru0PhrFcPRmQEPfzpYafPR35ZKiPJuWqTdxRHhqYUdnIsQkyejaLVnq5HMd6DhhKGI9%2BwA9BSxVT1EI4UGQWRT4BTuY27pEhZfcqE2Pmeh0QeA7gjpYLuCGdM9UIKBve9l%2BoPwJskf4jHiFUYZmVKI91%2BB3eKCMppRnYsaeAal%2B2zXeiob6RzSa1tG5pM6g2WvIWNT9eM8hSww%2Bq0S40veVOV6C0SI%2Bi3RTEiWbzoNO2slRL%2FjzayvCqvmJk8mKod%2FHsgDICtNxuHs82qobt%2F2DDNbXXzhUU2rzMCE8vF5xkAypb42%2BtEK%2FIKyCK6SyjKvskylhTprkmobAxre%2B2az1Up8gBxLabPWTTCg%2FdLJBjqkAZxd5dxVrvhX6hxigAXDucb1DhYKxV5XnV62bKkNvLakpgL6W%2BluMN1MmR8MRVtFw0qTdHzVkQEWA1Lz6gPDwsgm5EXDdN%2BbHH5Rc60KtFTwCgMrbhoSWwbC4fRlycFCmqlr6pZzYV%2FmF2fTaixK4j0iKThuF%2BAqnZlRIXj6QOuYDKq7TM1BXiAUleJqTdSH9ljzCvvEuZzfZsU7XkaYOazERESL&X-Amz-Signature=f494106865f8887d2113c470f3e1af9c4ce957503dfb6c8f8526fce1b46142ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQR2Y6GM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSzBzrNy8DK6YGM2Qld%2FDFfA6JvhoVmDRiI2JjL25EhQIhAMfyn1R69A1UkWVFBtKDNq9Nvawbq%2FGuFhxyo6Uao%2Ff1KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIHYWmadlIWQwqyQMq3AMolFw6gA6p0P4VBIcxA8ZHQMnMiyI5Yrnr%2Bh3vJXJlot3PL8MxPQTNgJyaSNYTglZLTHVut3G2aIstRZ7QgNwJzAV1szVIJyoyp2ukziLDBA3C7MU9RKcPsVocfVD25EZ1B%2B594vguKKYQOqR0jYQBEEPngzpmLQiZkgvrhCjx7vdjPRJ5WdVfes0knDlt%2BH3Otzpmt5LZfnRc3GxfIN%2Bdt2j3utPPaVwKWh0nr7k7naN0vXDmaNJYvbyTg70%2BNgi8XwW6Zhkj0YWks0U6kiyYuUru0PhrFcPRmQEPfzpYafPR35ZKiPJuWqTdxRHhqYUdnIsQkyejaLVnq5HMd6DhhKGI9%2BwA9BSxVT1EI4UGQWRT4BTuY27pEhZfcqE2Pmeh0QeA7gjpYLuCGdM9UIKBve9l%2BoPwJskf4jHiFUYZmVKI91%2BB3eKCMppRnYsaeAal%2B2zXeiob6RzSa1tG5pM6g2WvIWNT9eM8hSww%2Bq0S40veVOV6C0SI%2Bi3RTEiWbzoNO2slRL%2FjzayvCqvmJk8mKod%2FHsgDICtNxuHs82qobt%2F2DDNbXXzhUU2rzMCE8vF5xkAypb42%2BtEK%2FIKyCK6SyjKvskylhTprkmobAxre%2B2az1Up8gBxLabPWTTCg%2FdLJBjqkAZxd5dxVrvhX6hxigAXDucb1DhYKxV5XnV62bKkNvLakpgL6W%2BluMN1MmR8MRVtFw0qTdHzVkQEWA1Lz6gPDwsgm5EXDdN%2BbHH5Rc60KtFTwCgMrbhoSWwbC4fRlycFCmqlr6pZzYV%2FmF2fTaixK4j0iKThuF%2BAqnZlRIXj6QOuYDKq7TM1BXiAUleJqTdSH9ljzCvvEuZzfZsU7XkaYOazERESL&X-Amz-Signature=8181e684fea35c00ff6c8c7f234366d1b4c5b6b32a96681bc08dddeba456c032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
