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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U7LI3A5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPBRyY1fn%2Bg4l0lqVima%2BaM2lwz%2BcOjJncgBfGafEvFgIhAMtJQ3kCa89BBFvqBAwAQTbOSERRLjYaNUEl9YDike8CKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxGS43eK38vb4ak5oq3APqMQTbMZciUHLLicYsKlzxBmx0vik2eHHoWvSNcJ2nRc6Hr6Aekuuj15w7nH72s%2B06ocUIhW9jTIrfrZWINTy2EC%2BnE9aVbCSG4J2UlS2jyac7Si1JUvxyAtlEOotRKjnTz83xref68jLNrSjLGRAaVt6navthbVgQM8vxgMIy6ZCZaUTfA%2FJD%2B%2F2OVKwPuHLzuRMuVMCZeH80Ha8kCtZKX%2FAjenbHQVtBjADM927QB2p2vSQaisoAtOPjhMg8xxijBj3OdxyLXvXRhyuxCB%2BzqoCiQPbErempZ1M7%2B2%2FvwBLNff31POM1aFVg%2FpAioflcgwdwZ9JBmXSgG5kQtMwUAkR6K9OeG%2FsyDrmH97%2FwNuA5b3FIu580qkFT1ThFs%2Btm6g87XzgHWCZ20U2EgrKi20PhZrtN9ziccyyVsdVXc3KeDIqpByoHrZWN%2BuV6JM%2BSXpdy75GI%2B50Zo2xPLP%2BalxC1UMzKbf2b2QBAnrsRDYo2F%2BB7LTre0RNkShL%2B8mKreZbNiJt8j%2BmCwf1%2B%2FSce%2FDF%2F0iDLEJ3mKeR4MOQ40PeSE5LgXJupSHawPUBHCvU7KqkpGfJQUZD0Q44lSviiuStHkn9C9QWrb7cwwUXVYVZXKZZbDjcwNjMi6TCimtXJBjqkAWW%2FDIazpD3MZXfG5bTh9hsIrx29JvNOxK9N0wVEH%2FSfN6kn1shG6mKU8%2F%2FbJKRin4xX2PhElJkNv7AKcjizX%2FRcK7Z%2Bvpmf2P9xYnsb5VWqnaafFK0MY93i2X24TEW4gbJKc1oyBQmP8HrXFC6ngjNLfb73P0W4FWHkLfqPgDbbV6K0fizlf9mWthlu%2FpghPAw6Xytbx5NbeqM2Gx7tor8G9%2Bp%2F&X-Amz-Signature=48adbc781c990a85af826548f9136ea78e8226a21d891faec678668ec889fcf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

