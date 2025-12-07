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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDL2QBJY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhrmLdiFdHisCgM3k84RtuM5NaR4s3CO7mNQa5hbgEHAIgXIs9QNZ1eUO%2FVlbB%2FuU24muLJcyYQBQ%2Fdgs4Bxv000gqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDTIs2RSUcLyu1weircA68qllpjhwWayNeLuh2NZZJMVg6juMzOsq4jachVeNRCGaMY2XmOv463V9NjimUdYZwGyw%2Bp6VpV7CmmtFVE0lTqNDnZKzMe531T71BRm2Y8zckPAqFmbqoBIc%2FNgsMS%2BfWJNSimFi2e7q4LNpRDuz%2F1ROqqY%2FTKqyRG%2FR3%2BCva12FghWrvWFmx4iBbuRjEeuw3ar4WE7d0j4Uh9s0IfYBub1Gzx2L1sC3XXz00uGEPgQvqTRk4WwIZVE5OjORN7Fms01Xku7o%2Bx3ICw50UvMXEhch1iM3l2OMFOk35wS5HAQDnFySPY7IhZTP%2FQDShF6TtGh5FL%2BPm%2B1FH7eLxTo%2Bpc76cUbfEpz6LUKI9Q%2FvVIo76ot%2B0r4SWtSgiuRbSDvPDHX3cspEPAY1cv2Ub1jt7Pu%2FTVikhFRNFey3cYY3fYUByI0pjI3ZDclmsTJ4aG6drwZpGbI10xk8tGAamp4MZWg4L0pRjqJeHS5Hf1nh2rFaEJr%2B5ML6kP5KYugPjVOgv%2F0t9J%2BMHs3T3yH1UM4t1GXOqe%2Fw%2FM5bxK1rQQWo%2Be44BUUBQNvccgDS8QhZSVhRmtaQmpqrMxgYTy86JcwhYCLijYm3%2Fzt9HewCNQ13%2FYyKhK5%2BdXp6LuPomTMKWZ1MkGOqUBd4BNoo%2FLI41cyDjy8M2ektJX%2Fuv4H3%2B%2FyQj9KF4AxIDuFmav4uGdRRoWcnUEpNmV44QYFqFaIJRp95DItlMXdCqfD38pxcTVaSDcJQg9eL425e2rKDFRe2LK6ASAW3ccM2Yvc41WdLAFyrONlbWywv%2FWbxwBl5GkP3c%2BPZw1BFNPfeYp26FoXtxshHqYHy5TteZX0cbur4NGMq1GvSgSgubHpOU1&X-Amz-Signature=4a9ebf3e7a6e91ed0c748614f4e99df523ff8451e7e58f7eb00117db3568a127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

