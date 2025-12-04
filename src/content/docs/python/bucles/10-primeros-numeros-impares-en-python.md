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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PXYFP4I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIETo6WIl7im%2BCViJgO5GkSSm4iHIqZzzRlSMGU%2FJI0rxAiBMhLjELjZGnbvI2tCT7ucwzJni0Ex8Pq2Ef1brXV09ISr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMW62vkEk4GuWh5JmzKtwDgw5t05vEZNaFknVNl%2B1S7b7t7%2FYkhmAeuoav%2FCnzPB2X0o9CowYmh%2F%2FyvACsI1gvhnbiuewdUcuDdypxoZOT5VxmRGIJ%2BhXyeClkbxv%2Fcn9Hha%2FTf%2Byp0gc5SS6i6eP7kmkvaO70fHAzMg6%2FUUATFdMvgxErVK2HKNBIEARRG8KMt8gz%2BzksBxVzWBNcfa1j3ZWQSX2YO29T6EyqOV2wOaGNQkH8JroAVr1oILZhqDN1PdtYwpP9CPYWFTOIyC%2FkSThAke4%2FA30OU8%2B5ozVilC2Zg40Cre0B5w6eg7hn9a%2FPwmlXW0pUNnJgx8kAzl7WXrUH8hHcK4dlzz5PCmYhqYnxIPVPB%2FtvIsR%2BFsWyoubUE9QiS5IoIAbCuOh%2FR37OpQ96M8YkzQ69gJAtE5G5pFFqxzRdn1RfhENjS695WFy%2BkyMoTaME8ys5PGCEbr5BY7VS%2FwLssmiHVnfEzHWQjuD93lv9p7IygffjFJrVELco6jIH8YeC3WMe7qsQL3UZWsqtXJX4HsM0hNGtHVUH0YUlbgiRIUYh0UczX4KUQXbKeH4%2FPmMhMlQ5o7OpYWk6VxglyhxBjiO7cssnC6rNMbIjHPgBDsLb3yapLBxrfzPnYTqK5Qjnl73UUZQwx8nFyQY6pgE1Ni6nPDZj6PJfIs7MyDtULgx1hVFRxBSfMV%2Fk1tEZTH8EI1Ru35%2FPuQE84n6F%2BVzmkwrWwyOJajdymuQJp6o1CUm10m1BsSJd2%2BF3spaEXr3rtbhdyD6QQf3nHhZGp76PAmnFaQOReGLWc26b9zI6zE1G0xwn7xphLEwZQcNr0NtTANZTg1oVWhgQmjc0IcV0x9xSoOGDBImdxffw%2FsyMYTjlSx%2BP&X-Amz-Signature=62c1ba05ab94e7ae33c3232b733b59a8715456471be72c7b178e143ae1410d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

