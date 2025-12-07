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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGDQ3GFF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKlt6RykLRC%2BklIFvcorOzsue37jPSIMXkepejTTXSOAiEA4iBPbaEEgOCA%2B8rmFr4QZPZaKAkf47Fs%2FAJIvv%2B4vvcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCK16ucyIAn8GKVAoSrcA3J7lqPkEuAFe4idRlgkELaQp2%2B3ufq5WKauwuhhJeGdH%2F29BAguQSOJoaaHWb%2BR%2BNNzWnYVugsbwQxZZlmlpL8Q8tKNekOjZRV%2B3UHBepSGif98xOfEnKZ0YBawVLiNTkhv7H%2FKC6c9Xb2kFIRKO4c797BjL0gP2SEqwxOfvYMIEHcMYkIsPkJt%2FEP8i0jQkmGn8Yldy2XwHXzGDcNGzGbI%2BZwxTIZbXp3SnGc6AuThQI3ClbPkqIJxhLQ5sfFtaExy49znFjNhw%2FWZjfQJ5ksQRb8ZRFCWb1bebRaroi3Bm5qZAVbHxfw93m9kcgmL%2FXb%2F1gWS%2BneVWQPI7Ah9TU%2B9iWAAfke7NeDPFvUNbY641OOxShZLs8Ck%2FBZ09KJDhzvjVhhhmppq83wcSAMIT8uyj%2Fg%2FK%2FLR%2F9lzDCMdayfv683OFAqmvafw%2BcsuO8%2B0A1pc5FlH81r8lcUCG2EPpgMqmrz2rom0YpNf%2FpGg2YR6I9PKJAJA4mL5ktYi0CmkoMDOU7WelmeyGAZQIt2kYoyCXRSSJ%2BhYo0RHAbIwp6936FN06RVrWPPdRy5G30kSioDdhp0ECunL8%2B9rr6EJRsEK%2FXbznI6ez3cdM%2BJHaMJ%2B1fl8n2tkgfs9rTJXMKCa1ckGOqUBx2cC0kwWSa%2BkXW8xF%2F%2FSuTS6Wgtbsut1osGIaoLd%2BqDbKtAkGNJPtYw8GIu4ZrPp3jFQ%2BYbunvhI2VqkIiBIrr%2FpG4O9Yn76rhBxTbf9I3kPR%2FO%2BnkCIE2UwnAQWgcQA0%2BPx7GL5C2F91UCnYNsygfl9uYrhWWeZ%2BT7I1UTVcWcjTDcWwr%2BoivlQLRlUIRkz4xxQcAffqrqqDbtpMhVbfjwaMX2h&X-Amz-Signature=eb72fd7503943fa7a075bae88bb085a338f4a12618ac1e547df58f5a3e939a39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

