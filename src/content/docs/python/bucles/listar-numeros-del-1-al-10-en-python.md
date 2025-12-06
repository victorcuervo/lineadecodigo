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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBF5VXCJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4%2FPj8%2BRDAXe3DJLPR8Y7zGlEWVb2dL6LhVoJ%2B2z7QXAiEAupTnQYgDkV2UL11XEvIHpoHeXf7HZexS803Wj%2FB8Taoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKMSOq%2BAhGHEpzIdxircA6B%2FW6H%2BPmlAnmX5hNL6IoBSkshW0eITM1tWx7t7J3XJ1HfZm%2Box44DoAx7Vwp7awJTrn8z5t413SBm2Hfogp7yUFMJxQrRmByCiS7pXl36lnuaWKRTvoJnXlVRYRINBQXIFWnT4Myy%2FXw7rFOL9Q%2FIvIwuciBPQG8Ar72nIroQ95xWErLngpgKDg8W7BgpqtB5b1G7sw2y%2FaH1wznRZtB7iFJ4XO6VU9Uud7DnlkLnRG3liuh27%2BtdE0Sq1Lp45JI62ZzElsJWo6DUsFgl80cCi5o5RFBYi7oHo9UeGvN3aoi8ySW8BjplQAjjMG1e5%2FuNUeg2%2FR090RzUIHF90MqxSKT0W8JlT7bvdrlxGunDHq4C2%2FSU2%2BdMiTb0vzMzTo0XPVZm9dbL1EDyut8o%2B75r6DcdkrwyAHRGcWU9B5kcCT6SLnlFsCEmUST11lFmfWyefYlxLxf7%2FRuGJ%2FpFV37P1WTErwhfnq%2FOqMroBIH%2FXiq6PnxhU24HClvZsPwfG6NDV9hoeFMb0kUqFuepeG%2BF936nzQCVxDLLpnViUY0PUxwgALi5EZLIjGrzb8l6%2FPGurr3g2ylLLk0Q2uqOfJbzzvwgYROL67lMR7eW7hEeE7LhRdB2QHUflYPpNMMbT0skGOqUBrTN%2B69QPMf3wjAkApqpX7yNbrQR1or0OJ3%2BrnKBK90hcDSbfuE8s1rSCXsIn75SiH3mUNCJ1lZEyxAJd7vpYUj5B10NcnL8SVxugDowoGjta0D%2FouCsV7LMHAkU9FFjQrNqy9rW03nZNjePuri8gTNt2wmpsc5tAKBenTsppjP8MLRZ8yrfC4NhU4MOwXHfb7ANm6wXxSZ%2F3lvIa8UlKS8Z8kCeb&X-Amz-Signature=160030a3d24ab08a8115d7d14f333d6e8a27034fa598824006b28fa0e8b8e69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

