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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSCAZ34A%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T163901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfv%2FVoj9XLw6HDo%2BzlCmyaAHziLKisPSpoePc691avRgIhAJtV4AJEtl6kP0PU%2BlxSaHKCQL10K6YwtdnoMtDOUcKpKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyS63FktCAsfb0%2BZCwq3AMYV3bpltaIkUJ%2B8DBOcP7fh%2FuXyDZNOA1HUg9iF8ug0xfnTJDVX3qERgmDDkUSbPPHlfwkDCCLnI7%2FaUuJd18le82lO65Q02JBAPaCSAPBjEoO3GRB%2F7%2BmQ%2F4aHhhGPE%2BgTffC4FpuD%2Fv%2Ft3TFAuTH0u7Kv5bK504mAPv7QLJrd%2FlV4EMa8H0oSCXpL0MirafbeDbT%2Bv9wdLax4kP4aJWPlYoX5sPCwE4iUl0hAWl08E1o6iiHOU6iN2UbMAeCo1PYfzZ1VlRPX8fTEys5oEir0LVe9mNd%2FVNpKmHhsy60bt3Sza3VdJpUP2Zm8PdsXLp%2BydXmu6uXLPv749mJttRVooknBEWnG6uB3noWlOgB95BhjCyLpcefb18NsAhWLxZI6XlGjfKSgLFA0R%2Bg1rx4lQFkhs71QjMIRFWHuTY7%2BzQlugGf0v%2BkuYqIMxNQPPfxwWNX1gfjA4W1BXOIPOk43ZkGm9mSdjzTHdxTPP9gb9cZT5DzC2hrjpOA9Y2H113vP4Ct6T8K9EPL0kJMuB1fZf84gCgTysGSLq2BZ%2BdLixRoVasPqDOHffPIvs63I%2FzmNEAQeeEA5Dobc72SvoX3suJW7XVULKfSOKlbP%2FTnwRIbBiG97WkssYt9VjCEmOHJBjqkASkqNhyHZKfHRVl2d4XLPmpi5Sew%2BiJ0ISdoqTcjLZ7miap%2BroN2QstSAcW8HSD7e50pgCVu77UYQMhnsZ3DzeIzjftVP3W6C%2FRMVJHSJ3Kjfvl89bEtaZF0hMjg6jRywIn20U4t0wzaTtl4WeSqhVpNTCmJxZhNUNTB0%2BOhNEUDNuYbkv1I8OTPktECjtruXN6lHKtc%2BGTdMvpIPdb9S0Usa7lh&X-Amz-Signature=74535faad06402beede54b61b3097ce1d5484420c31701547929c630386791bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

