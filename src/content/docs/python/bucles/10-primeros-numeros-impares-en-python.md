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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HCSHY4V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC1SJI40NSNIniV6cSUmTqZBZzBCkPxAR8va%2FvPesfN4AIhAOMXqvoN0MBCpXyJXzaKvksuj4sgPkVqpsw6SU5armYMKv8DCEUQABoMNjM3NDIzMTgzODA1IgyCsEEz8v%2F9MiXoUDoq3AMAYkRMQWNJZdeLas4GLP2Wm%2BnXFhl3n7qV4n%2Bz%2BwJCpHcVtwTSI6OTCDfsYgoqCgAGCD3zzl2eyA%2Bo3X%2BWxAdf8TYQCNUmJ7mZK2rkrvfCmPDW4M8EXPC%2BQcl9aqyU%2BXl7xIE5S8fviy8norFo56Ng7L4O1%2BMA%2FiRVGDJw%2FVxtBdozNm1NLlrjbX283ORAdRgLrjeLYmPR%2BVDwfkQCt7xAKwO3SrV7UmIb8OpRn9v4tOBwWwP1AkofzOytpPyMlotUoPZQqJORTXtt3GWsWxLhCCl4NJh86O8zDMzyvJQtkDpwZq8a2ad5lyprs3G3qbeuW%2BNGCdzCOGSmXkK18XXu%2BhJU%2BsSg7YkqIuBp9TuAw4PbM8iP79K0mSM3RppjkSMTzLxSQxPkSVg1V0F0%2FcrA5FildOtoh5sn2dYBTcqcD28AEcEX%2Bs50Urp7XHpYJTUrg7DbxYSXyJ11BSa2S19NQ%2FEL%2FcIgpP7bw8TE3pkfsgSVl8hTHAra1znkfjG%2FeIhS5KxbTREepnfSTRkiozrKfsPEbGW2Fx4EYBT4tEm7OT4B1qwuawV%2BlrhFzVxSqjjai6J0Nrvf2a9KvfJOMjuABX2PVX3e8rKM3JYzR%2Fq92Moc%2BDo2x2%2BaAllmdzCF58XJBjqkAU%2F3z3rhF8OnwHDM3LLufxDvHQZ2Iph4sWT0e53%2BRUrOPsp6HWRX21B4NLCvfjE%2BlCxstb%2BL2Hay5uhwlXGSRmxOFVlfh99bcq3DF2ix59sl6uM%2FHQTpdkkmxX0gKnrzCZfxjiUnI0avu0qzDPSkaiV28zX8Miivo%2BGm4lVrPPOAX2RtpaWbH225kOtmSDPvVRzave9dU5bZ%2BQwH0rqSlSSAAUi0&X-Amz-Signature=806afa6620d40c9620fce12791fb3cfb8013baeb7aa94e9182f169ba0872fc3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

