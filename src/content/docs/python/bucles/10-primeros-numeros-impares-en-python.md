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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDOA673A%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHH5ncHVwcF6KLeNKX9v%2BnY3jlsE0sKtegNyDargEFZAiEA0ra3WeK8nF%2FDiWDXj1BqA%2Br7Fzsp4wOpD8pda3VzQf8qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4H9%2Bcs99I6thTw8yrcAxuR5EwWIRlal73ZP7RgRYwYKCH3%2F1VHiPcR8u2Qebv9iFnwkx4Oi0bKUVzNCKqM3J5kluCb4t%2FZrh48qwQ7M%2B85InU0ofRSeq6FaOHZu5i0cUotrJ7gdfRcwzqGw7a4hl1rmHS8ibcODa9NqB%2B69MStFIG%2BCYeGVxd6qD2%2FaXcjEP3pvZw%2BgIkGpV4KunRerLTwK8ajedifxyxHwsQkeT8fC7YoCM4LvduPBcACZJTMYTS987AaMH1m%2BP6B9sfnooutOySlaGbmpvcr13zT7Lzh80wyu%2BUqLanYWrx7tuOz%2Fq%2FWtah%2FSZIXtkC4ALD27Xmeg5tX8CGrErkuX58b8iV116%2FmX0QwbLWNrTAqPp%2FDRFs3pwuv4%2FmdtIFdmKKOnMTvqCNtH56HpN53odHq4ItAhbLYnRyX4ROtrm8HetgJzR2fOt3Pct5qvCoW6E8ggFeBraKnumPpUICutA9F83q9DTZX%2FPK%2FJ5v3bXpim1%2BuOWeVzOoPOj4dxwJHR8u3ErF06kB%2B6MfeiXkJ44j%2BTQXfESPgDeUX0jsRgGmz9jMbjt0Bjifee1DUo%2BONSeCNuvolEsRS18dNci9GGHUd553mPIvrH%2B62tPBHLQ8yOyXgBjck0LR1oZW%2FjmPFMP6k38kGOqUBEaphrtiQ7wF%2B%2B2%2FeaZrFWcoH7hIWiW%2BjtAehWk7vkJXcxsggKK23ZZ6jLQUhLNgPFhw2vk%2FDTmkZJTLhGs5GeZPXxjSQzBxjUASGcYbiGy2d%2FJ9sZDXMMf8nYQS12KUdT1G13o9N2hyadqwNChOObc1tSl2TEMFf%2BLilYrbLnkDDlyNiL44b9dGLwmJLYIbRSoE5cKYbdgrUFUZnh6dcyhvT52zW&X-Amz-Signature=f5957b7f8d07452d51799fecb2c2427e511e0d9999ad626d3bd4540861f07718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

