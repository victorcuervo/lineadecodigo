---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4UJ7NM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBNeCySW3JjrTCUL%2FtAOE2XE722SCi7bwzP3j2K7BUUQAiAahrJ9Q4pekUt1j94CVKto8TC6ItzvK1s2OxnASXErfCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMiP52iZSuvxAyBbKdKtwD%2FaMbcTyEomVBrGQOz2gLQoqw8Gu%2FWVyNSt%2F2KxygZsaJTNb7ctA%2BTvSBW4b8PNAwPIqAfufD44jfPRLSAk72LqmEc4EPQeK0gbRzvScBOCRZErazfv1nr%2Bgvbv2gm4D3af9rxgj9487O%2F%2BsWPiBMjCXIBQWEQuV9QnsWoPJBNQKw3c6Eldi0jD5T81%2FLx3YmGz%2Fe9Tu2XNB5lmJ461SZKvvCTn0EV2O2%2B1LHlUZwvhnoCELYaonkcGxdw7SDfFzMpF1JyzdNw8%2Biiw5QUhvg9eHyICoxWLN5yoDy183OlcrfDgtmLmBJsfGpWR5bN0PWaquuJ%2F5deSTYaiMz7dTcYI8rpDOmSmq%2FnUdNixb6Lnb1P1kvan%2BrcPVW880CbPR04jDnDkkplQg7gwdjeNRh3H5aLeZYD2pWQhlYn6tLNgRsVCxBLnnL44A%2BRJfZGIAUXfTv6iOV2TdoNIW8Xwg1XC%2FTotLadL%2FvdhhRdnOacOzpdo87kk%2BW53hltgmsG2rQlXOe%2FU1uk2hvo3R6VihHHF3agynSzbG1rXkuFnrddGYtD%2FJ3TxSifkMzCC7Tyzz1iX0DiEyAO82gRlz4H7ET36sZh3rkljrGvcge6ZobhQACG1QkCPTBJQmGkt8widzCyQY6pgFuxKoCRxHOggg1p14qjNEKdoa6fDjeWGVPGdhedzrAEmAA%2FvcHwKPM%2BgqOtiQ2vyl25lcUi9y4aa2X6lCHwE7ddx3DzvTP%2ByGsfwipnYcbJMjVpULIWIn0TZZWT3ZEkGdAdkY9YgXeIBx2iShjdd7leqiwQY1P2NFQXlCoW3a6%2B5A6qeoJAJQrDaxnRyKvo5CGaE3pXpdjWKafMlpIktuU%2BuFlgF%2Bq&X-Amz-Signature=e0d1d1e150ad3dcfd8fa1d741d1d60b6b8f5edbde9c231e3a8d83c75dab6e643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

