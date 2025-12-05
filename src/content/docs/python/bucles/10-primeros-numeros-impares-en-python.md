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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRA6TIA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe9z0KjTCv3kA6TuA3v%2FnjRdRTjL4Ky%2FU3M11njLttYwIhAMZw2k20WqjJmJNgwYC3Tqfr28UONvvFsmX1A11Mz21oKv8DCGYQABoMNjM3NDIzMTgzODA1IgxKeng9F9PylcMZBCQq3AN92k1W3353KGpigpN1fijUS%2F%2BTa%2BItuoswRtO2TZ1hHvO1%2F1GNrFyJ7%2FOEBWwJgz8tieP3CKyPdmfS6crqFxC%2FOK4ZinKz96k65Auq0V1wE7STUi0ZLSgmI6tKUTqEf9puK4vDPonzCwyEGo5HJoPIpit2Jls3zrg3Y1i1UZyWp9Wq9jkmWylrSPZW8zap5AUO%2BfvFrQDMUQf12n2ua04kKLdh3jyO%2FnJZmu5EJkn0veRzXKngkGHXnRX7UDOUBABAFgTDQ0W5cK%2BTtPR98mr%2B8fBzVdf1Hc1JBwYKbqXJXID2rhB7%2FTprJEK1Oby1Cqa52SB8vhuNUMUwLuSV4OoT%2FCRg3QeQRkD9ZL1WPjVg5of8nzY0JvKQlYMnQ5zzJg9zxX70N2k8kuwTFR%2BFxwspSf0aUZ919%2FPgT%2FaoTkP609eP%2BQy8P28ImPTGJU5wmQVMGfgwTxgbOGyckeo3nnMj3C2r%2Bszmb6bWONdP28T9D1RQuvyO9WE6nQLRmBGFo1y5yOxYLcaVFbaA7o3yybS0NZh%2BbxUp72R6WrnkpTj13ToU6cgDHg%2BVkx0E6mjNuDb6YijLweTS9kOkEhEDCDgtcm%2FMOCWESVg42cGWyeo6TFPWe5KHDpNM4RSSAjDImc3JBjqkAX8P0wVOIM260ffg4QQEn3U3xePP%2Bz8RPAWaiZ%2Bqs7lyzozqOAW9x5KjtNDFu%2FkdbR5nxJBME3R8wlVkvI3RSIeF2oGcCSBlhGEkzQq%2B2UK%2FipvaDKaf6S9aZrBUr2PstZRSfCm2vR%2BGJisFziFkoS5Yi70Gjlba2s1EtfIQ86g3UxCoImRVdPb8%2FExVwRoYsGLIPttMLatO1YQ7TvuNt8LTlc7g&X-Amz-Signature=e58fd121e2817a0bc36cd386fdaf882427a574657d882a6b9980339c76b9e3e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

