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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBIPTA7F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUapBY6CvXAbzbDhMkp1G066D02yGm2%2B8VztSunEOVPAiEAj9hLRV18gjlsw9Qw5936dA0seV4yRfw9umMDycuHbRsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2B6nU2d2xL5sz17TCrcAy6%2BoR5cT6fxMNdu99lv%2FF0upsryv8dQA%2F8OWRSfTdTFcTDr42j6q6IJFoe2d46apsUhFRXAt9wtFoBT0B0qQZpn9%2B7nYWn9YlfgF1I8Dc3J8%2Fu49nAmrTQ0klCcONAdY0HAvclfMeQ0Fl2zTL3nJ%2BW83drbLP39fJrzejAKh2ytEirbPsJ1snkD25NMQccJkMHx5td1Xaz9vxf1l3GGtGxRDUb25KhafGxAwXhAGH07yjvbosLUBoxUziYIYPyxEvrHe%2FpA4Fv0LUCo3a4hE34caFkSHUl6WbD7fsaY%2BhrMaOBupzxD7E9iYstENfzHrRUuUO7Fw%2FpX7v4oBlGB4RVhAmCh1aL3HFIAHpKeZlVSXXHFMc7zIzu4%2Fi9mWU0ozl6U31fFLkkZ7EmwVEeXlH7WnvfzXNJvvuxhFaq2js81ABEfLYhhbR3RvZAr7Kerrq%2BIqg7jWX5jDFV9nocUj174FdqGEbXopMGgNhy9GXEx5cjBZmdAN8HjV0iZLI0JDgmdZb%2BYlEiSk67TAA6IvfHTSCNAQ2b3DPDvFSPUJg2r2nhAUstat2rJzUglWEiidUkOfDx%2FKMs3KcETeOs3Q9yckndjm%2F19xD9Me3PP1%2FRUw4rSJh2AeDFynbBWMOTt2ckGOqUB%2FMIsktLkqJ6392LwmndWRh%2Bfd3HPyx8SPE86%2BqAiPlzt75PdMcA1fmRr1yR4r13g6Gqu8aqI602sFc8zE48T7Sj4JdHDv%2B%2BW672r4oAcCAfWG%2FfMW6ZTiv%2FydxMaISknlTaj0oz4YFKbqtysx4RBgJiXyNYQWr283rFxv8vpnvXm8ejveeJcKEJtgVa%2F4TBaxbscMpxW4NtX0YzkT5ASByZXHNmp&X-Amz-Signature=9e2f19d1da474257b313452102e52cabfb4ebb4ef2c0ca9e8eef61b23af6b45f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

