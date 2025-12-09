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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R23U2HMA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf%2Bqc8YoJreJ6WGUORk4rFd9cV3zXYhY%2BlPnimpJ7n5AIhAJY10x1%2Fs3oHeHF6kJR6NI1%2BcLPc36gFajAsXLmWLVu6KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoUNr%2BGIpwZQdm%2Bucq3AOMcPYi60l3aUUvZEysexrqpuZAib3tb5fGDCXpzvpEW3oGB8%2Fm8uE7hUd24EQ74j5HpANvSrVUFBQXxobyi4zpnZDDeMqUSRL7wc72krwJ5FlfRvIa91azE1CYWlGLhSbnOKmm9%2BgUhudX6LTmEH%2FFgCe%2Fk8bVr%2BLBOnKmk7g2ZAROHuS1jrBSq1kCoCrXBDr1Vzuuh4o9GXPRwQtDM4lDRV4bk4jZ9gO3hHjntM8DBHWIlN0J4tdGFSHU0M4j7S8hLKE%2FDD1Wme2PfSkEMyP9K5WfbHVFtRQUpcnoWAms515ehKsHLYVlUJ2JHHAChpBbG94ATDaS11x7gJOQsZzNEZeuXntufqvR7MYpsumT8JhOvgW9sUfgYRBamF5HarCk2l%2FI6xzgScF28MPFxfdqWavnQ2HDeYZSXk1GJWOZ7oBej9v%2F5ZRKLfBORYcY1TBrMedkyKBlauMc7ZmTl0ZxQJn5jPbKWsmFR7DN9m5NGEuXSisDdLyVqMmuJ3jgLGb03n98JOVy5gYXJxyMv7suDKxtFOEeRazU1rMBjdqiTlJDmeBpfHRHkQcfrhYUd6j9HBbeoaj748barfn6pz3r9Et04gV985P8Vgts0xTldjCgHb3ADFT6GDY0lTDgxN%2FJBjqkAfsFGDwpyCgorh%2BKF%2Fhb84FjAR1JM%2FNKZgN1WK9lH1MZpPR2Wtikd5MP4Ab6Prejue2fpmxf7%2FnDh4R8ERYtI1PujQyQm4XUWievqXFbQhir4%2FIpwVVPsC8ZUkTqAmDoh22OB2ADfbz9vYCz%2BfIQgdbBKVwmsJEMWn9nTTS2lAv4ZPwXrVmH9W3Pw9gQhgNYK%2BEuUrd8q3CPr4Q%2FVREPxMu12l79&X-Amz-Signature=0bf1907b087ef62119a8d417afc0a065c29435bc04242308917c1d172eceec6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

