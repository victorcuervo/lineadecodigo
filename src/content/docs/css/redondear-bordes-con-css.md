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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHU5EQ6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4mLlgxo2MXzq0%2Fg6OmVoDXf%2F%2BbD%2BlURTs4sh9VQsc%2FAiA1NbtdLq%2BTS3MoHxzeuPIJh%2BtaA5z94n7cveLsKTWcESqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQIk9We3%2Bj%2BT6cswhKtwDYIJpUwNvS513YGMZknTo%2F%2BoKdDHMYyjkAskAXnP2HKg95URWA91uCNfzXNfbi1TJorLXaUwd3dTMz6myLc0mxYE9%2BZGPgrs7LhXkbwNeQ5jiRTmE0j%2BX6ojvJZlrZJ%2Bo1lQ4GlrJO0nJirqJKESAu884yN0Ph0BBJd67%2F4AYUqqikSQEg1md6jwImXe6ceY6SlbPriPTQgYYJPc7JBxz9Fft2r40JBJJ3jA9KmWJ7gvitRUELlOSn%2BRU8jboALQbVvccyHXt%2FNj8sSJoKevPmb34wqE%2BhuG9RezcuHKroiDKTC7Zwix1cn2fC4mLz%2BsxgVEJEqT8CRizRjHld504IKfWLz8mAdQ%2Fq7wwuX7HYGhKbG0R791Z9QxMTjysNwlIQ3M%2BuAmIyzVhos%2F9J0KI6xJ38wn0xvBdbAyu13ZYJULBCj4VeKpA82E%2F0OA2l0%2FS1lRjgEdqM5%2BxiF9rJafFR7IjQi%2FjTEfoE1B09AR4U2MD8%2BU10p%2F%2Fz9%2FYyE6kZ7yWjaAPnoT1sfF3Vxj7O8tmgA5Ck3mUhsE3lejKszFBdPHG83UQWsvjJtzhufxV7YRRpLdm9%2F4U5qWLCdsoxJmN0WOqV5bygE254yEfwcp36uXSTttejrhh9mp7xtQwgMPdyQY6pgECWjJYLofvBVRmar06lbh2mDhcUb5pbdzaGZ29NBcXXTiM4MYRsLdAS53VCjBqb9LUOO%2BydUj6H9o11U00eMKZWEsl39eQQzK90PWDew%2BrFAYc7t6VnK0ywviIOxum20vEom00jZg2Ze3P1l4gq4t0FPQMu1dk%2BicnRuJppFyCtgZ7hJeAk9bb0NtDqpjXV8Tl203OIY4dgDWcwjHebWVtGnevIdgB&X-Amz-Signature=ec28050d2fc22ff2b16cc23800af741fcfee45c10b968e53b461584e541b0b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHU5EQ6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4mLlgxo2MXzq0%2Fg6OmVoDXf%2F%2BbD%2BlURTs4sh9VQsc%2FAiA1NbtdLq%2BTS3MoHxzeuPIJh%2BtaA5z94n7cveLsKTWcESqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQIk9We3%2Bj%2BT6cswhKtwDYIJpUwNvS513YGMZknTo%2F%2BoKdDHMYyjkAskAXnP2HKg95URWA91uCNfzXNfbi1TJorLXaUwd3dTMz6myLc0mxYE9%2BZGPgrs7LhXkbwNeQ5jiRTmE0j%2BX6ojvJZlrZJ%2Bo1lQ4GlrJO0nJirqJKESAu884yN0Ph0BBJd67%2F4AYUqqikSQEg1md6jwImXe6ceY6SlbPriPTQgYYJPc7JBxz9Fft2r40JBJJ3jA9KmWJ7gvitRUELlOSn%2BRU8jboALQbVvccyHXt%2FNj8sSJoKevPmb34wqE%2BhuG9RezcuHKroiDKTC7Zwix1cn2fC4mLz%2BsxgVEJEqT8CRizRjHld504IKfWLz8mAdQ%2Fq7wwuX7HYGhKbG0R791Z9QxMTjysNwlIQ3M%2BuAmIyzVhos%2F9J0KI6xJ38wn0xvBdbAyu13ZYJULBCj4VeKpA82E%2F0OA2l0%2FS1lRjgEdqM5%2BxiF9rJafFR7IjQi%2FjTEfoE1B09AR4U2MD8%2BU10p%2F%2Fz9%2FYyE6kZ7yWjaAPnoT1sfF3Vxj7O8tmgA5Ck3mUhsE3lejKszFBdPHG83UQWsvjJtzhufxV7YRRpLdm9%2F4U5qWLCdsoxJmN0WOqV5bygE254yEfwcp36uXSTttejrhh9mp7xtQwgMPdyQY6pgECWjJYLofvBVRmar06lbh2mDhcUb5pbdzaGZ29NBcXXTiM4MYRsLdAS53VCjBqb9LUOO%2BydUj6H9o11U00eMKZWEsl39eQQzK90PWDew%2BrFAYc7t6VnK0ywviIOxum20vEom00jZg2Ze3P1l4gq4t0FPQMu1dk%2BicnRuJppFyCtgZ7hJeAk9bb0NtDqpjXV8Tl203OIY4dgDWcwjHebWVtGnevIdgB&X-Amz-Signature=f6832a318b80709633acbbf0fde4c636bfa410ae5a545c90e0a2e86d9fef16d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
