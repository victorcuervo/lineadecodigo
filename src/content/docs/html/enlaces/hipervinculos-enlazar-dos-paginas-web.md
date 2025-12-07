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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2H7GBMP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFsSwsJeXy%2BPUktivm9OL0H3paGhRBcT%2BEL8xjJVaUCwIgOyzvl3mmV5Yfv8qAAvORE69QF4fvRQL5Kzqdw5k%2Boz0qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpT8iwvDGY%2BIsTmiSrcA3BkU5F8AlGs2NTLvrzUhhsMsagl4D%2F5snDQVrE3g0YgPASRGSfdo7c%2F7mj7sUv4eoAbgCHcuiQmDLZqasahD3qyHIuMGgI32TWQMAT4FWyOXfpBBgLsrlgw8ocUGcL7a8xWmpOOZcEJkzULmwgGQNqHIxyNKfyntJsZfJ6HksaBcZSwdhpTYw0I1MaYfiZI9IWHbMYU94jbT3ULA4%2FNDZt%2FuJVYt0UnOq%2B2sfPkYucCTN0aTSu8p8UO7r1sJIxYAEzrHbb%2FEl1I8Kl9uRJ4uIx27Av47sYZ%2B%2BfMwPQ2cEX%2FXxbe5ROHYBJtGWBKx3QphxY68%2Bp53oZTUfq2i4ZvUv9wK1FvOhiF%2FsuWvxbUEfgktnCr2JvNPuU39cbZRmY2DEXQQzqNKr3znqR965IR%2FphsdGh0PS8qEeyVgY%2FPsw1vLfuab7OtrfWuMUGG86VQ2bVSI7JjfwVSc6jA1zTXLzO6e9hBjg7Cq1Kq%2FumTiPpUZAtGbTCa77cyYfJ9CR5B%2Fl8AXXGY3IMNEYlLM1BURT3moQ%2BDaqcV%2Ba%2FjSNr6bb8AKiWdnmDlykEHGoDzL%2Bu1UrtvTe%2FI%2Ffc2OF%2BgBK%2BYoqGu11RRX%2FjDZfWfQ2XwkO0LuHr1OWRBgj284sAoMNeh2MkGOqUBf0yKOSABqWFXkPtl5CUQfBjimrq0pCOdCBWzqqEEoEXL%2FSu92uovh0wvbg1x8HMFwZ4vyzZfCgQ8k3cuM5cdq0ZLOY5SkrE0HVBOTpjKgURHEwuJHpnyuAzpKq6bOmYd%2BRIGMeNvqARyR9lm9LmjdQIkB799z6SfPndhvwd%2FruGwNSyabfCIuf5%2Bevng7gfb5qUdZKB39jdHxSGoDOc9%2BmVniQNa&X-Amz-Signature=c79a9afe2d6b1d971271a5dc1e8759a944909ace075e0e32ed3a3fbaabf50852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

