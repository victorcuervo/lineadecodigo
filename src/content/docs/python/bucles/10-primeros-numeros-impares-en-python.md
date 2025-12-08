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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVBQPAOM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDHQttjiEI88%2BgRUusIz5Gh7BmcmJeITP%2FOgzwhSxhSQIgd3j6nBt6jpFdSLBSd5NfF4lq6ITOuchS%2FoDyQKVbtEEqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJs%2F1T5uMX4o2H7u7SrcA4N3H6OP%2BueoIedC7KWryvE7DIPLVIyotpVM9c%2F2eQHE5juNVy%2FdNgM6byCtvNSCyTrh6qgh6KH7LTaS7mOLgw9l2JlVavJlIJJGCSjMrLwrCa1jPPY0smZdkB%2BIPR5Fyf9d0Pkw6zKmTQxfcWVHowJ%2Fyzfvr%2FbTDqcMrSRfp4uUpuFbC0I1O13bJ5USOGyCLSgVY%2FAAObsOEK1F3k%2FIGC5jCY%2BB%2BGdEP1GJfjBbcbmtRhom%2BgIEFhrcc6eMmWcJ9NZPOslinCR1mFIbN6yE4SZplWnLA7k%2Fu3bSmV7g48wPXFf1M5JoAKDRoy%2BOChYR8%2FSObgHfm%2F40u98Nx2okp15rMpRiodQIhOSRiyv%2FfRbaNwH44%2BcejPbe7eec1HcX6qVVUHY2oUfCVkXM8Dc6uU8hr1TvINhd3Zlr18ZIugS86nTlunKvhQFok1e%2BPL2ET%2F0VOOeNpsAEboUE2nufBoxCDUemgNVFK1RaGoOR5v6AUgcU5eo5c6ncFPWRy5aIli0ZOYL80rtWoqoBNS5G8PqPssdHo046dMANPmnvi74GsG3egI%2FnfayCli2D%2FgzRs%2BIPEpTOCOuMNaQhN%2FfXBI%2B%2BhAWygeBPB0uL0SvAfdGfH7o7HnXnp9wJuM9gMK3v2MkGOqUBniVxG8F7oTvqJase3vqOtMF72B2MrnutSQa2DX%2BD%2BWDepzQwoYSi%2FQaKCUGC5I1KUyd65Q4BAosytFw%2FxBWp1unWAQjRh5hZxM0KHV6h5pXz4dt9%2BB8jDcmRS4JK09TPtQSiBs5Ai8iRe6iuY19QiFSEXjrI%2BM6WaALCSxdiGGOik1w8MuLqffNIRkLif526dbUq%2Buqw3%2Fvl0zBDfhnZnBuXZvT3&X-Amz-Signature=deaa7f741953fbad4533bdd5f572c4cc6599c45ce5d84cb9ffbc34c2e1c37b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

