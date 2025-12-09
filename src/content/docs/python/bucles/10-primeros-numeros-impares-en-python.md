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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKL2N3NE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS9LUV16PvbzCF7faoTjwQTb%2FCPClQoHnP%2FfMDC6PX4wIhAOQw42CGP6HJSzKq3z9WjfOqFn72S4xH0OnlNAvrHIghKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDVGNj7V0nOxvs%2BxYq3AOfmRmCsFVwCPrEOF1Rgober12tUgWUJqN9C4Di4vOYTG3Soisj94w9SLbhjYxrUejRaReXFl4rhqz15A%2B0whiw%2F0tfbljW8NsO03fabdiGL4xRI2cCo1eAGzR0BC%2F41nM%2FMME%2F4aYfOnphqJML%2FvL%2B2UCCnzy8bOrUCDX6swea0%2BiQ1bKagZQazjQzD2ZwrIAGqpQphfqH1LjkpVtTae4PdOqL0QH%2BcNkYuSrpCbjQTl4eT3WUWgBW0oo6xEq2Leup%2Bu%2Fq7J5%2F4WpD96C0JmtaisysMhx37wgR3gg3BNeJ0KGufg9Bz2Z3BpAs0QL%2FoCzRy5UHBFXBEfNo3xpSnnlqpbNuAP9Jvzjb2QhX2NWPmaPIfB93BLuSvnoo7uRg4CVF%2BIJLG9tlK44XkQQxLX%2Bv69fd5xoJe%2FMnJ0FCU1E0Bwz2x5%2BC3DSonRogN0t5qzOifaHJ0y6TS9bXUB5uUqDpp6OMkk2OMfwAe5R1cspkhjEGJ5sc%2FPF3CxJboZ1k5tiw9PfYPYILhm%2FSDRuk%2BIjtqIa2zjNyi9hTF1rOQjNNk69wenS1SiN4KuwWGCjuL83VqpH80S9%2B7B4yAwlfzC0QqK8ncMBAopYq3dVOVBucj6QJHounc1x9b23pbzCX5d7JBjqkAQL2PTjcRN8Hl0KdK2DY6EZHFDEciix9AylUaNs7lZldVCs6Hc83tz%2BCBw%2FCBKZwQNMyXHKD4sqzHaV0oiE90J9s7AsQf1v7fcdlrCrSvi9GaUA91wuZVvAKjDcXzPqSUhO1yJ1LifYXmyGC476IodB%2FNptHgva2KyLtg1WqcKhYdlR5PtfRrGtMkMNGBH6ek18VoAf2zoix6BYljKE6WHESBmWQ&X-Amz-Signature=61a6318812f72282a7398a1b3eaa44c83643ff4aa1bf4e839fcc8f3479835da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

