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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV3U6L3H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6KjOlYhXWEhGNRsDTn%2Fje9vG3JEOx5k5EHcpKa5OaiAIhAJeT9%2BNXeJSjO6HVQyI8i%2FhW5I47%2BDH70O2jNx%2B0w0oLKv8DCHoQABoMNjM3NDIzMTgzODA1IgxBJBedOzuqlqSkXR0q3AML0FJqlRHZaKIoILxWe62FjWt8oIY3O%2Foa%2BvZWb6aeFZALF2%2FZp8CqJ%2FcJFqf3TnRhOt01TVqA%2F1bWDO0Mrr6RfAqAI2Db2%2FULB0TZ7gJHKDHhVwmmgEx%2FTI02t%2B%2FAKELGWMd1Iaio2CHUubFL2Td4ZZ7rJF7KZ39XzIdkhh7RCrJvI1wcS0Lx7pIfbwAFZeb0RDzaXkxtH01oY7TfbhFzZZvydhQq1VH%2FQZqVsvUzW0MHGC68JTFlrsCtRCnqwwNQep3TTeEB81vF2OhFnvGC7epP16X8d6VXqQwz56LGk1XMjZcMtykPOVgBP0%2FT4tI8kIz%2FRijP2Z6O2NxvIpLccR1bIqj3JKIL%2BVugBpKKqZIbUalSGSgnlThE%2BoMFWUHnHCDRYKIjpdiLu12lnjcXvAghGxHZbQvbTfQ4hUFi4MvdIjVwXGnZ0RhRu%2FXvbgoZ%2FBC0q2EVKyezmQX1oRY2pHhm9HHr%2B%2Fg5f0osS7cmh5eQf6Fl8kDlCGaHESgu48D9DyBBAhLD5X8z5hYwp9Bz6ax%2BZ1Mz9PEDpjEO2V%2FJTV7SDOH2xj%2Fd0ghwuiK1rY4yJuMMJgURVHlG%2F8cGfILmS6fpZkJWLeVhrWcdajisovEyPU%2FgQuQ6EHnwmzDUwtHJBjqkAXcqfpyoVgxSp%2BuuIpBPMNjonr%2FzHXqfBsM4kmC%2BWYRb1sUM%2FuAEV1lTZevYtuhc5Hjc8RGA%2Fg3oaFVP001DfzJTAnCz6Yac3enhEmG9r0WWStx1OLplpIt0K3t3gxxfNTFquG366QO%2Bdh0OaGfOL%2BV7ubxkN%2BXU09%2FESWb7XIRKaCOSYvXBgWP8%2BWNvSGSUCTFSoeNn34RO6Aahl7WJA9%2B9khHp&X-Amz-Signature=e112e9a9c17b5c2c5546d18f72f7da56935727e2a353e5c7f6a0e467ec846bab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV3U6L3H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6KjOlYhXWEhGNRsDTn%2Fje9vG3JEOx5k5EHcpKa5OaiAIhAJeT9%2BNXeJSjO6HVQyI8i%2FhW5I47%2BDH70O2jNx%2B0w0oLKv8DCHoQABoMNjM3NDIzMTgzODA1IgxBJBedOzuqlqSkXR0q3AML0FJqlRHZaKIoILxWe62FjWt8oIY3O%2Foa%2BvZWb6aeFZALF2%2FZp8CqJ%2FcJFqf3TnRhOt01TVqA%2F1bWDO0Mrr6RfAqAI2Db2%2FULB0TZ7gJHKDHhVwmmgEx%2FTI02t%2B%2FAKELGWMd1Iaio2CHUubFL2Td4ZZ7rJF7KZ39XzIdkhh7RCrJvI1wcS0Lx7pIfbwAFZeb0RDzaXkxtH01oY7TfbhFzZZvydhQq1VH%2FQZqVsvUzW0MHGC68JTFlrsCtRCnqwwNQep3TTeEB81vF2OhFnvGC7epP16X8d6VXqQwz56LGk1XMjZcMtykPOVgBP0%2FT4tI8kIz%2FRijP2Z6O2NxvIpLccR1bIqj3JKIL%2BVugBpKKqZIbUalSGSgnlThE%2BoMFWUHnHCDRYKIjpdiLu12lnjcXvAghGxHZbQvbTfQ4hUFi4MvdIjVwXGnZ0RhRu%2FXvbgoZ%2FBC0q2EVKyezmQX1oRY2pHhm9HHr%2B%2Fg5f0osS7cmh5eQf6Fl8kDlCGaHESgu48D9DyBBAhLD5X8z5hYwp9Bz6ax%2BZ1Mz9PEDpjEO2V%2FJTV7SDOH2xj%2Fd0ghwuiK1rY4yJuMMJgURVHlG%2F8cGfILmS6fpZkJWLeVhrWcdajisovEyPU%2FgQuQ6EHnwmzDUwtHJBjqkAXcqfpyoVgxSp%2BuuIpBPMNjonr%2FzHXqfBsM4kmC%2BWYRb1sUM%2FuAEV1lTZevYtuhc5Hjc8RGA%2Fg3oaFVP001DfzJTAnCz6Yac3enhEmG9r0WWStx1OLplpIt0K3t3gxxfNTFquG366QO%2Bdh0OaGfOL%2BV7ubxkN%2BXU09%2FESWb7XIRKaCOSYvXBgWP8%2BWNvSGSUCTFSoeNn34RO6Aahl7WJA9%2B9khHp&X-Amz-Signature=6665929a01a71344d5fd4cb80d665ffab42f2b645b6ac35ddda5167058e2c2b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
