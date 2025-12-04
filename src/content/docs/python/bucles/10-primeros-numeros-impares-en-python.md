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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z335M2M3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIEl99aszdjfgtHQTElSghbzFDpQjCUTDksSiMiecmEXTAiEA%2FteWnf%2BlEajw63Y5i8QhuyMygIlw3Cq7jSsKIClqVm0q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGrTL7YR5Dr6UZTmCSrcA98pg4xIlcC5jbpLkrY4u3GkR5MnUZBrOw6e%2Fcd5O%2BfOwMF436YafQLgs6i6Yf%2FhDUSTW8%2FHICL3T%2BBWHf2nl7%2BF%2BjQ2rrsBm0VcKOTvKSVON1vdIEouM1pJXk0ce7%2FVixjUd8W9LabSHT7ol2M2kK6%2B0EaraUri4od3FnmZ%2FQ3zscEb%2F3AZkjjtBF9KZYgP7awBVw9f%2BTr0rh%2Bk65lpeMldHZxhVto6V3e0%2F2Ss6UJQIg163S1kHTwGZ%2FRGxBhI3Vdm%2FBcTXy%2BkWTNCWgsQxgduGz5IF%2F0MSkF9ByNY4%2B%2FpR2eCc%2FkuFLzx5Fga2VRvPqN%2Bh1%2FuVd3kIAjkIZNVyWmOfexG6uP3nM9TD6HTEOee6baywysrRiNxp36rpar5hCv7TaKS%2BbawDHyulk1aBLH0bhl8Gg9%2BzPwIxnz99RmKU5u0g5Cld26IlVFUWocoEIX0vs8HcNek7Xiu67iEQVFlomedVlhYwYZEsLQMuNqfAuS%2FPAlMdInrQpwuacUGayM5WhgDPKr28mtdneYEqkv1kFHLgmtK5T%2F2EeAbAvb7qnQLHo0ImuRY8uZkaumTX4JQXNlWSAyBq%2BzYcW8wqYBEfcGxUpeStdbgEma5RtqXSpwoSJyQfD0fF4JVMKKuxMkGOqUBV6PZoGxq%2FS5Ru3irMiw276AhgNngY1%2BhXBNnAiIAI9vLwPAEXf6XQpbVH0fSuIKAdg4gU1Hq%2BO0t8IY9GTNHbv%2Fg8RVbuFoezvw4dO%2BifGIL4AQE4IP2OdorKeDzNqvh3vKa8lSdAXkeEgLoevRvv4SXqkJlvLCHpiQ5y7ZQHB1TyazomUKcv9IBx%2BdD%2Bw3MLPWHbwPfxSR56IaiWB2JldHWwCEt&X-Amz-Signature=91951cb71ed9d6d1b4418bc9f0cb96882a1d69dbab2083dcfec110b9b168138d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

