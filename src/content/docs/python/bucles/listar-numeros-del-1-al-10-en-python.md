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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT56YWVT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHuUVtyntbO8qFIKjjfUAj7S8IXdXeguoTZ6hIY8dXI7AiEAjkbSqa9r2Ps36INy5mYg2EWAZX0MPeqHwgHdwmvZsKoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDNtStLAOCCL69zW%2FcyrcA0QziN%2BLUJlH4qN7nmMhyZWIHwxyBOknbB9mp%2BGfJ1Favh4TX6yORqGcaFs3dZ3vJH4iYZMwWhePiXg7Ws2Wynj44gFrqLWWBfBeIzOdI3m5b0sYT7ZPik9iKgabD1KN2h1SNqJ1ZjVSw%2B4ry3lJhY0LjDfh3XY2it8fqoWQtnh2Uq%2BA%2F6yI0cU6VF4EgP0eiMBVix5QyiToH86KSfFyxjwssmOYTbb0Eu0Jxaa%2B9VAC5ix8wAkxqBYMJh2oVtwPcFs8wX2bgqQxjMHwd6ACYd8RkC7kU8ZFrc6n48kzwMx6rfv2nABehnlgqpgPsCqx8QPGJGBo3jzWKM9NtvZdg79St8578oZrDWjsHrFcd65H92p2d97H0Zi2gLt%2B%2FZA6nsWJFj1EtNf%2F%2FE86mQJj6D6JdNSC8k5BmnaqMsCD89T1gocCtRWVz3Oz0SyD2%2BuSTvVc82kCIBiBsmf3aRLDoUKpxSQiaCKjyV7wV8cJ6pIUEo9ekh%2B5rqTdYV4503sbWIYyywI26SRdV%2BE2DqzGEcDovGvrVrhHGLVqRPMwamL6PzkDjl3dHXVPfvf38x82MAL15g8hNuFK2R%2FZ6AfQCkcJ%2FGRQl1dHnD71GOLyFMDMRp5KpIsoufoIPdAaMIrLxMkGOqUBXpN3EXF1lc25eFspm%2B8b%2B%2F3Z03N1siXzqyLGwbAoytYISyOcDIunT%2Fg9PMUvt4cOj%2Fl536HUlZul7B%2FiLQaGEfofYQ65NvE%2FGsAe81Fvd7BVM1g2Hve18m3MfV%2F7A5UB1hFlXnsss1Eae3xQMGWe5XBt1GwyLwaiEQToMkN%2Bo2GeApoLWHSxVSWE4CYJAQfpRhgqTMq5%2Frw642o4VBreWX0IvyJs&X-Amz-Signature=2f2a14442c2fce654cf8cdca3e3f18c69c982af00fb606e30b23c5bab0cd65ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

