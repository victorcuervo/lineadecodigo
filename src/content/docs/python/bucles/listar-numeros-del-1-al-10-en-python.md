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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C74YLJU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF5dDLj%2FBszue6I22TZiYcS5vTuLUjRCF5VXQ9trBeVAIhALeB%2BYosh0p4i6RUI9szc4JMRKWdAaBU9g9FAHs4W2p4KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPIKmPApkfbkHiHCwq3AOR5dDdu%2B3%2F9rQEhjCvt4M5Gegw7SwzAYGHiILAa3paP16Z3TG2n9VESQhlQApB8C5oQB0WNZ%2FnOHpMeAfkPyJNt01Wp99YZc%2BuYuNJfFqROIEnsgaPcgBZwXXf7fYMOUpNF%2BIfNc3vhzIhvE4D6jiwX3edGj1LPL59g7gpfyGpIda2aR%2BG5Rb%2FojHL7qvd1qiF54N1kDnLm4CeEDur%2BRISHjm0Qj67c%2BS6pjy5JfxeW266W1kdqFVu00nVW4MM6EVx7FUAWFbNweLwYz3zjsvSUeI7CXpj8BlFbQG%2FFpT%2B%2Bw8RpbNhbGX%2B%2BaxnXjs2PL7GRR1Prx5%2BmTOBhPm8fmewxW8BSB7zwLSsE1iVjsPM5JM5Z05sf%2FgfxF8VRPn%2F6kiA7EZBd4CBf1hsnZhgPnmr8ToXWtrP9xYL0Pto1kJf34cfPq6TXHS41C9Qanqu0yYmYDuNq88cYPsQOG5Log06dCvRL5q%2BbZNhrr7Ii%2F9b64lxrzeaLfscgfFfw4ErYRjsYFbWbmqgAxLEbXfWK4KakAhydvTm%2FgQ01mLcQiXjvVh2ULxNd%2B1ZoeYvZ8mHpSixby2LYU0XZByQ2ZyMmTM3VxDH6XNbR5eI6LJJmlKqxU7ZtGkjjjfS0rfCDzD0mdTJBjqkAdH%2Fr95qZvdyQWnK8ap5GybZrDWWvlsVLxpvZKKg7oxgBLOrzuqB0MmxPPxIp3uBJ6xeIyW7Kt1CzegmrUrjt%2BlbX2ATlM8iWQg%2F%2BFOdUJMjJnc7i%2FYw4VcfvbEbwzW672opf1hNTxagXKhOp1QNA8HfQ0HDRkBxhrwoqlsK03AZWLq23%2FyWbOmsslM%2FDgTFEsclF9NxCaiKcyRcInh3zyUbpfBI&X-Amz-Signature=e10a3f44ef6d8503107d84813516aac7fe557e6ddb48591ed4693282c75ab324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

