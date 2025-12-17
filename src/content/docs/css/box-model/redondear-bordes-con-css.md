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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB74EYOT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHaDR%2F%2FULoSOS8w4psli1Vj6gcBuEB3dXQpt%2F1HCm7bAiBu2cyPZ2JbKjbSCrVtkSwTBdPJOIi%2F6dadRY9p7Bh3QCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaT1qCySnwCqHUI1nKtwDxrfHFQL8lzquqZaowYB6nbkcoW8fIkpdLMIekqJ66QU80TOQX5PSrBojwnaEbFY387HI8klWEmsbW%2FrhkM6JwUJA7SUKYl4mpVDBZ%2BsRNvZx9jJzRngbihHaVedJhvPmmepTSmmbCjrzbTij2lpNidSiJjzySWxyf9%2BUd56z9GWmZY8qB%2BtuUokMV6MMZgKQxURxlhR1J3tW8KoV0FAUnFNmdDGBk7W8H3zEWj6X6PjvaP1NEjID4w5J4JHkVTRaRs9D9j2Au2fmbE%2F4O972GfEFBPjr%2FhNLGjhSQNpV3qkb%2F0Jp2WZ7QYmGwzybxNQk%2F3O5Vh%2BGxm3TSqoHzXrWu3a3BUvq5bZD3bIyUDVdsuv2G7M5kSUZ0qt%2Bll4we5Aufk%2FG8Cliqyk9irG8WgH%2B4uUykOyWtOfpD7sfDw%2BjC5J316rkaqwAFP1uk8A0mPLCIfrQ3mqOcH4GNjKZp1ZhYuKIf2zbchesLvl76jvuUQPnggfvCExyVz2rgEvj2fwnzu8pyyOSSc7O7%2Fmkd%2F7lb3K59SKjqIphF%2BGvXXAl8gPNvQNjvhKZcWfuO0jOEm7vK3RRGy8qMbooXAHuUsJbhhpqSoeHacwuGq9mfU5L00kPpCG0PVRQk4WITEowzZ6LygY6pgEPZvn4Z7bcZi7HISz4hHvo1LOZ%2FCbvawHYwV1UBzJ1YeObGN8VPbhvow8Xkanyq4v5%2FALRwX8sncnU8F76d8LAvKWkR3p9xTG%2Fy2M4PtTA9Wv0SIIHQ6Ak0%2FLF7cSVF8A3MNyw1iqocNtjnuHDlE4nTPWuSbLl7OdLNaaDPwy8inDJAMqbeen2F%2Bj6SPZ1LpWRrbTpSsY6k3B0FlPP2t2bz%2BBbLqJY&X-Amz-Signature=d1d53061cca67b73a282b9559ce76db58b1d59fa14dcf3e2724d40ce0d0d8434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB74EYOT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHaDR%2F%2FULoSOS8w4psli1Vj6gcBuEB3dXQpt%2F1HCm7bAiBu2cyPZ2JbKjbSCrVtkSwTBdPJOIi%2F6dadRY9p7Bh3QCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaT1qCySnwCqHUI1nKtwDxrfHFQL8lzquqZaowYB6nbkcoW8fIkpdLMIekqJ66QU80TOQX5PSrBojwnaEbFY387HI8klWEmsbW%2FrhkM6JwUJA7SUKYl4mpVDBZ%2BsRNvZx9jJzRngbihHaVedJhvPmmepTSmmbCjrzbTij2lpNidSiJjzySWxyf9%2BUd56z9GWmZY8qB%2BtuUokMV6MMZgKQxURxlhR1J3tW8KoV0FAUnFNmdDGBk7W8H3zEWj6X6PjvaP1NEjID4w5J4JHkVTRaRs9D9j2Au2fmbE%2F4O972GfEFBPjr%2FhNLGjhSQNpV3qkb%2F0Jp2WZ7QYmGwzybxNQk%2F3O5Vh%2BGxm3TSqoHzXrWu3a3BUvq5bZD3bIyUDVdsuv2G7M5kSUZ0qt%2Bll4we5Aufk%2FG8Cliqyk9irG8WgH%2B4uUykOyWtOfpD7sfDw%2BjC5J316rkaqwAFP1uk8A0mPLCIfrQ3mqOcH4GNjKZp1ZhYuKIf2zbchesLvl76jvuUQPnggfvCExyVz2rgEvj2fwnzu8pyyOSSc7O7%2Fmkd%2F7lb3K59SKjqIphF%2BGvXXAl8gPNvQNjvhKZcWfuO0jOEm7vK3RRGy8qMbooXAHuUsJbhhpqSoeHacwuGq9mfU5L00kPpCG0PVRQk4WITEowzZ6LygY6pgEPZvn4Z7bcZi7HISz4hHvo1LOZ%2FCbvawHYwV1UBzJ1YeObGN8VPbhvow8Xkanyq4v5%2FALRwX8sncnU8F76d8LAvKWkR3p9xTG%2Fy2M4PtTA9Wv0SIIHQ6Ak0%2FLF7cSVF8A3MNyw1iqocNtjnuHDlE4nTPWuSbLl7OdLNaaDPwy8inDJAMqbeen2F%2Bj6SPZ1LpWRrbTpSsY6k3B0FlPP2t2bz%2BBbLqJY&X-Amz-Signature=fd6b5a1b7e46f4ac5d034c440c5fa4f8ae10c2d9d55e2a1eb5b3fde4e2b48f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
