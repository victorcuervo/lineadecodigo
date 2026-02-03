---
title: "Cadenas multi-línea con Python"
description: "El uso del símbolo  al final de las cadenas nos permitirá tener cadenas multi-línea con Python mejorando la legibilidad del código fuente y programas."
date: 2017-06-13
updatedDate: 2026-01-14
tags: ["print","cadena","variables"]
slug: python/cadenas/cadenas-multi-linea-con-python
author: victor_cuervo
type: doc
id: 9ea18a3e-4e8c-4cd4-ac30-2d72d3880436
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/basicos/cadenas_multilinea.py
---

Cuando estamos trabajando con [Python](http://www.manualweb.net/python/) y manejamos cadenas de texto muy grandes será conveniente conocer cómo manejar cadenas multi-línea con [Python](http://www.manualweb.net/python/).


Todo parte de cuando tenemos una cadena de texto muy larga a manejar:


> En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.


Y la debamos de codificar dentro de nuestro código fuente.


## Cadena larga en una sola línea


La primera opción puede ser directamente:


```python
texto = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor."
```


Si bien va a ser poco manejable dentro de nuestro editor y tendrá poca legibilidad.


## Usando el símbolo barra invertida


Es por ello que [Python](http://www.manualweb.net/python/) nos permite tener cadenas multi-línea. Para ello simplemente tendremos que utilizar el símbolo `\` para separar cada una de las líneas:


```python
texto = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, " \
        "no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, " \
        "adarga antigua, rocín flaco y galgo corredor."
```


Así nuestra frase dentro de un programa en [Python](http://www.manualweb.net/python/) quedará de la siguiente forma:


```python
texto = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, " \
        "no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, " \
        "adarga antigua, rocín flaco y galgo corredor."
print(texto)
```


Seguro que a partir de ahora utilizas más las cadenas multi-línea con [Python](http://www.manualweb.net/python/) para mejorar la legibilidad de tus programas.

