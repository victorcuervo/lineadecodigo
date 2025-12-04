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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MZAFESK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD6pJgTu8rMCz5N%2Ferg7J8eZqTCGllGR0HdUC5agSfaDAIhANDUTXWYfdYkZbVxwZrIAnanplRjx%2F6bqech%2BkL0vZOzKv8DCDsQABoMNjM3NDIzMTgzODA1Igwb5TWKc2ypZf4PpPMq3AMBRxet4QZPlsIpqxUD%2Fr8sGWoKPIQdYbUJPrYTk5xj0gJothco%2FGIb0YMZ06CCSPZrGtWK59yTa3yMmcJwEU6posGiJqYcEDvTs9ZcJAEpTE21sIbnWAi8qv7KVh0RuZgmEPzBdqUh%2BFsHekk9LDLJWPGFi5lOOC6CWjbYWi9XAx4jIR0LPJF7Yrtr9dMn3NvPkX49ZRg3s0PHKuqFzzPZogYcy8Jltlgplnjmu5qGW%2BTwWZ55imAMU2CNlCBcU8nAea2EgWbk2XB43GvJnVtWM%2BK7D2MF0kiaA7AFggyezH4xcGXP7toj5XnW57NKLo80b2ixPWSXM1wS2MhyT4x3i4STkgcxwWWU6dCpHuYQb9x3aE4Iur1WwPWDwefO1b6mIG5L2uR7Gr5Bo6gZnHokw7XRkW50LhM7xw2wj84B8Bbvgj3POkNX1lAlzU1eXu4JNXwo987hpGZuX4mjxgch2ywSa8t5Aqi%2BZWN%2BgqaS4kR07SqgIbAXkh6vMnHa3OfLMhNUkFmwwil1S3scRRM8ZqgZegD%2FfGBOAkUYg26dn86EhkO%2Bs%2BraFU45HxMwAslAdeAaFqU4zo%2BibzLk3Ef2KE0OfBR20%2BPZbGCe4XDkj7vv%2FW%2FNQ7s80I2MHTDh1MPJBjqkAfikeF4xio6Y8AbGc91sfCSG6QSjJIN2Qgo16svIBTk6hXWpE%2F2U4yno4fa3A%2BXR0VFX5yP4dIT9SRpKhZAy%2FBMlY0C35DGtJCVYWO%2FWOqbVSod6kNabsL53AfZTFa2tR6qtkUdvOTsKy89Ku0hXx0sYfaPZwemWGRaN9dUT2GyMrrv5atnWELpbtojoFKUpifBlsDYw3R9CvJgB5r0R9cE6F6lr&X-Amz-Signature=0e006640bf2a08e063012d9816b5a422e973347fd75a286c4e1e4fa03b4173ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

