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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZPB4IDF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T171258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzLEH0K%2BhhtvJNJprJOn1HJBj5OjB2w%2F%2BCF2XMwF%2BORQIgYVnhGrhony7HpPTIjVf0qc33I7kjMYGLAEAXklZXPNwqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2iB8c%2BO2u3sJ9NSCrcAyuGc6oAFFOM%2BBOhpG%2FVAx83pp2%2BuuUbPB%2F47nZUlcBEge%2BY5VN8WspQpSKAlURDoNmHeKRBn7i2UKbY98sGjuEvm9HNLAgyRNGbgQyivqYhRtrgOwiR7vNQSklbutlvQJc6vD%2BdlhDBBrSAm6iBO0I%2BRKVgXP6FIFcOlcwsQg4KUcxw5tyZfHTp21n9JROCqxdqi29RbPO3Gm7CKNqx37ojAgLYdrXWBctwdyqtvr8wICNgct4aJgy26TW32riP%2F1MrSpnnERV3gfiIf%2FSImPOjhO5%2BskvLqtYlzl6G0A3dvK8U8NLyGUDqO7CF44cEz%2BqDQlSCtxFCoHPvn5WDHgTKxin7EYdGFINveam7UKFrreb5UGRdtUyvm0%2FHcqbi8JuYfk%2BW%2F%2Bwqu9wGw9OP%2BRBDPIsZ0OUwzevBjLhN4fxg0ciNJHmvTJz2u5EY4Gye4F7%2B04fJ3Qyjca2UT%2FxnxKN4S%2BKPtc%2BoI8BXmrRjRpHHYTVUI0Y%2FkNpUCJOnUEbjw%2FWNWNLE%2FCdhaOxyeC0YFaxVUPU5jZYpr5d9n7FBmVBL3jDz6t%2B6S5%2BuPwx%2F%2BrGLigCu5iQKAebWs6r2nWcMnOM8V6Gz6hk8PDx4OWy%2F7cZ6dqG%2BUpuBjPm7ovW%2FMMKX4ckGOqUBKKG8gMq0vOjJVhjgGEhSeq51Uarvdez6ZuOdyf9fv%2B0tlf0Q%2FAgy5CIK1AosGCjc5KLumwprpr%2FaP39dQm2gSTIaw7p%2BNTp0KZh2qaL4nztkl1UIsdCuxnP7A8JCDeMGfRlAkpWY983xMeSThIbeh2BZ0AfJZN4Svnd%2FoDhE%2FthKfj3cR%2FA0mfKaUQVPDpkrsmq70hU3oOUrGdqCcosfRk3J%2FKtN&X-Amz-Signature=31d5fe2e3d109e4231da3d647dadba7702d01131c58728e32bac87d2f4995761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

