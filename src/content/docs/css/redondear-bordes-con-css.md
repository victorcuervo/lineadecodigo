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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV2MH3GK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAR6S3jpdCm5YcZ5%2F8oxvyDv2iudjLRWZGa0V5Lm5KqgIhAJGImvDQJSPcE6e1iY9krOfL2sc846yxHtymR0WEGEXoKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7YUCkZjVBxgwnu6Uq3APfRRc0qQ4WR7eyXZ1r8r2RLPWHknGUmMN7kHLvQspXoPsuaVotyx9oUF0PRMvwAcLlKR7VhwnWe3ggZzjJPoNyjhbSvbuIytj6EUrbzbqGMZG43rQzx%2BxNMS8Mw3V%2BzdQs1jZlQhIDIZNkPYN6Z470LmiCX7ZG0HCbsjtlX9YF99%2FH6zinLw4G8cD4GXG4sgXdN8JVKTjOaM5P%2FF20%2FOdWUZgDztTBm3Dn7QXL%2F%2F5pLCR7XaFazgQpaabaceiASL%2B7Lv7PRk%2BLwG2%2B2JzCD%2FQfT96fZeZ1svbn5H0uh4z9dLCRpXzk8%2BkoTGIrlZ0ny0wC51ZJQIIe8S37%2B1Sv5EVFCLXr1%2B47jcu0g6zJo9WPcspLc5DiOsj2avDrjV2wrN%2B4wVhpmEMzM0ox9beyJoSG%2F4eI8vhwHCBlfQtxmjKGERgk0COfUbqZBbB9TQpYaDFaCTPh%2BveOE%2F%2FAJm3A4PyHWcWQDavgaoLBT7K2jhHwQHzx5TUxcTKcmkQcdyw1SE5GLyghpKf3eX0aifJteQLsvdU1VTGkofLz35ytveE515864HDHHKkrUC%2BP8WqioYdoS7DnjCVtG618Oo7V7YceaS48a7%2B3%2FWZnipO8U3VGNq6s8Jxw91rhQzTPszDRmdXJBjqkAepakYBKWYzGrVh%2B2U3wwLI%2FDwjt1eD7y%2BndBg6UDW1N9bSvv4g2FfG80%2FCt9LoWh%2FvxjcyC24l8oL14lhyFoR%2Bx4KsPyMAd7%2Bw4qCqyo0JhiS1FaAXwJjcVxFjOcATxrl2Zq6uSRPXbUbdvnN80wE3Zlk9T12fURXIDzxXp7jJHX8AykBLN05wA3SChAbmG5E4eo1aSvYRTSmBXQ2FgjEsqjRm8&X-Amz-Signature=bb4dde7e9aebadfc0ca5b0b3722b3d0374332aac71216ed9689bf0104ce3b72e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV2MH3GK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAR6S3jpdCm5YcZ5%2F8oxvyDv2iudjLRWZGa0V5Lm5KqgIhAJGImvDQJSPcE6e1iY9krOfL2sc846yxHtymR0WEGEXoKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7YUCkZjVBxgwnu6Uq3APfRRc0qQ4WR7eyXZ1r8r2RLPWHknGUmMN7kHLvQspXoPsuaVotyx9oUF0PRMvwAcLlKR7VhwnWe3ggZzjJPoNyjhbSvbuIytj6EUrbzbqGMZG43rQzx%2BxNMS8Mw3V%2BzdQs1jZlQhIDIZNkPYN6Z470LmiCX7ZG0HCbsjtlX9YF99%2FH6zinLw4G8cD4GXG4sgXdN8JVKTjOaM5P%2FF20%2FOdWUZgDztTBm3Dn7QXL%2F%2F5pLCR7XaFazgQpaabaceiASL%2B7Lv7PRk%2BLwG2%2B2JzCD%2FQfT96fZeZ1svbn5H0uh4z9dLCRpXzk8%2BkoTGIrlZ0ny0wC51ZJQIIe8S37%2B1Sv5EVFCLXr1%2B47jcu0g6zJo9WPcspLc5DiOsj2avDrjV2wrN%2B4wVhpmEMzM0ox9beyJoSG%2F4eI8vhwHCBlfQtxmjKGERgk0COfUbqZBbB9TQpYaDFaCTPh%2BveOE%2F%2FAJm3A4PyHWcWQDavgaoLBT7K2jhHwQHzx5TUxcTKcmkQcdyw1SE5GLyghpKf3eX0aifJteQLsvdU1VTGkofLz35ytveE515864HDHHKkrUC%2BP8WqioYdoS7DnjCVtG618Oo7V7YceaS48a7%2B3%2FWZnipO8U3VGNq6s8Jxw91rhQzTPszDRmdXJBjqkAepakYBKWYzGrVh%2B2U3wwLI%2FDwjt1eD7y%2BndBg6UDW1N9bSvv4g2FfG80%2FCt9LoWh%2FvxjcyC24l8oL14lhyFoR%2Bx4KsPyMAd7%2Bw4qCqyo0JhiS1FaAXwJjcVxFjOcATxrl2Zq6uSRPXbUbdvnN80wE3Zlk9T12fURXIDzxXp7jJHX8AykBLN05wA3SChAbmG5E4eo1aSvYRTSmBXQ2FgjEsqjRm8&X-Amz-Signature=5518eb5d5816bd1f258dfb8b10e6fce64ca9c630aa2acba62c7d6444c2a8ddf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
