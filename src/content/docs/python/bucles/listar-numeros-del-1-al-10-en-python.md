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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S45QRL7P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmVcp2S8b4UEO2Hzi9OpC%2BbTqLTCg2fw2kn91IqaOktgIgM9d0WAOcSixdjiA8F4acKA0MQv8FrmZMss5mSckIYtsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDH6Y%2Fbc%2BlwB6VqvfSircAzC9Hw1rUJ63u9dTOMTSrKIvsF%2FJXcF61djJH33fzXtrOJpdZoA9rWtt%2Flj4%2BtzR5yr9VPQ28S0FUo96syeh3b6uJ8EA%2BrvaEbMmJcH32oGB0WpqZc3DwHUqRTJk1gd7pyYadfkPsXBQKQY%2F8CHP%2BFNEbDsmcrX839S7CKOHXM%2BDr%2FABfxoDhon5SuxA%2Be2CbPIxwj4%2Fv9s8PJ701Rp45C5x2Gxs6K%2Bdaw4yEho6u1Z78h3hQCH%2Bt%2FQq40otBzPW30ElPXDnGb6o2t28HhE6xaz42o7aKTmKD5DQ6Hl0dTyn8L5FOgFNKQrNWDV5ox0rJBqmWnw9GWTenD81R70hA6Mbz4oS9VMkkw%2FSzZrcP1CN5WR2Qmd4MhFzO7vGuD%2BRIgtlcc%2FidYg6M9%2F6egJ6Yf2BWeXd0sbTik4uvkPffvWnOcz9gsMD0jG4GCQa%2BwASDU2orzfPshbrEsOoeKKHjM%2Fu9V2MYpMmRqF17MI1NEzbLvrNkDAKPkPWfssrE2%2FiXnsQm5LXvTaHxX6Gfi64tiOreCTQR1R1G1zXwGQna7qxnplpfJT6LaUUR6WGaO2bhWVov5u1Pnr5X2ckXHDsFffeh1sKeWOnu9hu%2Bjp7JloNne94libu5p08VNN6MPePzckGOqUBUgJXLB34alxHQhkRX%2BlycnUEcr2UHi532m62g7KM3FfjjVhdGjRkgoKjq8wVU7oJsmGDudJ5BcDsiuJfTfuuPHTjc%2F1wf17viiShR15jpXeFmFWxX2q6Ay8L8KGL9zvnZ5w43ZvGfTncc%2BBAEbGGZDBO7%2BA3HSJtnGoO%2FBsKAr6GMVR64CoOs3kKUWEZvu1H7%2Fipab8fV75l114d0I9%2Br7Bi5VAq&X-Amz-Signature=325b59ee8f4e8abe26f753a6d8fdbe91c31cc824806ed5bf967fdea8a3b02578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

