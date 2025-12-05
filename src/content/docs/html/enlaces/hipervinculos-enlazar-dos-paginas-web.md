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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VBJZHKE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDReT75xdALJNM7CQmCJpQRLp%2Fs1IEyGuQ95VZ1rXZ9rAIgel4n2ofoGbb7VY2t%2FxwtHuHbRLSHoZI9iQi5bPE6GvMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLcZOvNBXq3AjjeeDyrcA9jz9HBaECSp1KvLHLKo8gbM%2BasxEAUS%2F2ulr%2FFUxFB26LwO02CeULXi6kV%2BxsC7VUYjz3fHtgoxX8LnFv5Fb7PKDc%2Bms91PVHfYdvjMBFzGzoVrAyudFGSpOj1LB52B6NfrRvqfHkHhl4%2FSbT51CtM3R8KJL2ve1S3AwpJSxZqTjN8WXev1DNPtDseNarcm5blPMY6NKth0OWpWR%2BV0N0N8d9q7OlwvBfSFBpDZQhcDN9OpYn94GXoTtRW7VVjkhijv%2B%2BbNaijxZFM%2BdvIIPGvZcINC1DxaEryW4tHhw%2BE1IbqE2YT%2FLGDeJCWNqQeVq4fzHGqAV66MnOmRwo3fhT7SmEfVvv2Gl%2FbMS5jDzC%2BNJ1x5V5anMlo2Q7PpFwyn2ID8L4ECoucpwscQcD4v2kfNJ6dnRcxQ%2BMMeQ4HNpAAN8GfzY5HmU%2FljiFtcd%2BKEBw%2B0%2FCtEo5hLbvlk1mU9W1a1jqGgE32pMm%2FBDPEnXS5kRopLa%2BrtkVRGAHexnmDNz2f4ug0gyyqC2CvZYHzwHadfYVAK0LXlTXQJSo%2BnxcQz5bq3RQ47y0at7pa%2BwLMk%2B%2FJhF9u7tGscHu9ExRUDS9XaJTutpzV60KQ4rNCwNO3mt7Vkhb%2FvE5ozhdByMLqyyckGOqUBPb%2FfXAEB%2BQ26skQ2auidRcr%2F0I1AFVgtxqAagwEOyswBeYXRCguMnk0qp2a3bSB2AKjSxt1oec8FM1whziukmlisRKdPrfS5AA%2BPZbKdt9NG3VJvgpl6UCCi81GcLbYZUg48WkEgyhoV1GDkrjbbkf%2FZXse6MNm08KmKtdN9OEyunAgL8VrXDvsL8Dfcf5fTVabEhe%2Fg6sxODvbu2PclOefi%2BpTq&X-Amz-Signature=e006f1920f160ba970dc562f08c1f9f2203b922005a921146929fe2d576f886f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

