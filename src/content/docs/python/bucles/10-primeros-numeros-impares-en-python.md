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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVP7BLIR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCaZ2ZV%2B%2F7J7HKmCvMGS677%2BM0nVTKMSmJ0NYO8Nj9ZHgIgKEZw6OykOIiVrKtbpT1DtT2LQHp4D4FRz85iqTPaurwq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBZ%2FfHCs83OoVSljRyrcA64qWBSFP5sib76nlfO7UZ4bzdCNrEmQw9lUt4X5xQN6VQp9blvBanM7ohNh8hZHnK2oePynIVMabjahYZJINGHQh3anrnj1ClfL0uNNk30bvsfUXY2BIGky9g8eg4AiI23uDZH9%2FxI0Zbt7vxtBZRyfGNk2Vf3ymSjiUx%2FHaB7zDUFzIAmUc35FMy9g9VH2xKClPRE1TB2Zx%2FnISbhYM%2F%2FVYDmyyEv%2B0SKigbP%2FTN543MStn47vglc43eiuTxCt18%2Fak7i%2FpcIl5nuG5%2F2DMDoxZcSMds97jfCTRz3c0xO4mpQJS2fGUAf4QUv%2B%2BEksqWkZFSeZv9DOCOFAf0G57gts%2BF%2FljaT7ZCREOCf6YhjSUuhje%2BFDCfAN4qepHJDTk1bV%2B88S9adXJ6pqrdi%2FPUMoC94XLn1btJ3lqyYBH76nzdyZ24XucgnJQlUhfqJS0YjM2A94%2BTyjFbnykkdoT%2B993PCAArwVMCjC5DKQ%2FncmIsbfjHvqx5C1qVtDMUB1v4T2FXCqUQOhncfz8UbKMQlglbqvQ3cA6R30PpFrQDY2LdHC2zyL%2BLQgSv5xEnv3t2GF69XGbdyn9DWa5ILv8z8JdcJQWc9ip5DwnrRQEfNYHFEbGqobKS2FkQGAMMHyw8kGOqUB1KKMtOCftNlHatLTGzOFZ1ii5k5DzFjq8sDP%2F8MMjA9Ja%2B5JvvMLfzmt1cOt8q7IEVDdLpO08Kr0lF0KHf4bq0ImfMKb5qC6nN5Urjhc6WS3pOL09Pbn7RsCmezMPi0Pd8%2BeeVUYv8Ku5GV6TeLKLRmOauAIPar1UKQX0tjatXPMVQRCJLrE3kX8Z%2F07R%2Bvl5c9KizUo3Z3dBVD0q6nK%2FPjERqRQ&X-Amz-Signature=150490d324aaa3ce19991fd189df2cb794b718b7c24e245a758275249fb17565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

