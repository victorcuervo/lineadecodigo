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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAZDK3HY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIHsX43ft8lPZJGM4ZlA4CRU5Spcr6hIo0TUTObiiVVIqAiEAwhhuBttLFfv0Bj9gWpkI50%2BTRSBDyC0CcDKJs5cwd5gq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFFsm6Jj8S1eLNjYESrcAzXgWjySs7B5gybH3ugsXwevdRk2k71N0WnQqJ%2BX5wPJDS24LkyuTq01MA3eED4eLaSNzlfja6kyuvVc4hiQkmMvWoeCUaPllsKkWcPNSJYVgX6Rkp38eW3gZcQURh4l1tZlHxty5Kiyj3NWGAzkYO0kn8MvxM5rGuB%2BHeO2YNNo6r2QA5pIcNhOCruvt8oUbEnHBwOwPD%2FnMGBH2Yngb%2BvHC86BsXYH0gyOXWdJAJfAVangX9shX%2Fq3rqqCg8Yl6dAxyDOvSjr73klZn8ZmInsxpHyikFu%2F2Fk7ncEfrD7%2FwjqJ3ehaO0xbHCHlBy2mK%2F2%2FDFdZsoCM7hJSassK4RFI9AOhE5yY0DoKMh%2FtaRpQS7DXmVu2%2FygwsXdesgTs6ySQWB%2BrESeBP0P0TnXMf%2FY9Z0h5xJpo9FL1HHXGoFIpDythn0YsCsmu3MnJ60tg%2FYFRMY8wwvCCDhrpSdBzWwiu3hZTEUh%2By58CXGydv2NFVMtmDpFOxBz%2BhetzdtXZr%2Bl5CuEXBcMhT7qOyRHR0EbDoC5Htzu%2Fqe7IHYugCgZFKTSnITSHMbaS2gyDf6tswctBYHJXE2TCfQMoivJfoJ74l0TJ%2BBUFPc8OC3J0oOjN7iedAkOxOVO3j0r8MJaDxskGOqUBeDNgTAH6LQt6RBYPgWM15ccjBv%2FUCrYGLjGVUtiJcddWltk9hOk2L0QxofdJofolQQMisWvawsjn0g3ylWFHjjtVUcJexHz7anJXXKkXshGnRYG38R3M6jxCbfOt5z%2FLVooTa3DU6yTJrpHtjf2L7lTdQUvVv1V76dUtP86heQ0K06iNFjkGRr72q3q7xiKmw8T8odghYQRKF4nRmX7w9VHcoewU&X-Amz-Signature=2ee3933a0e66ab4f6dce13a20c8fcaf059028e6476571b575fdc5435f2bbe113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

