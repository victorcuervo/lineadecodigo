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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBOFWXJF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq0i1Bw7nnYk2m2HYpWVWr7LwT40ciK7Q6RSlYwQjgqAIgPzL9evFAY5F%2F6fuRi9H12t2H%2BfT3XgYCa0G%2BM0SkMfIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh1NtQYG%2BrubPLIVircAwmYM%2B4Mtdym2Lsg0JdaUjVtzz%2F4FqL%2F1LSWscdf5jGK5ZIlLCKoZwZ9pn2%2BfIyhQgUHKJSbCeVXfGqUB%2F%2FyzH5ymc2QvByoLNwEqddP9aGP3g2Jwm2gfyf25ukVUlRI7PjoZZHnr60q7CM%2FY%2BSV0Ld3GFHr2mw25lW0UPFKfYMkkLaTFukJda87ktA8kXJ9s%2FbXwsfbvVkxy%2BgHgpmItj7IcL4FZB7AlscE0djm5lZ1X038K48yB0etr5d8tdsp1zUe8dxs6ifXH%2BBp4wqeLaeowPlO3MG2gf2vEJwqmdXqsAu4bYLzFlwktBxToQ5eaSqps%2B%2F%2F5rOzH7cQJGfpL3%2FqZMDnyALQgqia39tOV7ToChII1kb%2FalP%2FYYO%2BQ%2BmekiPFsEc8pKvtKnGromFMfZWZgoIfVy6ehMxCqfot2UAFcFGPQO7zBEzM%2BlVsyNYQl%2Fk%2FTeMacTXI0YIiHQD1ZkeY5GtJaHIAZ0J8TJ0Pd5z5sA8vrxssMIF7JsFjboGGRfyO308HsNpimWyHttpJ0YZtv8Vqm4ReOyWhHoaB86evyQY3HamdmxMiHWf1EG0nWbDxMVoCmkxKpKF9c%2Fl%2BIRz%2FnnZhGEnbDMHIvGVhXViKxlj0k6o227eOmPD1MK7%2B0skGOqUBB9ObUUVQLPodRxHHhkJ5gwjapEvUUfHHZRiGAmgranj0NbGdls18uss5gIawoyG6miKkka84nyfsyaeapkefFJeu2MHWodhl81hZSbvQ%2B2l%2FSY0Gib9OeUP1%2B34w57%2FrRVASqIlL4nVAAJp6tyoTvX10uL9fltyflxMxclG8b3iG9J8PuTutFwSlo22wFfoWdGnBdq8aJQkPV4bWKbULmh4WqzBg&X-Amz-Signature=b13d4ef845ce49a166cbe255c4eb91a8dd17bd7ead005fb6604c4b66edf4f6c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBOFWXJF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq0i1Bw7nnYk2m2HYpWVWr7LwT40ciK7Q6RSlYwQjgqAIgPzL9evFAY5F%2F6fuRi9H12t2H%2BfT3XgYCa0G%2BM0SkMfIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh1NtQYG%2BrubPLIVircAwmYM%2B4Mtdym2Lsg0JdaUjVtzz%2F4FqL%2F1LSWscdf5jGK5ZIlLCKoZwZ9pn2%2BfIyhQgUHKJSbCeVXfGqUB%2F%2FyzH5ymc2QvByoLNwEqddP9aGP3g2Jwm2gfyf25ukVUlRI7PjoZZHnr60q7CM%2FY%2BSV0Ld3GFHr2mw25lW0UPFKfYMkkLaTFukJda87ktA8kXJ9s%2FbXwsfbvVkxy%2BgHgpmItj7IcL4FZB7AlscE0djm5lZ1X038K48yB0etr5d8tdsp1zUe8dxs6ifXH%2BBp4wqeLaeowPlO3MG2gf2vEJwqmdXqsAu4bYLzFlwktBxToQ5eaSqps%2B%2F%2F5rOzH7cQJGfpL3%2FqZMDnyALQgqia39tOV7ToChII1kb%2FalP%2FYYO%2BQ%2BmekiPFsEc8pKvtKnGromFMfZWZgoIfVy6ehMxCqfot2UAFcFGPQO7zBEzM%2BlVsyNYQl%2Fk%2FTeMacTXI0YIiHQD1ZkeY5GtJaHIAZ0J8TJ0Pd5z5sA8vrxssMIF7JsFjboGGRfyO308HsNpimWyHttpJ0YZtv8Vqm4ReOyWhHoaB86evyQY3HamdmxMiHWf1EG0nWbDxMVoCmkxKpKF9c%2Fl%2BIRz%2FnnZhGEnbDMHIvGVhXViKxlj0k6o227eOmPD1MK7%2B0skGOqUBB9ObUUVQLPodRxHHhkJ5gwjapEvUUfHHZRiGAmgranj0NbGdls18uss5gIawoyG6miKkka84nyfsyaeapkefFJeu2MHWodhl81hZSbvQ%2B2l%2FSY0Gib9OeUP1%2B34w57%2FrRVASqIlL4nVAAJp6tyoTvX10uL9fltyflxMxclG8b3iG9J8PuTutFwSlo22wFfoWdGnBdq8aJQkPV4bWKbULmh4WqzBg&X-Amz-Signature=f4e1e342a65d0c29bee5d769117d4f1b90b15083fd1209345aab9d2ceb802086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
