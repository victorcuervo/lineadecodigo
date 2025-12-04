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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN7X6UAQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHS%2F2XspeGehZIfsQvi10QjV4UoggTw7VHCZIR7Ups3qAiEAnO%2FZoe8Np07WQ8du9RgAvmAizp3AHpmws0OLxzU9u6sq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDCPyW1BayKaGMRt2syrcA86xY03NAwzXvXnCpd7KvpCTTmWj33RGzvVwxki3m6b2BLFNRn135iu28lzZYzavaX1Xo1%2FYNb4vulyLo63LnvMYmqNjsRWv9L7PE%2FfbydAncNv5V7vAWuoMvGy%2Bg3cNV3sanq0MeO%2FlPVKQrU3XPcBCpJg3BBd2nYmidJhOqBpNdIz7d78LnwyJ28s%2B3EIwM57MlUReWlFaz21YfLDwvZmVxwaoSMJ32ScjTBatlSD8LVbthtSvZBcmkE7ov2JszBS8NWCcFTI83cb%2FvIBSPCcDz6Kq21UdWUgZ9%2FG9qzEAG35q61JasSRrDZCmmaHNq8o9G6rK%2BAe%2F7wohL7UlYMg8XfY3leBWrUC9atEFgPS5S1J21z5EYAIJVqrEg3txoAnBiyZvXwkXWlG9uer6roBW%2B5BaqupmCvuz1tt8XoHTAOncEN1wlN%2FgptVXzeMB0mDnRnAXdrRL0jiTf82HRkpdIUTTNMMfGGGEOwDtLOV8LjKmRbz24cm0lsVrOA7FJbntrkWh%2F5Fk2unzHe5iqM%2FVOt09IH%2F2KPk%2BspI%2FuM%2FjIl6X9JvMQh8DTqGK6sCScTd5WOPy0wLMaT34v67BSfOkZQ4FCCFHtVAMtzXsyDVH8M9S80IGQE8Ey5%2B8MO3IxckGOqUBkaABhQwMKWl%2BSYWR7fuc7ZRZuXVDaI%2BznE7vv%2BUfxCcqD2JCNFle1yVf50fD52SJsaRqR9d1rLMglnyVKC2zf7I1YuHAXsISEcJdcNVlthFs8bKtyci56pASbrBGgexbiWRu9lQ%2BpNq0VWBYtVYWTlIdO85lR9v9LK8o7VG9Zmjs1qH0GTDWNg2xsaI%2FKVUlUOYzCkjkTpHqWeUQIRcvsfr%2Bo%2Blw&X-Amz-Signature=436451bfa87f9e034141f7d8b8e0d56f7b751151f2674fd2725c6c1f9d71a3a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

