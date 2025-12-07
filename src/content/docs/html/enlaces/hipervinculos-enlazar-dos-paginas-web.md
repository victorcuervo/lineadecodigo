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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGEHK6VU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL%2B2PTfyT5Wqnv%2FspBOa66wGr8fNVDjhDSXXevERgg%2FAIgJGldmiU2Ez6tj7wh3MmFxzauR2cA1rOUhx3Y5Is50YYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCYHPOgKohN6XaD4SrcA1Bg0BVHI6hKTv67wZ%2BqvYbiCVDq%2BS73jCo%2Fk%2FPQED5PMYdOKIRZngCYHgPfHZ1FafHncKAgTV3HlP8wlqIgD4K2me%2BzYQWMPEhnz3AT1dk9%2FoVJEkuSgwOu6l6umN6Zntn2Vt%2Fs%2FDV2WRvDrIU9wjLqNTqrES4j2bOtUWuO7os5VuV%2BnqYs%2FP%2FImeaQoqXxjCP7T%2BBYA57XUrjan0siQM7IggopYIlEe7qMGwJDNA7c058qAljNQATj2Wb4PiEyEy12O4pYtuwa%2BZLmeVgOdjIttToCnaVb3j%2Bs0Y4Ih2xcplKylvS%2BRQOW4mEVBy%2FwzA9lo%2BRr%2F38o%2FcffGqcLYkxlFpq05MoKrKPsB5J2NSnqlrOlTUZDzTgvymSJR0IoQ8y0DS%2FsRzXyQnrg4n8BZgBBzAPP0zSc5HxXa%2FPCgWpBDyZWyZx77YlTeKXsBVyQ2cCKtxijbYZOzDCtYcbYDa02t8dWyPvOVJ916fncKbxSC9WWZrsd7NEKvjSNffIi%2FQxuesICK6iBDTV%2B%2Bom%2BJeF0AkxJp%2B9SnhHYGDksn3%2FCU2fM6jzHoiO8%2FM8IlWSfmWK4oftpISxL%2B3Ipl%2FHylMgAeBwLqq09EwT3GYaHqDASxLRl1O0Azqefzps0MPag1MkGOqUBpK7ZPwu6EKc87qP9crTE%2FjxnEjIazLa4ZG69u%2FTunkznVnFcd6PRjIBIrsZ%2BqcatQp%2B9yjkaJ34ydc6vcKGTx4np7%2F2BMVB7wOUSvnLpV9Kno3FZtadIYjOZBKjyQgwMaRAQh3u9nSTHSc1ToRM0WfbWN9exd0fMtGCtx9LPPM0g3DQEMHgxrGmJcPNAqb4t%2B5Ozn38k7ire%2BX0c8dXpYh%2FvLe8M&X-Amz-Signature=e5a03e7db3e86e924c93ce933e903ef522babb689ab52d22a12fefa105e6607c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

