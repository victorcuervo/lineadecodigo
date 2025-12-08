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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJDX22S3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ3zjhZKmxYokuiIJ1iWNG2iWYhmUhRMWFYehZRN7SjgIhALH1MpuD5l4z%2FoHmn%2FEMX%2F7b89DxVA1t3poBc5lVelEAKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziCIBdzSIt27YYEUAq3APBpNfZPbax9qhgO6%2BIlqCLsI3Cc2DYXBTFa3bEdvcTJI3225u2Y2QaLZmjX1u3M5G9Gov3oeKuKyYnJgqzvE%2FMlB9jzLodAimtS%2BsgA2K9XALNo%2Fg7OejiSXZn%2Bme6YaxRQcfAGUAF6myJN1KgjHx6%2FeheAIJaldYcmdcTwyORgpsukYysHdHZHZd6ke269UDy3ZqowCXdl1YkPlJpWcTDTRaKEU%2F%2Bv%2Fk1oe2fodmL3cT5BowEAPJ8w7q2NFP8%2BiGIkowZsaA5M0LdHs9H4WXi8CjDYVZmXW46rVS%2FFTgHJ5y1l21xRHEOBlr9%2FU%2Bmv0UTklAwrIsJ3Sfl%2FdFcvKzK7atkTuYhY9EMOFMZNp%2F32K3Cc8okDpp81eLhitCYeLop8VLbKvgYkWs3Iq3f4x%2FROy%2FwhbS9i86fmh0f13JxIp4S4VgvquHBk4Eje2avArfXW3MVFDC41ih3ix4f1BmP%2FPhzjtFOuvM21tVTTgDh3UICh3mJUnyRitRYAMHOQMVfBDFVDJpiWn6v6NosxV4V21FornOhxILP13EoCIZJELxAqZgbeLLXS%2F7vHVRraMZMZL1quxWGftNfjA2jJr2EWAaquK6L2FcacJ6bIO1SRQMf6qMgZDA3tRDP9zDB5NvJBjqkAbls8T%2BNELh8RV2enytNVqfkHvuITZLamM8sLW4d4S7GVUAZGjAxT3Q5toLwNPO%2FgmiuDARVh%2FyQ9E6HDuj20HuLrsnbQ%2BmJ5jjPqW5EQz4nM413Oq3%2BVvIFY2Ol6AREzCt7fKfBw1HY58j69CgJ3vLq%2Bozj6rUhDo9QhTBKqo4mHrGVE9TReiqk8g86cnG3aphRvdRme0jUbrAoW%2FrW%2BswgOLaU&X-Amz-Signature=d230da1bf25104e542db1717b48d85f9dacd4d2f2680ed5ce9b7adf96306bcd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

