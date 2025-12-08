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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTIOTBDH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzlmo0GnqVBo6egOmA58W8uip7o4Ru5x6m9h2XEB71SAiEAtKV2%2F0sZ9zTAm0lF454vGVNrFhRUlPhV1O1wuvNGuIMqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2F1pOstmJEYQ91WQSrcAzAz3SGuj0iP8ph%2B1XDnCWMgZFhkZdALvIk8v6rzqoZzcM8afeSmJrJQKfHk7ufuJ%2BSt8r5VIXEUSOmehDwiZySNzP0jrQoWIPdGbv9zMghIt7KYegoZFr%2FXtbGXzjq3XRjMCsi1u5t2ZV%2BgLhX3Zo%2FTc3z4%2FKdP3rxw0vnUKi6Mb44CbFUg7Pmkv3aosMSPu%2BKwtVJGK3BwKNG8%2BjV4YNXw5xaf8vVcTK8FcIykiJALjHs45j3NQ2EwQTeNaIublBydMCc51QmApgBGk%2BP3L1%2FKSbmM7k4mu%2Fgaa2Om943GnP%2Fw44zfWcc0HxCl7CkpBglSgJzBXEVGLxFYX%2FsMEStn2KCp6Izb4%2BLFqrRtfJn4iV7vkQbecLSiSAMA586IVsQQmkRQFpHJpMaYoG%2BVnqqnMADU%2BcX3tKdxiXmwoLXvY%2Fg50bZVOC2%2BbIMMtw4bEU7HWkgxlNLiYK2WsUCzhzyJ%2Bkh6XNtzmCp8yQcIb4OSuGt67Yep5DBtO343dTaPdyMgKSJYNbukXYig5qoYPwAf5r98dmHWBn%2ByzDwPOmPglmYll3B9GWLRSuAmxx%2BE7hzBWcOR3VebUQEqxFuxmTD8EN9%2F8J0AhiPq22yNt83E1PVlA4O%2FnHv7J2f6MLe03MkGOqUBgdq4QiyTaHpSh%2BpUiB3GkmRDHPnta5gy06CwiKFYyGtJbXd8jZCuxPGf6n8M7335QnHxp2YUvGz%2BsZJTQ1jyHxjqGrJ%2BH4lf2cAL2bBk7sMvwiVSCf0kiM0BTjVM8ckiFWjtt9NF1ET0Gdb7FVmlr5qR6lA6NMFKRU5Wi%2B3216J%2B176sfqmAhXeg1PAc3mZKRObRq%2FO1KiILAE1ZV%2BNlkVoOfbrh&X-Amz-Signature=8d35841116596702a1a39949b050e80c6d6c8cdba3962fa01e4523dd7e5710dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

