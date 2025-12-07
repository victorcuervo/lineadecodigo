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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIR2DZ3U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBX92AOLf981evID5hwVkV2XG0vsxwV%2FIBHHeUSAsNsAiEA9SaD4aug5nztR0zOOfJ46JTsB3m%2ByroPrN6ry4lQXlUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW37%2FsUlL3KRbDj6yrcAz%2F9PRiOgEWsXTO7eutOAhgPfOYNAXQt6QUe1QbuwgqQBByML46Z54R6gfGdWGdMA%2Fy6V3CaZqsCi%2FsxA%2Bse0St7WGq7J%2FfZ7gsDp10qcimTssukLyM77Fg0i7bhhddTo%2B5aUf9KFhyN9jysNBdYOZkOtQUF2CGsVNSbh04Tlnnjl%2B8LLCH6lktyUA1DAULsK8uZ%2BnzKccq0ArNRbafM4IJSDfLCl8gHyig2ucpOB52e%2FcLZEvzQL076wFyuzQxP3PgufDkfGkTRNdvrRTDUcPB3WVDqXwoBjvd6ad0J9blt2qL0UHAuL2vyJYYkvcFN%2B38NJhy%2F2FC9W1zgqRZvHySpEYCyDlzsFujqGKuSne7CIBrhJ9ZPYppMG33Yc5CfjGnG1p8fkOJ1c%2BxjvzffM%2BLj4aJbFynq7XW5I%2BnCvRzF89cQ00k%2FZt4B6P5PPknEJkKW5e5MqYa%2FY8xHRC%2Bj7w%2FObKwIqWEU6P%2B3DIW23HIJ4O%2BgWMjEf5v%2Fke%2B4igTCHcFhRbG8jtwFDGjj4lBy%2BDB8o7i6mhCZpEd808kZU6ygpnHXmapXaS5QPLG55VMgird%2BERq8D1TYR0AL%2BeXiil%2BI62bBHd0R4NA8vrQK616Qc2AfW4w09Xq3f6%2BoMPCo18kGOqUBiaQIn4O3dHxaf9lishMSdsHwwBldS78Zuo3aq6uIJMDav9%2FeQzV2hPB0LHojDThKLl2dvSXB%2BVtiy4vfCkiPwEw8ZL7xLpo2uJWpltYoixzHrdLZKnD%2FrtU3kb9ltf4iHPjBdpmv84H1svOmUQtQC8lltbwACh1mjaYLjL5j5okAOTkjCbPntB55giR1aGygav2xeX6oii6UrSfSuHPIOsjh2iHu&X-Amz-Signature=08a3dde9a378cead3687b83ff6bb5a1cc6bd5375076c1e26b4a60973f3cb8af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

