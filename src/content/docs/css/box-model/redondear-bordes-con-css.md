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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSAFMGHZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV597wEysW%2F6gg4i3oNZTAzrj2QsAYDiM0nHKKPusAYAiA2e7ngsBovZcX2wYWjQn6ODK1f1cCcL3fHViYR9JMkaCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM27DcoVW00kHeggFxKtwDvwONVvYM0L7i%2Fe68D%2Fy2YL8Ioals7IdO1d4HutJh9LeZ81Cy98IePiUkHUPp%2BQiISeLoURQfDtuAweS%2FRv0sTY7bSSRKbQXTOLtkRtJDDlJ5WfI676xnzlgM54hJSRX8p8%2BD1DskiaUPPe5LAjmfalCjOqw1xOxdbTjApV1ZyCGVr2rDDPReNVdA3LrfGCmAYYzS9OCNMl0SgK26ww8qODneLrg0lTwDvTI1LIT7dNgjJW281rameBhqn41LIeZzC02wZAlv4zT%2F4U7m5G009W9u%2F%2BCSwOWTLH6i71QLrKe8NJC8RLGj565P0sycCkyll%2BqnA3YOd%2Fwya0HA7z5IDxSzVsW3IpN5Y95AkbgRMECgOYFlO6nSxf745hCrYD7HOsfy3VvVvuxmxvCc5OXxYv595tgdMEb0PSNHVj288Fh62CsURJaT3fBzk8VsaLVulN11Q7EWaJMP1xANRqznjVVvtxidf90RC9vO%2FxG%2FFHwk5vFufJhuytPvs9DigmDl7XHAcoYpNvruBngzwuSrYkYJWU57x%2FhFV614MwfuoWVd5DeRhj6klJ%2FqAVE39BWx3K%2B70h90%2FapovS%2BEpg3pjd%2FZLHbVfDavlWtUV1g%2Fb9xi3ADte5Ck%2BlvO3TAw8uGKygY6pgFzLiMavBYnYxYlpXhfdxAgiPFcFmNlPmZXitFQko5fr%2BPTwCvNMfiTilTMtLM%2B7idOL3oxZU1vUCRAKaPWZ4lk%2F4shP21R6k0WoVUtSdTyyTVDcWBRqUQSqPFo%2FzOa1pwn133mkNQskGbluU%2FPOiWxbxkxGvXdXGkEL4oNq4tkOlwdSxcfFjAilkXnsDFyb8NxLmDWKeKCUVytJNZjxBzBhC2%2FNOc%2B&X-Amz-Signature=e9ce4cd6e18a15ad9d9f1712b47235c31519010cec3bcf4ba9ac09bb903169b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSAFMGHZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV597wEysW%2F6gg4i3oNZTAzrj2QsAYDiM0nHKKPusAYAiA2e7ngsBovZcX2wYWjQn6ODK1f1cCcL3fHViYR9JMkaCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM27DcoVW00kHeggFxKtwDvwONVvYM0L7i%2Fe68D%2Fy2YL8Ioals7IdO1d4HutJh9LeZ81Cy98IePiUkHUPp%2BQiISeLoURQfDtuAweS%2FRv0sTY7bSSRKbQXTOLtkRtJDDlJ5WfI676xnzlgM54hJSRX8p8%2BD1DskiaUPPe5LAjmfalCjOqw1xOxdbTjApV1ZyCGVr2rDDPReNVdA3LrfGCmAYYzS9OCNMl0SgK26ww8qODneLrg0lTwDvTI1LIT7dNgjJW281rameBhqn41LIeZzC02wZAlv4zT%2F4U7m5G009W9u%2F%2BCSwOWTLH6i71QLrKe8NJC8RLGj565P0sycCkyll%2BqnA3YOd%2Fwya0HA7z5IDxSzVsW3IpN5Y95AkbgRMECgOYFlO6nSxf745hCrYD7HOsfy3VvVvuxmxvCc5OXxYv595tgdMEb0PSNHVj288Fh62CsURJaT3fBzk8VsaLVulN11Q7EWaJMP1xANRqznjVVvtxidf90RC9vO%2FxG%2FFHwk5vFufJhuytPvs9DigmDl7XHAcoYpNvruBngzwuSrYkYJWU57x%2FhFV614MwfuoWVd5DeRhj6klJ%2FqAVE39BWx3K%2B70h90%2FapovS%2BEpg3pjd%2FZLHbVfDavlWtUV1g%2Fb9xi3ADte5Ck%2BlvO3TAw8uGKygY6pgFzLiMavBYnYxYlpXhfdxAgiPFcFmNlPmZXitFQko5fr%2BPTwCvNMfiTilTMtLM%2B7idOL3oxZU1vUCRAKaPWZ4lk%2F4shP21R6k0WoVUtSdTyyTVDcWBRqUQSqPFo%2FzOa1pwn133mkNQskGbluU%2FPOiWxbxkxGvXdXGkEL4oNq4tkOlwdSxcfFjAilkXnsDFyb8NxLmDWKeKCUVytJNZjxBzBhC2%2FNOc%2B&X-Amz-Signature=0f702e142b9a8c9ae7c25618ded46dfbb460233faef5d8e426fc3ca9a00156fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
