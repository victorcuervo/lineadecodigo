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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NRWNMXK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGgWcXUX%2B86WWUcwM9U6vmP5%2FpNOw7JewfTcDyaN8WCAiEAqLMJ8BCaUesEVyTzZzGH6Mkt1U6ZScSFSawxAvoo754qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgCH8LITj52Tz2N9SrcA00ATcLsuzzlMFko5o4zt3GsWZZ97gPv%2Fi4GnW5KOnMt0zw0AYga8Bu8wPT1ls69kMfL%2FD8751xY0%2B5ZqlOr3jexFOdb9rhoBGAl5zd42D%2Fnc4d12ly4GHtYWzxTG%2FCUk3WqCzDswWwDXWDkEg1tsUSYcP5DcjH5EuDzkRLmU3FYg%2B4HISGB3G7iEcQS0r6NlHXO1bt3dO1ue1%2B1hqx8hAEM0%2BB3yzxm4Um7aYiHizMWPetXr8JLU5WbiwqQ8yCABIMFmYWkRCMio82ccDBqEhFWBEdIaS4Eaj3v62iTbvx8%2F%2Bm4dfYzireVVRr1fOfL4v2J8iFjY0LeO5l4XK13XDpmFOH8eo8Jqo0tzLafjU7aFi%2BKCRfKoo6VqA305tgfOJGhCif5p7jD7fbmmoRqP0%2FiJzWjmXIu%2Fvcq1OTe7xsAmd%2BSIWUNYmVVPFtHS7ViNE8bPqu%2FjVwwiUEQDkpJXJKonSNoXp2%2BfXC4k1ejcGaGUjxDSciJSmbEndDFIOPVN%2FDCqwVOiI1%2FsZ3EHdpdDd41TzALhir8%2BzWcQI39aI8Tu8Y%2FEZRgNA%2BRsJK9r7L0dPnR8y91goog%2Bn9iIx3LTE%2B9f32RiacWFr7a6hqapfsN2l3kzdwg8xim8timMIHA1skGOqUBeVPsJxHZOYFd%2FPIyjwBbN59KILrs4GB8EC8dxik%2BMdVEwQ%2B3BQMvoKBlYPMMGOc2bpSc4xAPuraNHMoVKhPOq2XLOTSlgqIofoKwtmhvJIb%2BCrMykqZoWWZYEoCA2SGYjW%2FKEIzSOWUkI1pXx%2FyH1NBRlYtGVFSKrP%2BNIczMEft9bUuxyWVXfcntcnCJEGEFehKIxCIHed0XlDSe2ET4VgNTryU5&X-Amz-Signature=658be26f91fe329f217c53b5c45d7a8390293cfd38e4dfada35222fce0242a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

