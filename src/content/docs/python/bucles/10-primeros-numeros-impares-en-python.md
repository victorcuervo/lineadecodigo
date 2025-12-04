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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W63C4CRR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCCooH7SKRaCYOmybCmPY6qPDaSOBmBlWUUWRhQpkKuhAIgFrlnkWhy1AKMvyOd0L%2BZonn6iz%2F%2FpnTwwSUH%2FPTmLJQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHO0lJ5m1OpGUS0GsSrcAwseWMWwFkOnX1VRB1EgN5TcV1kcGk9H6%2FnmkI4WU0T%2BigZAPXt4mrntESpB8s%2BosaCKk%2BG8%2ByeiBmvC%2F445cfvt9k1lvhSwg8VAOU1BWvmNf8AnmU47T3DrzF0ftmxARWBpGBLETmMMRTLhNUl81jyVCJfCYpL%2FAfSkeuwOi2naEjfZ2nBC12mzb5XIyTx6Tc6%2BD%2BMdGGVz%2Bvqw2vXa0M%2BZrLm3TEljO%2BOEWn%2FX9qX0kbdYxkPJiVn9EaUksmVgpKuvZ0AMBwFt6eWRTJPVPOHyqBXnm2kfevWhpfljOEq7EJSmQ4Unz0dAfgiI6%2FB%2FaeVJYvlIfD9NKRvMJePko4Le%2FZPG6%2FinPHoljvIAbPK8KSwl%2FykXg0gTzJRpccEZMHyryRAN4sd4mihyR%2FMu%2F8Y8w3wRe4m9Xan7zRnNDNB%2F6vWxjVukCHXW8%2FMRLhlG3lLzkEYXGNfFBahqv1WfyT9Ns3cTCFP1Tp7v6T2v1wSOdDWQL2wKTsdH7Yg%2BHAyjpyKfre7GVRFmNGcDaiHuad6VUnxgbBiP66Q6laUn1oEgbtha6gMh1ALeA8dyt2FSvKc0JFq8R2nzPbADtdQz1896dt6IkLx0cXMl7FZpluistlptLd%2FlQ3s6O3moMP7Tw8kGOqUBBZ8UBOHrqRlqomBQmcuNbpzWNjA1bVjmNCGh%2B0JJ7oYPfpSS6VFEyAXnybfvuxuNIOU6%2FxAyfYx62ax%2Fmp%2FO3tmMFDeR2pvCD57GvURhrGpXypRzXMXIJPoDamRiF%2Bw4IribgP%2Bsi9qv2vYr08tM4bBEHlW7M%2FFlixKcWNCP2aMcBduIQgmUDdlP1nlMDONrp%2BDd%2B1HQvqSu3U7yme6wI5mYe6xZ&X-Amz-Signature=10faeabf4d08fa5110a275f39e87b6475e2962ec2ca8f2b49ee4ce247d4c87e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

