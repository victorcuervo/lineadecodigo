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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLKKMFUK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDHMM1%2FtMmg6nu8OLK3YYbLPKg6z3pHIRsm1tkR9NYcrgIgU4JpsFL6Cdy2e2OOMZ3aVDbIl8TqvLhVVO7AxNQK4pQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNgJea8byG5bnelAgCrcA%2FMBX0RULkN%2BK7zUvKg4euPYN2T1BoiozAKLkn6wc7s916xz63ZcDkcrkirIO92%2F2Px2gtStE6w0qwiB9r5gAFyJr%2BhBuB6%2FtwCH5209uMIR6AW0OXYyoon6P7YK8rGePkjYSH0sspzCLgi0LppTjGROs6H6dZTXp53RQ8j3PQlE%2FCMKxxN6bgP6m1bPJOwihi2MRPly34KgFkuPvSNdSLcxMhWNhYxwpMHY%2FdIOiC4L4UwBM%2FgkORxCFFoQZki7UwmgoaEmRD9iiQcth3Ety%2F1KxT8SrdsaYKRzaYrBQQK2C4boIrd9IqhCaLlI4Lp%2Bi6TQKjLKM9132laBkdJGmRGzNlYNJ6OHUJSKk2BcXAPGLMKSrIsrjfLlurVsL02YmNL5lwRn5DvRnbGFSsBdEhvrrbvbc3xvRYD7%2FYhgSGa3nZSk6hrWCHjA9OTa%2F%2FWUUp1NXzkMqMy5l%2Fbcg6WzhGgL66bEOrPE0RwI%2FbVUCg3HNWpAeLodE%2BtDJwx%2BF1z9XxM1qDACyvVBr8fORA%2BVhZRLAxxO77DEvsV9tOUDhVeBfvHGIPHcNIbmdM5X3iJ51EE5%2BLallUZ4vDkpevr0VxhBss6YuSue5MSOdCc4RXjvwf%2BRX7H%2BuJCujf4pMJWRxMkGOqUBwp1G%2BEZSjGG3Y3l3AUV5cTmp7GSZ3xHADJiZy58tNsJoOOdkcyMHwnNOHbJoGsVTbah7ve1LDGEdX%2FYDkjlROXQojPw6O1UeMmZOVOhi6D4uhsVUn0bZ3b69nOnfslkEWU%2Bbft6raaaMzNdyHzUe5rA1jQikkJQ94XXnin3YlAWzE%2FcKNTkzYTePjt2%2FtKx%2FFuwZKIH0JvEqtVcXJ8y5D5AR1BCv&X-Amz-Signature=0ed6e92cadfc3811313927a334d31f1e899fb5cc06a58f47e964c998993e15a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

