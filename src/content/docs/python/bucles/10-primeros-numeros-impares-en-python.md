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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERDBRQ3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF4UO3MICVm0hJX0tEtM%2B%2BDo7kRAHmjnWpdkRR6m%2BwJAiEA4F1LK7%2B1gZh9Krx%2B21JXoTR4lwh%2F9EjZF3xtpZQt8dEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJD%2BSC9H8pvCB6RKvSrcAylL5HdbJILHs5nHNwyMwNqeTIimkZIuOB0PgRLLFRqBy6vniGU1tZ7gMXfebTXBq7Hxh0kIfM%2FdnRezAIYZ8b78tOXdpblkW2lYbZcr1vSmjLQBuEfp%2FIuZxfMOaG86LFoKdnKK7HFBgLO6y2JyxRAdvfl6EWhhvJI%2BH3a5k5M%2FCwOswkl1K3pvd1uliZFobZhXtsrn824Hesi7qx2DVPQefOle5aXqie%2F137WxDaKQ%2BAQAP%2BS1HH%2B7wtEo9GcZ0m4mZYKwnJNyWYnbYBhZ248dsJxAoaf8uq7%2BCKlnZHGmGmQPsvQNzufthlbg8HhHkXd%2FjPTNEhRucn59RCjQuRCkrmVpwreDWpSp9DC39oV%2BM3pSi8euPAgjCKKlK9XVxPwwix4ZF7uSylHa0K7p2ue9nxhW%2BZQ96l5%2F3oRN7j6VSPA28wulJRmibMee6N%2F4CLMHztpr5pYn%2FoCZfeNJJovJtudrR9Z403%2Bg0raKaq%2FZ0VLf42SflthdKqlYnln3v8TsRwLwQr209RfXn8bsTVrIdtrKbNEf9nyt1QV%2FzFdxHbC0737z4PsSVFdswdvZWbF9LZgg%2F3OpBVkUmnprcnUBXhP%2FgvgKMyL3ONwi7ZBhlegRG6D8CSTIfCCwMOTJ0ckGOqUBEguU1wrrRRsmTTB1sh12B7K2RnibZx7IGu79PSg781ds%2FmihewtVZfB1tk1wLHo85ab7%2BZRo3X7qEH0nli0ptdEggTNSVflg2ewjdcK9DZ2%2FLFk%2FkcMGdAgFnWchfJjtY0XABxfsB5w8CkbVaLTCS%2BwGmtZJ%2Flx8xQq%2FxOKNPJ5bAu6M38m7BJA90UyQK4LqEOYhNYC7LfzbERIZ5k79%2FVqySQBD&X-Amz-Signature=33a408eae00a5755966b8164a2d0c9c673aa85f064b85b94eac678ac8127678c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

