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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJQ72AMC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Urp2qhgqeuRg3cL7uI9ltNKcqDP5%2BSiNq%2BzgEblROAIgJS1NZSHHsxNTa3OV%2FW0UIeyaHAbgYx4cY%2FgzE7C5vsIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMeoeDSaTHvP1I06kyrcA4Q6VEs%2FEfGjVw%2BU9cgTuuGGMAsFi4Ihl5H%2FJjV%2F%2BvFSTVnQ%2BUGcecIr4BXLnTMpbDj0EEI2P1%2BvQznxrIeunxJc0%2FMi%2BP2PddVu4vYqepijyuIqiE6Vg0JYLMsUliRD2b7jjSs343ADrUFR83uR9Y1cbV8KdzH6lqz3atYFJzyuT2R2T9WguU6Zz%2FevvrCaPkJt5nbiB2%2BhiogQTHaqqZZw614KvJAW%2F1WcxTp5GYOvqiAIUtXP3%2BQLvC64AwIZapxweh7EhlXGNQTUdti%2FfccGHTN71%2B3sN3485i9LE5kb7ADiTL6Kdcr0P7AmblJtJqflccDuetKNarf6y%2FKsUuxAltdo07fD6s9tr5s7O8fpu5J5x7jaVfCHi4%2BTEXXwwWN091OgWGRiZhM%2F4dkkvrNkBvfkS0wuWbv9yhoYfr%2F5yuqVloH2zYacxpvLivTpGrZmqTqs%2FcYtPTI4opzlp%2F4SUAcVpOPExGQzT6ACDV8dsv9NR5S0uCxe1W1VTgRsMMiSYt%2BalwR7S528nIk%2B0oND8yJb5FJkZRFKMv8mG%2B5u3Rl1WFs6KXF183jEgj1OArnJSzZB0H50SaSFnECEMI3gAiNSYse3AGzJcpgg402CDd1GylHy1MSnk2giMLWnzskGOqUBuMV3TwI5eYbxkdAqp8VB%2BQvdtVKX5pD4w9a0AyU6sp5DGxofwh1VKWAJvHQf8byt%2F9DlcrKp%2BUxPl7AW6D7gX3kdS3MJ0%2BZXvqAlZh7O8wl6rWDZAtxE7R5bTEf8ZUeJnNIZibEDXtRKYhz1%2BnW%2B5%2F7dZsAhFYBxJ9RkYMgahGjeyqdmx%2F0FLVzMka7y0tbvhN5O6SG71R%2FjldF4LZS2e3D9vj7z&X-Amz-Signature=202c3bdeb5cc077abaf1e0d6ff19e012cc43efecdc4d419a68935c4fd64e9e98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJQ72AMC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Urp2qhgqeuRg3cL7uI9ltNKcqDP5%2BSiNq%2BzgEblROAIgJS1NZSHHsxNTa3OV%2FW0UIeyaHAbgYx4cY%2FgzE7C5vsIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMeoeDSaTHvP1I06kyrcA4Q6VEs%2FEfGjVw%2BU9cgTuuGGMAsFi4Ihl5H%2FJjV%2F%2BvFSTVnQ%2BUGcecIr4BXLnTMpbDj0EEI2P1%2BvQznxrIeunxJc0%2FMi%2BP2PddVu4vYqepijyuIqiE6Vg0JYLMsUliRD2b7jjSs343ADrUFR83uR9Y1cbV8KdzH6lqz3atYFJzyuT2R2T9WguU6Zz%2FevvrCaPkJt5nbiB2%2BhiogQTHaqqZZw614KvJAW%2F1WcxTp5GYOvqiAIUtXP3%2BQLvC64AwIZapxweh7EhlXGNQTUdti%2FfccGHTN71%2B3sN3485i9LE5kb7ADiTL6Kdcr0P7AmblJtJqflccDuetKNarf6y%2FKsUuxAltdo07fD6s9tr5s7O8fpu5J5x7jaVfCHi4%2BTEXXwwWN091OgWGRiZhM%2F4dkkvrNkBvfkS0wuWbv9yhoYfr%2F5yuqVloH2zYacxpvLivTpGrZmqTqs%2FcYtPTI4opzlp%2F4SUAcVpOPExGQzT6ACDV8dsv9NR5S0uCxe1W1VTgRsMMiSYt%2BalwR7S528nIk%2B0oND8yJb5FJkZRFKMv8mG%2B5u3Rl1WFs6KXF183jEgj1OArnJSzZB0H50SaSFnECEMI3gAiNSYse3AGzJcpgg402CDd1GylHy1MSnk2giMLWnzskGOqUBuMV3TwI5eYbxkdAqp8VB%2BQvdtVKX5pD4w9a0AyU6sp5DGxofwh1VKWAJvHQf8byt%2F9DlcrKp%2BUxPl7AW6D7gX3kdS3MJ0%2BZXvqAlZh7O8wl6rWDZAtxE7R5bTEf8ZUeJnNIZibEDXtRKYhz1%2BnW%2B5%2F7dZsAhFYBxJ9RkYMgahGjeyqdmx%2F0FLVzMka7y0tbvhN5O6SG71R%2FjldF4LZS2e3D9vj7z&X-Amz-Signature=2415d4fb0cf3d168c6618448a0fa58b7ac26a5c6f13c8dd24bf4e67da511d519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
