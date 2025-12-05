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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CCCXTB3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs3MCq%2F6p5c8oagtUxtSs7vRNnAeMgGx15I30Yz9XtOAIgYxogaakwyvmVPok3HKYjbx5Mt0JHxNnLab4G9mlAAUcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLOqrQqikQEGNXpzAircA6qnRMS6q4X8dIiV%2FwI2gQM0USBORRqlbcDjr8bMIW0R7SZYW%2BT41%2BcTHhHl0KhEwaWH6HM%2B%2FS2js9ktB%2FGyMA45epuYuBh44Ow%2FlIHeyYVKleYHTA8da9L45YJHqnREiyUff8OBM7asfcQllBNI%2FyRh1yX3DmU1TpwmGisfSrooxcTsK6d2s6U7LM8fWaZ0bdOXOrp7PcsNNhyeiuLJ7myFL%2FDrGLZOLXNf771T5%2BRvvKaUWocTnKLjBnXt7mtlcdn7rPsvc0xIXHTmupRsCqe%2F%2BG1LbHkKNtsbc9d9nQrXKu5LcuIoKR%2FJVQ07wKn2IMC3D%2FPDDbfKM%2BClIEpFoLY1dA40NKZXYNAha71UTFXKzNwaJynIqjRGBFie43n5LvGVkEQ%2BoNMhgJWmqnVu2cwVB0tWBIjg%2F3wg15i0uPHyOzmxyn7d%2Fqj6iR28YfrKOXB%2BQapA%2FAqbS63WscLpEI7Dx0YY4xeT9IMuEtBgno36uHqXZCEyiaosQj9oGuwhDo%2BfkBdoBrasBv5a4ppuhvov8ZEFLRiVgrVxkEHnLOsF9FkAAhO8lj1UkVVef6m846nz44wjnRmV9O8N%2BUdvX7nk%2FusJ5WYnjNgx%2B4xTutRjLgwqVq8fx8il2iKZMI7YyskGOqUBJhgteRfu9iFfmoyvxImd2DPf7UDfIimcb3ql4gdsApi5qrK%2FmDinwRFx3fR825UM5cvWc3ncwZquqognV8j7yb07rWoI0Fq0X4dCxJcNUClPfeI2BZYahZRYMsSg7yXzjQ0XMCFPeVRQGvErvHPejsDntarPkNF2SaQDUaAGarBDtoHcZnFZcS%2BkAU0whT%2BV5HzyZMmkvy63nXLbVMLP7yzBTo%2FC&X-Amz-Signature=ccc9aa86ca64a9127d8375db701316cc630d6e2d471a778ae28dc4f1ea652dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

