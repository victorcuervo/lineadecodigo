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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BR3PIRO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWm5Kp5b4NjwmMtY383WBEwUQF3%2Bu5hlODWpvObG3JmQIhAKy8G3K67ESiwug5bbduUVfr3QpHXhH3QRV47QV56kyKKv8DCHQQABoMNjM3NDIzMTgzODA1IgwNHn8GWDsrCp0er%2FUq3AMJSFKxSMeDWR4DAOF%2FbsDtZhAeyOZxcX3EbufXsk%2FixxV1SFcLS5vH6zzvu3H58BdfzsTfZ047g9lE0cYOf%2BNaaB5V9ARJSiJs2dbam71jWBfcUlB%2Bayu%2B4cuTd3%2F7pVLBSGRQnaTKmq2fEo2xpTDKDzjuEDEe3RMCNc8ZVvtAcf9pZjZyvzFfDx6TNgoE3vulplSxvE7634jYGlnjthKOHdzIPCl%2FB29KKTBogdBn0biFskKfdusekDcT6S90XFPkk7gTC1YZHw%2BeQIy%2BOCkEbO18kxK2IUy9sS69i7pwHl6YesCxwHZ1XjhL%2Bf3ZyNcbMcqP%2B9hKozFqojjuWHHRo5teS8BoDPqTUFJUSfJISoBgr45JZ1kavTrx%2FqGTJktAgoRxEVYOCk%2BhvjpsBWSBDwALxSPZmdKgJdCQ3vM%2FNQs13n7pufOR6HsHsYVo8Soim1V5NCZOLxQ0B5T8TY7JXT9q3SkOt9qk1BqXAqqlZkVrncP1E7muPJuzVwi%2FZtGQyOkEpjg0Aq5097zWM24ZNIXOQ%2F797ZyK8tCR9Qx86Qx329tBVzpYJ40p5t9c8Zs%2FcYL9pveWV43VVMKFpJlTskh807bMfLu0bEH80Pmbo63BsXuRjfHy8R7WrjCaidDJBjqkAaFfqU2lM%2BhN6Ethib26TQYbIvIQFusZJHlZ%2BzJ8hk1TYgKuDT9Mru2vFHNePuyfh1h3w5V6YObed8WTlxq0xVbN1mm3%2BPjmD8mmOxpyB3tgH%2Bv4bzyLBOpDqqiIGoNDw7zOELyuFaLxY4g0kYH7mHZZwR%2B2Tp%2BjTxKh0lcHb4SEic3uMrBaZ9ak%2F15UEQLCHZ%2FivNtSvm8g3ri8NAQGUS33fx3G&X-Amz-Signature=6df46e157218c5e38e62e3563cea414b2597e3d39beae743232a2bc54a0184af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

