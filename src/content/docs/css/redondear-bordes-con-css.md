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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMRPL5BH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhzVGwHQVjjFG9f4IEoGqXaBSWzvazftJySVHdDLZncAIhAKJwxcwcjHFMKmAKtrSVw0Ozxi8ZlEpIruVxBR5zMuZuKv8DCEkQABoMNjM3NDIzMTgzODA1IgxLzH%2Bo6s7pVJuBl%2F4q3ANm%2FKko%2BQyT2OiTUKAgDOG2RF2IiQxB4NpecUe5%2BAdjfbF6pHlGOXTU4T0COww3qjLyyQskBoWN2s2ul3wEgc7ZDHfefFyOPm%2FvP0oHBZRsz%2FndMHRVcJQfhO8UVeamPjahUwEHvHVvVjc%2F5Ef8aievNBA%2Be%2FjSkqM0hdg5rXuxTyBB4qNJCzgJrANEVWZqBmAlx6ANAo74UySugSSf4jeUSxYxCbuG1Ie02HUqByDTiXBA1U5pnAcJGjqmfpMPCLN%2BDx90VJ1jrvjiP%2B%2FPd%2Bg68COkJeyYu6DKW1D19fYxuhDL%2FvZAaf5cn7nMmySkLs9UBkSfqefcHWBE33QoJiPlIXMPd8dwz6sGuIszfxO7Yzj01%2FBMm6CrmCFfe%2BjLzIP1OUUNvOsbL9%2FeNzig5XR4YTbdgXJoDRxYjaBOc50Hyq3bBVnyIsLWY5NBii3v90TlSKiXKS4Ghnj%2BktOhuJbxvrLtwucgsmpRjdSRLBNLUBmFRh%2BWjfKH32VGJtqfc7%2FltRmBB46WHdecIkybX6XoZktS9x6kEXhX03stjdNwOe2YYN%2F8Vh3rgaDTdJNg0tSfa19BG3mbFYRyU%2FVBqcPHlxH8FywxuVytCea779vnNpiy9snWgqbw5ttf6jDp28bJBjqkAVfc8QrzKN5wnKJTxi9yLOzzk3NJ%2B%2FO7x%2BHGTGrlqsglrp6pwqhES8M8rqud3JVZjQCDwo2FlIezw%2BHXxyEFP0Zt48ilCF92no%2B0XyXyDuAAnA2Qka6WdGrLqG0%2FoDux3IJiRID1KAIyJS3Y6Ym0Yify32KxbnqxvwJWyyN%2BcE1fBhyqAulxPxdbfPQI8zcnGik%2FDZBF4kWv%2F3PGyVW0s7xzNWcz&X-Amz-Signature=3f4d0938a2c6ac95110bbc92d010b93b84fb500a8a0e225d59f70cf9c36f2654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMRPL5BH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhzVGwHQVjjFG9f4IEoGqXaBSWzvazftJySVHdDLZncAIhAKJwxcwcjHFMKmAKtrSVw0Ozxi8ZlEpIruVxBR5zMuZuKv8DCEkQABoMNjM3NDIzMTgzODA1IgxLzH%2Bo6s7pVJuBl%2F4q3ANm%2FKko%2BQyT2OiTUKAgDOG2RF2IiQxB4NpecUe5%2BAdjfbF6pHlGOXTU4T0COww3qjLyyQskBoWN2s2ul3wEgc7ZDHfefFyOPm%2FvP0oHBZRsz%2FndMHRVcJQfhO8UVeamPjahUwEHvHVvVjc%2F5Ef8aievNBA%2Be%2FjSkqM0hdg5rXuxTyBB4qNJCzgJrANEVWZqBmAlx6ANAo74UySugSSf4jeUSxYxCbuG1Ie02HUqByDTiXBA1U5pnAcJGjqmfpMPCLN%2BDx90VJ1jrvjiP%2B%2FPd%2Bg68COkJeyYu6DKW1D19fYxuhDL%2FvZAaf5cn7nMmySkLs9UBkSfqefcHWBE33QoJiPlIXMPd8dwz6sGuIszfxO7Yzj01%2FBMm6CrmCFfe%2BjLzIP1OUUNvOsbL9%2FeNzig5XR4YTbdgXJoDRxYjaBOc50Hyq3bBVnyIsLWY5NBii3v90TlSKiXKS4Ghnj%2BktOhuJbxvrLtwucgsmpRjdSRLBNLUBmFRh%2BWjfKH32VGJtqfc7%2FltRmBB46WHdecIkybX6XoZktS9x6kEXhX03stjdNwOe2YYN%2F8Vh3rgaDTdJNg0tSfa19BG3mbFYRyU%2FVBqcPHlxH8FywxuVytCea779vnNpiy9snWgqbw5ttf6jDp28bJBjqkAVfc8QrzKN5wnKJTxi9yLOzzk3NJ%2B%2FO7x%2BHGTGrlqsglrp6pwqhES8M8rqud3JVZjQCDwo2FlIezw%2BHXxyEFP0Zt48ilCF92no%2B0XyXyDuAAnA2Qka6WdGrLqG0%2FoDux3IJiRID1KAIyJS3Y6Ym0Yify32KxbnqxvwJWyyN%2BcE1fBhyqAulxPxdbfPQI8zcnGik%2FDZBF4kWv%2F3PGyVW0s7xzNWcz&X-Amz-Signature=92037b7e2b15704710a2abd4037576697887f36573b95248ff2416cd7bcbcb29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
