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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM224GWV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkH8CD4fq1GX5Ba9XEj5TqhXu5wm7WyI9nRv5X0XhoIAiBLpfe6otleWCevuZ6Cs6LAKqnWqAnJBr%2F0FKozm4MPbSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbSGMFiU5%2Bknfb2gbKtwDM73hv7v3Omg2w7tFHSSg8%2F2Rt%2Bq50HgUql1AMroeVnPXufTDW6WDOsPtmNqyVU4194Ew1bCFf4RdzDgOO%2FWjYRAU6nI4XMzPG3dxNB%2FvSbk5z4vfelYn2d%2F0sv5ly1T2MzUKIG%2F5tNTz4DSI9Cm5nLAoHvu5PoE7rLbNtSmy%2FOioEcjXfxn5uiFaTuLn9ma4%2FkgqyPCdnaagWXHtoltOr%2FWy4SYvUByLCbz2V9neFXl9mDnSj0Xo349QZ50%2B%2FEWzlX9ijSrhfrs5pPlIrkjVdB2JpLGiY%2BeMXlEXWU8VxccaDHFguKI4hSe30fZz8xUyqZs1S9s%2F0ohHyzfZTSIoy2duGvccV3YhVeqdm6vqABWK1gvzeaHfDPT4kfGrNOuv44fCd8S8xAgm47ZdMi8%2BaZ9XmWJoARMdGsgZeP2Azh%2BZ5iucNSX%2FDVhmWZgZVPPSoERJ4neToqzPri333lX1F0IiazoFdu4I8bxyOGu0UF%2BCO5zMW3%2BQdUf7YBKQjK9kGM5kKPyiuIpRgnZGExjtTWBxIYlJqEAu5sCuBBcAOCFTMwBpBBsd0BgBy9vYSfKHUr74%2FnNZQkyVAEhFc7T6UUepGraLdv6L7oA7wp9yjsrKox16LSJai0d0g0cw%2BqjXyQY6pgFldmheg1N3BjMSHbMvyLV3mCxrRNKFnBR9lJ6V7vNyqTMOttVIF53BOwpvRa9JuBhsKBZCJil7K7bBHqxtryOSWv0GRF8zxQMyb6KPjyCeVsEK8jle70FFhdTVEZ8F8L06s7nKqp1g3jxZxIKdmFCIXCpWu5b%2FLhY%2BnRoB4ry%2FitKLn4mFc3O1vk6kkw17HBXS9dJhZnccXw32TnvVAOH%2FLOxYqWyY&X-Amz-Signature=9e404f40a5fcd72e7687543ca7ffd95ca12d5ccb7cb5ef4cdc18f9b8ea5c5e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

