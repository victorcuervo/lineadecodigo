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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZKIQDUS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5KL76mblEC1t6qvOGljFY3jPr%2F4IrPZ4nDJDceyM%2BLAiEAyJ3eTlxSvkGXzZNciRNb1Fx0TeCCMTViuJZUC%2FpaZQQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApKOQRPOhTU%2F0fF6SrcA3xMDOA2PKdFbsI0w7SWjoL4v4RDUBuJHkrfoDy2pMtIusrzlLcIzolulOryPEVEd3pTAGg7ZWw%2Bv1vThrzsDr7DIyk1R3hqZ1M0Dn9KtOvnQuiKLEbOC8jh3jnPYFN3MKBqbD%2Frnqb7pfPG7ZjxX%2BIb8E4vMmj8nsdthXCLCDtIlLEVTtMSjgtCH6YJPkvNu0XgCjvrc%2Fj1T2PYt2xKEFke%2FEWIoZYa2DhZgWuEQfoA1v%2F1c8uHGhanPf3cU77pHwxwctTPEj1nkknUdYf%2FUeB1W%2Bmh5vwOgfneVjXTOhhDIbdCzx5D6NKd7QuTl%2FmmUZ4ttn%2F7zf%2F8QUFHorYyT0SoFdOzK%2BgySyQyjbN9dujm%2BglYi9O2riItSs19pHOvip%2B%2Fh8BK9qujEWWALe2fqRvP3YMliOsLyRo7GiBwvDDtfpEj8QdtlSe9HcS%2FfgE%2F8HIsCyuXmU%2FJHeuGvi0ZLcG5%2F6NGe0dUCojBQJUB07BDTUQclNtF0ZFZhozD0fLrYVrzVLNClLGCRjnkFf6qsEzmScnjZKeyfnzA7DSB7M79j8dSRJjh%2FZqLoN9YUuljepjQSneolpeVilNMB3zLS3U%2BsFVhmll6cHr7Nxff6Tt7ZzRUcok77dQeCIJOMMGH3MkGOqUBskYCH%2BpkXDflSF87UPWm9jw0VFD31lq4p4viqopCuWG7bKp8c636ecCHZBXpkDOJ%2FYjGmD0r4KoorU46llBnhELX8DN1YMuRYWiI4eWlHZZ31zJ6Yny8nWtS14U4a%2BfaQbtUP%2FZItoDHqmQbpQEVRlkM%2FW527qv5bNK8I0dPA%2FFhXqfHD3f95nUr5nII8rvy%2BMZvFuYTpKwri8%2Bvg2QvHvrq9KgY&X-Amz-Signature=c8a15d80b58914406c68103352ca5a6e8f18f5035b69f3b7534c71905e019517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

