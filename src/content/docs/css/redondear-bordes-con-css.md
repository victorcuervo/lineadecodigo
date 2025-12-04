---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPO4LN4A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDW3n9grX6b6FXtqx3VCa6gaohqaB7GNHHe%2F3F93KQ%2BDAIgT9gnd7VAogR3XIGuy6Mpu9Zon3o%2Bjo6Tog8gSs2pz%2FQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFFEZrDdFJn4%2BpcHBCrcA6QtyZOv1FALAyT21rSQvjZc3Y%2FOeIz8GnToeuhrPbMoSJiZS%2Fk%2FF95YeLC%2F0ErnI1I19Fgiicitmaqm08PdELDXq1QLAs4dV0neE8xmOmLEvkDIcjQJw0G1Fj4h%2FTLw8qZtwKZAIfMZdh%2FcEfUKhBx%2FrDZmuDVx7tN3Gz6X9Mpvslkmx48FTHku3H2qhqv2FiGlCQ0p815NUrM5WkKYzdDII2QtCDswJGztc262I7p8cviL550tubDTS8EnrcelkQ3s95RkKACCLRvxffqM9OSVJSW0SqtdVZPUiUcUi%2FNdZj6bHqJ%2FSYOPPp3yoa0%2F237WrO8uHAno7nMaDphwAW0stMg%2F5O6LR9QdWh%2FtjdSpwF7wAenXScFhjtmiojRhjiV4ukQEXGYiaq2qkqiU0sGPrGcJLGBFJ3x7Kf5BPUOrJEyrEjg4KpcLDGE1eiM26qdSzjf5uOlogMiLlQBnmjME9WpPWoxyFC84zY6SzV5u3u7cdqTeUQgG1%2FLQTuiQS0T3epCtfZd8QlyfZdfzLIJM5edHLubdKVYkVmWWS8NG1V4BUqMadVAd8PS3i%2FlSWdad9SASiKIwV5MmeBnEJUzVDw3BlEa0z7U8K8GYrPPki8SAtfzEDfQ3n5ILMPbzw8kGOqUBbDkTT3ZElwkl6NoJH2T9W5N%2FUFbUsx0PoLNY9t%2BYWzwZ54zkeHBAN0YLH9g5V3LF3TXltsU2QIJEH1PWQja%2FMfak1j8XjuFGT3nApGFXR7vNjbdMfXKNxjo9OoK0mqCv2FvmE0RbfkXNxmV7niYxc2AfrB4Bpjno%2FZU4SmNs7y6pBA6aCrJA1LNQzmUbA1W1rf2hNc%2FtnE%2BpJN72zRZyRSCK4vJk&X-Amz-Signature=964ec5f5193518b702be3da9d298759a77e1a2c3be0a4537c17aec1e4f405ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPO4LN4A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDW3n9grX6b6FXtqx3VCa6gaohqaB7GNHHe%2F3F93KQ%2BDAIgT9gnd7VAogR3XIGuy6Mpu9Zon3o%2Bjo6Tog8gSs2pz%2FQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFFEZrDdFJn4%2BpcHBCrcA6QtyZOv1FALAyT21rSQvjZc3Y%2FOeIz8GnToeuhrPbMoSJiZS%2Fk%2FF95YeLC%2F0ErnI1I19Fgiicitmaqm08PdELDXq1QLAs4dV0neE8xmOmLEvkDIcjQJw0G1Fj4h%2FTLw8qZtwKZAIfMZdh%2FcEfUKhBx%2FrDZmuDVx7tN3Gz6X9Mpvslkmx48FTHku3H2qhqv2FiGlCQ0p815NUrM5WkKYzdDII2QtCDswJGztc262I7p8cviL550tubDTS8EnrcelkQ3s95RkKACCLRvxffqM9OSVJSW0SqtdVZPUiUcUi%2FNdZj6bHqJ%2FSYOPPp3yoa0%2F237WrO8uHAno7nMaDphwAW0stMg%2F5O6LR9QdWh%2FtjdSpwF7wAenXScFhjtmiojRhjiV4ukQEXGYiaq2qkqiU0sGPrGcJLGBFJ3x7Kf5BPUOrJEyrEjg4KpcLDGE1eiM26qdSzjf5uOlogMiLlQBnmjME9WpPWoxyFC84zY6SzV5u3u7cdqTeUQgG1%2FLQTuiQS0T3epCtfZd8QlyfZdfzLIJM5edHLubdKVYkVmWWS8NG1V4BUqMadVAd8PS3i%2FlSWdad9SASiKIwV5MmeBnEJUzVDw3BlEa0z7U8K8GYrPPki8SAtfzEDfQ3n5ILMPbzw8kGOqUBbDkTT3ZElwkl6NoJH2T9W5N%2FUFbUsx0PoLNY9t%2BYWzwZ54zkeHBAN0YLH9g5V3LF3TXltsU2QIJEH1PWQja%2FMfak1j8XjuFGT3nApGFXR7vNjbdMfXKNxjo9OoK0mqCv2FvmE0RbfkXNxmV7niYxc2AfrB4Bpjno%2FZU4SmNs7y6pBA6aCrJA1LNQzmUbA1W1rf2hNc%2FtnE%2BpJN72zRZyRSCK4vJk&X-Amz-Signature=e6abd52d56ee85a428400c2243dafa060c7fe17ffda2cb79fdd8f7f823934c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
