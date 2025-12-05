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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7TGEWBD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmPq%2BNA2KA%2BjdeHwaRF86DVQsMQK732%2FjmSapkO6TviAiAPU2XU18s9x6kkTfbxwC%2FPYfDYAwfv3TrL4xQndTkZISr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMTkkyX7ksNIxSQW%2FOKtwDLqLpd7EM3qpRaXJ6SPdf92RGkpr1kAZ8qehWh%2FOWwyxDZTVH14Dgz3fQbQlL3VhcWJ8mn5xMVKwI6IOck4AnK%2Fc8zfvh8YyilNDeGGHA%2F77aRykaOZnsOPGei%2B4IeS%2BzwufUCwRzQ4NS4FaUL0QYQnXVdy4j%2FoEOaG3z8gqBZJ%2F7fKAoTLA8WtERvHcR8QJT9NzQ57fvuFrHJrCn7TUAvXX5J0%2BQydXNjlUUxt5Q5nRbcsuYT3j0Xsd%2B9E2Hg%2FVMhoN98t8KZKzDIaivaMgGZz50J4qy3HtOP%2BcJR8kV0UMlQuvpJC8nWCBIicPDXtnk%2B5MiBbtBjplbOqiS29h%2BKK8YpF2h4Bpo63IY09nJbPh%2FSfwxnBiPtR%2FVpbVxIBZcuDLXBXFpipZiYMNjp6aNcKwWn6ZnH40khCXuCjedMCDcHf4pQu3xA9GDs4UYOVskX1DkzPwgJM%2B4Tj4CufNBAlBo92v%2BN9l5WhnwYfiSqbgyA7VMw5HdyDo%2BeWrc08SJJSBlHdcuFowonUnVBLLawktnWDulR6Alfjfxzbb2S0cMR7PnKRAcK7FG7LGfptZNuJF8%2BAVaElg6ILQ0HgiUYHVpe%2Bqifix3E5IIpTEnGEyD0Wnnp3gnWlku894ws6jKyQY6pgEQyZsKfM4QKlDERzTZ30Mt2h5xEiZ2Bkz5I87Rrg7L%2B3qzHUhYEHf0AEeZfY3vtDs6xoFYO9r7vH5DopyPl4ldtd9llZvrzN7lp%2BHCAl6nnK2jmVANVvwl6WVoKkIJ6r3Bgz7maOfqw%2FrYTW8rdJLx7LD2HGKfmnJBdIbv60XgEP3Fvy24zhUEsJ2n9V7XPJiKzdZgdW5llzqkF0bjUeJhaKCo5MFW&X-Amz-Signature=237a4f8cfa1c0b1ca57d33ed1ef2c2ef7799870f90fecccf52f034e9f6fc01a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7TGEWBD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmPq%2BNA2KA%2BjdeHwaRF86DVQsMQK732%2FjmSapkO6TviAiAPU2XU18s9x6kkTfbxwC%2FPYfDYAwfv3TrL4xQndTkZISr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMTkkyX7ksNIxSQW%2FOKtwDLqLpd7EM3qpRaXJ6SPdf92RGkpr1kAZ8qehWh%2FOWwyxDZTVH14Dgz3fQbQlL3VhcWJ8mn5xMVKwI6IOck4AnK%2Fc8zfvh8YyilNDeGGHA%2F77aRykaOZnsOPGei%2B4IeS%2BzwufUCwRzQ4NS4FaUL0QYQnXVdy4j%2FoEOaG3z8gqBZJ%2F7fKAoTLA8WtERvHcR8QJT9NzQ57fvuFrHJrCn7TUAvXX5J0%2BQydXNjlUUxt5Q5nRbcsuYT3j0Xsd%2B9E2Hg%2FVMhoN98t8KZKzDIaivaMgGZz50J4qy3HtOP%2BcJR8kV0UMlQuvpJC8nWCBIicPDXtnk%2B5MiBbtBjplbOqiS29h%2BKK8YpF2h4Bpo63IY09nJbPh%2FSfwxnBiPtR%2FVpbVxIBZcuDLXBXFpipZiYMNjp6aNcKwWn6ZnH40khCXuCjedMCDcHf4pQu3xA9GDs4UYOVskX1DkzPwgJM%2B4Tj4CufNBAlBo92v%2BN9l5WhnwYfiSqbgyA7VMw5HdyDo%2BeWrc08SJJSBlHdcuFowonUnVBLLawktnWDulR6Alfjfxzbb2S0cMR7PnKRAcK7FG7LGfptZNuJF8%2BAVaElg6ILQ0HgiUYHVpe%2Bqifix3E5IIpTEnGEyD0Wnnp3gnWlku894ws6jKyQY6pgEQyZsKfM4QKlDERzTZ30Mt2h5xEiZ2Bkz5I87Rrg7L%2B3qzHUhYEHf0AEeZfY3vtDs6xoFYO9r7vH5DopyPl4ldtd9llZvrzN7lp%2BHCAl6nnK2jmVANVvwl6WVoKkIJ6r3Bgz7maOfqw%2FrYTW8rdJLx7LD2HGKfmnJBdIbv60XgEP3Fvy24zhUEsJ2n9V7XPJiKzdZgdW5llzqkF0bjUeJhaKCo5MFW&X-Amz-Signature=a65e89ac8bc9ea77d931d27ffafa1be8fbe3da0b1d2797cdecdaeb8741836be6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
