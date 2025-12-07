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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672XQXUEW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQUVE93WER4jy%2BSDoIkUhgBkfKnsp6Vedp7JgvfJy5TAiEA4%2BmZvBBH8gPOFGfd0E11BvjB1SK1eebmgC4jvQxQkXEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCE47gzcXfIRSC%2B6uCrcA324MX8idRXraAox2Ms8jsO4dX82PmrMXEn3KZb%2BSWtHARM8MEmr1P4DBljhkIOkv2BDvvm0Su2MEbuEC1QLayf2Tgqr21QhIcOIoWT5hxShIkRuYwqHkzwDQIdeMVQd5%2F4d6jQFOJK6ICHqXKu8VgElUT5BGN0ymiw%2FlQEa5leo3zpqYLGc6FzFvyou2XTAg2%2BR09vS555Vg9qnYsLLbGaYf72hLGS339pwUZGf7p0RzMdsniHyhmx3nq%2FcsNebcmHV0oVrBJh22gmdIuRKmoOFpH1f6rzm07D1K1Xye6vIioOyer5LVI6imhfHUFrfqJGezGY4QPGVuoWfQnzrxFdQTD3s3VHwnJvf0esvXqlVThBvmzFcJIuE9aZLu7nCJBEQlMikSwi9kRbi5JtEBKkAm2RYPAokos5AxRsW8JZqnGpfspVmqx74ebNv%2FM1Ji%2FXkyEYfPR7rAjGUZMllseCFM5b%2Fc6vSZjgmpCM6qhALCMTMH1UQKyJetq3MR%2Bb4XsMfr0pq2iqXPryRhOpw9EZ3ReL%2FAZ4bCcmAgNWRZSJ8KQOIJo5WMRVkEN%2BlNM%2FMu5D91JK7Q%2BB9743AbjQi0txEE5WNbfcLB4mPfGIgOL1qvePfpArV9BPmz9cEMN%2F90skGOqUBcW3V6tCVnUKkactdfIHROeJ7LwyK7zGG8OWLf8SLd%2B452eeiA7ZRI27%2FT9cbS%2FwPn%2Fw1wYtoQplMVn6MDkMXqpObrNAv9%2FM1uJGZG64eOdbPryJnOWZ1maq%2Bs8m19N9InyBkcDAam%2F5nC2zDo33aV53DSiQjgl4IbkckCOdBGuTyAz5ZZHZlNu7bi9zQvexnGiIZnWfiWj99RyTdvfr7KmVCi%2Bjk&X-Amz-Signature=7ae01e2b2cda90ee2c4d532cb8c4d6403828f9c863c020b588a65d5356496232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

