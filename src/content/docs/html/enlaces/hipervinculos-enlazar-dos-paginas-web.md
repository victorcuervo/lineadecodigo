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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMVCUEUP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDnRfX1VJ2PqDiz8J%2BQkzo7lzEOGxAzHhuAvc68BhijdAIgZTj0rip57ADJT8%2BE3AcJaJSRDyUzWRGDJ6%2F8ribQBBoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEsKLZzdHiaQzqA7bSrcA8baZf1x%2BOeDBMdf1IegHbBQ60JzEYD9nUwnmQhMrbeIAXRM4I5KO%2B3VUZAALArLh57E3bmKZSDlpYe179Tj0eI98RkjJdXmH5eI0UVMvLTifOC%2F%2Bq9rvwgwvJJklZixtx3D3PoT7QiuL732l6z%2F%2FAHk22ObvnAgMLU%2BdTf8oiXd0WAaGGVCfB1XbZM5IWNBj5LmQ0sjWHunwY7WOLKH5%2BB2GR2y7YQtkP7UvVXS93W5eWB30%2F4St8RAeTt%2BMSvgi26T%2B2ob2W7hAX1OSELf%2FrpTyFAkRcizAoEDAuYu3US8V0SL4DFnr5HExbQ8kZbeCyUOoK55OjcPytvv%2BOalHzNiBeEKNQQG%2BgztKDh8WZhL4gqUkkUbpXKOw%2BBJTgkRps1%2Bhok9F2VT7%2BziEVszcGayZMvi1LRPotxq8CNW79qPcLNNMrhLQxfdhnLdfuHGS2EYXBMA4imVO%2B00JMNmZVuMh4L1cFlwbwbTOkV18g6QaB8RPsP4WA418OV4kLTED%2BFa%2FcLwp23bUGP%2Bwj3Q%2BtUcm%2FExrChm%2FHb5jo2rKpPMKjvo7PbWgL6V%2BtgL7MqaUS4rqW%2BZ7toDODcDXhPaUookn83YjLV9eL8Og0GY%2BkZ5m5e6KTTApNnemB%2B1MLDnxckGOqUBxnQW4vGLIhxUJ8HrAqzRZnY6G4ZqQtMHB39lOCY3%2F86zgqUnZVPBNuQhexlET6ThjFgW3rLCEK7hbdXk%2FrBhH8AqsDyB8rbPShphVyk91rm47iqEjRAnhf8jphHwgqmEQroRcAhlcog0g47N%2FSKxacBgzBMFIHu1p%2B5f3xyPJfwPBnhxckavId2rxf7rD%2FgomW7gjTZx1T9SiU3OMomfnur44Gw1&X-Amz-Signature=09fb77b7f5488b9524c6d6bebeba446bf8566690b58c96119ed4beb405e8c4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

