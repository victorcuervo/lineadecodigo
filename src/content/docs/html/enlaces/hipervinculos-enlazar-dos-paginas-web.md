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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WOYR2PK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbap03ihliPXA1by21yXdGF0GHBsj42L0GoVQbPKIbRAiAFCfeXD0qoEc1pCGsKrW55ctR7q4A4%2FqFviYdXiODDKSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMR53Ch9RBxoDpVEcdKtwD6pd%2BURVOX2UXjeNF%2FupA60fRB0TdLg8JS4QXelU%2FSFDt5ofTht3LGeG%2F7T%2FDxr%2F2T%2ByUe%2B4cgWyXav4n7ZIpIYl4%2BEwI1zw6ajUkl4owoMvslfEFLDf1WdmUjJHrq1yD1rIGJldPs7RG%2B9JCLNBvE%2Bri%2FXOUh5LSuZiW13J2pNR8lJMe3P5oG1PA68tH560SMPoGfXo4yAQ2RW9se3hhLQNSQuCBGzKiNPPCkUV8jRpR8xrooEQnVSIqALS04694YQalAk%2FZ8wFPzXBzGJ4XNMRPCPLEQW4zNv2sTKrLP%2F%2FiCrDK0JzVq63nWv1U9CpQJg5T9%2FnzX4K9oQvu%2FlDUEpzs6uwklsyaMOyLAUWWVBmuBAK4iSuPGRGpaDdiYylFDCCKppV2T1y50sJl%2BMBt8Svgx%2B8Y4sWJobd8rxdXDYtlpmLjrzXhZcJcHzRJzQ3rkflVmU71sX7J6wizlMpwk3GaYczAXZPmHHH6T8Uf0vz4chKobGENzuoRG5JHrrUXwUfkGzjL%2BHDmkJZbiDFsQ9P6L4Ztt0g09IY8wz%2Fqo%2F%2FT%2ByphyjUL8ANVX7tVIfIdlJ8frbwbrn%2FeWk9dSBM8%2FlyWS9GSGIdUfohc5VIkrvUxB5vuv2WPXNCBj7ww9abQyQY6pgF0JhIXjqOLCghpe8nEPgemFZp65fqNrr1WpjqAOd4Tonw0a%2BnEGvrlS100NNuIwMdY82LfgXmDYeQ91YEixGKTbC1JZaGbcHUE6rXBJNGmTV9xFd%2BM%2FEdZf4NmgdLdPwyLmOfwgqWZyO7Yu1g74LYy2ytVABgRx3QdlCN6Q5%2FrwM9a6X3OyuN3fC9B7aXycl2C%2FcpTQ3Qq6fWWln1A8QllFa7rBjJM&X-Amz-Signature=5d424482aa03240faf9950d149c9eb40d202bb2580ca76a6cf4c6b0ee5997aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

