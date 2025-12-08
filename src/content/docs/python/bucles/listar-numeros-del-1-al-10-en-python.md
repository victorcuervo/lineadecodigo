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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J4FRBX5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCludCauXgLwNR6Sn4ArAZ%2B8y7hBovwrmMP9EqQ0DcBgIhALfxQ3%2FPgLlu6hT7qUiy5hA54iHzGcP%2Fq3r0f51nMJnAKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjfK5XROHXwkQjDkwq3AN3JTGqt%2FlxoEGSY6uqMt%2BIRNqBhKnHxn5naP%2F8GGNqAg2RT4QgJLACsO8khCS2MjiYmz4VgW5oZHf1EgOagOef0v9J9OoRo55aEalXRBSeVjs%2B1K%2BQLgFk%2BwMNe%2FwMxuCuus2oiaRlvBHs6NlsBV%2BiIDmTCMTiQ8ISHpjZAu85Nz3TVfl1ZbtJ0CanSiBYvl2NnzTpMUt85Tnrl1QtFzxS%2BgVDYzFJoHPQvyvamerZkol8vh%2BbvrNjyZ%2FvzHUD2JanT6UkgyWjFFtMOz0WAPIjw0R9h1R8ybuwpIKvl%2FMrpjcsqpo%2FtpC0Ei7QLDCjGS%2FUPxqW4Q2ta5df3jLGqsqa8u%2BUQoCQYznc24zAaP6%2FCfyVP6u7RR4NuCji2hQv30SwkX9nLtBru%2By6uniKX0zkTKuwOi2Zdo3eSwaWjWeOzR00kj8gOiY9LztH1HU6ZYFStNxDNrNRDl6HuWLk6r5VFGoKtc3ZyeOY7yCZJYhxIoDidlYvZzdrigQImdfn6Don4eYHUg0o%2FaDdvthgYUh6GBAwXztSkkFn%2FX1QU61c1K3fL4ohpcLNrudjikXScd%2Flb%2BG7kXBCdeVerzuEdR91jIa0KwO7KPZWCbGdqLBZD1jJ9SI1gLn3QhLinjCT7tnJBjqkAUWK5FRfFuk5KbHklCn3NehGDMqpw90csclIXO3bZnV5n0RI1r%2B2CoPXb%2BAmxW1yD9M51vGqid4Ziq2EscSidzX4ROpMgkCBYeMMkqQnhg%2FvMi0SdOr6lCFwTwvQbMqPYh%2FKR%2Ff86qHDCv5YfQIsoEpJUp6GgQZwLyBc9en3jHda0N6CRTGoMhOfKRN20V1gmihcs8fm2sRPAZqahmwYk23cCDdl&X-Amz-Signature=014b8e80887ceaeae1b6a27a0416f97bf30f7c5bca0bab02c42c341369fd47a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

