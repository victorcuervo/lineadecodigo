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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GG22Y4D%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpKPktVSJMv%2BU%2B3agdn1yKzTOQuAIqo2WF1ogfpS%2BGFgIhAP9n6NBbhNR0vPjzXanbLL2515z%2F2Jah3Ji%2Bxz1eXvmvKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvCCiLA4Ebep%2B15%2Fwq3AOr7MgMuJ0HbcPdLsW4v9GD9%2F8S7NrSzN3ZXIDu%2BquwqGmkrur%2BGUmMb%2FL1TNaxiPHPmMxo8uXXsIeo7BeGpovM5%2FPvCGfQj9QCVbOKOfBfNwcNTcrv5uZcals5y33RyeE0mDhJSC92pRiJwQlR3KEwK3THL7MzDQdUgXb0nmi2ptJ%2BZODmB3aE%2FuzJ4%2BXGr%2Bmq6eiWNkhA6jlCVCjoDGZIunSuhQLgMXbYPKHSF2WZSF0UTCFTLxI0ODzisVR1AFYD7ibG%2FmNNZouujW4qe0vcmJFwIiJDsSVRFT%2B1c6sQ1TcJCVojYtQGrJUlqpNreaak%2FGPwq9NRcgIEI2TFBzvoE4Xcrjzvh9HwnD0l9koz%2FY1sttk6uX9Ox0Nccyq6warXh%2F7MgqxIC0vpW9sjxQIxqoY8OZGq0j%2FBjYJYb3Kl6ZT%2FG%2FZVNmycgifCPErN81Sm73giAz1vLQ5eiLASuoLBmMJnJEXRQGGFaVzmTZLYOrX0DOwbDkZJNssCBd9jzdY5wax9T%2BR8fFwewWRyhIziGF%2FjvWPvnjM1CkEF3O8hfEYflEG0ES0zBvmvLItxdTboT5T8vgYJi0jeFzbNqT%2FRGmIa9qNApEExu62URbugVuQNzDHBki0tLb7sazCkw9%2FJBjqkAU8JyI7RVH0Axqf%2FCrOEjvS3kqrhbK%2FmXwaO%2FPfEznRMl3CEMreof5K4sKuO3OYDXSL%2FkrnaTqilFoMIk1dJAlkVVZ9xhxJJbDfwyw90gJJd%2F1k9ipr6E7VwQMe%2FLaJbuvKuAxrLKvkJJk3kn2Jfg8zAhYIeBIC1mCwNFK8lQbP2TSN5yDQOF9Lh0msVfX6YMFJiQGaU5y2jD0YA8v2vFGBtXQNy&X-Amz-Signature=dedfe7b9707dc01e40f9db262dec717795a08eb119be505b4612799dd394225e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

