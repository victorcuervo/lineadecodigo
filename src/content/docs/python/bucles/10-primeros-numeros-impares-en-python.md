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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WCSGLE2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJrgvmode3Yap8k%2FtETMU0VyAlmPOVM3JZcxgV2QfgzAiAL1tOc2uGgUtjwME34%2BynR3dexFMnCifQegV%2B8PvcFhir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMfvLisPgDhcLbx044KtwD1Sp1R3fpfvmatrajA8XB%2FKCVNGp6zX%2BiCiAQV4LLfrqFtZOsEs%2BcTPRbgOldkBZ9AMyxa5zOOSR%2FpdSHhkye%2F%2FIxovlWLzG5LzoduGn%2FtVp0g98RRD39jwWUT61p4JGGUNx67xr3T%2FnJJuyNXRXW1eslRigm2bUnCF%2F26dmRLu3jplBlJRB9Rbxmg7JX4SCoZ88OAWiHl2KGF9MF6%2FzLqJMmWIgBZbs%2BhcXYj3C%2BmmVd%2FdTWffB%2FoM%2Bwve9tVW6LLjpHG%2B18Gg9Rkvv5%2FsvPGCrmJKVRFfbjZxl%2BSSrOTr1JfZtFRwB0Fthuie3qVfM7v%2FUsjYqe4W7CB%2FtgEqf21%2B3wvKu0qxbGBH8uHXLwTosesh9i3DEwbHK9tYKBFCHh6igs6rJdeAg16tB1Nju2h%2FPKt6OoUKIzSsbvmncwjKeyKCF9prHESK78SwSbU2WJI2ajBuEktfQrpg1olXMFjx%2F75OBsEYS%2Bwn0bwvmA6wW8NjCAmuR4plzRtJ%2BvRdUCK5LopGFkxLZ0%2FJtYko%2F9Szlr9g%2BRRfYjmrhEhw5bi9aKtaTzC8sP%2FM68L1AAnNeSzyHkd4XgiZn6DEJAub1NY7lhSWVRPoShuw9jqgwjhhwje1ovYMfM4w8c7OUw0KvJyQY6pgH71%2BBA5wKMLDLaVNrwVd6oxQP94eD6AQ1zMrMLUST6slVVDFrgqQQ87ICpuegqas7by7lNf5Y335BHRk669LhT2n2g6SkcYN5u8P7S%2BnBmU4s9xSOftX6ZBKw0%2FkUW72f%2Fr8EvnRP2ldDn6UkJ9o5faD3%2BN8kdKRKYssh%2BD%2FhPwyNBJOT6RpKqSz7EuC%2B1LUoDKBOEuo2j95l8WuiJZ%2FPhCIsqYO%2Fw&X-Amz-Signature=85d9a40443b950e6171d847c5b0a0451790b30f6b25ef21148ab2bb95de91b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

