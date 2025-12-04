---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AMNVXGI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCGoQoW1dHVl4VM7UKfb1zAqEI%2Brh08wLUCmifxJbvK2gIhALMkm5DOGxCr8CjiK7zupl3xFhOLhZmqDSnWwNfAKgE1Kv8DCD4QABoMNjM3NDIzMTgzODA1IgzYARYv5cG1ea9kPAoq3APjdDKsLHPSJkcGypDc0mNpSSs7XHbCR7NrxzX4FgbsUgfq3igSsGa385wYaoSHeVTjdw76VtBaa3mqywf4dFnGANAIUIFerlThnx9fftx%2F0Yw18eF3k3FLJ%2FSWE2iiVs%2Fvr9yFL6dgLg7ajt3XUKvVUxNXegjID9%2BhNk4%2BosMeE2LnozJtMN7vr1pFF82MINW8MyLawXYrdNgmEC%2FwwwBKRJKyMJ3CpXzx2KUFC9Q2dQ4fGyu9ToOrvBPsMq5Hb0Sgf7FYARSJZYqU1pRzoJ2E9ZR46q%2FANBLD%2BCgYTIWB4xfQMjdrvX5OwkA155hzmKo%2BnhmRBBFWUKYWNic1On9dDBvyiz0Xfo9w0hobebXAYhnJqwncyksU%2FktgiytyuFBqSG%2FDe2KWC6u8C4frgRrRrMh%2ButVmFnlzbFSBq6YpmF18WY1aFblQJuuj4VJeorzPqV3OVHNDPcacrB9CaZLFUv2b6b9zP2tm0oag7tRR1pj%2Fe5vFa8BEPOnXVUQL6Y0le%2B92xCpzlf6lRZAeN%2F5EH8WUuk0peLTfPe1Sk3xpD4wlICoJMLJZdMX6h%2BnmtdjHo4bA8DVI4g0kC8PBW6uUPqhSuq6k%2Fq5s1tBjf9hEJiyoqA6PtR1HUVNqkjDwrsTJBjqkAR0fDn%2FBcMsON4Q5AwXpc%2F7XMJ2fG5X9KAtvXWLQE%2FAwbSugWrssaDem3lJFhlSerPZX6J9G0sYaXNpjGLlGTO5H7hVKtquZGHXgtVqrew3XQHpbQgyW71lp2AEznjWiBT%2BUUKANajzfYUhQ9wg1rwxVCC%2BfDb%2FcmY7OUDp7Q6vxfBYnZ0fvrQlT1kN%2BpBE%2BTLxv6HuTXK1dFOAcz0A3cmK02xfQ&X-Amz-Signature=6f3b6f89b7a18d89584e5c1f23a58242558c416fe3caa26c46eb984d410e84da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

