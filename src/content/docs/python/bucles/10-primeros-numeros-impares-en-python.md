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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIP64OYM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIAKie%2FGLrHx9kigbBoQcgv9xZFhOiLf4ZUJBvUCN7Gr3AiEAw8fLIN8E94tbukFjo1FiQ0ALknYgDeKJb8fQMUiNCbgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDB3DVM5HjxDsp7uJFyrcAwXshz%2FmchyoZSLH%2BGyMULMsQ5oODwxSImpJZIlEB9xpokCKcN7hZ3Nt1I6jr6hkDk4fL%2FIf0HJdS9sXl4vVwrGQK%2FEfXyHTAZp2nNGOpr2TDJgHrtNpvXkebFfCMzD%2BsKG2sJgj1oPYjblna6lghpSfaS2nuo%2BPHXTvZPNSSKhVgHsVaLvd1BW%2BX2LnBtrNVP%2BCP1pYL3sc6s2egf5mikgtrHa4IqMDVSL96QGg01HqqKha30LKn21QHAT13m8jqmEFDOkitp%2BT%2BaoEymt9KhukYBENiSrkn9uHuoc%2B%2BCxYR4knoZB9%2FghxG%2B7mrk3XpyT9bHEWYbcj9mXCZzcZLztmpDgpFNINKJCVIo11Fk3cK8vFEpufTbTy6GEKP0dfVhLK1chSHDhBrD%2BH%2FJYx2kyhGsLZefK65kmY7D1xXUHgF%2FAu9l0rTkQvhJvIFOPXf%2B1aZlLaSnajnCT2dukyLkDnOKeO9ZYqydJPFax8KYglo9uTIWd7fKsW0ohhyxxen8EU%2B54lvSMSHG63ZpDhU9sh8a48fVF7Dq07A5QQ32Od3b2%2FUdNxVk9vg8KbQGNUN4GDiiyypzXnHI9%2Fd7gHKOduL2FylYUTNo5epK3zvaUDL7BqSiQQ4bpk7Od9MNPnxMkGOqUBlYwwVXO6L4DNwCQZnWfgVxJdz3lxZmj66DBmfCMTGeAhjUPUJShwkO0V3%2BFadgAcdD1xefef6jh9yvoVkN6%2B92siy55KSl7xQqIjqCUW9860olY53vYeq%2BDOhICwmRoBA%2BQ7MM7O5fOQIpyiGvBgNj92Q5xNhUx3mV2pC5tvRFKeTFGmlbKxwl2SpQVd2ZrFwC9FSqNIfr5IkZjptFxt0umUIv%2Fk&X-Amz-Signature=660d2015e1f5202e4412cae4150d05623ead08af5d044659be9a2d0df4539ddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

