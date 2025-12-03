---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLNBK7N6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDcr9tm4OE4cNQ%2BGRpWCuy9L07wrj36iM9X1aBGME6TYAiEA0z8Y0FtiT2SUZBpXxsvb%2BgP9h9a4J0DF3Pqs%2FguQqUAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDA2I3aC3qO2HNORWhircA3FXlnioGDZ4cASbbHyc%2BW7Fs1P4CbQeWhrD874FllnmgfRlrXWHcgUhaus4XBqipEMiGWR2XbFUxlX8x7Y37mRnQFQG3ZdfkSkeX12d9eRhYKTKQpGkSNoi1k061VQDd7K01%2FP2%2FNAZU1YYKtDzjgGnEdSltaJowTy3vGFFWL6ZVa5Clh%2Bczjo7qnFuEWd2Dm50%2FY7Iyhe42oUJ%2FIXYS%2F7xLmySKfI1zl%2F6tAIc4fR6M%2F5s7YMfKSUIodVVo8RTedrcCcEvuLQ0vlzVAPx7H9%2B9gSvABToDyC8uTI3P9gcHukrkrMbM1ODeNM4A6ZlnqEDPwiY%2FshaKvE9SIxOUvkZfPWZGBztpzwyopZ775To2owz%2B6W%2F4dqWGulClFo7hVVzdm5ev4mEKwZaEr3RVnOf%2BD9Cp18Z%2F4GO%2BPUp2cGFfm2408SDSvvWb72K3xd8LNYyzyeklO8Pk%2BpuL6FgVnp8RZ41qZyDjkYozd%2BXgFBqoYzWn7GnINhYL9GLJmADzvDLgx4elwK3T%2FUMnSBsp1F3d1t1TGxgq2Jq4UkbZGUexIPBiGe8zyPG7OohJKhrdturvq05KBP9VpMaFCBAd1XRKBdhrBsrUpZL5UJf%2BDmNMOTxsmsqruxbAfclbMJeRwskGOqUBg3WjyTEMboOhxv34O6j0cCAiqy%2B9GzPdkYuDYZrdexNLsVuJ6ZiodYU%2FMAMwbJECtaJ0BnvZj3lQG%2FAzLTeYA7Nrlx446m9Vy%2F9WzZkE9INGilUCLEPI21xiWK9dJ7N9WfceA4JfY5%2BWREH%2BElXgd2%2BhH2yF5PmuYVAN%2BkIZr0wtVqf7ROmWvhxqM3Iaz9Jsnzg5gQIfcKRN9934XTVCtbwm6GhO&X-Amz-Signature=4e9d66043d8300d1129e23b5b2a06cd9e36117aec60e5e6462fea6622b4c8c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

