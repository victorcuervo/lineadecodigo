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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QP7PRTY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T061718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnmYB7FjOL4TML%2Bsudn2KrAG4O3VcDEkL77MLKqOoVjQIgOkYh7k3RgKQmbp4Ea67lQyfgrGM9RelCK1yr%2BwPWHEUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBRUg4s45spqJbQvCSrcAwo%2F8PfsIWxBE0dUJN3PoawUEeL1GibPt6V8Y5sU8ERNnCvBQ9ht4GZFkQzHCwFDieP87%2Fm9dzuELlNp%2BtnnSKc%2BjEe7H5bw%2FW1wxtaKOPYGrKKbHxZA9Kv9UNwGnY278IWUZUfgDF1TLCidazX0TG79aI1fToQihLf%2FhREDX8OJ3BKuuzlvPqjUWlkbLLvdHer%2BpfhUAAgfO7%2B1q7xSQHJdffXM2E1YR4oVTgcjReNDUnFeWzQIoEYeEcKEjy6RMAzCeVzS49lrA55DqQzvKHehgqual3Q3JaMoYFBM24AhF0cxvszvGc6L%2BT%2BwYAZyF%2Fgc0cZzBdp%2F7Aond%2BQDUCwsooOg9XNsUYtGJBtu6P47Q1wQzHvu45HXBTkGpAvW%2BS%2BZIJqUdWuDYoA4%2B3G5%2BITJFjnV0yNzqlPLIBt4qVVqXkl9Dlud5%2FzvT8Zsh5o%2F29%2BaviXHOjpC4E64Q9dSwdiFBdwKgyFJlp2HnMmA67prtHIjj%2F2cFxFgVGmSpWeITDGxftRyBFez116EQULDxeU4j27%2Bxqehk8qOi2jnGbbipGpoVktht1JchUERO1PWiKSQewvKpPvDscdmGm6YF%2Bp3Zve4FtaSDKNYEaITY6CnN%2BDnSLWcxCHwBU1IMMiqyckGOqUBrlBxcyKa0Svqh%2Fhi81eJ%2FopH1dv7V21wsUPItPMo1UHQGcFQ2Q5%2F70bQzCQhC3eW1jcekGYJTOOC4dgEMwxljb8Tz0OySzwhSRd4oOf7DuS9uS%2F4krt1r8KWYU3hsOhRQQSdeYb8KCjBVpImjAV2tJFYbKd7nX1D%2F%2BglytftRyIjdf2sH53jRjIob8XjOss%2FJUNmgxQjDhCKo1IcCfgFfi47iZe%2F&X-Amz-Signature=1a8d077a79e1ab657b3779a0def6a0f5dfb99c8f4596ba4d92610a3483a7812e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QP7PRTY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T061718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnmYB7FjOL4TML%2Bsudn2KrAG4O3VcDEkL77MLKqOoVjQIgOkYh7k3RgKQmbp4Ea67lQyfgrGM9RelCK1yr%2BwPWHEUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBRUg4s45spqJbQvCSrcAwo%2F8PfsIWxBE0dUJN3PoawUEeL1GibPt6V8Y5sU8ERNnCvBQ9ht4GZFkQzHCwFDieP87%2Fm9dzuELlNp%2BtnnSKc%2BjEe7H5bw%2FW1wxtaKOPYGrKKbHxZA9Kv9UNwGnY278IWUZUfgDF1TLCidazX0TG79aI1fToQihLf%2FhREDX8OJ3BKuuzlvPqjUWlkbLLvdHer%2BpfhUAAgfO7%2B1q7xSQHJdffXM2E1YR4oVTgcjReNDUnFeWzQIoEYeEcKEjy6RMAzCeVzS49lrA55DqQzvKHehgqual3Q3JaMoYFBM24AhF0cxvszvGc6L%2BT%2BwYAZyF%2Fgc0cZzBdp%2F7Aond%2BQDUCwsooOg9XNsUYtGJBtu6P47Q1wQzHvu45HXBTkGpAvW%2BS%2BZIJqUdWuDYoA4%2B3G5%2BITJFjnV0yNzqlPLIBt4qVVqXkl9Dlud5%2FzvT8Zsh5o%2F29%2BaviXHOjpC4E64Q9dSwdiFBdwKgyFJlp2HnMmA67prtHIjj%2F2cFxFgVGmSpWeITDGxftRyBFez116EQULDxeU4j27%2Bxqehk8qOi2jnGbbipGpoVktht1JchUERO1PWiKSQewvKpPvDscdmGm6YF%2Bp3Zve4FtaSDKNYEaITY6CnN%2BDnSLWcxCHwBU1IMMiqyckGOqUBrlBxcyKa0Svqh%2Fhi81eJ%2FopH1dv7V21wsUPItPMo1UHQGcFQ2Q5%2F70bQzCQhC3eW1jcekGYJTOOC4dgEMwxljb8Tz0OySzwhSRd4oOf7DuS9uS%2F4krt1r8KWYU3hsOhRQQSdeYb8KCjBVpImjAV2tJFYbKd7nX1D%2F%2BglytftRyIjdf2sH53jRjIob8XjOss%2FJUNmgxQjDhCKo1IcCfgFfi47iZe%2F&X-Amz-Signature=389781c6941695e298073de94ab88075b8dec62e46925cca1f85597aee362a36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
