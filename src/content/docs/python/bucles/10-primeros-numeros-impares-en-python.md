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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPRO7JHH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpowSNf1qyuPepx0poxc8sYhApIL72yWvZkuiVp2DjgwIhALwtor33TnsiABcFjF3m4iOWkOH7Mcx16klFMCVMpcYxKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBq60lpf5Ogj5aumEq3ANX0GQFEzgxWez0wacx84C%2FRaneRUyoezVAjyP%2BfbW40fg0Qzt8VKF0GjpW1b2sXHO%2Btyyh1DzyvKCTkmF4BKeij2MrhGGVJSk4%2FjaRJw2SH8EQNsx6VWxBc7lp70wC37q%2F%2B9rjkpGpjdxwBhiHerKwGfqaaOc6eiLnK5PLe7WW9OLEdBc0hVDU5OU17XNhAgYP9C5vwFgS9mohapsiwogLG1uBOOU1KaBMdblNwwUjrjUOgjBMeC8qQ9N6RDz9s4rkerNenFMJ%2FIAP5aNluNuD4%2BiGW%2BrWbmtj39jwBGeMaldT9r5lbndDLmbRBVaIs6E%2Bzhe1OghNe8Hko5t%2BaupyF7Y650E3CX5wA3YLfWX8npJgP3QEkPUK%2BBvbCoWM2NAZGFr7kPmVk%2FwCtu2HI9d480CVLAZb%2ByXnDCU1is07iXymUV3Byaixu7eKf1%2BvynxIz7OlbJU6%2BeEP1ZgNN0wG3S0iXaigdnpPbOAxB3Mdcc5wUvbj0ueK3Kx8BuOkaVrILwQpDTyTOkED5PuZhaeYdeNdmkKpuYdSOUv0L30DEfhCXg26oybl9lrbyCU1kaYDRrz5aoVWikCuWCpvnCnUL5ykX29ntFSwZU%2FcKx2GZSkMZHo7VmQ5bHRVRzDWrd7JBjqkAVzu7u59PV7jusr3FsPo1Fy2f9XRzpfJ6%2FDR7vK7L8frnr34bGeW6GMELhQ1deZTfzHpYbmDmUeK1jbOkHhXapx0eAjVdK0ho8RMR30zwMKIRNddCm1i7GVdb30hnTHxt%2F04l7hwdlgAK%2F1TvuvPAANUjRzsizi%2FCgRq8i6sV097%2BJt%2BIUHt6uQjLRxBQLxBN%2BWWmmpGo4rramSmC70QNEv1Er08&X-Amz-Signature=bb18e2beaf47c90a014656674314f228a4101ce698b57e85d2998019c231451a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

