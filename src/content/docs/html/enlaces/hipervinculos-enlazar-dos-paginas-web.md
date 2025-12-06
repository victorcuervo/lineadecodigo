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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULECHZWU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw8w0D3itNBD4WcvGkEzsX%2F3StcOKBNMx62a2kU3BugQIgLbTpLGMhuHeVnkmf%2BLdXeEU8FMPhyS5WtB6pX2iNs4Uq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMd2C2kJLE7DOR6OCyrcA4zOlVyBmb5ExlaMSLbXxvqXgwYCxvZSURwDThiJZ1kZ8ErC5HB%2B5Ncrz%2FLKM0brKBgAfg7E0YJ70Ysab%2F%2FfRkNEt17uaDRBeDufaE8su2aoCr3Ta%2BLko%2BdwU8L4NlkMjl4RqwctVn5rqkI%2FazPOJ%2BVfDVrayKfOvfRgFRKEhHMDIICgFFsUhkPgw4vAU%2FsGDWYzv4GobW0KVVSRPcR3j08ndncU1AsIPeRaZjUi6aH9W48V1YV0nuSJyfOFrJcPURaJBteP9gsGioU5byAu%2Fd2j90Gvy9fiMzth2CJZDxl0sP1qi79jnzMhLMbAuxuF74LOmeN3BA2TVmnxkcY0DOPNf85tae0pVZcQL9fjZhlC4eAbCWJxDbAU3gxKNaJN04FslJgKcmvFXe08DKVFBJx%2FwRMOpKyALkGC1akxZCRAkDTfG9%2F7LO7UaJR%2Bd1x%2F6SXR0rbM%2FlaP2C9tFRf%2FQ%2BKhPZoucN2djnkAidvMYcLPoyNeXNMvCtc294a1DYPy9veJH6JPJ5OBtn6gqp6PZ8p2hc6P5%2B8tPhTHpsoLQmUd6uP2swg5Wrw1wE70isK5dQNcub3tgvoMM1zQ4luWfdNzOc4%2BoG%2FUY38n%2F515odGd5gDIpgxd%2BsSEmP6QMIKK0MkGOqUBU6Bzylg%2F98xeMUgIdVGGlgMF4WSfXOfrz1NR9hpNPGCbzofxC5W2pRSvjjn9KWcWBSB8L5JPlwkCwubOUbF7GYcIyo0CNiOLKG36ukAnKB7Pvc3dMcVziJs3%2FNrVFO5oESnWQanYgOXTDZGF9JwOPXYwWOiAU9%2ByEhAfyeLlh5T031QbfRx0w1vd6u6ZFWknyprsDEiBN39C%2BtImQUl2raePWZ31&X-Amz-Signature=deff100747a6efe82485db8086be9adbe84be278625a98f9983e99c93934c314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

