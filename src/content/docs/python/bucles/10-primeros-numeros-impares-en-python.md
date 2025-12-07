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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635FY6E3C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbu2K7NyEAJ6GPOHpCrXkhXhno%2BCpnzRAC0PZtnROAmAiA7skIjLcnEj%2BX5QGOL0ZY0wpujKsQ%2FOFhOtbpcFWUHwCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM46rBDNJlbd%2FM4BGhKtwDsdyT09O9v5WuUKj9rT8E%2Bk5LTQejySDBxlcKCuXNVxv3hT2B9NTGYDXLlD5qa3MLrzzX80y5GK3Ls7mhTiBBO2yzjYafVYCf8URJyNMFwEuPHL4ERBbG4KQDVP9RtFyWshWSKTll689T3NAETqM14INlxEePKuXld20IKL6BfF%2FxjJThI5uCMrzH0lHPQIIBEGtPx%2Fyn15PAi3u5Zq1npD5SualcMoy6uDpvL2dn4DC1WXzFsB1J5w7jTAQrsnAwv7YsAmCLw8rLFXeY6uqzuPUO2p3lSnHajxdx04Ca516ZAd8sAjcreIwebuPLZ45UY9F9v%2Fr2nMEeB1sBJXUyQzVkp7IMMDs1IkjdoB1E06KfteOHtISipWXR7Q61DwykrkjXop4KGwlF65kEOCHNYgiocNSyymm9yhauWPjzzbin%2BvNZSg6KmwDvQoy%2FoeJR5sznkWu3RUNpxVbxp64Rg1i4r1lpeaiHjHB4%2Biac7tcksiLVznpZnonm6GOx%2FFgsnR7HfQicBOFkQNperD7BduDlLVKPYMa159mLWXoyIb%2F5hfo2oUOiINV3IMbrMQE77LAKzTfzgSLcYq5gd3YH23PFz%2F3vQMV9Erj8pum%2B%2F9HVOf%2BsnwvcGfeFZc4wp5rVyQY6pgGFf6assN1zPb5IgPM%2BbkAiYsXpHP2hMPpdEwlbv5kOkAG0H0cmQuV20EorZ6STUCLpjRU%2FoFQEOC0AM5i0TvSFhHTIGXtmrvUTn0wOtlFgNHHaArCSkcyNZ1vWOxgKjudsBuDLa18%2BsCT7TT13RTyLwO2i5ByA3N6VLTs2De3EBq%2BERx0fx4OcTkDHCX0U6auUunyTOMTtDct8V8%2BFgDc1NrkbLgDA&X-Amz-Signature=3994e0ad0aeba788774db20361078f69f296a85f6f121d9187b764a7b4502ac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

