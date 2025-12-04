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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBK7RAC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDWX3a9qNxB8ksrD5eUEjCYH%2F4tGAG2zEP389et2d%2Fe%2FAIgH14SUywv6yVWihwM2eT%2BozhWD4KJrR8dPmqt%2BU9YYE4q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDA0GaIo89wbz3V4yfCrcA4rzlyA2hdRxU65KGvKUgeEBx2iRyZbZv4mNQgOlsdIMFxMau9BbOVFe9WMGvzKnLc3E%2FL4715VPZ0b4mTxTzp45ixLaqZwLWHFJR9QMXVZJfPDtGEV744fh%2Bkxd3W8W6%2FkoNFr%2F%2FeZYBykBSGsO5ubDe0VDab30EYttGrSihN6ou8uB4OCsbCzKbjE%2Bhmzv8MKhtJ8%2FuG44iHRwxTpc2rqF0XaAPg9KCSj5ASFnoqMie%2Fm%2F2gf5GufIedtL7ERCXa6JR3%2BhLJzbw0z%2Fsb96WbjfF7a9WlwOzbyhFOO5LWd9xELvgI8w2NHfsAvCfGxby%2BK4fnEGTfgIPV7wbN%2BxiSAHFmNewbuzOBiY%2BIkMYAG2FF%2Bjew3PW1YY3xxzNvpgeAyWaGxMeO2EvrVQb0IFK2MjzEtxbkNKHo34qniKzonRAYhlxvmzHKaTdt28F8xv%2FT6Uay6TDljrQruvgao0fANl2MYjmlKyXCI1HNLlPhdtFP%2FNAY4PQw09BfBqY2F3VqTIFioSV%2FZAQ7srLopjByWV6V4T3XwL9YNRe%2FIBFu1803ngcli2N1VAFFVTOdEZY0Y8UNQyKECv5eIhAjVdMG64k3BPVY0SuscrEIZZlrT1AMhkGOKLvh6qtoB5MNvzw8kGOqUBdqAwqZUSqdG2XXQstOu%2BYBkYEjHHplRpFKHRVBh7d6aWZs7lxzqWoxAlO7tWLRX1V3bBAcAA%2F6393%2FAuneylO72HRQoj4TlKcU5RuysEqusmC%2BIwrW6FCS3IiDddp82jknONmlU09o6L8dP4BlUNIOksYmaPhOdp9gcTVun5deDz9GkN%2FtXv4SS0K7M0X9xlIXJPQ6AZnAivYSa88F3PbO6wnxYg&X-Amz-Signature=f4480353ed5f69cbd502a478e4cf4957adfedd7fc4dc0117b1d28e9dbcbdc869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

