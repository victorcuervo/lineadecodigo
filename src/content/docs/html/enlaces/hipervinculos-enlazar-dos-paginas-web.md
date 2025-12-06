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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PSQUZ3L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpU2bGb9izzDsN3X5cXtg8CzcO2nvLwJOFobtd1THLigIgYdn%2BaaU23S6UYRjW8uIs%2FDhpiEthS%2FoIG2cXBNSaodwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKD%2B794KZ1LBfqQlSSrcAxNaBgrE0d36wl6MQxQAIMtMzm5Ux6lg62WOOmuaWxb2j94GMKeBhDoY6Jy7j5nJS2jCQW55KOzRfvGiXRmRq95SnuO6FDxLISEFfLzl5goXfRJvASmJ%2BiSPyUvveBvYFDZI6j%2B4%2BAOyiGsnPfMGvN6icLvwOxiBm6LZgMj6PNU5t%2FfkFOE3FU2VAGPzrEG%2FdBOBnRVexGnby4wueZlAgylGP%2FJMcRxNYL6K%2FXkP%2BH2pv2OiuEY5nP2nIFv7cNuHxh5wWcuZFihQm4rvP8iHFnB88dzmN42gKV8zHo6fQmoILZCEu1OJ6qcdU5E%2B4XYV%2BkVwdFkhBf%2BlE3xkcpctMpNJKjxJ7ixJqDLOAIgFzrypLQyMdA6VByE9CiJJ8Aa4YMfXRzXGHxpEGsrSwYElAYasFaCYMrqizswWS61MGSg110Iacq1lfHmmzwTmiYmDi%2FlCYkcRhbbc9GuGpwcTcgePBtySRrhgJuVMLPmIcpHPVaoGFRgQqOGTmL4b7RSYm4A5IdM5gbxa5Tlsx6EAUYos3AeMezVGNRlUo95kzJkaV5eAnl1EmH70VdjQk5PYtVr7TSgTxbuhq1vx97D2p52rr2G8%2FXhtG%2Fk3x20L5wrAOIWZTFh%2BZUKxrUNPMNO8z8kGOqUBom2CpECt86H71KWBVfs4QWPt3mOkhcr%2FfB89Aiss9pXDabJWBZO%2F%2FgOULs7%2BlMWd%2FVuJBz2hOda%2FQbhui4Kl5LlIc8WxsGp8Ppn68r%2FB%2BoPIXQpzOuson%2Bj7BVtADXtrGuz6TVBxnJkHilH%2F1S%2FJTATUDwiuMGsldUcnyeV6%2FJiZw%2BCavWhnPrsyNdAvb54hQkMZO60k3dZdDblsDWZ39Oao9X2K&X-Amz-Signature=d54305ed921afd4985843e662bc4ff1c0a1e201aaba723014989d7a553234c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

