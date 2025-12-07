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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3R6W75%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm56Ns%2F7NJBhxovgBudM%2B2AhkKA0lPhsJrnq%2BuNql1wwIga0Yj3s7cMoP8ssFUuxTtFQcObtBaPZr%2BNTV2uf57ws0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLSO37L7wkvTjBMmyrcA62XgZ2gF4XeODiwIq5r4HNteWqKBbi4c2L4ucJcVutAdut1gkNg9BOSxMwYCM4qsz%2BFKW5fsbHe%2FYSvOmAPKWG3XqADcx%2FgDS7jmWL%2BLeZb0oKx6hL6q1SCiNIp92CBwXztydNf4R6VQ2ZRB%2B7cKTbLePVM%2BEyIryO2cve2gROQDzf3IiVaVtlvE0qr9WAKp3mLmHtNHrZjGsLuofy6zPiejnJhkYHYjeOI7Jzd68Uhp7Dpfmz339JAZF2Jh6%2BQXo8m%2FpjL2%2Fvl5sZDNy0kbX%2F89cHpw1miGcqpGN6ECMXteg7Kj2cssX2Cv5fPfU5ho2gSxd%2F6AI%2FrTiBKcYAWT9NR5XeqySO6IidsJFexs3Y%2BnxRJmNDKLun4vUKtfSMG8%2FbvV6%2BG%2BHaCMl5quGS3aMhiUXJNrnsBwU0DB3PCQZvqSGMdz0knnDf%2FXPyPEaHH3cYJWOmY%2FAfOMbgYQkbLr5OObb5uTV0DBMP0Hm3mcljXHINzqs2LSsgZt3QrNXuRdSn9tm33a8mM5AnHJDOmbJfXNZMsTBw4Qbre0%2BbC4iyHdtyp2o9jJZhdXFlpZtnfvQJ7EOfBHkE7vD83DedXHZBsRfNO66aiWMdtufSFtq6lfJhTBVTc%2FX7pHzfmMMua1ckGOqUBHmRClG%2FkHrnwAAWeZTeAwrkvA9WSjPWMIs5aDMxdXN4Fq4PvpcxMaEfpz2BGtDHM%2BICd49y9%2Fna3ifQmBfWDoCbG90QAjeOdduYeYMzEs7U6TblP%2FLjm%2BOg3Fs0XrvUu3Uhs3PCi3gqEy5NxCzcvR%2BKP0WjRS%2FoBSa4cC3spmzi%2Fh9eQd6aGuIio8Xzz9ZBqgYY7A0SjxJDjBd7kRUJ6z2D%2BeBSJ&X-Amz-Signature=70a9ae8bcd406baa714bd13f56b85ab29c58ba89c663fb0c0f1ced30b0e9d921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

