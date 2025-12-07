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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGN46UN6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5FhZbDgEU0fbr0IHQWd3rt9e%2BFYQkYNAIcudl5Z8EbAiACy0jMU2%2FC73e%2B6X8Y49CZppvkcBIpzm4FrYGMi9aX4CqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuZbolASg7W4WaTQwKtwDoq0d6SQS0kKHEGWoNpBOIa5%2F%2FCgKFMGApwyYGYZMJZEowc3DwsDERrv7cX9%2FXdi9KtnN1bzLnVcQCUjN%2F6uFjk7%2FNNPvoWAGA2oYidoWnrJ9z4XjyWgIPsUclgPNVlR7RImuG9brawj%2BpnsIWiBaGAIELKbLe6uCX8GrxnC9nPYKmB20FO35KHdv8qHLJtklFdLQ4zhCheLg9QQUd87mngQiBK8PD0T7uB%2FrXrkCOF%2FOQpwMwmsXztPc12QvFPaAEHyvE7L2v2ZGktk46bb2mz8XzMeFmtUWFzki%2BasNswkdMgRi%2BQJwiFvE8Xb%2B5T1nA2jLHqdsrxG11g92OTBbvPU7OtVp137KfkEOsIzOmy2fpPUc9zroPpozGl867z6geAvAmTGult1Hu8N%2B1lzlwjTCGAwuC18t1FlncV3UI2cZ%2BLaOEEl3aYMrj3P1CavfGMDA4o20wvP38nls3JJQKI2Ok2GnBV703s8qsv3cB5d%2BdAAL2IiAUXmN4XjfIAejSug5vHbjda18cfdnioZ9bppBUAdW958%2FYdfnhBVrPcrvwfo7%2FBvHSU%2BWcRCScj5WxJPp1oXvb00Anc275T3R4nm4zlc5Pk%2BCQYSEbgWJfTWiahRoLYAP1Q8IWdAwscDWyQY6pgFylKpKB7LC1xkIUcIZi%2B%2FpfRdvz%2FqZjNklbI2Ht1BP8an177R3N3DdHOH%2BWqAfWemTVdysxyQxGfklV0PxhYLk5z%2BOPpsRmkdx7Kg2X3lkg0zfB2c4Q%2BEyaxMSEjyTl3s48L%2FB4x5rLhD8%2Bv1kCKNPikSaLrzIZxeTws%2FoV4fUFmTWk%2FVEv%2FEd36hOYHqm0c8rBSGs3i8GH1ajpVna%2F6KxMy%2BKhlmb&X-Amz-Signature=e3cf1ece7b27314ba25e170c2721b523a50f23e7e8793bcfbc86c12e810ce5c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

