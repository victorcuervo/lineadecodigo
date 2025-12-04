---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Uno de los principios sobre los que se sustenta la WWW es el enlazado de documentos. Así que vamos a aprender a enlazar dos páginas web. Esto se basa en el concepto de Hipertexto, que viene a decir algo así como presentar documentos que puedan bifurcarse o ejecutarse cuando sea solicitado. Esta definición se data en 1963 por **el sociólogo Theodore Holm Nelson**, mucho antes de que naciese la WWW.


Una de las formas del hipertexto son los _hipervínculos_ o _hiperenlaces_ o enlaces (forma vulgar más conocida de las tres).


Así que si queremos hacer páginas web utilizando [HTML](https://www.manualweb.net/html), lo primero que tenemos que aprender, o una de las primeras cosas, es [cómo hacer enlaces](https://lineadecodigo.com/tag/html-enlaces/).


Para ello nos tenemos que apoyar en [el elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que viene del ingles _"anchor"_ (ancla) y que es uno de los elementos base del lenguaje [HTML](http://www.manualweb.net/html).


### Atributos del elemento a para enlazar dos páginas web


Los atributos [del elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que tenemos que conocer para generar los enlaces son los siguientes:

- [`href`](https://w3api.com/HTML/a/href/), donde habrá que especificar la página (o recurso) de destino. Este podrá ser con la dirección absoluta o relativa al enlace que queremos poner.
- [`target`](https://w3api.com/HTML/a/target/), donde indicaremos el frame destino de la página. Si queremos que el enlace se abra sobre la misma página, lo dejamos vacío.
- [`title`](https://w3api.com/HTML/title/), título del enlace. Será útil para que se interprete por los clientes qué significa el enlace que se muestra. Suele ser útil en temas de SEO.
- [`type`](https://w3api.com/HTML/a/type/), que especifica el tipo MIME del recurso enlazado, es decir, si es una página, si es una image, un archivo de vídeo,…, ayudando al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) a determinar cómo manejar el contenido al que se está enlazando. Este atributo es especialmente útil cuando se enlaza a recursos que no son páginas web estándar.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBBJNBOL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCJZb4qSGo8LNwXR3Pyg4phAABy5D84zaKJGYiCd7STbgIhAK38d7yRlfFx%2FkRedwqqksiQeb1k97EvzzkdaNOp%2Fd8vKv8DCEMQABoMNjM3NDIzMTgzODA1IgyU6R7hw38PJuBsqNAq3AON6oLAP3VIeGRwacm35%2BqJ9YScZDbiGcgqJsPGQo48McID1HV%2BoiW5JkjJycJYjdMCARK6iBrIxzFAXNlf557Fj9zG20OyDc%2F7W%2BjTpUdMY%2F8pyZ%2Fl7OmbLMay6P7dVxAOBiEb%2Bf4lrU5DDCKklZuU6O8bdEgROJZY82Yy0DCUWxse1lFkBUqmhhbyq3j5R7X9d5C%2FItUHWXb%2FjFlm517kLvY318qgzkLPM4Zl5Vvc9PeJMGvI69JVcV9DCd7IjiGSqf0ZFxczFivXjEFulDgMpwIE3r%2FFaDyS%2BHirxjp7GDvP3Cgh5XVcoY1UIgLHc2xen2Q6uJP%2FCz8e5mdjj%2BudcMluMvibaJOa41bh%2B2rqxUO%2FW59hD%2BLqpUFYWgtcGNXu8BFGIwXkFrBMXYBohLJoSP4nBd9yaMtf91OQ16EATcT034Y9jK8dzcH19UK7yg%2FXXzLEBv%2B%2FbZPIUMivtNVrEGDKcdRZ2jhKtk49ySsF5reJyo0yzBshVz1iNLIBwUn81ILIcYBtpIJ7OX18nfO1Ys3nD%2FyTMadB9BJHaKMbvbUv7g7bfCqoIg0iq3aCg%2B6pRt7XKYXULxscxijmd2viO8oOR%2BSTSAHQNs8H4o%2FK%2BgwB86KQYIdd2%2FDi5jCCqsXJBjqkARzEZrPQ5YD8Wd5RVXbeJlJoyeI%2Ft%2FefHq23757%2BU5vBCPj9wA7%2BNDWs7nnWBhtafVwt10t%2FbzWXZ5bU6%2FeP4aZ60xu8mmxz4bJFeTrTOGAawrlLqbQqYmyz8IgXAhYCiRaZo3t2KV6GT%2FM6iyM8Qeb4X%2FGs2uUEhYU7nUYy91D0V%2BjaQ%2FmBwOt3JO6ikHEk9DuT6qNIN%2B4J2uvtOAWw7jgM%2B1yv&X-Amz-Signature=ae2963f796f2ec10574524183c7f9fc58367f066608571a11bc677f3503f863a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

