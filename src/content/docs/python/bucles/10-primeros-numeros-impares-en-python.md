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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NADKJTG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDw2fw3ceunIowxjcSIGEaUN2PiqPkwcMVfN0kK9tKLuAiEA89L0tt88YkwTMT3oPC8Wx1kMvnHlhH7mdi02amqkN44q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDPRTYxDUfdOj7y%2FGCSrcAwmeeERZMIWvFfusCpSjE1T9X%2F%2FyTbpiWOZ9X90U%2FvAF0LpbqWIJdQVQlyj%2Fl411VPuVmi50PcTUCNlXJWHA3cpQmkMbWN4YMKzHDsmRkOVq90TaSm%2Fs3%2B%2B%2BFIbb%2FvuWcqerCElZGKiJ72DpzAoIbsipnSBZCJzSbR2WsJ1Kp5DqIC3tVaiM2yGhMPN0maPXRoJrqpqHZffHIIE2yXTj9LaF7Vs4kdGgb%2B687usJ52dve0GugmCKL5xpHm6b%2Bqt7jQfQpHwCSOTWTMpcrbg8hgCT%2BbutMdclgp3Ga1BpqmDcS0BfbslUei4xmNTe%2FpBGyesk45Sd4ff9B3zbo8dNovfJ7C2X14KV4WHj7pK7Jahvh6eLsYBS%2FtLX6GQpDh69iKBo88BtX0mnmZJqwfLZIhLfWrTx1aXfz386Zsk2CIvTVP1U5keIdZZpsHdygG1TWEyE5zL5i3mOhJ7IpiDcm9W3q03OLWiPtqqPgbekfJpwR3AwyGng7tsNOnwD1X67eJPZH1uEbbHaw7G5QJFvFSpVu6gxy1om0pefKIar1BfKsrXoblQbfzoM%2BWuLXgApI4uesBkaG7JozfnWL0PRZz5qqqaFPbvc9RRpaufmGdWOQh3JcbKncZrUbbVJMP6hxskGOqUB12jEG2CftA8foduV4AGf5klV%2BK63HnVm%2FBPGW1YkmQYSkYEXO2ngH6b49F6XG%2F53g6ZhU13Fh2UE5jTYtZiPEI7D8cZstzjEACiFCHFjDyD15EjLhCeup6IUx3ZNFxiYsyLan0fjkSDP1K0mdt%2FAcmc5T8SyYZho3R6Yf1tUxAh0fcfjVp2k%2BU6P7WhSTvLW2DNeKGkF%2BzmAEnXupLjHWtcDMFHB&X-Amz-Signature=52221ba0b3ff921e18cf3c74179b7a13676a294cad69f6f24bb928bfacaa7819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

