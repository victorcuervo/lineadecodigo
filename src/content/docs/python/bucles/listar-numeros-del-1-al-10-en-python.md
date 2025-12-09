---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
slug: /python/listar-numeros-del-1-al-10-en-python/
author: victor_cuervo
---

Hoy vamos a revisar un ejemplo sencillo a dar cuando empecemos a [aprender a desarrollar en Python](https://lineadecodigo.com/categoria/python/) y es cómo listar números del 1 al 10 en [Python](https://www.manualweb.net/python/).


Para ello vamos a revisar qué tipos de bucles tenemos en [Python](https://www.manualweb.net/python/) y cómo utilizaremos el bucle for para poder generar la lista de números. Además, aprenderemos un poco más sobre la clase [`range()`](https://www.w3api.com/Python/range/) y qué papel juega dentro del uso del bucle.


### Bucles en Python


Lo primero que tenemos que saber para poder listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) es que tenemos que utilizar un bucle en [Python](https://www.manualweb.net/python/) que nos permita recorrer los números. Dentro de los bucles en [Python](https://www.manualweb.net/python/) encontramos de dos tipos:

- **Bucle while** - Es un bucle que se ejecuta mientras se cumpla una condición
- **Bucle for** - Es un bucle que nos permite iterar sobre una secuencia de elementos

En nuestro caso vamos a utilizar el bucle for ya que es el más adecuado para recorrer una secuencia de números.


Así que miraremos la sintaxis de los bucles for en [Python](https://www.manualweb.net/python/):


```python
for variable in secuencia:
    # código a ejecutar
```


Dónde la variable irá tomando cada uno de los valores de la secuencia en cada iteración del bucle.


Si vienes de[ otros lenguajes de programación](https://manualweb.net/tutoriales/) quizás eches en falta el control de límite de bucle for o el incremento de variables. Y esto se parece más, por ejemplo, a un [bucle for-each de Java](https://lineadecodigo.com/java/bucle-for-each-en-java/).


De esta forma, si queremos listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) tendremos que tener una secuencia con los 10 números. Y si queremos representar una secuencia, lo que tendremos que representar será una lista de números.


Por lo tanto podríamos decir que para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) podemos utilizar el siguiente código:


```javascript
lista = [1,2,3,4,5,6,7,8,9,10]
for numero in lista:
  print(numero)
```


Podemos observar que hemos creado una lista del 1 al 10 con los números y mediante nuestro bucle for recorremos dicha lista para acabar mostrándolos por pantalla mediante la función [`print()`](https://www.w3api.com/Python/print/).


### Elemento range


Pero la verdad que es un poco tedioso crear la lista de números, y quizás sea algo realmente complicado si en vez de querer listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos proponemos listar, ¿2000 números? En este caso generar una lista sería algo poco viable.


Es por ello que vamos a acudir a la clase [`range()`](https://www.w3api.com/Python/range/). La clase [`range()`](https://www.w3api.com/Python/range/) nos permite generar una lista con una secuencia inmutable de números. Por lo que si vemos la sintaxis de su constructor podemos observar lo siguiente:


```javascript
class range(stop)
class range(start, stop[, step])
```


Mediante el valor `start` y `stop` podemos indicar desde qué número queremos empezar hasta cual queremos terminar. Ojo, que la parte de `stop` no incluye el número que indiquemos como parámetro.


Además podemos conseguir que sean incrementales de más de un valor a la vez mediante el atributo `step`.


Por lo tanto, si queremos generar una lista de 10 elementos deberemos de utilizar la clase [`range()`](https://www.w3api.com/Python/range/) de la siguiente forma.


```python
range(1,11)
```


### Bucle para poder listar números del 1 al 10 en Python.


Ya solo nos quedará utilizar la estructura [`range()`](https://www.w3api.com/Python/range/) dentro de nuestro bucle for en [Python](https://www.manualweb.net/python/). En este caso la secuencia es la clase [`range()`](https://www.w3api.com/Python/range/) con los valores del 1 al 11.


El código definitivo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos quedará de la siguiente manera:


```python
for numero in range(1,11):
  print(numero)
```


La estructura de nuestro código quedará tal y como muestra la imagen:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVE3ECXS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGMHzvy48NwTUDq06rZsGAJkXPGImJTyk0jht3MB2KRAiAHDq9rpLKxECgxrUQ23tWF%2BHY2pl8hFoQjx8Rsc2xGfSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0dtb7CiRVX9QwJgGKtwDY9RnWxL%2BhIId%2FoEZMUqOjEmg3ZJjxXezM4DBqCqher1j7fL8GX0jra3VG9vAPZ1eJple1ADDTNOv5OC0LcLe9QBSlVKrDDRa2%2FdudS6RZf3FUAcs6fNV9kFUdHJujLOzMPrO%2BhLSE%2FEKfTa7th37z95gH67UOXCGnOS%2BHM9shZikqK8TgwtkqqSImkrlcgtgjAgLuAkTDXrzucVG7UOTA5Ey46m%2BAZMbUYGgjZNB3iBKY4mMQwYcuqXd3%2BysCZY2s2DZIPcNJmcBbuRZ4%2FKx0c8lkjGUNARibae6mmjj3hYkY3Hxv7phnSi62cyQNiW8Ge7mIfR88cA3nY41qc7VVppo69DwMjZAXJc%2FjKIeASTdh%2BhhHxXE9q0LtRpLfml7YxTve4W80tP1DcaxyKYfLE6bpt2JEW44cuIGimjyyYhTeuXLnBx27Vb7%2B%2F2qpTadGud9w3pZBbFVzQgorbNI7%2FA8ZtfWXgDk89qSLI5HwdgX9C1YpTzyJbliBT8ysf55dDs8zwJM3rRZCpL1QBOFxzpsIAjDMdgX%2Fa0ApI3hJD6v9rwr%2F0YqQQkv8PkcU531R5%2FnpHN%2Fny5FS6Cq4dxKsPxAPtYL7zpna4rHAKa4ZEf4BAwqdogbUaJp%2B40wiIjfyQY6pgHFMU5n5EnFXCTqjDN5JYCHYFN8xYs45fNBZL9ZqnWCM7kxCRq81%2FMV3rZNSF9%2Fs5SUHnHs9zd7nYZp%2FAJLMcoyBG0EiP%2Br%2Frs4M4JPO3cNyo4IofEjCGljvzgHLp778YvLlNy1PqAR1aHzo4rGvDCV%2B%2FsPBYUYwFCNTkG42vYJ0lCKm6pdCoF5lQxkdnhjHt2lYSTRfv0D1lb6u%2BNF%2FvAjTYUoCcfO&X-Amz-Signature=efa47baaad69f7e1e75d592898c76d5e20210ee439149cd31caf1c9e77897ae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

