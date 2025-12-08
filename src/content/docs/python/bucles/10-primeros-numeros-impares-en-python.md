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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YV3CZWL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMv52addQJyuP9hbjTCuqH%2BPqSPAu7GqKkS1C%2BkJ%2BaeAIgKxKd8sL9E9leItvt7cC%2BP422NE5p7XTkINg7CKtPcP0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAhLQRTnXY3HBt2IyrcA%2BjMPT3JZGAIYDR8FmccP%2Fz1dDXwJGA4q9opzQ95OfyKln4kh%2FF49ZzO%2FLnA8yZ9w6ulgRuwKN7MOCR0K7H4g0WRmWkKlQBpVU4ct7%2B58H2gHT0W%2BErcN2TMUvT7AFW6DCW00QF3vNRazlQeSrUKF6kvETdyYQkUK22%2FLwMHs672a7cITFDi%2B7xLzm5461geAfF914wYEK%2BOSwg2vcaJsFoiMbkZqWgise5bKqGmTg14lhhyjT4cqoIBQexMJKzOsMOwPjtHECZAv6OcpokvVJCl%2FOSnJSxfA9fKS7RPLIgpFv7L21rlRu%2FRwt1aqnHnui4JmpA43ODMUqKo4BnSGWxXLDpt4mKtzUePJ5ulgHiELDkQFMAVF5WLI6Um19nIYRgfxRiGbDUiz4JV2g1ndoixSkgo5wgi6AJyphx2HgnflDdyFFMMvrQgPjG7Hegdk%2BuLAEt0%2FCKIBa3DNGMDyFOO3rrmaA10gYBLfwlfnlvGpXYNJUVKXzXQIXj3GvpS%2BV1RTITl1pc%2BFgYwmuXmSEn0Y3DVjRd3xHJqa0T82j8M57VsyPQEPbm8Dn58BU0Kiuk4MuvTTIpIhaf6ATHqLK838yvPpYsaiH8WgKBLANNBU5Pi%2B6ssA3Wqkuj2MPns2ckGOqUBuBcW62bZCMteky2CDSaNKmiPP1RW6X41ZJ%2BhLeM7xdIlp5ILT3KczfF1xrysi5twSYWBbspC8XdJCjnte4IPIrC%2FZlznRvvD6y20b2KVaHhJVs91LCZyaIHO%2Bpgwn94MT7wsQ2%2BRSj6efovITq0JxeHMHz3r4xZOl%2FHX4GDzYvxJxDfVr35tcUtzcTOX%2BW5N6WBekqob%2BDzzI69ZZHpDjZz3T4Hx&X-Amz-Signature=703601d0cb1ee6965afde5086e861c496ca59a653d62094705243594927e54c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

