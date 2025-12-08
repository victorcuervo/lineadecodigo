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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RWR53ZR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl6pcEfjNkdiy4aUVwZgXvbhR%2BKULpI0IL96TQxrIB6gIgD0MF2R91hmHwbWvd78xBCRXcBLlwkhDndRHt54S1lrIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbEFJE9sW54C%2FsSNSrcA73QaNEfvDVZ5kRg%2BOM08D9sVg7No8%2FiTGRPzkt8Wsm%2BpQm1qgMBKp0p6R0zt%2BlfRLXTrymn7kMH20QwJINCe0n2X9JEYyd2bFjHGbXWIFrW6BvJ18b6Mts3qzQi9pdqmHnHehfW1jwISqEa%2FrtYL4Snc7PbMmqewVwMzr7Q4aNzVV7cQDGs0wKcQ1sXGZ%2B5bD3bjZ4%2BWQVRH9nwvcL60Awlh4%2FsDPOitlMrd09lc3frJ4yrV2SsYWahymy2ZyyzK0RwJyscxP0PXEhdhQxv%2ByySUBtX6Dr7AjHMXIyWqKL5FfKgLcSgybTFfPb9cXY2%2Ftwgh0pjM2RpeNH3DoPLsGKB7csOcGadsNlFDqCOGc%2BOIOkV%2Bk693wPmisyCiXpfGeJHey7ci0MUCtOoMSwT2UfGkMQhSJpA%2B8a%2FySeSOCkIiJENZ5y17bAOESYodQZ%2B%2BC%2FhRsZtSM2rPk7VIgfHGm6yvnrVVN1LzQq80yB7FBajRdBq4OEWFFiCMui8wEJqvwRqBhoABGC0voe9A7RP6abUzuzAcJJ%2FQCW%2BrVdrFwpNcg910%2BwDEonmz5tcKnu6S7n6TBQ4xDt%2B5fXGYRR6w%2Fbx1N1GZpY1bchcjooi2ApaGA1fveM%2BOoMAey4fML7R2MkGOqUBm0o4OcZLksYdUfmBlKs8ohC5XJSCri3gSDCsD%2BNRop3dWq1HMkXI9nz%2FkukhRgyBDaWX%2BCSjwRDZTPqjco6Wl4w6l3bnXHVDwVP4egrx9B8ck1C3c%2F%2BlaSu2hd2pRtjbPUXnPSmgYwKrFFpgKWpTZ9T2l6koN2%2FZzjSUz5%2B%2BleLG7iQZgX%2FvbUhKymTxtqkFBM79fKrD8y2uqkOBnPrt6%2FWfs8WE&X-Amz-Signature=9ebc447271ed83c409cf7bcfb1a048abba781e4eef6a6e19e9aa26e82f04ecf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

