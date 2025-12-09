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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MFPDWZJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T194918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcODX0Oaci02jWjZ3U28SmjtIOAKFIKOKeSbMurxUWCAiEA3O6LW1bl2h%2BabAW%2BOusxz1u30jiWCepSGZ%2FnbQ21kPQqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGayzSLS%2FQ%2BY2zxuircA0xFWv4kVmgmgMl0ZUtbq8vQK6cVoYRCKlJl8XNdR0OJiL2e6vybOhAKbRLLCNIKm3JYazewARqWNuZ71qvdxi3D78ney7uSMGcxt0NPk5zRYU1DyxyleA3%2BLCnKVHMWTN79sHdpIaqkUKRN25C0pfGk5AktieYU5HfYDUcgID2EllWsUn5HZlHrkE65MOMCK%2F0axeSYzkqSYPZZwcUs2K%2B1Ct03Jfljm4bjdo4er748avXNbCDxmCZUBm%2FYUCneUvWYZwtniypRPc7DPDxJxTzGhmH96X2twxlT%2FzLYJNL%2BdKMUauh2f5avCV%2B2zoyykfuVSk4AVwD8wwgV57h1AMf%2B0UQhCaX331DwsTwUodbsA4xlZOdqi3Jsm3KF1lq1MwwqX4wlxgIeuWKDqzbn69lZQ9ihUo9YsVzsyyQSjZC%2BmUOgBrBsJHjJfJ0qfpsVgHb8zrN0orOIKpi4tzJq8A%2Bzr91flP%2B1iTKo%2Bd5lJRhJal2L77DpFP1BkhwJVu0zLpn2ATWnnS2i6ESIe9oYGJuh8NfDV798pYpoH4OvS6DgR9ZBSU1fl0sWq4OtD6uXLtBsz%2FfHUE0zC%2F6eq%2Fjbwggs5RQ2MeunBYUQDnUgafYYzliEkbbV2fIleJUAMObe4ckGOqUBu8a8V9Yh%2BzsioZB2efzRNwjicMDZKHhc4P4V0os7CsdWhyxaPnI1k9epgBMwcanbOnIcqyjBi%2F40n35eqXS3K0RNYcOeIEFNKYlrKzdGyzq9lita3vbYUOlF8ZoDsYdtvZWbAtOXy8BTaReJS8iVOjxu45iFgcoehHjBB2k7%2Bla7RCOlWWlC0St0lb8yh6gbdb1KrqW7Qf3H1mHGd7wba4OSUyN0&X-Amz-Signature=5662cc6ad32846e3b3aef7bc9938286ade60e1e167cd045c1b628046461869e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

