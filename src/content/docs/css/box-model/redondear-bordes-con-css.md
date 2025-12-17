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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYM764I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvghzoTL4xGv1oSfzvWuPKrtxe4mEa7SnqOABgHM9AXAiAXbXyaPcgAtjzP05jqw4z5onDfqzTy6ek41tmJuMgxuCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcqtZFPuLo%2BNo6%2FFLKtwDDlLlnmUcXNdbxhPT%2FSAwpIFK6PP2qKW%2F0wiUxQaaGCURlLDdDPYlYoutlDhVkNuSYnZbblK1xdw86HuLmVv0Ul3WIv8KIKu0b87FiBp9OVCRf1vDJpAQGF%2FLlb7Q6XYP7az8F7dhtrP1oZYJRBh4rcxc0uPO%2BqdLRBly%2BlDuvRf8Cgg2dUfy1oApsY0hoIUZRDreZr6PFTzq%2FsB3zEbHiXMbj6J%2BD%2BUXOOv4oidf%2BlbAFChDHBNigTW0jONUqkrRRQmjb4opAkw9mpQ893BWDj5I%2FOB%2Bwknc4jR%2FPgsYGYbP5nW10oORJCjrdK5MOtSQcr%2Fc1am0LREjkUqLlHjP9HnqRi7V6xJT6eCOEjNr%2FOiUYtJaJaVXpzbws16u8UEbqTPCJSqMqT0MN1l0poM9%2BnU1B8OSc501VnW0%2BAg1YfdJT8lzjAP8u2J7tOsZ4g3hSQpeT08TbWngAauhu55Q6E0u2dcje%2BRCRQekngFzS3bXGamQfv3yFA1vD7mfqutt3kz5b7HS2X2JaCnry%2FYyMjh51I0gnKk2seTJENqPSUlkFFGZBitefKo5rf6qXfH51YMKNs9ZQwyPpbtg63kEBlhN8EEU5vxoR%2FI75MQ3qJst3YBhc8ciPhaiVgIw05%2BLygY6pgGB4hkxCjjA02n3%2B%2FuW82y55JBHuazGB6rgsr4EGJOwcABDR%2Fr0rqGmJRjw7LpoQIQhdpcUYoIJzAq4iEYlXPEiWASNjVdPZNyXiYC0kfKg%2Fwwwv3AjQNz9%2BMUyUPHBIioY3SpvNyjxbLiojscfTPOOV%2BbneDf7XgWX66kNKNqF3SUWo4MtZhRuy%2FHMPV%2F%2BVso%2BorcoK%2Bl%2B2aoqXv0I9W0w3ejNXPs6&X-Amz-Signature=4538d81b1cb53e8c65477bc40ebbe1048a771b0c1227f7c92b44b6b9b85fb884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYM764I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvghzoTL4xGv1oSfzvWuPKrtxe4mEa7SnqOABgHM9AXAiAXbXyaPcgAtjzP05jqw4z5onDfqzTy6ek41tmJuMgxuCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcqtZFPuLo%2BNo6%2FFLKtwDDlLlnmUcXNdbxhPT%2FSAwpIFK6PP2qKW%2F0wiUxQaaGCURlLDdDPYlYoutlDhVkNuSYnZbblK1xdw86HuLmVv0Ul3WIv8KIKu0b87FiBp9OVCRf1vDJpAQGF%2FLlb7Q6XYP7az8F7dhtrP1oZYJRBh4rcxc0uPO%2BqdLRBly%2BlDuvRf8Cgg2dUfy1oApsY0hoIUZRDreZr6PFTzq%2FsB3zEbHiXMbj6J%2BD%2BUXOOv4oidf%2BlbAFChDHBNigTW0jONUqkrRRQmjb4opAkw9mpQ893BWDj5I%2FOB%2Bwknc4jR%2FPgsYGYbP5nW10oORJCjrdK5MOtSQcr%2Fc1am0LREjkUqLlHjP9HnqRi7V6xJT6eCOEjNr%2FOiUYtJaJaVXpzbws16u8UEbqTPCJSqMqT0MN1l0poM9%2BnU1B8OSc501VnW0%2BAg1YfdJT8lzjAP8u2J7tOsZ4g3hSQpeT08TbWngAauhu55Q6E0u2dcje%2BRCRQekngFzS3bXGamQfv3yFA1vD7mfqutt3kz5b7HS2X2JaCnry%2FYyMjh51I0gnKk2seTJENqPSUlkFFGZBitefKo5rf6qXfH51YMKNs9ZQwyPpbtg63kEBlhN8EEU5vxoR%2FI75MQ3qJst3YBhc8ciPhaiVgIw05%2BLygY6pgGB4hkxCjjA02n3%2B%2FuW82y55JBHuazGB6rgsr4EGJOwcABDR%2Fr0rqGmJRjw7LpoQIQhdpcUYoIJzAq4iEYlXPEiWASNjVdPZNyXiYC0kfKg%2Fwwwv3AjQNz9%2BMUyUPHBIioY3SpvNyjxbLiojscfTPOOV%2BbneDf7XgWX66kNKNqF3SUWo4MtZhRuy%2FHMPV%2F%2BVso%2BorcoK%2Bl%2B2aoqXv0I9W0w3ejNXPs6&X-Amz-Signature=d7e9278fda6e5ad193ee9c9f19ef101ed6ee97b6f7eb4920a92b6bd99d896c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
