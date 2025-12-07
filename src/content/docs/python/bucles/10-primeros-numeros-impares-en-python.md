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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CRQF522%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUaBfmxaHLoIyJxr32XEyjenNZg9Qz7%2FOu4ZjHBL1mZQIhAI%2FSMZ41AZFqopKTMaKftiGqVwY0rIHOgITP5aJyQpOhKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzcKGFDCa6vEQXilMq3ANhA7elGH%2FLuSHgpH6zD2E2pqRKDYVNtfQh%2BF7TtiQH01Z1SGv8Q25CxbmA%2FAFV9ogJngrmJPWEo%2BvEOxBPNdOaIjiM7w1i9XCGAWq3cXLSxNYMt0fHgEeSgQkmK6CnR2FjoLom4%2BRAZP53N294zVVWsITpML7rUx0%2BClzNb8DcStNxY7Otc2s8Z7Mn2SRxiu4uxKhp%2F59q71EgnRXEj0el%2FbiNTyy1yrw%2FeZLeHPBgY7bn1UJKbnHcFFxGUErGHKMkk7o5s1%2BEGRespyUFYd9trQCa8iHktETrLpXpAr0IV9lfMw9v%2BBMDMen8qDDDg8ZQDYdiCpE77cWfxNd8cs7BZYEpFm9jt7OpkudREEMS9JVeWDV6tpRXOkkirPJdzFBvVgv7bo0qbqhQFK4KeroZyrMGi5AYSGkOC7CI%2BnJUpa2E9wlKhP3KSwSpuX0rdQJyP3vmW9LkDiefDelctbEzAHE5ITBe4687g7i4RzKxNClLECJBL5F7GWnQ1jTjx8dKAzxc%2BD%2BE%2BdxidBVb6WQKhRVzEj%2FC83R%2F1qpC%2F9GDcupFn4TG%2F71sJccpXCKg0iU5UY0BeUmz3hwaz37ZrPHKD8zeE%2FppRM1V85ltqbRsSj5fV0MlkbC9uyQrgjCIv9bJBjqkAfJGv8o%2Bwx1Swkr914ZZoheF3L4d4Dial8qCzX7AfRl9SS9JTLWiHAUNz9du8LfrbXxUjx3jeAPJganpVZduAppBen7y3kjGJtaHUbm0LMH6BVcT4UFZqTQoh7UjbsqysF%2F%2Foei7UGsbx5oXaXk7Ze9kzuR9xB81WMlCnbykS8fGauc%2BJSS8KZRIz2TV2FhrcGsYMFEEKsXO3QBN1fX3%2Fq14zv1i&X-Amz-Signature=0467d5194f3f8aee80789a6f3e55d2ea57b910fbeb0bc3065250f9b595b1ae0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

