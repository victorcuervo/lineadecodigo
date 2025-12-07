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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5XNORR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOUSG1Zb4nQ%2FeOxsKekOSM3wpnERYRwRPo9pNu%2BFTDxQIhANm%2BJZ%2FOva0z1FpYfyMMc2ev1Su9tNG7GfBG73gLbpBcKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxrhb%2BMTzbAPJBuIq4q3AO3Vbpm6tyO4oytt1LaGu0VC2ZL0E%2FHJtkD40z6IknRcSLhaPOni%2FtWWE0jEH9DQE1lqB2%2BgqMvSxS%2BER6jbTwph3cnuZ62vlL5fbYqE1dmSiaBorJjkOg4KM946uFlba2sY9GC2d68aNbJ5Gi1qi5OyTwJgkKFn2ayiEXW17wgU5ae%2FiUlLfz4RuLmCp6b%2Bk2R98Hud%2F9h5nYoncnkjMROq2uHdBi2uLkExa412qi7OuX1f27yv5VGAuKngIg3%2FcIi%2FDI%2FNWV%2FHwsV8Ghu2AlCFHx5%2FF1tm8AtSWdXCYgro%2Bwz7r9F0d9ZbPsFjNd4T3qMacud1PySJ2I%2FUHLFYOkHqYioy%2BCg9%2FA7pxd%2FuTeX7hW8nxf9e6kzAaFzQ%2B3qqg9uRskpuo%2FPEyCtwrS01rtcp09njiy6sVJBwim4tBMLW96zJv1mhj3cKgKgs5R4XB4B3LOaS%2F%2BR1KdbPGV5wPvFZ6NYQGa%2Bx%2BWwRAhYsJPlgFyTLPz21nvk81tcnh6at2yXm77xIflSwP7ZjXggYHlpasQicabi17WUwwhZPpKuCrCk1JWEHH%2BVOh5wykV5l6T3ALW1NkXxtwQRygE2R0Gs6MLRlrchSd6CsgAs0GX6O7Q7ns%2B9gVtAKk7GKzDYoNTJBjqkAT%2Buif5MenmFiWE4802j4APXtz%2BO3qK4GmackO80xcrMOjcTPTWaLDmFbTPlc9d6smTY%2BfftEK1BOgCMb1Hgi1x4fjl%2Fp%2FbaiKJi7eKgJfu4S1sgL4XKVFp1rAKx6SCk9jxydenqhGDX5vATJ%2Flp6cneZdaFY9Jw8aaFw346TLLlIhqzu%2FhKIcUrfiD%2BjmbwxhUEpR8xoLkGJLRhML0DKIA3E08X&X-Amz-Signature=c6a51d7afed1d02e808f8aab0e060805baa60e4a498c7df2a79b71adb892ef32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

