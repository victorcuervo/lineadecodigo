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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KNX5UQY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCK%2BGrlYEPW8zUKsm8nvDoGlgt1SP%2FO%2BsDlxQflu9DaAiEAxwsbPoyExVEc2EIdiuEbmrghZTT7c8gt7sRamkN65uQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsviTBR90DLRUTUQyrcA3v0ccLkBrKXypy5PnbYDbc4OAGaTsXyR%2F%2BeDFBD5E%2FXLwMvl8LgxZmhAcHafsCx5yBhGjZjAyU4hZZ43wLnkNzc269A4j0OmvA4%2FZ86sX%2F2mJB7jgted9h8VK0EjbJ9EqXKfZkQNcdAmOORFxd0zyCKYAX10VMY4HdGzKQ%2BJzrpDWJn9lthETcj%2BXVhyq08mHqM8H16No1uRH%2FcYKiZDAnOQGpb2EHgeOWx8RKJ67kiHVdpV%2FK2ExkM3FlpULoRxw%2F%2FVOYAj1O1ZrnucDzTk%2BQmtmVLFAGJRKZbjbKMgve6IXxEbLIYh11jMuukOkxkxDi5QJx1cAagf4%2FcELz9igP7t%2BFqNGOHAuzqQ7KNAyg8ClCiL%2BURlhm7vRh5YU5GqjxP2SggKufnOopG9qnbtCMF74ZzlURisLS%2BZn175ZaxEHLk%2BdE6r80vzR8AyCWK3RiWI0w6watS9%2BNDxvGWaAkffbzxroal9GtVQT0Ram9ZgSfNm4UVLte%2B0OefwmAoxHY9G0tVEpB3eYYBvUYc3OET0yOfmmVFxmoFqcmBQPz%2FsZrQc53fsceCuZZnHMGEE8MeChXq71j%2FBZMikBFzfuuxfnyQ1KeAg1KIeFFuWwDtgZUofI%2F6mD6GA0VkMMuei8oGOqUB2FMM3jVdPUGKLrxvCjwl%2BauDuCb6532rbMExHrxDDgG8DKALoqvIZ%2FVsLMCuPJuhBtcJMzknGCNYZwGDGsuw7tove1pa264NUsSZWkIrJd1UrnNQhviyMvdk6S7AaSw8GF2sbfq6ngoaDh589EyX%2Bv6ern2FTJkw0ytwzb9ALX1cBob6SAazU1Bj9FUqGzYL%2BrA6cDK2BxqaqyPSUpUPwwDRBDij&X-Amz-Signature=d4684c307c8f9b684dea1e2ad05c8bf2d258141f6b1b5f1e111cbdab2588b3c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KNX5UQY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCK%2BGrlYEPW8zUKsm8nvDoGlgt1SP%2FO%2BsDlxQflu9DaAiEAxwsbPoyExVEc2EIdiuEbmrghZTT7c8gt7sRamkN65uQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsviTBR90DLRUTUQyrcA3v0ccLkBrKXypy5PnbYDbc4OAGaTsXyR%2F%2BeDFBD5E%2FXLwMvl8LgxZmhAcHafsCx5yBhGjZjAyU4hZZ43wLnkNzc269A4j0OmvA4%2FZ86sX%2F2mJB7jgted9h8VK0EjbJ9EqXKfZkQNcdAmOORFxd0zyCKYAX10VMY4HdGzKQ%2BJzrpDWJn9lthETcj%2BXVhyq08mHqM8H16No1uRH%2FcYKiZDAnOQGpb2EHgeOWx8RKJ67kiHVdpV%2FK2ExkM3FlpULoRxw%2F%2FVOYAj1O1ZrnucDzTk%2BQmtmVLFAGJRKZbjbKMgve6IXxEbLIYh11jMuukOkxkxDi5QJx1cAagf4%2FcELz9igP7t%2BFqNGOHAuzqQ7KNAyg8ClCiL%2BURlhm7vRh5YU5GqjxP2SggKufnOopG9qnbtCMF74ZzlURisLS%2BZn175ZaxEHLk%2BdE6r80vzR8AyCWK3RiWI0w6watS9%2BNDxvGWaAkffbzxroal9GtVQT0Ram9ZgSfNm4UVLte%2B0OefwmAoxHY9G0tVEpB3eYYBvUYc3OET0yOfmmVFxmoFqcmBQPz%2FsZrQc53fsceCuZZnHMGEE8MeChXq71j%2FBZMikBFzfuuxfnyQ1KeAg1KIeFFuWwDtgZUofI%2F6mD6GA0VkMMuei8oGOqUB2FMM3jVdPUGKLrxvCjwl%2BauDuCb6532rbMExHrxDDgG8DKALoqvIZ%2FVsLMCuPJuhBtcJMzknGCNYZwGDGsuw7tove1pa264NUsSZWkIrJd1UrnNQhviyMvdk6S7AaSw8GF2sbfq6ngoaDh589EyX%2Bv6ern2FTJkw0ytwzb9ALX1cBob6SAazU1Bj9FUqGzYL%2BrA6cDK2BxqaqyPSUpUPwwDRBDij&X-Amz-Signature=d1ed8d6f7c25093666cbb1e5fa430108e4fe04e9c91cc96180fce1e412f9a69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
