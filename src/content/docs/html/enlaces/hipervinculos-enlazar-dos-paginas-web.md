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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S5GX55E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0IVjn9I7tM8aUBwUpBMTUOPB2CRCNC0I1X1dJqFlFdgIgECftfFMh%2B8COb5xuLlDdyDCA0misH7fRTlXrKX1GiqIqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIowRiLQwCN5PvdZZircA%2B4mcJrKH02%2F%2BSUcprjhfkjrWxK%2FREQdcosjUeNdPSdAfMWgfobwKkf12rbY3LRR%2FbUmeSGP6%2Btry5UctMhbFzBso9m5w1AmF96UABMxsZTfKFunGslF8IMg%2B8bXVxtmQAVkehLHjONL%2FI46e2X6Wh5LklG%2BGfTnMjaZ3A%2FcE6tnc29SafmIElztomhETYULYdI%2FqPyAVUwAjFHWx%2FpBkKAHzbw0cpN7dr9a2n9NsogGXMSaJhh3w3MpxqbGqUOcqyjoMG%2BsFsTK%2Fid2qP%2BuS9BfVe9mRgMSMp1zHp3tRsR1Fw6eiIge4HlB3t6UO%2B9nbEDPoib6Jr4pUWepjbKtbXl%2BBT4GMVcVuFF9tOQ0cTBYMbUC8dGjwPud3kJV%2BzuLPRUAbmWx4knhQzxUmN0k9%2BS33OlxVRXIyG8oCNe5IJpxRK%2Fq2IvG9Yt94GWCElN2E3a%2BoFAzfFlJt%2BrxLxawXAsnkik56BBbVvE5a6HgOjbhrBJbC%2FgoliuNHYScPAK0qvfqD9jEtgc5D0%2FrXJ%2FVaGRKJvhSZe7GetH5lzmjlcXf%2B8PnEiALvJOOXf%2F9%2BLo4%2BvoC2RciM2oF1BGUNdSYZJx4lSES17MGsPtd2OABjJy9TNIzK3xS4FhT2XUoMNmh2MkGOqUBK1OZH%2BAqqYXvUwkKnzPpPmNoiaRi40hwSoFVyw2R%2B6i0gjO%2BD4Cgp19lLxNxQmArURronFpdPbpllRmFgcqSXkIlh%2B3aUlT5D8rQBHGMyhzbY%2Bltx%2FmSdsshwceVqbPizJ6FYsaPh7kQdtsJb997zpFmcWXw%2B%2BysE1jQYSOR5U00q%2FfnK2ia%2B7NGOsT8Tggm6SKkiy9E4BLs7jSBkOzi27Osp%2BQJ&X-Amz-Signature=416f331ff173a8670711782dea61b53606fa0187fb92ef266505d0435aec2d70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

