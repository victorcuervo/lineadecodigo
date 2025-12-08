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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIDYCRXY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsEQsWx4SYycfhp4LkTW8WhDepgl7B4vlHq0zIQ9El%2FAiEAiFuvaJb%2FKnuVn%2Bwu2QUvkMzGAS67AT%2F9dMK1dVxoZ2cqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEuAO%2Fyk2LprwWlKyrcA36YVcldAtai6woRWW5bqWGKtvhAeoi%2FaRI%2B200%2BsGijAu8K%2BNbchamkSK9%2Fcl3Tg8mCqywwGZQvk1yqJxqWgaI2aZnH96NnJ9OhuDVFGc6l1aAJ%2Bhr2vJ2wcErhRI24nqbJb%2BY2pKpEdO7nqy7K26GfJ45zPOfGmNO2%2BLMZjMxBYjMehZgKPbUkEbPcy%2FAkagRf18vvp2JpKWu%2B6CTYxSleKI0qx8wcGzHowRiJfN6Gj75rgCAR4kmG%2FiZQKFxXFo6RLPgydfW3yxgpueCOJdXh22BQUa0aXcnEHtok%2FzYYnoz6NbgYsuL9psYHEv1qqglGJgAVPA1zhkQmEd4juVP4lDMBxeFk%2FhbmgxLKa8ubox9aR4WiN3myVaFgBrJ9ZEUdnF1CjGUWokF9j4sdguZf8qYsgcbWdY5bMDQXjo44YbKMnVZMDsGGJGUTkSzlgfYlMV3Kbd2KZo68EwFudnkTnqEJyohIkIRdRpLIV%2BKgPAx43sp2FPmE0ad6DcXAzXAFt4fxClmsUIh4JPqh%2B5QzYKHWedMIiGrz0Sz7XkgOtSQBftaNZrfpus3YlDYNJInpnmvWIzUt82%2BGvPwMx%2Fu2Ggb66hevFbA6bmmlsi9DfkKeGWBYs%2BEoGxxRMMKh3ckGOqUBLNQnpIXZAWzE3AY5Vqy%2Fr%2F00ZKZsH64J7cABoq5tM0yiZ43wxmYhOhhbyW4iOqUIOCbj6dPr83yHRygQDa2QaB3XB6HnbUOkYWQ9ZuaKHwyWPVVvhYlXr2qt3FhwbdVMFrQ4AxoZtJLNwV0UmCHEDOHVAEHzmjVPdTYMaRk5XKiELsabx%2BmhQtskDAFYaQeoqepKH4bo34%2B1yAhvxa76bLCcMO1j&X-Amz-Signature=757a38224294c6acab3a280d27a1c55eb61b4f056aacc858100a9b5f6b4d8cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

