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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCY6N3HC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd9ZGtOjslNRbJwFoYtzvDWkiTE3dJM%2BM2Cs0U5MyiIAIhANPoONEry2LcGXcjNa5lormduhkVqbUXLeMGXEJ%2B4kvGKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw76ZOAFjY3PXEKEkoq3AMK%2FBtHFD%2FQLWgBFqxosr9D9%2B%2BVzYh78%2BuxSy18PCVP1%2BsEiTACygpF%2BGTUvSPSTwB%2F7WG9kLtlINPTQ1jJQOInsVZrNinAlDN38B%2F9e6koljyqdHpSm%2FccNnTqAKz8PARmIHR4P%2F7eBWUPrGYFSYSaSwTX%2BJSgToWtZWBjpTM%2BxUghhlYqDq3FsZLNCSyYlAXZ2xJgzb2D8AGnH8W2J2w%2FW%2B9b8XUpz7%2BC8c8RNzvceLZTMjujsGV%2B7QkgSd%2Fw4Q77o2KvbA6Svnk%2BQW%2BXHvdrYMQ4aikV%2FyJJ7OK7m0JtIZ3Kvv0ur8IUbl47QcIdOR78iJ0nZGzWjrMtileIFybZ2ecBf5UTBbYucUWL8LPMyBBHJT6oc%2FPmZdZzSRlLHYwDum7hX3OfT0B5Fat0O4PYrsYra32ZN72V14MJdfFdmhEp3gBZAvASDT%2BG8ER63p1kilO1T10FXXC7%2Fih%2BM8lvp1%2F%2FE1%2BQyBBAw5UPIMDV%2FyXomf6kj1ArYItwleirSIKsE85CgW1QrIGxgiQOMr1wUX6ve3eDrnMp7CLNdlLv0nh0rXZjLYXXO3e0l2EGaKlJGnb4qH%2BwrAHoYP9BAUQ4ivCKSpmrYmiYEo61Bq6GY4dZclXeXyiacXfaEjDQnNTJBjqkAfltSfySvjlfDtHTUPlJik1Do7gF4HWl4E%2FIxYP7GT8xlHFAncDwZ6bQ1jev19kHfyhrCU6qxrBo9iN3ftJGaSNku6cRiVodDTZl5lbXEK0dp0F1TNj2yOGGCNmBVpmZ4dMhPbsb9hsRGPoqit90rAQTdidQgepdeZ31uQSrZSWGfKb7zNO6xkcHYXLwer0T1wrY3t4aLn2sRWb%2BaH03IgH5%2BOXl&X-Amz-Signature=c06d880eef84e39e77375ed568acc1723f3978782350af892174f8879bd7ee22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

