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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ756AW4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0N45EhO0KX5T7CSdTLDGYPr9tOr3txVeemlbnHs2PoAiEA7%2F9jVVyP4Cm3Lr5oWySAc7w3tbefquhgeVid4dU%2BV0Uq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDL9MFC9BjElO6erouircA3eRSi2aVP6t3jb7%2Fr19Ly3cxgj2aKzxikB5iHQpyny4dGMTy3AnTKgOJ26dVzfJiRHlEwmK8sgyxmRTwqwCw0lmwhqfOo4FE0Nld1b25IFSHgtpwRZ6JY70jFd6VtMHjmrRUGab6sAOOsJk8udM23KGy3BE0TbtTjv1uNJtPjOlpYwpnK96cE%2FHmKBMDCyH3vh9E5UHEjWbU25RJNdDVK71LF1k5ZsmH5JCo%2Bd0%2FhGzPcAsuY39z4h%2BYkKYOzRq6ehfE5e%2FQadIRLlxfJ7uaDaPnxS2eMsXoFPjbQ9bXajysUGPvZ1GX3oI0z66wz65cTd2JBa5%2F49bz5Ls0imZmhx3tq8Twv6fwFnSdX%2BsZja5sl1I4MJeX9q1L1xUjlh8Mfc6lTBW%2B9VDcKgmEkFK7sfdYogB2YnUSKkuy0xe1ubGRMYhcEtjBP5StoL8MjAlq0%2FH6%2B6cXrQYHpz3lWJjU9NbAIFqf4O17zWhrEigPIcxqCRSqvpQ%2BuzQ5F3T8VRgO0qHNs2cHpKYG3c8ikRg0lAx22K%2FklUekJ3XxtposCXlDS%2F0Eh3yn8QX3sh7DYp6HjObc80252jhAAC4BkI4kdyedgaa4WhXiCgBS%2FtG1x%2FdW8V%2FQQKZkpbiluT7MJ3oy8kGOqUB%2Bx4rZh16DM7zAUwTa5UAOum9j1rYch0aygUQtx5Rkp95ZXUg77tLHXEfYO%2FWPFpgB8BuIobZDBhpjEriVaY0uHqIK2VzBkyYs7fpqKk2ossaR3WLbSl3k%2F9X7Sda6%2FZjNa6TSoe5kMrw5j8uW10ua5hBFaT6I66gBh0wY3H59mBWCjkOmiUoDtDNPwCzjnkE5k1e1nv3UlgBhc%2Bf2%2BjVslNbRjfy&X-Amz-Signature=e1f42883d43a9e35a1d7a907c9311e6e442dab98e5a0ac7319b9a43c510069ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

