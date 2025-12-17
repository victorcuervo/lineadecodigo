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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CWEZHU3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwx0GOPbv%2BUjUDihHPIUImKIWk2ImP5TGOGkYQZBdbEAiBKfcGw%2BUNDaif4Iui4UbJwJOq0V6DWkUlES730S4PN2yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2uAwgJV7bdQIYHN%2BKtwD4RYJuzAomQz3zhWU%2Ffc8WiW%2BLXtsXr8JjStkY0OwjOblEjd13n0qg8nx%2FPeteu4cWDKYVo%2FpbdtRKBy0tZMOqIAObqHSBUQRj3BhUf7F%2BM4qXhwgdY484V7ByANVYMIONnmgIRkzanwQRscEvPxtq55q3qi27GYb6p%2F1LyZFQPxMHSw23hTQE%2FeXIRI8i6GlbqTmDSDiHEMyBphg26VYhg%2BRj%2BHnRb2PoOTpD3sD1FQ4kwFsgnLjnqeaBInPgamyFE%2FG4Ajp0KWn8KoDc9J38EuEYcvMRZMSULvhLpgFlpAW4%2FpgMJCtOvu5OLcvi3r7R6lqCgQk%2FuTREu07%2F6uasbTbfncae%2FLkglQAboe92iGW2YQe%2Fqo%2FuktHXzz2Ei1F1ODcMlWvW1U38Mb53b1SRt%2B8UnmS6aX1YcWqZ%2BRkeR1YVWdO62yg3pkjD9pD4Q7LdGSwIuo7oVRBzc5xM90AxyrqfKUkGgqF2MqV%2B1hPrgLiygbTQeecMr9i996rMP8RrrkxJto45694U2rsjLkKPpLY0lNWfiGrzbApb5zZ4GK5Bvhak44GRNodse1jWaKjFoy7v%2Bltn1h5gIOTekEetTe0WFWnbeWCDn8EWipwY9nv9D%2BUOYFZYpV8wdAwn4OJygY6pgEsLFqdGgdit4oKq33ePaBgALTxCryW4JKanqLK%2BnoJunKvcUAwAfxjMGdSXD36bhrXe97H8fTGFJ9cfAIH5PeR1xEKguhd29NfZOQGyrywLieGtuEsThaTahgDNGwCWcEnt%2FGbNPRU4%2FlaxcgoEX%2BJ52Ppfz48zYW%2B3kbPzezWIQp%2B%2BRUIOSBjcMqv2fmJTRu3kcjIaOKNPDdSC04tWQL9ysU%2B%2FGep&X-Amz-Signature=988644cc0334a619d080efe63d527847322d29faa0d28fd400d9ab8c2f740d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CWEZHU3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwx0GOPbv%2BUjUDihHPIUImKIWk2ImP5TGOGkYQZBdbEAiBKfcGw%2BUNDaif4Iui4UbJwJOq0V6DWkUlES730S4PN2yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2uAwgJV7bdQIYHN%2BKtwD4RYJuzAomQz3zhWU%2Ffc8WiW%2BLXtsXr8JjStkY0OwjOblEjd13n0qg8nx%2FPeteu4cWDKYVo%2FpbdtRKBy0tZMOqIAObqHSBUQRj3BhUf7F%2BM4qXhwgdY484V7ByANVYMIONnmgIRkzanwQRscEvPxtq55q3qi27GYb6p%2F1LyZFQPxMHSw23hTQE%2FeXIRI8i6GlbqTmDSDiHEMyBphg26VYhg%2BRj%2BHnRb2PoOTpD3sD1FQ4kwFsgnLjnqeaBInPgamyFE%2FG4Ajp0KWn8KoDc9J38EuEYcvMRZMSULvhLpgFlpAW4%2FpgMJCtOvu5OLcvi3r7R6lqCgQk%2FuTREu07%2F6uasbTbfncae%2FLkglQAboe92iGW2YQe%2Fqo%2FuktHXzz2Ei1F1ODcMlWvW1U38Mb53b1SRt%2B8UnmS6aX1YcWqZ%2BRkeR1YVWdO62yg3pkjD9pD4Q7LdGSwIuo7oVRBzc5xM90AxyrqfKUkGgqF2MqV%2B1hPrgLiygbTQeecMr9i996rMP8RrrkxJto45694U2rsjLkKPpLY0lNWfiGrzbApb5zZ4GK5Bvhak44GRNodse1jWaKjFoy7v%2Bltn1h5gIOTekEetTe0WFWnbeWCDn8EWipwY9nv9D%2BUOYFZYpV8wdAwn4OJygY6pgEsLFqdGgdit4oKq33ePaBgALTxCryW4JKanqLK%2BnoJunKvcUAwAfxjMGdSXD36bhrXe97H8fTGFJ9cfAIH5PeR1xEKguhd29NfZOQGyrywLieGtuEsThaTahgDNGwCWcEnt%2FGbNPRU4%2FlaxcgoEX%2BJ52Ppfz48zYW%2B3kbPzezWIQp%2B%2BRUIOSBjcMqv2fmJTRu3kcjIaOKNPDdSC04tWQL9ysU%2B%2FGep&X-Amz-Signature=dbf43f000dd842806d2e5366b5c64b3d30599cb624602c3da985d6982e4e40c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
