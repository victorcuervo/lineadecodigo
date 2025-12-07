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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOBW2IWY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpaj9XqyToyMhTPT2U38lYh0uzJxiBAAJEAETQhkc8NgIgOXrXCmqxsTZHReScukC1SLilGH%2FIyb8Yvofi89JXfyMqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQb9ha6DokbDErACyrcAxa3yAtaRWXAFiWc516S0YagiBR1yh%2FownGZBmzn%2BD0DfaDzIr%2FAZ%2Fk%2BhYTXjpUHxOmDhcxg8U5O2ZtGWHUK5I4W0cHJeVY0R67pfstEotLa1ZRR8dH3Mggim7ipzm93fNuwjr6HjEwSj03xy40zPCnDQKEzrkunV2TcYoSLsr3zDBfXxcTrLH0lflfVIw8cGDDi5outmQmU8%2FTYfdIm0PKTHSRIJ9dOJQWBUjrmJdJGptc1aJ8fzH0i6yrsLyFQwsY%2FG%2Fu3Qaczuu49dVKF%2BubV8iDMIsA5%2BuqP%2BTjDxyPGJQAfebrvFfdPinhf7bQOxNZ6pLmP%2B%2Fvo9zye7JdSuOV2cmca36nEEgos%2FLXPX9O4PEh4PAEWgryJmHWQRhjwitpg%2FKHwtT5futRYTjOxyRi4a2TlULefWXFKcwTuYo62EMgfTapTANRMAZiDQ5KSX0zZK3Xmfi%2F58Y79DFcqkyTLMWcmvIZy7jJWzlokS0yigMhakm%2F979a4wSznE6ZQYSFt8ARe8SbWUeufsLwr7kuGsjusyRxfhqdBgtK2zIveNxoSamJnDepr8xlpjBYpPnNSG6hoUCCY6grRfckfCQc5MVB7J6Y%2FZrjgKjt7mM9o5S4T8YztAR6bXccRMOKE2MkGOqUB%2BtiBJ2XS1BJ6NBp6r%2FTEqdZBqaV5aNwLVCRr0k7jYDe%2FdYRxGgTq0y74%2F4l90IP9ub8ZrbJNOOGaeRju32m32z8fOX52JuIqiJBTscjqEZIe65rRklwMCFeO5dxV5VX6TVfZPyOxs%2Bp6NpE5oeLmljTF1iC6%2FdOQUfo5bKVk6qOnpKuOcfFEetUpzHDHrTNHproNOVnDp5FciH0Zt6yCgNajwx99&X-Amz-Signature=017e298cb13c2a08b03cb92b5af87c3729f3c3fbd79aa2dada611480bc5d84cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

