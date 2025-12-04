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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQEIH7G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCTC0isJ9jlanMZWp%2B%2BpbKSq3Lyp3p7cZ8Rk9AcftuJ9QIgPM%2FPp82VMs7LoD3v78InpYqr4K0tMwPO8%2FVbPh2tA%2FUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGhEc%2B9SHZNkFIaAmyrcA1rq%2Fm6ZtL8s7Sm0JNS%2FmLxlD5tv%2FA3tw%2B3Qzsgs7DB9qfLbNcZn8aGNprdMKMd32oJaD%2BE6VMqY1G0wEEbwddp71%2BhLVFPTkB8Bw7HzXE3bv9Vf5Cw79%2BziEsiihe8tSeIg7Ty8yGtUe5u3ldEujl3cpTaudGvUqD%2F14CYVgWNE4kDVOFAArL7Mo5Vpi9ya6Hjt%2Bnkg%2FvoIvZ65fTGXEHrot6anC%2BA0PlNFoJC4wvMXVnnb8uSfIO0lVEE96m7dfsmX28fr3F5l%2F5XyR0Yv9MetHwL6IRg4c4B%2B5Q7W9X%2FQSoXB8Xyz0sCISFq8DWilPoYjrQaVcLPm1u8R6BBaqoOwAv3C%2B07GWUcOtXjZDXpd3amVRVoy72z40D3cAN0FfjAxqYRgcKKzCFYJ1LTrUdhgnMi5td%2B0ypczWoi4ZfvMCrWmzPM%2FojnnbJyodH8naVvA1Y61epGHL4kFUCCHuDh3O%2BmJ6s2odRxZZnfUuysVj30dSdsRV%2FmsoNa0BeKLxaPON4cfIXne1UDMoM31p%2BenrK9ZsCsOvEcxZvdsZOe54XCCBtMfrujSapbVM2QPqQYHePiPUEfK8rPaxRLOX5MYrbGWHBfg0QLHlyktaAyHygj4SfcrIZ8qA2RqMO3Uw8kGOqUB9tGWyFZ%2BAc8xW4KQMoVltauxEvRD9H%2B6s1I0VqL8UREdL216OO%2FGlz6c29MZt%2FNE0EGCcDyVWZE7u9hvMtJeEKOBn15b7b7sM5QeBiuTCRSGjrfwq7M9keSk%2BhkHgHGSDc9gD%2F0faHBRA7EUgqVWagmbKI5wJ%2Fy%2Bs%2BsYpwC6MGqkBqHrtHG0z%2BlSHSQAScI6sRoVsWMA9xdQvhqtR%2B3cuNxe40xE&X-Amz-Signature=27139167e565aafc15065ec5a861f21c1cf153c9d47f6d636e1cbd64a6ee21f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

