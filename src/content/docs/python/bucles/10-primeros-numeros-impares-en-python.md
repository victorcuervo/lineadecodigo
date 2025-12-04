---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJQBRL7F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIAYjqVYrWN2Mqjle4%2BZg9cdqQBA1%2BVuHHYS9izqNB2IVAiBDJUMCcrFesqtubBV6ta7ZZXiC5BwGu8S5I0MObuzAWSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMhKI1IJOTKe%2FEHIOhKtwDOhnblbkK52qxEDDCMblVksRDD1kmpVjtGiDYjohKSGJZQy5JD0ZYwh%2BSIM1eDpQv0wrlr56kV0ZN62IURIwBsTOJVxrQZ2mXeLubrPGty5DBrS38lhkP%2BpsyVHd1BAuuINZme3F%2FqiiR4Qvrvizl%2Bs6OW4ICQUYIUqbmtebAieRMfBtMSO6iwp%2Bl4QqNMthicVHykO5324kOtB7VvKSLbzVQaKriVPSPdmE8CW2Z5ZwPDg1nU2aMMOsa0QRtt8BtlgzTKgjUluwGR%2BybvDnh8HyjsigmDA89EK5MufLVD3%2FNltP5RGgFcOpfVdVtGG8uAVvuuNDxF%2B9hvbRaEj0zX585W1YLa1vA4g6GmDc3gGgficL9oSumz8xK9K%2Fy87%2B6REZy8jRI%2FpSvSwD7w%2FZ9G1JGAa%2BjxV81hWe4kcZPAx1TO%2FxkuEwlVZWemOCgc7%2B09n4jqsExJy6ipHy6jRDSvBcVPEfVScfd5JCvh3NNZ7gHWwyXlsc5y037HAUJDEEVRXSx5yyVV6qxLoC8ucu2cduZn6KrbsfGSAceMrC9hbBPULvfRhUeml4fEB74RFFXR8aW41OR%2FgXCHXmwT4CMklWdlDI97y%2BQS9kP5Z47IgzNrQVhEoi1E%2B3xqykw6LzDyQY6pgGbx731NUlMAz%2FqUAGppGCzoRfNn8i00eVGZd6FwhF9MBLFPZKy7Tw3A8pUNJ6Nt7KsWhEW6cLXebrxzI%2BTWnWUQgUnqaAyM%2Brzf%2FpB%2BPI4u70LOVuEMj6aIJiO4EVmZSObb9DCc5zVKRGZT1VcBM73AtzY81pcbYMnXfkj4pQf5v8qpiWCuQF0E8e4aoiz8%2F3vVR2Jm%2BROiXv8MjdWDzGAzGYS4XGR&X-Amz-Signature=f8c07826c63142a71d759ab68147d77d3e767ed3e6bc5313956b717ccd0e8661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

