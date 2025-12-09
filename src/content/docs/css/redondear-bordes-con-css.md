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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JWEMRDC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjCPq6TW0I0sWEs8YDk9Gflmj05V%2FUzzsveC24RePaHwIhAMdlve8vHRX%2F4RDudYE9k3a8rhOPZk2GnJuluKd%2F0L9aKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRpV%2BlmMN22EQibGgq3ANTc%2FwiHQH%2BFFH%2F0bQcOCX5AG4oZM%2Bixc4mz7eOGn4kwDMdkXhIsdIcs3smD29dfESYxWpHYvIZSsp2rtNoLKj%2BlpKohLAz%2F7Kchy2so2itioqtUu9bWwVA8Lw2ETqDk8xZVUINlPcIyvoKq6jXkdaf7dM3VJMoyg8Xt4g%2Fg9lq5SiQ%2BArNocxj6uO5r54jGdSm1BhilMH9QJr1FM7kIdgtOY2VtKMjeDQpNw1Z%2B51XPIT4NL9WSBXQsOcASqgtDOHvhogKZnVkHDur6rXmdBgVLZWOZsYLBghnbtCZEXsPtsMdRhiacfMJY5GOaGJQlcs8JmBA%2FhzaQMbdsoAQc%2Bk8aGNTfvr%2FMQrGsBrkxbQ5ZcRge7LEprmS%2FTbgqdHvJ0OsOsR8K6TFdycGEkqTXld3bRM7afbwuhUY7MpfugS58%2B5eEy6Ui5jyQeYoyWk9mMIb1W4sEg4%2BQbEh7kJhyu4fYoq72jYhZS0dB2MbX02vRZNC8z9JPzafnZwRe496%2FFuYnRaRXjnjRxjV1p7cIWHYDzrEdmCA56ZlG4p9PJwfxUP2GNdsUik0A2n7G%2B8Kwh1CrJDrjuXrJ%2BxcwOkWvlqpVAAvr94eSDxo3mdRR%2Fqw1%2BFwoWZwDaaz8VTN1zDZ5d7JBjqkASbpiVdZqxAek099CF3yPrboLMrJKiz%2Boy0mFxuhQ7%2BGbhUrWKLVX%2FuhuLnsQ%2B7bsENqNkrXDTDGCs4rTa63ijOIpLi30%2B3W6hCmTh%2FbytSf4A1cGt34utuWaAMEP5PjJdFdVJ8Bl2oGIjlbIIdBgNdqN07j7LWrfm9RC05fzbegb6FT0csVuNciY5rQXYvyuDyapa%2BquNly2TXmtfGVWjiHMTS0&X-Amz-Signature=b4da8388e9b71e84ac2117fbca1dff57ec2f8e2400df2b432cf981b7baefcf57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JWEMRDC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjCPq6TW0I0sWEs8YDk9Gflmj05V%2FUzzsveC24RePaHwIhAMdlve8vHRX%2F4RDudYE9k3a8rhOPZk2GnJuluKd%2F0L9aKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRpV%2BlmMN22EQibGgq3ANTc%2FwiHQH%2BFFH%2F0bQcOCX5AG4oZM%2Bixc4mz7eOGn4kwDMdkXhIsdIcs3smD29dfESYxWpHYvIZSsp2rtNoLKj%2BlpKohLAz%2F7Kchy2so2itioqtUu9bWwVA8Lw2ETqDk8xZVUINlPcIyvoKq6jXkdaf7dM3VJMoyg8Xt4g%2Fg9lq5SiQ%2BArNocxj6uO5r54jGdSm1BhilMH9QJr1FM7kIdgtOY2VtKMjeDQpNw1Z%2B51XPIT4NL9WSBXQsOcASqgtDOHvhogKZnVkHDur6rXmdBgVLZWOZsYLBghnbtCZEXsPtsMdRhiacfMJY5GOaGJQlcs8JmBA%2FhzaQMbdsoAQc%2Bk8aGNTfvr%2FMQrGsBrkxbQ5ZcRge7LEprmS%2FTbgqdHvJ0OsOsR8K6TFdycGEkqTXld3bRM7afbwuhUY7MpfugS58%2B5eEy6Ui5jyQeYoyWk9mMIb1W4sEg4%2BQbEh7kJhyu4fYoq72jYhZS0dB2MbX02vRZNC8z9JPzafnZwRe496%2FFuYnRaRXjnjRxjV1p7cIWHYDzrEdmCA56ZlG4p9PJwfxUP2GNdsUik0A2n7G%2B8Kwh1CrJDrjuXrJ%2BxcwOkWvlqpVAAvr94eSDxo3mdRR%2Fqw1%2BFwoWZwDaaz8VTN1zDZ5d7JBjqkASbpiVdZqxAek099CF3yPrboLMrJKiz%2Boy0mFxuhQ7%2BGbhUrWKLVX%2FuhuLnsQ%2B7bsENqNkrXDTDGCs4rTa63ijOIpLi30%2B3W6hCmTh%2FbytSf4A1cGt34utuWaAMEP5PjJdFdVJ8Bl2oGIjlbIIdBgNdqN07j7LWrfm9RC05fzbegb6FT0csVuNciY5rQXYvyuDyapa%2BquNly2TXmtfGVWjiHMTS0&X-Amz-Signature=04cd854b365ce34cbc81eeedad998b6e1e4076f2cb34c45a92fe77c0cfc56ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
