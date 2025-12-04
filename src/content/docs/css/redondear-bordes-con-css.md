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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPOVFBRF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIGJrru%2FyaN%2BM6Q7grsTrBcJCywkHaiFUqDGrsn2VdiJOAiEAq%2F5UNnqAX2no73eVL018DGDSoEE%2BUMCc1JgQypW5XCMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFxkMREovo%2FUOfMWEyrcA1eQ9aCyxb0jbGXO2r9mXfYnjePiUrAFbIvZf5dYbf7PZKF60LwSiBV45XVgIqhw5ySdllW1pXyPgCJGqBPymdRg7x7rgDO%2BWOvvXEVVexSvNFR3T4uesI8Ug9WBguMUsMaoRnS7Ub%2FIiXb7q6DttQbW6t8LioXIbAaM%2BENyF37i%2BJ4Uc0Bhm5b3FV1Ww7GAjcrXjpBEhvKfV9NBB0XrJmVC6ddMFEq77%2FUyO3SSOAr6sfjIxMvnH8JC5JjiReP0lJUmF8M6GghTDA7EGMDECD%2BImNla8LGBWr3N8Fu3ep0DUcZPm3Ky0xXLOwXV6x5ZRX97MOQpx01iooJ6Dz6l5x6wEbbxH67xRJZgro4Ze%2Fz6OuiVc1ZTivgYNahMs7KMp3D3DO0Bz0Y9RkUgKDxVPmWyKlb5y6wi8y7qFjUwHiGbNoClu6U9UUugpoqq52gt2QhOtwyORl1gInnMCEYYycTXioohzuGHxDOscVYUZMlbLHjOAs0EiG%2FYcmk0073DPOCeD%2FlvigpPy%2BWMD0opxNv3iCj%2FCWM%2F%2B4E6z6nJW0glAWjElcXrCotxWGdyUbdv9M8tVjIbpGmwM2ulCAVNXhgeHMeCDIbaPtVp%2FMV2rwnl0n7S7%2BXBeWnrNVSpMOCQxMkGOqUBABl3U0UV3%2F02ENg9pUUsnuOurrsdfzaXwub7H1GiKBnj2c%2B0m821va8foblhfHL0u7g%2Bl2ANFEvw2SlCUC6IH3uiX5yRwEv38IiDNN36n%2Bc%2FnQhRu%2BUcsjE4Kk99h7Kk1yOITUmBxouBRsRiTeZyZBk18miVBstdYu3at1w3uGAn6PUnPnGml9uxAWTfJklPmxWUfbjnT1HM1af5D%2BxalnA93LUh&X-Amz-Signature=3b411a83f9af3723fb71ddfdceb9356887ddc98672c123c239664530c868cfe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPOVFBRF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIGJrru%2FyaN%2BM6Q7grsTrBcJCywkHaiFUqDGrsn2VdiJOAiEAq%2F5UNnqAX2no73eVL018DGDSoEE%2BUMCc1JgQypW5XCMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFxkMREovo%2FUOfMWEyrcA1eQ9aCyxb0jbGXO2r9mXfYnjePiUrAFbIvZf5dYbf7PZKF60LwSiBV45XVgIqhw5ySdllW1pXyPgCJGqBPymdRg7x7rgDO%2BWOvvXEVVexSvNFR3T4uesI8Ug9WBguMUsMaoRnS7Ub%2FIiXb7q6DttQbW6t8LioXIbAaM%2BENyF37i%2BJ4Uc0Bhm5b3FV1Ww7GAjcrXjpBEhvKfV9NBB0XrJmVC6ddMFEq77%2FUyO3SSOAr6sfjIxMvnH8JC5JjiReP0lJUmF8M6GghTDA7EGMDECD%2BImNla8LGBWr3N8Fu3ep0DUcZPm3Ky0xXLOwXV6x5ZRX97MOQpx01iooJ6Dz6l5x6wEbbxH67xRJZgro4Ze%2Fz6OuiVc1ZTivgYNahMs7KMp3D3DO0Bz0Y9RkUgKDxVPmWyKlb5y6wi8y7qFjUwHiGbNoClu6U9UUugpoqq52gt2QhOtwyORl1gInnMCEYYycTXioohzuGHxDOscVYUZMlbLHjOAs0EiG%2FYcmk0073DPOCeD%2FlvigpPy%2BWMD0opxNv3iCj%2FCWM%2F%2B4E6z6nJW0glAWjElcXrCotxWGdyUbdv9M8tVjIbpGmwM2ulCAVNXhgeHMeCDIbaPtVp%2FMV2rwnl0n7S7%2BXBeWnrNVSpMOCQxMkGOqUBABl3U0UV3%2F02ENg9pUUsnuOurrsdfzaXwub7H1GiKBnj2c%2B0m821va8foblhfHL0u7g%2Bl2ANFEvw2SlCUC6IH3uiX5yRwEv38IiDNN36n%2Bc%2FnQhRu%2BUcsjE4Kk99h7Kk1yOITUmBxouBRsRiTeZyZBk18miVBstdYu3at1w3uGAn6PUnPnGml9uxAWTfJklPmxWUfbjnT1HM1af5D%2BxalnA93LUh&X-Amz-Signature=a2cf8ee9b841e2ba34f3143710726c8b0a69873a80bfefcd7d29764bca0e6989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
