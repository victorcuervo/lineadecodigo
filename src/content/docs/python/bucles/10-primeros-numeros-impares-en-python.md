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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6U4J2A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIESso5UqgWCwrcBcSHBKamHDi7jpBlHQu002UEuAv9FXAiEAjOPTaeNIUR276%2FSYNGaEiXa%2BRTQwd3VQGeVd1%2FPyitEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJSFzTQFRmzr6Ekb6ircA1jqxnVsDEJS%2BILgrZMazKseWnjYyrP8B6WbQWdknyjiaPJXOru1AP9aybNVIYct2ZVWlIj%2FNiqXJo7qKhdXVrne%2B2I1DwyKsIjut8L%2F1q3gemkDWFolFD%2FXgRzx1vLFB5OYALT0iyiJiRsnUbu8sIkx05q1Sxgk3anowWwUJSnIRUJ%2B%2BDWdBHXFAr%2FCkE2M%2FVObQWRD9Ep3V2S8q3G6cLgrj%2FKKrr6c5JkoqVXtgLxWZUhmOBY%2FZN7Z1bOUoTE3Rxoq2dBSX770Ae4vDsU%2BBdP%2FnSpn9lxoARdZqT4darA3DnDsy1XPh%2FUHz8ZQj9NLR6XxugKsApqYQSQ4AXaOuevrLccO%2FJQVbsiJHfZQxw2i0nzIBTVBLx%2BHDuszGgqUa%2BAWTb6ukNGpBtkxk2tl%2BOb7dYXd9EUN7hpIJ4RwdYEkVn4M87kUH%2FU8uEGk4VpaLmMt7vNRlbTDvmHlcLSn2J76ij3FKq%2FcLgrhi08HnhZHi9JuFOCQ%2FGcf9YKP3lEIssqnWo4dGcJq8SfJfg6lg6fnr0A6I59%2B38zQ49N6MhGHQquELiH5fcRmR1I48nw%2FaiVrmeHJpV%2BZoGTpQD7gfm3QM6w2aqh2G0Z5S0vulcuz0D3%2BUfGDTd8wDt6TMNLoxMkGOqUBBO%2FIALB%2F0q4PZztv4HKhWfTjryhVaoSPLCTn0INMxfokcmywpiiYnl%2Bj0Vslg%2B5MxWF3o6eLu%2BXfeI2ssbJERMDxPjg8WiAMlquu%2FiyegkzK0qc4b0Vpum8q809wvHfDXdi7BxuSg5zNc2m1RMHXVfiJlxoC8oPRG6HFN7%2FtDojaPj3BSBRyY6onZP8AUpHCZaxF930DX1H2xd8LL%2FnC1JN1ljtz&X-Amz-Signature=03a1883b422fc8524c5a7179674fee0a650278808baafbee7c68ae2bdc0cea93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

