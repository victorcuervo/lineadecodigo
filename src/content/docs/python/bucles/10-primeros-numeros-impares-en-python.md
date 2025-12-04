---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UZ75IAC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDGS7IXkJfu7uwbnC1Y9PDrQ7UOuU8VIu32EMX1q5CYXAIgQ4xNSBumtNfD7qMgaXeMz5oTUipUvIy%2BwHayrWN8WiMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLTZtqSoiieZeBYSAircA55BR0U2c77gBRB5SeITLzg02nE6mEeNlBR8HttDN1NR4%2BCkWP3rXqHaXfqHHzSqY6T3%2FAIp6cUbPGMSqOtiSGn6ZOdH7XuR6Uy9vyh1HOaYAlc%2FpCkJPArTWM5NYefhoLkSoJscyP67UpEsVOlOJoPXMrzIqz5gnScuzjUMfhZZIIT%2B6OVjdo2EDlZ3MwA%2FSMpUZszAnRPd2W%2BrYirrDUdEvQcdgThouDJeMEA8WEVHQz%2F1Ukb0ggcwtgpg9Vb59lKEJegj9RaBs%2FI9%2FFeDNvFaSljTbhkLv2WcvM%2Feksp8zqkaxN2q3jlFHmPq78WeoScH0qliF%2B8OpuXjkb6y5oZYCmMC%2FWuq4TCBz%2Bp6q9MdT7pOT%2FrUggWhXW%2FQZJj%2B4pDDyPpRQIHtLDjrJW8DJUknTOZY0%2BzSsxVbwCaio4ZOwfpts17OmaIvowrKnafQZ2GPcGuLUtKPraqbuuSBGRw1iVUmheKK56sxsA4CHBoR6G8U%2FM6thvS3a4FjbxEZVV1qQFCOFxUDZVSRzHmfZQSlFGb6MgCZl2fvzPl0KggT6qDyTVrAZlJxwrvWyU4or7ARrwZCYWInl2FYVV9KUwgOLSSn%2FY3QX4roQUGuqlsxyf9Hv4Kcg4zGnidOMJKixskGOqUBUQ1hpw0GHLPsudwxHymYdf%2BYY9Zwt1edDsGlbUj6lqcGSysZzT9Oej8h8TxWhWVILiatW5U7wTA0b8X8xcEmk4dABh7Wgf79y6wz0fxs5hVQ5cJ%2FsoqkWDx3M%2F1%2BVx%2BnhOgX08T4z4uk6iIaIVDHomCO%2FRn%2BnRFe4vSRFw3DT4lhMHiEM5%2BE3R5X3Lk%2FY9VKNX1kxpH5rI0g5m54o9NMBwfwHVmW&X-Amz-Signature=7615c8b5b82b759c299020948a995bf24ee307074d189081f09470d9b53ae794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

