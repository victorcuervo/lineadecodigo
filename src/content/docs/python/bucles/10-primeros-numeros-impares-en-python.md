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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOUA65RB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChu4K%2BGbtUNuSFyL10lHO2OY3es21hX2H7THdJ4N2amgIgDy37a1EhIsEGbn3UM2t%2B6%2F68fS0JBSdPN4qGj8WT3%2FsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4TdO%2Fu2E3TkSplxSrcA6O99SPmDhqsXXs7qzXjBJ%2BnYgn7SporzMjX86c9Xgud%2BhOXQT9Wk25d1Xddvr0RU4ZkEmkr93xFUFXejhYDcR3SOyFZpfvXeoVpHCVTZQoP9NQS4QbVqUG8MnEusFQKeWGtQ2D%2B5mLlkzogr7DE6sCmTHW1VeOlGwtoS8SvIr9Qs8QU8UKHiqTgeZ%2B3mnwZCfaRly%2Fx7LEbaiKyRPkR51WXb67dKvI0lfwkvq3swvRPWfm5jkcNx%2F%2BKmssljuU4sWq%2B8gGVIIFkdaPhAfmivfBKwWOVfsCjfvsShXJKkxGJRbQ4g7hzOk5iwO1DwTeirY8VOBrdzpo5r%2FNwemEQq5rA60GV94ieB8zPv1E8lrTbi3I%2BUWUDBZb8VR2iL7CQqisV2IYJg5UvhCNeFeq8zgMrRfFTF4SCBp5GnElD6I06GY8i20JYTkIWfbs7aDCF8xy3ixWRcBMj9FB%2Fr%2FXbuDJs1Ps8T63CNrxEUFVopdbxxItFo4cwcFjRFVspfI1tFxDTaH7Xq7kDeWy%2Fb0QwWRllNaKJgj%2FDJHrRzlrzso7s%2FK7PsRQksTcnZ%2BlkjZADZRlIywd%2FNv0eSZqlbftnm5LNQbMLBMc3gnfPfd%2BJCmog2t5bLbDv2rxDEylLMJ7t2ckGOqUB1EU07SPDULhvzsLjSen6YPIZsgJUxtiWYlUjuggpvztj5n0cGsPTefV2mC1pBjxVEsmS08wDFgIvTRwzjFZUh%2BTgcrWE8YquWeDAyimeSGaDwSBrMnpyyz4OQ%2BwqQSIpvEub0TQ%2F4m2E0MVBXsw3QA9aI6kh0qDKLr87WsqEJ2ogEqvpcgfCJC9%2BXYYYdQYg7GQ0aFf7UfrXnc6ZI8lDdYvw5qlr&X-Amz-Signature=49ed393e03e034bf5308728a0734fe19919039cb35df0eb1c3a964cb8a2ce017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

