---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVD7NHRV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCu%2BmOsHa0qtSJ%2FITmxJNBQuIAEbsfGUeAMD6321gMa8QIhAL9bzm40MozxaKa6otwgxpsBCVCM%2BMeSbM0ritLV9ZQPKv8DCDYQABoMNjM3NDIzMTgzODA1Igyt2D1Qt8DYy43YDN0q3AM9SIBYNexzgJ2O2Jp7E0ZU3DRQmyCfpG4YUBCg9P3TtBjvThKwJQdcjSBNunxcu34pJVuAu3igmoJ6g9GX1VHfFSsGKLIiDK%2FE6NYvBZcTgAMHqkwhl21X930kvflmqsGjBbFlOW4fBEo0cuECKxW3V5Ft8isFx7W%2F9G8fCe0I0FKAxHT1tvBOi4JEOi%2BwYwGQmpKrgHqyVYp8Gkaus9vzj1iRAkktWGJLPmbVb2xKLNBLmo%2BQ5csA9aTk5Gq8CMzX2httetcJtDT8GBz4IkRun5FikLVMcwcOLDZagDrFfPcA1JkPRj2BLb8522sCv18c7p89hOnOoM2%2BEk%2B7DU78PCMakEijWdyweMqbINUDdHZhS0bKFXnX0GZdDeoOgJHy%2F7DLI9GY3Rtiv0MGiameN%2BCSCOfzzcTs1F%2BHT8%2FVUBWIfqVuFZO9w69Bh5X1n27FWSHIPTj9J0R8Ka%2BJAa1QcRa9bnWwgzWz5qeJssRN5L4WRGLjgYTdttLH5LSGjsjCsQ%2FEM1jlIlkJUmt%2FTjXKC5sWlyXTxJayX9XNUaiWYSZU7Wn9o3xYaksrVA%2Fh5jeOShmnaO4tVBre%2BalTC6NCWQpZCMXvHxTjUKBp6grVDGlMLPGxyJbYEW2K%2FjDovcLJBjqkAeK7TZW9807U1hyU9HLDJ%2BX10rcqV7HIZlcBJkWoGp%2FGwOBnaTvKIxeFcMqBr4%2B81Hw8TNhMRIMI5TW8Jud3MoFz0szV1pxjMEb7eecW11frS34qaT6K8pnUWSkBSLqrpsPK9Q5n%2F2wILTypHx%2B%2Fjt%2B4n8AvCOc2PPirwA%2BMEk0HtLFVqTgd58k2BoF%2B53uhMgMIkHByBITt2Y5HwDNN5xy0pQ7t&X-Amz-Signature=5b6d9f1d02e0a8e9e296bc5770da6af070e7d733b99bfd1c3a2bc88acad73e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

