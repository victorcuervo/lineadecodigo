---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPFIUYBP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9GGsrI9sOhpH3mEyL1KmUNjHFpBHN0S9ggtpTIGdeyAIhAM88rxLWNumR4znbKr6UdZENaYJCxfe%2BvJ0N1XMzol1SKv8DCHsQABoMNjM3NDIzMTgzODA1Igz9yh82uCLnk4qvvqQq3APmi6u9PLcXs1ZHvGyTTkCWaETI9vLlIaw6oYEFnnby3WwRE%2BXbed846Ji9TzlBz9X3Pad%2FQ3MvAUJBJTuMW7%2BMpvyUCW%2B3sQGq%2B5QVRBjxbZ4PHrNEP8geyZRWM0fC2IT5xRjExWydd5pP30MS1hVf2n429FLzpH1o8HCSk3H3EpUiNUkf4SiTV8rw7XjgLURoaitOWK385oB21jL8N9z3sJvbWLFK67tL2IkDTW1TDU2e%2FrPOoZw4i0%2BEPt78yJBHbmpu5RPKQlpMS5Hh0JNt03h2Ldx6LROMQbZOkx53XmVFF%2FfFCTbS6L8h%2F%2F1olzyQapRNsTgoiRClbtIbY9qYS%2FJ0NSVfbbZegtGSfLnFniwoao9ad8nTXsoZjVy1huynS7dz3bsmbjObBvYAFW90u4HXp7yTIVcsLRbhDTahwIGk3svWEvAtcSa8nP4I0wMH6XCUQ%2Fk1LNSFHX5ySBL%2BRQSYfBUSfpWQfOvb18ncHjXx6LR9HnztPCpiGij3faPgpf0YAQqwd7dntvjzG6ME4e9m8QmYswqaJ5TkSANz%2BO%2BqIoTG%2FYZtPwrZJh3OClNDTTY2LbXkgXwR0gm%2F4hNFyZ9ZqQw1qFNcdTwQGZ5kBbJTvunqMe4vTHlrlDCl74nKBjqkAZXMegikHjgLRFuGEaqkZggmJbUGNhm0ZWv5WG3GEZtAIopjlcSLtfUVS3FKKxwU34lvXw6zOESsjlh2mwKk8MBh2qx%2FCzg83U5ZDtponugrkH89rx3IP3Q9ZcGWtpK%2BhkQe%2B%2Fq4Lvpz%2F4qDoSTj4z78%2F32DrVtiUuwQy130C1yhdkLMGV7L3Qeg7TSJPqz1p5%2FeQ7555LnvOR9XePgC2pVkajIB&X-Amz-Signature=2a6e1341a90af449a6f7412296b9a495da6d95df267a79680b2fb589f6cf6309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPFIUYBP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9GGsrI9sOhpH3mEyL1KmUNjHFpBHN0S9ggtpTIGdeyAIhAM88rxLWNumR4znbKr6UdZENaYJCxfe%2BvJ0N1XMzol1SKv8DCHsQABoMNjM3NDIzMTgzODA1Igz9yh82uCLnk4qvvqQq3APmi6u9PLcXs1ZHvGyTTkCWaETI9vLlIaw6oYEFnnby3WwRE%2BXbed846Ji9TzlBz9X3Pad%2FQ3MvAUJBJTuMW7%2BMpvyUCW%2B3sQGq%2B5QVRBjxbZ4PHrNEP8geyZRWM0fC2IT5xRjExWydd5pP30MS1hVf2n429FLzpH1o8HCSk3H3EpUiNUkf4SiTV8rw7XjgLURoaitOWK385oB21jL8N9z3sJvbWLFK67tL2IkDTW1TDU2e%2FrPOoZw4i0%2BEPt78yJBHbmpu5RPKQlpMS5Hh0JNt03h2Ldx6LROMQbZOkx53XmVFF%2FfFCTbS6L8h%2F%2F1olzyQapRNsTgoiRClbtIbY9qYS%2FJ0NSVfbbZegtGSfLnFniwoao9ad8nTXsoZjVy1huynS7dz3bsmbjObBvYAFW90u4HXp7yTIVcsLRbhDTahwIGk3svWEvAtcSa8nP4I0wMH6XCUQ%2Fk1LNSFHX5ySBL%2BRQSYfBUSfpWQfOvb18ncHjXx6LR9HnztPCpiGij3faPgpf0YAQqwd7dntvjzG6ME4e9m8QmYswqaJ5TkSANz%2BO%2BqIoTG%2FYZtPwrZJh3OClNDTTY2LbXkgXwR0gm%2F4hNFyZ9ZqQw1qFNcdTwQGZ5kBbJTvunqMe4vTHlrlDCl74nKBjqkAZXMegikHjgLRFuGEaqkZggmJbUGNhm0ZWv5WG3GEZtAIopjlcSLtfUVS3FKKxwU34lvXw6zOESsjlh2mwKk8MBh2qx%2FCzg83U5ZDtponugrkH89rx3IP3Q9ZcGWtpK%2BhkQe%2B%2Fq4Lvpz%2F4qDoSTj4z78%2F32DrVtiUuwQy130C1yhdkLMGV7L3Qeg7TSJPqz1p5%2FeQ7555LnvOR9XePgC2pVkajIB&X-Amz-Signature=5ccc7d563a08b15f8f8742e9402462024c3f41415400233d88a39d5971a204fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
