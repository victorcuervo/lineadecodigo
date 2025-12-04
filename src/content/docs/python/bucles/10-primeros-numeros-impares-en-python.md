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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WI5TY5Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCICMtaiZeNFcu9tj9eDNnPVDoxq0axqfVUNEuj%2BH%2BhM%2FuAiAroSkliWAnYO1Pdku7oJCFNC4%2B3ec0Ofo21m%2BM%2FwrggCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM9bHf5L9HZOhOG40ZKtwDrXSREGweUxOedewwQIfjUAjpZ%2B62pe61x5MtlNiu9RqzdPkgD68WE0HO9MuGWZmcvM4qJ9S1jEWdukKUsqYUQHTktFPtPlMZQm98b2saDqGOKJp8BLFeCG%2FFapPIEibGrC1e%2F2g5m5JAb9hDuHT0zV2MZ7tDAv6R9xNqEellX1POPaspo6RYRyxZFN%2BggZX3vJayNW7jb6W01SiYDsolxPp69ZOHBpOwaFJu93xGvmerJ0UsyeG7zNlW0oudvgrqDHZP29UkC7ZiQqMLMetdrQhIMkJk%2BYXzVGHUicyvL7pAZF8G2ReLVttF7Na6KYQdARjIexY6Biub%2FFOJzbo0Durd%2FHmBFrf9HlhzNmudKn7Ta90RCP0fKTBhzgABmpfkYdi0Zx5UwguoPYAwNgsIC2eUI0F%2FheLY7a5ke%2F6nnLAc0dALkqlG2%2Ft%2Fj3ut53ILzL5KSsMgWjAufJC8dqVic36QngMK3d4kaLUZ5r%2F%2Fu1DcWgz6YMES%2BkLbc9XQL8k1fgwX9hRazyVwRzaC1ck1T8oH6YscE6Rs5jZMMJ18Mfnfm6lDFxxyesGcWd78a9fLvzFuG3GGe7I5RzaLfYwG6YqyEjWRq1F2EbrCf6CypdZUBLkvDwkm5Zq3u%2F8w8efEyQY6pgFWnPd97fkR3ohaBC8P%2F2vQesyA3oKxuMsnJnxcxXYmkk2NeD03MjFiG17G9%2F5bI5Ijvx44Sws%2F1WRdbDAEHqB0Gq4AeN71PFuktY%2Fh%2B%2FpoUKurZS1Rcws%2FzfzG7VzeJZCUv3kVoqu20GaZOaU5QQfW4doiqOjAu3q9Be2rTcyLybaP5E0OlMmApqY%2FVkYglGNwK%2B94uzTQZIX1CV5DM%2FSU%2FmEv%2FiTw&X-Amz-Signature=db42a4e2f69cd3a5b386470ae5105a502d72f95eac7b842f37e8332d0370a88e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

