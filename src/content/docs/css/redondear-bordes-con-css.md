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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX6RVVBY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX%2Bppf5%2BuXtII7mpsJVbbZsj3YR4HjiLc5RXcQLIsF%2BQIhAJiLF9T30GU2U%2F9mY8IMxhqK4gUOtNEckejRzT7ufoDzKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaJd1mEFpFwn7FpEcq3ANjkiMiNX3tOZSwX2iDXvh61fbINw%2BaYjp4t7HCJrR9BMCQ62ZaiLIOvzJ0RwPB8vs%2FxhiKpWEMBIKqJ2CnctUzr6BpKKRDh%2Fc91QbbehqWifHTiEe86Rb8Sbru37B1a%2FFQs3hmvJ%2BG2JBaR3X%2BGfDj%2BU8AanT7l5eucXMUlm0csnFpwATq8fi85d%2BfrOcXe6bTh6N5GY4OThFuKV24ziUTZleyM8D8hU%2BF8zguFOqOwGlwyJHHwpe12Ex%2FKXay5%2FlIrWcGPOQ5IWKt8AV8bSy001HHuhkHPcAf66UQpHtNieNRJFM2Gd%2Bw9ilyRWy5U1%2B8V63J%2F69EWtB2EigTNR7q63yzBgYjgyqq3PuI1RVcc%2FAF9m6pb1Xel8KKEalhOPKcRnglH4Ms3q%2BEclqbpOWM7wDWHUKLnFYL%2BpUdZfQSSQwwI3dE%2BDP76PIg7GbdbM0c3mSSMi6q50blUFliMFSzMxsfJMZmddiGnEu%2B6h2kRKmHF6hKGRoQZzrNMjxjMwAiHvhVI2%2FIsQwEkHTj40wnkV%2FaUhUAsIKBkK4UpYQ52YK7YN5P65w0vhG4aZ6SpN3XqZl%2BdSQq5PmYkxqOnGE8BYL9xIuFKHKWMYGw45fMIDolyWA8b7h0Nu5IujCv%2FtLJBjqkAb%2FboCGG3Q7T6K273P5DqKdrU7hj3Y%2Bt53yLk4PiNTrpuLmMe9wwEoNM68o5L7zCAvo5IsqJTm8hWsrLEws%2Bbhkn2CLTJzsMaGCqDKX8N8uYFj%2FF%2B0dRL%2FZp5RKofYojMJzZW8JVPtRMzYKqttZ4rTGPWOzWkvt%2FvTst3LlRZSOs6I199mau6VFOvpUjmqDMGJATlRjBAQLUS72qQpMenmichZdL&X-Amz-Signature=56f5ab119d9476b4f463e7be24ada6bb586db57f26b1438a96af03feefef3599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX6RVVBY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX%2Bppf5%2BuXtII7mpsJVbbZsj3YR4HjiLc5RXcQLIsF%2BQIhAJiLF9T30GU2U%2F9mY8IMxhqK4gUOtNEckejRzT7ufoDzKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaJd1mEFpFwn7FpEcq3ANjkiMiNX3tOZSwX2iDXvh61fbINw%2BaYjp4t7HCJrR9BMCQ62ZaiLIOvzJ0RwPB8vs%2FxhiKpWEMBIKqJ2CnctUzr6BpKKRDh%2Fc91QbbehqWifHTiEe86Rb8Sbru37B1a%2FFQs3hmvJ%2BG2JBaR3X%2BGfDj%2BU8AanT7l5eucXMUlm0csnFpwATq8fi85d%2BfrOcXe6bTh6N5GY4OThFuKV24ziUTZleyM8D8hU%2BF8zguFOqOwGlwyJHHwpe12Ex%2FKXay5%2FlIrWcGPOQ5IWKt8AV8bSy001HHuhkHPcAf66UQpHtNieNRJFM2Gd%2Bw9ilyRWy5U1%2B8V63J%2F69EWtB2EigTNR7q63yzBgYjgyqq3PuI1RVcc%2FAF9m6pb1Xel8KKEalhOPKcRnglH4Ms3q%2BEclqbpOWM7wDWHUKLnFYL%2BpUdZfQSSQwwI3dE%2BDP76PIg7GbdbM0c3mSSMi6q50blUFliMFSzMxsfJMZmddiGnEu%2B6h2kRKmHF6hKGRoQZzrNMjxjMwAiHvhVI2%2FIsQwEkHTj40wnkV%2FaUhUAsIKBkK4UpYQ52YK7YN5P65w0vhG4aZ6SpN3XqZl%2BdSQq5PmYkxqOnGE8BYL9xIuFKHKWMYGw45fMIDolyWA8b7h0Nu5IujCv%2FtLJBjqkAb%2FboCGG3Q7T6K273P5DqKdrU7hj3Y%2Bt53yLk4PiNTrpuLmMe9wwEoNM68o5L7zCAvo5IsqJTm8hWsrLEws%2Bbhkn2CLTJzsMaGCqDKX8N8uYFj%2FF%2B0dRL%2FZp5RKofYojMJzZW8JVPtRMzYKqttZ4rTGPWOzWkvt%2FvTst3LlRZSOs6I199mau6VFOvpUjmqDMGJATlRjBAQLUS72qQpMenmichZdL&X-Amz-Signature=78b923a8a724baced588f339d2ae8d2ec21f833c1303a7eacc22ebf1567e2512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
