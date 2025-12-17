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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB32X5KS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7cj3kkw%2FIPSs32mb5mP1LOG024UUdjfmIyLPd7zWv8AiABEcsk5Zp6pE7bJOu%2FpJOJpK1dBKMipYRl61p%2FkdFRsir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM8FUV4Mlmmc4wjdfWKtwDidO2ecZVWYxjJ0Fh87sgbI4Gce4f9is7DlQ99JnzB%2BCTLC1XqbASYrpEIlYnlVz9bkygOanDuLdYOD0Cgh%2F4M6FMfTAhhUtsVsxzLx4HpYHhvliAATjR7R%2BSbTVKpAvyBpNKTpy48RUn1yUMSCdzPy3P7pwfy58V2aEj1e9ogbRkwozJOgkX%2BdEB6uVcdKJDvO0SX5YPss9rsU%2FCB0AfFdv7pX%2FHnu0oDU8ntlS2vhPTEGYXO912ldNw9ik20mpOokv4uSgw78Q9qZYhmDU7fgoz2uuD4p7mdMDtoFATSoEqYV%2FmxBzRbQWEqucIEN567WhWZ4uEUEBWDHIbeMdLSCx1WOWaKop%2FsD5n5MCwLQNuTkXiD2JYpdGzJ%2FJNUcijvResJz3d4Ml%2FG6ikQDreUYdG2MQwOSuM0eHvgvLTzyKHVRDWLeWOOKOZl52obulUJChlQTVp5CGw%2FWpOgVLLu6aZFuq2nXSCMM2%2BaBngX7GqPBdWsolLrWsGzKTCcSVd0UiafsM%2F6StjLIRc1akJyuv8SdxKCzC%2Bl%2FlXbcOe1P2iPHXo1ihjuWUI72BMzRltJqdHk%2Fj%2FEQ7K7fQjOVk0Q%2BozgVrxMkT1eLsCJlh%2F0eObEn2UHaIn4WBPCXwwqtKJygY6pgECAaLpgy%2BsDqsA3v6Amxr6c9wRSihRRv5zEScQDi5qYH2qJh0BWCPg095IkAIx9t6iR33qem2vLwaxNLcSiyDJOvUdi6TiIFAABQsPeszxUb5Y%2FLK2HDDXf0zl3gwqYi%2Fico%2FIMuFV40Zfq0vZSFd0NYKWxpJw5yW%2Bi0yvE1jqwcYPNBTL%2BN5ICTGHt9h%2Fo%2BopxqwXf%2BouUs7o4IiOjiaRkJtOUOYy&X-Amz-Signature=2ff78ab7e7c3ea08382643a7b0b029166e101b7c861ae83938713e38de5562e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB32X5KS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7cj3kkw%2FIPSs32mb5mP1LOG024UUdjfmIyLPd7zWv8AiABEcsk5Zp6pE7bJOu%2FpJOJpK1dBKMipYRl61p%2FkdFRsir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM8FUV4Mlmmc4wjdfWKtwDidO2ecZVWYxjJ0Fh87sgbI4Gce4f9is7DlQ99JnzB%2BCTLC1XqbASYrpEIlYnlVz9bkygOanDuLdYOD0Cgh%2F4M6FMfTAhhUtsVsxzLx4HpYHhvliAATjR7R%2BSbTVKpAvyBpNKTpy48RUn1yUMSCdzPy3P7pwfy58V2aEj1e9ogbRkwozJOgkX%2BdEB6uVcdKJDvO0SX5YPss9rsU%2FCB0AfFdv7pX%2FHnu0oDU8ntlS2vhPTEGYXO912ldNw9ik20mpOokv4uSgw78Q9qZYhmDU7fgoz2uuD4p7mdMDtoFATSoEqYV%2FmxBzRbQWEqucIEN567WhWZ4uEUEBWDHIbeMdLSCx1WOWaKop%2FsD5n5MCwLQNuTkXiD2JYpdGzJ%2FJNUcijvResJz3d4Ml%2FG6ikQDreUYdG2MQwOSuM0eHvgvLTzyKHVRDWLeWOOKOZl52obulUJChlQTVp5CGw%2FWpOgVLLu6aZFuq2nXSCMM2%2BaBngX7GqPBdWsolLrWsGzKTCcSVd0UiafsM%2F6StjLIRc1akJyuv8SdxKCzC%2Bl%2FlXbcOe1P2iPHXo1ihjuWUI72BMzRltJqdHk%2Fj%2FEQ7K7fQjOVk0Q%2BozgVrxMkT1eLsCJlh%2F0eObEn2UHaIn4WBPCXwwqtKJygY6pgECAaLpgy%2BsDqsA3v6Amxr6c9wRSihRRv5zEScQDi5qYH2qJh0BWCPg095IkAIx9t6iR33qem2vLwaxNLcSiyDJOvUdi6TiIFAABQsPeszxUb5Y%2FLK2HDDXf0zl3gwqYi%2Fico%2FIMuFV40Zfq0vZSFd0NYKWxpJw5yW%2Bi0yvE1jqwcYPNBTL%2BN5ICTGHt9h%2Fo%2BopxqwXf%2BouUs7o4IiOjiaRkJtOUOYy&X-Amz-Signature=e038fb309abd0590410fc4746761641839d52fb8d63c11761b72d5e3f22d80c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
