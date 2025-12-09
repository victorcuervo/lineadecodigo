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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJU2WTK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T184249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHL%2Bw%2F9NI1C3ePgNUmgfC4F74N1Y%2Bz2mOb0TyeD68oc3AiEA7T1CJBHpQj5O5xpz0K1uzhHV3wGlsnzP1KWjZbA66Y0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgwqwOD5fvqwE0yVyrcAzfz8BucSVf3m5KM%2FzzgOXSZ2JHWdEE1jLhLKwuuhwU98Z%2FYZjt3zRWM%2BQ4yP8qDMStzo4YLFnKWKK2xxop4u5KXlNXacwauhs5sjU%2BwFRZWQM639g%2FaeBAxTIECXKPmVwkDdiYWHM%2BxJPl%2FprDNeehcZVsWigh0Nos4mWj3urFET6XuDADuCwkOE6mGHKr77DRz1M0uwPDVmyGV5UNu1l21Tsl4m5drP1YlR8eOZr6M3J6ko1QvqJdToV6AOXZwcg4DjkFr87PfSIbLJVE27yBCy3ncPG72cXkQ8jhNZZvK6OAYVIZSdXX4Vs%2B1EK3JMKPEcEINF4zV5MHfUfpjm8RRe6KEX5qLFvG12bGFuXrhL82Ngi73SbLhUF0MJLH6iPB56fuOAX4uuxNMz5qMLZGBno1akJUFDetJbDQRJCL2SveBzzDaVb6VzA6X6kY%2BOE%2Bqlz6Hxlm%2FjYZGyhssr%2FgqRe86v7s6ETQ1HfOTj9wzlgWw4A8uLb4VWtF%2Bs2MIUzUC7kQfC6w9LTpujKZLwMd5Pw7a9EExLmt7Y%2F0s1QHmRaZo637mHAbiFFKT8d8NrRBX%2B%2B%2B1vtx2r5xJFzb2vRapwNMyGLRniPefdMTLPCFRLxeG7s9PjU6OtfpeMKS94ckGOqUBj%2BeOjxLHdBZHFiyFPItj1dLXYe%2FuYP1mSUiv3FyWwezSFul3Ih8NLyGZFYyFPXD7K8keOY5bsdhB45dP4GgnE0HT%2FfnaZIylgGPZSC4aopNfL2%2BFHp6W4NVAmPGKTP6bx3ioE5G%2FDBtmFfgPmFCb2ifcbOcMiYQBbwvW%2BTtAZtHgR6nXmSrPUTM77dhi7IasAYYVK04knu7lAN1yCuzYfLPy7Rki&X-Amz-Signature=47757289cc0f0c24634b2d853dadbc4462c915569923d889764ad2e50175aede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

