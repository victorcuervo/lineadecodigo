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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRFKE364%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgoke73YSy2WLRtKH0LUGO5gGzOPs7bUdt3ZSd6lOesAiAg%2FfRZNWZ8WlxX%2BBLgAQs49YwDgu7WzJydX7%2BpEup6%2FSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMYeFlOGD0WwmXvZuvKtwDeHSRiC%2BZ0W03wTDAc2nJtkqskYRDOPLg%2BxIoaCnhyVIK4eUZd7sYumyBDr6n2MaxCtTIQv5rByTvAypZLy5yH91a%2FPZm3oArAPkp0aKV5iKHlSBsJAer5HanLiHf5NFwpddmXzPMsLpaSr1a92stfoAMRAkpxV9yHy426I4umU9l7zkdQjj2eRRTHCcOwL2DhWb3eLy%2FiZbtnr%2FRk%2FMiWSK79Bk1yAQVtaCSpa043g4rjOJXvetYwPmdrOlYZL2XB%2BudyLkhc%2FJuDQhNY8z%2BhUeMLnC3WcxK8JhJy3VfX7E3TI5fKIvhROiXecmoUsg3OkfVqz4saYELRpvoRKFArss5Amexdfj7wdQ9aJpWlRJwaSUoLit5gM1otBiTVlj02rKUmgqmsfEQ6V9yKqhjxGzF4wf4oN40aDG92P6pDihwv26AWXkm1mlq537FDx0p16nb6TzzTFtxoBXT8GIsv%2FzIg7hE8eiTDjxt52XjOGkz%2BvVD0MtxREc9ia6ThEtmeoTJAtY0YUmySlT6YI%2FWlsJf%2BOU28CrlGlMxDtdeRmQNR9qX7be1TL8mAt%2Fi8UxJWrok2hDo5tEJGtlXhybfZf5rsuLkC90zoLY4Q1hlAcEyVRCd8%2FcElr3eB%2Fkw%2Fa%2FJyQY6pgFAJUC%2BPMu5iR4Dw9Ka3A0B176DbwS%2B%2FiDPmtgd4r1asMyRzAx%2FKNgWnOM8JjIpjyve2%2BvimWk2X2TgH0pIAe3HmjBgJ6MacFFuaMtlKLOE%2BNVpWphUyAaFKFaIFguSi4LMO6f9wgaYs%2BYS0cBX3H8vlR5wOQnDtXwnZvDA9%2B%2BU5k6u5Hswg4wM%2FqG%2BYwGsrumqP5Yk%2BoDT5dTfIJs5oAI6hej%2F%2FZZI&X-Amz-Signature=d0cf8f909128bef190365c7a7ed0d3d2f6792c2f013146900e720ad05053ad08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRFKE364%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgoke73YSy2WLRtKH0LUGO5gGzOPs7bUdt3ZSd6lOesAiAg%2FfRZNWZ8WlxX%2BBLgAQs49YwDgu7WzJydX7%2BpEup6%2FSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMYeFlOGD0WwmXvZuvKtwDeHSRiC%2BZ0W03wTDAc2nJtkqskYRDOPLg%2BxIoaCnhyVIK4eUZd7sYumyBDr6n2MaxCtTIQv5rByTvAypZLy5yH91a%2FPZm3oArAPkp0aKV5iKHlSBsJAer5HanLiHf5NFwpddmXzPMsLpaSr1a92stfoAMRAkpxV9yHy426I4umU9l7zkdQjj2eRRTHCcOwL2DhWb3eLy%2FiZbtnr%2FRk%2FMiWSK79Bk1yAQVtaCSpa043g4rjOJXvetYwPmdrOlYZL2XB%2BudyLkhc%2FJuDQhNY8z%2BhUeMLnC3WcxK8JhJy3VfX7E3TI5fKIvhROiXecmoUsg3OkfVqz4saYELRpvoRKFArss5Amexdfj7wdQ9aJpWlRJwaSUoLit5gM1otBiTVlj02rKUmgqmsfEQ6V9yKqhjxGzF4wf4oN40aDG92P6pDihwv26AWXkm1mlq537FDx0p16nb6TzzTFtxoBXT8GIsv%2FzIg7hE8eiTDjxt52XjOGkz%2BvVD0MtxREc9ia6ThEtmeoTJAtY0YUmySlT6YI%2FWlsJf%2BOU28CrlGlMxDtdeRmQNR9qX7be1TL8mAt%2Fi8UxJWrok2hDo5tEJGtlXhybfZf5rsuLkC90zoLY4Q1hlAcEyVRCd8%2FcElr3eB%2Fkw%2Fa%2FJyQY6pgFAJUC%2BPMu5iR4Dw9Ka3A0B176DbwS%2B%2FiDPmtgd4r1asMyRzAx%2FKNgWnOM8JjIpjyve2%2BvimWk2X2TgH0pIAe3HmjBgJ6MacFFuaMtlKLOE%2BNVpWphUyAaFKFaIFguSi4LMO6f9wgaYs%2BYS0cBX3H8vlR5wOQnDtXwnZvDA9%2B%2BU5k6u5Hswg4wM%2FqG%2BYwGsrumqP5Yk%2BoDT5dTfIJs5oAI6hej%2F%2FZZI&X-Amz-Signature=55f5f6cebd57ce8078bfc97b570f246ea072c8cb1f99c8d048f9358627fc8c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
