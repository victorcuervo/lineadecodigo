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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW2LFOP3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTYJncgeP%2F8OJ7a6Pw0er%2BDTsfb8IUEhfam01ayhsVTQIgDOMNSfFHLWNkynBF%2BwgPRihDscrsQxFiXcGFeId8miAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDuHc8epFColEUO4CCrcA5O8E1x1azgqN7159D0CM5JVDov7yfdG8GNXJI%2FCAGbEAsWL7JcP%2FQ5ncY3%2BJ%2FptnYolL5FXMzx%2BWgWaEWpTnLhkGN8JEIQIEcERj%2FVtLy9DJByT5g4fzzrpYaCRQMJWNN83j21D0AhTtIL37v8llVgLrqghvZ0dryBuGNQ8o9jQUfvOf31OmhhQG652pv%2FX9if2XtcA8HOgGdRnVoQfym9Yt%2FDWLjz4VjcLEcXdtA2G9ja1VmkAnX3HA4eUPQX36%2FWB2z%2B5G%2FgH%2FKy9v8MigkMQIL%2B5%2FmNrRD4jcrn1YeQK72QmnF3IwOYrjN198Bk1dM5LQxT7ie2S8Zb1yjIU%2FuBgP2qZ3FpRIG4zdnO4XkejmHIH%2BD1puNli1uTY8%2BnhZeppckFa7lgrmmWArKl21mdVpFuhB32NF%2FZRfcUiUd0R1%2BJKsbRExNRd3EGeNpF28i%2FAUAiDe4KlAnRa5K30sZ9dBMAgjSE6NsDN60DkjyrGXczGYbsBoPJY6giHPT%2FALGs7%2BJXg40JVyXxYNrI1E9px2npicCx0bbiwdY2HFk%2BviM15JLbm%2Ft1pV45Mbefn7v0Vw2e3r3AnR76dhLwQcqggLFzawtfbNt%2Fl78%2B2znyHRgcIdoE961%2BO2KraMLasyckGOqUBpZ9yPVjBSMla5zwTpQ46O4%2B8VBmukOZWfBUhA9jblJL8TCJYUq9q59zxh6IIZMQfHPARmNm8ZLXQ2B%2BYX0VlyXmxXaSO7s6A6XO44nztn7C%2BJf1O%2FlPag2tyeH94GuMaJTlYdXgV4aRAQZJ5KRAkLquR2jhsu0Xub0azIoad%2BK%2FXoZQ7UGUMJVLba95Oa32Tk5GOdvKXdtfdA7FddEZDPtx42ZtJ&X-Amz-Signature=aeaf14feb11704283a848aa2ba23aee28bf32fa125313e32ed31380ea5dd68c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

