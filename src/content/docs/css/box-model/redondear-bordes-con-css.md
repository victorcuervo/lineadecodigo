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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FIGICVL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9OQGbjxmvMwvV6YgO3tkpqT4kuL5x29z1OVP9265%2BwQIgWMuUYOrxb0hK%2BGF220U6%2BXHDl6b5VXVatTDOZ3CMci0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKmQ0eJLMv8W5ReBjyrcA5W5bvj8bjrS67gAA2GwfDswnmkot7s8Jyks3ttNbKaQBsxl1bNTe48Mz9%2FYv96FwsJlmUznq2SfU%2BigVLuqHe9HuWfLZFQUC9q24885YZ8DodykUS6DZFDMZ3q0U9xbwbsm4j16SAjof8ZaUoKrw5dGDWoZUT%2FmcvNYXUkU8qujytNOmlCbklGETEd%2Fv6vYGUCMDX5ZpRZsIAJK%2BqNRqGhn3JZbCHJerNjrojl2IQzqGjV180P0HAnph%2BFQ0JXi%2FI3gdDG%2BxA3Dl8cjI%2BQnpp0eRVC4AD%2BFaaI%2BdP8JzEEQGpsyLNNU4L0%2F3zCL7XUZMBRY8oAqL0R%2Fy3IIiq6EQPgYYEoFfZomnQ9yeqewLXyi%2BZyQG9tmPPMklKb6anp9NqgNLQy7c%2BX6OeqLav%2BiwLukWMcmS2I9ADshm8C0PF1l1ddn4swu5U5fTxSprdnzAHGRQCYZac8EU0FUckxbZglN3TI7rhb2vq838oyslx5Gv%2Fnrv5irF7bz0wyUDSABMU%2BZl3iZdWFhBvkQYS4BJ7A%2BFpb7AiFo%2BYniCB8jn9cZEFwFQh8HXosy9wrXnBk7g7nINMU7dY388uRkWXgHci5u9f8%2BmZXxvdnGOy0W7Jle6qDlqejr7zBwWKPIMMOqisoGOqUB2DltSNR5yA7VNjoaBwoq4nMU%2FJX8ZCz%2BFDdy5uy7FBhs7ngFCDRlJSaDCTkOR%2F%2FnimT9Tlplx1zDnFKnX0PBzicp7Xql4E0%2FbUUyxNAcvcp2mqx6y8BTBy1uJvMf6tZMqO%2BYkA9srXGcvuA6U%2BY2NjeI6HrPIRkKc94nV5sYZK45OidIL%2BERrMdVEwKWDK579eqOLLdS87d%2Fml4HwJAXdFwycwa0&X-Amz-Signature=e0cc73fb3dfae6aa06af957144a4e0a0dd8d8d0ead6e32c34c42385da5273a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FIGICVL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9OQGbjxmvMwvV6YgO3tkpqT4kuL5x29z1OVP9265%2BwQIgWMuUYOrxb0hK%2BGF220U6%2BXHDl6b5VXVatTDOZ3CMci0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKmQ0eJLMv8W5ReBjyrcA5W5bvj8bjrS67gAA2GwfDswnmkot7s8Jyks3ttNbKaQBsxl1bNTe48Mz9%2FYv96FwsJlmUznq2SfU%2BigVLuqHe9HuWfLZFQUC9q24885YZ8DodykUS6DZFDMZ3q0U9xbwbsm4j16SAjof8ZaUoKrw5dGDWoZUT%2FmcvNYXUkU8qujytNOmlCbklGETEd%2Fv6vYGUCMDX5ZpRZsIAJK%2BqNRqGhn3JZbCHJerNjrojl2IQzqGjV180P0HAnph%2BFQ0JXi%2FI3gdDG%2BxA3Dl8cjI%2BQnpp0eRVC4AD%2BFaaI%2BdP8JzEEQGpsyLNNU4L0%2F3zCL7XUZMBRY8oAqL0R%2Fy3IIiq6EQPgYYEoFfZomnQ9yeqewLXyi%2BZyQG9tmPPMklKb6anp9NqgNLQy7c%2BX6OeqLav%2BiwLukWMcmS2I9ADshm8C0PF1l1ddn4swu5U5fTxSprdnzAHGRQCYZac8EU0FUckxbZglN3TI7rhb2vq838oyslx5Gv%2Fnrv5irF7bz0wyUDSABMU%2BZl3iZdWFhBvkQYS4BJ7A%2BFpb7AiFo%2BYniCB8jn9cZEFwFQh8HXosy9wrXnBk7g7nINMU7dY388uRkWXgHci5u9f8%2BmZXxvdnGOy0W7Jle6qDlqejr7zBwWKPIMMOqisoGOqUB2DltSNR5yA7VNjoaBwoq4nMU%2FJX8ZCz%2BFDdy5uy7FBhs7ngFCDRlJSaDCTkOR%2F%2FnimT9Tlplx1zDnFKnX0PBzicp7Xql4E0%2FbUUyxNAcvcp2mqx6y8BTBy1uJvMf6tZMqO%2BYkA9srXGcvuA6U%2BY2NjeI6HrPIRkKc94nV5sYZK45OidIL%2BERrMdVEwKWDK579eqOLLdS87d%2Fml4HwJAXdFwycwa0&X-Amz-Signature=c106d669972bbf42a4a8034a57912abf6294043eb67bcdaf00e37bbc04d01b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
