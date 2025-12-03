---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNQRKIQH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQChjYOHhsJmiBB%2F8%2BJDapHdM1N0tA9SQ7tHrrZIGbJd4gIhAN44ETNRrjVwnt%2BI7w%2FWHSgHqOcxBhESEtmCdnf%2B%2FyJ1Kv8DCCIQABoMNjM3NDIzMTgzODA1IgynSahfEjD0GM%2F%2FK8Aq3APzs9k8cxp7f5tFv6HrL%2BmF7%2FK3Gjjma%2BdssuMowaQdbe%2B5txcF2OHhfgXwcn8YM8WpDgaa6mruAvvk%2Fp%2FnkyCNTYKuML9tYQvzh%2BkYCrrhC48DosZPE9coHkWJmii%2BKZoPsRjqQKcI4WrFq6%2FkoUBYMRTm8f%2BewwhM8s%2FXTtx2omLe%2BQcD8nT%2Bpp8t7rL2iQgPHCI5%2FqpJQLbDKUJYR4pJ%2FS2VAO7HX5cBpj7Tj%2BEG%2BOOLWlKzvg%2FkzuG%2BmLqh75GbiIgivYum%2FbNanvuaLrUP2NLNmk2VIevSbS442NDnE4fUCzOguSXKZLMTYEFgb9B%2F4MwETcwDuDDepJHqvDvMx62dZSD83dwSKIxX49dDcTliw4Au86rLGpJw8c1CDMY5MnNM4F0EGVJK0A8h8hFeXNyqqOkF8g5L4WCdC38sxiL5pin7aQyjUeSxlgBpUS1E2p6Tty%2F5Kj2DDrJdpBPM0X8HOz00CSDtxfx5tXQ0Jh3WEql%2BTDFRpt%2B2SYeC9PWBitfeWkh16ZVY3Z0CV4Ieq4Z6npjInNabf4VjpkPKYfx2rg0cEvVyPMPf8kZLDiMfw7N95zbN9Ol54xVI%2BuL4fpTX1LkigMfcJE38huFvJkyz2c1x12eEbDoPIzCClr7JBjqkAV3MF0y3zQM1OJG2ksHghYLB18XRVoqbPT%2BW4NpLgmpTCgNq1xj3YUcFbv2ui7Aq9lIZCC0djoVqyu7G47ngTl7yv%2BsWOwnaKPpQ%2BpjT1NnDvlKhPMXJyehGcIln6ybuxlw%2F%2Fl0w%2BiSVkolOlSzttckXddrwXxmM%2FplNjsjfbpDuBZleI4sj03p2n9IDtauLuOB9%2BV1dneXnxTDcsIoKOCqgVxAG&X-Amz-Signature=e40bb6ea0e2d23cc916f6f9bc9a4fecf9be7102d48c783034d96ef56d8d17c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

