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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N7WVPMD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJhae6C7G037rK8gWrUdjCttkPZqfS6SAGD6vZSp%2FqjwIhAILJSODZ%2FEERVGjFqkanemHoyH2HmV%2FBtaGWBEn5Ive%2FKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNCPfOJZsaVhYLxDMq3AM0ttvtpR1%2BUrvVEEOEns6gJkR4mGW%2BF9wEAh7m%2BHP0MKlIFC9QW4ZjlYQilkw0vA%2BYoQ2IgcDgGumgjdIesLfVfRXN6X5aB1YrFKnqRI0ta%2Bhm73nxfNRjo8GOZSjDhh%2Fiur%2FQ%2Fgmbg5U74u0PoksW5ysar%2Biwn8zDQ4zXr7KAJBTnjiUf0wV%2FypMu%2FZIE9Mi4rnTfDouZme8tEGEdgX6ujQ8uXHUnpWjJA3JtnErikn28xL4MWgpPMgO1o4SlmI9Yf4C9iqUY8Bh6PWAHETRDN1oriBgtehqbGPfvfLv9ZB%2BDoCE%2Bu1LtBWV3k39Ao4iXkJWoRhqfQ5i9bYZXLihmom7PTsENYcpS8HIFM7xDqs9SP5UzwfuRteVyQadjrH2yFoqGWx7NeuDCPMDxdWgbSpRe4RcOMhANOmfIQwOFb12LivEw87ernP%2BOy%2FoiU431h7W1XT9zTV6G3dmsAgD%2BVfuEfhcXdgDkLFklaULuzHN5Koan1iElgAyRNXfEvX%2BIYCAy%2FfNrgyBV142YJDXPT95frMypwpNQPYPuyAB5oc5oBz5uOTmvmVjNNwJveJOuYruG00l2wvFO2ox33tVJbXH7mqNA64sAIOySWgHAOTbpS%2FPkVv2lFt7DJTDas9zJBjqkAU7VcQEhiB5hIxKF%2FMGUnohIolBUHuUFD%2FIan3m4y8bkXTPLupWgpIKD6Ebv%2FTc0WS2f8GyrH1irPeyuvVEcr7VOHgBg2wMLN%2BEjfiUf1IgeE6YSnPmktfCBru9r4%2BqV5ViibFGo%2BFWOdhRqNnKrEveTKWFGOoCh9M9V%2F4cPpVIEt1%2Fn4DZQA7nyPa9RGPF7MM0pIF0nW06PO8%2FgGEmcLd8dKBjp&X-Amz-Signature=e3927da36a48f815c8a343eab847e67498c4a7c79ed73da938ed71f77bb0ccef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

