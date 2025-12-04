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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZS2B2IK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJyLlCdcFZ0acmM8qH0Ypy36IAzxVvmao14u%2FoZhI5VAIhAMcqsGCbNTq5%2F2Zr2TeyORAO%2BoklCF0jNrDSOXL4yYuLKv8DCEoQABoMNjM3NDIzMTgzODA1IgzDCnz8lLHoVhrp57wq3AMVAmOQEDHAAFV1JM2wW86eAkYMJ0KAs0KXVr8TDuV5k1Fk6aQsWuq1hhZRidGawBjqGx2m1f9fasIUS5pc4oL8j6WIoZaSjmuuRXUywX1V%2FRuAWYPVcgJ3uGpyV01%2BHal1cSJOCgXchGnHjED%2F49ze8mVN%2BrT54PkQ865YyYaJxp%2BCAwoLZjUJr246%2BxOrBMwTVc9LsjX2I4oBOamUgQGKMQ4MxymqJgI5HRF6PuaHGS0u1gN65QjziYp2%2F9yJ7%2BTxYr2JTRVQR5shSq44ZBA2uQNAtvOY8zh9abdN1KDMocZV7JXer8nOWNapFFrhjivFVIcVaNodhYG0Z4WsDeIoI3wJ7sRIHmouLZHW5%2FaiPNtkX%2FOBffJ3Q0Abyt2Udq21bDDA%2BbXw9i9YBNvT%2F3hiVJ%2BfFJRAaMuWrm9rxvCFYP5oQaPzPAUgsmJCsucAuzpdnf%2FxtPzMYa9qFeQ2i%2BndfgUTWB%2Bm4d0yivK0K2Pqiai8Fjq042wpokWTxzdKGcEk1vE1HJihnnmuDAEhgDsyy1e6wht8hw6J5eDOaV2TkE6a%2F6lOmoKYApfw4OlwJOGkasZDQoUUFu3ViJQuJ4HWl2Huo1TuNXO9DaStEXZ24YKbwDPWJRawHWeRsTDy%2BcbJBjqkAdhgbtsiIchzIg1urzPr1tn4st9hSdBL%2Bp9KKeXMG7DuLNiA6AxOhiL4CZFTj45qaQbvI9DVjyRzl98euOS57wLcaCuaa9RMrFas8UFV2I%2BY3ngHQHpy%2FpA%2FuV01COw1Y5hwzytV7O7jx5w%2FcC%2B%2F6uRZcoM7pKDKQWHaXDIt1E53%2FgPTuIfDE4LI0i6bXGtSc46dY1ZjIbDLmhGaYgEM0X45eX5X&X-Amz-Signature=313de289221bd4be06de5613a00c4a120adbda44c16f0fd0f08167d0f126d683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

