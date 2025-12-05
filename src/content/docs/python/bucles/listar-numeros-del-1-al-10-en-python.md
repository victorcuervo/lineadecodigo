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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ6PA4W5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdumiJmtAX0rTCb6Sd2f%2Fki6M5OVey792AAyWQbk5C0QIhAPwHNXGUyyJV0EYfwxVSq4xS4%2BElCedhkbdGDENMeph7Kv8DCGEQABoMNjM3NDIzMTgzODA1IgwEiHFnd%2BWeIz%2FryScq3ANuam2mJDJ8bP90b26KEylBIO%2FAgmpmRYcFgbY9vE%2BD6mMDMk9uRGCMJaHmpi%2B5LGd6lzqzp648nk5KUk4mXNib3iZsARiS1Mc3J%2BZKXq2W2Tj76y3R82Q0WiXSJyzUmk11FAqxgF%2FUfS7BqX7NFDRH3UTRMcrcoZlo%2Bqe5wlY39mQ%2BMQf%2FPdkrKtM%2BFxGTxhkaHBSl3pLepi2A71fgsTGAEU%2FzOIvPUDeRkI0sRfF16V3l07SY%2FSW5%2FjPiaEIFclMt%2BPMGlTreeBieYG52VJ2NgnYYRJ8%2FxDCe5HymMm2742Okhjf9Deyc4vDE%2BfSWF31e3%2BM9OVhqibhhi%2BCl6Ug368buPGTKfZr1nOuTxVp2QcZHIFLlwcSTBUpGwMMi1MNDNGYf1G5g4Jz%2B8rZyn1AMQJHK5zfb5k6OpwsZY3EaoGoxCbrmFtPiyPAAktVTPvCIPwCSVMfJgFdC%2BjPIqpIz5hGqowr9V5or1zl6rrVCj7kxIFu24E%2FHG3T5FsQ5PSiHWxxZXvMkastF5IyFP1wPMWbrz3TJWRErAWyhtfJeekBjqch6l8gpkXVRUJpdFstn1neuVpZC0zJIKxoBjhtTQuO8MfHJvVu5x4D9ll0hVgqh%2Fse%2FC1Lx6PfSEDCA%2BcvJBjqkARJxLVf3E2G%2B5E6K9B4Veh2TeGGmg8MznTDvB1ZYx%2F93NdKCDYkzezjKYQtiZHE8KpPER5cE1e2RKfzC8m3ZhDorizZOR29tpIqZcfha98P1JbUPIKs855M1g3p8iwkB9sVVzcZTPwE%2FSHv4tgKrZb7kAIv7A9nF9eWxL1s9EbuUOxg3e%2Be4TA5HLTs%2B12ndcnz6n0x1y7QrunwSewZGX7ciOtqh&X-Amz-Signature=1eb38123042cba07c4f090b2e064be7b10dad0a37be8d2272b51551e291c3c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

