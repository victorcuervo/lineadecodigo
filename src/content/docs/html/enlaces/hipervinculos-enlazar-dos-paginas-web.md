---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2FJEOUJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T184020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZniphCln6bAgv%2F%2Fj23hJvKZqX58hdUhgPDoKGD9DsFAiAOWg9Bfqcsr54GzgqMYkNuO3Egz6oIwc5fh3OV5x8dmSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKmF207b8x2UUce1dKtwDqYv0%2FADZ9Sv2UdTQGpzLVloFiEVC1fCZFchRBoixGp2bKtxoRS4fBAbbv6rmrpJaM0z1QWqHHg07adu6AfcucsK9XmNT2tMRQ0uHMbu%2FoAlZy1QWPWCqPlyE%2BCiV7%2BxfUJ0W%2BE6G76XJQ0wyo5IS5jCbwyOjtQCxGZaUsY9sw5FtijiommO0CcQdvytAtC61Vgc9wfdOX5bzbXkTJwgDDNwdcufg%2BAD18o5LXiVRXcLDW5q2vsgo273ciE5ykandekZ6hPM7gP1qS6iZXq9GOsDS0kpMTWL3I1UtIFRtccSotc81OUE6Ur0E%2B%2BVAshfHMFqokwtRouH0TtcllcJzJDHI6N1DE10JpcTH1c1%2F0Kmvk4FXNZKARiOEa8qh1lBVWUgxPYbJmkUBfSc5%2FSnyJDbACKo%2B1V%2F%2Bt07SiWHArU4DBwdmn%2BoGdFMYRbdI6XowZlVoelvICLSTEmEAJPioeLS5CW2v%2FOd7fC0JHOZX9n2KH6y90fT6RE8qCWXA7DrqXoyNCPJZVW8CBqzvqpcOvLKg7jiSjepDtvaABMwJdibisXH%2BBDY8KJC2%2Fz9Jd8jyf8zw5aBcQPWwX3k9iKgsCJcdC2X%2BMMjgSTQNAuFC0UwBBRFh3IVLdTRZweowjr3hyQY6pgG5tN8gfRPfcBvnbkbEvnEP6ABGd1C7bUtSBpTNYEBXcHjJ6IuHO2SUwQuQpyAQYygfep019EcEfVOvHf9SU003gY1%2Ft3jRdfchiUCNcamMnHqT4sS1PB7AT%2FT1qFznnya42PEc2YOcqkmZhT2%2B9c9h7drb%2BStFglH%2Bb6RKC6ZCYJPPk1Yz7AHRDc3tgsnIvY2YkVxtEfmIepAzQ%2FoDKqPyb4qRX4av&X-Amz-Signature=efe88b15baa67c54a63bf1a3b6e28ef1abf8e17b15f8260b368881fb59b9052e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

