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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UNYGINN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIB8iqQw1bmOR79v71U2RZ7isSJuIHaI1OBu%2FfBPsbVikAiEApcCMW2WB6DlpZ3Hrky%2F7QJWNC2vsoVdBjCNS%2BMiKTDsq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPkmZcYrxB7I%2FBToRircA7lRyZXiMiFfdzb3kFiE6YZLnDb%2FznJH4qMcIfV5XBpa2NSOih9e4SXXEAiaxAqA2brgfVl4NPpM29sPzkgSnvBUDQd%2B9bILVV7nkKb349cVmfCuhwfS5KhacV5jX3rw8MR41aWz9zZIuIBOoeQ9eSPuKLKh2CBxapTMtntk5o9SzDonD%2FnWuVO1CpALjDEJ%2BMAdtRFUQeHReEBW4puWRsU8WgGlZkf5cj6pYAEZDSVHXIqt%2FBUy%2FqvrLtpbsyqEuuwMtXUSz6JnBaQh1N4zT%2Fgakwdn%2BczKIuTBfv8cy65uEIo0%2BKSPrZqb4cMj6xn3Vz4GCllq53c4DITYX5d7OOn94MTRFDdSsgbsdjENW5Ae%2FaxOpN2V5v5hRZcEkauhPHS6sdEZQc2w7Pl3HB4nAaMkfm8dg%2F09qR6uFQINWXKj4V1oY9lZeTd9DAB2lE4WsvyHP%2BpdzWMSCSQHXauWZL31pMVRTE2x%2FicFPdIcia6ugWre4AnzxTusbllUJT%2BVF2mj8ke0fp%2BnRcPzFfco4QB7sIwojCwfZvP77HBgtsgQQqhgIQBXh9FtwpQhn7DfY75lHi%2FoZNRhGEE6q1QwD9ViLUnTTYXP8U270zjM0SXdnkIX2UImuDPU4YRAMJWsxckGOqUBL01JFQ8UUHbcoKVUYUJmL64zW7CpmZ0RkmOs%2FokMgqeuNm3W1MSmPLyFfZS6OIjkg9PmItF1gg3UFWSOcc2SgZdrNhdphUGEME%2BDhS0o1NdK4zyqJ1Q9GjjdtTAwY76QonvNn172iiRo25hENfvFpitcg4l17M7BMZXQI6NjnQVJP7FNkRfvSwHp%2BnTk6GGirnbffJRCAl7BSXcLm%2Bc1YpeV%2FoYa&X-Amz-Signature=944a3c7b6e748fb0d2d25630dba419b31797eb5fea3027da940dab38ea0d5650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

