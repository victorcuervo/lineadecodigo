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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VNQGPI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWFdNLlpFc0dHQB8BthLDclPydTsjwhLgphkzL7v9RcwIhALk4Jad9qR%2F9V2TlulLY6SWUSfAW0R7ubG%2FL8WwM1BWqKv8DCHoQABoMNjM3NDIzMTgzODA1IgwLvpwvo3jpGxC5g8oq3AO8AorpHU%2BZwFnV7BK%2FYCnhWwFabjB%2Fyz6P0OvuUz%2BxLrTUM4Km1BSsNsbhzYOmli90vwsixEINBGI4yKYM7HdTlecIFgsQNMxYJ6YSWuy2CyMcayoJEVMBB1L20t6t9Ika%2BCeLbaLDrjZMQwsyv48uCujiS15gZnR1acl%2BvUi%2F3nrKyycCigEm2%2BHOIUHkRmmlbSpOyutsM2DuIhqyzXIXEAzzfT7u%2BS6WvoIv9faoNh1DzHrk0jrKdIE9aplP08VL5sbG6lfYthPUt02WN2eTaKYmQT2Q%2FcknIHjWkFG8YYrdwSY2sYdwXT%2BtHLOVe7yjmHDCxkNs02gflwzwSlX%2FdCvphEl0zZpn4%2FMFsAGZVk12XY%2FZ9SCGoVXHFNnLBgHm5bXmeGKwz%2BJ06Lv6wF8qXQUbBx3u5uxK6Xhipx3lwu2HbKXm%2FpTcot8Q6cE%2FKe6mi%2BEPLIThRdejvKiyebm9Y6cgJO0TrUvGi7n970EeAJUSfQz06396MW35AuTt%2F1nTkaQo5cqvfaQl3h6CkCh52NEK7p58q9xOYXibtgYADAc7Qutgsi8zraDp%2BlQg1sO8w%2BiqPoaMOefJj7NbnvraXJ9wWyxLOZK4e6zwVoI6xBQqsWv%2Bvk3egv0LUDDPzNHJBjqkAdVvS3r%2BkBm2jvfeg%2FlBKIlKxPflBl1gX%2F4I3T7WlKww4iKy7jwu17FapAtzCOpCJq8vZNAztnJumYDgssdvNSopqiRuDVbU6zfeKsuEbybRvlhNLHzRDzKcidAkmULHZ6bjXxFHMsmBKKMk3%2FKU5C8IG48VsUjjrpjnvw8nPshPZhEsCmqhmIVBpbquOLs5RS5fLEgHG4BK%2BdXK%2Bu3%2BOHJE2yBi&X-Amz-Signature=5b15cd7bfa3c21dd6ae3dc556f14424531f470f4c8cfbedc01d7213ee636dd6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VNQGPI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWFdNLlpFc0dHQB8BthLDclPydTsjwhLgphkzL7v9RcwIhALk4Jad9qR%2F9V2TlulLY6SWUSfAW0R7ubG%2FL8WwM1BWqKv8DCHoQABoMNjM3NDIzMTgzODA1IgwLvpwvo3jpGxC5g8oq3AO8AorpHU%2BZwFnV7BK%2FYCnhWwFabjB%2Fyz6P0OvuUz%2BxLrTUM4Km1BSsNsbhzYOmli90vwsixEINBGI4yKYM7HdTlecIFgsQNMxYJ6YSWuy2CyMcayoJEVMBB1L20t6t9Ika%2BCeLbaLDrjZMQwsyv48uCujiS15gZnR1acl%2BvUi%2F3nrKyycCigEm2%2BHOIUHkRmmlbSpOyutsM2DuIhqyzXIXEAzzfT7u%2BS6WvoIv9faoNh1DzHrk0jrKdIE9aplP08VL5sbG6lfYthPUt02WN2eTaKYmQT2Q%2FcknIHjWkFG8YYrdwSY2sYdwXT%2BtHLOVe7yjmHDCxkNs02gflwzwSlX%2FdCvphEl0zZpn4%2FMFsAGZVk12XY%2FZ9SCGoVXHFNnLBgHm5bXmeGKwz%2BJ06Lv6wF8qXQUbBx3u5uxK6Xhipx3lwu2HbKXm%2FpTcot8Q6cE%2FKe6mi%2BEPLIThRdejvKiyebm9Y6cgJO0TrUvGi7n970EeAJUSfQz06396MW35AuTt%2F1nTkaQo5cqvfaQl3h6CkCh52NEK7p58q9xOYXibtgYADAc7Qutgsi8zraDp%2BlQg1sO8w%2BiqPoaMOefJj7NbnvraXJ9wWyxLOZK4e6zwVoI6xBQqsWv%2Bvk3egv0LUDDPzNHJBjqkAdVvS3r%2BkBm2jvfeg%2FlBKIlKxPflBl1gX%2F4I3T7WlKww4iKy7jwu17FapAtzCOpCJq8vZNAztnJumYDgssdvNSopqiRuDVbU6zfeKsuEbybRvlhNLHzRDzKcidAkmULHZ6bjXxFHMsmBKKMk3%2FKU5C8IG48VsUjjrpjnvw8nPshPZhEsCmqhmIVBpbquOLs5RS5fLEgHG4BK%2BdXK%2Bu3%2BOHJE2yBi&X-Amz-Signature=8ee5e36e4367d5c6b26c657b1a461928ea6f42f65c04383ae9f9ff7ad061f887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
