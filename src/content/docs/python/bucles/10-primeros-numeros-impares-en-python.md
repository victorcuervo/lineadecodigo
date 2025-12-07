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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU7TV3DI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHohVPXkLDu9Biup%2FNvmEZopX90Ll3%2FKDVwI45Fnn3eMAiEAv%2F7Llt3AmXchA2IqvwmYoS5tSKXqyfpnnDuPiI3JfkUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0f%2B7k4FQU%2FHIOz%2FSrcAwkRSoQu%2F03Uptlml3erIfJn%2BeGJfj747ole6sD4khe78WkiM51mla9dPsjlpFExzma2Fk%2FguX9o6FNJbAMzH6zZkzI%2BVS3WaHNh6lqul4Vh7Uk4a%2F84BGbAt5UiaZmLlFmZ8frTQcdpbZpihXnUMy8eAlsSnxYMVTc5wwVzy%2B%2Fd7u3ogPXFC%2BVcIU0Erj8exwj%2Bep2RgYu0%2F%2BDvvy8Hff3pxYa%2BIomeoUBlgajDPodyM3Ya12mwSWN%2BOr9HpWd675PdJIQtw%2F4J5p3ZbNfGYJedQtkBEVGeyLaibLWcx0HqXIkzw5cM9r3lpkbY63B5tqO2RzCPjFakhw40aIThqDq3j6CVezIaae82462mhuLZLBC6u5vZjhd5afXNAA9xtThpDhNcECEsFf7nenB%2FoQ%2Fq9AKNDzlSLoUfLFhLCus974%2FLe1NUCJL4Fr%2BXuH%2B3%2B8BIavpf58hUTDNhwl%2FwpCaGANsy0m1eIg2S2OdxUds4ERRVeD%2BvrW99g4PTbs8Q%2FEniipH6zOOMoAD4iXxba6XV7wUX%2Fd7MIHB5FvXhjp37C%2FXcOLQ7OaRL9dwHZlKy96A8zYXYdD7I4%2FfW5bB8eGTq7QnxGz%2B6oL58ELVuXWayF4l%2BlK4uDeNQRbepMPOZ1ckGOqUBrfaoQumtC6gmQPYzdXgt%2FROurX0p8W9ZmzIb%2FZbC4MrZzxVHjpR%2FBQRh1nUkn10EXFt%2BKRucIahYS2XWaqZq3PtZnXjd0Kqi7MbQydoqJyMiiTHYVqpS%2FM5FwyYH%2BMNzJyfYGjqQf26VlntZPYtQlBmdrLRisykWDBtF%2Ft%2F6AbWnQvcxAJ1xM4D7MRHKuGhiWfPdnvDESm2LTFYYbfu%2B0oVzC0HM&X-Amz-Signature=2e16e130abefbd68a6932a82be369dd5b78d1bfcaedc2cfd3d1dc1c1191fa12f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

