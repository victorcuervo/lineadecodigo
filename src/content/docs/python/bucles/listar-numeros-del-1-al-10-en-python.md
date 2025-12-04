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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3TFQE4I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCdaTBHa4B0kh6ANCEWjk4HbgTjbwE1PUclf%2B%2B40rqUxwIgeIglpyUOfWk1tkns9Xlt%2BdtmgXIlSS%2BTGmHsrfi2zlIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOj4WGneVRY5ZUNTBircA0bJAI01NbUnyrlTAo5kTwTYR8LZDRvBMQ6yjPLGbEr0SL7d87NiqBqgr%2Fx9OQc%2FOmaWjDjt4BwDqUCsLDqf6qxyKDnC3yLQ%2BuEo1U4upbo21aw9NPBeMjj%2F2S8tHjT6hgzuQVZ%2F6yZlpUvy2wk4buTkVlF1zkQMa6ZL84V4VQVnISu5Qfh8%2F2JhV05yreC6xHMBOuE5yHMhQvPWQAD53n3YIv%2B2Z62D%2FHYEmCeThCP5Hk9QKCVnXjYevxOfWSDPspy3%2FebKMMITzDXlb8WpgyjH66lGtRKlMHaPY2GYvcCcZntq%2F10tEMaX6PdiENhuZvrdcOl%2BOM%2FxdCyYEjZ%2B%2FdJ7UyefjVGOvyOeAlkpCMlS5aVs18mwFJUrvbAB6VmPs8%2FEGY2d01ZGrhqrWPucka34aOGzqM6s2384vaHMYEt0f%2FA%2Bf7eOMYDucXCMc61GsyVR%2Frsy6DS7iVtZUeWnbIuRRcWeQ2M5kDrTDEAL62c72fgzjzkOeXuxkemHZopopkd3QmhCm0f8A%2BE%2B5pyLlhVprvBlKF9ZLkJVF8pLYPRuDeHwIoNrRPb1WPdw1WpeGyX80ggdPLC80rba%2BUKbjFiZRvpj3xfbdIRD%2F6bonyaq6lEM%2FMCEnHDh5KEBMMCGxckGOqUBJyhRIh4m%2BkIK0MSyrqWLfWwXeg0yTuf4FeHoGEJRQIaOzBPl7PAeOjVmjCEccSZPA06g2DFdlsN1stPJlVdEQfQbUy3FYIF7hunAURnQThMiB9%2B%2F2gSm7kNzlnUfQmDoZp%2FRRm062VyEinqQXAzyaquT8ZqFea4bJjTX2TTKhY08MUdfX9%2B2xN7h4kY4JaL4uzTQx0JEWazipe6%2BKQ0szTY00GZH&X-Amz-Signature=ef4baffb84367debceaebb226c6a1b52fd779d15e14e73c00b1dafc57ce2ea06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

