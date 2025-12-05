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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PHW4MG4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1n0G82gcrGF5g5I7fFovV6rrhmKX6%2BFvKzgeKmJLmyAiEA0UYTdPM%2B4tPc9Cj9UZN8YUqxyXkbffR7mfASeaSuZegq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNiviRs8KU1IDlws5CrcA2%2B3Uy4zMaB5TFVISZiFkL8Np4XNcaIRNLqBT0BedEZ8SgPnj%2BIKpIlM3XmKjJApB1LttjR8vDM%2FmWN2ncbq6MQqbKnmkVwLJvA5b3bHg17ZTGTNZ6cn8jYk%2B%2FT%2BE74ez%2F6E%2F6Bk5jRAIq%2BDVO5wroupnhUuAeiKxJ8hJq3EplDYftYfAZncY5TqpZ%2F785qWhkLh5cmezGpgIrlkDdRcZGMUC2GatqDhkjTohRG1WS9vt%2FnYwO8ZxQEsxOfjOpkiTE8hqqj5HZ1F%2FpxW3AmDH0MzUr0i1ElTAyZHIx6tJXiyPNjQTHLIOiozlX4HOTTZ4utXUhsLRk%2BVTA3jT%2FT%2B2lMfEuNyVAWvDVKtqMCSaPOuD2DfWPsrt3OLSh%2BrsEyRcS44SvSQYZJpkRF2ZO4F6b9qih37BiA1bi8xjccTquO32E6Wr9LBaH0wumJ9JJDwg1SnXgAQIcQ0OF99GmrTZfgz9KZTKUQ0JqmbQfex%2Bc7oxaLC0JZPS7ZS4UJWaSQjYM9iniWptKvCbDoAzQUaAcQ6cgkXJ5%2BgQPnzuFR%2FsxXvM%2FIUUvsWkshbiXWcUO5S0NzSUUWz3jzQXKiIK0VTFZ9zfNCDgJRm8yxC8HK6Dn0GSj5ejzGCA473l5Q3MKiMyMkGOqUBlo0Y3cDMbH3%2FhYUIRGTBUmvnJdnjt0GDMZzZXESqNMhVwDi09yVfxdc%2F25wPHEGhcXlwBSNuZarPsSEdZGttx70QzTxMhgWGe%2FwSZpGrIgEuvHYBfQijhxRIai5fHmzkNlUSXfsFT4s%2BHA7wRt2m9rDjKpY%2B49EXIssNCheo%2B6lblogpCYNtB3MlSMXP3o0chzGvLaJfVp2PhrKmffKOJY83%2FpEG&X-Amz-Signature=a52a1bcc607fb7233c1c590850bc4a92024e90e1c8f22f74e1f9481f5e43e7d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PHW4MG4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1n0G82gcrGF5g5I7fFovV6rrhmKX6%2BFvKzgeKmJLmyAiEA0UYTdPM%2B4tPc9Cj9UZN8YUqxyXkbffR7mfASeaSuZegq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNiviRs8KU1IDlws5CrcA2%2B3Uy4zMaB5TFVISZiFkL8Np4XNcaIRNLqBT0BedEZ8SgPnj%2BIKpIlM3XmKjJApB1LttjR8vDM%2FmWN2ncbq6MQqbKnmkVwLJvA5b3bHg17ZTGTNZ6cn8jYk%2B%2FT%2BE74ez%2F6E%2F6Bk5jRAIq%2BDVO5wroupnhUuAeiKxJ8hJq3EplDYftYfAZncY5TqpZ%2F785qWhkLh5cmezGpgIrlkDdRcZGMUC2GatqDhkjTohRG1WS9vt%2FnYwO8ZxQEsxOfjOpkiTE8hqqj5HZ1F%2FpxW3AmDH0MzUr0i1ElTAyZHIx6tJXiyPNjQTHLIOiozlX4HOTTZ4utXUhsLRk%2BVTA3jT%2FT%2B2lMfEuNyVAWvDVKtqMCSaPOuD2DfWPsrt3OLSh%2BrsEyRcS44SvSQYZJpkRF2ZO4F6b9qih37BiA1bi8xjccTquO32E6Wr9LBaH0wumJ9JJDwg1SnXgAQIcQ0OF99GmrTZfgz9KZTKUQ0JqmbQfex%2Bc7oxaLC0JZPS7ZS4UJWaSQjYM9iniWptKvCbDoAzQUaAcQ6cgkXJ5%2BgQPnzuFR%2FsxXvM%2FIUUvsWkshbiXWcUO5S0NzSUUWz3jzQXKiIK0VTFZ9zfNCDgJRm8yxC8HK6Dn0GSj5ejzGCA473l5Q3MKiMyMkGOqUBlo0Y3cDMbH3%2FhYUIRGTBUmvnJdnjt0GDMZzZXESqNMhVwDi09yVfxdc%2F25wPHEGhcXlwBSNuZarPsSEdZGttx70QzTxMhgWGe%2FwSZpGrIgEuvHYBfQijhxRIai5fHmzkNlUSXfsFT4s%2BHA7wRt2m9rDjKpY%2B49EXIssNCheo%2B6lblogpCYNtB3MlSMXP3o0chzGvLaJfVp2PhrKmffKOJY83%2FpEG&X-Amz-Signature=651ac69f6535ed5a72c80eb8c81daeb5e3d4d126d60380cdd348a8a582cb61a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
