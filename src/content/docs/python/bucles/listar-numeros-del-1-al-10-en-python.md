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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T3UJT2P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdRYstVMw61%2Bs8xyEhu%2BFDlBZLQBRJWd77%2BMMMeaP15AiBo6XScTugIl8V%2Fd9A8icUguVBWmopuaYjQOZJ2ADSPECr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMjgtCutIRCCxSpw%2FFKtwDuUtuM%2B3MeWHTOjxLGfKnnDp9SArMTQX0TWLA5FWdoR0fUK4e980oEK5eOlWNTMEUXQi2ZSoK7flfkKFbqYSBbE8ET6Qhep%2FwE1PFJPVrescr1pXLANnMyMp93ko%2B6o5e2K8%2BZ7glmVldtSoyG7yziW3TehQ5h2t%2BiuoNYxJP6L%2FDZem8jrSQUmpXIjjIs%2Badv%2BgHdufRK8UUIHGMspiViBwN9TWhQ8c6xpm0c%2FOQ47O4y0%2FSGSNz6PiCpFlnl0TtIVKONcSgXlOUNzNiAUrGBgnbrBdKgM87BOzEc2jYVoruTsvULC2cg0R%2F%2BSgwkKNgROr%2FtljjIwvn7pGoCjLit1ziQG%2BxHX1RaK6irXuHop66Y%2BO%2BB8dPfzwVVX6A5um%2F3aRhCTKrX55kDJumaxfxB2i2KDLqYSMZ0r3o9uJ66wxcsL64WpEjHz2vQy3YnZXWGYs%2FGFcnJFD0Ih%2F%2FulVQYQcmV5nRiUbGAQYs8J8tKsLIqoxgyyIOshfXgDjXurNAdEGv3VUVlM%2B%2BdflV4pHXTIQaM83CrGfqrHvms1z4V%2Bf9XUZbjk%2Fd27AgEss%2B8JOlWMhRPofiBf%2BnQPrAtNKbb%2F0pll0JvxY1QtEyRTexaGuKkFQ3BClBfONjcekwv9DKyQY6pgHZIYcVcwPP88DmGEIzQ5LjVzSxJ%2BOnGtJpwhEcIOr%2FYsuVTR7FMbsvkqyL5S556n9N%2B7s9pQDJMITdvjmpNplGXlhwIbIqUF0JJ8vzG%2BRtp5sbsT%2FnfqVgvboC1e%2F2aO8DYSFlloIIfakbCSOrb7P4ebJy3CDOUD3wcnheZf9fvu%2F5UK2CP8o7zM%2Bd1z%2BUkSFyiiWgFWXfbnQ7XoAu2Geem8GgIer9&X-Amz-Signature=4a572ab96f557a69af8bd03de5cc1aea5076cd8f585e0a07261d57c065bd1a5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

