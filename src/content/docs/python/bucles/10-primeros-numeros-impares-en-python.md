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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJMHOOR5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsNYIEEsxCAG5iZF6Kp%2FzmAVrzFZvhBu804nGJVhzqkAiBRzdafMaOYMkML7gYU%2F4qx%2FuyBGnbTZERlACQGyDEz%2BCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMfkuj0eq19Nnci7QOKtwDObY9jO%2F%2BfZ8MmHBdqSZEJgtNcPRCTpyRymHUW5kjY5caUh%2ByvkFRKK8LZDpuxCGjIdXYmw8so%2BaBWju%2BsN4TwnGG9KXMNsoE%2FxOxcMwQhoOa93s8Z816SSrLVNgtHFeSqGVbmgR93KXnfDgC7aNDozauSUuQWKG%2B9Htl1sM%2B9cpVrP1WF1G6QQoG7JMYWoW%2FVz8aavSsGljXyKjyXAI2c%2Fw8siAT5wYncPbSTsgXQOCjWvzysKmpO9SPMXawKV0%2FMaLZDrMiPXkQkPcaTs8xSQyc84PPfVSGHrQi%2F5rKnQBxwhMO1iY41CFla3zuf4A8rbsDGkBibOnJ5XE9B7NtzvfOTIph7%2B%2FO1cBxruKbFkDM68UwLyFbiPNIoOoFlAjVP2H4I%2B1MXKfEJUJqpI8tQ%2FNJ8XuYwWRpQ9DBXUeatqux4bWFQYWL7O1yN6UFItCiHJ9m0Hi%2Fk139ADbtMpHfS5Xz3F%2FCC70d1djdgjdcCROQt7b9mZRS9I3oytG538MHmKt6oI6CkQ%2BuhBXA5gSuOURs0AxcRYMzeB%2FmYmTtKkKJ%2BZQp5K41jFraxkOVtddRzV7A7GhHqd3dankIUAU%2Bguiz65A8BKNWL6%2Fsyunc7R5TGMRUstixeWZMUSwwt8vRyQY6pgE8zcCBk4mdt13yk%2F3z9hQQpxcnNqdxlMDCFeiv5seXdsjefrpICnkuopHTKwj3WDgj06oUO8m1cBzGqyyXnck6JL28iv07pf0X51moKtkjMkSH%2Bm%2BgE%2BhcnvzSvR431veOUWuddJukaXTdKDkviXB4Uj5qKDNGfYzOQD1CUk%2F9b3rDYNAYtwtX8Tpm4mYWy2zEaevry6a8QrmmCHMyfHd9jW5e7pkp&X-Amz-Signature=26d3519b9e5a6f385845bf7252c244d1932a9522faf1a4fcc1b9ae86cbce0af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

