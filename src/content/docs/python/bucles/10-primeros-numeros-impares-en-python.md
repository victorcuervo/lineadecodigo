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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VO7GRZ4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQSj3bIERf5cxVFLna6Sw80CGQBQrjPFwI%2FEkeaLlGTgIgeiQgTW137AGyKhSNswmcYstlnAyQjRPXLD%2F1JFAyp0Mq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGsIQS%2FCl4xbEwXf5ircA%2B%2BDBRIN50OX1YLZ0sQQJuvzuMxWJr54saBuJgAhBPWQ2PMHjTLIlT3bJJbw3jSOpIKnVqBM4i7ZMuEvflnwBnLLy9LdrKccXlUdIs16LttE%2F0toYxfN8FuKnTd%2F0vAqnOhdmHilH44liHKpf7nCPWrYygP2gaBwFYiQXMqyxt1CV8aOC22GEGnPsvLd7ZKOIdpJ7thJE%2Be3uO5aRB2b98sqG5PBWhqw4xQaKfW6d3JtPa%2BamzA1IHRUGiIJL3qflEiqHqneF4NmX6olvlWOEONjbWe7Y305Kx%2FMb5mRz5%2FI%2FZXow%2FnJJ%2BJBceDEFsk%2FF4Zgve5LuVQro5dvY3o6LfEJwq7%2BF2YQ3fSkpgZSbrvuHTSHNF6sf0tWb0QtJ76JEcbNyepTi8yVcBEPQmkjXwbq%2Fio3NdVsfEmCKvW%2FzHyHvE%2B8%2FGXIr2TfY%2FUinbwGUHmBSJ7lOgsZ3XeKTXr4PKOFZTwcmzK5SbfJMd87dBCcCthrRq%2F7sXhCP%2Fp4FfmRmzlncVbM8Jgmi2YapwXISccVSlMULTYVFnQn7i35GxxIbtRjhFWAteKTUQ168bmt0uVwitzF6wo3Wu7PZ7AynkCRdPgidVoIeg62aoe8esuXwzOimB888sF2OujZMMjty8kGOqUByZhH1cB4hOYFJ%2BgOhegsw5pS16x4%2B12aBCiUmzq4rjkDHY8SSKxT4X6a1XbyZatr540VP1xcDS%2BYUMSQlnXhxw7noojB3KHfcyISkhiS9L6uO6E9KqYPVDqzZLx2k2cOXDO8N7e2O07OG5BWScTw94uNZW%2Fqhb7zvKKOtVir9rmfP%2BA3i6fnO2xSGbXM8HCuXgeVRPOtubzMYxtYlTAqz8aSdaRd&X-Amz-Signature=4333a2f91ddbc6ed5515eaa38b5d48f86920c87efe56909c0c309de756d2fd01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

