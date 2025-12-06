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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZXQWAJI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBllH2wRtPjwI4lCcNYJ0Ct00GMdq8KSNSfDgLc71zDqAiEA%2BHDScY30Us74fQqDzCSN9PEXZzanravw7V0GmdW7T5wq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDK0GzBwe9hLfSsywMSrcA1F3EqvV0Asf1xC0LNVQjpEBH6tM8UKzEuBf6cB4B3sOnl49%2BGj7oKWELwAGcEAroneEl22%2FraGK%2FmIT4CM7c%2Brlbj1gtBZud2920DcJCxOx81A6lOho306PN7Ja87a6xI7qW4gN4xMsXbi7665mn%2BGAsLaRd5U2x0FK3Ue4h7Jbml%2BAQy0qzCnho7j186O0Adqg9p0i1O3Iga6He6%2FbybOPrh1OvIbQMx547TG9LkQPSXJ8lxvBjIiwbEMHtU8AXCmvpiYFi2AYJyeFTVv9AlJXvKAWePuW%2Fpgf09Kr%2F78FzbztHqWoQ0IGMmZu62iZSCVnitzCsPI2qPrVVqo5b8%2F3Jktl%2BHkYnPzPOKg4Hax%2F%2FzUHicl6HpIswANZT%2FewXfo3CABJ1yNJZg%2Bep5bnyHdwJoxcrv7LWZgTM35C3y%2FIK0QM8DlmEgSL5RAL3pW2NyZc42arwxsMibUs7O5J4BQZG2SAI8J7nwfbBMYgSfFa6SAMEXqmJ5jx5F7nHhWiVb4W5rf67iyfnl%2FWEB1uqNRDVGT69R0B2Jp6JDEQ2rxyD4dvA%2FeyLSTcuJySeMrR7wgZ5PMgzBy3MeR2LXythcHj3lDd%2Bktxok%2FNffSL%2FmJ3jh%2B6255mmQvol2aeMPem0MkGOqUBnyJpv%2F33clRlycgEyEImAUovrlCWbNt4S1bLosld1a4fMxQ232%2BJWHL4fiSP02EfoxRLCT7Y%2BzAkwbtyj1i%2BxN56KXfgIFRU6eYt%2FyyAOZw%2FnLjxskW0kqluM6EjjyRC57AxIgUedJuTcq3HwoIbnZjv4vJ8IToQPEWBcCBknGzksRrNHIPsZNmPCE2r0OfzM47MEtbc1hrWSkyB7S9YH5E1k0x3&X-Amz-Signature=5e7680db7ac7782e37c7a5df503d647e42d4f4db9d76e264263b5fbb155524d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

