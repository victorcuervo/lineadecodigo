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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6XTLQCV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEt20R8GnMo0yH0IIZf22PINrzQ6ZW6xXSwJK3KAPD%2FsAiBH5C%2B7dp2JNIcBXhJhYCuAix9d7h%2Fv2n4IHB2MVFwE9Cr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMxuLtwuziCn9Mg3ymKtwD%2FDZSa0hB4U9MXpvYvu77pcPb6Lg3MLiF%2BNMzQu3WCHRVAQUPNQhaLsErs9LRLzSkwk8dKErywVBjGiPFT9CSe5cfJVNmOMkuGloxs2FLcRM4TUBxOHEwlAmM0Aha18vlYgl0EnCu3GaiH1nJiGu7khF1oUHGmIlLAORgz3mROUMJ5uqgdVxFfjIG9JNrWHG9H4Ib6JTXhl2n5R1I%2Bxj%2FxLu0632NMLfxrcCarJS57MI5q0umGFCjkqBadN3f2ABZKS3OVaz1KcAayZynfsXMIySoMC9i6Ct17VQTPsXUpdnTku6S72hOz8CUNri%2B%2BoUsYhCU%2BBlJM7bZVg6a3dEnfUPeJUvnY7ErotWDscHI5wWwJaMjTe2pq4syMS7bEgV6cwySFKJ9DgLlcNfUeObQAaTaQkWP4S9llqYw8LL7IYmy173T%2B0NXwJO92TsKkGN0BaJ99J66IvNwa4hc6g6mwA%2FHHM8XzbNLjzJSrqLS90JLls3gstMZ9nfNaZwaw5%2BlMw9J%2Fkn%2FrZ5kIzdhCIx96JF3jEDQTDAAf5rlbMYcpTH8U%2FBb%2F8mN9itwOVDj9Qm%2BrZlHnhjOlMT6souBNE97FEaTtbzdWf5N2IFrDkm%2FoCINuNY6Tx5pWQtHe%2Fww%2F%2BjNyQY6pgHjwi40m6H6nQciz%2BM%2BBUvNnuCSoXeBTct6SVc863%2FL0%2FccNWis3XRzO81RKSPbh2yueNXfDE6bEwZhTYc%2B8y2YxdgOLy7BPMag6c6iYCmS2TXcRiUCu2Sh%2FKNJoIOForEXRWwBkONvH1UbfkH%2FwXlHxzkhC9b4QvocG9VA0YCmK9q50edDr7xD1nemev48SekD9b9A5tCDr3%2B4k6JwGuMQ6sUF75du&X-Amz-Signature=5eeb4fc5cfa59e23b14c126cf7cd5e5de089c26edb409fbf76056c8170bd63ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

