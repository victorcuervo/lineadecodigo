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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622KRLZI2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpCCbbfGOtR0eYyOGKxosknHPhrkrzeLWFVBeTU%2BHz7AiEA2VHJ2uae67BuMLdaWNLtzpC3qBdm7XIcciayPh7i%2FyIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFOfR2MzzTZ5UJM88yrcA4aF1GwOfPLaSqK7bRZ1kT%2FAbBB8Ib3jYWOLNx1og3ewZeUGvJosYqTfs0HMntVupTWa57MK0xHkP6S6B3aIDbl036UrNEfz3tPyeSDEbBMqP%2FB8w4Pjdvm6zsPLUdj8Kld2lKxyZ%2FPJbqa0OdXB0x1nIVLDLHhbXThJyACq%2Bw4ru9rw2wz8HRCs8Ux6PLSMebeXtoL4rL1wUhCPOthzOTzLVVCcPJnYga%2BINsn9BbwceZVrxvvD23D2zLaMxiuQVOqA3C2SYOL3oW8LI5sIutJwPlZPHPRajBKP0%2FpC%2BZYXOPM%2BY2NgMpo%2BWpgAfcaItWqx3Q%2F%2Bn%2FDyvKyGE0UFXcJ5YVa8R8JaeagkOMyA2o2rZ7Zc8%2FSvgsPhCB9ilNfWReWU29p%2F%2FcI0x2rupl8eo%2FHlMzqEsdRd25GtvMASF6x4BOO9huh2bTDpO%2F%2B7Rvyo1N7rJ2hnQHoSWftJkTT1MpGYK8m5sTeT6CAxuwuL5cZrFb56KOthg4ZwSBa5Hbf2FTFfenfWBmzHoWeUVHl9k9mMTDWlEvOQfxlH%2BtTv%2B0I%2FSOsYictMUzgZ9iXWYHMnX0zUOEFsJQmkpgwbN4PkveEDGKb9lNyGd9MnfSBcmP1Ap8xzjTAhOAuBy%2BGzMOL8zskGOqUBufHDIR7jGlBvXLncMP%2FtnHEFWXPTxur3TQY0otEikC%2FY3Lg%2BErS5iJVOW3AHfbgrllyE4fxkFv3mnqX19BkIU1hSTnJSXu7oNyP%2BoiP9T%2Fe0Ng5NlDgEduhOaUgA8FeORBgxsUNK1JoAt%2BvpSI%2F%2FIIb9vwYHC67FQjFqSWDu%2FoCP672%2Fm9M2kQ%2BewCzNZYn0qnVrMxjzL76o%2Bp3TDRfHt0tcFa8D&X-Amz-Signature=1e5588941f30bba7f8dc063e947ce2914cef31f2c08ad7c824183714f9dfe6ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

