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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVEUMU3V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCnqYikIjhzm%2FfZdTDLUFNpCyzSvewken6%2FcvJHeMVzZwIgQdB8iwHK%2FGvVhOQRK40hcCwCtnjpfgA1gp392KLYO2Mq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAaJC4cwF6igFH2miSrcA8fC1KTy0MtTLHPvQ7kfQkvUXZ9nNzrPN2O%2BsBSvkiT0xbneP%2FfN5NZutjeGH44ZQOcgGXGVF7mPcksRRh0c8qbpldaB48v%2B7MJpHilAyOLA8PBEAgev%2BfyVbScLiTrQ4o70DG3B4I1ij%2BQuEZKsclA%2BfltRFJSks8MDvoTbfxHdJ867ZOmnzxJQOwY849hVf9b%2FkM5mde5I9G1LN%2FO1%2F%2FElop11Wse23E4ASuLUL0R%2FsW57i7gV5AYs9D30RhDEA46khdln5LkXlWCLpecscDdoDTC7sVBPWVr4h7jYWPDiEdyS%2BFpphMgWp2TEnaKhAB%2FnTX5OU9hGZVZ5o9qJm1RBqLPfA8uzYnrGF%2BqjdGdDpZVkXlMFlsflUchWtmqXckbhnkGDYqmb0CyOkv9tKei75YoXYdCGMcSHuZVE1eVjIFM33oNi4lqPHFnzeyhL3j3NezlHHrm4W%2BOs5jw9NKVHr%2BhRhVcfCIxjoBz%2BulkEyYLN8rsLwurtbZfSS%2FlqcNz0UEsVFOIKZX6oOjMFf1BxCjQlXxrpY05ZWFfxVzJMyEkEyOBY2peQRF%2FkCEs3kPHeUNRbwEDxG4Kkh3P5YvH3YWsbDk6IHuuxWmS%2Fe6sLBM9aIdUEl8NXHjitMKe%2BxskGOqUBpUV%2FzUDDsyyzoePs98s%2FtHAOm7%2Fi887HsiExewYi4ees6liuEKD%2BJI%2B1293CnhvulNjwhUMatQAebd7PXAgvipl54dhmYmo6zZTjWEV6RS5%2BIuBqK4nsYaeBJAxyVvhTWHtQVoEB%2B4Bn518o1dGe6WLXWqRXk6cTXbAzgbWtH7qQ6cuc9OSKfxckZhQIJikirZx1aCS%2F83uFJSTUoRG3xuWsWxy9&X-Amz-Signature=e2be6a6a29188351f35410fb80fa93463e3865eb307470f6c6f12b5fc1ffde05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

