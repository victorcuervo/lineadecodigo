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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFQMFRVQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdE8oTN3vg9S6hmEhL%2FvGDXgwb%2BkEUk6ODJVJzTGyeVgIhAPqszIKg7AQb6ZTLvZ8BaRJqo1tjN%2BFL1TCGWX3bjmz5Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxT0ZGpbGcaQaq0N1gq3AOEeZ9GgYD0FrratYQ6jorMz9P%2FNYyk0mZElazGcaywwpLYbi3dbLurmZvMZhfPIJ1BOzeS4znD9scjG23NoRqREdLfkk0ctw0%2FvmN8E%2FxoXt7a7%2FxgXGlV71IkABPw8HBLe0QbjCen9vM7%2BPbaR6jT0tfdlLVSiC2nkuIUwxnJ60Xl6y6QGbrMmsgRZXMFt%2Fw2DIRRh%2F9GjnOviuxgRQLsqDqAv6R0ZhbUHrR9Y5q%2BkbGsu5EaSVXb3IUbAqUKloquzY78A7PQFbkHQY0WzevHN05MZgW6IdnRgcHl5Q2iv%2Bo4g%2F3eOOMrgbPd%2FILzhlgAiYGO5vz51zxV4CQyjqSek%2BLix8uD1VzW3h7H7QfReMin2IiWp5P3tp%2FsPAiAqZex48Jkd9x4vpb3WM0ukkSPORNmx6Y5g8z8Du%2FP3C2mpEpRoR4VpCkvMLHg00%2Br1qAWXul9AzY5jHcsHQfS7UsNrSunoKk%2FGI4zR72UjjiYQwzr%2Fq3o41CXONv33qXyNr%2BypY4iaqIft9JTSZhwUkTOjlQZWiAhv7tZvP8MrfvWPeGCL2NwSCB1Rq0ivkTqeozsCkwH4pp8mAf53tPPTjAZlu8earDpiwKwxTSitAYqu9I1Ww4%2Fg6c85y4aszClptDJBjqkAYPiiV9SuIDxkhyDgTFU0UDOd8S8o3gaFqgk%2FaMtjujSztpBhqJUsVT2BOy%2FEI5VxIko4FCPh8FRc0hz3irMvjatfhyfhFXHgsIs%2FmwlXASB0xXoo3DGW534tm2wuDoO6GrGY%2Fla%2FSJBS25FsVbzTJWEWNeyLNAMVeDl7T7ZamLaUaJI5FHUx64%2BxVQBozESxXYR%2FqbTm6e3GMO%2FzYpu0JXYuXHi&X-Amz-Signature=501aa46511c872f2014ac12049692a74299124a79329207949406d944a473415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFQMFRVQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdE8oTN3vg9S6hmEhL%2FvGDXgwb%2BkEUk6ODJVJzTGyeVgIhAPqszIKg7AQb6ZTLvZ8BaRJqo1tjN%2BFL1TCGWX3bjmz5Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxT0ZGpbGcaQaq0N1gq3AOEeZ9GgYD0FrratYQ6jorMz9P%2FNYyk0mZElazGcaywwpLYbi3dbLurmZvMZhfPIJ1BOzeS4znD9scjG23NoRqREdLfkk0ctw0%2FvmN8E%2FxoXt7a7%2FxgXGlV71IkABPw8HBLe0QbjCen9vM7%2BPbaR6jT0tfdlLVSiC2nkuIUwxnJ60Xl6y6QGbrMmsgRZXMFt%2Fw2DIRRh%2F9GjnOviuxgRQLsqDqAv6R0ZhbUHrR9Y5q%2BkbGsu5EaSVXb3IUbAqUKloquzY78A7PQFbkHQY0WzevHN05MZgW6IdnRgcHl5Q2iv%2Bo4g%2F3eOOMrgbPd%2FILzhlgAiYGO5vz51zxV4CQyjqSek%2BLix8uD1VzW3h7H7QfReMin2IiWp5P3tp%2FsPAiAqZex48Jkd9x4vpb3WM0ukkSPORNmx6Y5g8z8Du%2FP3C2mpEpRoR4VpCkvMLHg00%2Br1qAWXul9AzY5jHcsHQfS7UsNrSunoKk%2FGI4zR72UjjiYQwzr%2Fq3o41CXONv33qXyNr%2BypY4iaqIft9JTSZhwUkTOjlQZWiAhv7tZvP8MrfvWPeGCL2NwSCB1Rq0ivkTqeozsCkwH4pp8mAf53tPPTjAZlu8earDpiwKwxTSitAYqu9I1Ww4%2Fg6c85y4aszClptDJBjqkAYPiiV9SuIDxkhyDgTFU0UDOd8S8o3gaFqgk%2FaMtjujSztpBhqJUsVT2BOy%2FEI5VxIko4FCPh8FRc0hz3irMvjatfhyfhFXHgsIs%2FmwlXASB0xXoo3DGW534tm2wuDoO6GrGY%2Fla%2FSJBS25FsVbzTJWEWNeyLNAMVeDl7T7ZamLaUaJI5FHUx64%2BxVQBozESxXYR%2FqbTm6e3GMO%2FzYpu0JXYuXHi&X-Amz-Signature=8ee655e6aa51d6edda8e4582d37b6b220b229b2c73ce05fe98c0965ea55c1d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
