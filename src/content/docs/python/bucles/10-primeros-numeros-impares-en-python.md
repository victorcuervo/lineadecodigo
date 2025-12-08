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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3GPHJYC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnIooiaquwmf8G531rxEfPeiau2NUBNOTrelepA%2FqETwIhAM9%2FwQ2OHwCGAn5srrUt%2FSJJYKnhMrQTZFoseUUgK2%2FyKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJmU5%2F6K5boERK4qcq3AP0BSd1Hom%2B7CDEb3jKmooofLOVClmcSSezEMVBOltBLEUhSiWFyO9aj8WK3VpHThTNEplOqO4A4%2BQpCdozTCI8youM5pilm0T%2FayAGSI4EtytcmMu83JQCKO%2BU3GfW8Hv%2BtuhFDyyFr%2FxIhPKgm5QVaZ2bh6%2BY7LjqwyUYglzmSvSgDZS2kteyeM3nxeS%2F3dq%2BE9%2B1QL2yfcX4aiVzcg%2ByQ7xyJLwfRScwS0aUt2kk6f3qUf6c74vrPnS4bN7Nz3LKyPWEIsrJLRnKKJvccYCXBh2BXTKl6lCOOd3Tj4nSY7byhDHaKmDUnEl%2FTGVny0FUEKuK8UghwodifPh2y4MVBy2ITpKJSpA3mHm%2BoN8o3MMeXbLXidRmJUVrD3ocJYqtC3u91zTRHTXhEBJ7htmOA0Ek12%2BO%2FtvUUU2sbXISx%2F0rfOGwib7Ncsd9b1d03DxpyK6homwAJr1bpeJPhFa1rOJn30cTEF0Hk%2FeYep9X%2Fe5NtuIOArqI3gRwwNWSJzp7SYEhtYIbj49BRGzB1zDKcgkWq0roK%2BQ5TPP%2Fum7Gpa08y0pslA0SRehWx9llF3m8eA7IFVpWb%2Bo6bZ524nYexkJUfCueT3S4lDc950dOwtMakma%2FnXEGKi19LzC65NvJBjqkATaxTOGi7adllUT5tfx3TAQZb230xTd9wjV6EB0rPDSqUCW4JH77Vx0cbXvl1gc70sPdlxKnxaxf%2B8%2B9A9Y28aCXtM7HHXykawm%2F5%2F%2BcFWKAsPaRN2%2BP2Bud%2B4PhCH4OC4UT7jGn6apAE%2FP7%2FJOsba9av0t1NBqmhS%2FMIePzJG3WFW3IGj6yQZSwT4PaS6HYOxVFBbGuqxRyHwEoGD4OBLpxCTu6&X-Amz-Signature=29fe6ee3a7134a0b345511ac1478b0ae4d752cac97a6610dd6c3f74626c1e4bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

