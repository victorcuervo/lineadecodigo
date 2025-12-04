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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RA22D6Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCraqHoqPXVbMnZ8Vwj%2BmndKV1hEor2XckZCtVksGtwawIhALF%2FFtNS%2F1JGncCWg9Y4Ia4Zl8UP5%2Fj8XjucaAoUve9%2BKv8DCEgQABoMNjM3NDIzMTgzODA1IgzG%2BSU5ypH2OvuPZWIq3APh7LY%2FoIv851NQMLJJOKx0jFriQd0TM1LtRa3FDBg%2BLzKLmLohe5QeoxFxXYKQVprHSxCE0N0tLz9zNeaGbnwCZ2kpeCtnctighmvNVhKZuHtzmM6pTweOmgT4o%2FJIb6r1ZR0pznV%2FU05eQBu96noUyQO6dXfqLB%2FxuAkh2eStx9CatFWQJopFpCb5LFYlpvg8lfSprMZkBE%2B7XnPXXjZm8onSRuv8WvG7UksYESpgT2knP3mny8FsWP0HQHTd6uxmpJ5We6%2F9XS3gTnBadvIKSRcv3I3EtNuMwRjvqSs8fPp5w%2BlWf6ThwEpiyNGe75IYErGeefMt3EHUwjWAVi8KyBqlWZRzGk%2FieTycYURLTfIujOmj8qOXw2RaztGv2jJqNGqKt4uSu4bfBnaFVlPh5Sdm0H9rDTikRVT7qRPDUSqM%2Fd8VE6MJBQ5SOh%2Fg7YdiovAhHzcsQ3Tnlkgu%2FTEZk0Rd85GelAZjpnebGACHUv2KCrs5G1UzMkre6tvIlzR6Z9CBZe0fTFfyR%2FC%2Bp1ylhI80tdWoK50uhcqzI0cCMvKL1g98V%2F7XVQ3pckbC7ziv23s2JX%2FQZWDFeISFG4xe26qm1zHSnlaa7Hrm3JzoxfIajWfFKHCskGfLajDZv8bJBjqkAbOTl5kbB04J7rxMmQHXUg5MOI65vEB%2FLA7BQAAL1CtRheLF5ZpZnbu2CWZfAuzf4gbwakMn%2F3cbo3SoBv4e7oXwKrMYqfWSnXICapm11mmBoHW7bPJKOfIn75OQ3ELu7clwG5Tp3xr5HnWI2klRDdVZtSBzxoGNwHHB%2FH2G0GmVWG7Bm1A6GN8hBbaHuVXZvEzYz5qShJQYYBEWBAGAFDZtB4i0&X-Amz-Signature=9ac28b8feae458c2311e2e4b2c6c997f49e7874d816013fbb68e4f62fc393f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RA22D6Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCraqHoqPXVbMnZ8Vwj%2BmndKV1hEor2XckZCtVksGtwawIhALF%2FFtNS%2F1JGncCWg9Y4Ia4Zl8UP5%2Fj8XjucaAoUve9%2BKv8DCEgQABoMNjM3NDIzMTgzODA1IgzG%2BSU5ypH2OvuPZWIq3APh7LY%2FoIv851NQMLJJOKx0jFriQd0TM1LtRa3FDBg%2BLzKLmLohe5QeoxFxXYKQVprHSxCE0N0tLz9zNeaGbnwCZ2kpeCtnctighmvNVhKZuHtzmM6pTweOmgT4o%2FJIb6r1ZR0pznV%2FU05eQBu96noUyQO6dXfqLB%2FxuAkh2eStx9CatFWQJopFpCb5LFYlpvg8lfSprMZkBE%2B7XnPXXjZm8onSRuv8WvG7UksYESpgT2knP3mny8FsWP0HQHTd6uxmpJ5We6%2F9XS3gTnBadvIKSRcv3I3EtNuMwRjvqSs8fPp5w%2BlWf6ThwEpiyNGe75IYErGeefMt3EHUwjWAVi8KyBqlWZRzGk%2FieTycYURLTfIujOmj8qOXw2RaztGv2jJqNGqKt4uSu4bfBnaFVlPh5Sdm0H9rDTikRVT7qRPDUSqM%2Fd8VE6MJBQ5SOh%2Fg7YdiovAhHzcsQ3Tnlkgu%2FTEZk0Rd85GelAZjpnebGACHUv2KCrs5G1UzMkre6tvIlzR6Z9CBZe0fTFfyR%2FC%2Bp1ylhI80tdWoK50uhcqzI0cCMvKL1g98V%2F7XVQ3pckbC7ziv23s2JX%2FQZWDFeISFG4xe26qm1zHSnlaa7Hrm3JzoxfIajWfFKHCskGfLajDZv8bJBjqkAbOTl5kbB04J7rxMmQHXUg5MOI65vEB%2FLA7BQAAL1CtRheLF5ZpZnbu2CWZfAuzf4gbwakMn%2F3cbo3SoBv4e7oXwKrMYqfWSnXICapm11mmBoHW7bPJKOfIn75OQ3ELu7clwG5Tp3xr5HnWI2klRDdVZtSBzxoGNwHHB%2FH2G0GmVWG7Bm1A6GN8hBbaHuVXZvEzYz5qShJQYYBEWBAGAFDZtB4i0&X-Amz-Signature=692e58916cca3aa3971254b938454e62448aff7e6ccd1475e91c74e845da20a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
