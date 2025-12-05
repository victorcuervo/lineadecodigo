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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ72YUHF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T143328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDthCABHGHONPmTH3TDVVuQFmU1k6kZjAmCJSXPbLlN1AIgVo0DsL%2BpM1HfsJj8FAPi%2Frdgqzyzil6L7JpbknVjW1kq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCcabj744rdGHUN7bSrcA7aCg8PCRkuaO%2BGmUfcAitfey8IvrPOwTAKMbcYT4UoExWEDkGPbH1CDt3wE8pgM2Ax7GaBhDBSEvMp7JRMaYZrRzhRHMCTt53wwfchCiAjCg1U92UvERAvfjXlpE707qCm7Co3ZGHLjGRf0716Vhx5Nll%2FMMHMCX%2BcvwOo6fMnbBd2RcmqLjozJ%2Bpe%2F0umg7F5fG1watf5uRlhjdnWIol60Z%2BvdWFj9fh%2FEsb2M3tN3bGUmEJEMmAp4aC5KzANDSZq0KHM4nrhhn2za0cTqzTdZWdbYaMn5V%2FAKPtM3vvAMTsMDK%2BzlgZDuDx3QwP%2FRTN%2FDeHQNkYyLwE42G3MLaSQjm8NyDWjiUTvB9kDhCX2OLSFZPfoo5VL2abyaWJFJVFtXOPcGC0ki5F6gJKg7EwAebO55ZPOH%2F0lROD6bQaUwW0wJlTAuZNLW86PrS8Em%2BY3%2FDnQYYRxHCvFwZ1vUscAzpYtJ%2B%2BUzk4Gra4f7hfSni%2F%2FTEklDAXay7yLE4Q9VVZrNFGehuuvpP1aoobyhhyPy1zCRLJNGVPVUTeSwUIWxXNPcxmOW0dpMRKk9dtk0hW6Xm1v3qvVOuAPvfAaTCEfDxjBKdppODkoQaZfDIRbJxW43qtRebQtSP8WrMIDJyskGOqUBiPVBgg6i3KXQNyDwbNuuBmfS0XZG5wsGfxh5Jk6Etg494go0MNqhK5bGaNDfhzp4fKk2s2zO6tXmnh8xdCz9Qqfa7flVjGR8rmmZBNCI1iCnC2OKsX4RsDXAquaUgQLl0rQ3eKUpP%2ByLJR0xQrZ5H8%2Fs27uPxvKTox1fvJoszT91%2Bid4JKmFt46hbPLwXysNfjdC5PiQbEwGj0MX814guJ%2Bv%2BV0f&X-Amz-Signature=412f41383349b23493bf8d085ddc3124e6516a943279520ed2e8bb2f7077ce0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

