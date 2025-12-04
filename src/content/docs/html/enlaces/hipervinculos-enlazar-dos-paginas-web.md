---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXKTKVVF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIATlrZAwXJ611qBPDzGSuThWvd8Ed1fzSgJL8mFX%2FF%2FiAiEA4rTXKm4phHFAQZ042GnrFH5VjYr%2FKWqCDjXsjgyFvPwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDPJnU%2B6nAOL2yrCsiyrcAzgDyPW9hMid0Gl4zHvriAwjeL5CqrJHjtIDK65QJDv2rbZfDdB0S04ZUeoyIm94noFKK0UrFoTha8ILNHGxxR%2Fp9vOcoyNoDt3BL2p5aK0jSa33InPPC81HimaBEnUY4qtkMqu0dYgyjZ%2BwOQx9hknfDp502MMZlzCkEWnL7JUAyGACMaFz2ZcvxMTYsdU6IPqJ8zItY5Qhet%2Ft%2B49rjzcTkhCEQDN9EkbGnPcrAKdyR8nfo85p4SpF9KadZLf%2FPXro47ecbo2Zq9OfFRtBQpFx8%2BwsMrJDz0m4MlvwvqBePYA0yZclIZi3HNr67FH%2FgUp5ZN9NFedNSBg4BCQ1%2BSB6Y%2Bp8ISimomYWpdY644wh58mpRYIJCZ0s2o3xmXoPLpv%2BZM6ZnP%2BBsJjZh5LgXUZ4HXWy3nTOEtz3yS0Ae9XXPV18ShsQs9W04WVNjLs5qBo%2BtheKJc9T%2F5spNlsVjSQTBQ%2B6ugICO1xIaOges48iZZhta0XDWWDtwBBVWWkem6Vjpc7%2BxY7NiUX04PucuFWvUC6QsH0HvJpyNfqB17WHAluKwaunz9l6BmKLZaxCqcWLFhEtBn4L3S1l2KvKQylUyC4weu9yXkeeDUt%2Bf3lBUuw9A814RNMCx7bUMJuDxskGOqUBuwjDVIiKP3VZKbUs8Yc2DAGwm1U1RQMW52hnnWTZMpkPMebHi0EMTZ3CUJydV7I%2FolmE%2BtD9NfNIycnaPk5bwhrW%2B05VvsTwWxmK7xmg%2F6lyskMWUdcWfbrmt5qiTYfm4qfKyMswnPwPY2lFKJugwr08PG57EHBu5o52vpeTL75NzrB1lHmoWeohxZzhLjuLcfyvc886yuMtCxgPtF9lPRVdPvEY&X-Amz-Signature=d947e1115a706ad550233b27fbe78e66ee0ec7d80870388c1376e90bfa27322b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

