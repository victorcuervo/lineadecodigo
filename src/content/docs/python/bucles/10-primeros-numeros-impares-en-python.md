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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NLESRXS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARCUJkQSdouALEg6sYcqTTEd4OHsU3Xlb9fAyWHp37hAiEA%2FVLVU6dL3CekWl1YdO7JThVfy0%2B8JvSrqHlQJmAXSBMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxZz9BV97N%2FFzg%2FoCrcA1IPEk1PRfc%2BGFb%2BV4qeRIt%2Bjal8WkQ89KdBXojyiKhpi8iIBWhqIr8RbVlbOND8cqff9cXs00naheDgbTclj3FuNJuU%2BSguZF5cUILtMMs7AJlaMBQEv6eqnPWweyV5ggfQfzmCWlyQPwtgJkbsaPKwjYt0dOEfkc6zxNYwvLM88So%2BDuxkewo2ELNbJcr8LYcbB2sYZk87ywsAplN2j9zillUVi%2B%2Ba%2BZPoWMhLVM4RAZF7qKBGBSSgVdJdsONcnOkCGCNcWjI%2FwzxACFsiKm7xooKBkLmidpXvL0zni1E6It22zY%2BMVTHN2DZwEIu76qZBFLopvV8hvrja%2FOGeSnvWxina%2FQvStL1aSwO0UBo5JpAiQovPPaDQ9ge%2BQFVDnuaAthhIMjw1v%2BH1FL9zAObqyd1FhGm9w0%2FhV8RP39WZ2RY6Fdyz2rX7b2s9kx%2FrXlNY50mfy89pikF7iBR3jXORYXssWEBtava5WVkKTlFXWp9IMjVo7oBs8VsnDYHMDAnd%2F6YawZxCFW1BxpVBZKXytaDNIRqgv7kW60TOVbxkgyV30g6F29TbblOxpBwj%2B2n4W%2BD1lgXEQRiWcyo7wlq5jclYcE2csYudsDxxhAuog51wnAeFgK6%2FKZZTMIjE38kGOqUBsBwMhK6gE1KWuFc21hiXfH1HvIOspXnrVqhIXDAIZLPBPIHTASrMdXowj7aWSM%2FyrFIWX9hJ430Bse%2FU7NPM4uMDE%2FoPC88rf3fMhYixYY6rJseBh2BbFHy8EXNa82wddSiCR2B3ta9GSD987arse9ifFmsYcbDtxgrjpMyY8u1hO8k4bp1VG7Wm%2BTZBMz8GQJNrGen0mo8d4feXOMOpsOYbc%2Bzz&X-Amz-Signature=ef9468d92d36e2368fb896ba4e775b1fd5bc5a3fe1976bc12397cc6c1d175976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

