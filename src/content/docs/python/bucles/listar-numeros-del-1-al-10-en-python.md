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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6NIX2S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBh4WR3UxZ%2FprgTxpLO6qNMlkk2mzmwHUmLMk52vvy3XAiEAyIj8Gz1RqbdfP2ps77fA5YAP8nQ7ir2Mk04mvyZBLRAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOHvZRMl00lqyrQrmSrcA9oXzZ2k%2BljvGHBMM%2FVLLuqb5erSIut89d8VsnkRTXl4OicIkeij2puVRDsYY3%2BcBge0klPvB4rtpa4cK0rA5xf%2Fk48VeyHLChuk%2FN0cPw%2BEfKFihr8dfSjlJZnXKi%2Bw74P6nSYY420bEyNMkCIjdc6bX9dJ29TujtqDxpRZEWU0I%2FRTfK8UEcFeylygXbhaMrU2kSl2k4MS8uIf2vevFdrgbKN2bVkOhWAUBpEHVoudxt5ssJ4FBZWofscYY6ETneFlCiUKcOruQ%2FCAofP7Lr1dqg7HK0S4YFEi5gj1o0kr7IzS1E95w17mzW2WoiQ9NGXvPVh3IQENQUU7Ixcz9w7glEc3%2FSHPmSJr9AKbijO8B3LxD2ICWHqGz%2BP1gHh8iz2%2Fdo%2B5QnYr%2Fm0uIPTeeH9gIwTrOz0n1UvnOhYuFI0daXSGOAzGCUJNqk1vHr1oQhrisan68CSAwWl4l2bHy6zkQEOqfAD%2FE8w2SDABv8l6HkOxlbG1osyvHtO7NgRNoH%2F0XnbITmD%2Bk6Y%2B91o75R%2FwpNNatqrpeRz2AZelPKSRB8FbW7ZSK2yCyZyMD0%2BwIMkBVeLaFoULOSIC%2BZYYOmtM4iZ1da%2BbXOP8R%2Bxrp5p2OIwaRj93fpeis42GMJuVw8kGOqUBbZybkSekqvwgDWG%2F5LVzjLaZQ9c6yX10C3UlRVrSfXwpC5SYrkBbRO0H6wpKxNrxjPWaAMUOKjgQPT0abRSWdXfrxTUvQDvN9sOC3pFnFL87XhEZ4uVbvp8xcDGLSr8BcR1HAp6fgb5evJ%2FgAJS3Tl6wtukv7Nq4DNmwrzt1xDC0kaFUlMqJyCE2ZHj7e5p5bc1epZQzeUDK2tBAx9zUiSRu4Rnn&X-Amz-Signature=99c0622211c7edf01099fc7c8be3726e2e1b3e1b4db80eacd30b033b8211e2bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

