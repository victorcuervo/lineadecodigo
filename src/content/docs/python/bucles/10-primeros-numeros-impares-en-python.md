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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JGFF4B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMu5tnBEkPGy33xJzyibywPDJLnnjByyts%2BCsRwz6O7AiBNT9QhiNgtNeWEk3%2FngW7sRI7mYl9kH1kGYAVCGjEcMiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVflYBl8f9kbY6NeIKtwDRLBpfwGVDHf4bL%2BYN8WFDJwQRL%2FMhQsObTS1Vz79B%2B8kphrD9GqNOK8NWV91Av55TMc55szDpYb2GyfH8eaL2012nv5zAaU7yc43Ea4Ht5gkGobgphii9GH%2B1%2BP9mrTH8I49tMDgTrxyv%2BnyOfU%2BhdyTGVBo0lIsc3N3EK5EffCwglZCiip1y7z1K1UqhxI%2FCC1enK52p8sPmeVdiOUUCE6vb8x9qcRv90QTeZYqQlH0o2ANGOBU3jNMh6TxHNaG9%2Buedh7f61yfqB%2FUpeEBjrwaJUntfFrN%2FgpudQ6MElEOqdcvaAZ4oyxjtW7j%2B8VwX0Tnj6h1bDBu4L%2Fc%2Fbhl1YHtcU80hitvXlfi6twj2m%2Beh3KE%2FHkfUuJ6C0sF9zhxmybtLAkub8EjPKJWis06naW0kEkgCxFGkGMa4si%2FFIxijqbJVUyie8MSxjZMZ2hXJ2Z7RV7AQAkIjDtG82H0nPlkMbt%2FzA1fYTcFs34kyjkI%2BRT9VKIfbHX%2Fzv2tjokHSFxGFwFU3fHwYI9%2F%2FsR%2BcwxdSLc%2FVw1HT1eXVpu8lm5poOjW0Nh41afcVFwzqTaDeImF%2FfxTlWEOVrSUeXZnHJQaYiYO6uEJSM81AFkpFxGmv9BRBClO37j%2FSYUw2JzUyQY6pgGyV%2FwC4Y%2BMdBh3faYQdVyQwRQGEHoh%2BdB%2FhMK5fGhp4OBniWH%2F1ClK5aFe0xAq1i%2FDhAkH1wLuSU1AjNmmcvvJ80FAsJ50UXTzctgNMWlyRF3eqicagdnbchLKBb0ScwKREv%2B9KXGBsooAJe%2FjAQ0%2Fkqn66w%2F02%2B6nZ6vz6HGKkTArG2YXi%2BoIXZOsg1lrtzsCOZvIj3B%2BmvXD82Fln1%2FSvU%2BDbd%2Fu&X-Amz-Signature=20eb181cdc6526669ee2dae53311f9debb51e52e1a9649a58fdaf35cc1401a69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

