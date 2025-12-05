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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWDCXB4P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGM882310d2KRX0suW5gYnoIlWt0rIzUAHkKibyWI2opAiEAwkhcIS1Nd9if5B%2Fop58o6g6QmcBM6K9GJAw2ieod99sq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAWWHoa2JUZ6tCQGXCrcA8PFvq7YvxFlI%2FqutJu8qtdyVZ5DS9nlzZEQL86hrzTyKziaEVL4fFndHY8ymjqCL0LNLC8EXt4ySZHn5fiIDKCXlDHhZhZtEXV40ySjgtvjIrR1MDlAx68St648E2MT0Q2%2BTg%2B%2FH6IAZhaMQEA4Abej7tZEkfyJXK56eE8Z3vcUpyL2YjCWnWjd26jxOxDmI0a%2FrxNwmSDE6RyIpe%2FvidbTLAzTEDF45dYQmT4q8Euv2AanPvze4qathnbm7M8dsB9s8iEl3CIP4r6gVc362a%2B%2Fj44ic8gJLIIlQnbWZOYtF%2BbEGUFBQTZ%2FLn9Cr%2FW7Mdtx8XgraTA5XOtICdEmYFNmV4ZeUIG%2B9of%2BwzLcBV7eZGhbi1TGM%2Bu4BS89MK9OgWwg2eJDOrLN7lHf3jsxYB3nw%2FGJpXx0nm4Lp5VVHh1sambBEkUJu2iH6Lg14aF3aQ9QAhV8UPxi7IBPKADWbftcHcIUzt5ny66gFoktWsQJ1WatwFa9X8rGQWQG9PSM%2BmDEuv49GdZ9%2B3PuWjplvjgYOminzRCmf33oSP%2FyvWd2NlUC5oZmy%2BH%2BkfIRup8CovZcs8U%2FIG%2FIt72Ly6KTQvTl4csqmnuwNZdpapkWqNzgKPEEzLIW%2BKcC544HMKLRyskGOqUBzYdglkLBR8aIUd7k%2F%2F6h5klVYVo11mF7Kf3I1innuN6m%2B4j4wvaB%2Bu%2BUj7TCz33Zj3wT4V5zVOFSpdf01vrgKKiU6S%2F2icZSEj8JMUyPk1POpuPofb4ttifEX5urOPAxndQy98daAIQQfDo%2BF99iT52PLEfIsNpCkcgEcp0X2H%2BB0vhKup%2Fx7d7iXp%2FiVPfja4txsKBpnNKc3MQfLROD5CcG5HuB&X-Amz-Signature=0dbf49d83821021d58da37d27eb6659609f4a0262de48db5f97bcfdd6695e9f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

