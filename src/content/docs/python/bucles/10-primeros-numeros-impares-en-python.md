---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
slug: /python/10-primeros-numeros-impares-en-python/
author: victor_cuervo
---

En nuestros [ejemplos básicos para aprender a programar en Python](https://lineadecodigo.com/categoria/python/) hemos visto ya cómo utilizar bucles para poder listar los números del 1 al 10, en este caso vamos a ver cómo podemos listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/).


### Uso de bucles para listar números


Lo primero para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) es conocer el manejo de los bucles en Python. En concreto vamos a ver cómo se maneja el bucle `for`. El bucle en `for` en [Python](https://www.manualweb.net/python/) tiene la siguiente estructura:


```python
for variable in secuencia:
    # Código a ejecutar
```


Para conseguir la secuencia nos apoyamos en la clase [`range()`](https://www.w3api.com/Python/range/range/) de [Python](https://www.manualweb.net/python/) que nos permite generar una secuencia de números.


Así, revisando la sintaxis de la clase [`range()`](https://www.w3api.com/Python/range/range/) vemos que nos permite listar los números.


```python
class range(stop)
class range(start, stop[, step])
```


Por lo que podemos sacar todos los números con una secuencia generada por [`range()`](https://www.w3api.com/Python/range/range/) de la siguiente forma:


```python
for numero in range(1,11):
  print (numero)
```


En concreto hemos sacado 10 números ya que la clase [`range()`](https://www.w3api.com/Python/range/range/) genera la secuencia desde el número de el valor de `start` hasta el valor del número de `stop`-1.


Pero, esto, nos genera una lista de números consecutivos, es decir, nos muestra tanto los pares como los impares.


Así que si queremos listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) tendremos que comprobar que el número, antes de imprimirlo por consola mediante [`print()`](https://www.w3api.com/Python/print/), sea un número impar. Para poder comprobar que el número es impar deberemos de validar que el resto de la división por 2 es diferente a 0. El resto se puede calcular mediante el operador `%`.


Por lo tanto el código de uso del bucle `for`, mas la clase [`range()`](https://www.w3api.com/Python/range/range/) y la validación del resto mediante el operador `%` quedará de la siguiente forma:


```python
for numero in range(1,21):
  if numero % 2 != 0:
    print(numero)
```


### Clase range con step


Además del código calculando el número impar mediante el resto de una operación de división por dos, vamos a ver que podemos listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) utilizando solo la clase [`range()`](https://www.w3api.com/Python/range/range/).


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4QD5PZR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn%2Bz0x3cD0cxqoqiCioAQ5o0%2FZb6q8QjviTM2V5%2FZZAAIgR7eE0PRPrrz98Ru42m4hvlGtnf2eYWSqZOYN8PcShVoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDecubt7Fb4nDrho1ircA0W%2FTmy22zc1rXZplaOqRVkL2UzAJh1lE9E5sdpomjXWkYGplJ2SdQXlRPwBaFAErQshNAuMmFyww6gm6RfWmAb%2BJ3X3c8%2FvKsyO7ehKFnyslmGrHu%2BjaQDj5ac8%2BelvYt%2F0uKhbmSjJ76DWtWH5LOREg9ihcIvNZ66emOyHQd3vKUl%2Fakao%2B%2BFnQg07V4gG4XzceZys1kVMr09BoWgp%2FDy3ULnW6NX49kW4dEEGrdDl6dnZTI6kxJt2GIvfHV9z8XL5TR%2B9CupTjswV0BDD8i5%2BIlO6De%2FuT%2FMAkoTOoFI5kKrXURC%2BCkpM%2FcT1U0fR3tI6ySJyc2WoQwasshO4AOPHCldSe5Wnqq7D47jqVj59Hjt%2BKbgWhNN8KwUt9qf2n8p8yyR7QLq2%2Fz%2BnvnWfPZ8s4Z3TbiaGYrErAU7VzzA%2BAkgdqF0fFPC2vVZpw4dDZQw29tQnhC9Pc8VCLyl7pqUkXkHRHNZ5cRaVHCKxXNDolMNqVcgm37c4T2VyrRuWVeEAeXZbA7AOtJWl6NaZWZkGhaVH6UqnGgYBrlGgWVITuoQQJ5gjNj3pk5uvcjgMPUVfJfWsF8RjJPrzKmcZd5Is1r4u43rMU8Wg8MfEaRURXQYtkN98qPYDCXXxMNaez8kGOqUBtJHshy6d0XO4Cw3lI2Mal5iqBAmO0wXbx7pgTj%2FthhcP9YQVnEIv7jvtsVOZhZcW0oSFdasq2HLx%2BqwC0anYAXHo6hOrOnZIK2ZuqzV5dkNVtDl5lIMLSXADXQbWpKN0Y1Hhci31Qavr5b235HqHOcL0ooO3m4JmYSoX4Flq3gQn%2FWTYlfpmbgVtyVBYu8poNScvkq3gN4kL2H%2BzjbVZnSBfXrxi&X-Amz-Signature=b35b78464378d221f45c7df524c7929e0676b88757aa8d7732b19d55205c08fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Mirando un poco más en detalle los parámetros de la sintaxis de [`range()`](https://www.w3api.com/Python/range/range/) vemos que hay uno que es `step`. Este parámetro nos permite el generar una lista de números con valores de separación entre ellos.


```python
class range(stop)
class range(start, stop[, step])
```


Es decir, que si generamos un rango de números del 1 al 11, con un salto de 2, tal y como conseguiríamos con este código:


```python
range(1,11,2)
```


Veremos que nos genera los números en saltos de dos en 2.


```python
# 1, 3, 5, 7, 9
```


Si cambiamos el parámetro `step` y ponemos un valor de 3.


```python
range(1,11,2)
```


Veremos que los números están separados de 3 en 3.


```python
# 1, 4, 7, 10
```


### Código para listar los 10 primeros números impares en Python


Así que podemos utilizar la clase [`range()`](https://www.w3api.com/Python/range/range/) con el parámetro `step` para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/).


Para ello, como queremos sacar los 10 primeros números tendremos que utilizar un rango de 1 al 20 y como solo necesitamos los números impares, le añadimos el salto de 2 en 2.


```python
range(1,21,2)
```


Por lo tanto el código definitivo para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) será el siguiente:


```python
for numero in range(1,21,2):
  print(numero)
```


Lo que nos mostrará por consola la siguiente secuencia:


```python
#1, 3, 5, 7, 9, 11, 13, 15, 17, 19
```


Y ya tendremos por completo nuestro ejemplo para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/). ¿Qué otros casos de uso se te ocurren en los que tengas que utilizar el parámetro `step` de la clase [`range()`](https://www.w3api.com/Python/range/range/)?

