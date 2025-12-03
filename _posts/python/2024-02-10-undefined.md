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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDCOTIGC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQC%2BwowWblRmbt153YDhPUrC%2B%2BDEIX9%2BEMBPgD7kQbwoEAIhANyEtZlLXjtfNEy%2FRND8gFt0rcFRtl7sXg6M6MXG4q%2FfKv8DCCkQABoMNjM3NDIzMTgzODA1IgwEOoEJuF7WQvOE7Zcq3APl%2BASDYIJHKu8JZlPeWFRQfYJo%2Fn04Z1VqiLwEjv%2FzhOM%2BduciEmDhLuf%2FYpfjxd%2FoiDXr1J3O1QnNX3FdMEMIdcqG%2FKZ%2F10y%2B1c4WDUIy14yws74X3jzwqptjAfhiCmIbn%2FXkboAL66tIRlm9V7j1VuWG530UyzE6UAwd28jhVTqJKIr4KjcKqpTx3QcM0hSzmJjw80JYcU%2Bb1%2FaMgr%2FIjnRbI4dCl%2F6LIEbGIrjUjfeVscRlO%2BixqNgKdWyeZzXhAodK3BTdrZ%2B0z37Erj%2BA%2BwxAZGc29Eg72cjK2DV93a%2FtslauGRdTI7dGLBNRr9V8yo1wcB0bh5IKCGpLYV1GnbiVOXgiphOjp51lh5DCW7EHNFw4qL5m%2Bpfcez1yfjU8P9%2FmYfdWRfUvTjzGF2IJldVnXjhrU0egO02dMcNhBGyzv5KZp7C3aEjBuqkhNFqMPrGO2Ek79fq4lpGp7yCqXEEtElO%2BnZFhXDKPqHV6%2F76yufxAUqxgVtGdL5IMYdFBMWOhSl12g9QK%2Fe53QdXpfNebmBM1ykBI7gk2fJL5lE87TX1Oa8hVCTph%2FX9hkAAn2OwnaMqh15XRS03mBMttkO0sW0vDrnSfOPAd%2ByAxsuAkzJVRzvomG1EMtjDr1b%2FJBjqkARWPUFaWcPyynrFMJn9Q14rolYbMn0dzxsAqLl%2Figpv3J1VNEEkgoy0rrifLUgGLN2PYv8rO1NNctKiFgCXeD8rwN48iUQKAN2Dx87qPr1ISxRhQsMA%2Fqh03sWyzIqE%2FjxcTuv1%2FOd1l1QgQGUH70jya9BFo48KNMQZJ4XM6dkmCj2y0Y0NRHWYfpxPKHi83cpmhrQ3iS28o3YevAglZ3nx%2FriaH&X-Amz-Signature=c3d77b888869e786d1e20f8f2e76bd30589ecdbe7c493012de1d310101aca5f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

