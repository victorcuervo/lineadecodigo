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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKP5HMZD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGe7QxXc3YsqoeOtU%2BM2eOdi%2B9LOLOQPDLylk7kRjKcSAiB9RSNm0lM5NzXVixRM%2FXmwQWXQcXL%2F2Y9FdWg3jUG%2F1yr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2BK5kpVYDhUksS3rGKtwDTXR7uA4O%2BAoRyswct7zAsR3%2BkAOm6uOfs48%2BVA6c3OhyA7VdN%2F9Rj326TRL44YcxUwiMVGaF6naEBusyqGaIR04r33E6y8hFud5uf127ZClrVaW%2B8Hdp3N1FY8mvkNAOTYz4oyCYKN3HKM7iUIqSztbI2U3dEMvCxCfHn3akFtlrQzpsYicnNWyAZjKTzEYoDPCDeAZ5OEHaDlkoy522wfzBiXGS78QenpeDYD%2B9WM9j5DwUAsMOO7Bb3v7Q3oxdgyDYWYXGZ03vEWM22GQMFMaSCKLBg%2FEIuifI7yjeiM7CJsoW%2FuWF0kk%2FvVv9YoNDe54ZCe3nONAJVB6Cllgq6cgcaCcaUvZny0g%2BOeGq%2Bi8w0unWopbskRLDAW9uoRhIzvLJ3MmWSFLdax7TLAZTSB4vaVPuKWq01QLL2Qih16JWR9cgKh5AgXYkJoQvYCOhwM5EEqXI80wJ0KgK%2FauKqR7ZfTDDtEacl%2BSsBveF0LzMaPOdX7u2q4XL1T1fDpz5PhOwJppVulrw3T9dvts0hGq77SDCVGAzinCMo4OPo0nQrn1kW11cnoFG6D51ETYPR85xUkDjiNABH8a0L%2F%2BI%2B%2BVY55B%2Fc%2FjC%2FMhUBXFWdpGShdWk6kRHcK7gJqow3PLDyQY6pgE3xGqXaaHnCRhAW%2FIdOK5xkh%2BpVJE9wTMSDgjwkYmQxmzIbuhdH9NhswvR2oGyinoDfaPmqjqYJVKGa%2FelCKetb%2FS9%2FPA14fxHMK%2BRvBMSYGMx8KXjPiAT06nkql0ApqV8NqmrqtaAmRKrLNPgM%2FYf%2BOPL1YcMsSzj5G0K9Qmq34hei%2F3rLVL6eJXvM36AP9pj1GS83jCmFcglxqd%2FVKU4MOfnpIVS&X-Amz-Signature=88fee1111b9b073f38e17a69c02fb5a26829ab33950cbda030fb5281ee87f570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

