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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAHBBY5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTyitkYVJ%2BTogod5WNjy0ZTu30Sh%2BPrVfiJ21%2FM1cXsAiAOZ1fzcc0l3rODRnDhEeYneaO3wrElCp1JMu6FI7sjFiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqxSzNNlyFb2o%2BBhlKtwDM2zajb4AlmoWYm3tHh9WLO69LvEoZ1SDaRy5iFkoDoQVzHUL24V6vErfA%2Ft3%2Be%2BUkS3jtvpxq9r6T7PSJfFhp8afNfWEHkiayZD4ElsDcD7EbP%2BM8jBXjNkartOLdxLPfTcbCZl3N6mtK5%2BDOqGEFY4OvDPTzHI6LBm3nFpB%2By0GWhuhgOqAOEYOcWOD6glu62rjCn%2F%2FBDmwcH8whpCVTpoh36cTdta%2F27V6zjfRCiR0TMxE6izmhBjmiGf93Ly6ejJPIEH%2FDTRDJU3CcrXRCFNcgNQ8v%2B9%2FquTAQ7%2BKHBszB%2F27CrUes8zPfHk8FWyL%2FzKhlDUvzeQbswPqBxSg93Mwo%2Frr7JYslD0uadz67w8iQtduN69fYRaHJmaT91AlTPho25guJkHjjogLOL9Qznt%2Fp7ye0GpwbFC6AXf7WbRcjjW5HyXBEgT6n0qpFm1zSlX6LnfElo%2BZHVoF%2B0FuXHfY6bnok%2FNut%2F9HETd3bf6r5o6g%2FqRSJ0mZf1OY3f2bw1QgTpKa%2B1bIpSB6Qm0oi%2Bwn6F73Q1WiBIvMW5tMdBNd9euHNvd7xopKehZNHCW%2BN7VthdBBIH4KXBGapPTYdH0H4uWlaxZNxHwfWEnS7Jwwt1rcp4QMtCOFyasws6PUyQY6pgHowqKo6T46sI5I2O2T%2B3z%2Fa3fDQLK2YoE7GnvsGsHCfdcs9uDNRLt1swQRiWcP8hvUhDsBn6qwNxgaiLvB6Zb2X%2FBQuO6VTh9yzJidKV%2BBQHt8Zo0uywbrJott%2B7zjwzylFqE63SD4WEZGX%2FC1bWEUSW0eUXBoJdvPDAf9oCslrzJnZ8NL6SKBhgiItz67o4jixp3HEkDvlsg52SS2FvyUU%2FoqThq6&X-Amz-Signature=af99f1197a50378e0ea5ac06e1779561f18034518a43893ef97fe2c4080f9fc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

