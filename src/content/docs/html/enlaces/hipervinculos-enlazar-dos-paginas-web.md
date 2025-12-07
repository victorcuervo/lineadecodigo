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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY75453K%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB23Fh7mmrLMhDinUIhzg90Wzv%2FerHYl4oENfVPDhXcnAiB0GmbC7iRCoJvcMflEvGVpInJ4HwlqF6tqkmK7wnBW7CqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqKV8O8wvDo1ZXPlzKtwDlMt3XQC3EbpCVkpHAUNfWTAbUcXfVB1sRqUdhhmijlmgikfaVapPk24F4%2Fp5kJ7unduDBRx50EK6sAw8vbSwukkWxVMQIkToHHuLfN5Jl6HFLIs39EywhQb9Qt3JZY5LTy7rjWiShxkClduCkOIFx%2F%2F9TTM8IQFXVLM6xy6ck3c1d83%2FfJAOBFZNY629k3OqsB%2Bf4JtGtHJxAlsfwhtifXpZFnHIOlqBDqAhzvZE8uz3aoe2g014vIKCBc2j9xM7E2q%2BZdEjca%2BufQEFoECJc%2BHQkKqDTgWWXwR4S2u417D3MMKedbmv8046WwtDgTfxDXW1F0bPbc3T3IGH9LEJcEQiLtBF9BFuWBlrCuBk9NG2zWBghvwcElxj0jKhT0ygTZsNe2sOsJSzNoU5NQ3scHV1vIzqmiscjt9j7crwS8TOckUn9FY8lqyjZBdFOudvTDJuPJj2kJefxKrulFeCmeVYmu4ERjy6pArY2o2luCOTPIsa6ZFtUhWm%2Bon97iz4%2BvlJf3D1S2kcq%2FwF0ky7%2Ff5iQ6%2BoFf3cypHuIYjr5BNkoGQEIuvNs3x2j%2BYHacYbMNEQAppeeBJ%2FKntea7fmOMHz7ScooD%2F5nx2LJjo2pW%2FAa9FveKkH17%2BW4dMw1LzWyQY6pgHD8p8bL522DEyCi0Q%2BaBzl2vbk92N1dEVsGAEGaNo8d3FaMw2ACoXz86ljEy%2FEYXvXmc9JqfX8DQT7ZwoRy6relXae1fMDjnlbmPVNXoFCdCMpsSrezeQKmYEA57%2FtxN3SHpNLN4tAdizib%2B22EPHDLM%2BHte%2Bq7%2BXKhMVm%2FJvSC7SYzAJsVWsgh%2BPMLyA2IWqft5Ttg95oypci%2Fru5X8UNpx7asNcy&X-Amz-Signature=a8a9d710eceaf072d33a6729d1c078e43f8f44e21796a447484b110b12d02c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

