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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE63SEXF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFn68%2BP4qjCByj2cz0lq0WkFLgQeXPzmOws3d%2FXCj1YsAiEA9EsGKUCfLBkA8Caw7W%2FrV7NQ4GeF9OZ5VtjxdV9IYeUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhX2mHmnTxZgdXsUircA5w4L9cZzfgSmy6VYGF2Yw378gszgBe9oEIs%2FECwRzPHr2ihs7KsuFw7jK9UmvNRQ4d2dtsWljL9azTZ7R2XJpy6ZHNxV9DpBr9aQXo74kQmFjZuN1LF%2FxAwshK1z6716SEym9bfRjLlTUcwa1hTRKHehE5t4LyO0ve5V6HywTZFsvFP%2BkPdMhrtEh7hoK5kB4hEC%2BZe2jlOunBWUS7pH1stJ5NLTTyQFZKENmhA3TR3TmsrDIF1IjZOcDdTh2Lr7wes%2BYFCDJ1EyBwQE1wQu9LEP8UEuiLnQ6iUfmHgwd2qjsdOJhQEHkuXveIFGTB2cnd6aJtnJzSgvxBIYw9ewkd9kxW3qYmV76M%2BcEUGX7F7aWhlgi6MvkCtfyYcnrqI36URU88bCtoWaHDnnmapeMcaIgDgnI%2FO1dJcBmTdmpy1%2F3r9S%2Fn8nGCHYlRGktevk2oWehAgMp1aJ0n%2B%2BbWRFmVq6nVj0zCMEcEe7xwrePS5xC%2B%2BU4CetHUUzdQjNPolUmtSzPBG2uEVMS%2B7E5SHDLbnkijJJ6B4ugAEqcwDQUXi8f0WI6BmJGR3VD6eAptu05Ewc4sOLqqdgFjebjyuJ4vDxWIb8wy7A5W96TTYyc2vKn21Yi3zC5VZRmDUMMqZ1ckGOqUBK8nX2RFbV4nXWsKzeOA5TcM2HwMpLaaXhLbuvsU8lo8cH2lrvm6Rmqnz72lZJFSAt67Jyvrvo3ecZV58ddv%2BF4iW%2Bk9GC5nE6K9IGxXTqBKk%2BOp2lTIUlMgNN9KeEs8nXW9yuAx6xIcWIEBst4PWtbDO%2Be%2FynOrEQSbiums%2Fp1jstfWAbnqDdZTsalFBFawVvXgCPTB79NMHIMz%2BZrCpQr4kfW4j&X-Amz-Signature=03b82258e473c35953fc896bb613deae5f333cba82882266b77e4e9ec47ace4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

