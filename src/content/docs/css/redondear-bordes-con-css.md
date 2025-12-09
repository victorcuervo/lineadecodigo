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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5VPF3A2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8K86tNHw7pbu8wEIqAPXvp%2FKtrLKw5ectEdWbj2sZJgIgX2fccLIwhO%2FmIs7ULLjK8jAQ1G%2FOBmXxGCAadkaiPg0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqT5mOAlYf%2F7liEHCrcA3Bc2eU%2F8DImrorir6ZAH1DTyz43w%2FqV0fCRcYGPaJQrNX8dUrWOB3mewkLm7mFj8Hsso7Bo%2BQEmP1Cwf0EPLvfXCUaDIhFPKFvh7sDD%2FAdNJeWomPp%2F%2Br5z2JtiKD0QpFfpP5%2F8HgTB2FGgAgC7%2FyTA4qzIzHxN2qHTrkAet5PDZpEDN7Yx2g24wlUCGp5eVkEymvd1V32o3rFqMr3bzDs5ocYKpK%2BRgAekdhWmkKf5RDGrcrbCT1zp4F7Hmeel%2F0G0pvkXVXBeX9O6xYTqi%2BryaRLhLuQqUVdBDpfzIQOtXUHzCWGWNjN4HuXfaUXK07gRBnS6rWaLEMtE4IERVFolqmvjjwIQeZmHffX5maMzEGi3OpYS%2B%2FbasczTo4j9ZiQUyK%2FzEHnAEt0hWnvQNG65h71lvD%2FFfI7%2Bf7p8JhU0sH9ok1hlU83oG%2F9QNU8WqnZLTyrrmpLvmkH4EInFHlH3WOemW9xotDghdaFsvSt30IdztuER9uoPdzsg%2Fay21iY5b6Mc4OpyoRGtlMptnccAR6SuQNSimzP%2Br5uc6WEu9joSFXDFWcN9YLLeI4V9R8TL0vl5TfqGQMNjJ7SxS8p%2FZGZKZySrSq4ibp523TKkXiM%2F7VpFb9E4oa2cMKOu3skGOqUBF3tVwdglZ9SWOeCKD78akP%2Fqop37DvXDTLyIbk%2F0kIym8L3DkQR4AlrXSNTt901nehMFuHpe%2FmE9lUN%2Bgf2MowQ39sqwf5W33uNhf%2BrXa8CuPusI0UhGCFRNKsYmrlUJeoPWSU%2FlmHMxJjTsSFKBUjRU1gFLqfwvPjtgwmGlbsFCGQYvoKXtjxERJakvdtMEXyQXXDAyiHufbj0HRO%2B3oF7CXQaP&X-Amz-Signature=d30a7ce9b84ed7b0bfaaf3184790ecef1c793ed06886898358e850346235daa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5VPF3A2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8K86tNHw7pbu8wEIqAPXvp%2FKtrLKw5ectEdWbj2sZJgIgX2fccLIwhO%2FmIs7ULLjK8jAQ1G%2FOBmXxGCAadkaiPg0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqT5mOAlYf%2F7liEHCrcA3Bc2eU%2F8DImrorir6ZAH1DTyz43w%2FqV0fCRcYGPaJQrNX8dUrWOB3mewkLm7mFj8Hsso7Bo%2BQEmP1Cwf0EPLvfXCUaDIhFPKFvh7sDD%2FAdNJeWomPp%2F%2Br5z2JtiKD0QpFfpP5%2F8HgTB2FGgAgC7%2FyTA4qzIzHxN2qHTrkAet5PDZpEDN7Yx2g24wlUCGp5eVkEymvd1V32o3rFqMr3bzDs5ocYKpK%2BRgAekdhWmkKf5RDGrcrbCT1zp4F7Hmeel%2F0G0pvkXVXBeX9O6xYTqi%2BryaRLhLuQqUVdBDpfzIQOtXUHzCWGWNjN4HuXfaUXK07gRBnS6rWaLEMtE4IERVFolqmvjjwIQeZmHffX5maMzEGi3OpYS%2B%2FbasczTo4j9ZiQUyK%2FzEHnAEt0hWnvQNG65h71lvD%2FFfI7%2Bf7p8JhU0sH9ok1hlU83oG%2F9QNU8WqnZLTyrrmpLvmkH4EInFHlH3WOemW9xotDghdaFsvSt30IdztuER9uoPdzsg%2Fay21iY5b6Mc4OpyoRGtlMptnccAR6SuQNSimzP%2Br5uc6WEu9joSFXDFWcN9YLLeI4V9R8TL0vl5TfqGQMNjJ7SxS8p%2FZGZKZySrSq4ibp523TKkXiM%2F7VpFb9E4oa2cMKOu3skGOqUBF3tVwdglZ9SWOeCKD78akP%2Fqop37DvXDTLyIbk%2F0kIym8L3DkQR4AlrXSNTt901nehMFuHpe%2FmE9lUN%2Bgf2MowQ39sqwf5W33uNhf%2BrXa8CuPusI0UhGCFRNKsYmrlUJeoPWSU%2FlmHMxJjTsSFKBUjRU1gFLqfwvPjtgwmGlbsFCGQYvoKXtjxERJakvdtMEXyQXXDAyiHufbj0HRO%2B3oF7CXQaP&X-Amz-Signature=a94fdc3b26c4c6c2775a156264ea7906cf1dcc4c7a3cb69e827f2b9a407d36ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
