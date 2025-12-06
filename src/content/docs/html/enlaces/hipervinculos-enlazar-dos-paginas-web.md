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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2LG6BB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8yepe3KPSOh6SwLLkSS8C88HN7FTmXzL4WMm5jYCVAAiEA88FKeXigrQjvkgxH2i0VsdwYJFUP61Zyffnlkz5erWgq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPict0zoW8HikKricyrcAxwtOQerZ6iCD2lUKOG8oUcxQQhPrT83utzbLkVtTsvlTR%2BDHUF5VONbrd9VesLb4R90dhO0q2zOGuCryTLb5hegkWS7LeazIyEPG7xL4fbCN1ir0fvBbHgDMNKLwJ5tbamDAsLblpQCLgJJBdglipgS6sgp%2Fo8ONyXGjjCi%2B0lVOBV0gPKOWXXpPl7%2Fv9rs%2FppMqko9J37BYR3waVlJYluIH7ZvGApsWtozJHCvM3ZE%2FNay9OSIMSjL3GmoawRVv3IJh8zPKaLnlL54GEcCmP9V68wYaxIXT2%2BpkHWdS%2BtZBUhKTOcEwmOAnWOIhrorXxT38x%2B%2BSYezMpEq2TgAHqJUf452HSI1w6D%2BkPrHlharezcDqOoFwDUd2Myx8ehzh0zMdK8zHGKC3uKuHqfbtQ%2FQoyr1b4SxaKcXwAYvQBiklebWITwu6php6kutIxocJ%2FYacdF%2FOqqW%2BFp3TPXMs4xdBBHR4X82uvMhMyhVy28apGcVREIRM5IwnAm9B3IHlN65qNP3PMThoOoXZ1rDAb6sUH2sHgB3i6pqILdH9dAPuLffKPfHlS6l%2FngZsDRO6i73b%2Foe6kR88TGQ2B2DKz98ULzO1u5qgSGymqZbrLpzcqEO85bSdTBRcN2gMKKm0MkGOqUBKfboYcUpC%2FWQS3kO6K%2FR8BghQfbsKwaI5aMzmuiJxCbSY13HxyUijked%2FEIonq6maPvsSn0vimGwgVrXnNp6rJejEHqqLU7MW%2FLgUJwL8sVdbuOos37n71Fht%2BuPKcHiKRyK1G25RucHOnGA51mLpNw4fKsTANibuhZwnm8QqbcMCZr%2Fa3lP7RnluPq%2BW%2FD0skbohYwTJzg8ZuqAMtZUEeQrvfQN&X-Amz-Signature=517c406e925d0f72d9e5db49c3a0e46765fe9c516d35cab1985f6bcc2274e6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

