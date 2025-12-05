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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V325UXDK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC454dtLluxu600PVHAgRQ%2Fqu0RxL9sMNBDQGA%2BtBdfzAIgECBTlikYtWjCe7y5AphP42njKhJAdhgqB3ikLqW0BC0q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDF5x8g1mnVPhKLwljircA95n81NoE%2FLTOlQsqArHRJkLfXDCuYwhSetdqa1y4bhNBB9s2VZh1FddVQEH5SYBVny5i7OYpQQMaSZ4orTR8JGamp0B%2FGRFIDHvAAdZpDArRnAVHl73WRVSpFUAA85aAGMyYKqEwxeP1%2BVxaMlepPHoTJVgFeUNFPhOSEKmS0GIMQGnt49biBxFsThLcWijEMCsY%2BVqAp62F4lYvjK%2FUS54jbGNOFg0sM2mksFD2p19kc131abYwYje6yQ46Cu2Fdrp7saiMEYtB2%2FdFO8D1SHQb39Ps54s0C%2Fuq%2FZhRtZXRUqqUujnDZCAIPjIEflb5Q187w21s806NdCVO0AAa7q4BOUAHVhyjnnL7jjMjSe3TTnQsy0%2B2%2BthJvXM87FbaOIDlN%2F0b4J%2B9MRFPkcw%2FGZ5dim4HQzyoVGIXZEoYgrjBtu7RMKK4eSLd%2BTSf3oN1H71cQfKZXKofxyvlO%2ByqOISqLmeZnkkwXeWW2yhWmeKUSgQMwgl1wDI1XAiqHI7iIKQHwXBl5TFjbC%2FA6o3SXZU38xag3K55TLEcX3YAe7t8J7uD8qGIn2bdDZ5G0L3USYlJJ8tbh83scG86ojJUOWi5TV3DUeegPQduLhqY506SW%2BNBOlPZHS%2FEegJMP%2Fty8kGOqUB60lppTG8ZyVjM%2BMPzBz9YIur%2Fo5TohuSmll8I8E%2Bef520P5kMRQoPB%2FrxO8mNCQKExi8ditRXFTqg%2Bv7lqVEOxOEum6MXGNIy7Iimxwi1s%2BScHilyJHDEatUe72PGjo7f6pG3c9qEv7BxPWmy%2F%2BuarLK1m9NpSjCDwnIlspkS0qWPE2Smx%2B1SxJlVBEgKH8i8kLm7qDphUejzMuJM18nB%2F4pwVVg&X-Amz-Signature=8cd9eb49c4d56a880580047e0aa684a2136d5deda5727245f5917c08955d18e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

