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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVEFNDOK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIhhpWGhyTJ5%2B5BAdMwJ8Ebd%2F0QeOv5wD%2FGzcT%2FeV7ygIhAO7LTYJ%2FEB%2BNlzqsxGWiLHNHUvdaaZq4uqBgUMeQGJZIKv8DCGgQABoMNjM3NDIzMTgzODA1IgxAiSq%2BCZuRhEBXIsgq3ANQsTCJx62TAqTZtVGnJ7lYvkNGLBEdXNbGhWmrHr29WWL2VDGwUGmw0JPPq3G%2FVnz2dSFOuEEzUCkLd1QLk1calYHNYaEIkUGeVZFgY5z4ByxHOu2cbei28aAVVfGxcVjW97XM6JiNTqCrLZgMddHgx%2BBBnc1fgXKn5JJfTuTJQRwU1WIE%2F4h75m8ROn1%2FeDIRA3QY%2BNUACvaQBvYf9BHbVjGZOK83npnCE27wIRfgYlIPOt%2FB1lGyfjVpaPb4vd93lvqnNE66DOh%2BDmgdmh7kSfZjGQIsdKnLlOvAeZgigEe5Gwk0fgTLDh8y1oXKTeWV5AYRshIozlc5jBUX8D3x2pPyl9Jg4a7G7durm2AXg8xKEjWy2Tp7Kinczz2Bj8GsvrELzJcG7wM9225w%2BLAiTNWBGoLBGU2rzwcEE4aL8Nzt8qegq94X87YyWeVdr%2FZm4T8qe7L5umcOjm4iuPaMeFfT5yqexTF0iU1mSm4%2BAB1XgBqmQfzdgjUNxlrdiMrqsEQLi1gLFgXNh9HgLLmylUZPM1bryd2Q4OlKkal1EOPPvD7f9tsK5Oor8C6fpe7ltySVRZuxsLA0f20yjLvAahjOKFsKR5PH9U2j9%2B1jUqBLqvmUB0TL7GehpzC0xs3JBjqkAU2Nb9nhf1MEWcRG7ud4aUTuoi%2FJkpsgAESO4eFPk3XuiDgGIbC6DZkO7l0YyTOgH4gYk2bRygtIhn4U5aw1qZQkqz%2BJSPTgH2HtmnOwfqlgrYR80eYJv56ubOzdvuYinm6HxUqKHWpCBZVSU7%2Bp0D1eJmHfPnmvG9AR2ZVqlcD46sXbeBLxLsX2iu75BsyCcyg7ZecnTTXFe2%2F9ixld7NcIsdwe&X-Amz-Signature=d4a45bd50749c55205df884380432d6fb8584fc1d09d675593c7434707e6c7ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVEFNDOK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIhhpWGhyTJ5%2B5BAdMwJ8Ebd%2F0QeOv5wD%2FGzcT%2FeV7ygIhAO7LTYJ%2FEB%2BNlzqsxGWiLHNHUvdaaZq4uqBgUMeQGJZIKv8DCGgQABoMNjM3NDIzMTgzODA1IgxAiSq%2BCZuRhEBXIsgq3ANQsTCJx62TAqTZtVGnJ7lYvkNGLBEdXNbGhWmrHr29WWL2VDGwUGmw0JPPq3G%2FVnz2dSFOuEEzUCkLd1QLk1calYHNYaEIkUGeVZFgY5z4ByxHOu2cbei28aAVVfGxcVjW97XM6JiNTqCrLZgMddHgx%2BBBnc1fgXKn5JJfTuTJQRwU1WIE%2F4h75m8ROn1%2FeDIRA3QY%2BNUACvaQBvYf9BHbVjGZOK83npnCE27wIRfgYlIPOt%2FB1lGyfjVpaPb4vd93lvqnNE66DOh%2BDmgdmh7kSfZjGQIsdKnLlOvAeZgigEe5Gwk0fgTLDh8y1oXKTeWV5AYRshIozlc5jBUX8D3x2pPyl9Jg4a7G7durm2AXg8xKEjWy2Tp7Kinczz2Bj8GsvrELzJcG7wM9225w%2BLAiTNWBGoLBGU2rzwcEE4aL8Nzt8qegq94X87YyWeVdr%2FZm4T8qe7L5umcOjm4iuPaMeFfT5yqexTF0iU1mSm4%2BAB1XgBqmQfzdgjUNxlrdiMrqsEQLi1gLFgXNh9HgLLmylUZPM1bryd2Q4OlKkal1EOPPvD7f9tsK5Oor8C6fpe7ltySVRZuxsLA0f20yjLvAahjOKFsKR5PH9U2j9%2B1jUqBLqvmUB0TL7GehpzC0xs3JBjqkAU2Nb9nhf1MEWcRG7ud4aUTuoi%2FJkpsgAESO4eFPk3XuiDgGIbC6DZkO7l0YyTOgH4gYk2bRygtIhn4U5aw1qZQkqz%2BJSPTgH2HtmnOwfqlgrYR80eYJv56ubOzdvuYinm6HxUqKHWpCBZVSU7%2Bp0D1eJmHfPnmvG9AR2ZVqlcD46sXbeBLxLsX2iu75BsyCcyg7ZecnTTXFe2%2F9ixld7NcIsdwe&X-Amz-Signature=e1364f6d8dd183f9f7ed88f6b80f13becc954edea34679d0a35ada632a3429bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
