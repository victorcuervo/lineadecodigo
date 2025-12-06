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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H6B6STZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEgZweJNWdsLrZ66ukNMD0nJmxMw1ZJaU6eulK5QI11gIgdKEJhU5lE67wCR2Vbu3JrVld977rdoVLOrhtjhxMNUsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDC8a0Ba4GEmy3TTTfyrcA7a6d0mG1SdI8Fn7fS72aLpHZcAJprFUJ2vPlPbazbKcG5W9yNvSCUgZW4RomMkLrxgxYyNgWm6yaQJLMhKhydfT95zsoIBfVsa0WkujSuUhptdNbuIPexdgvHZ8USRX4fCa8ZJzNCub8Y9e74MYRc0l%2FBw5m4mM7FzuJOzEd35FT3F5U3wK5B2L%2F0d%2FaIb6xnNEvQAwOytB1ym3oOpj26C681UUgIm1uebIZMvUJKbQfxBnZfpNzTTfPsB3vstO8Ggl6rG7SPOqR06Ej4qmbISRKsU6jB9AD%2F7uK%2FjFQM4e0v8QqRU9vjWEVjesPG3IOChu92XRXVDBty9tyNYZpRU5%2Fbrqf613J73NvgYeW0M87z0QweyEbX95j%2BpFjaxdf6NELqlXhXfcWr%2BzV8N%2B%2BksB3jOkR6TXklA154ynTLgDr%2FbB463bZr4E66rJKHVOeCr95TPDh3ZqXchzPgUzjkTPUSYwVXPmQ72LHlfNSCnEh08M4AWAQfqdpCIH6bGRZM7OQ6pbrq9Ja2smO14QBSsZ0LcdD1C1gRjjMh34I%2Bn%2FsXKeRAnB8%2FQlUlybtNfjghZy9RWVGJ2wpmaChgfI%2Bl6EG1X301vD2TZdsJzsTCNSkFC2hKgLHzzKW8ruMOKm0MkGOqUBEzoZ%2FZC8fSsPUfc4TC0f38zk8WEUbda7qLhv0PL8e2PyujEKbwSj9RkYT145zZmO4zYYFco7u4S6BiiWZFB2c%2Fi7mSSieEu7hOHwMfncTgJct3jnhc4iADQzhosOpEUBrZsNsRbJf5Bm4CRoP9mmycqx6wRlH7hI0OMsJKhS6KvmZV7lS0auiVpXpBHVU3jpsMCxkim9YgehjWrjYt8zhdZ9hZVG&X-Amz-Signature=1083dabe5d6bfe82611de1190776f0e5e39cbaad25ec8a6c7114c1ba538f05e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H6B6STZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEgZweJNWdsLrZ66ukNMD0nJmxMw1ZJaU6eulK5QI11gIgdKEJhU5lE67wCR2Vbu3JrVld977rdoVLOrhtjhxMNUsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDC8a0Ba4GEmy3TTTfyrcA7a6d0mG1SdI8Fn7fS72aLpHZcAJprFUJ2vPlPbazbKcG5W9yNvSCUgZW4RomMkLrxgxYyNgWm6yaQJLMhKhydfT95zsoIBfVsa0WkujSuUhptdNbuIPexdgvHZ8USRX4fCa8ZJzNCub8Y9e74MYRc0l%2FBw5m4mM7FzuJOzEd35FT3F5U3wK5B2L%2F0d%2FaIb6xnNEvQAwOytB1ym3oOpj26C681UUgIm1uebIZMvUJKbQfxBnZfpNzTTfPsB3vstO8Ggl6rG7SPOqR06Ej4qmbISRKsU6jB9AD%2F7uK%2FjFQM4e0v8QqRU9vjWEVjesPG3IOChu92XRXVDBty9tyNYZpRU5%2Fbrqf613J73NvgYeW0M87z0QweyEbX95j%2BpFjaxdf6NELqlXhXfcWr%2BzV8N%2B%2BksB3jOkR6TXklA154ynTLgDr%2FbB463bZr4E66rJKHVOeCr95TPDh3ZqXchzPgUzjkTPUSYwVXPmQ72LHlfNSCnEh08M4AWAQfqdpCIH6bGRZM7OQ6pbrq9Ja2smO14QBSsZ0LcdD1C1gRjjMh34I%2Bn%2FsXKeRAnB8%2FQlUlybtNfjghZy9RWVGJ2wpmaChgfI%2Bl6EG1X301vD2TZdsJzsTCNSkFC2hKgLHzzKW8ruMOKm0MkGOqUBEzoZ%2FZC8fSsPUfc4TC0f38zk8WEUbda7qLhv0PL8e2PyujEKbwSj9RkYT145zZmO4zYYFco7u4S6BiiWZFB2c%2Fi7mSSieEu7hOHwMfncTgJct3jnhc4iADQzhosOpEUBrZsNsRbJf5Bm4CRoP9mmycqx6wRlH7hI0OMsJKhS6KvmZV7lS0auiVpXpBHVU3jpsMCxkim9YgehjWrjYt8zhdZ9hZVG&X-Amz-Signature=0b21f200501e8d5d630d5f2d2684b4cbe38a9f3f300c202bed4496bebb6e332b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
