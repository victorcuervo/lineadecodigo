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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627BEZIFK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFU6VskxE%2FEDTAC5qipqBP1IbAo5YgAiAWkVjw0ZFUx4AiBGRubTCb9qjP5H7WuG0XExzqcHXDeda9ZKNkIq1Q8FVir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMQ6OHzxVbgV%2FHTVlSKtwD8e64sSanY18i%2BUhgBO9WogUkltDOt709rtV99gb4qjZ8xdJiwatsS%2FM2f1WnqnQrXnTVM0OAFwwpe%2B%2BIZp4nwvGZV0v%2FV%2F%2F4Ce05p%2BTMrBkcBXLu094o%2Bxsw14BpG8ZN%2BHLDeVVGmN7NycTNVFBFd5WFRyS1GiyOchZcN9NowgP9lJBEkiGTro7J6q43CHwsfTlVeyEH7cjzChYhHUWFGc0c1ftkKa1h1aR1c%2BRLbLSlD0QRoSp0g4adyE764HlS05UYBG9oXBPeBl1sSbMppm6GW%2BKapOXCGsqvLV1LnQGH7gJIlxVwInUCatMFr6YiFfIhhs1syuq7lSr7cWGp%2FXMP1R%2FMjR%2Bj8pH2stbYM0A9vdFsP4su6A4EO24Nubj2d%2Fz15Z5sMO61SzsPs%2FcEZC4QFiy3dSJTMu6PgPRmAi%2BDazm5n8D09Nwk9lDeRyVNabkomJGKeyHSH5TW%2BXhHNgZau9qMIx8nJwF%2FWE6vx4du%2BlGwsF8qGeUZcusXk9gTkgNVj6EwlRew%2FQ%2F9H3U%2By3CxOxdcZojtvYEK2jwSwRw41BjC7ZG6byWNxGs%2BRR5DfQf%2FQtJbrK41Eid%2F1BOsLZQG3j3fnP%2FBXpUvZPO%2BbdKTR%2Fb7RBRjHm3NqCUwoqrFyQY6pgF8adVKX3%2FO60UTrGY6AUXPNAu%2Fcdt%2F29Ab%2B2MTAaG%2B089aMnCthYF79YS6KxeXoVs9BV8Q9sjU9qhOeDO%2FgWPLG%2FpzWe59kQWoEw5V1qV44Xde61TexKGdPgOutR5ujVtiWdN67CgGW0pPax%2Bd7WuyIZyAXqwOq7qyGFZl2jahLSMcPwv8zexwfkU0GrNtXjhlN2eFH9fNXiiUShLrxPm1jHOewaKx&X-Amz-Signature=2f8c0f1cd23b7385c4aad8b1cd72ed50239929a99fecb5c79b1d14e3f6b21cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

