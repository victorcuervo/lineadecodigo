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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCDBOU6G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS7r25xf7oGUhl9IzM7iWLVbhwC2AyD8rFCcB6BrztBQIgMxA%2FctAY5NJEhl1seDA1fE5E%2BaJqIBu3WMvNK4X0v%2BgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyEKYoDWxWIzNV2iCrcA24x0nui7H7v64mFkDRkF7GRWlQINXlBiL1c4putBio05OsbMJIsH5uM6eUEKxmV2NY%2B32MheIWmorPPE1IjXRr9UYdeHVqnX7cCMQBFeEByfDYur2N6xHIhyhHPYAO2rvOjV0JY7SkUqUClY0O%2FOfg0G2bGyU%2F37wPAxMObkStB6s9RMllUonBPLC3A84wYh0jTIthVjRuWGRTs3zbogxBUZWM4AJGDDNh2SI5yy2ElZiOC25180Zvio%2FjeNOWDlM9toom2wsqkrQD8ineHx7GsMmOkr31SadnKxQdIXJOUM1uh6eXq8bRH6hgN2jydod2sHOwcHY54nnMp6bAN%2FmTkl8GLH1wrMIwcSSTStFHwSvEiYAZyx%2FvnKZr0ZlIbvs%2Bg%2B6jOqpM9uZEt09DQoCQZVxHwvVNoBU6rvBr%2FDvl2Tug5OEXCNfLOxcryG5NXc10PsBszvj01Fz%2BHTUGuNxcD%2FOMo0jjXlFeKBBskKvm63iJyda0JxFX8aDRzlfh6FiD%2BeeP9PhRTlR7t4cLAi%2BedWJEGMXC82hOY1LEhj3ITzaOtbn5c5QTrc8kpkdzskatozJiNnFKZcDUvFDyxEA3qPAsz56DqIiobPREEJIAMs2MeoxOEwonVcai5MJzQ2ckGOqUBZG1o%2Bxwg2vMbHB1HbNSWFoZX9Cfwy%2BQhuULAWm4xBPMCg1tKuEpkRZA3rftamjpleah3feb1RwIujzD7erxo501RjbjPu6se94WOM1r9J8evABmHSBrXIujtfVDMpcUNGefO5Vwwq7%2F2Rc2FA2zVC9dC0fJnOVG5dC49VYpwtpaAG3k%2FG0ITwh%2FKmIbBPlg7V%2FcjYeMIvGzHi9%2BhMn2lBIXlwQ8g&X-Amz-Signature=ffdbc5614f67ba6bf38125e64f4707cfb65f20650398fb398644830d06373f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

