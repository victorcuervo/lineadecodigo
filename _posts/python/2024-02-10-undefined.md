---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6JFUBSF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T005051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCEktGXfz8JJuApOHFLk3XbGEuFjoVcLlu7jFgGZudbrAIhAKFhrAwm9T8TqikKzuAvKo%2FdaEpLfziIVImrSZFv38kZKv8DCCEQABoMNjM3NDIzMTgzODA1Igw83WA5CaCgyzG6Sscq3AOl50NnhYMDhu0%2FUEo7KsbORrLXsEkkf2Lwe23xoZQqkfSdma50RQmY2mT4Fqf40Urdd2gFibHvNZdV2BOdlVXgg6qPsisR1k48gxJeG60RIpHqy8BYJbo8UOUQJrsZI2aYVqClmZopa2S%2BGyHHrIv%2FmRI%2FP6Mi9DzlCUtz0HS5vvVjBJ7x%2F8aEHP0zR6pIrO4HlKJbd73Lx%2F41pHkg99B8680ZTE7rrsldhL%2FIysFSruWTJDn6Pbjnesd6reaP3v79VzjmHGNFgovgGmzotQIn5R6T1bjBiyny6%2FNEKlhkLXByC4wx5QpIiQhQaPI60o5H2yewWMMaAay5gqShwzyMNN8ENOd9cVuNvnWJ9UoHa8A4ResxXw9KclFVrlQ557GhbKlINix7ntc%2BNZgPQxd%2BkC2%2F5Nq9xX%2BVh%2F3vA42GylQqTlCDd%2FgqFAHcISz6mGYpi5dIXzZfTqlICih35x6fa5iW4olXkKmjvOrCud4G0EjuYANXctAs0ixZNnqQVocvG2R6XLKJQJP27KyLYSGPnHRhF3x4H3jzQu0qWTLv6Wd7YdkAZUVlOa73SP2RF1KYgUri2%2FPdp2sm6hst5BpCTYfkmZOLA872VobXQYZ1ZUkb1cjPAwoH4KSDjDCr%2F73JBjqkASK6hIbm7T%2BPWbxSrrn%2B02Ev5ab7HcT6%2FNoGOCuNTBDY0XDPswbwqdMoiivLQ1%2FoVK97l2Zk1GJKGjSJLUGGa7Af5yq3uYTPI3S2nqo9P2fuuVr53qNWVpxWeGsN2Ag9fr4JMj92h3KTYEHleOtZ4oYZGMiah1UZJYQDRUmmPsM4saIr%2FaT9N7XwF52kEHIY0MVJlGcege7EZOTkl8v8JOI7wo%2BT&X-Amz-Signature=4329731fb272d1f5ef707795821797557beabfaa346676497b84a97f158e6539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

