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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RIBQ5EL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCnvA2AU3ljqdZaEfZ4z0qvi9iIy4UcYQtquoxqjPTjEQIhAJPNVaoYjWdbk4uAryKYx1b66qMysW%2BZZAYUzpkGMHWzKv8DCDsQABoMNjM3NDIzMTgzODA1IgwGFHE%2F7eAzczBiNuQq3AOGq%2BcV2VnT56Cc9UNeRUWsM%2BQUyO3kTJPdXioeynS%2B%2BP438EllaG%2B2R8MyWgwcGC8Hl1JyabKS1yniQQQKFLelIGJJ22f3tVxDAnv1jBp%2FzlKrF0ieLHfQrw1kXTHDzSRDkHy%2FxZBWtl3OGkDw%2B3xgg0Z7Ox5EYZ04BjQbtRdBG24yy5unz2VddHT26Z6WVajFVWyn07HK3WF7xYfNGAi1SSJHbcZOOludVx61e%2BSGlZke0S8oTz%2Fw2nxY%2FIA09HM%2B%2FNHnBioINq86FJu7PZaeLghMOAo5RoENxztZwSZ5UA7aDTIV4WL3VishuH7x24FQqIyqcUuDF1Vpjk%2FNbAM6FhDBkZ612kOCvxhc9Oh6cpNXM%2FTN%2FjFp56ruuU4s71stex8lSbzryxzuT4mDK%2BxYlTanuVMibEdmYvxCQLbXhoEd9AlgsKxKI1ZF0h4Fr3w0VkZc8whSmSkiEkqpPDAPoSHEP0CeVqG%2FvQV4uMZe7d64gOHeyip56ggT4z2XH7xH9Y7hL4iif0%2BpNnDgTp4LoJ71sGf6K7%2F3JlKaoFPI%2BR9PmAOeLLE0xKcz%2FmdOBhq5Ow8Gb7PIv58CLoiQbRDgc3MTBHVDYOaO5i5QkmH6gAefNxSqASYHkfO4ezD21MPJBjqkAVLe4bGcEwBG%2F7REjJGJgyRe0st1gJEWW8dl7FvL41fTNzN3%2BWiwMqPNx1DrCfha8kAoAJ8igtLedVW55Fk5dsBsGhVwypyhPlN9Qm%2FYWYX7tfE8m3f9%2BFpeSD8jZ2MeltDdR19XMOc1CYyTwRBSjhSru%2BQHWOIeziWWVjl%2Fg6e4KXA7YDZVczYsftJf7fZ8%2FxdUEbT9Y0YRY3zhVuYd%2Fs7eTun5&X-Amz-Signature=5894e43b84f98196b5a8a6f11521e2f3a670572d08b09d136c695420892a0b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

