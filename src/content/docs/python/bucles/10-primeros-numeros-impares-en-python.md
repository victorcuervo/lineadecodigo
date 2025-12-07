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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOGCKIGA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BjBidCM1o%2BzIhk%2FPHFqIn3jWQ%2BUQ4BRAaC0Ye1ZmkwAiEA%2B4bULJsosiGDd2hI2GPY0A%2FbUE%2FJSD%2BWYjl%2F%2FYBl5acqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL7wPGbjaUgbK7Y6ircA2QDwhgyCe1FFjQQww0E58zOGXu%2FkXX%2BQnZ9Q6jFNXe5fepoYArNP3cSiKFTwatENw4LGhCxbPdQXhhlfre1K0UsAsLY01wSYdJNEa8W8zYVq7WDrBvG7HfrZw44jMqyFWDxz07SlfN2KozQJx27EVT%2FJUEjK%2FkII2AQlZG9VN5R%2FXYWGE3dgM5t%2FHUUxEKMIlq34B75ND5bTt%2FVgTSBHTFQo2%2FC2L9JwU%2BnOaLkSk0JW%2F5iQK4KVg8NPZzjGPeok6vwWfxiz54X6L6Vv1USvIKZqqL55LKhGlMVZrYK8SEmqQzZTOAgXpJEpfrfRV9DPPmx%2B8fRYTOb4eVcEthv%2BqaU3n7MmRFkguQqxgGWD9BA%2BZN%2FtNG%2F9mBgqsPnOqlGOPfy1qt0PNX%2FK3b9g8vgxZvkU%2BkDhvDsj068j31Hs0W2Xp6RD9McNZM56UFLT%2FZ7re1X3gzBrZnCddS9jObC6kEtFUn5GJxlp7PqXTnrzUmmeR8ndSucV0i0wtZqbxQpLHhzaXmJJtVcfZ0VOckVAfgU%2F1Yyjcf9O5W0wv%2Feg3nBey1PHZsZ3t%2F7YOmr1nrt%2F9%2FVBpeHULgZLyuLLso%2B4FjbMB%2FK9W3KMUX4seizDRMWhtfuWgMSv%2BhE9HxjMNz90skGOqUBEv6zEbec08fUVPNn8gFo8Pe8Qx6g54KvxrWcMl6uGbEhP84jf%2FvhVHznpww7%2FoIV79aHU0991ejzO7EDjFV3UwNtmxX%2FCwcWP%2F349Rr2wbgnaaUDR9prNoRFy3VuAsvgDg4nq6me7%2Bbywdoq7XAQdsqzE4w965OlNGFw25EFWJi2QI9YxZbdZZhX%2FgLYTBKWSsH%2Bh74bmux5eb3qGukJ1ovGslly&X-Amz-Signature=2f9cb728e24884355433f50c4e5a126846088f60dd3fdfeeb8f4b40c494bc369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

