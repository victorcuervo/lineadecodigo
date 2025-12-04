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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4FPGILN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGA5IMF0g1Ko2z2K4akrDt1wjBm047HBxwyjscW0mloxAiEAmAMQ3Sy%2FUwR%2BMQr8NKBy96jtqsnk3DGekIfZn%2FjALwIq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNLbxUTUcdUsVMxN3ircA0e9wXoBwH1AHY07v2SUYKR5wU4ay8lFMOk6rKOyL1%2FkwHy7JeuOuPahQqPImu5NV2v0IB%2FDL%2Fdf5ojMq4BZlkDiSO4BhQj%2FvuJLO%2BhecP%2Fo6Ya75c42FxTTb2%2B8m1meUtkuAFqQcS3oAzwknmOhFog9EWuIvX1SwapNREi7%2F9IG9KWQ0M83wQ4YHzYIRjrxyLNeWAR8YRRIvgTg3ks%2BhHALFQ6wEZJ%2FG55FdkCLLflAIuugbdm0JvuN%2FcNDrihgdTunK1vRFGqCYO%2BQORK7T8Jdc0%2B9kEnz9MumiBmGyyra%2B%2F1yu1joZGhbW18FGZtRMunbM97Nd5eLAuqUhP4fjyR%2BaXkjel%2BqGgt%2FI%2BURfXd6rdobFXJQNSG0oEqN%2BgNDsBNMvRStHKqzYPYf2jVn7Gc2gHosyS%2FIDykk3tiF4RFRAZoOyakCGOLSxlAm%2Fd%2BQObF7gGeCKwKWrJCuRDmUE%2F1ULZrSogxm81b%2FRgv8OQ%2BS1Bk8z5g5ps%2F64%2BxOESSFnH4B4mLh8qVm72AptiEZO%2BDGtfO8qOqDGdg8%2F8vS7O26g00TVhoY%2BZJhrPmYMuxoCP2s3bdJ3JMsx3iTeuXnzsJjxpMyCprd1OjI3xfJIiU1DuNEyinj3Su0h15uMMy0w8kGOqUB4jf23Cod9Ik5d6IAH6WFqUDNoYOQ024%2FmPpmT73phsFGuAv%2B9eyVg0ERam91lcyvphCXf9zTEHg%2BGwyr82%2FVLKZwbtJreTjkhAeCMXxoYG9Q0l0ItJpoqNtDnF2O3PreJe0Al9p6N2cV9PYzl5diNZCswlp%2FMGRux2dbYuQM9SFUkCvB%2BmCDEbD9d5qyqqgAzNsgwfcVLRKb252JeDDkaqTZKgyB&X-Amz-Signature=d6205109ab4b09c02ca0ddfa7b9c515aac040d10ce8dd97e939cb223a78d3430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

