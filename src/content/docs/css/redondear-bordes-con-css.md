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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYMRPH7I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmck0owQv%2Fl9YyedzdqLz3rVByndA%2FZHccOve2sJuMTAIhAM%2F6AHe2ruvmWefkbZrPmqm3Ps9sFBue9CxFaz7uRr2YKv8DCGAQABoMNjM3NDIzMTgzODA1Igy2o9cupU9%2FXV4LFjYq3AOktsJnIcRkJt2MEtXGhsUtwUjpRccjhJAnqXo6JzqAbUqSPPUvOUtOw8bJU2c33DkWD0QfuHtznJV4cmf%2FwRTih2SZND3Lh8QtsHzpOVJWLAViyd1XQVqE0swL4bs3Aw7h9tquJcm4kjZI2YQ%2FeO6Q4%2BalRnxOTZZNS16kHVoKtUfkc5%2F3ZDwvI2JdvO9oJS7o20XdaLjcLclAucsgpAjshGr1w4j9V7q%2Fuq9L%2BjhvcEyNlQ0UMEmt%2BswLKE9fMIbQfM0weYCr1BBF8%2BWbDWWzYnpS4xJ6TzDcQyJ%2BUH5396s8bg5F7QjPsIQvSpVNv7s5UaFdfrGNXC9VTSyQ0EZIyAaOzRJ2hSzuciVfr9Rmhxi8W%2BNSxdGH92PnMjpM%2F%2FpMpud4YZKxJBnYXOJP3yDGfOppT1N0ed0krzNYL9MFAXz3tobbJCEe8VrmWbb8%2B3NrFGRe4Y18n8uoedcJcsVl6XvjdWopkN0d%2Fo%2F8uPD92tY23Os%2Fj0isjvvxTfHbwvWvwhcerKVlMNYLvQpv8eW3BeQ1Pfi%2FY%2FM3NYG6OYRfxsg6VmKsAWU8Ynyu0c3X1eykYveOK2kqMcF6CyWimVSUcDmeBBOvCJ5NvoOkaNPC%2BrLPjyStNxLpge1KGTD%2B6cvJBjqkARF50UTXzrRlkdk2f1itb%2FEKzRaZfgGyE%2FyKeJagVEqHcqV4zWVv543G63ogWuujKaoNM7aGzCtwcvaVE2h%2FtqZJ7IzZDIY9Y5qaj%2FnROjerF%2FPsxVpULi5kh8Lwh8w7xdxJx0sftqXFzq0U185gGF%2BpiGG6Xdzw4NL15cNFvgd%2Fxgs5bpgffeo5vohZENO5ljUZd4BLjUktxqsTGZPiqSWW8gAJ&X-Amz-Signature=1b2456f60bcb905c0b2255e7dd8b14714f3893ae79c9b5ef4c26c2cbae1e1d25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYMRPH7I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmck0owQv%2Fl9YyedzdqLz3rVByndA%2FZHccOve2sJuMTAIhAM%2F6AHe2ruvmWefkbZrPmqm3Ps9sFBue9CxFaz7uRr2YKv8DCGAQABoMNjM3NDIzMTgzODA1Igy2o9cupU9%2FXV4LFjYq3AOktsJnIcRkJt2MEtXGhsUtwUjpRccjhJAnqXo6JzqAbUqSPPUvOUtOw8bJU2c33DkWD0QfuHtznJV4cmf%2FwRTih2SZND3Lh8QtsHzpOVJWLAViyd1XQVqE0swL4bs3Aw7h9tquJcm4kjZI2YQ%2FeO6Q4%2BalRnxOTZZNS16kHVoKtUfkc5%2F3ZDwvI2JdvO9oJS7o20XdaLjcLclAucsgpAjshGr1w4j9V7q%2Fuq9L%2BjhvcEyNlQ0UMEmt%2BswLKE9fMIbQfM0weYCr1BBF8%2BWbDWWzYnpS4xJ6TzDcQyJ%2BUH5396s8bg5F7QjPsIQvSpVNv7s5UaFdfrGNXC9VTSyQ0EZIyAaOzRJ2hSzuciVfr9Rmhxi8W%2BNSxdGH92PnMjpM%2F%2FpMpud4YZKxJBnYXOJP3yDGfOppT1N0ed0krzNYL9MFAXz3tobbJCEe8VrmWbb8%2B3NrFGRe4Y18n8uoedcJcsVl6XvjdWopkN0d%2Fo%2F8uPD92tY23Os%2Fj0isjvvxTfHbwvWvwhcerKVlMNYLvQpv8eW3BeQ1Pfi%2FY%2FM3NYG6OYRfxsg6VmKsAWU8Ynyu0c3X1eykYveOK2kqMcF6CyWimVSUcDmeBBOvCJ5NvoOkaNPC%2BrLPjyStNxLpge1KGTD%2B6cvJBjqkARF50UTXzrRlkdk2f1itb%2FEKzRaZfgGyE%2FyKeJagVEqHcqV4zWVv543G63ogWuujKaoNM7aGzCtwcvaVE2h%2FtqZJ7IzZDIY9Y5qaj%2FnROjerF%2FPsxVpULi5kh8Lwh8w7xdxJx0sftqXFzq0U185gGF%2BpiGG6Xdzw4NL15cNFvgd%2Fxgs5bpgffeo5vohZENO5ljUZd4BLjUktxqsTGZPiqSWW8gAJ&X-Amz-Signature=ef75b9640b8ee8c2a62fe1d8ce985d314fe0a8f4ebb99f968b09ca42639a0b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
