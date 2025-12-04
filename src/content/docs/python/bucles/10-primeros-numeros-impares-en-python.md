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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH3Y73Z2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDMYmYUShRiBsPA3FuPRcdK5Sqrmwo4WjnLTQACKANHKgIhAOB3Cz%2B05%2BDq8RRA4%2B9dLIWpxVIrz9hoFwFDfkxvC3vJKv8DCD8QABoMNjM3NDIzMTgzODA1Igwlqaulo1Zma0FUknYq3AMBI2ldHlvezj8qPbF1SbfBcHMtTFYbWTtPSuBXDtD%2F5DPBUSb3J7fAqoD3DxwicMYyX8MqBRkvHPl48zzBhCmuK0mlhaw%2BhHPZ0FjNRZASEe6QArfS2PclmhUYv98QMBuJHOhzQWTRW9W%2BRSChyZpJOHzLliW%2FM5x0gCSrCd%2Fs%2FEP4ufbLYJS7%2Bb5hTzOTJtorMPdBuzC03aHvE%2Bwl9nISdKimZUkJgzUJbvBHz9Vswg%2BOQErHn9u9OU3F2Sl8indDQDZS5cQ6GU%2BW%2BfIY0cJMZf11iJmLEQ718bGmt8ObJvVkN7jQbkMheTWDBdtM3Jgk1qFlx3fb51DhAAryKibiH8zCjFxVABLJKyxUbHDzO1g%2Frobz5fhltr6Emb9PNJUeHGxp7XFDYPq41diTKv3P2uzOIuP9BL4c4bV0ycnM0mpUYdPPg8PJX6vff1hyJOGZS8%2BP4ZbmoNuuxJVw5YvbzBKNjlyToxsJJ4YnPqfO3FNYanwMPnGN%2BF0xw2kXT%2FiMLopOHFx2%2BKE3FzcPOVeoDFkmIFDAxaxMIDhmmk83zrzf1FPGPILNXE2VJHWgJkCu0wMaHv0ea30Zgpa9afbgwSRfJYugbej%2FVieetxU%2BKksvnfMByah2weVb1DC6y8TJBjqkAbV3xWp8hUMULbSxYAz0qKwcbpbSGgxX3rTRZE91vQ%2BinITLZZuy6ZZnbhcYEj4HXMZrGsTYbskZhZEU9%2FaWkE%2Fcxjlw0UNfs4GwnRGfhQcEHlJyVxbW3S2zkIZ1dTt1r0DsTQOKAq212aCxep990bG3YXWaq6Jf79JdfE40AAoYZZA5odA%2FXpFqDP1qwii7vDT52kciGKB%2FydRxR85OVqxKSm8q&X-Amz-Signature=6909072b5ad2d460a140ec0db5983897accd9954a7d301df7b2ff82805823a05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

