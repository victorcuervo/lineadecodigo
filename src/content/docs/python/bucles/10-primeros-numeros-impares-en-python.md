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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLDM4OHN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCvUXvYXeNf3JNSMaDX5hvGCY02xBmCTkcIXouCwOi1uQIgYaR0sJ05XtxfPzrnyjauJ%2Bj7a0i0pB0uNENbt8nyjKkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCbJiTjckQIfAMp9IyrcA5h4ImavkfIgwbGA2q8olu0qamGNxcyp451%2BjTFO3R3VHGi%2FnS2lAOhiNXilEInQxHdNJsfdmRC1DoCcGN9ApV4NjelwijHeyaPFHSoBE7ell1BPj44GGILwF2rbG7wCGxqYGCieELCKZH%2BUbNgsbE6oUx1bk2tfTrrSQOYx8U1%2BLOD5r%2F5BhvCn5Z6YpGK1%2FrNdYN5YaNNweKhZKezdMm5NhvX%2BZTuri6CxTCGYd0ThOwBQtG%2FRlvJBLmfcSj9i07bCVWKEq3ZNMml9pmSK4nCtd94zkTXbTi6et5dzUEAz%2F%2FOwTGjxmByhmOq5FA9JEDPdVzt57iNvvUQKxy2xhkYJtAXpp0TIk3npbMuuK%2FqMa9nTaFG5YrrVHGFqix50HnrpEE1zNZxADkrAf%2FknnzwXJ39gwmTVR3%2Fl2IH8RLbzIa6L8zfhrHlqFJgUajZLCfqWADMkxuUJCCOmES3ae1acfUf7u0huxkBQz%2Bu6f335Sp%2FHZ3dgQjxHajBDrRAOhrwovt0S3%2BzPtdF5HNdN%2Bc%2FRxY593BrZfEvX4QEZou8g7uDjETA0ghWgDOjGYXAcpfvTQrokYlrh6oGfNxT50rib%2BvA0Ex0cTBo%2BQdzZdlMeUXUo8DNX%2BQl0SjtbMKCGxckGOqUBY8ET7iGzdDEIsLlehkSfVXob%2Bdu8K1F1QNv%2BTe4XXW%2F7o%2FpazmQpGpvIUWvdBJcQ%2FcTXr9RfAWCF160dvU9qmIAHhAvSnzlWpa4v9glkSWztFOLsc1ZbYr7BoN9RkqCUOIDVkeU%2Bfz8aMU%2FsN6vIzVPaDuyqpxAPylw57mo2mNhdFlOqlc7iYhRjEH2g2TuP0297YMdj2XJH5n21biCj9Q9uA9kX&X-Amz-Signature=46a5b4ce05d7514165d53302b5effe54f0cff70ebc949f09a65c983de7274caf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

