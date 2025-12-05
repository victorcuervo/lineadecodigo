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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJWH6452%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYZnYg1IFVxQuMPbrh897s7pGZF3OJ73GB495zIX%2FIlAiAqc6A5uh%2F%2FUSB4U4d2iG6XaToszlpS91mgRVcvut8bPSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM5ho%2F2ZFl4cVdT%2BdiKtwDXuh%2BND5%2Fy8gxyZ0DpfyZ9MzStSnsn7BUSFQdUvUPScHAsbRcfVjCM3BDic7urA%2B%2FYN9hI1AcJHvwPzmnQVy7F3AMvNMAL4sYIAAVGjvLy4jHoy2vr3YrSBE5DMZ8ghTTBcMTqfXBeq2358Lc8gLLr6yz%2FfB7A9PaLVirFsdgyuhOwcUJM2t9%2B6%2Fkq9apr2cq0%2FAWxEHbxvfvY5%2BePGbRkSIl5heW3MaEaLzCXLsd%2FxOQwoQEeOFogVt1nWA0wdtkYih5VU%2FNJP4L7yjnxMqwgFSXaclqRzkAHGK7M7pOyqottj5hpwKR2HjGdWVBZKCJfIOeSzoM87OWUJpqiXy%2BLD85yLuncJmONbsEgAF0Yop3jp1IgTZxsm9owcMxf23N7JkVoKR9CLiLbwCcjIwYfpYlRyxhVpKE6%2Fxlp8%2FmockImHB30I%2B0LLL3te9R5oJ2d5lP6Debn%2BtXQSjlvagllGXX8vHxps0HpEUX8SbfHtuEwJsvqRCBJCE16pWV84FHjfiT4Avq1nZ6zY%2FlnQlZtTTtxbplncaTxJQcIGev10K2mzuTlGjeh6OXQ8%2BlzRkBELZNN%2BHmG%2B6EQJo%2Bq8xp9oWAifJxYsI1lp3UV5Q26TL7ia3qzy2al4E93t4w5%2BzMyQY6pgH5wyL5hsJcTTT1BuZpwkeD%2FoM2y9qNTD7i3B9ZyF9Kd%2ByCpyGvFhMq4CtLjMgzDDMhUH1eR%2BzLPjQNp4e4vmZElubDR%2Bh63QqaJCVoT1s0XnO4J31z1VYEV%2FIY2lr7tIinlfqyHAvT9Qnx1Fe6hfXFKuln8Jv%2B9Szt52KQ8V0kgcOEI5s81fPvd7Wl2xCWWqvql2CYJSu%2Ba9JfsgWWekLeDowTdKIE&X-Amz-Signature=41366922f501b98caf2315c5c69ff2c91e1fa4bc9f8181a2b49de174b51c3a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

