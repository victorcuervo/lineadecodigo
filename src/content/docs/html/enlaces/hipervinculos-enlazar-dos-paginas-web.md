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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IHYCXRZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVyzaqyoKt%2FreXXoqgO3hBJY5Q%2FFCoQd%2FZA9xlVgPoIAiEAvnaGpHvqxGxxKEZ79XYZUIECHMQxC5cQ5o9dhDDDL50qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9VfJ1MEjVcQw8IiircA5v9k7NiLuUKI5Shpam3Lneq0PqSauphdbZ2jpcdS4otFXsuW7oq9x70tVkeA8%2FKId4pNGQxu%2B1KpV4eRVJwMEIkmEhMCQm62u5bRuBniZuTfRj6Sh8vko2CvktQQW%2Fl6e%2BWrwzbmzDJjf6gLajop2SBBifr4JHJjfw%2BYCjDZpPceALUD0ITXe0ONVArqiqXRYUt%2FwED7o9JqFBHt%2FjVnjy4jcWAAu2W0B5SiOyJgFmFbapPYNsWTTAxvQkfzLbnikWE83rTNQtUOqgaXdrBkkMdSDda0yFkas1KooVxNGV46zpYRpcxQcuYYzXCYavypCchWFJyPEsnqO9CwqyV237d%2B9ngSaeATTJLXHqSSTPO4k1VB%2BW2E%2BJ%2BaDtIaOzaEJGwtPHw9O8ymMSNBaI4qTJUrRzwUDb8oZwCJL9xn701t7AZHbGSoZLt%2F%2FZKYk6VF3tpkaPl%2FTUuaQARjQaFNdcfM99XvlUAqdtHw8qbQrrvDIzqWUqIHTnbxaCli7oGrs5bAvlId%2FS7lytR1maYyv57CemsNZ9UfXmPtKeHhHZFAzGgDku%2B%2BvrsSePyAZJ03KanJBCDLUhX9P43%2FjEwr7Qf%2BHQhrKWEAzI3HFhEDgfKNvB3Xr5IpNWPKHSWMIDD3ckGOqUBt2pTo4mcG57ZGqF%2B%2BWAIY%2FKC9lpTMci6da2gsdfJO7d3iVJp2SkkeDPBF9U7aGOMgkFvGrQvxGSFOyF%2Fg5r15Zu3mFPwxSG88XLE2XtgztotQvVJaSAMdw5Xck7qiZckCH1NGN07%2BpTNVM9rUd2y71xGgfTNxhk7mPtv%2BNLywIr7ZmyM48dbvkjDMV%2BTJkHXz%2FVb%2Bns5iWlM7L3%2FsZy0DqS6mZQ5&X-Amz-Signature=9aa276c97eea64a29251c553f20ab7ed081df633d55b97cad3d41faf14e2ac99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

