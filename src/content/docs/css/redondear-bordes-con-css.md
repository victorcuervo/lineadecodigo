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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCKHHJ2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwx%2FNGDhj3UuDVHTHY0dtNnoae3urjJDr0QFWd9frc3gIhANNJfgQnJaVKobreEYv2N4UphW58KIb0x1LKFi4qp%2F9XKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Btw8DYXbLLcceDHoq3AOe6PN%2FKcybR8%2B0Qid5BBLiJtKxXOy4EvjZrUDvAgotEv5KzMKs%2B3p0fE9fd0w5aJvWRBKndeUgUmD%2BeKE1rx2av8xH0yOLIv4Y0EAPLoMe1jDGWZdNCGKjKYHHoiXw8qFxiSckW%2BaKe5bS9iueiaQ5%2FP7TjfaAoNL0bk8jA3%2Bzsr%2BE9b%2FjS8ztHXjJV8bM9%2FL0fX9b0OxAgBcDkU6q2TECFz81vxgXkTSDaUkTVdxaWmiHGEB5oQpv0qLlIwA58PmIoED0mn%2BoCwTFt%2BvsP520tCou%2B9dWQ3tvPpuAhDXgUixUJE6UlGHApRV%2Fd1vxD8%2BGtJfKTDyaduDK56ubQ7C3KQrmZzCUBuu4246UOCDR48S53mttf2Jzewv9jwgucfP1POf2yQieTWFcOW0aNhJKj0Fg8sasWI8%2BxQ3U8jQEAObH8BsHxB7Nh2nEhNXPf3n0qS%2BEJ2koscfsvjT8isrl66w5pYtw6wQgPr%2BBZSKrmWMj1oqZ8YWN0qKhd94hSBzkDQL9Jrm5IntB7yFBB%2BHr1e%2B1glO7lcfVYXz1aD1cEL43eupsfWXtuGil%2FapV4wPjk5EWmWCYhhmuwCcClHkTYvFonuf85KAqNnljliuNdZCNBp9zGosBVXv3qzDp%2FdLJBjqkAXY6MfYRv%2FQrJjNu4KiYclNnsKKibCnkR4HyxzMu%2Bn1LRaoern66PVqJksPyqstKdUJI3P1UvunJ%2BQyugxhlitAtFVFWeJAnRe8nuEKic8HpfLkChXcOST0aIAd5GrL11m035wq6YIt%2B%2FiRo8Rn3%2B20f%2FNYU8jCs7bjHSqidLvsVuK7yHlUsEGDtbzvGbYmUb%2FwTIGFhU%2F8roayrJHva1wLrUTVO&X-Amz-Signature=7322270f8c8613a643faf3209b4af74f98c0e0bb636bb168e80749e505d426d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCKHHJ2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwx%2FNGDhj3UuDVHTHY0dtNnoae3urjJDr0QFWd9frc3gIhANNJfgQnJaVKobreEYv2N4UphW58KIb0x1LKFi4qp%2F9XKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Btw8DYXbLLcceDHoq3AOe6PN%2FKcybR8%2B0Qid5BBLiJtKxXOy4EvjZrUDvAgotEv5KzMKs%2B3p0fE9fd0w5aJvWRBKndeUgUmD%2BeKE1rx2av8xH0yOLIv4Y0EAPLoMe1jDGWZdNCGKjKYHHoiXw8qFxiSckW%2BaKe5bS9iueiaQ5%2FP7TjfaAoNL0bk8jA3%2Bzsr%2BE9b%2FjS8ztHXjJV8bM9%2FL0fX9b0OxAgBcDkU6q2TECFz81vxgXkTSDaUkTVdxaWmiHGEB5oQpv0qLlIwA58PmIoED0mn%2BoCwTFt%2BvsP520tCou%2B9dWQ3tvPpuAhDXgUixUJE6UlGHApRV%2Fd1vxD8%2BGtJfKTDyaduDK56ubQ7C3KQrmZzCUBuu4246UOCDR48S53mttf2Jzewv9jwgucfP1POf2yQieTWFcOW0aNhJKj0Fg8sasWI8%2BxQ3U8jQEAObH8BsHxB7Nh2nEhNXPf3n0qS%2BEJ2koscfsvjT8isrl66w5pYtw6wQgPr%2BBZSKrmWMj1oqZ8YWN0qKhd94hSBzkDQL9Jrm5IntB7yFBB%2BHr1e%2B1glO7lcfVYXz1aD1cEL43eupsfWXtuGil%2FapV4wPjk5EWmWCYhhmuwCcClHkTYvFonuf85KAqNnljliuNdZCNBp9zGosBVXv3qzDp%2FdLJBjqkAXY6MfYRv%2FQrJjNu4KiYclNnsKKibCnkR4HyxzMu%2Bn1LRaoern66PVqJksPyqstKdUJI3P1UvunJ%2BQyugxhlitAtFVFWeJAnRe8nuEKic8HpfLkChXcOST0aIAd5GrL11m035wq6YIt%2B%2FiRo8Rn3%2B20f%2FNYU8jCs7bjHSqidLvsVuK7yHlUsEGDtbzvGbYmUb%2FwTIGFhU%2F8roayrJHva1wLrUTVO&X-Amz-Signature=f24fb19038f9218673aa2fa2a655f246074a5737b5d897261fc69407f09b7312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
