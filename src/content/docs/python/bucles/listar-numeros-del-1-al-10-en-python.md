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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAYJE6VO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9rsrW%2F9mJ22Iqd9MoG7piIDCThkFPOkev5Do3TeIKIgIhAKaBamRr0hLeAXWRJH8tgsXt3w%2FHBz8EUz30iHC83qG3KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyc3g%2Be%2FzSXzUd1CF0q3AOcayPyO%2Fx1Z9kNnRwD3TBSJUQdldMY%2BuyMQSw0OFX4l6IomUW7ExYhsnF9gdlJqx%2F0zTdVS3uf10edR46476ZyXiFi5XLG3XYeMV00oPFITak7sBCMbbJwxFhSneG32RtGx5yEh5Q6hsWJ%2FgsgWuLuvA65U02HG2Z4Z57CqVNTf6ip5Rt2NiWsYFJJYq9wvD2wjqUn1vd8VkZVolWgMa5%2Fh1FTXwTF9OE4ooqxw%2F4JBpXEgbxeyXwWuWr5mh4VucKdAF3xbc1z%2BkirAj3Wzof0pPBCCrynw50reA9ks%2BpMhJmqo5e0Npz60Vcw%2BT%2F%2BML537%2FYDwqsUyQeGatxoitdFTbL%2FQQZFSwAjMimUSdmjSzfR9uxPoxN2OWcBFjxXgVScXK5cNYN7RsR%2BBIVR2se2R0x29VK%2FxFLstJdluY1MVixRG%2FjpkM4JQAi8ZUq1yaaEQdLKyMwBSrDoILIlkqQ6EfewFFgUiQrNgWZy76E4XXHe4lFsIQKHcQRxLmdapHyCnOBgjcpGcsdfrtomAe9J87Eb5X5Q5OWnIXmurKZw%2BW9%2BcUgihN584K6S5cMWZt3i0WmCVOjGcvcFBUwl7WeXgt%2FGKyOaqoRJMjaONy2IJa13tGG6HQ0FOMHQ6TCwtNzJBjqkARFwGay%2BzqiC4Ggt7ZxwwbIASdORhiPVt5MowJDqy64Zmfqsi7OGg9SszwNgj2ql4ni1LEY0lHFOMArS7HaoV%2FOgqp1dm3rB7zj5UBP6U72H33NndV20nFCAQq5Zz4cc8MC%2FiE6A0K3w3sLvOsz7P6wJUG2jMru9K7I4EC7uKsf0KtArMsFeGuEdkJnupduPFDXT3B%2FA2Rc5%2Bosp2wVK9GcB2eR%2B&X-Amz-Signature=99a7195e59d7edf97f4634a3ea725b08d6277e4cd8e8aa2dcab19cf463270d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

