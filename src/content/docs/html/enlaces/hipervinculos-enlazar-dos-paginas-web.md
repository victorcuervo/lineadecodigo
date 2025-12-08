---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
slug: /html/hipervinculos-enlazar-dos-paginas-web/
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTJFC3MK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5rYrzF%2FaqjEgzGyKVjRfo0DLA%2BCErEN74yJST72uRnAiBqTa4y3v%2BU0ctYuUQkpXfK1AUWJP4w2BVhKZLjgGUdcCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhejXDx8qSZ7HA2zaKtwDv%2BtSlyoh9mX5HT1PObPKqWWEPz7VUL%2BUJ6egZ5jIBhIbr9G4xCWmIm23%2FlF6ZQnbx75ycUW2kuXcS0G9BKSznst%2BoOmk3a82RiX423T7Bgh8%2BDR15fNyzyNnDm2xGvsDI3bJmH5Mn8HVSfn9fJKA482aVTgClbpJUGPQSmW17cf2wMLJUEtz2KMp2p2o7JMID7w8JMH%2BSbB3i2JL4fAJPwxRvIECXsle83Q9ZE1Ou%2FmL%2BCJzheZ8dhdqhxpeVAR7eQOf4nLvGW5RPC4fnbA8HmeuMJo05RXt%2BSj5KjeqaGbI3Q1PusvDp3umBHt6ksLQL3ZkS1H6iPG3b9xiP1E4VW0hWEy1aB%2FYBIAfb9d9%2BLC%2FcIWLmNh57dGmOyqwZ4pnQxsJ1Skfqd3oxQDLeYng2xvj6Tgf%2B4qbSkm563xljdL7XsG69JhWbQKNE886vbt54cbrXbCjXl9tjRW5TaQHphy7nlqREiwNYZoFW3mZ%2BNw%2BDMCO0Vc5SeBZaVu67ga8m8vy1kUl5OlCMnKEjRayoS1uUbEkm0svTh8XNXN5ungoJNTbz5sl2wVv3U5EpAarVVE6m1C2ocmodH1twh37U3ynRzXQsgvjhge4zwcuuG2NtJSYg4TP8SUSzY4wxIDdyQY6pgFXzmUScoaVsB%2F5GiFAdVfN3xMtqZT4rKMzYhToiSsXXuXO41dk2D5N%2Bo3wPZDX6zPvA3lzZ2YF6Mnx8%2B%2BFEjtGgldt3YbQ922TLEmO3kgYvwB8W0Hkq3VbmyJFkzpW4C7WBRNnHc8JPNrrn2pi5dKLGVn0QiV6MlkUTedpNLAsz8VLhu4nJzznRIR1MlFWS36IMwd07eTXdJ4hn3qZTt4FM2pD9oow&X-Amz-Signature=ecb8bd10cdf5ee31621d32e2aa2cfd0d9f14d88a5b0c143ceb322d39dd8f9af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

