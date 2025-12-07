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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKQAKX5S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcSXxhW%2B24KZED6%2Be4JNh9OXEuCandW46oPPVQYYEy%2BAiEAjbZ8ZrqgGwEAW0SKYC9CFZd7YbhCoV1Nv74MhcsjW3oqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKW5ucz7JUMdWRj5tircA3C%2FMqa2UEvgxHIyw8z5gkYEI0L0ZWR7aQm1tbbNPANPeqsCkJh1bGJt4HIuy1NN9Izy2avyYp1LnB7IVKPAxI2wXgA9Zux7xJ5O0QSTL6zVY75Hpfv8evLbK%2FVC2llDMj1Q98o0YNLvApY3VyXWhOTcAk%2FeB4oJoi%2FRS%2ByWpHhZ1pJ%2FTZcQ1xGuNcgjTWQWz6dP4IlWFIJbjm7ji8ExVLur23OGDyMZ0J7SlTD72MJkSyhED2HuVpMhyVciog3SNcyymKhA6faeWSS9YIH64lQ8a9Oh8IZrINbyw627exMRuyuGlioNsyztrTth9iSOxkk7qB%2F13q%2F1klmhxj8KgK3tRdOVE8orKfjhEQlX8PTa%2B3heGw0mJnrCxYhh4Aai7279uaNjqELRxp57cue7uh1HZ%2BQpogn9qSFAjyyherTxse7s3U7VRQdM3BfNFbiBV0Ad9U9hPGUpj0Adr9asHQ0v1SkxFSrubtIhmceVxLPjQQpvrg5STsqIsn8kR9K5e5LiTqE%2FFHqOpD0tuL8cgUbDpDObKbCU7mPt%2Bk6MZWn7V9LLr%2FzSB5ti5W2%2B%2B92K92IanZ94LVgwDCak4yP6okx6e%2BpsVOTzsAwcR0XXA6hxb%2BeLPO4DQhQJwrXcMLKa1ckGOqUBa2EG1EcTSN0QSh6bSflmM5ccdDxucUuNRIsrXwiJjwCm%2Fjjb3Zcfi2xRR6qWEaCwD2IKokahiHf8J41jqFfw2cpUQ8JzZKGYsshhlCeNl2pEi4hafEdRX4EDLIat8iPtO7rrxBvushOCYMBWPaeqJiBQhDhRa5TXjZlKxcAt96AkYt4uEJxGE%2FhmIosm6cYrybIrHzC6zdRDqWhHxkAnyRJS1Gyo&X-Amz-Signature=2a19fe66e6e8c5cce07daa789bbdac9abecc72de6963261e4e5bae404de9b2ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

