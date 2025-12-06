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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOMBRVU7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZck%2FXH1Tls8%2BYQaiPlCjLMlkhXjV%2BT8ktSIuHS9K%2F7AiAdpUA2SaAJGeyKL64H307q%2FY0eLSmHU4tOfvUyo1QULCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMvJC2nV4i3dmtcYf4KtwDHYekKQC7eial8d8kDeOyvETw6K6q5o0eBjbjFJzfQtK0zo2SRH7MkJuRERI3teeMkXIOojZF0aYNwYc1htEOasm1IdAyZy7Ps%2FGsq8l28e%2Ft26u5pCZ821NS5xGJyOb5tV2bYp9tymPIhhlbf%2Blxs5xiyMVonT0qTd%2Fb2xzU%2B2y%2B4Vb5uVYV3G2KHtk6bzTTtaMq8tGmJTTk%2BRoDEkxtI%2Ffu0clDteJ55eyFzA9Jeg6iMfWr7oMCkwUsuF%2BnQ%2BGcjQNKZsxbSMnPOEQh4g5sr6hSJkc6ycWnNtEvjBd5TqDtk7IqF8izNLlbXL0G3Yc%2BCeazjvteYzAofcePdQXZcyxDVMPOY38bEv5D8gKBc17gQYnGGO8%2Fsmy7Uxy7qvn2wH%2Fz3IEpBXXj7IoHHgysqycFl77GJDx2W10L9KzUqB2yArIkT46myhV3lZdDTDwZTmHgGjVvrcPjP4lW0HGtQcoqnw67H7IoeA2sA%2FxbwVbgGZL2Tt8xQs6nqSP2wRxyWeNRKGGOFbRYrYSjUFrk3RhSkvNwipMhBy1nW5k8tawnQf1X3JeNDkeU41aQs1%2BClX%2BwM4hV%2FmBu2nGL1sBrQQ6mQSEs2YqRj20Y4zIH%2FM3fRlR9zHtVFw3xGDMw5N3OyQY6pgHM1Zm%2BusMmD8S7Rl%2B%2FW3zf7i%2ByU7tRKwF6h%2B%2Fc6CRCkTJMreC84tXwS5jQ9RTX4OGo%2BZbcuQa87UTXUYHIVfFQK%2B7bNWkNnNhFZLfe%2Bn6DIAAqrmdKZH0acNg8y8uCh06tsMDk3ufqSmyzp28iaEfSZUvs08P8t8lYknhoy4820l2xUAWBhNWn%2BUFN6iG7%2FHaELhVuSw4ttehoq5ggIo66dTQS5woW&X-Amz-Signature=7a9f4f0c1693c1d877d1d4b938c7d1e00c3338b135fff3c540c1f81e985e5198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

