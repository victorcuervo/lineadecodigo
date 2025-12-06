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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OWUL5UN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcwfbK2vV2sz%2FBfHBdOG5jvlE15EYvE%2BAilrjdV9ePRAiEA0%2F50HuMBJG4hue7Tx8FKlq1wfBiSboydaSCYPxx084Iq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEXvl8KrZJDc7buWUSrcA64u1BtgFVnZQgt8XjqNJF9mi3oyX9%2BDjuVn0ocHXI8t%2BaZ19BaFZ3%2FczLkx4xcpuyynQwSzfhMI3vhWf96Dashc8XVrc%2BlwKKdIki9TTS4To5oF32a9Y%2Fa4%2F7L6rr4p7%2BIC6PDfED%2BfYKpS5Ljg3BZRbfgrwxM4xpG2%2Fc3xgrpDhrwRxYOrBCrWWBNUlKFOjxozFdbP3swxEr9mfA5bu1v6DpVM3rOn2WnM65fpRpO7mVZzePM%2Be2HU%2Ftl1a3xJHFNSS7fVcf65jThzXOt6blbckC4WVkWmrKlifHQrhM2aFXRvd3TzFLXwRlMD0f34e%2FoNRLmGgryO72Ef3Vrv5QvxR%2FDRQ0xO7qtUobgPVtOkSkfzZTYAgaYAhAQkMjCoZOj9vG%2Bm9refSnN8YpjpAZ3Uml3jKexoARcJjAmCbrxnJE03aRh2XD22tnxaddsHvtT3CK63FlE8jxOfo11KRpwaX1OwIWxygK93HSBZepULfTOe7g3uqoJdqd79pNp1%2BQZ4njFeo92yY9fXj2gW%2FCWc54EuArBEXI%2Bt%2BXuwPVudCZLBNHrKQoRSzvEoGf98mNd7Wfkj6EZAgPGyIiHiWLUr%2FangpPYBtewX12zkaB9MkNeygUR%2B%2B0HDeMR8MNPG0ckGOqUB%2FNRXv%2FfPlziiaVLJw0MsB5f%2BZtSkkjCl5VpXDgNS7xOqwCbF94bLKq6K5nDUxZSLp49jyDyd5q1JsHoG%2F0HVvIvGJvVN%2B9uDuxCr%2B06bBNVVLmYcDJS3MRHLEjsIwM7K7hKoodm7kN91HdBYXqBeeCV9Z6lTwiy%2BLC0zmDcw07oSy%2F3lKAbwPjbTTQYzODId7tznn7u1LFOOaFiWOcVn%2BZ%2Bhtb6D&X-Amz-Signature=f70e8293e000c5f51fcc9110de6ebc30df0036ba61fdd925ff188ee950050462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OWUL5UN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcwfbK2vV2sz%2FBfHBdOG5jvlE15EYvE%2BAilrjdV9ePRAiEA0%2F50HuMBJG4hue7Tx8FKlq1wfBiSboydaSCYPxx084Iq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEXvl8KrZJDc7buWUSrcA64u1BtgFVnZQgt8XjqNJF9mi3oyX9%2BDjuVn0ocHXI8t%2BaZ19BaFZ3%2FczLkx4xcpuyynQwSzfhMI3vhWf96Dashc8XVrc%2BlwKKdIki9TTS4To5oF32a9Y%2Fa4%2F7L6rr4p7%2BIC6PDfED%2BfYKpS5Ljg3BZRbfgrwxM4xpG2%2Fc3xgrpDhrwRxYOrBCrWWBNUlKFOjxozFdbP3swxEr9mfA5bu1v6DpVM3rOn2WnM65fpRpO7mVZzePM%2Be2HU%2Ftl1a3xJHFNSS7fVcf65jThzXOt6blbckC4WVkWmrKlifHQrhM2aFXRvd3TzFLXwRlMD0f34e%2FoNRLmGgryO72Ef3Vrv5QvxR%2FDRQ0xO7qtUobgPVtOkSkfzZTYAgaYAhAQkMjCoZOj9vG%2Bm9refSnN8YpjpAZ3Uml3jKexoARcJjAmCbrxnJE03aRh2XD22tnxaddsHvtT3CK63FlE8jxOfo11KRpwaX1OwIWxygK93HSBZepULfTOe7g3uqoJdqd79pNp1%2BQZ4njFeo92yY9fXj2gW%2FCWc54EuArBEXI%2Bt%2BXuwPVudCZLBNHrKQoRSzvEoGf98mNd7Wfkj6EZAgPGyIiHiWLUr%2FangpPYBtewX12zkaB9MkNeygUR%2B%2B0HDeMR8MNPG0ckGOqUB%2FNRXv%2FfPlziiaVLJw0MsB5f%2BZtSkkjCl5VpXDgNS7xOqwCbF94bLKq6K5nDUxZSLp49jyDyd5q1JsHoG%2F0HVvIvGJvVN%2B9uDuxCr%2B06bBNVVLmYcDJS3MRHLEjsIwM7K7hKoodm7kN91HdBYXqBeeCV9Z6lTwiy%2BLC0zmDcw07oSy%2F3lKAbwPjbTTQYzODId7tznn7u1LFOOaFiWOcVn%2BZ%2Bhtb6D&X-Amz-Signature=0a954a68be1e934eb8ec8249334ef697213c54e94446b596e1b4c9dd32fb4603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
