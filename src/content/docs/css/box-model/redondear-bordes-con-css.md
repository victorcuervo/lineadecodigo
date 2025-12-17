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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOX7HFKW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA7zxx1oIgCiWOHR%2BArtUsvKDdi30nTGfL48kZ3Sk%2FvQIgbUmFN9J5ocTivN0IigJC6fl3HRbjR4aHGBjiGMuiB8kq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCbSTlHXGLpoBDi50yrcA5CEcxxCqSE0ORgtgl6OaSjIFnqvU%2FubxFkAVAxHDHXbHmoiwSo0nwWMlP%2BGgmS1kN7feY0jRNwGNaDpci1Oz4ScZNJmg2SQkrE%2FTNTCzA5SnQxjgE%2B4Hgech2HxVWlY00jyaTpPdsebuLX3Lu4skA%2BPXkKoQvnlpzsXtNelJ1V25pWaNBNJNRZgZOmXhrNQT%2BYf%2B01q1%2BcrWai3l0vgtfFI7hH8kU1Ew%2FFCzbXYUoHsxSBIfAK7yynHhYPloYd3fqFUyXptuGchwng%2BcGUjuhKFi9UegaKyqq0CpAKgMk8b4dV4bpFSRuhzTTnEiM1x9%2FnCmNxDdzQCjXztSTryxVunOHQ%2BLVDvGFpff1UN6tAsdUFxGpB%2FFCHO8FqH%2BUkTqbQz3p%2BYTwpevNKsI89qJDjiNwGVal7F2qygiIvZ%2F7krM2U8%2BwnR%2B7SOq%2FVa6iODqT%2FQvXzMZhEEgCA44hjh%2Fdy52lUOvh0BAXOOsw%2BhexAvfRhxQ9mE2jBF3umHjz0WTjHidARdof%2FQS0wKxo2LDN7E9uzjcZNswOyXTHuiSukAfo7N7lDv1%2FnJ%2BhWZCVhepmLFMpUZy%2Fo2ya66XLC28AOE3sRa3h7BHRLCvM%2BfNBMWU9rAjyHE3g7KtXJxMPXhisoGOqUB%2FTLuZ2TSgV9%2BCfESHWNPVy%2BeXdJqc%2F%2FOnw%2FzEF9%2Bl0VK14fZ1bqQ7111uiMuqyVe5iEM27sJOcI4jRq7gHFHX5riws38wf1F4%2B1baVV6Mr8xnrXEXa8dlRj9PZFvidhh13J4%2FWPeOgeHvOaF3l736vPu2Gv9TYT%2BU3ceSim%2BqM3ELh2QGC61bBtNGYeANqdQTd95U%2F06ZkCTtqzJvocZHTAtUJke&X-Amz-Signature=59e4b9675ce098d96afb3be17903135c7d0b2518c30f60a03f974359e7435267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOX7HFKW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA7zxx1oIgCiWOHR%2BArtUsvKDdi30nTGfL48kZ3Sk%2FvQIgbUmFN9J5ocTivN0IigJC6fl3HRbjR4aHGBjiGMuiB8kq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCbSTlHXGLpoBDi50yrcA5CEcxxCqSE0ORgtgl6OaSjIFnqvU%2FubxFkAVAxHDHXbHmoiwSo0nwWMlP%2BGgmS1kN7feY0jRNwGNaDpci1Oz4ScZNJmg2SQkrE%2FTNTCzA5SnQxjgE%2B4Hgech2HxVWlY00jyaTpPdsebuLX3Lu4skA%2BPXkKoQvnlpzsXtNelJ1V25pWaNBNJNRZgZOmXhrNQT%2BYf%2B01q1%2BcrWai3l0vgtfFI7hH8kU1Ew%2FFCzbXYUoHsxSBIfAK7yynHhYPloYd3fqFUyXptuGchwng%2BcGUjuhKFi9UegaKyqq0CpAKgMk8b4dV4bpFSRuhzTTnEiM1x9%2FnCmNxDdzQCjXztSTryxVunOHQ%2BLVDvGFpff1UN6tAsdUFxGpB%2FFCHO8FqH%2BUkTqbQz3p%2BYTwpevNKsI89qJDjiNwGVal7F2qygiIvZ%2F7krM2U8%2BwnR%2B7SOq%2FVa6iODqT%2FQvXzMZhEEgCA44hjh%2Fdy52lUOvh0BAXOOsw%2BhexAvfRhxQ9mE2jBF3umHjz0WTjHidARdof%2FQS0wKxo2LDN7E9uzjcZNswOyXTHuiSukAfo7N7lDv1%2FnJ%2BhWZCVhepmLFMpUZy%2Fo2ya66XLC28AOE3sRa3h7BHRLCvM%2BfNBMWU9rAjyHE3g7KtXJxMPXhisoGOqUB%2FTLuZ2TSgV9%2BCfESHWNPVy%2BeXdJqc%2F%2FOnw%2FzEF9%2Bl0VK14fZ1bqQ7111uiMuqyVe5iEM27sJOcI4jRq7gHFHX5riws38wf1F4%2B1baVV6Mr8xnrXEXa8dlRj9PZFvidhh13J4%2FWPeOgeHvOaF3l736vPu2Gv9TYT%2BU3ceSim%2BqM3ELh2QGC61bBtNGYeANqdQTd95U%2F06ZkCTtqzJvocZHTAtUJke&X-Amz-Signature=090f54998ffcf3abf7ad5cc5c743d9fbdcb3015f5ea4d78f090b83bdd3ad34ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
