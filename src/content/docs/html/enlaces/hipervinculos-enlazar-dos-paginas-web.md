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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5KHZSIB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsAd%2Fmevah0wNqbii%2BDgINgxN%2FDJu%2F58kqLzJkIyAEpQIhALpHvddOEmmNgjFZdp9dhO70VRS2FYwhbztHen9Yw04pKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxisbIJXRO4Yk69%2FsIq3AOEnl%2F9D3r6q13MgreLx%2Fr9YwlapKv2WaUjVZTAEFJtG48zKPz%2B3sZgVIxDloB7yZPf5%2FYEi8ukvFlS24%2BE48lD9ShXftUPo7kHCPVEYOzKK8Nld%2Fde%2BVH4%2BoSl2AxLrvuCLh4ARX7sfdUEW4Wf5zFvgR3FmWFujjEyrAqZe9AnwlJSp7225RGEOSeU90HoM9cEzNtAIEgcv0FO9QFCHIHbG2qspUB4NaAXiWzhNsnK5u%2BJHc%2B8LlsWJdzuZ9gPjMhHpwoW7jYOP7p0p7G%2Fzhufwh6XuLFTV9fwCUqCoEEHD5dQ2uvB7pndlrYa%2BataElJQ3Vddf543D7WaTqBx0Gua5J9IpfRt5Gx6oz%2FVRrf5K7dRQLCeD2TzOnY8QlOmazW0XqREnnIkLMMIV3gkAnRRe%2FnFNhvRYkDe%2F0at5l%2F2CwoVqa0INw5SKNxNYiOtGGlkb3l3UnywN5rGkUIn4Oep7und4o9TG381xJ6ztCn2mtYSTUppDGUfM8dcaav6yY8fQ3yP3mUOWM%2FDYFCnoVIdLkQGxCcFiAnUCDAvHeM0m6gqvffBwFnPSKMcImJcJKCANOM7rsr71rvn0w721V9UON8MSwb78ntd3dfy16nM4x0%2F0dH0z8%2B4h9nh5DCu%2FtLJBjqkAfL27dEmuEXuWoR%2FN0JVUOVavzPdNf5YtR%2Fdx%2FA46hENjOeD0FhIL%2FbIUK5%2B9m1EEaEjOinFh8QBk5mX6%2Bp7oV3lTvHLRqDk5d8zZVcbiHwKubA8ujVz3P80HP7mdyPKnOqn4ALFa6Bl2mMSDPEpnfpJBWNVY3lmItCZMvWlNfbVsxdhCotfUotHqlc8kH3KYlDSbKot2A0uSkivXiQExrO9LWrO&X-Amz-Signature=718abdbc42e5243c6a6c5800707b0c950d72f4e6972d85884b4c1770ac25d53e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

