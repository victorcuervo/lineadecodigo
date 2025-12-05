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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH2VPECC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T111545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoqsCEARWsPNROJgJGDKzbBboYkcBIE06beLLE8%2FWRjQIhAJf3xfr9XQSZo%2FXdqlwE21n1794EaX3N5rxnK44B7H%2BQKv8DCFoQABoMNjM3NDIzMTgzODA1IgxgsqJzWFphNoWb0aYq3AOHLk3TvjsS%2FD2XT2veR3QzZOO03QAuqmX%2FtBXF7Inkf7JsL42zdvZ54VlAlq37qxE4MwzY%2FZdNztGIWauiIO%2BAVAI%2BzZ801YWIJnTnsMMGE8Cr7PPe6%2BRnqk22X29Y1EMUEFYZoYxTybgLvUe5hb5Sns1VpXa%2Bx0RJBZ50xnWJLAzjODLcp%2BNphnCITa%2FlfwtuR0ji6d19iCfxKlepkNrLvUgCz6WWnGbn6lQ0TjQCWX0DLtoAa2ks%2FFoDGud4MaXWf3n5icI0CuLZDYurCckV52sL7zkNLe5xhCHqoMNnqAA%2BsKoh98D6ELlB7BxGzK0lUzRzjuYPjbrT1iupxiDnuxRiENiVwEU6Mvm3%2BknFR3QxCpGXgwCw9w2KwCiDYY6fTD4KZBknQ0BkzwTZrbVb1lDAOSQXTC6sJ%2BkQDc8DsMvl4GFyqqXHy54DHBfBxipYK2XMhr%2F3ybvfi0Tbcvw3SkjIeCCiCdUnH8xsRj1XYZ4EmLUNnk7diMbl6%2BZDi%2BNz%2BwkvqvYbEc71oYcKWNBxV0xR3%2BBrzOz8FJ8KH1XH37ZKZOXKIfRIua4%2BHM17RrmLudwHX2v6OR%2F%2Bn5PXyIDLfehmkBO%2FALVngkfimg0e0U05ZvJJITm0l3ivBTCKy8rJBjqkAXy4rFZ281b2uVRC1nvY0ID4QDGZmHDIX728NBm6xgVB5x1FZwtgSCNiY3k1pLE7Mujwrie%2F01znfq18WM%2BbTvsxtdH5zvMb0Jg9%2Fv453Cg14rF5M0uQLH%2BNuTOPK9YoAnt8x5UgOkt8SvuIzYm7SoGHq4izfqpjTsyRbYbOPNTjKSHPBbjNkmots5irouqO%2FypaArtJOEVAqOTUq5SZs3PzWTL0&X-Amz-Signature=f609125bc0e63005214914501a4d4eb2eeb5e821c643bbd71139350ca0831e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

