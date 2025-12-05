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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VBJZHKE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDReT75xdALJNM7CQmCJpQRLp%2Fs1IEyGuQ95VZ1rXZ9rAIgel4n2ofoGbb7VY2t%2FxwtHuHbRLSHoZI9iQi5bPE6GvMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLcZOvNBXq3AjjeeDyrcA9jz9HBaECSp1KvLHLKo8gbM%2BasxEAUS%2F2ulr%2FFUxFB26LwO02CeULXi6kV%2BxsC7VUYjz3fHtgoxX8LnFv5Fb7PKDc%2Bms91PVHfYdvjMBFzGzoVrAyudFGSpOj1LB52B6NfrRvqfHkHhl4%2FSbT51CtM3R8KJL2ve1S3AwpJSxZqTjN8WXev1DNPtDseNarcm5blPMY6NKth0OWpWR%2BV0N0N8d9q7OlwvBfSFBpDZQhcDN9OpYn94GXoTtRW7VVjkhijv%2B%2BbNaijxZFM%2BdvIIPGvZcINC1DxaEryW4tHhw%2BE1IbqE2YT%2FLGDeJCWNqQeVq4fzHGqAV66MnOmRwo3fhT7SmEfVvv2Gl%2FbMS5jDzC%2BNJ1x5V5anMlo2Q7PpFwyn2ID8L4ECoucpwscQcD4v2kfNJ6dnRcxQ%2BMMeQ4HNpAAN8GfzY5HmU%2FljiFtcd%2BKEBw%2B0%2FCtEo5hLbvlk1mU9W1a1jqGgE32pMm%2FBDPEnXS5kRopLa%2BrtkVRGAHexnmDNz2f4ug0gyyqC2CvZYHzwHadfYVAK0LXlTXQJSo%2BnxcQz5bq3RQ47y0at7pa%2BwLMk%2B%2FJhF9u7tGscHu9ExRUDS9XaJTutpzV60KQ4rNCwNO3mt7Vkhb%2FvE5ozhdByMLqyyckGOqUBPb%2FfXAEB%2BQ26skQ2auidRcr%2F0I1AFVgtxqAagwEOyswBeYXRCguMnk0qp2a3bSB2AKjSxt1oec8FM1whziukmlisRKdPrfS5AA%2BPZbKdt9NG3VJvgpl6UCCi81GcLbYZUg48WkEgyhoV1GDkrjbbkf%2FZXse6MNm08KmKtdN9OEyunAgL8VrXDvsL8Dfcf5fTVabEhe%2Fg6sxODvbu2PclOefi%2BpTq&X-Amz-Signature=4cdbd3ebe5b50a421fd67a32f6557f5f707bb15af6719e54bc17aa139e1a3123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

