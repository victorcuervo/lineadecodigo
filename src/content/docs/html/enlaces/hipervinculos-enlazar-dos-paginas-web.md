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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKGGMC4M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXOJ%2FptxjKOuD5YbxiUDajHchyWYeKZcDyJhu%2BCQun%2BAiEAox6ZH70dkMo1iMP9H7tFzkkke5UhjBVo0VYWANlt3cQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6RCkrDMy2PvdhtbircA9xrZWK3y%2FU9f586NzTI4W0T1wSlvaInrlYLtmczTVrpWrqRI%2Bak7A%2BAegfS6MDSYbx1Khc7zhF6pTTbZfvzVNXtt5mmnchlk%2FlGX72IG3p%2Fuv0U7nEvF3tehL9wP6tMGt4FORK2VHEZaJsJvhaCYJf1F4lg3WF%2Fv43qFBIPVUqj%2BMqIcX%2Bi30Z0qZ69f93srXMMA%2BZdkDAZy7LVSN8FRSHH%2BTRazNWC9mrnPfUShSol0H%2FNnAO7%2BF9XyvLrFsqan2UXBCFL6bV3R8quHkihxwemHj5PIRNd9mbj3cSPonaNO8C43pb%2FGAf%2Fo1GVKIozLYnK8occvnCa0%2FJMsQKVjvU0vUyGGYox%2Fxwy8YBNS%2FOYJxbNa3fw0ovV7XRu12mM%2F0SvLyIMTPWVqGkAzBXCuxwM6ErGoim9AFJRUpMt%2B1EsvlbVuuQ5%2F01uBqUOQpIDr5NLwAl12mqNfBIYYKjImG53b%2Fy1RS6McUBTBe6kk0uU5Ij%2Fae7nKixAi46WqCSGGFbcZhEYfV%2FE59A6pDS3S19mcz2LzzK4NusllOOef6oJPneHaLuJfyl0FS66TPi%2FbgvvJSpwJxVxkU%2Bi0oyRN1%2BAkxksrNWezxzGCwFCe4QsbJmqn81jfwBBwhkuMJuu3skGOqUBFmV3J6trpFlXKV8Z5QiIWLtAlJapKqirhEMcBhsm%2BoeKSD3%2FBEfI9gw5EUm8Pa3bjjRtMfcahnAPfiXCZqr4SJj51qxSX1hGSRmsvU8PvtwXZLRUbR2Nk9R1Gp5Jh0clBLDMG2l5NovciFXP1CVNZabFWuV1KIlrxfkTzEZUeln7s9J8sonNqU1n3%2FSvoQCNWKvk1PcTbWXZOyqBOoNynHLv0ZOj&X-Amz-Signature=be352fce959731bd9eac00789ba47e45aa757b33459b7f260fb086c593823526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

