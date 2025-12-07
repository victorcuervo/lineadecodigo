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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHKDHB2B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi5OzM3Wiv8JF5yoCQV7H78%2BdtDsOI9q5DdB9SNrUsLAIgO6lUZHsNw3o6GRdSuTxIBuZ2OOY8pd1eOOQ3Y5TkFdUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1dA7tSzXHSCViGuSrcA9xUaDY1bqoVVyFgAGqpHsRGb0PQlNU7RhVwkDshY9vnlL34jXwUbF%2BeZ2pKEGQyyoEVdNp7EADOacsQeYptRztbvsERn77zODfO%2Fv%2FLoWmuqhd0CX%2FkGURk%2BfBMd3vcKvcnuXWQtOzSsTONKj1hiys%2F63YFrEyawVKjvGtxxNJ%2F9JJgyG2pCAskhr3K3%2F4oTZgC9RKXeuTiobTAuKXxWOBpeUm8v%2BFBmp1lnfqnXrmOUG1RzfBCtgYARz9tsYV1s1FecLkybu2%2Ftc3D9jfYI7zVMcyJWyoReXyd0WeHTkt0aGyXxSg15XBDo%2FvbSWYjL8XhuKfGTLUv1JFA0K%2BJYW0LCE8uARk9B%2FX4GcUfEcDytowJ1%2BVTvi8mgFBBmSMYl3Y9TQfZ%2FnE9sbPsdFuWbdizzV38j9%2FBlrkOpriQxE6NKCupA9FuZRVKWEnllGBdoJz1NDkWfGJpo5iDjkVxeHunwyqF3nvCMOLutGihjQnIcdx7XIV4794E1cS1zamGmbU0f1PU3qKgzzNx6WLQi286wEFP33NHjwDh7YGZoX86PK%2F22PGiUJ3unUySQ6mrSSeASvkFgXGxLyjTsfN184OzA0noVzy4KzOSTaEC99FJb77vE4X%2Fi73VjCzEMK2Z1ckGOqUB5QeqN1jZgPtbJ923ypFEniQbHMszMQNBL3AM7mY1fGpJYooiczK8DUjMz1dKR49VngoXEdbVzu7SZLhbxFaHtVORfkOHeQM1EV7qNcLIy09RhWU8cLT2mJ4fD6CfYrxDIowoyk5rJ38k9l%2By3yPRexV2Jjpz8tzB0lgoqTVI%2FXWPlcYAegM8Wb%2FVPhtV8F0kS%2FxWn6aG9FJwM%2BUIzxawB0Q1sRj3&X-Amz-Signature=536bd4bc1936ab570aa3badac99818b9789d0cc869f35080ceca522b264dcf31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHKDHB2B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi5OzM3Wiv8JF5yoCQV7H78%2BdtDsOI9q5DdB9SNrUsLAIgO6lUZHsNw3o6GRdSuTxIBuZ2OOY8pd1eOOQ3Y5TkFdUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1dA7tSzXHSCViGuSrcA9xUaDY1bqoVVyFgAGqpHsRGb0PQlNU7RhVwkDshY9vnlL34jXwUbF%2BeZ2pKEGQyyoEVdNp7EADOacsQeYptRztbvsERn77zODfO%2Fv%2FLoWmuqhd0CX%2FkGURk%2BfBMd3vcKvcnuXWQtOzSsTONKj1hiys%2F63YFrEyawVKjvGtxxNJ%2F9JJgyG2pCAskhr3K3%2F4oTZgC9RKXeuTiobTAuKXxWOBpeUm8v%2BFBmp1lnfqnXrmOUG1RzfBCtgYARz9tsYV1s1FecLkybu2%2Ftc3D9jfYI7zVMcyJWyoReXyd0WeHTkt0aGyXxSg15XBDo%2FvbSWYjL8XhuKfGTLUv1JFA0K%2BJYW0LCE8uARk9B%2FX4GcUfEcDytowJ1%2BVTvi8mgFBBmSMYl3Y9TQfZ%2FnE9sbPsdFuWbdizzV38j9%2FBlrkOpriQxE6NKCupA9FuZRVKWEnllGBdoJz1NDkWfGJpo5iDjkVxeHunwyqF3nvCMOLutGihjQnIcdx7XIV4794E1cS1zamGmbU0f1PU3qKgzzNx6WLQi286wEFP33NHjwDh7YGZoX86PK%2F22PGiUJ3unUySQ6mrSSeASvkFgXGxLyjTsfN184OzA0noVzy4KzOSTaEC99FJb77vE4X%2Fi73VjCzEMK2Z1ckGOqUB5QeqN1jZgPtbJ923ypFEniQbHMszMQNBL3AM7mY1fGpJYooiczK8DUjMz1dKR49VngoXEdbVzu7SZLhbxFaHtVORfkOHeQM1EV7qNcLIy09RhWU8cLT2mJ4fD6CfYrxDIowoyk5rJ38k9l%2By3yPRexV2Jjpz8tzB0lgoqTVI%2FXWPlcYAegM8Wb%2FVPhtV8F0kS%2FxWn6aG9FJwM%2BUIzxawB0Q1sRj3&X-Amz-Signature=fcf8a4db81d83fb66509fa604db16795b227f7515a1577ad7a082b5f55a942b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
