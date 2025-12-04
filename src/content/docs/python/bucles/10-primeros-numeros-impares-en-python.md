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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624LIOMQH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEywYID%2BZ8l6xswwLdMtQ3qDBMhKA%2FX2oS5k6G%2FG%2BNciAiEAqc1aW9QH3GTBm6s6K%2B7Q44usTZ18XWWQ4x6DSlhI%2BQAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGfL6cTb%2BSLX4Ek78SrcA8S9hc25cjZG%2FOxxcQN%2BE44D%2BSaSCuXK2jNmuvAlJ9JegpqybizcoatF2Ekw3UiyRFweyvwi2Ii8I3KUwqvFE1S5h3lsDkS5ez3kgfofsDjVwr%2FCcQn2v9CaqTo76mHZ8UL549Ozw9XngAnH8Gg4m0DZKE%2FL1HfiyODyildGYZ6kRRu%2BUpY%2FfK09PDQkn738QxftBVLrhetHjK1fHO79bkgO2cZrdfzwJrQJ%2BESeIf6Kkv%2BNm6PdECrgS6Otb13S%2Fi2U%2Bgcru7YZzwymCcQ1NNLaqfsp7BjAGC7hmxfQ6hii7GReDe134%2BlUY%2Be3U3uZIDxdfrBEY9joA%2FXI2b4Bvqc03onPQ5rGSlM7ZZkX0o8Nn6wbt6eNBlQ7RVnbD1eeQoEJig9Nk9LCKK6zufqwNnvPrgX%2FnUdxNzrltz7H7%2FyCFnCwB%2Fa38VPFLEYUpEeZ1G0a9ieoY7l5%2BEa8xgqfI%2BQmIxXVx3Z5DYo3wQVDVIKqQY7cQntkW1WCeZhl6snrE1IIU8KibNxIxL0AMM%2ByKR2BphEjHOJmSyo6USNETaUoWpJ2Q9GQwv7KKgti6IRRJ%2BVgIwT4G5YFTUB3KSO2JWeyVIIwBwsrKFq32lfKtw0S%2Ff4ryX8UilZvc70FMOnKxMkGOqUBVWxZYpGVl0Uyp39iEYUVBuiFzRQVTMydPnbGU9tmy%2BV4Ez%2FxXIhEmJ3yORbtZcVIPvBMqC8n0M8J8HDPzCeDjDPODghvWt5GqtxDxn%2BpAN4PqZiNZwjZDplmmGEfVRTDGXpyJhnFEQdiHn89cxwZtwDkxZQKgcOSl2uECxfl6cDp2FEBWmYxexfw9meEwo77sn%2B3%2BLok2zp0GjAA87qJF80FkOdd&X-Amz-Signature=8d85ea1539d3e3f3840246035da62805e9aef0f9b53250847f8fb20e9c5ccbbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

