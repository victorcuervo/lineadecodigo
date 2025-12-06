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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5MM3CT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaMAw09hBkRV2ru94s%2FU6d%2B5AY%2F%2F3B5J41I51yYph6MQIgR%2Fny1hQO13%2B5Uq1gVABYpezIEnCIamBZjwzBeH5SpZwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDC%2Bnt33UcikG%2Ba5yUyrcA%2B9n4ruKW1MaKCKR%2F8OV%2BFAlUW7iatiGwW4bw8%2FAneQhFlp%2FJUPpJ4GoE2VDFfJgr0JTKIjTLZFk26neuhnL9a0sFn85ewyOTLpygaETSsGgT%2BKCLnhPegb9Qa3W9%2FRYQlEUETK62DMusTYfCha%2Fq0OypsJRPEQ%2FAVUEFXtlstf5Ba7mmfNiSdtIbn050tivfPFYQB9kmKAxs0GubaE9JDcJ1XBSBrD1%2FS4qC7uFwYgP6G58AGQSAiNfMvSGvgPO4cFhfEqQBIp95ji7Qp5bm%2FMqMBFAG0VeC1jeKODoXXSmgJe1c8vg6jukm86jNmxzU836ZjU4eXsp1X9VwcW5aDC0QHFVC%2BCSAwsAmVr6E%2Bjt1k%2Bdbbxt55YSCuYtKBHpBfS4kXpv7Cu%2FyHFFswNq%2B1xNfGtNMNzyILsBMPqBB0ExswfUq0wjdQp3b%2FRGJqJs6ZO03XLtdfIw9lAJvy0mhFKITEYpVNnI0jh6K%2BUiQCEh4jOy5BSb%2FvIf5HyzMO6b41c1IJMAVN%2F%2FviJt75ucm8kILj9CWh0ZLlnd7xPI8xFLHw14kHsX8PU3WeEr9rZCAw4EPPkfsXJFjywYddDnlzF0%2BY0uImfGeLab52QYOu6MYUky95XRPfAmxh5zMMmm0MkGOqUBFQE794SDTS%2FFAbKfEFqrH3zBagkOtDq6otXruSgnRANvjnZpjBLveF7GNeU8m8LpLgLMzvaxCS9RH7nYIYSdoHaU2TbYzyLN9G9fus5Lh04uNlvYktu8QHPD%2B47WgQUTkFJ0r35kN9F2abmYdq7ulSJKpFL31T62hwCPCfLZFEWUJO5%2B%2B2NF738x2GUVYtt2gKm0dR7ZEvIClt6CKA8inkCAqhJ%2B&X-Amz-Signature=23e6fbfb520d5d0353619364cab07299039e497d38d112b2ef419b0dcc522333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

