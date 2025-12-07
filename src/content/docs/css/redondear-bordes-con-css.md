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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXAGWAUT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdH1H2s2VntocqpGC71Yy0uSH7PE2SZIjf1%2FkwpV4hCwIhAOhCuQQ8SxlK876x0Inhy4O5K2OjjXS39VnbIZB6%2FuteKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4ZfAU5mOWQniP0w4q3APA8lKxmgRHWT7jlz0%2BpeM8JYr96UgtNGT9zRG6W9QsuJw8L1rXXrm4fGukZ%2FVhjk6rAIiXwCbyg%2Be02Hsf8yq2K5frSJv6lQSIkm1jTrLgKSmEAyexOuK6C4c3ZKCftwF6UD3saJYtcZN1GYCPeaxkPcoXGncztPbXp5eW8%2FPCJHTSjA2eBE9yalUb1u%2FKMet88HIYFukAxg%2BgVjF9RFao2qQdAwdCgQhDEhXhPPDQLNwPDr3P5H%2BmipeSPeNUSBXDq9lDaq%2B6bp%2Bw6oMff%2BW98WBqByl90S9suFszMrgY%2FrZCHeUNMX17Nt8%2FNy8%2BFLocgmQ11vdpciTaJiFKf9UN85TLNFz%2FsOcQQHnQgEzPf3sdhVUZayJayD27WAYGoFyY4v51P1cpfzqYs0syVTPfd59qdLz5pE43d3r5%2FLEU%2B8KOu4%2BjrWZ%2BrJgQkTNRt5tmZYwjRAM4Ffnfb6uyUNNleRvdemhwQSe27%2FmGMJyhJkJCEYYetoyATq8PtBzSmnfrZkgAHwuHClNHGfNGvBrQc58PW%2FcDYc7vA2o5hNg6aqITa3me%2ForCYnuF7AlwTWP4spEEzoZyrzUCQJrpkh3Jqq7b5LYaoIiomAAL40gDptf8acKi5TurvjbZSDCru9bJBjqkASSsNlpCN9ZPGoWAo6Lhrmn6axUC2yZQ3w%2FOkUuFAkcwU09nUjLqj4p2Mj%2FcZHhbBkBv83qCzC0Q41%2F8zvcjxuSxTWWt8zFdm3QGIF%2FJ4FNN7hRTnEZ1MBw%2BK6dxs45d4YX560%2FdtF3VVQgd2MfBYFZfPbP1GAQPYdBdLkBVSfjkrt557%2FYULempMhqJrboxtAEJzcQcMgnGL0bOAZwTSwOA8PGR&X-Amz-Signature=f7c91fbb14ac05f014f58bab1eb2f9a19e59e9f0d1f9ec99a60350166456cfbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXAGWAUT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdH1H2s2VntocqpGC71Yy0uSH7PE2SZIjf1%2FkwpV4hCwIhAOhCuQQ8SxlK876x0Inhy4O5K2OjjXS39VnbIZB6%2FuteKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4ZfAU5mOWQniP0w4q3APA8lKxmgRHWT7jlz0%2BpeM8JYr96UgtNGT9zRG6W9QsuJw8L1rXXrm4fGukZ%2FVhjk6rAIiXwCbyg%2Be02Hsf8yq2K5frSJv6lQSIkm1jTrLgKSmEAyexOuK6C4c3ZKCftwF6UD3saJYtcZN1GYCPeaxkPcoXGncztPbXp5eW8%2FPCJHTSjA2eBE9yalUb1u%2FKMet88HIYFukAxg%2BgVjF9RFao2qQdAwdCgQhDEhXhPPDQLNwPDr3P5H%2BmipeSPeNUSBXDq9lDaq%2B6bp%2Bw6oMff%2BW98WBqByl90S9suFszMrgY%2FrZCHeUNMX17Nt8%2FNy8%2BFLocgmQ11vdpciTaJiFKf9UN85TLNFz%2FsOcQQHnQgEzPf3sdhVUZayJayD27WAYGoFyY4v51P1cpfzqYs0syVTPfd59qdLz5pE43d3r5%2FLEU%2B8KOu4%2BjrWZ%2BrJgQkTNRt5tmZYwjRAM4Ffnfb6uyUNNleRvdemhwQSe27%2FmGMJyhJkJCEYYetoyATq8PtBzSmnfrZkgAHwuHClNHGfNGvBrQc58PW%2FcDYc7vA2o5hNg6aqITa3me%2ForCYnuF7AlwTWP4spEEzoZyrzUCQJrpkh3Jqq7b5LYaoIiomAAL40gDptf8acKi5TurvjbZSDCru9bJBjqkASSsNlpCN9ZPGoWAo6Lhrmn6axUC2yZQ3w%2FOkUuFAkcwU09nUjLqj4p2Mj%2FcZHhbBkBv83qCzC0Q41%2F8zvcjxuSxTWWt8zFdm3QGIF%2FJ4FNN7hRTnEZ1MBw%2BK6dxs45d4YX560%2FdtF3VVQgd2MfBYFZfPbP1GAQPYdBdLkBVSfjkrt557%2FYULempMhqJrboxtAEJzcQcMgnGL0bOAZwTSwOA8PGR&X-Amz-Signature=3b94d8a8369b80ac59612a75a33945cbb5597536527e569d095f797c60e68b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
