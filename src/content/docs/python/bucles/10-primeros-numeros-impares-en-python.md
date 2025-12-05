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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO4PPKZZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe6NT9kBKjqzL493oI%2BfvTp1Zw%2BNA2c%2BN4k%2FtGbpWu4QIgDQrk6BkpWo%2BKHvMwwdH%2FF3TrwFzFIXiwLku7k09xXN8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDEEjRrAUyitU%2BMxTzyrcA8xaNbrHQkZS9V6MSzW0pYRwF0D%2Bfg7X%2BeYeShmV0znt6IhGO3jfgd7iM3vM012F4ysgJURnA%2BU0NfdYTFL68SK1DhWS1RwA8TCXbkuQjHpXB0wmz1x%2FuCpPn3U%2B%2Fr4kRpg%2B6tv03suK3MwYxhtVxAnW%2BzLJmeBYuOy2m2orFUIu%2B73YHW4UyKOVV81fK4PJWymxXoVGFkAkHDO88HEvGyMBiPnksYAO9momMwPc8U%2B2NeN4Q19fqcEF8%2B6jIlSd%2B8yhZdCIqhy3RFo9skTuVqZaKL84wIXWEvPxuXZHqr2C2G%2FBj5Y2r6epie9h8NhgFeSbZIw7a%2F%2BpB%2F5r4GPLCYQM%2FA74onz%2Fs1MxNoHeJxB7P1mdTEYmgY5F1sh6mt5xbuamIwd64hHRcWAu7zninEgOy89xN28jjzFeh%2FZ52QI6kC15dX4mU%2FXLh%2B0MvPfFEwI47o8QZGbR389jG%2BpCGAYOX7rFGpdG%2FUM24h%2FDIbgAPOlzsF6YhWv7YFN9DjyiiIGmHp8LMS3ntwesiLPfCH3ZFGP26vT0uTk2PAO%2FfGF%2BSKqMNgTWd4L4oSRzxy3SFt%2BnH8BvZ7K6XUSHEtWw3otHIPo350dfzspvXW8VxvbvEJheM5eJ%2B3fffvsBMJ3GzckGOqUBlgIRw3USkX6XbOW6uTZRNlQEfWAiCbdiJNhJyyBDLD0dzaQVgvGAIIKrmTOzOuFu6%2BhYaN%2B8dZTRLk4xB7IerF3bGdsb3KqEOaCI0ME%2F2H%2F0Vryn866UFrzWKabCFds0%2FU4lTo%2FboG%2FrmzydzdNFUx7KreNPETlxQ4lsgxtZ2AMo9XI8nIr239pP%2FzEgzfFouFdoWjVokdytvNUSzteTcnVX8geT&X-Amz-Signature=3ff04c31d4dc485a249f41dd5f902d3f4bdd4dc14f712264835fc9ff59bd3d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

