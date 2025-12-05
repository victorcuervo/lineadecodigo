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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKGSX4KU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwXtevQmZqdoGM974uG9w5ACZj7G%2Fz%2F796jfIzAKoX7QIgIsDrWMxxVlnJP0%2FuZ55IG4lmp6XJWXIAZomCUXbQD%2Fkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOMPsXBea8y%2FavKTMyrcAxFbhiI1S%2FYOUnr%2BZR5VCnfA6ssPVbZh3gNBLl%2Btf5na5K77m9CU3ythKmrmK8D4TCSxgKrmRAWMkr7E3HUijUMSl0%2B2X%2BJYZ2BZnrplU3Tt909bCuANMsZSM36Q9ZK3JvCI%2FR7TODVDTu8uLFXL%2B08ZXd7NLz%2FQjDTWCXg6ZjyzbaQ84sOXixDpCdP944J82BdrEvN3qhDqew0QPaie5OofkpLudnaRVosNEwjygY2uTBzpESiWUIsULMotkjpapG16XjLyNQSFe0LH1u95FKkzoXN7zp0JPtmdvwcQxuVe%2FDzSwxBnlmLr%2BxzHk3yRLuZrRqeij49qtkxFxNkDIWstIym54x6R9ly%2F2lMG6zohtpnc1JYfqp7Pf7%2FV2eK50Y6Wu5hO91nMOU5MGxEPHFTB8NM90%2Fa41uWPQ67zTOe7lLTzi17BbUJdHo83PHe83vVUjqFgTDnKqGqjb1Us9Va2ZE%2FevuHGSpXibulLQhm9uxPE82zNUZpEdTmuesCCYDTJDkHmaAr2VIDi9R4Yccd1a1u9CkO6Oa%2Fu9XLPTUuws2RoZn7hDtm9ige%2FXetUA2OkcXe%2BtMNx0sjaRtmkargsg1Z7gk4dFwsE6t24Z5O%2BCUK%2BtPC%2F5Kj4CjXEMNaMyMkGOqUBMlyo3VC%2FC3l8RlJNFzK7FBCsvqaxkoTy2WbVag6kzCcbv%2BJv%2Fz0AvgsbxEDJXCWhs5zPxY07HBlZfffWGKW%2FjtiElOu2OcDvQyY%2BHyBG5xotQCwaGmQfGeyq23vVgXAu5UnTJPGarqPzd1U%2FfEt%2B9Q5q2hPfBCG1t8hwpUYUYd%2Bpun7yeFb0cr4tbrvFTuNsaf09Ltq4F7GICOZ1Z7Upjn01FBjm&X-Amz-Signature=4d7c6047c2a78dba643f59c39d30a06f59aec9fe28586869ba77f0eca64c81eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

