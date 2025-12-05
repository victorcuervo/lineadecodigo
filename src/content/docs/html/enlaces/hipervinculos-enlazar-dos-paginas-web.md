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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7RDNFXB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTzmrz4A0u9PBm9cfU5QXpSbIbY%2FZXjSMZeXjpCAybNgIhALKFuosSjlUQaw4C0oRC3wiBYY3TmM5HABIyxXNi%2BpHyKv8DCGUQABoMNjM3NDIzMTgzODA1Igw%2FYxepZFkm0M%2FzBzMq3APQzd6guC8BfTtNIXm9eMWqKyXJsdWIVdwKPPyZzRaEvaKxrGim2bKL3awd0m6j2WfDBsjxojeKgD6xM1L7hGhfym%2F%2BZrotjwDetqw2kGHaMps4fh%2BQSeCM6XiwcChRuzUy3Mv7J7YbiTcUWJsL2vD16ygQ5tYfVluRgkBnWFsq6Hk0GAX8O8q9S33xgt4yQKGRi%2BKA8vE5pt7jt3pa%2F8w%2FZgsHxT8ZYP3m0mC8Rh3oduidfJ5MU72zC9KwWxFDR143%2FIX1oZ85OniucK%2FpV3orgYGlbi%2FFJr8hsBsLfeMyOeTmBG9cinCO%2FdGI34JwLJm4aGXx5Az8poi%2BorJH1Y%2Bygx8JnCKe8vrQBfNhnj5vusovB9L18PZKqtBLQ85Ph02IOSQll1HruWKb3kgR0VEUoPk1VY3FUZTRjAydzKwEEZps6bRiLFQxg8H4VRs0hWO%2Fp1%2FopXNsapEOyf2KSFZCehCcFNianppz6ulDoBc4OXIVD%2FYB5NcnIDLx7C%2B8pxunXaGBmDYvxS9C307KV9nhBfgpk0fbU%2FKPmSAF%2BYkEHqCNiUdXiwdnXvWtJ0lsFSlVNggoJj2TTkfwC%2FSutLscTIKi1a3TsQLn9pGLzKwl8KWob7xhe5LiC1JqszCx7szJBjqkAaTEIB2yU0xgEQFf3n6txVDVdrbfLOu3cxhM95OitOryVHKjjEsb0rwCAPSOw2QBvJEYOQfil9QK5AnRDIn596FFqHmcSsJ3CxOb0qR2wDbpP%2F9LGrhbQPReohMe8b6xHGXDBukZQV%2BjB54aErspbJiLo6vaB%2BKNBpfFhiDDshmE3K%2F075nrx7ac8zArOX28lyfbAFpiGAZNGUTobS35geGQRnHM&X-Amz-Signature=0bd899fde13d624b9e35d9bd54365e09a9577135de525822f51a1d013e407bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

