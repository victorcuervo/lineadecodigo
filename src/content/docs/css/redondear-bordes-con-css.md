---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HM3OAG4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDPRjB77GGk3%2FOxAvqQGKIY68Uogz43F69%2FPwE6oACbOAIhAMmRLQsTY44nEv897gz9b%2FMA9bQM7gauDxSrKcmwKfG7Kv8DCEcQABoMNjM3NDIzMTgzODA1Igwln5jua2Z9yCn8NCoq3AN7Unf2o3QTpki09SihHklg29rnnW%2F0q7dgie7GkpZ5hTXpSrIjn1VQH4PqNFEFI5p%2BI2NSAyVYjPoFGW6bPullqlZvxVp9s8lKv6HnoPGn7xkEjluxBEtexGMI5VcaMl20qT2ez4VJPjfWL7gcWlmEqVkJa1h5NiA5gmPY4LMxDRVsb2YEJeY1eZTw%2BaznE7G4%2Fg2OjeXVLaqz09Px%2B242K7JwZVz8jjHDfWO5QeXoBdzs9kGT4GK5q%2FPpiOlM%2FmdtmqX3cFYE4YDra2N9rb83WY5sJ6Iywe8TFgSpsaIxTbR2CbvY7Oj5I3S8y5CEv%2BE%2FeSGyLvcNJ0G8m%2B8tffUb%2FZRUry8uLxKMRLvSVWVT%2FxGFKwpwtbLQIvOxrNVXHVyVPgJu%2FSt1dxGmrSWciZvHtzf%2BPrNlzUtv90BFmXKYtESWzplCxqWDGTbUj9numuzXarnSKk%2BaNMhtiq3Vx4ysR0wEhnw0hv4TDIDCwDwCj1dVXUVJX3%2BQqH5ZcOrFHLngCqoGEss7y%2F2a%2BDG0hHn2jG8Ojg8VofY1dyTTnI2B%2F9aUjYy9CUWLTl58O332bNQkJFjmmGeP3lxsGq9TEUQRehlp%2Fl%2FgQWRFfHxPJ9cqIeLitpFbb8ci059%2BoDDpocbJBjqkAYrL6nzErsyFd11OcURoaoZl8C5donb02XjqRee5cVhlKpAKW8X%2FD04XcOqZox4eAhKOt0o1ipao2HQ5GxTsTMLtXQnbkfi%2F3b1vvdlyDVy24X6FLy0ECrLxqnidKxN7CwMMyV8roJCOgSJ%2FrcDL9DZuShw6TU2ZbF6RNL8iW1mK1vYqy0BCl8yBVwcUQy00TcLnpsNS9qDvsczxalUcmzriqN4%2F&X-Amz-Signature=2a6b508c9b40eeaeb1e750995db8f74feeac8f6884d2b3925883414aa9e7bea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HM3OAG4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDPRjB77GGk3%2FOxAvqQGKIY68Uogz43F69%2FPwE6oACbOAIhAMmRLQsTY44nEv897gz9b%2FMA9bQM7gauDxSrKcmwKfG7Kv8DCEcQABoMNjM3NDIzMTgzODA1Igwln5jua2Z9yCn8NCoq3AN7Unf2o3QTpki09SihHklg29rnnW%2F0q7dgie7GkpZ5hTXpSrIjn1VQH4PqNFEFI5p%2BI2NSAyVYjPoFGW6bPullqlZvxVp9s8lKv6HnoPGn7xkEjluxBEtexGMI5VcaMl20qT2ez4VJPjfWL7gcWlmEqVkJa1h5NiA5gmPY4LMxDRVsb2YEJeY1eZTw%2BaznE7G4%2Fg2OjeXVLaqz09Px%2B242K7JwZVz8jjHDfWO5QeXoBdzs9kGT4GK5q%2FPpiOlM%2FmdtmqX3cFYE4YDra2N9rb83WY5sJ6Iywe8TFgSpsaIxTbR2CbvY7Oj5I3S8y5CEv%2BE%2FeSGyLvcNJ0G8m%2B8tffUb%2FZRUry8uLxKMRLvSVWVT%2FxGFKwpwtbLQIvOxrNVXHVyVPgJu%2FSt1dxGmrSWciZvHtzf%2BPrNlzUtv90BFmXKYtESWzplCxqWDGTbUj9numuzXarnSKk%2BaNMhtiq3Vx4ysR0wEhnw0hv4TDIDCwDwCj1dVXUVJX3%2BQqH5ZcOrFHLngCqoGEss7y%2F2a%2BDG0hHn2jG8Ojg8VofY1dyTTnI2B%2F9aUjYy9CUWLTl58O332bNQkJFjmmGeP3lxsGq9TEUQRehlp%2Fl%2FgQWRFfHxPJ9cqIeLitpFbb8ci059%2BoDDpocbJBjqkAYrL6nzErsyFd11OcURoaoZl8C5donb02XjqRee5cVhlKpAKW8X%2FD04XcOqZox4eAhKOt0o1ipao2HQ5GxTsTMLtXQnbkfi%2F3b1vvdlyDVy24X6FLy0ECrLxqnidKxN7CwMMyV8roJCOgSJ%2FrcDL9DZuShw6TU2ZbF6RNL8iW1mK1vYqy0BCl8yBVwcUQy00TcLnpsNS9qDvsczxalUcmzriqN4%2F&X-Amz-Signature=91318d03340c5469daaec97b3f013cae57be24ae729d0587cb5dd1bfd334a4e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
