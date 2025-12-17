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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4PQJOAV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICV6W7aU9hiTAVlwapw2khFyG9LShII%2BQ8KMd2%2BBcRuoAiACAeLJC8SuCJr1ALDoSOxWEyQP2IYIeIYk00HFPZ1UqyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEEVaSan5ZQacqzrFKtwDtK8ML38iFMYyCPirfyRGfqBRsjQO%2FHZ3blH3RVp8Q4SoHNW7UT16mRQm8d%2BTArkEbznKY2zfs5DK55uoYisxu0Fnj4WgFD6KxiNNKEmlh%2Fg0kYgMcbUPvUZO8d7qfivTJIYywAT8bSqylxLnYlBoUw7gUYdHrG1TaPi2vES3WcQGoUh3R0SmmdzyPyA1aZUz4UlX4EU5Gk6qJMZNpu8sNAmBmGOPf1kSp5Mzsm3%2BE%2Bgybg8kWZo0SvWi71lDZ2l%2FpWe0wXmCr%2BTH5K9fG4vSPcywKlPAx35CfPjbwRbYA8rq3DnRcw%2FI8LgdMp80AWbUKXOTRobvyzBpm8HZ9HP7TMbSFZut8X9bVaSnUGvckkOw5FQqa8Fo3RQeqprSqV0SrlXLcfMhGpXTZgw5bzBviBypsxK%2FFNfVonO1ykjZ0YmiUmV6Jh8%2B5iOd%2BnSnrQgspu2zlL28iwGDmb3SnSIirJ8dcalLJ8HKAuyJgbVdFb7YTNYnSkkHEHOH6rHynSCjk2pQVSTPXmfljANxsNWFSb8YZEosvPJO7OfJT3Sz2W4B9rh2aA8WlSaPzTPl9J9GRAuQsYebL8WGAjvzvDzZWCk5fDZrQhfqs3NjfdWydf8CdZWkCHgerOpzshMw%2BouMygY6pgEDCblR3XxRdqvXX1p8kc8SlPpb6po5XnIjitmOcnaZdstjnrdmfs9RzMD2eKuxGTy8K41KWd9sYoUMwedVN%2BWxiLcwPg1aN20Wlinj%2BZSVA6ADEK9Za3Yyfv8hApr%2B%2BHbOzPZeXrXRjAaXJvn0xNF9Hyq%2B6Bzaqnof4fik2OaQuRg%2FLdkeKwT%2FmmTzIqiuuURQ9QwKad3iHA7iKWqgydBm3NfJqZ2x&X-Amz-Signature=0d0af4debeb145c412b8bb5219cf26b3eacc0b06620619962fed9e2850fa7e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4PQJOAV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICV6W7aU9hiTAVlwapw2khFyG9LShII%2BQ8KMd2%2BBcRuoAiACAeLJC8SuCJr1ALDoSOxWEyQP2IYIeIYk00HFPZ1UqyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEEVaSan5ZQacqzrFKtwDtK8ML38iFMYyCPirfyRGfqBRsjQO%2FHZ3blH3RVp8Q4SoHNW7UT16mRQm8d%2BTArkEbznKY2zfs5DK55uoYisxu0Fnj4WgFD6KxiNNKEmlh%2Fg0kYgMcbUPvUZO8d7qfivTJIYywAT8bSqylxLnYlBoUw7gUYdHrG1TaPi2vES3WcQGoUh3R0SmmdzyPyA1aZUz4UlX4EU5Gk6qJMZNpu8sNAmBmGOPf1kSp5Mzsm3%2BE%2Bgybg8kWZo0SvWi71lDZ2l%2FpWe0wXmCr%2BTH5K9fG4vSPcywKlPAx35CfPjbwRbYA8rq3DnRcw%2FI8LgdMp80AWbUKXOTRobvyzBpm8HZ9HP7TMbSFZut8X9bVaSnUGvckkOw5FQqa8Fo3RQeqprSqV0SrlXLcfMhGpXTZgw5bzBviBypsxK%2FFNfVonO1ykjZ0YmiUmV6Jh8%2B5iOd%2BnSnrQgspu2zlL28iwGDmb3SnSIirJ8dcalLJ8HKAuyJgbVdFb7YTNYnSkkHEHOH6rHynSCjk2pQVSTPXmfljANxsNWFSb8YZEosvPJO7OfJT3Sz2W4B9rh2aA8WlSaPzTPl9J9GRAuQsYebL8WGAjvzvDzZWCk5fDZrQhfqs3NjfdWydf8CdZWkCHgerOpzshMw%2BouMygY6pgEDCblR3XxRdqvXX1p8kc8SlPpb6po5XnIjitmOcnaZdstjnrdmfs9RzMD2eKuxGTy8K41KWd9sYoUMwedVN%2BWxiLcwPg1aN20Wlinj%2BZSVA6ADEK9Za3Yyfv8hApr%2B%2BHbOzPZeXrXRjAaXJvn0xNF9Hyq%2B6Bzaqnof4fik2OaQuRg%2FLdkeKwT%2FmmTzIqiuuURQ9QwKad3iHA7iKWqgydBm3NfJqZ2x&X-Amz-Signature=41d1c24cb97a655028933d1898b2c539fa4e77447ec7de8a2492d797903bea9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
