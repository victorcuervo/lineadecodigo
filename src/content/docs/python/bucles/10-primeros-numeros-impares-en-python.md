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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNYACTPG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLIZ38oMM6D577PhjNzaanfwTq48NYPqE3gpKIbpzxJgIhAKmPY6fl7OfnHucdQaDtZ0RyTlpBtwcDBKKZDbCFrNCAKv8DCHUQABoMNjM3NDIzMTgzODA1IgzgkLxm9nJaS8%2Fruygq3AM4b2467ByAMKR4g3BriSOz%2B8fM8zxF9emMG0oKSDNsmCEXu1sOM3ZhRTik6CK%2FyAW1m8jBPV3eE3og2yM0UxoV5U%2FVXzLQVVqUG%2BjwksujeZU7eb8%2BhhDgwuN5m9urt1HbiVVsRJ5n2yM%2FTB3z0OZm02eOdm%2B9XIXUN3foxhNiIQ0gB4uHe6ZVCQSEEPnQkl15NucsRH9iOlPeN3rSYvI4T4plhZJb1iSZkGZb7mCfwkJwfUWDoGxEQ%2Frp9MMY0vCy%2Fs5ox%2FLp6Ss%2BO8rVH%2FSajMGZWi3q%2BxbjjAlN2phcASPPn0zU8tCo0msuzbjobbbaM6aUPdJUW36akbTq4UqShvHb2MmJh5JxyK38rwu8eG0wJ6ClSV3jLRMEXDwN20TYsFBMvHge8lVVRX9lsTPMOoEfryGinYRnl1DJ4CkKp4Q%2FWed98gbNv7b1otWR5QVNU16l4JNGcm0iN2cxTIlE3pRc0L37sOi3JwZEm5gCj%2FC%2BvRUvxfRQjANFAvrwCKe0Ms12siDIALSXjUCIi%2BwoNZYCb0I1sOp%2FhN78ohS0OLG%2BR8rK2isjm7iFNXoN229mi7TGLYuDE5Aw2vIOAFW46rDbXMy9gVMJWhkbY6MrBTQFND4jFIzlhl95VTDsptDJBjqkAQ52lmOLzB8BfLEGzRZ%2FyD5GjzWCma0tNPYP1sxAjmhrfIZ2f3cfhqY3ukrcC3x5KBZICQQcQcnSDrEPHfRK90EAjD7g9keIBdnOa5WIuDEJxvkZlrvzuv1mYkWSkI5PrvCn5krXGe5TmPCkAxbxvj7aysSEwyA3yHBO%2FQsvrbsmqzdif8XFenSvOSdKVVYmcstb4bmaTOocW4PCcdi4vuB3b1pl&X-Amz-Signature=d67914fe5631503a02f14fb14e5eed3552fd2bb8c16fa8c549cc58e1ab474546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

