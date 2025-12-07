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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAOHQMP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEliIXQwoxwbBLHqU%2FP9lDdlTGSNbMNV6egUivBoOuGsAiAxuf9GMmQD0mm%2FYZSAUl34e1Y2493VkXSYc8FZyqPYICqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeShJMntTjZRXfHhmKtwDBu1AjL8GplXNb4qssGqCkJJ3XwLDbV49u%2BxIxjj%2BMFqdrOMSXvzVL4fDDe0etGwzsGNGealA5YSoU7Ee8FMErbUeoPmJz8xEni5mjeTwikIbJu0B4fH7PseupamosZXIXac0Di5pzyNIVI7yFgdnrN%2Bo600A06I1PIEYEXlYUwYhEXMhwFYwkiV%2BJQPxgHMsI82f1FCjzDRQKQ1muxoB6A%2F4GvkAucQIHX%2FW5o%2Ff%2Bn8i%2BtORyLNLBE9pW9PyDIJAov8yFPTSbsnV1WsDXUcZ1hckaNP9q%2Fx1gweN9rmsTe79B%2B2kebjOgbXQRP7OmqrJ01uU3zWn7QPfL73uPmLMzQD3LFT1EgoqY1PjBxqRzrS8Y3y4gIVq1TfTR1uOk1e%2BLBnvevrulMaBPOKdvYekkKfM8uAcwKLcIyFhouM97fNl5YtawJnnACcqwFv0JZFfL13IWZT7o1MhD%2FlCL07cVZmHJrLhuV8wRM1e4AlevVGxey%2BaicuLkKoZrXtJoohZgLJtuf9y2i5rjs3yIuRrP9AbRrB0fooloaWsHNkx413%2FTd6OUcm48fso9mYob6O9bn0Rs%2Buehmlw3PyIxtLnAUFqRzNSIXsCdrCKwFtGkUMlIMIQkFEAMWIXfYQwk6jXyQY6pgEJEcfP9dN7KLjKNCn2hh6C4FJP6c%2FPh1cKc4c1ltXmZXpzw%2BAoap394aG47Grv7dqD0pawprbVpNKg0%2BTu0IdJzUgNajFfGfoYLfyEpRE6FPJMm3z7u6%2BoHQJ%2FMqKUWBjriUNJWNl%2BQVTfqjVyw9MJBPYFhBB5n8MpWtfW3qHyhOD8htMucGv3mZ0IcllBtGe24YZUxqYrEFruxBQqabKu%2FjAwva7O&X-Amz-Signature=d8b46c8b885252fb0099088d2e34b993fdc9fb37285b030a32b9dbc9b4b04838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAOHQMP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEliIXQwoxwbBLHqU%2FP9lDdlTGSNbMNV6egUivBoOuGsAiAxuf9GMmQD0mm%2FYZSAUl34e1Y2493VkXSYc8FZyqPYICqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeShJMntTjZRXfHhmKtwDBu1AjL8GplXNb4qssGqCkJJ3XwLDbV49u%2BxIxjj%2BMFqdrOMSXvzVL4fDDe0etGwzsGNGealA5YSoU7Ee8FMErbUeoPmJz8xEni5mjeTwikIbJu0B4fH7PseupamosZXIXac0Di5pzyNIVI7yFgdnrN%2Bo600A06I1PIEYEXlYUwYhEXMhwFYwkiV%2BJQPxgHMsI82f1FCjzDRQKQ1muxoB6A%2F4GvkAucQIHX%2FW5o%2Ff%2Bn8i%2BtORyLNLBE9pW9PyDIJAov8yFPTSbsnV1WsDXUcZ1hckaNP9q%2Fx1gweN9rmsTe79B%2B2kebjOgbXQRP7OmqrJ01uU3zWn7QPfL73uPmLMzQD3LFT1EgoqY1PjBxqRzrS8Y3y4gIVq1TfTR1uOk1e%2BLBnvevrulMaBPOKdvYekkKfM8uAcwKLcIyFhouM97fNl5YtawJnnACcqwFv0JZFfL13IWZT7o1MhD%2FlCL07cVZmHJrLhuV8wRM1e4AlevVGxey%2BaicuLkKoZrXtJoohZgLJtuf9y2i5rjs3yIuRrP9AbRrB0fooloaWsHNkx413%2FTd6OUcm48fso9mYob6O9bn0Rs%2Buehmlw3PyIxtLnAUFqRzNSIXsCdrCKwFtGkUMlIMIQkFEAMWIXfYQwk6jXyQY6pgEJEcfP9dN7KLjKNCn2hh6C4FJP6c%2FPh1cKc4c1ltXmZXpzw%2BAoap394aG47Grv7dqD0pawprbVpNKg0%2BTu0IdJzUgNajFfGfoYLfyEpRE6FPJMm3z7u6%2BoHQJ%2FMqKUWBjriUNJWNl%2BQVTfqjVyw9MJBPYFhBB5n8MpWtfW3qHyhOD8htMucGv3mZ0IcllBtGe24YZUxqYrEFruxBQqabKu%2FjAwva7O&X-Amz-Signature=5c0cef8a95085510de1d5b984597a965a2305df3a1e61b7f3b3dd336b913a80f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
