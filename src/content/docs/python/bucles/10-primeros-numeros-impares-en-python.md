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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2VC376E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU0XeuPILym35pDNWWkU3D%2BlYgEAsFeMKPA%2BxUK1V%2BLAIgceZxCO%2BXwlEAiZ9AHSK9ZTdOFlXkEJgLX2LMcL8xpfcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFu%2F27Xkjj0Ocer6UircA1%2BZ8zI68lIgg3flailEe6G8e3O7A5RpGPLc3T34%2B9zCLm%2BWczn0WiNrl3nqCXCnDWnvZU0U5taY9uUmL%2B0WjCQGYlYur7Y3H8itVG8xv7nHh8lLcHuL5AOTIulCCZzV15FVIlERb%2FfvRA90IdbI4M1jxWlUImJuCLoyD%2BaOw%2F%2FvJ7e5fpFp6tO3IqD%2FHBxKS4tw5iI2VDtlj9Ysntvk1saBvdXFqUnfk3%2F90RPHo%2BoI8kLrI%2FNvl4EA2EZBceTzX6veKluF6gphg6a%2FfeURk1jbzydE8j0oYvNilcqp%2BVqARZeGyzHwlZuFKFGkoMKg9nWP5hyyhIMeKAJyfRB8kKrKznKLdwetUP1lIEjJotc1z9XqRC0FPBs6B6Mr8BPyOOINfS%2BRz%2B2iSvFuUTXkT7UDUgXwtiaAy9ksLiss9dseJv3zvyjVfrdG9Ign%2Bm7QcxY4kSTejPGuFvZ16xd28NKgFR7UhqAIGtdDQm%2BWio7fFTktxMkVT0VQM6R87xgAOVzDcfJ%2Fr3vBlPp8qG8%2FSw9z4XWx3RRz%2FpXv%2BjH3SaL%2B4po9w882k8vvoq7V%2BRFK6Fnd7vFElYQ0ATnsw0tvB90DAf2Ft1N%2Bl3XM8vrFOHOvqnmVNqdvdJMtW3%2BkMK7%2B0skGOqUBmYbD7rtkXFlVuyibZ5JuVhx4F1SZF6j29quoowGI1RBFVFcwUE7px2ij9OljbJitcNAKzGbpN1koDRgeGsXrg%2B%2FAtlli8i2wmuGuzh2hh4fdyYtFqQfAlOqkd597JyhojNAI6Y8l9oOjL%2BylUoPrYM8mc%2FfiS2%2BrTOo5DTnPs3G9tLxF7QS3vamQ313su6EZrkObUOGQtiXzaR2MRM%2BG6GECSQ5I&X-Amz-Signature=a901d525277fa65b8ac85217e50ee8f1757c4556bdde1e925048b9cb59655e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

