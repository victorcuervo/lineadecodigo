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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO6KUP43%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYkvxpAf%2B%2BivzGls8Ve9NjE6O0syH1F%2Fu8SIBr6s5zbAiBJuM5uafKIMoDO2GnJ%2BD6rzxz0kqcyFU4QbL9n6ZCSeyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaBWkYgoLuCsaGVPpKtwDTweHfseybZr9FJ1R0R2SrYqM%2FLMP0sw75huQRaNp8KOeyPQcqaHEKKecUGZu%2BasEH4Udbhh5drGaq0Uyvug94Am%2BWduqkrWHfJI9UhSPrlU%2F9QMRlFjvwACSjLzXO3Q5hsCa0htYAAazMZdFgnbX4f76GLvqHAWqV9ojMvpr6hl8KvpTcahDXE3dE3JJHRWP8jS45t1iLjDZ1gEwL9Z6AgBYeGgIVgRWWtpnc8b1oRY%2BbLWVq2J6E%2B0MkniaePMzsapWMlFVnPUdz%2B1QU8LK0RnUr1CoVFZRImYanZFVWZKEiyiA1Zq7OyQIOSBcrKluJq%2BDAza%2BCBkEWqD0N9uPmmIC3Iq1DN%2FBtPiVgoxbz2K6wzY4aCG5musmkHAFWbENKb8G%2B28slEpMrW2gHVMsmxfy7j897E4Qi%2BsixxQzc7xKcjksPlXWJHvYajjHEvfj9SqWMRqsnY9wY2QEdZXCvPc2jVhMdvi%2BLlQQTv1DVVwGrQ7YyncGJUThbNzmCOuU%2BnKmeU8mHmWpqIg9Yy975cqw6AVUDgo41MdoneMXMmknlUia8HVTY017MNkjsWqZeUGiQPZR1jjyp502qBvqP0vfvAgLP5h1WD4uhNnAm2JAkndKKjGF%2Bil91oQw%2F7PZyQY6pgHY7LH0a8U2gwQiaTKtmz4A2SMCPO52GL9VQ9AI2roarljUhBm1nmP%2BDE0NwnlcypyecFIaq4XqsgmB3a%2BSLiI5OT4%2BwhbyNSmZjSzbYdWvvBc7gYWwkyGjO%2FPVyiA%2F9NhXBrQeKPdQ%2ByszJCDufw5XHm7PCiZzn5AnYaEZMuLkK%2FFGX78XlpC61pQUEdpqMDKaFMiJQlYlepNGdILz7bSXw0DwnVak&X-Amz-Signature=586d37031a4de4093436dfe44271f56a021fe4006b5d04ced9c671cf056b4e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

