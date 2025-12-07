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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656WLAJON%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDh1yfg6BBTtA%2FlVZa1HZCH72tEVKFNtWZU84dz%2B8f9wAiEAzJ%2BK%2FVy%2FrGGMU%2BxZIPMv6Xg0JvfBwZmPU5Ykx%2BiMZUYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA6oJ057qXJR%2Bmh4CrcA3uGXpf8VXiE3BAoVtsVjR80iatrhstHT4B762JX4Sccxklgi%2BCu3yJYO3Jm8%2BZYzrhUFt%2BY7%2Bft4iiSMEdsW5X0h2r%2BhbfgnWoCsWxUg1%2FiQMgP8veMW9HOegxhqlmqr8aeZK%2BOh5NVASQzGxiCv84B1J%2Bk6uEBvkIuFY%2FwXY0SN8VMZWmBhbUWCDLTakvDcK2cAb8tT8opPSw7%2FBmEvKgfHksEANeytkZUPzNFRfKgw9kllaKZdcK0IQgs3829xZIahGyaesvckI9nhxTPIHPh4T1AY7%2Fnxn9MGFvgVAcCkUUMT0rnFWNK8yTjXJh%2FjvHnmOHbr%2BEJLmK2AGYYiHGOKeBRiEwLQrF9JoOkXwIMzxLiNUfmrvkMZuqxVE4VzWw7CNtWY356akL2fteORGHpCb9G7%2FnLJMIdnZQ7ubrsO1GwofA8smwOwHat4RJWxc3a%2BhrknDx%2BUn%2BoBH1UbA%2BotEoVAznY%2Bpu8MJCFIq5oDadTzD%2FKDgVU1OXZZvFPOaLTlHTddBS0k7nqRkDKmNTLux31sXHBuQmWz273o9FbH5nAehcGuNGIAhWC%2BXwVkuw8kDNHMSDI2QnkqeQAXl21vmxOkKyLutIyfOuCYFc77oswi0vKGFt8JlfWMOeZ1ckGOqUB%2Flaj7AauSpYwRpLNZRMA68k3v400EgLBGqUNSFQolxSm%2BmxiRwm1Ofb9jQTLzvmG2D%2Fg6SKFu%2BoPygbo2FiMzSX8oRnf559ljX4AigtQNR9fb7y8T0LjPuat1KXDmdEcERpoMQzPwhqnO7eITwm7TFSFKYiihchfBwc8ct4TmsHk2ZEV8U6pYYyMD1FQh76RCLFsKIUfO8R4tST%2Fg9EeVduEpWlA&X-Amz-Signature=72fd5f52c95a6950040e0c0e0069cb3b788a903b91d8f59cd822d974f7046622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656WLAJON%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDh1yfg6BBTtA%2FlVZa1HZCH72tEVKFNtWZU84dz%2B8f9wAiEAzJ%2BK%2FVy%2FrGGMU%2BxZIPMv6Xg0JvfBwZmPU5Ykx%2BiMZUYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA6oJ057qXJR%2Bmh4CrcA3uGXpf8VXiE3BAoVtsVjR80iatrhstHT4B762JX4Sccxklgi%2BCu3yJYO3Jm8%2BZYzrhUFt%2BY7%2Bft4iiSMEdsW5X0h2r%2BhbfgnWoCsWxUg1%2FiQMgP8veMW9HOegxhqlmqr8aeZK%2BOh5NVASQzGxiCv84B1J%2Bk6uEBvkIuFY%2FwXY0SN8VMZWmBhbUWCDLTakvDcK2cAb8tT8opPSw7%2FBmEvKgfHksEANeytkZUPzNFRfKgw9kllaKZdcK0IQgs3829xZIahGyaesvckI9nhxTPIHPh4T1AY7%2Fnxn9MGFvgVAcCkUUMT0rnFWNK8yTjXJh%2FjvHnmOHbr%2BEJLmK2AGYYiHGOKeBRiEwLQrF9JoOkXwIMzxLiNUfmrvkMZuqxVE4VzWw7CNtWY356akL2fteORGHpCb9G7%2FnLJMIdnZQ7ubrsO1GwofA8smwOwHat4RJWxc3a%2BhrknDx%2BUn%2BoBH1UbA%2BotEoVAznY%2Bpu8MJCFIq5oDadTzD%2FKDgVU1OXZZvFPOaLTlHTddBS0k7nqRkDKmNTLux31sXHBuQmWz273o9FbH5nAehcGuNGIAhWC%2BXwVkuw8kDNHMSDI2QnkqeQAXl21vmxOkKyLutIyfOuCYFc77oswi0vKGFt8JlfWMOeZ1ckGOqUB%2Flaj7AauSpYwRpLNZRMA68k3v400EgLBGqUNSFQolxSm%2BmxiRwm1Ofb9jQTLzvmG2D%2Fg6SKFu%2BoPygbo2FiMzSX8oRnf559ljX4AigtQNR9fb7y8T0LjPuat1KXDmdEcERpoMQzPwhqnO7eITwm7TFSFKYiihchfBwc8ct4TmsHk2ZEV8U6pYYyMD1FQh76RCLFsKIUfO8R4tST%2Fg9EeVduEpWlA&X-Amz-Signature=5917d538cf73252b334f88863a93d88adb420f503ce8f4af61e0d95966633ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
