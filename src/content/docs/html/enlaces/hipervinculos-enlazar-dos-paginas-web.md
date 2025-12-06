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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EQWTBY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3XuHgGem5EKpOCIU2AfGzm2CB0OY9GW3%2BPxBBvvQu8AiEAomEJ3kuN4vA1kVF0kgIpYPC0382XoZO3nZkgsnPethkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIymcIeg7JUDK2%2B45SrcA%2BA%2FONttRs6u%2FAKaq8WY9Wqwj70Qkz2%2Fhu6LlKDPpvF5i1MrXMpmdXsvh1UFvBIyQc9b1JIujO0woEC%2FhWL003EDQilNz11VFmfIrjeXHma129bMbODUgAlkTmBngVcweWvQDLwrFmh3JWb0dHrpe4LwtIRGKvDl4%2F9I24tTGfUTr5Ou9cYvnhl8SAhsuStBY6iy3iA3Vmv4WjI9pgsmhu%2FUWQSL9YFrCeZUmfkM%2BqeZFJM%2Fm3WiBSFt%2FWk%2F%2BpHeKOcCOweHP2J46Wd9fB%2FrjPCznZPk67%2FMqzbdhQHSxVUltSFxc%2FJ0UhCr3OOcC1Jsab%2BG97eZm7QYMmBsS23%2FSYJzMRcb2Q8GJsfNzC6rLtlkb15nj1eokmTGDV28314j2yWRbDUfRQgS8whc2Vof%2BY27m5V1Zk%2Fcxud%2BmA5ZjsXppz%2FP0wcYsAeexTtUTCuai9pg%2B63objywULybvotGAZ8dxZxK4O%2B4uy0JT11pjWu0jZwdNwg0AGCl5n09LccsPW0BNNPilD0XwP1oj9bxmokiA8YEtsnGqEAA81GU7DjlQeMukqETpTYRAyi1R7auyh9jm89xCCe2iNplzM07xIvOJj3Ud5ThyWRJ8bAQPs81Z%2B1lVai2Fwn1EB%2FsMJXDzskGOqUB2OhVaPxSQ7%2BOc%2FPnE5rjq6VqwJUy7dzLkg9rDRBRtoXJgtgYGerSJCA3FHvryJBYQycvAWnq8nAzJqmS%2FaWHopnteFctWMWuCMarzu%2FugOg8jwTMbCp47mbLfSPEyyLkoLeF%2BAuhTvL3wgwtPagtSVJ3jgHx7KBAdzZ5YIF9k%2Fz7QtcCmawAcLby0gZ8Gaw4vfe5dTu3oVkLC9D7nLlwrlIIBANV&X-Amz-Signature=b434c7fa0c4ea171f9af8616f316a58b63a0c7b50fcd9a6bb669abe48112bad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

