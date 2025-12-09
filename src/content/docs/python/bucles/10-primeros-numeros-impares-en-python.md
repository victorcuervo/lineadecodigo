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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWI5TPVS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbRhWfvaBEyYk8iWOL1JbktacXIacBOLNH7IUTS50cxAIhAMsQzxpt1ebMi7J2hlW41V8DRQIL9jp7cfXu02AinFuCKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc%2BS99NqpUaFViR%2B8q3ANse77YX5Fs2UULkcQ7GxxKgcOcyV075vS6iEx88AwL1MX8WCAoz3p8hgLPtVDfiqkvQBzON8x2boXmfRXvT9Wio9kjyWsXMQe1U%2BXpwQh6J6MZT7F9ZbiYEeoviG9A6WQUj0lyJvq0CjmpjWo9zXeMpXihcpkHk%2B6%2BFZdnoD5r4PLvYmPKhN2eenv8MxBrzDaZVaXJE8r8idOQ6TjmC7xkc3b%2Fh%2BY6f6u%2FKCK9ld6jhi4mGmHWjX5XK%2BO069Jw8P9ONTOec3Yzh1Jtb01bBB7BpVcVB6dQdTksTSIiasXtwMY%2FuGS8DRSx65hoGaJjbSBJlp1%2Fb97E%2BXUxJBCPl1gxsoBo9n%2Bq4nEsKz7%2BAZSds8kGrfDX7D%2Fu7PBZDFpitDw%2B14mM3q7aYtxUY6LhqIwUcAEduTQiR3Dt1wtGHsI6bLuNnNUnNPluJOf%2FwmxGqYwsagTyqMvOqL2VPjOYjGqHewUwAoXXNHFpsDHVBHHh6J2ooilhrYcjD6Tyb6v%2FtGi4WpRw281O%2BXcALmCfWSONCxADmJZ6%2BV9REvKvCrowFwclnvqWZ6YMtv5oTuA3bu0yY84sNL3S4Mu7vsq6wU4xcQ3s1GXJu%2B2iBt5lZExQw%2BPHKDcy4HBQ17UsIDCRxd%2FJBjqkAeofDxwlmq%2BhqLCL2%2B%2Ba0B%2Fyv9rrnarfZ%2BjDc99Ov6YIoG3QBLL0gYSok1100sOtQe0VJrMPup3SwJ9qMehHaSBzpkEly9okw61ytarYXuzyBj6GPVqsQt0G0bqaXbAXf%2BvHh0WeUbjSJxOwqh3SfE4lPl0xwk1yWkHY7R%2BqaogHP3EmtGrdr%2BciU%2FJDel5Qgm7DiZLVi32P1o6ZJ%2BkxCITVjtR1&X-Amz-Signature=c35a2491103917040f68d63017b7b19eb1cf4233f08832861068e7a16b706f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

