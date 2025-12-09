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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZLKEG5W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE0ZqIieivSC1uHgdRpcoMJLWFo4Iqs3InKednhlCqdAiB%2FukKfpiFqrRvVz3mwSrNKRjPPfF4A3QIxWlmYNlfXIyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcVRYCuX98FhtDPknKtwDdbn8Wja%2BqVtVhTv3UgFgchJ7TYfTboX%2Fg0wUulhq2P748v%2BCNjAYw9iO7yPswkxkqNZv1cYV3hL3RafA8dILcfQNwBg7HG4LQhNYnu%2B9Y8n9mA%2FF6iq6SlDpKCalOfqMxWPxRIk%2BeQ6ew4TH%2F4eAGH%2BSqDmTnPBwo1bNaZ3rcJC%2F1cJmHehvKKdBYkizKwIbAdPAbvuzfgCqgICCQzWkLgkbkGEnEebZhgajq4JWUyjTp9bfqcNPMlo%2FAO0kZyX2sKGZdz%2FnFotlebNACooZjKbNkjzoa9G9RRY63hVebyFgiOq8ps5kSs%2BUl8cYU1yzmTZS7NRhTkKymZpu3PQDw2a%2BZF%2BGY0FDqBMGBOvFbsY5CU%2FL8EsN59Ljb6On2ZMkzNTrDNmYX40COQk83asOjdPjV77KDZ439M5ptb2G49de%2FkRSaQaQU7m%2Fv0c8GaW7F9EGusv1Rs1ORSElxNn7OrxMbS9lXgHoYgHKj3MQzN1hZsJ%2FqJPCao7zdh2u%2BkUyS7vlUnQiJ79ioGzZf58JLHX1apEXP5zLJj2wcuF2%2FvhGfNzzRtGCbccSaquuP%2B55UO%2B%2BkwkiJ2mRivhEmCYawan%2BrxK5E2YuKzrMBtU7Qr9u%2BsbuPxpcWxikNn8wrYffyQY6pgHWdxKoWcCNT6TMeCLTjPg9cnlqaMO9zAw13YblmnYkdkif3j9k%2FwO805YmYmmoTTmr%2F47xBGcIkuTfBgEOpO%2BfPQKDXzbcMrS9NFneVF6jLOUMeIKmQzrnOKVbEkpXt3%2BPxD9%2FG8LD%2FJTdONq5K5Pl291JAroo7psM%2BEwR5HXjr%2FAi504j3jk%2Fpo0h3SwEvRdL%2F7TlcrmWXBGR9wRvFUO96%2FiwtXsH&X-Amz-Signature=c88c094fbea06b1961e082fe5d8b8ac8db871f88a7a56db76e0e522156b8aeee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZLKEG5W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE0ZqIieivSC1uHgdRpcoMJLWFo4Iqs3InKednhlCqdAiB%2FukKfpiFqrRvVz3mwSrNKRjPPfF4A3QIxWlmYNlfXIyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcVRYCuX98FhtDPknKtwDdbn8Wja%2BqVtVhTv3UgFgchJ7TYfTboX%2Fg0wUulhq2P748v%2BCNjAYw9iO7yPswkxkqNZv1cYV3hL3RafA8dILcfQNwBg7HG4LQhNYnu%2B9Y8n9mA%2FF6iq6SlDpKCalOfqMxWPxRIk%2BeQ6ew4TH%2F4eAGH%2BSqDmTnPBwo1bNaZ3rcJC%2F1cJmHehvKKdBYkizKwIbAdPAbvuzfgCqgICCQzWkLgkbkGEnEebZhgajq4JWUyjTp9bfqcNPMlo%2FAO0kZyX2sKGZdz%2FnFotlebNACooZjKbNkjzoa9G9RRY63hVebyFgiOq8ps5kSs%2BUl8cYU1yzmTZS7NRhTkKymZpu3PQDw2a%2BZF%2BGY0FDqBMGBOvFbsY5CU%2FL8EsN59Ljb6On2ZMkzNTrDNmYX40COQk83asOjdPjV77KDZ439M5ptb2G49de%2FkRSaQaQU7m%2Fv0c8GaW7F9EGusv1Rs1ORSElxNn7OrxMbS9lXgHoYgHKj3MQzN1hZsJ%2FqJPCao7zdh2u%2BkUyS7vlUnQiJ79ioGzZf58JLHX1apEXP5zLJj2wcuF2%2FvhGfNzzRtGCbccSaquuP%2B55UO%2B%2BkwkiJ2mRivhEmCYawan%2BrxK5E2YuKzrMBtU7Qr9u%2BsbuPxpcWxikNn8wrYffyQY6pgHWdxKoWcCNT6TMeCLTjPg9cnlqaMO9zAw13YblmnYkdkif3j9k%2FwO805YmYmmoTTmr%2F47xBGcIkuTfBgEOpO%2BfPQKDXzbcMrS9NFneVF6jLOUMeIKmQzrnOKVbEkpXt3%2BPxD9%2FG8LD%2FJTdONq5K5Pl291JAroo7psM%2BEwR5HXjr%2FAi504j3jk%2Fpo0h3SwEvRdL%2F7TlcrmWXBGR9wRvFUO96%2FiwtXsH&X-Amz-Signature=d5e0be9f666a874b4523c456bdc5536faa7bef568ed278a3def5e422a3bc4ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
