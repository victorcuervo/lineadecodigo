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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3QKD3KZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdYu0Tohcyxi4gswxNrCEzihhqGAXpoBOGEuDYGriu0AiB7tPMfH5lAU6BSV3SAZneEKoLPgDGPXMdtE0sz6XpFvyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiLVhSwnHlgZKXaTTKtwD5dn5sAEFp6p8THH9Q58sGKBstYnHkS%2BK82GkDHJRcNs8Zw%2FcqbSBf9%2F95hyT5%2FxqicyRtWfWOI7LlBhpxgM%2BTzNmgWYpy3Sf9CmxXkD9yeFfsN%2FJU9NVpkv0PeEc1OZxgIdZKg0dWfLZFUEjflxkEvAtkAyUF6Q41MiziSG84NXVZc7vgsAkl7rX2n5hFNmcjqJYZvcHsc%2FQR%2FVzGAqbA4GUEDVnaTlJ5EsxkisXlS9eJoTO7VHXqM0F1spAsLtahgKdAXZhWod3%2B0KQZWkuGJ4zWQ06VkvCkMQV2dOI1Kioz9alQLmfYxX7FsmMDYz9dusHGC1oieXYjenkjeo6HlnmlAk5cqhIhY74ZpJ2%2FWVSK1C5n%2FFHOuiA5SUkZMv%2F%2Fq2Qig3f%2FM%2FeAkued1cKHEC0FNJba%2FGWamtNLyI0gja0cD1iQKBdA6%2FG4qsHOW4Z%2FpKausWA%2F6AAwU61qVQd9AeuEpZX1jk20%2FBJBNwP%2FqP78QEZ5pav%2Fvxo9tvjymvwYFCgcMrT60TE833CGueh8iVWIKfEH6TvYtAE78FyJOQdPIBMWcApL3dHVC7%2F94aml%2Fd5xY893dvtwM%2FbmTjqFf9p1lQvro19njX%2BkIQHFqvCvKq8xn2OfZ1XTHswpb7WyQY6pgHkmoQXRkgQUN2%2B5eAFWHKtms1HVH%2BC1noi330bfQF3Do9BcSsvmy6gr1KMHMKuPruHqnEjXKhqcDKznh%2F%2Fs0mWIsI%2BqsjbmvTxlfapt9UeV4%2BXHpjil9H4isF%2BUKTpRxBi99u3fKePZpBmO9k33YmyTxKsX8PkeOJsxXugChNzfvcamC1aFJxpTc0cgQsyC%2B71of4X5xvwNNKrcGp2xjTDiV%2F3ZiAI&X-Amz-Signature=c7284a658afccf2533f260a39b3ab1d416c22012a161d2a192abddecae2945d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

