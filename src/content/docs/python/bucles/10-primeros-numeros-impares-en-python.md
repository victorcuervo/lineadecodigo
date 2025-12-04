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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMYVD4S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBcZxhqlx8xqQSiUlw4pHQFcX%2BLqTiPhkO49Kp0ASkc6AiEAxIVV6A0AnzSEvoFho6FNXUrgt6tfkVPtsF02rLt26FMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDK%2BI03ytq8Nf0CrWjyrcA3acBHFE4qhYqnGNKHOd9eeEJY21aPuFN2BVh5WlAhSaK34yleHKJkX5oNV22tOu8p03A5d0QxGgUgtkHkAe1bKUfB4J5gaSZyJMaBiED5nUWGL9SID6nmpXEgsAd%2F5pMDUQCNnTQoU0eQsTfI9lvvTG33nuZl%2FvggWX6PW4Gc8qZtf1Z2OEDooiktBcWBtOf2i%2BBRj%2BuqE%2Frisr5YMWso00OBpcgPP6pHAZVpxSkLu5d4HCXkwSZAPrmNelU6p2bXyTAA2%2B5cBCFwnznl9lxYsLoIKOQ5tXgISOIjlHHopue0BqChp5WtX1J1mAH64UKskUdzyLiUoNbH7h%2FtvSw3x%2FJh3zZBbdCrafmrkINZzH23jyGqYYKjNG6KJDX3tY5%2Bq4IQSmnR0FcUznuNmWBKwZFDT66QFGyXnhdoFBmi4nPdv0gizF3W7JrboZ%2FrXDTMrgw4Sjq1eHEWJZboJxoyBM5NugWthzQqxJu9vX0V93OTsgJ4am7Kc17n6x%2BgDQBi9bDdKkj85f31%2FwfyeHA8B0%2FJXQArU%2FUrKAAm3M%2Bdwu0Hxw3XTiMJfLARJz8t2YF%2FMh7bSAyOim3Des2qf9%2FSwzCzb93TPxwGKiu3bukbWMjT%2F9DjhIiPxUj%2FnCMJvKxckGOqUBNsUkv1hsmcWBEV3WFwXZUw2BH2Qt0H0x1VB3TivBqTArqP9gEDNxPV9z%2FWvQHYCiI%2BqJ1ecOzFfe6KeGfn1Ov3NfQf2HC91nI6WMBlttGMrznMZrRpa6URqd%2BTnToWs%2F5%2F6iZWOWA5iXkvBCKyxw2%2B7%2BE6kKPWXjLS4O%2BK%2FkhS6OU1vwJMjo3m0RfMfTYiOJ0inXo863Rs5HD3Ng2tdWm4B7MU0Q&X-Amz-Signature=6708e73cacd7dd850c7a07e949a97d06ac5474791e1258b4edc139faca8a5f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

