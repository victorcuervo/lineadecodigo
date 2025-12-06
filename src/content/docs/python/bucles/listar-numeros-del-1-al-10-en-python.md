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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJA7CDQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxmkfTOjPFcE%2FErnoG%2FR53jCXL7yQiONHmEBx7To1PfAiEA8%2B1rbhcNU9DpQslsPWO0w5DY5PwkYsJjtuV8NNjOJP4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO9bcF98GMSh7uEoGircA6MBOoMmhA4jVP0%2BPpz6znCOzRjZShQj1yxF0EMztp%2FQo0Z46LyJszSTFGBxrmyt5XTRe7MxhYBIwRYuGD%2BfeqrWWixYqUgnFdZP18NTlkEqPrWJbP8VyY0BHZb0Pm3vhCNZB%2BTmuDx05ZN4rmHbsqvACAn16GxIu3TH%2FWOwlphZOhBGcM6JCgJEV8DHp0TfZGVEWovSNysxzmj0dye2bwaG8%2B%2BP2SwSigYaaXJ%2B2dT%2BAVO%2BD83twnr2tulObxEgaCK1FgMltlqgdTi0hTH5J0D362FJahBGs7tz%2FmtCHFqX%2FftBISTsJQDMqjFOkpHNrlQwBRb2jpof%2FmftbAJw2gbAWSb5I1%2BpUxwhSQlswD4V4OYvL4pl1jw7Upj9ADaxy86G0vCXKEtfZgQMdpb2wszEjdq%2BHWKpfFTv7jEVKm2sCAidXoV8KPm2r6uveJXD%2FhAHf8Z%2BpFDxwbVFP6lNoLvjNpR1abkLQ2vGxvlqm3Im2%2Fi%2Fmh8Pmg0sDcDT%2FsK5MGuGanNF8QDxlwVhbIzvMynzvwnPZc%2B32IaDL0dJlHOmlOksQUETleyN18I2VRMR6JlWJsDUQYhstzW6h87g0%2B%2F9LfMSXOBtZQ0bQk39RW27a%2BKgBzZFaCKISv2dMPrqz8kGOqUBWoF%2Fg485rPWPcpcCn1o8o8Q6oVairE3pej1UIWP1K8uA456LKzPHbfFv%2FBjbKzy1ZmoEPVTZhqd9%2Bq9waYaspAcOGn0j3gmpUwwCEij71%2B2drF4dKlWF%2BBc9PaFjjQb03my6k%2BC92qBeyI9%2Bd%2BaGcXx7IYZbR9og92E%2BNSEURMlrazEbiYshYjNwX%2FSn5ran5L4f%2FDEgoWDtKiJAd4FmZOuD2haF&X-Amz-Signature=e08b5a531795a59b81989e29be121e37e70f0d2156dcf96a2058df385b56c69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

