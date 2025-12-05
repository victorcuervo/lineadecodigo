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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZL5QQJU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLvUiEdXnLVr4JDR4YJcAntmUT3weC5Xsa4kiw84CKgQIhAM5mw1N6gxjaPrNEqGOO1ilwkjKl%2BAiwgGjM5YzKb%2FuXKv8DCGAQABoMNjM3NDIzMTgzODA1IgxGrz9%2FFvv5Mpyxvekq3AP9J%2BfS24Lcf0dwKK3rF3jjnLjYbBAQKf9M5ZmxYptSSzKv%2F5Leav50R02ifE5eP0KU%2FQc3PFNdhNDZTSKzTxIPQWWIiNSWuGAB9u735OeAFdJAzqTZWi3C0RASkt4njrwE3eAkEpJ6DqhA4YIBxYDhq3UV66niHD%2FHcp4pRr57Dlz%2BAnmjieQHlljwWupa6mVzqBlfktowhbQIxGOWrXXhUda76%2FSUE%2BKEQmQSapbGkSWiAXBd39M%2FORyaQE1qJ6A88Af2sbkNs07RlNKixcWt6WwIVRXaf3Qcw9F3vgpczN1Gu9CrpyvTWWB%2BVL1OCFvboXhEMOZRIpj1rLTRAB4e%2BUpBAQZv%2FXMRBwgldd2uYruLX37%2FlYcr9H9Wt6es8swHTYVXNqSXM%2FsZkYYmBYDebyoKzjdvsX65ScmTaXQGi0EFRSm7eIx7gxgBTz2LEK%2FC%2FH76Hx52GzSnNOhzug8lv1vrgimNhrrEu9ZmeQOec2uwv3VD4vTy2SNIM23lIVvLS0bgJgDADMBX6eZmPCYznTPsTKgXLtiIQ0auyLdS2twierrwyvmk0XStAT8lCYPGRAtRsJ%2BWGPCLi8bUjiV39T7E%2BrGnT9%2BZRjrqiUGaIaEBGL89S3nPPhKpxjCb7svJBjqkAWjB3dAupRo34xA3wBFKKULtv5iyFK%2FRch2OqBj%2FgwCDSsYBcQU5d%2BtO0ifFYWb%2BPECcbf1M7awFGYoyJ1MuBxXPD%2Fi%2FItVRe%2FsWGGC%2BACPto%2B1%2B6aYII2oetbRqRBid3%2BiCT%2BKgXTm5XfQLpJqV3fUjxDtfqxR6dJ1tIGU6%2Bv2OKjwUeoYZy9eTiUMIwdGRXbnPESkBRBkf07SzRXeMmdIGoCt7&X-Amz-Signature=d17d585a32bd7a89799a2073e6273e8a32c40287f478ca0fc2a83bbbd10275ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

