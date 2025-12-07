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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNG4R27N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrC%2BvPKAUaZJx5ePW2c7ddwb2Dn8CUWjRU0PhtpqaL8AiEA6SCtao4IFSm%2FCDdBq8uhBimAuiuwDFX%2FYwNzVTuSgeEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK975J0sfXb2m4wl%2BCrcA5LSr7WDib3kBu7HLgMs47A6XgZxKcH%2Bh1TL%2FasOwrf9zmFDRKkYVGOgCSmpRSgyMRuoNc7xCaoJJ4K2Im6PHeBCcWPxos3TBMTYO5DmeXZ9kYDy1hV01qw%2BTy2%2FCDkE4E6kehNEIvHzFqZOshPBMc7pYgXRSt9CP02BUWoP1Ux9pHt9Sfy8GZg7NaZlrGR5q8b8GC5fekVKt87GGHHQqBCicXlsG5YY%2FRvZZLsvIV3pGayqX9tA%2BUfJ63T%2FBCypeqFb4FwuSIk0RSWcr8F7mzIajo%2BJdK%2FRAMx3fiAu7YXqYgXUFc4xuy3iBWMh3bi9198DPphPs9MiZP46Y%2BHIs%2FdBBtFXK3VO2lGE%2BOkJP%2BJLJaBjquNipoFhilGoFsZkdfxNgS1UfhYL32zxbyCsh24TRe7fnuuI3ixavTDeMGmzjXrjYjQNTZF0OzFIwy56%2FS%2BVmeNBstmo%2F%2BBT4Wnk5JX8hVp2k038LL6EIRz1tHdGH4DCcqxcS99OeZ58UqBmG1h0kJ%2ByOutBj%2BQhphu0HVVh2%2FuJup9u7xCit%2BLXDmMnEYr6ujB%2FzAusWnba4BfiNHKkffLwHXfIGGZxJYdcZvijG1XkavnW0W39kS%2FgecAEw7Z9Cg9v0Sgr2JP2MP2%2F1skGOqUBcFMI7c2Fo3ftoI9%2BY%2BqP0g7uecGpi7QaV0xdnpwIpbSzUEvQii4wujZUxWzArT9JdNYwFWemsaEHgAgnIKE6tohHrP9gjiDfhq%2FQADKaakOgNV79a6PyZVrf0DyvEA8Puzo7ke32AVPw%2B58b1mZa1J7WIJ%2FUCBXHrD2J8dm0oyFECi2r2cJUJsju5IRg6pqegLyAlW%2BBaePK%2FBhcgociTT4SvwDf&X-Amz-Signature=13682b55a86e465d33d9d8f549b4cc8457319863bf8b905f7c298bbc6cdc0289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

