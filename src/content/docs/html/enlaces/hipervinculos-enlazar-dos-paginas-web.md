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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGFNOD2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwpaQOSmKJYSflb%2BrYvQ8bEBjKwcm%2Fwz8ikLNMW89XrwIgHkY%2B0FdorFOWIu34CoSUd7zDoIr%2Fz%2BPghsWfFSaAFvIqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHH3%2FWj0WIXfa6Nt%2FircA12awDeNFggFFsTgpv3%2Fr3QN%2FsIhdd6zQXVsu89ximcFXI7qkEf3nfCaj5GAZJSaegTkNRUedz1nKHDrXrXH%2BPl%2FeZjq%2BUlx8q%2Bu%2BB1SiAXAp75Xg9E4JmBqipOJ%2FMlYF%2FkioY3hbR5AgghMtBFkokeonqhvmFECiB0XpWzVjBQqEBsyY9qcjbbQISCgUlIbggp7RBQ7WumNUmFud7Wsi7VHaDhbQB0XAajycktUJN9dHc8xKC8KHI5i%2BHPRr3hZl0qNT8MG2ffxM7Rno4Sm%2BrQUEcC0fmCzd%2BeJ%2Fz%2FdDMAdG75nhK3TN%2B8czXOe4i96acQfFmW0tbpgzxYb9C%2BX57QzJezugbYLzVaJk%2FfjSDUdy3EAS1pdw%2BHA%2B8%2FHhLvgAOBfCvHDkvnbPoUqrrh0Vy%2BNZEeKXUrE4og5JT1V53%2BJnB9JF16TbwcF9iV8us3e8rsVPjUmtRk2Dwy%2FIvkFERaQO%2FnCe7xM%2FBTu8BrzwmMaLONCHbKqxhBLOduf%2BIhctiUYpZCKbVlBpqwPAoIl4Y9uDlMgkQsMJxvEEMgZ46uSS4TEPXDUamNNQXUJADPK9luHgF6dVNiiPTFFpUzxpfyx2a8feH7xth%2FpIo61Ntb%2FFZkp4IyMyiR20ovzMLmC3ckGOqUB%2B5%2Bfd1doTqjaRrgrXKeBqYhAfAqxsElg9UM%2F9xuaWTo7Svm3N8w4eA0N0LstLjD%2FS2agrEgxk%2BblEZrh7y%2Fix%2BbqeF%2BDJnXXC3UGp1oLKV%2FH0b32DMzBzDY%2BQ6w3c7%2BlNfZEVkNeHmVm2YtwU7irCw2gA05PqnqGbTczqNmgenfZNhDYwgHFZ4nr72VZOkRbM3eWkFdMyxubcApbiLzLnRKWeT4l&X-Amz-Signature=f0ce7fb477f4f1b0cce245af8a8b1bee9d1fc9ca2d39667962c871786416fb84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

