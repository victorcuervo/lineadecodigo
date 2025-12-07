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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM3U7YGL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4aogyS5Hwp1D5MRGBmb6z8nLWDLJGA9WMBCjQUs2zJAiEAl8%2FsEvmP8znp88vmuapCOQ%2F0OW1aMwQNB7ygD2srplIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2V%2FyNUOc8uKNXZyCrcA0GE5SMGaDtnlHAsYP%2BhVSM7Lw%2Ba2q0ICc29oC1KoM8rl2gw2UUpAFRWqjpmhvFL58i8kTvhAgbutkZrIxLegenapFurZQYCvy4fdEQj96g4%2B1d7LVRZbLBFDvFfKkGGwY91sG%2Babg0D86u8YTehm7cinRfu%2B1d4PAJhlCODtaRont389xILnwTq0iG9c3kw5JHEvzeLes2CZfjsCa6Z2Jq8GgAlEASF6rJuZv84gY5bXTmLao8GLMzSwySH3lVDxLqHGs3rBPqc%2FfhEEjqjCyGqFfQ5fD8CuXoYCi4bUMcnTuP1fcvXwEpGC%2Bw158C5geognES6TpAozQ7JVzm%2BvcnwkUMOZIdbgSn7OmtKYyE7hovaDWzvkO4%2FGZlgz765ZfkgQ%2Bk%2BLnY5AxuUIfP0vjapXtKVPCqNIu0UiNDL8nmneL%2BWAfnm1tiaBFPS4pSwgvmMPZrxqYE2zToZ%2Byoz5cIHwuE6C6%2BqCmjQ2yRdm3iTdkSjKZoiWZlaQuiQoPlcNxVp3I%2FogZ%2FNNpsrKfqNenCeQIA%2FWBNlAvPeCA1FwcBufn5o1EZ%2BvcUepzr17dS1sr%2Bb4nTrlT%2BOKVI9BcqOXd6Mog8jtP9H%2BEDAB7XHF7WKKU7qw5ksefu18tzRMIC%2F1skGOqUB5VWlLLH%2FYB93kCUqhjYKdnypLqVtjKrA9KHRxsG3uNMK%2B%2FcAxXqYzDwCjWcOb%2BjACqmYZ%2B0NCfxkgHHFhpPOjCiXzdrlx9QRf1%2F5B48XbwH9a2KAlawKGLhQX5%2FqYwG41dhtvn9o0RYIoM0OReULVObElQD6wj0KzrWL8fAqy0%2F99aJezfLFHxM0hejqaEZ938ZGCrIC29gbsZkGug%2FwD9L7WFDm&X-Amz-Signature=904a5f106a9db8adc6d3322172693de7c1026f63c30bd552bedac5a68abb0c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

