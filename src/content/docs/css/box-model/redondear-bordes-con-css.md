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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM6CDXZH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmurzf5A4m7g9EpJLp3Wk46Whb3IdrXvhNgUVPSemn5AIhAIvPL%2BtALgnIC13EH7IMb%2F1wAwAem%2FwR7Zfma3%2F05GfDKv8DCHUQABoMNjM3NDIzMTgzODA1Igx%2FkfJYS%2FQ2nO9toOYq3AMIbDa74w4UB2SE56fItppyrnFekQw43Fa9CAbC16A3J1BXFfj41RVqOmEAqpHM3f%2BLMXHvWXzIqJSu30Dbijp7f0ojLkWFaxbKTZb307RTXExVQZBYxbKbowwXSZB5gnn0omaeeXyp7yNPumXNFrsJ0fSNaBbuNg1z69TrgbIvVa2qfe4Z5O4jewF0LYeqynG2G4T%2BZI%2BvzwCuwQookBIzbkQltkEKNcJdWBlt1HKTUB6tFCBEC9Q8GpqGZgY5zsYSH0xltNcjb8%2B%2F%2Bt187pwvfAtCrSc7bX3q0QUZsQ06TZh2LiIWf3XAbRLVuRVD%2Fqa3kLQiP5fApA7GAswcKlJLNDjXRxljoaNWUiPkNJht6Vi5YS3cu3H8zQKqrUJOdJ1LnM17bvjf0nJsBLyU9gOotB0vmM5w%2FSD%2B2P3poubSHkpPKVwDBQdk3FGYJmBwy3L9Hp3WyVhwJp3Qp69WmuE%2FM%2FiwmSvTrrn1GFO4qLei%2Bn%2FcMBwWTGfs9%2BzpSWS2pxejd%2FNLyfbE%2Bn4DKWpiXBihy8XbvQn5I42dllBRfEPPAmM%2FddEch2pZJeR71Up6W1jDG%2BD%2FE9%2BTWHEq8PmBYocx9N3lwi5%2FKyWFIQaK1XbM0461wm4WlBbLDtwlUDDQzojKBjqkAQAhFelIX5g511iCcMONO3sOam6T%2B2qq6gi7f11lTNBojSJLmjOSLsLWx4lwqjbCxCbM7iEDsKioHWlp5790%2FETJEScmevET2psWoP55jGRpdfnuCBSAaSyS5GkZSpoGBppOdW4FIPf3k46pPDWcHjfoMU9e1V%2BGWvLAK0w5%2FntJpSo3ehm5p2AheEX7UkYx96TG8mpTyUEgbwWECymOjUj%2B%2BM2Z&X-Amz-Signature=7d4cee6d4bdd091549c3556ee90dffa4822ba808429da2adb5f7b5fab0eaf82c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM6CDXZH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmurzf5A4m7g9EpJLp3Wk46Whb3IdrXvhNgUVPSemn5AIhAIvPL%2BtALgnIC13EH7IMb%2F1wAwAem%2FwR7Zfma3%2F05GfDKv8DCHUQABoMNjM3NDIzMTgzODA1Igx%2FkfJYS%2FQ2nO9toOYq3AMIbDa74w4UB2SE56fItppyrnFekQw43Fa9CAbC16A3J1BXFfj41RVqOmEAqpHM3f%2BLMXHvWXzIqJSu30Dbijp7f0ojLkWFaxbKTZb307RTXExVQZBYxbKbowwXSZB5gnn0omaeeXyp7yNPumXNFrsJ0fSNaBbuNg1z69TrgbIvVa2qfe4Z5O4jewF0LYeqynG2G4T%2BZI%2BvzwCuwQookBIzbkQltkEKNcJdWBlt1HKTUB6tFCBEC9Q8GpqGZgY5zsYSH0xltNcjb8%2B%2F%2Bt187pwvfAtCrSc7bX3q0QUZsQ06TZh2LiIWf3XAbRLVuRVD%2Fqa3kLQiP5fApA7GAswcKlJLNDjXRxljoaNWUiPkNJht6Vi5YS3cu3H8zQKqrUJOdJ1LnM17bvjf0nJsBLyU9gOotB0vmM5w%2FSD%2B2P3poubSHkpPKVwDBQdk3FGYJmBwy3L9Hp3WyVhwJp3Qp69WmuE%2FM%2FiwmSvTrrn1GFO4qLei%2Bn%2FcMBwWTGfs9%2BzpSWS2pxejd%2FNLyfbE%2Bn4DKWpiXBihy8XbvQn5I42dllBRfEPPAmM%2FddEch2pZJeR71Up6W1jDG%2BD%2FE9%2BTWHEq8PmBYocx9N3lwi5%2FKyWFIQaK1XbM0461wm4WlBbLDtwlUDDQzojKBjqkAQAhFelIX5g511iCcMONO3sOam6T%2B2qq6gi7f11lTNBojSJLmjOSLsLWx4lwqjbCxCbM7iEDsKioHWlp5790%2FETJEScmevET2psWoP55jGRpdfnuCBSAaSyS5GkZSpoGBppOdW4FIPf3k46pPDWcHjfoMU9e1V%2BGWvLAK0w5%2FntJpSo3ehm5p2AheEX7UkYx96TG8mpTyUEgbwWECymOjUj%2B%2BM2Z&X-Amz-Signature=711ef8285ece7038523f19b5d54264cab272fed6adb4fff022b6df92b36cd044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
