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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662QTFQPG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM1OjaLfDD8GnlWH2j4RENiDXg1Lzh%2BHJ323bHVWSmHAIhAOpZS9JeL2AvlfkTHyBr6u2tNxhEn059Ot3sU0nmRXO%2BKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz7VQ7Z25k2WbTnSAq3ANafwv5G%2BP2rnnVjt3TXoUXgEpTAlTkhPA1WiTLAhLOkWE6TNjQ92drQrshPnZMINHVfj8XMa%2BevrdIuRHRcKmTyX34uc42CghouvY%2Ft35HbPwuD%2FbrkBpTWAU9t9gEA4iC1FXa2tedvAh%2F%2B6rykQQvDX8cFTU9PJBzRpSEnCPUYWm%2BGpTRl4hwXWO9tAWz6tDtXE%2BjB%2FyH0hiT9eL8dN4Umci%2FuwibAsEeb%2FqEVyi94Wzz%2FQ9eE%2FjQe6iCnifK5nix5%2FGuuh4Y1mL%2B7XwIKz7WdhTftfyjPqRSGjzozkJKfIACzFO5XKHacpfmWD4dK%2BtbZo%2BFcDVd6PKdUYSt6FdDYI2tF3MmTzbv5guNaFa07q%2By%2FebqP641wtcHfJJWkoDWwFMfwe6WbH11JkbXxQQ1JacshBKKCFSXrSPF9QMfEAOi2FTkUvxdj22MK%2FzDfF5inBQNa5KllJ515ekSH8JCIi%2BSkhQ8pXFyezZBWrb0gnF2Ltq3gC4kMYxwK04zzwGel6U2ErJknSN5%2BKmaffpkOoo6qTyc7KPjy6KyKgw9qtRGOUGZbXgVmPvXoQncutjBbGXgQgt6RaSCk55QeWI7dmxGN8ub4chZFWwjp%2F5shKSS7j7LxrYMlQ%2FHMTDr7dnJBjqkAeLk91iZmYx44VWUb0fOGEdXBooDG1xvUNB4JQbyuGBXG3ERFo8PmcPXDumGbwr0uNYCRJI734Wzf9MCWeQNIUbXHUZAGszTerk9f5YSfJXgm%2Brt6YEUboUad7%2Bw0s3ViuxGfmCxUfRt7QJD%2Bkx%2FGL3a7Sa4UOPpUXWOGWp6y3W2thtMM%2B60b2Ns%2BrTvPhuFleWTI0LW%2FfLV0z%2F0js6ndG0%2BZ03M&X-Amz-Signature=2a08638f8845929bb317cea5cf9a4f92fa2c170c96d75124e04dca8d61f2e366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

