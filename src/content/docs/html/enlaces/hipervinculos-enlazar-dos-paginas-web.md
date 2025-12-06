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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPXM4EFZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1OjcEDx50iXiIVDALBCYTedBM6DLA2ZfReW4fcaSASAiEA39yZneekApaJFukmiM%2FX00cOIwNe6yyUwtoKtvajGewq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDL1VvwGjc3jeVjndTyrcAx8%2BhyWBOIK5xuC1J3UBmO8W2%2BhsY4x3r%2B23Rm7lyGaSXuSovK20vj2LD0Qk5A5aQaczOHr3qORRcgs6YsBqFU97%2B3xE5KEq9BvUnPW0KmgHsSopFu0YUG9joL2SOXBl2MFxbRY266Hllc8aoIcQp1EXW43QLPH%2F9HX223RfNSwKsZgIR3Mz4WMvXAqKc5aWAw35zajXibeNKorXMaNqdZDRgd%2BDcdljRWpYNLV2PcPIfmjclxTS60MnXd1AwhJey53wylZEAxbHKDQftMQCERrXcljHtoMxvxxrB%2BDGk%2B4zihSfVNHS94T7Nm%2BhZc8r90PqHH50ss1o9F%2F9D20SSAMzjArlP2CBk1XJkQpgK%2BdnbIqXfOiGQy2hZzui2gL6j%2Fl1egNJKWO0U1QMrhTzyMhDCn7Kxd1MPNu7E9XZ5jd3bVfzG4dID7ZjP5MhdZPE22zzlj6ycOlb3CQLlLknpyOaxXIGs0S8iOYTK7NwnqthfOOFG%2FE9RhEeftqqGKOFfwa3wPm9MVDgoergV65%2FGkT2Q5jjqME3qOGZGv9NvlR2YsVjAJCStFlCHXJnubobfKi4G0ugowS3nIccyfh%2BcthGFLrpBNGXjOv5IIHxbywd%2FfnVTeQZeu5T4dwOMKCnzskGOqUBYC2UdSBKO%2Frv8SrBVnD%2FtK%2B3VkbNPOgPHMW%2FPskpUxdcfGf2CxNqBXArgmlPUMLqV5r6WtCQxkIyc4o6ddBJV7S%2FZXMWB4LjzCpfKuedUQ0hUwM1B7hq4QUtYP2APZVrSnHdBfCXxD6qf9oRoBKiw1DtKLFNCohj0AJTRUzXclhq7u4LrsgndiK%2F26su2qZB7pDO%2Bg5koSVkSewGpBmMYHMT1c%2BA&X-Amz-Signature=236828a9efa85bb08f8103ab0a441de64b43d585a45d16d5db30a9481613a6bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

