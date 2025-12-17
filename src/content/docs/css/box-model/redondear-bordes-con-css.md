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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5R3IYJH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbniDxHCzTCrEinxI%2Bw878ZOzP0udD2Q8XtRJoF%2FGIBgIgVRGllgP0U%2FWIq3sRaCqv1HOPExtHhLqo8Ur983MKxzoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXHtZUJEjYg0BKUUCrcA5a%2FHzFG%2BKG5IyqFucC9f51caA0os52PLU8ykx2mFDGt2KuYIZhkiO4QyNX06QrKM5Ru%2FB3h6j8NcCcJuk6fUn2kfEVlPZ6xIC60lGLRpKGSKsk30oECHXvxQZT0K90cLh0UEo7LSu14EB40H6FvqglvmZiGgfaM5HlFVprhAHkkeU55znHCdZ7gcAzsKGDd9IH0iXbrxwsnM3EIkwYzoiXwP5aRkq8IrGaZz098rKm6kBYwGNo6NXoFTwKEWZENWIc7SRAEv9LReoSrQGlZf7qOxBi6i1MO9J5HRCE%2BLJHeVthMHkWyRB6NIjgY3k6dGkQX8oo6mG6Fw%2BHG2tJsDlXHZDrlO5RmuKtWD9oRqnIzGgxDbPDlxzFPePPDWEz8Ku40VvXNDuGWZv0WIUstdRrlIuiThOzr%2F%2FkT5%2B3EmMdnHF8JivDSBBbyPDmjPcX2%2F%2BZVRhhykDzA%2Bvix5v4cgM2CIZZSdZcQuyt%2Bk0%2FK2zJHWx6GGDojjvFffL7Ol%2FxMQeSZRxHrTa5MbNQtr86XkmkDS0BeJQ79eFVXy9KowInnzpR%2BwNIMMYizSwrikxK8XO%2BvJVlUZEbiXwBRuj3Mkj88qJ0C17EqiM%2BcHwLvx11CmiXtXkYWB4RsPFmYMNGLjMoGOqUBpN1YIAeD3sNy5u7U3gudNY4UHT%2BF9QXo%2Bvrx3rVGqkLSarSNbMbtXqEfW9HMlWf9H9sgl3pkTWdUiepj2w7f83T9XsGIdn145C6JMbcyWSETveva3lsNNGU6YRKcE59LacsyjHerrqgLLEp3amrI9BqQ8E6ftCHFsJSKyS6fxvJwsVq1QNrAcFlTBd5GFiIvCBOw0Ps2mhkn278LMn%2Fzb13Spyni&X-Amz-Signature=ac008b281b76b07c01ee1bbce62d55dacf1b34f2646185d4aa71a179ebdec718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5R3IYJH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbniDxHCzTCrEinxI%2Bw878ZOzP0udD2Q8XtRJoF%2FGIBgIgVRGllgP0U%2FWIq3sRaCqv1HOPExtHhLqo8Ur983MKxzoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXHtZUJEjYg0BKUUCrcA5a%2FHzFG%2BKG5IyqFucC9f51caA0os52PLU8ykx2mFDGt2KuYIZhkiO4QyNX06QrKM5Ru%2FB3h6j8NcCcJuk6fUn2kfEVlPZ6xIC60lGLRpKGSKsk30oECHXvxQZT0K90cLh0UEo7LSu14EB40H6FvqglvmZiGgfaM5HlFVprhAHkkeU55znHCdZ7gcAzsKGDd9IH0iXbrxwsnM3EIkwYzoiXwP5aRkq8IrGaZz098rKm6kBYwGNo6NXoFTwKEWZENWIc7SRAEv9LReoSrQGlZf7qOxBi6i1MO9J5HRCE%2BLJHeVthMHkWyRB6NIjgY3k6dGkQX8oo6mG6Fw%2BHG2tJsDlXHZDrlO5RmuKtWD9oRqnIzGgxDbPDlxzFPePPDWEz8Ku40VvXNDuGWZv0WIUstdRrlIuiThOzr%2F%2FkT5%2B3EmMdnHF8JivDSBBbyPDmjPcX2%2F%2BZVRhhykDzA%2Bvix5v4cgM2CIZZSdZcQuyt%2Bk0%2FK2zJHWx6GGDojjvFffL7Ol%2FxMQeSZRxHrTa5MbNQtr86XkmkDS0BeJQ79eFVXy9KowInnzpR%2BwNIMMYizSwrikxK8XO%2BvJVlUZEbiXwBRuj3Mkj88qJ0C17EqiM%2BcHwLvx11CmiXtXkYWB4RsPFmYMNGLjMoGOqUBpN1YIAeD3sNy5u7U3gudNY4UHT%2BF9QXo%2Bvrx3rVGqkLSarSNbMbtXqEfW9HMlWf9H9sgl3pkTWdUiepj2w7f83T9XsGIdn145C6JMbcyWSETveva3lsNNGU6YRKcE59LacsyjHerrqgLLEp3amrI9BqQ8E6ftCHFsJSKyS6fxvJwsVq1QNrAcFlTBd5GFiIvCBOw0Ps2mhkn278LMn%2Fzb13Spyni&X-Amz-Signature=eaace80ad3f8c3aa79602670d9c3277312448d6b0256fcc3c1fa227a8114d53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
