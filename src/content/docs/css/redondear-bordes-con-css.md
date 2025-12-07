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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU4NSC2D%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXEtyC0SZMDOCb6JWyl4r5zJwC75YjHpSCmk3GlvqpVgIhAL%2FoetSPAp4Ct9ILPOmOEwhq0Dos4upv9tpoYcTGivLgKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZhJXjQO%2Fb0P2jcTAq3APJy8s3hQoSfh7NHutRTaUbz3G4Vtx3yzLh7lI6Shp5MRRHxZJwOROrSDSmmfNn%2FA8fBPXo4o2FF0DjEro8PA0GBeZdcrgnZuRAoYWcCFGGE7DhvNKgbiHxjDyZS2NN64TtsC87QJl0ecqUaZJ%2BKXPsx8UHZ4%2FdnhzC4si3Byx%2FJfVrT4vpHKPY3yYgzKA0KtVxwQVTi12Ij7Kmrqo8tgXkKXvKKW66bUq85%2FUWq5%2Fm6pYjholv%2FZ5tC922DSUAWVPGSTBkCPdK8H67clijG8NZ9gwbav%2FW62dRAHUGMD6fNOJHszfqpNCFCcEx7%2BEXxVznCCcTxnkWa9zRe0to1RenL4xV3fsgaMoxFhePhmMRnkPnpi6yjPiLsp4%2FiaGheFPlOuZ7R7JyhMuXKgg8qni36M6HDhgig8w5a7unVU%2FZyd0HUmWZRO5zicVL1DP%2FyW7Y%2FYexxgYx8N%2FwlywIgLvKMUlhuySaHgcWFWoGMCM0tLXEaUKfGtR8pNjIYbSzAEsQJULRdJ%2BcuVVRLmxg%2B3%2FHsJGLRmfNnf3LCij9KCqlJ3ZzKYGB5A3ryu%2BxHf9Re%2BLaPRoifNZZd%2BD3jq6NY5NtJDK1UUXRl84AoACXr6Tz4Ou8CKT7KsOL55Mw7zDwvtbJBjqkARTEb0vuvfwYrJ%2F7OZvamYv9EDHkC3avpcVJzYnXXzClmwk2zUsfoQx4NhwsHujX7xEzWJrsEBagjeOVFoLGXSIX9SGyj5quYKJ8AJPW%2F00XfK5fcdj4%2FnY9uStQsrVocghzUj56munq2WeP3uALQUwSCkQ5dQPuIEjBOqv4oDQ05xaUYHFs66J1jJ2BAe3Cs8JIxltVNRYcdlol4TeNFxcPn9qo&X-Amz-Signature=5c90c96b3aedd1625124685516168d152cde60aaea8c4cc33ef860188a15ae11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU4NSC2D%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXEtyC0SZMDOCb6JWyl4r5zJwC75YjHpSCmk3GlvqpVgIhAL%2FoetSPAp4Ct9ILPOmOEwhq0Dos4upv9tpoYcTGivLgKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZhJXjQO%2Fb0P2jcTAq3APJy8s3hQoSfh7NHutRTaUbz3G4Vtx3yzLh7lI6Shp5MRRHxZJwOROrSDSmmfNn%2FA8fBPXo4o2FF0DjEro8PA0GBeZdcrgnZuRAoYWcCFGGE7DhvNKgbiHxjDyZS2NN64TtsC87QJl0ecqUaZJ%2BKXPsx8UHZ4%2FdnhzC4si3Byx%2FJfVrT4vpHKPY3yYgzKA0KtVxwQVTi12Ij7Kmrqo8tgXkKXvKKW66bUq85%2FUWq5%2Fm6pYjholv%2FZ5tC922DSUAWVPGSTBkCPdK8H67clijG8NZ9gwbav%2FW62dRAHUGMD6fNOJHszfqpNCFCcEx7%2BEXxVznCCcTxnkWa9zRe0to1RenL4xV3fsgaMoxFhePhmMRnkPnpi6yjPiLsp4%2FiaGheFPlOuZ7R7JyhMuXKgg8qni36M6HDhgig8w5a7unVU%2FZyd0HUmWZRO5zicVL1DP%2FyW7Y%2FYexxgYx8N%2FwlywIgLvKMUlhuySaHgcWFWoGMCM0tLXEaUKfGtR8pNjIYbSzAEsQJULRdJ%2BcuVVRLmxg%2B3%2FHsJGLRmfNnf3LCij9KCqlJ3ZzKYGB5A3ryu%2BxHf9Re%2BLaPRoifNZZd%2BD3jq6NY5NtJDK1UUXRl84AoACXr6Tz4Ou8CKT7KsOL55Mw7zDwvtbJBjqkARTEb0vuvfwYrJ%2F7OZvamYv9EDHkC3avpcVJzYnXXzClmwk2zUsfoQx4NhwsHujX7xEzWJrsEBagjeOVFoLGXSIX9SGyj5quYKJ8AJPW%2F00XfK5fcdj4%2FnY9uStQsrVocghzUj56munq2WeP3uALQUwSCkQ5dQPuIEjBOqv4oDQ05xaUYHFs66J1jJ2BAe3Cs8JIxltVNRYcdlol4TeNFxcPn9qo&X-Amz-Signature=6c31967e0908951908dcd0d06632cf2808b0bb3b40785d9bf8153c0ba29e05ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
