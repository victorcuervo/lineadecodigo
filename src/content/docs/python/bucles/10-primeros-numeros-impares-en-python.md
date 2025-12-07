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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622VUEB7C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbLAVqCEionF3RYP%2BJMltR3mBaks5f33yvC%2Bj0jdhZpAIhAP0jAIGKK1056WYoUzy%2BlCssKB%2BHBPacHeLs4sfy9W1bKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FjGESGT3n9Pzz74cq3APQ28J4Zhmo7CBfEz%2Bk6ZxZm4hkxfRk%2FZTp%2BQWgTuHFwflHCgiso5sG7oaOvDIkU5SnRJEAglNnyxLA9uc3os%2BQ078UA5wtf4FzIosb1raii3HXlZiIQNoie0RHYVtF8XkTBWeG5F1dBJwz5dcO2eFqmlO4hWEex7BTW4vc4fOFhtoeOaY3YrBb6%2Ftfcql9dane2QJ3Y5Nwrsv7wH2LXPn3ut2XpMVxkMtHzp0EYPHRnt1RQfKp6%2B2DZifp7uk%2FCVWFVMrx85Wtj3JHDstgb94wO1QH1gM0Pr7i42VWTV78xnlNlGivm%2BGaQCJM6iFXYqweBojeoprZWK7OK7O28LpvcRj%2BZVzGHyB42Y%2FyaNk5KmwQgOvq7xQu128RvZyr60rEsriGGP5kLz5akfHgrwer4Wy3eR%2F7%2FQXTaa1QVvuT2QmtcijH5Z1JHGz41aVWtlqxmpclol6WM%2FCQOfXY%2BpktbAZwCe3u4E73hz7qjk2nvtcDd9APtcVv2wIvB%2FXhOhH8KI3jXxrZWxpua%2BUQ2LfAozNIcyRELa927J8E7NCJ%2BdkT2LRWE63SDXQItFolAyeSr4r%2BwO%2By%2B20Yj3nAI83GGGjzimWyGewgbf1A%2BwR3NCNZQUAqNvnzFBK7iDDCmdXJBjqkAfyI0VjfhZNwfdf1vmjIVBNuOuEs60iEBb58753VikHVU5mCsB1VTZ7kkf7UrUyNiDmOOnGIE9iKxip9k47lx2f1fJ5UYOTAwCdqz1FTZlDlZUToid22dXsdIYT5gnp%2BYIu6mKI4MhuZJMihVN0pl%2FNJsmmHNdkasdPXd0ip1mHJ9lqPwau7KRHD5ZUSDBKKWMDJi%2BgcQgd%2FdUp4JOLxOZDicQMg&X-Amz-Signature=9a192a7ef63861516004a161365e423187ee5fbceac51a4259736840168d10a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

