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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLHKLOFP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLLbcHCHeH1KRh%2F71yuUi9yJIqlIQ3acwLIDy1BgJb2AiBl5XPC8eEbQy1cODClQw7VHMDVzHq%2BvAcy2TyM3FlACSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4eGeaJZuFSRrImUJKtwD8f62vuE4wLMC4bPF%2F0dIo4BQo7k1n57Fn4Dx9utDZ1cKoAi%2FrhC2%2F0m6FIOQEN%2BLHd%2FWIcDelJm54iAOO5LvZZlQLEJmYBkF6G1W3gGrlk0uPQs4kPT%2FwoYsMvp5dgNlh8lM%2BxiO%2BfHQcNLAC5U2X4NkOwbtBgWRJ%2F3K4v7scRAhY%2BspeUNlcHcQkFxDiskrJFx7dRWQBdMU5Ic%2B3pt9B6X3a1ULklDd3cvWQxxFpzL%2FGB0tbfOB7Vtu1QLBpwY46mkTZZ%2BeYp4sl7%2BHjOVL%2FP%2BEqC3uhgNqOMJE7tGpVrRjN3mKn6jpynDq6tQlHGld0XVUkPeiUKRb1hqO85B0HxACTbuSUHC6aAa9rv5Rdllbms%2F62RnksnpzAOI2Xq707CSLW8o29g9kM%2FlwhhTK05k2KOd0vo8sWZWtRC5EUGbTPU0aQdvK7svyUINvbECwLrqbetNUHmrkp%2BwQcuEtIUTaIU8FgNq%2BGuXxXfgsJpMtf5MyVDvXuTM0DujH%2FW0v5mkCt%2FzPipxttNsoCcckzE9UgKFBLvGbhz1OVIMtWDf3kthXdi%2BEDQSxIomMWJwPgdQlZoItxiOuk8RFu5g4ZhXBR0OwjznA%2F3O7%2Bv9wjTgfZD%2FYJ6Ji1vhVabMw1%2BndyQY6pgG3ISt8IfaKLbk6%2FF1c2W8MN7gCKihJxk8Q29t7nHr%2BcT7OreKvO671ZaJaBY2BamAS%2F2KxVL024lKhxJH60UrZ9pMwujyK9rtdwpSiXV%2F5p0N9sBMDrWyr630qOmGYRnTkiC3sVUAebpcpg9PB%2Bcyy1JznihBgAw549LRNfvoOERH4RNgrUrUrr%2BFNEVEo7De0u3cYNCN2IrQH6sers2zKw1gYioMk&X-Amz-Signature=76007e5861b38e5bbddf1e7ad6a734723f812512d67bac44b8b8054f06016fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

