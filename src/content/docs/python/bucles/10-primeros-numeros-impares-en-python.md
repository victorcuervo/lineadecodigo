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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FZLGPQ2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmSWmQfMmnz1Y%2Fer9pXxWu80W3t3xsyVinQUqVPokBTAiEAoPmsuelQBFDutb%2F955za5i24E%2B6v%2BB6LvzgsdorEw0Qq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDK8glIQtJRGA3lSUSyrcA%2FnlM6s3ufMNQUt%2BpAtb6TwJHl7lNy8JRijyd7krCz2Gbh36UL%2B6hcwwcy%2BeyPWt1PAwz5U9fLDC%2BnAyuF8H8qbcYpWrxL1nNqXuR%2B3ennvYodZFNX%2FuJJF5SYQO44VenE%2Bvl3LRcjJu9PO1Yh4oYIK2hSx14bSWWrZTwhXN55bloT4N4xL8kxzw3VDQKw3nRDUkPM8U%2FNNzjCeMMuXqZh72yRJkyb9zUeM%2F4z9IziSu1aI73cL0YdyN653C3G4IQRboTrz64P3BexQ8FhIB14jdOOPmFcHmE1Zw%2Bd%2FpEnL%2BAtLqj97Sg9ib94KGTsVvTH8Trx5yoSs8jPWs4Cjytn1L7plrJNG48IhVUiLmC2A67ifGxOwTK2XMxYm%2BUERVZjnMyHpH9iq9dG3XWzR9rK%2Blq2fn4%2BW4RS%2FTv%2F7IYpXdBUIChwrS1A5sPIcPOQJHQ7WrW6oTi8oNjTQWvz63tZ%2FdYVWggjWDjNyJRSrgDdmW3WS%2B0sQtVx2cp%2Fwd1l2nFmh46i4bhbANt2TJOT3ey7%2BwnweA6%2FzztEvaNOokg9tGnU1ELV8pbMGhmBz2mSyiXmEzKXlNSLEV%2BjZGAO5Zj4nN5dPb0AnTqA%2FHwYYwlJnADTODyPzbt4DHQtBjMOjcxskGOqUB2UINUBkXJYWLJIio5LtoFb1Iikekf64pBhDqrzBnPz%2FYSDvwdz%2FUrSV0bjhu8r%2FVBb%2F5mjah%2FPOlP5CnMybDZ6ZceFMSO%2F7bRmFDtG%2BuRkBQ1kNjqTnN7XCNEd7eYQkM7VL8JIAv5sIQuchSynbh6C%2FwjpKy9FVvQzf7BT8p%2Bf1zcvkgiGX1hLxf%2Fw7CoVV2Vr6l6lusGXLpQpKOQYUJOweaj%2Fq4&X-Amz-Signature=a91181c736b60997d6fa440b370a76e7fa3318f83cba9bccfc8c78749c472e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

