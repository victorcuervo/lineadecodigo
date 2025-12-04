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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LDC2VYA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIDq1lO6T65uQDILR5yTfXagEcnWH7z6Vd%2BbEg5GccguwAiEA6O3uGKFiD6I1T4XodyNgJaOsEl502V90xDBeZ7NTOI0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMQ1Jg6ta8a%2BL5YUVyrcAyLz2GlMWv%2FCWio7x%2BMDQ20N7OG9jldet%2F0i8hXfijbfhwZ%2BWM6C8rxU91zWA5vC5wMm5M8RHtALvMTpnPwPWXqETwqP7LwY27CfsRigwZnqNX02saExWxO4pjCeWaaVkLmuyKVNTLvb%2B5pVqvFaO6e4eHUBnpSNASzoMaNuAWODZK9a7gEHCu7oNsRIaNQG1D3Kl%2FMGoas1ZLr29rvcoY2juf0DbHBhRcL1xUNi2y4Oh5omw2MgJ6FdUKM2HYDPuz3N0A9wkSDgc9NQb0E7KBH6pIS%2BAIfgz7HDhrxcMVdp9MuF9JLKUD0Tw5FwhtqeJ6c8tQHgJkPHMUzg1F7DTd0uzZaCw2GL3sWrXUf%2BgM4fL%2BADv%2BzPkxFe3AG%2Bt0osulft9f%2BmKy3lDBhR4ooejTbRUsSWhLWR5kP%2F91ea2SCmo%2FmdQnTF%2BsbN8TpBjAi46PTiQCW3d%2F8McJhjF%2B4e3dGvkx4UETgmzMDAPkJwOjVUTC2ql8GrlHhh6kjLS%2FeNBi62a%2Bq6sF8A%2BHk8vODXueapyI4S51IBstsw%2BUBfB1rL4ogFQoIIqhcaq56xTb3adA%2B%2B3eaHeqVUfT4F3AFlsE1fQgvhkG2aCQsbLw71WTvNgdOx0sh5rTqWTaJ9MIaFxckGOqUBYZ88LST%2FbyEu2oN2b8FDLvtsgjcVxByc3jevICET4phqpWib4sc1XmhQIEVuZABjBptBUnyAZ1Eat6TzcU01ozhmsPGr6u%2BTwSLASKyzY9oyV%2FHQceRsVFr0IQDpJSBqsYj3GZv0H9KSmrtjlAH5JkYeFHl57REcvplK%2B97Mhgi1erebeCPhOBf2MOn4MOKTcMhs9eGmcFSLvtvC7zSVO%2FDKwUIK&X-Amz-Signature=0900045a2897aa3436dbc5a6b32df2f1449324c70c11566b9aeda0c97f004341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

