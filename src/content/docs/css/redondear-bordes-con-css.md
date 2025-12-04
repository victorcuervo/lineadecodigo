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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LND4RUT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDu5%2FS%2B3cmX5qo5pYu5mkzZnIHZc7JY07ETmlP92iS4gQIhAK07N6X6D5K86h9uqoc%2BoHgdKLlSPHKlqi889SyhKzr%2FKv8DCEUQABoMNjM3NDIzMTgzODA1IgzPnzwxgT3u6oBzpPUq3AO%2F7aWo1SEv6SnwHfPYzmniGv8WIC4tqtrzgQHbX45Hv8rb%2BiILRfpwd1yadrF72Rtg2oy1IAcSovbFl2zrf8V5hjimvU1CF1E%2BwOJeKuNHTWWNXcH%2Bqft%2FfEyMudEjxk0vjKHX%2B4yF7xwLImLzzU8CDUwPsEqj1I4obC4toQ%2By1%2FtOYFPOxJ%2FJDq7dHHBbuw3hAv0nTCzX%2Bjasw2Oh5GMXc7SXu2JU%2Bu9bl5iHnPi8rsRPQXqDA3SIRkV46IYI%2Buprdc9uWOlqVsKJLvzICPkQicsUTqTfW10KxIvjHbByt1Ob3RL6DJf5pfBjvGFcl5AbZJv%2Bx7ehayixR5SNY%2BiB%2BTt94z36ofXhkE1a487CD2hiH%2BezVDn651DRJXqeS9oPLj8JPj%2FoWfYcjY7AcS2xXdgJxg3JzyTiglgUUjJNJrVCMkZn%2FfFOYRgAe4M%2BfbzJrgvC0xtekT00kUDzam8KP6JOoL6M6c1yPBiFcidzx2upiyJ5Y5z6XCXRZ887Qwn0JyigDyadY4GwzYYhpH0Ib2Lj2sB%2FHdtvNLZQTZdQ8h6bFe71R%2FB5At07wZcZI%2FGXFy3VsIN7OVyFyP83H4cFr7MCs7%2B5v1r0%2FPNqV17OzqR1zoiPSjZ279DZ0TD25sXJBjqkASQw4c7isovzlCZXQ%2FSLDfiLVAwkzv950yEG52hZQ3EtvcZboRennEvL%2FKbmTQHHDdJL7Hf713%2FRBu7VG48IVLYaB7c%2B91R7tmr9a3HlUPX8WHASHLH6L1y7LOQ7K6n5YaodY6iQoeWdpKuxtwnW7y1Z8Ejuh3VzA3M%2FlRINeZNiW2lBxMy8DTpqsbHfmH0u4J%2F%2FrAChmzVgXouYMpKA8BQgV%2B4D&X-Amz-Signature=7fc0026d4ba264a05def3eb96f34e6078cf94dab8e2f89eea4e368b1da8ab5ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LND4RUT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDu5%2FS%2B3cmX5qo5pYu5mkzZnIHZc7JY07ETmlP92iS4gQIhAK07N6X6D5K86h9uqoc%2BoHgdKLlSPHKlqi889SyhKzr%2FKv8DCEUQABoMNjM3NDIzMTgzODA1IgzPnzwxgT3u6oBzpPUq3AO%2F7aWo1SEv6SnwHfPYzmniGv8WIC4tqtrzgQHbX45Hv8rb%2BiILRfpwd1yadrF72Rtg2oy1IAcSovbFl2zrf8V5hjimvU1CF1E%2BwOJeKuNHTWWNXcH%2Bqft%2FfEyMudEjxk0vjKHX%2B4yF7xwLImLzzU8CDUwPsEqj1I4obC4toQ%2By1%2FtOYFPOxJ%2FJDq7dHHBbuw3hAv0nTCzX%2Bjasw2Oh5GMXc7SXu2JU%2Bu9bl5iHnPi8rsRPQXqDA3SIRkV46IYI%2Buprdc9uWOlqVsKJLvzICPkQicsUTqTfW10KxIvjHbByt1Ob3RL6DJf5pfBjvGFcl5AbZJv%2Bx7ehayixR5SNY%2BiB%2BTt94z36ofXhkE1a487CD2hiH%2BezVDn651DRJXqeS9oPLj8JPj%2FoWfYcjY7AcS2xXdgJxg3JzyTiglgUUjJNJrVCMkZn%2FfFOYRgAe4M%2BfbzJrgvC0xtekT00kUDzam8KP6JOoL6M6c1yPBiFcidzx2upiyJ5Y5z6XCXRZ887Qwn0JyigDyadY4GwzYYhpH0Ib2Lj2sB%2FHdtvNLZQTZdQ8h6bFe71R%2FB5At07wZcZI%2FGXFy3VsIN7OVyFyP83H4cFr7MCs7%2B5v1r0%2FPNqV17OzqR1zoiPSjZ279DZ0TD25sXJBjqkASQw4c7isovzlCZXQ%2FSLDfiLVAwkzv950yEG52hZQ3EtvcZboRennEvL%2FKbmTQHHDdJL7Hf713%2FRBu7VG48IVLYaB7c%2B91R7tmr9a3HlUPX8WHASHLH6L1y7LOQ7K6n5YaodY6iQoeWdpKuxtwnW7y1Z8Ejuh3VzA3M%2FlRINeZNiW2lBxMy8DTpqsbHfmH0u4J%2F%2FrAChmzVgXouYMpKA8BQgV%2B4D&X-Amz-Signature=fd351bc75d45dc01bb615850ef7cdc3d4b78dce28e430b5884d811b9faaa7304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
