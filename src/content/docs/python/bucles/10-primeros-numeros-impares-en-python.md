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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3DJFLSB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIELTiTjKsOcmmdZ%2FygGZ7UhbR5Qk8NYjL6pd7RuAcADKAiEA%2BNQTHGjR1vf0MmT27p4LrhEeWVc7evMFpDlT%2FhBm8NUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDLO2ScFM%2FJx4sxs%2BOircAwHQPXUv2JMf8S8At2TCAhyCP3njhSw4cUYSjTL7uUH5ZmJcoms40m0xEXR7GU%2BJ68J%2FKfvObchW79wPyDGXQxLW%2Fo46URULSoV0a81MEfdDpstSRJ6WU7z3OcninNGAI%2FRj%2FNmfRxEJ1xriTBYA53ym93bKUotXRuk7y%2FqimAvKAiWRpju42xcug%2BDRONLWu5t7grIYNtUuAtMseYRlacCpKBO7%2FbNTjO0wJm4tTEYjU1i9bqikK2Fmbnl5bcuWxbaepwhQG8Vbe95cDQJ44kex1W3YRXu4b%2FS2B2obj6kVMT9%2FBF9ZtSHEwrIzbSQ7zM2n3kIeahNcRrQDVZa6f1tMp2zpnTHjXdHFQ2ucQYFndR%2BQgRLciu0jcpmXSAHrwTu2wzQF6Fy27qdTGLSeFzp%2FfKKqt%2F2DilaQx3daMQfvrg8b%2FzaJxRLYVSAw2UotMG8N6y7WnMYm1NKeR%2BpXmqfcoxoZuMddygwfa%2BRh7tpbz5SuLHaJUMnLSolG4fDBe6gvvBunZiXciR%2FFosKI3hqp5jdqExwUL5ip%2BSTJd9uOXwArewNIXANrFVEjupXNsWYGLdBPx1SUCifvY6W64Cf%2FZ2uqsuSxAI1IabNJ9A0tUDHgGXRrZksTTm%2B5MNG%2BxskGOqUBkKFDVOmrralW7XUJ43sNYFItLi1KoIOxb6Ea%2BPDLTfr%2FmsduEWSihbwlC2jLT9H7G0JSWaB6IJQhhVZ7aGkbmeryL%2FzJw89yLyInTFXw%2FpR%2FSfqUn5fezuRCXr6VRQMQ5NtiSyk7J%2F%2Fu3GMri11mMl7L5hUR9IQwIeIohqL5PIy7kcNBp5eWLtflEXMvmchMi2qqI%2FBYzTRDl4oEPd0eGQwdcVm1&X-Amz-Signature=3ffd9ad69ec88b716ac469a5de81def473f3526604f61b0ec1ca9f6bdcf4fa71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

