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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLP2G567%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHg1bzFDZ6o2z40xBl08aVnwyH3TjMMksIRGWBBLCSBBAiEApZYBxVWeLb%2FbLZjxJKo7hCBq36p0feRASdQou3FCTmIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDO0%2BN2kSykAovtgzECrcAwbg5Ov4acYjimK511tJmVYMTcnKzq7WN3iYKED206LaYgL38vD%2FL5Z3IEwzOyXuPNdWe4R4af8wme%2B9x9%2BTnco8QB6rvwYcBK3dT9t6ZXwg%2Bw8rwdlNK5Ofszl88cB1piU5WeX0goMXMGaxuYIRbsWrOLQ4MQd88kqWbC5Bl%2F1fr%2F4o%2FD5T4fiFEvYeADZaQgZJW%2B3pQHTUDT4oQ0ufwK0%2BL%2FUH09bdUXIu%2FEL1fhN7J2C3IGtANJvj%2FJWwZQ5V9zmNhU7yx1ewjuxFJXZjTnDGzKt7Ls9G7wjfLy4F3kvoDtzLM49msnbcXayrtz7%2BVyIkVlpkT%2FS3fHMwL6ASA96kMeOO9PDSS2VKmleVr0u946VFdu%2FGjYbI467ZHxvjTBKPSOPMYkOIWRoj6YVIhZGbx15ldFHuTbjoZUx7ie%2FXK1yxekj1zyQsR2HM5jEhqYxfD9u1VRJh3H0ebB%2BqK%2BrDKU9XR3XU%2BwUpVwDzPNQ5JmVJXgoYYQc1zJ3fXkcMTfD75t%2BQ%2Fm08gJbjB%2BzjLjoTrXC5nGZzPXi2kHYKjHxT0IruT1M2DmBakBbZR9DgYORm61lzdAsmXSTKVhrKMstOLs1R0vbZUeVtxu18k1fr3oQkE2aiCfdTMT1HMKePisoGOqUBVc6Itv0U75WbjC%2BLb5E5ls9kF4gT0QHxJTU5Qwew4wNjDV7jIKS0Cix%2F8qA8r%2FT30D9Hyqm6Dm%2FBneG3xXFGtJyyIgowWeqnwmnOz2rqRc81R%2BF9ptmxE3BeXHv0ZiAK12KsoDUsBXSYW2e778uDfT99q4Q4SKxKD7i3X5I8rj%2FhquY%2F91DUwKYbflbnlt5Ku%2FPVNzzo5VCCsey%2BbUUT4QUBZo7N&X-Amz-Signature=880087c1352a86a4c6db4ae255aff7d3a7e79d5cdb7b76850ba6db996939a684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLP2G567%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHg1bzFDZ6o2z40xBl08aVnwyH3TjMMksIRGWBBLCSBBAiEApZYBxVWeLb%2FbLZjxJKo7hCBq36p0feRASdQou3FCTmIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDO0%2BN2kSykAovtgzECrcAwbg5Ov4acYjimK511tJmVYMTcnKzq7WN3iYKED206LaYgL38vD%2FL5Z3IEwzOyXuPNdWe4R4af8wme%2B9x9%2BTnco8QB6rvwYcBK3dT9t6ZXwg%2Bw8rwdlNK5Ofszl88cB1piU5WeX0goMXMGaxuYIRbsWrOLQ4MQd88kqWbC5Bl%2F1fr%2F4o%2FD5T4fiFEvYeADZaQgZJW%2B3pQHTUDT4oQ0ufwK0%2BL%2FUH09bdUXIu%2FEL1fhN7J2C3IGtANJvj%2FJWwZQ5V9zmNhU7yx1ewjuxFJXZjTnDGzKt7Ls9G7wjfLy4F3kvoDtzLM49msnbcXayrtz7%2BVyIkVlpkT%2FS3fHMwL6ASA96kMeOO9PDSS2VKmleVr0u946VFdu%2FGjYbI467ZHxvjTBKPSOPMYkOIWRoj6YVIhZGbx15ldFHuTbjoZUx7ie%2FXK1yxekj1zyQsR2HM5jEhqYxfD9u1VRJh3H0ebB%2BqK%2BrDKU9XR3XU%2BwUpVwDzPNQ5JmVJXgoYYQc1zJ3fXkcMTfD75t%2BQ%2Fm08gJbjB%2BzjLjoTrXC5nGZzPXi2kHYKjHxT0IruT1M2DmBakBbZR9DgYORm61lzdAsmXSTKVhrKMstOLs1R0vbZUeVtxu18k1fr3oQkE2aiCfdTMT1HMKePisoGOqUBVc6Itv0U75WbjC%2BLb5E5ls9kF4gT0QHxJTU5Qwew4wNjDV7jIKS0Cix%2F8qA8r%2FT30D9Hyqm6Dm%2FBneG3xXFGtJyyIgowWeqnwmnOz2rqRc81R%2BF9ptmxE3BeXHv0ZiAK12KsoDUsBXSYW2e778uDfT99q4Q4SKxKD7i3X5I8rj%2FhquY%2F91DUwKYbflbnlt5Ku%2FPVNzzo5VCCsey%2BbUUT4QUBZo7N&X-Amz-Signature=d24a2bc3ecc3a8ef2d564434fe025c1c234032033cb37e4ccd057e591b11e0b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
