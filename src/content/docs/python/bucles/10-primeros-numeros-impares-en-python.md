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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCUBGY2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqM%2BURTTiJkqM6Y9nTH3Cz8uTKpyqyXeyPDvpI3KvD9AiEAtXfCBfu%2FEwDz6c7QYCKkNWPqOJG2rkUm98gX0sSS3I8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMmZoFtOn76XR%2F3WCrcA9OnJfAYkamd5x98ssVHfbZvIUD16yQMGm7KkSJzrAyDy5%2FMqZ7nh8D0ugIKuuq6kB4QYZbRvQJlivJBSCRd66zBjqYsB2X%2BXYjoc93S3gKcPo%2B8dZgFgiCDR0j6iGUw5w9dfrtqCdzdKSfX3cKeuL6mKbSc6omMK1RnO4aKTB964ls0oqiAWZ2ujwIBELJZLV8q5tp7L9Qh7fKirVRx95otZZDNxUSkla0a6ueiTCLkPW7%2BAcOVeRmSZEcj7oDCZ9Td1JpSz7C2Us1QCL7%2BCYNJh3WjTeVqoN4V28sHohxa1EEyCiQl3I1E3ksletHbLtx7pMBTr1fIC%2F5O25bE3%2FcZy1OnIaFqsM%2FlO%2B0DQR7hmS9DNYig14etk6gurCu3htGZmQ03U2NVwn88wnNg8qttxbuP7KjjceF2CcHdQLdaLDBJ6eMFAG2u0vv1Mumgmng4UF1F%2Fk8apM1uFs2fasivpnBr%2ByxVmD89W%2Fn0Rz%2BE6w7Gz1OnO3ik6hUOIn4IaxJ1UNKEPvaHeADalCPD%2F1Bhpk9D%2BGe5dGBpdWWn7LrX0jJFiZQSRYI6clOn6lDblAPIYzZAChnDS5KT7%2FDrcsIDSfir2QEqphuRKd%2FVmp2Z0ke%2BuZodTJv%2BZh4pMPTH18kGOqUBoFtU9mVGNveVR3D0bODPu12MZ5aBe%2B8h5fVoCyqo1DMQoAiH31C3lY%2Bb8Xf5LsceWTZaAnJj9pECqjSaB4oR9uRy3HyLcOyu%2BK8ew3h6s4nUR9Pyaqw7Le95KmBfqW5ekOgAaCOZT8mf%2Bbl%2FzkGTzd5F0xTcGGCAs8MMEtX6a3L8bmwKY%2FjoxGbSQXxIInyj7VUZoXLEqdf7vZVyYpHgpxnHvydC&X-Amz-Signature=f484a31e772f6b8a981ae69fdb17452bde326862891cc7bfe5258fc614c63ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

