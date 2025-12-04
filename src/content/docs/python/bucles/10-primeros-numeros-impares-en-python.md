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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUSQIWM4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICd7sR2VRIEPMfTUw59ClVPJWnINIlRma1b6PModiKGqAiEA%2FD0xbFrQiFvyaJZydvSwB1W%2BxcH6p8A92QvR%2BoOkGm0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOwh7l0MxuUjo93a7SrcAzg02vKTOap6x4%2FROqFfcealrQymtCiMe%2FK8NzCTFhbtcpZYTIORbNTrTUIpTR45lEdmv%2FsfUZRbqJP6n3cwuIOWkpstCzz%2BLth3eJdNEjdZ3sSZqt4QvE%2FXa%2FPsnfER7KHLEzlWeqE7GIl8kbOoO9rwLPb2GFG68RKZAxEF0HPe88IBtWUW5J8VY9vX4PFHYsE3DTKxk9wbweLy9UukOzjsfVGg%2FQACE3PjHTiPHmO8Tv2tnipPM900Ncf5Non4Siud%2BlBXdUsSMB%2Fi2IN%2BwSAQLLO9iHf6JDnxoO%2BI5OF6InRjpfod6SkTBHHTYvxzsKs9ph2nxt7zifiE3Ppdvktzy5Pf0LBrrJ9CPVx5scMbu4RtFB3Nm9qyS16dzfyO%2FKlkSCYctJJNvnvPumgmohm0st%2FHafBuwpi127Znx%2B1qTd%2F1yh7aA%2BCgEYKVC1gZyhWaqDrC8Q0rUgtH88AenIwCX74vRfAc43Rhd610Iw6dBNuz9t7PSQsUeyNDeK8LkPppyWaZBbG7jdxFKEpWMvNfjXw8XP2gtSIVO%2FcGSWAgjdw7rOVgOI9wy5ni2pzsIOevpq%2BBqfCxGzJEXNY0aJRTTqUTqC0%2BUIFBXG1%2BW%2Bc90SpZcG3J%2FRED8ghuMKvJxMkGOqUB9dDFp%2BrviDISKC0ne3p%2FpVop2uEoOWI%2Bqw2cltiaPsDeioiYZ2uoO9j64TKBKmi1IoO78J6xAZf8rH%2FhjufliqQjXftkXotWoy3w9trq%2FCWzeIVlOrOYT61sssP2rgtchqkeU8Y0zDpgnXKwVhYqS1cCIRdVBcrUxeVvc9CzxY%2FxLzJDh5t3cqPomzgbSHEbysmxKxCON%2B6oA8rMpd67KkHNk4IY&X-Amz-Signature=95c50ed1a2eac010b1bed4e2bb22c7dbea54e6935511f41ae27651905f2adbad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

