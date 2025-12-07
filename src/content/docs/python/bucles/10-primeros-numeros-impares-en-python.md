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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DS22Z2J%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6A%2ByHnVHoZqUTsRgyUVATAjUQN1Y1oH%2BimNzSJbmgVAiEAinsa1OR4Erfi%2BZzZ3vLLFQ9s5QRxqAh32n5nYyjktEAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW9tX05MPhrw0Z1ISrcA1Lz1A1aCrycYfe%2F5NZCQRvDyBDCUsbSG3A0x99JXx2hEbP2yPX9RJ6QLpQ%2Fd5Kriond1RdERa1B3Kaj80i%2FEyWjHeMgm8n8yH2rQnf7dENZqKBTD%2BOvtVyfNJug6MYolOfWBmZTnTgk6nF9UI2ARvtUnwx7w3Z5DaQsuztbB48F7dK8fBLXa3Exs3md5ty5u4MR2bTWXd%2Fjo2eX3%2FHOeKidS9drr8d74mDgwBrCXoGUktu05Gf2vV9QPmDLNHe718wE9cxYlFibV2AkcLtIiBmWZumk%2BUWgUGo0km9zhIj0Wu0G8ALFjFwsAhMhCQY3LSlprlg%2FnZTZBjpjRRttt8Rc8dYHNeIcav%2B6FvOm2m3yWnjr8J6ykpqLjqYwSWAfiA%2Bb47yoWgARnOC6XkFD5OSq5PndSOKDgtwuXskis8umXP4ZHYGvPg5Bh31n%2BTuc8nbgdsOtmUCf9okONbu8X3wDtEKZsjlRwdk7mWT1PW0oXjLCRe4X0tAkrScWVGZSazyz2vSkC8jLUVq6buAqprdu33aR%2B18pXj%2F4A94LZRblPdxRGwB0Hcn%2B9siVomCoujkafsKDpS8iMhsoW%2FWmYYwSxoVjT%2B35YIuzEgENDvnfkEydp%2F7LDSNLBXopMMCa1ckGOqUBMUe7MkUcp1A1hw36QIPwzcFe%2F%2FuTvQN6OrDOuKEs%2FMfrE8g2EmhLrBBqUNN6rviD%2BiNF2xszF7chGx5RsnyQJlbQHA53hOAvKPAuD%2BqjyXqT0%2FLBzHtAoe7W1P6xhlsCjQ%2FknvpGJIRN57nE6whT4%2FMQtA4fTxuheNs9D%2B72V9Jh0S5gVRWbwLQ%2FbT3MWSNdSlEHf95RNVrc4BIsIP5rG9Vk5bvk&X-Amz-Signature=475dd4089bf8d471787d995ab285a076fb97220f0e5d29914e388758a4f88ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

