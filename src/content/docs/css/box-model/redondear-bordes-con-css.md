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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VOWDJFF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIpKS25CTzmc6dBAPAYomkXoy4%2FcKbsRMBSv4qPNwpgwIhAJB1BsQcEUISA6bdDs5drcXjLrKwYG%2B%2B9XQC56OiipIaKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzm4mefB%2FUFKMYnw08q3APgVk2ykiFCpKWTSrqC79B93c523YL4GMfdetJT0UuDgnb3YA4vhZCMU1Z8tIT2BIlfY8O%2FnKfUkKErorX2vgtFyCf%2FLIi%2BWWhLoMaLWmmlp3IGt4GFmipSUFVKulDUF8CUQPIP8iQJpo508TYjY7%2FSDDQ6jvVVqGLP3TKJMezeVClwEGS%2FKtUVs6Ng6bPqHUMc2HMe8X5USjskkrhk9XNdfLQWuC1805%2F6xbtcbTKjiqCD4XH7tMobpCBx2G3uZ8VkE%2FVolhzCMmNzaNYGEbc928lbbVt8uRDGypzDe75lExcGxz4ia87woG%2Fg%2BXLgTfXx8SGrIWMWC%2BARnJHE%2B9wz%2B0L9YoIDaF2A2ajYHWSI7QWDsmPY4gNm9wozK0xLll6fzC3RTQtxzqgNEgByXHMX2pgVkE5JZXHjqYXS%2FvZQxsj17FlyGkE3d2%2FU5XCgAIxYgJ%2F4xeQwT1h6K89AYtQ2i3NM04hrvKmdmE1V%2BZ4S4raV0GntjW8jP2B8hUYXhhwwR8S%2Fj1Px06kmKRXQjNcGKFdGZm0xnZe%2F5hHeHIsUdXd%2BimikTUsJlm1LADiSSDLKeXph7gb3QMagbC4bTkYWpzqvATld0tWJKnzgidMbVH9OWjK4GkDS4Xi8mDDHn4vKBjqkARlvGo9XAU4P62VwusXQHEE722%2FnVYtg9DWkTbfXu%2FxDD6qjuqzeEoY91%2BMbqgH56TcISiv%2FTB%2BdV2Vq23NrPZnhF1EeP%2FPCP5dVzzYg%2Bs3VL6eHcf3TmDqoPBY0QjYnX2wb4AQERR%2FwbEtnqFrU72ALN6q3qRRbeOHPozPOG0ENPzvbHxtsdbk6NkoUG8bSkx5ekJxSYHvxPX1I%2BpqXjBuEoXy6&X-Amz-Signature=684fa3e7e19ffe953d360ec71e1309dbcff5e34169dd7b6b8a426d6d956e8c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VOWDJFF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIpKS25CTzmc6dBAPAYomkXoy4%2FcKbsRMBSv4qPNwpgwIhAJB1BsQcEUISA6bdDs5drcXjLrKwYG%2B%2B9XQC56OiipIaKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzm4mefB%2FUFKMYnw08q3APgVk2ykiFCpKWTSrqC79B93c523YL4GMfdetJT0UuDgnb3YA4vhZCMU1Z8tIT2BIlfY8O%2FnKfUkKErorX2vgtFyCf%2FLIi%2BWWhLoMaLWmmlp3IGt4GFmipSUFVKulDUF8CUQPIP8iQJpo508TYjY7%2FSDDQ6jvVVqGLP3TKJMezeVClwEGS%2FKtUVs6Ng6bPqHUMc2HMe8X5USjskkrhk9XNdfLQWuC1805%2F6xbtcbTKjiqCD4XH7tMobpCBx2G3uZ8VkE%2FVolhzCMmNzaNYGEbc928lbbVt8uRDGypzDe75lExcGxz4ia87woG%2Fg%2BXLgTfXx8SGrIWMWC%2BARnJHE%2B9wz%2B0L9YoIDaF2A2ajYHWSI7QWDsmPY4gNm9wozK0xLll6fzC3RTQtxzqgNEgByXHMX2pgVkE5JZXHjqYXS%2FvZQxsj17FlyGkE3d2%2FU5XCgAIxYgJ%2F4xeQwT1h6K89AYtQ2i3NM04hrvKmdmE1V%2BZ4S4raV0GntjW8jP2B8hUYXhhwwR8S%2Fj1Px06kmKRXQjNcGKFdGZm0xnZe%2F5hHeHIsUdXd%2BimikTUsJlm1LADiSSDLKeXph7gb3QMagbC4bTkYWpzqvATld0tWJKnzgidMbVH9OWjK4GkDS4Xi8mDDHn4vKBjqkARlvGo9XAU4P62VwusXQHEE722%2FnVYtg9DWkTbfXu%2FxDD6qjuqzeEoY91%2BMbqgH56TcISiv%2FTB%2BdV2Vq23NrPZnhF1EeP%2FPCP5dVzzYg%2Bs3VL6eHcf3TmDqoPBY0QjYnX2wb4AQERR%2FwbEtnqFrU72ALN6q3qRRbeOHPozPOG0ENPzvbHxtsdbk6NkoUG8bSkx5ekJxSYHvxPX1I%2BpqXjBuEoXy6&X-Amz-Signature=204e5db3dc947e56328301bde7ab5e2e214263c2a3769a7c9c4cf245bf935a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
