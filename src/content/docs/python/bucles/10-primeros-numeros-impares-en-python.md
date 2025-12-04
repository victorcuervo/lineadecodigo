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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUHPJLTB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIF0Ok9bC4X9W5kMNAm2QHXPYr6T5cVj1uzA75Zn%2BANysAiEA22fHxPhY5mn1hyD%2FDsK9ZS5HhWp9qRkkoIYeGfHKfMsq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDHEjixdVA2ts8Bc%2FAircA75Ob2CsLgSeYxKIeHaIAiJB9AEj24R0NVSCWnKJbCCkCWLZC%2F%2BezmQEaN%2F92ANRDq326doGjUE1ymBZ32JACGSFmLAFu%2BYtok%2Bs6l%2FFIBYYpNrdkcttkigTQeAduvzMjmJU%2BinexxI1GclSWfbndVeLVgyUwYkiviPhFCDqnmja0ncESnzYHyt%2BmUuORh11u716r7xvqAcOci%2BZHr55Ncw2VrBpMpfEjifedy5ch%2BO1GS4ZO3QKb0kTKTIefBJl97dv76wssxRxodo4LNUq6fJE6LV1A6%2BmrpIdVm4trKfcv97XbqMp%2FG6xN3a3oKhA8pA4z1Dpwy15BDHjrGSpdQ9x8y%2FSK3ufwFc9zWKveuPLybHTvg81E5HVwRuZ1XPwF0J2c9mQ3P%2Btv6TqNvGxJzBYVeNBWZsCzIZ4vFgRKhNO%2B5RqKfrNkFFWtxO9HmQnPC7CSS%2FFVHoGMyIn3aqK%2FG0i6%2FpX%2BBm4el67J5yRGYIx%2FK%2BKJrtoVhucUeN324o0NvstVqgdrKQAZus0NRkpoHlxlYAbQfJXh8qDodkNZoR8Y0DIxIDT64iPWwRoPzX5gPFhk%2BKDiJMud7Uh1kFztDoMgQRe8HZnbZnXmv63KTZWm6nKFhBOJ71DqA%2FjMPG0w8kGOqUBzfZ4swyisAFUyEH5F3BOd5wccMmY7k%2Fqixl3SruT%2BYSnrd%2BDXy9gG2JF4eWR3uQRmTpwor0s3SsU%2F6hA5PBf7bG9RhhKhXZgkqqmlQASdhSBZW%2B0cCNWOS6c%2Bp6pOFrDI6UrCeEImh5VXWaXOR4WaWp88i6hUlTBLJ1u5%2FhyshkN%2By1Wi3Lm723blzFpaTO6mXO%2BRrPo5Fbq2qvhpX4Butiyncy7&X-Amz-Signature=bad5012b0e0800205c7d3aa6b39dcf712c457b463c6ad137a109517409b77236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

