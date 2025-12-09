---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632IMFAXB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T155900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv1MRasOHDunlSh1FK%2BcfumPQcHKtSj849HzaAKuF9zAiBPX8hTF3IOiQFIlugzFOHwG5Lnfzytow8%2FNP2U24R4qCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAP8fD3UP9HUdvLAAKtwD2b5oS3nOLU%2BY0Gee2KcrnM0IJcK7kzPq0MqEC9bxnOX%2B4ZuokM00JqbwZcQX89wUB7sI%2BwTsB9VfjDhlEb%2Fi6aBx2A4wns8rMqSUtHIe9dSBIBFHuDCFq7k%2Fco4FGvY%2BODGCyuO%2B1bdvdUWGvOpPXdgfRLuJMHY4rdPfay0fU%2BqudpeLS5uzUveXYU20FKRIvwr%2FQP91H%2B%2BF07TIqlaHDOo7sPJFWlkZ5yiZVisP5zLY8MYyENUCpDm%2FPRhRyqPSM0fbHEnTvdbj2ABfL%2FYt%2FrI9wfP00M4rRsL5fxAy%2FBLwG%2Fdp22vFhC%2FaCNAwGveicNBSbslpgTyUpl20MFEBnaY0O4ZOAYxQB8CUTvmA68KetqFxlm3QG3zy7MT9ZPN1qUzXhzYQHn3cH2dZUix9nZ%2FwSdE6Rr%2BP5tcx92znPUJ7pI36vhMGKUnT172iSQjLScTUgeUaSHOsuth%2FD2ms8pcIhpEalE0VBL6gwXev6kebgJe8Grn9J%2FmVaVg1lLILB%2B9jegsnJ0LYfg2Al%2B6dgyqwqluvbtkZaxFYP88FzQGT2AcalGRZ1DuPiSXLpGs6wdvZpMI%2FGWfOsQngPvshvpRP9PcIOF38urbnc%2BKTNL5vzK8uuc9CRkXVwKgwkd3gyQY6pgHM%2B52xBZTf%2FUF13SkV10GzLfAWNeso%2BTK1euobp3fUf6%2FpCt%2BpvcIEL%2BR3zGf9GA6cOq39osuu9LxL%2FIr04lGwSa%2Bq5Rwz8WOY5Cow5btqsKHahOjKgn0sLHcHWtAC9K%2FOaMc0hWF9pM7a8xQ%2BoPuxTAZF0%2BUhQI%2BjGJ37IcYW3%2FJCBkAUlt7IDdjib5eWSvAJALywh1YRB6DtNl0CBUsALY4IGCrI&X-Amz-Signature=c18ea9115ee80f02a6d10b987ec1d59393e866959690c0a5920aa8c47fd2c063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

