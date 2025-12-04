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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JBUAIKM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9lcTP6s1BmQ4V8v0vVIT9vzhzME5qMGXavj%2FauzjADQIhAJHdhnu77F%2BpdFDtFHgYBYwqrhZ%2Flgu%2BJMus7kztna%2FgKv8DCEkQABoMNjM3NDIzMTgzODA1Igy0S4goz6%2BaUzbd2EEq3AOB41BFAA7kHJHPAzHCJ50H2Ef%2F1y08E86CxX9tZNsJUKOEfVO%2F%2FE1Ol760t0vd3quGE3%2FEnZkGT66mqKvkLL5VtBPyNfBkSaTLTf9VoQozC%2BsWi2r7jDlqkYqZ2iDpY7Tm7B8vJz5j4E8Eb6hecyJhSGlHl3eAeLt65LAzJtokVic%2B%2FPFCls7yUHmFgx7yz3zf6X4%2F%2F7fZo4nmVqsSU%2B3PuX2TIrNeGfodWSiRKZyidVut1eLT6t4MRN7gN%2F%2FN9U7XTgjIA0WOkNFQmu4CAP8xpgdod286zX%2BqY0lRzanbtoz%2FGQ8K5PPVseX9uxHkDIbFsFko557FiQn28yYU8sNLUhdgj69vQZc7NOZ5sOGJKDI3YoWEUfpEZW%2Br7vgnClmmxyEJoVNMBHKXT33mpBZKVmA5JEKMsNmKHcO9OzFeIcTmvsRWf90oCkkL4CvhGkhVTILexjzPzEqZnnI0HkutegotqUySXYy14WsVUeCYEPNGYJChnoDdJdq1Yl2ZDs84%2FOCt9plBp1AxX52c6OIsTag9gKQp3UganHk9V9XKNd0M0iZq0tVWLz8D6Gw1u6ef1bzqJhfEmwotDrzCp7IoIEWLe6E5LwkSmKh4e%2F7GaXoKZBudAN327%2F45YjDq28bJBjqkARSuhBHA8HeLNXMtnnlQ6%2BiCm9vUYo%2FO%2FpTc%2FzkpujmopchSGnOl4SvaKo691%2FgWdq5dQwDliGBhWbP%2B0va6waLCjMrXf8GMhUipiYVdRYPvOGT9hsEFgLaiQ01leCnFIJ5ZCGKYPxI5izWIBYzMh1UWLeyI4sCmCbbnuJC2Qafi1b1alq6X2K6EDSCj%2BLPz17IUA%2BhIh2MjWb7ofq6hK7nxSHOk&X-Amz-Signature=72259578285d1e8bec698de55442e053492208be165bdefac3918b0efde8dbf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

