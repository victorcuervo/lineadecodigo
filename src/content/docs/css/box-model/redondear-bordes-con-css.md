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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FJXQFEN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjaBXLfJN%2BjtEpP5oH1bTV1v1AcNYt22AvW9R%2B9x9P2gIgDcoYr7IsKq%2FndkJ%2FaysXwwYLSOeq5O9x1OZgNI1F6e0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFT4Ilz7M1JvTGEniyrcA0LwfnpDeXg4FMxIkBIq8fJBKaiiYD1SFclTIlUhT9OOAhXyHjIQAgkiFndiQz83UASXHsKxONIrBQJF15XBnnbhrVwip59Fm4bG87Q3g9RHFpiW84Tu64CpihCZuYwRV%2BEFjdjfhAXbfJ1zbCq3acV8DoBgNRIkmh5sifEpcqYEZ%2B%2FF3MFo3zuU2WK9TBpukidKW6GtCGU9oAJSwu5ykDxdCrWRenUbAehjqQDIjWOMIgsicjzt6S5vH6f%2FLrHY6MRVbOYOGzZDu0TgXW3E%2FmehvtJLw%2B8xgKR2sjowXDjtZ8SDl9qCZc4Up03fxAoCKvnd8kbHcneJqyubRyL6TjwcbrA5Zb%2BVTwLpvvwh9qS%2F%2BgogXj4ALLONl3ez5i9ObvCcZymIXEyknzOOcPq%2FzYIP%2FEncjabztH7AloQT4LnzYPGzkALhtAyCpO2whDIpZ84oND4IceIR01JT33oaAMhkYH11ufKawMRzDGKiKLUvzTC7Jttpu1vpRIw1gTWIelN3OedK%2FCj0NyiHvpi5bcGFl54TDOB%2FyRiqEFFxxMlLhubFn%2B0a3tJcXyrfKQGTuqQCrTL0%2Bk6ju8zi5y8gFnpAx0pnbjczZ3FNAnWUoeb2Ir0eTdXyKQdx2aCwMNLeh8oGOqUBNCv96ZcQmwGPt36hy%2BY%2FvfXpyCzmPQ5hiX%2Bq6qkSwbCBsCXGOJRRdB5rgC6Nk5EY%2FAPYkLabjstRI7DXW8EerrXO1qz86W54jAYpZNLg%2FN8SlXQOPAviq%2F3o0xK1wTDl521V6U3KXb%2F4eMKEhAYCFhNPYnAKjyeZcl1BWwmjFCaIoahIrHAnTC8UcwEUolhqacw7540TfuIxrcsreI320ph272vi&X-Amz-Signature=bfec880904285a796a2a4724660b282f86d0d5ec0714f0d7ac800bfc340ec4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FJXQFEN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjaBXLfJN%2BjtEpP5oH1bTV1v1AcNYt22AvW9R%2B9x9P2gIgDcoYr7IsKq%2FndkJ%2FaysXwwYLSOeq5O9x1OZgNI1F6e0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFT4Ilz7M1JvTGEniyrcA0LwfnpDeXg4FMxIkBIq8fJBKaiiYD1SFclTIlUhT9OOAhXyHjIQAgkiFndiQz83UASXHsKxONIrBQJF15XBnnbhrVwip59Fm4bG87Q3g9RHFpiW84Tu64CpihCZuYwRV%2BEFjdjfhAXbfJ1zbCq3acV8DoBgNRIkmh5sifEpcqYEZ%2B%2FF3MFo3zuU2WK9TBpukidKW6GtCGU9oAJSwu5ykDxdCrWRenUbAehjqQDIjWOMIgsicjzt6S5vH6f%2FLrHY6MRVbOYOGzZDu0TgXW3E%2FmehvtJLw%2B8xgKR2sjowXDjtZ8SDl9qCZc4Up03fxAoCKvnd8kbHcneJqyubRyL6TjwcbrA5Zb%2BVTwLpvvwh9qS%2F%2BgogXj4ALLONl3ez5i9ObvCcZymIXEyknzOOcPq%2FzYIP%2FEncjabztH7AloQT4LnzYPGzkALhtAyCpO2whDIpZ84oND4IceIR01JT33oaAMhkYH11ufKawMRzDGKiKLUvzTC7Jttpu1vpRIw1gTWIelN3OedK%2FCj0NyiHvpi5bcGFl54TDOB%2FyRiqEFFxxMlLhubFn%2B0a3tJcXyrfKQGTuqQCrTL0%2Bk6ju8zi5y8gFnpAx0pnbjczZ3FNAnWUoeb2Ir0eTdXyKQdx2aCwMNLeh8oGOqUBNCv96ZcQmwGPt36hy%2BY%2FvfXpyCzmPQ5hiX%2Bq6qkSwbCBsCXGOJRRdB5rgC6Nk5EY%2FAPYkLabjstRI7DXW8EerrXO1qz86W54jAYpZNLg%2FN8SlXQOPAviq%2F3o0xK1wTDl521V6U3KXb%2F4eMKEhAYCFhNPYnAKjyeZcl1BWwmjFCaIoahIrHAnTC8UcwEUolhqacw7540TfuIxrcsreI320ph272vi&X-Amz-Signature=1c0c976590292d0f644fd80ddda41c1775c9357253251fd516beddd71db9eabe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
