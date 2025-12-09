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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHWWVMP3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBapCdpWF7LhGDj0VWsaMwCb%2FuemoMXylCgqYM21idRqAiARvDzlaGkLlXdbyDCX4dQ5VKOUjXTi9d6sC4tJM2fgxCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNGpf7sfxwWoz8LMBKtwDGHxCSEgW4aDDCYhlEmk46Q%2FuZuRYkWa0Wm7GgY%2BzWtWk7LaLpn1aXuABR4rtuNLsvxtIhHUXoCRmsLPL9t45%2FWWmK9YYKreB3H%2BivThCRhwCTCKihMGi2KDvK1lNY8%2F9yjhYj8UGN7keTpw3atOIO7CJ0z4dXE84Ta5rCZ9QpgR2Z0hB%2FoBQigSjfy6RMZX0L3U28UBizRESEZgaSaeMcULTGOLvi%2FZ3vhBoYcWfJvUil2DqMLZcd6x9qiT3VFG3kRWrcVI24JcojKP%2FZImnBFHbo0p3%2FBezInxlSB4Qy17j%2F2wiCeRRwLdoqdwYOAWlFnwE%2BHw8mMyPcJq40IPoSZV5xwcwJCQBgeOCF4FlMHNsKlgSfoOCHwpsEarbqq1EuLlaKCAubO5mBoITScsONUQANBNVDmwAwgSRlnj%2BJLteVFCoLotDbfFFA7kFhO1YlgKw21Tvl0YHtYT3Cz9khVKDDheZbQGgF5XUE9JM0q3fFxzvEHzpW3Euo2CNw13qT2urikIih6HZmg9oT%2FzSLybSlUjsvm0B7mKFonEOzOornkEPxPiz18X8w00pcy%2FWV3WA%2FgiZwxveZteTPgq%2FKJxjg3T2BLuuXX8M%2FhCF1xN2igFy4exIuGeBqwMwicPdyQY6pgGyUZGsWe4Ag4aKNnYm2cpLluYJX4%2ByoVWOjp0kbdBKvldyRXDfD%2FN9gni8g9zQbZSFI9InUfGthXC7Z2YvP7ywgpYdS%2FD4sqYbqMYpmtq1MPTCa3M8KrskV6bCLyWhSU6wl30BCXfvEPFxXqhRFWPxwrRdoSw0yY8PdoNYTBmbX5JsvIxyGs1Msn0riLJw%2FQwCj4Ygu0%2BPVii3BspvJYaxG1ziQ%2Bmp&X-Amz-Signature=db43bf3eafd1112a99be36c1bec5777b2268235e1ecb6587f6a66975a1b6ad0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHWWVMP3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBapCdpWF7LhGDj0VWsaMwCb%2FuemoMXylCgqYM21idRqAiARvDzlaGkLlXdbyDCX4dQ5VKOUjXTi9d6sC4tJM2fgxCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNGpf7sfxwWoz8LMBKtwDGHxCSEgW4aDDCYhlEmk46Q%2FuZuRYkWa0Wm7GgY%2BzWtWk7LaLpn1aXuABR4rtuNLsvxtIhHUXoCRmsLPL9t45%2FWWmK9YYKreB3H%2BivThCRhwCTCKihMGi2KDvK1lNY8%2F9yjhYj8UGN7keTpw3atOIO7CJ0z4dXE84Ta5rCZ9QpgR2Z0hB%2FoBQigSjfy6RMZX0L3U28UBizRESEZgaSaeMcULTGOLvi%2FZ3vhBoYcWfJvUil2DqMLZcd6x9qiT3VFG3kRWrcVI24JcojKP%2FZImnBFHbo0p3%2FBezInxlSB4Qy17j%2F2wiCeRRwLdoqdwYOAWlFnwE%2BHw8mMyPcJq40IPoSZV5xwcwJCQBgeOCF4FlMHNsKlgSfoOCHwpsEarbqq1EuLlaKCAubO5mBoITScsONUQANBNVDmwAwgSRlnj%2BJLteVFCoLotDbfFFA7kFhO1YlgKw21Tvl0YHtYT3Cz9khVKDDheZbQGgF5XUE9JM0q3fFxzvEHzpW3Euo2CNw13qT2urikIih6HZmg9oT%2FzSLybSlUjsvm0B7mKFonEOzOornkEPxPiz18X8w00pcy%2FWV3WA%2FgiZwxveZteTPgq%2FKJxjg3T2BLuuXX8M%2FhCF1xN2igFy4exIuGeBqwMwicPdyQY6pgGyUZGsWe4Ag4aKNnYm2cpLluYJX4%2ByoVWOjp0kbdBKvldyRXDfD%2FN9gni8g9zQbZSFI9InUfGthXC7Z2YvP7ywgpYdS%2FD4sqYbqMYpmtq1MPTCa3M8KrskV6bCLyWhSU6wl30BCXfvEPFxXqhRFWPxwrRdoSw0yY8PdoNYTBmbX5JsvIxyGs1Msn0riLJw%2FQwCj4Ygu0%2BPVii3BspvJYaxG1ziQ%2Bmp&X-Amz-Signature=bcec8c68cca4f90350339ca005dad025d8b699ae0c1203bffcb3addc241f5236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
