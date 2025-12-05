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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGPCYWHW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHANyM2E6vNmX4RjHHgc84ycxT7epr3eMQBh0Yx6h%2FjgAiEAt584GfxgyZkobavkeOm7pL20wFRcdqkhmGsV4tj5R04q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFTY34n72XXz9uF0ACrcA8JUh0phcaFOK8BAUl7zON81VZDPn09i0020tp%2FvmaXJxkAWXs7YFrmhkSKotf%2FhzEQ%2Bi10IGjW0ydXNuotlKqPD4OLAfEGIMhPMT0anGURipezXGG1weLKOKJKXVrt%2BMUD2CS%2BbihFP3MM1v%2FEIxYJTQ59ywxPsKftaKBfSRD%2B4ST2jk2rbqnSQPncprR9jLPNcXojZ9HOSuAHM0a0TuQUgzAioh%2BEcgvRXSsJD%2B7qp23LASW6xGvI9z0mvxxd9DRVHnlhF3u6LLWMw2Mk3Zp5CuBd3ERBqKzgH9lzic9bcxkeh%2Flqsk430KIUqmjD7fDFwplObDtqPSA1j0wo3qvU0DDKZRInAufHfBaWJbkFKx5Cto6MAPJ18bdHZOutODD8rMOcD8qLPyDF3Lj7AtY%2BgDWnsg2ieuWQCmbpO2ZKjV9iXRV6Q5d7RPD0QX3d%2Bcc8UnPbqSB58HPBDYcp%2BkCYnSNLAIwKF%2BDBKxKT3vs74tgln106MseGnFfCiS5Jq8EodVwT5dZg9TVqyos%2FMGSFnpSXA1k%2FCap1CfnHtScQK89AjrdyuvjuHDzTkk5mjPgmIQuApnw1ousHc%2BOHa70IX5ul3pHG%2Fkty3XtUaVElAu9Vi4hlA3mvOjZofMPH8y8kGOqUBmHAnSq9RWoMgd%2F1IU9Dykw2gMPR5QHj%2BJLJhILu7V8OKJRZPlduObptzVj8HFZwtaULP9ymub0xKiq10w3pPGXvRHHp84RmhK2swCONmMdYbuwSqGInPJffsxvfK07qvDIv1abii2dL7qgMjLZBXKg8XynsEBc6b93PqPQuncpGL7OE5g4tQLbOnpMI6yzgNnDKepA%2FaMkX%2B67Efs5dvNQBT%2Bw7V&X-Amz-Signature=0e3dfca34cfedb35fdc08509ae459049bd5a8d26bf87a3d80aa37cead9975591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

