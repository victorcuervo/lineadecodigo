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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NXV33VK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxGqfNSlXo3w56K6UncWl2OAxm7Q3jae20%2FmNGhJ4gWAIhAIuuJsr8tpRfW7MpFPG3i2oo9h3MLVaP2RxkuBkGIr6dKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM5upNGAZwbWgagu0q3AO6ZDgVFTi3JJ4BkQYh3eLoNNUGjHM%2Fp7aPngi%2FGgkX3gtk3ZUdjrinmtjOG5DJ6Mad%2Btnuj40nbxOAdgGstgqIIBxWr3OS7LfcWwyNQTJMvSkBgCteRpq4cS1ip1FuHBuU3JeItFajq5tHoR4udgUraqIcEKDrk1V5PlP8TU5n55S3AXr5xHXGEXSkX8cIqjUPusNh%2FmOuVDBFHHKu3zcwI63V8T55UkkQ3e5p5xxoWFBnfpamIs4v82Npb3bSfQInjC4hGKRR9isZb6S3CcFaYb1iSENLIgRzf7phr4%2BMuWwqnxxq5tpn%2Bw2tiUpB7hjepRFZrf4kFw6CiI2MgWfztPVUKjz5aRB4B2ED0687jJXlXg3%2BvVI4TBa3mYHmdXQH4QZd0BF1coqc%2F8kwERSZyIckFNE3xoiGmocHX%2B8kKGf8SDwRQwp8uDFixEYQBTdrjLrqqHgbQ1OY0Uw3NCyE94W2XqhcBFwdyz1vfOzXq3cpXI9CWslJJltvi2HI6buJ4f4ZPbNHoMiJcUjWfS9eijRsbrPyc7IF6pWIBUaCs%2BFE%2Bb7NCEi2WvOdb%2BZL%2B8z3U5zv%2B%2B%2FyMHHb2ezxeX4T5tPFfnolUAqCoXadV%2FGAhZ6Q5Sx%2Ff0jL%2BS%2FgHjD7mdXJBjqkAdKC6hQtnroFhAgpNbhB6u%2F%2BjUgVW%2Fe3WTCQg1Ox00W257t4msBU5FYnQUFHRJ%2BpVFl0cPtP7UkQQMCjaWDrrl%2Fs%2Fp3uGpz20DhBQibRsQr%2F5DJu1iy9fHlzw5i%2F2eYoEUtFfbmj4P6ANLV0Hw8vZ2nzvzc6JZGJ9R0Ai3kIr%2FS06qS%2BOTv7pq7ac2WBhIX9vbJRzbxJLXHztLyedYJpn97FOswJ&X-Amz-Signature=f830d44f5b41dbe6c72e013e08fc692740c74b87784f30673a9b21ba29baa92c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

