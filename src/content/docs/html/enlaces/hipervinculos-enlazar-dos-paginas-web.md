---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQBGAWPZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy0jUcgkIIUxR3waAb1ljtNPRrMrAktNGN%2FIv4UIDGDQIgUOiizZYGV9xI7pdWuDLFrIvWDNGJv6dboXpWojou35Uq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDEPyAjLvPKgfGYS0ircA10CA6iGGerexsw1zygUmrl3KTzZl3LvznnHrV1CYrvy2txhzCtb8Ru9tBFSgCxJ8wpWTgqhBD3ASid4sNLU9%2BZseGpu22ykL7B10xpLXXI1WroC1%2B6zzHVf2yRpW9zMjAImgo5OeVkyhpZRhi9yOLsOeXsqCzxjR2jhIYtcJLhBqCkhaDd13NfJv3uP8LdDXy9r3eL2IYGVpjFm23jeqMZ7brAyeLxU3L33kQqSPsMDprcsFG523t5PvA3QtxOw%2B%2FJQLNVhSInQtADkXkb%2BJ834U2I0BL7BLS4BQAZpR0JUVQ6mCIAMwgnk5LysBVaoIapHqPuv9VQu%2BZdXe8kvTVwAWOkmx8JB%2FkaqMaxfMtrEysHXxVaIT6QB73j8JG3m3Z6qg4ebmwBAFsMtUNiVtUQxOvWZSXQBiql5xyyJEYCSqfzFfJ4Ms1gTsmKrQcgzrmJq271RuiyK7HOQwUUN6wkYuHPDmVCj%2BxRdAiQw%2BdY6U%2BpNfjK6txYVH4d1Rd39THkDxkFndObl9F1RKFksgCMAD%2BGwxqiPunRKT0VnPPu525IwvtQcSddMVV3xvtAeL5e%2FVAYm7RHD6tgvWWeW1av0ckmXGOkIZJZjldPAiTpYeo3q9ntESBDJ%2FK7bMPb5xskGOqUBgm6zjo2vM74MAFCXR4umyIpz2ZFE5PHHuWVpED%2BLArL8Mgt62SUL9VFEDXIsCqEsiZD7KeNM0o6pXE%2FwjFa3MrC9gZR8SgSdplbJzgvVLGll5pcBI7Exm45E56fw29aUHy330n6LaM7Vr9Zitq5CtnxilMz8LV%2FPxh219Tp9oLpPhr%2BVIuPCLZ0rXnj9VF5iJB9B5YTJgfvJLlVlWqa%2BqcTSZMI5&X-Amz-Signature=192edcdfcd513afe69e2c8bb9eb9753a2b56562c7df40efee650fbd1f633470e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

