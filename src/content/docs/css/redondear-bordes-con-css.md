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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAZQPIBI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYQF12jelsp7BA0KLcouaPvMotFOTVBJBr6DcfaM8EXAiEAiQUa3iHlcG8Di9HjNEAJgiemt%2FyCVJUbXP5J8w2Ufswq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKwCUMpfkdWPrWUPCCrcAwAGCMK13oCLwgJOJzbjQKpL8wvCBz%2FyO9TDNWX4x1NRTNns0kC%2FJGqkSPP%2BvmRYU8UYokVoOuQCVJqTFv6Zhe%2Bqwx3NFMQMKRXayxS2SrZla32EX%2FycvxZ5LyBQVl%2B7D9O0MDRFQpo7FoDurXljDHpcNzY1cWNBD5irUgqH1dPBq%2BI5WBKKCl2ShwVHddvcvxe%2Fgb01OW9jDD9UjX3gjOqdmht6XqiD6c8UIg0%2B3rIs%2FjdxS3b%2BLqfBdI%2BabFCoJPfOiEFmQrYto0RjvDr3A2QAhyNENlk4u73cWIciu13r%2FSput%2F0tiYCHt1O5QAR%2B35l%2Bm5NfIf5T0kYNYsb%2Fe8b%2BO2YpCWi0qHzkEhQIn%2FkebfRBlYX2b22meUQ7IHLBaexPvAF%2F8TVFviuXAKloHe2GwUZ1LIp2jRy40%2BYcA4cbvUiJ1jOP7BJS6beiXQg5DGw2IJIa9nZ9rV%2BSYP6J1PaJwkJ8JxKlUq%2FX5v0mK4p5AMCVD8NRMZTjGj4mCXtmAh2o1RwuiitpAXf%2Bsf24lSs0m3pYX28fzeITLcxs6hWAaLGtq6Gq2qx5pVl4fOQm8Krf4h7I43SUocf8AkAdjQmUUb%2B8h7BHqVNraDQVrIVbqKMzO63nbFNFwNRtMM%2BMyMkGOqUBH9Rguub7POSA5Al91ylF80vlv3qb%2BdQq72SFkdEFkV4LrVg7vBlfpi6NExr5eRMuqyAqspRtXnZICcyEQj9zdIgj6T%2B1cdoNZweWBmUXGiHq05PiKxAHPXd1GZq7Y%2BJPIqynPn%2F98bk8bMjmzIWTcsk%2Biml1LcxHJgD4j8k6%2Fdab1kwlhNWLNPyLc9iVH847ejiH7iBVE%2F4ZtT0ZvOYq74NP7JND&X-Amz-Signature=7c090d65372b431c5e485079117b855bbe354bd6b7cfb4c207495fb029b02e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAZQPIBI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYQF12jelsp7BA0KLcouaPvMotFOTVBJBr6DcfaM8EXAiEAiQUa3iHlcG8Di9HjNEAJgiemt%2FyCVJUbXP5J8w2Ufswq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKwCUMpfkdWPrWUPCCrcAwAGCMK13oCLwgJOJzbjQKpL8wvCBz%2FyO9TDNWX4x1NRTNns0kC%2FJGqkSPP%2BvmRYU8UYokVoOuQCVJqTFv6Zhe%2Bqwx3NFMQMKRXayxS2SrZla32EX%2FycvxZ5LyBQVl%2B7D9O0MDRFQpo7FoDurXljDHpcNzY1cWNBD5irUgqH1dPBq%2BI5WBKKCl2ShwVHddvcvxe%2Fgb01OW9jDD9UjX3gjOqdmht6XqiD6c8UIg0%2B3rIs%2FjdxS3b%2BLqfBdI%2BabFCoJPfOiEFmQrYto0RjvDr3A2QAhyNENlk4u73cWIciu13r%2FSput%2F0tiYCHt1O5QAR%2B35l%2Bm5NfIf5T0kYNYsb%2Fe8b%2BO2YpCWi0qHzkEhQIn%2FkebfRBlYX2b22meUQ7IHLBaexPvAF%2F8TVFviuXAKloHe2GwUZ1LIp2jRy40%2BYcA4cbvUiJ1jOP7BJS6beiXQg5DGw2IJIa9nZ9rV%2BSYP6J1PaJwkJ8JxKlUq%2FX5v0mK4p5AMCVD8NRMZTjGj4mCXtmAh2o1RwuiitpAXf%2Bsf24lSs0m3pYX28fzeITLcxs6hWAaLGtq6Gq2qx5pVl4fOQm8Krf4h7I43SUocf8AkAdjQmUUb%2B8h7BHqVNraDQVrIVbqKMzO63nbFNFwNRtMM%2BMyMkGOqUBH9Rguub7POSA5Al91ylF80vlv3qb%2BdQq72SFkdEFkV4LrVg7vBlfpi6NExr5eRMuqyAqspRtXnZICcyEQj9zdIgj6T%2B1cdoNZweWBmUXGiHq05PiKxAHPXd1GZq7Y%2BJPIqynPn%2F98bk8bMjmzIWTcsk%2Biml1LcxHJgD4j8k6%2Fdab1kwlhNWLNPyLc9iVH847ejiH7iBVE%2F4ZtT0ZvOYq74NP7JND&X-Amz-Signature=b6476dad18d23e37fa591b4938f92346869e8d26480c4eda9204b0cc65d31cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
