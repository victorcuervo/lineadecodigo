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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4YJVAC5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvUKnBurlW3lSVBZWAnpppnKIxV55E1eJdBrdDpzrdrAIgGL0X4vNXhjNIydBG1WOKZntRK%2BX9vX54%2F93lwFBNnlMq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDHBKA5fLOy6KV5ihjSrcA4NAmxTphCA4qZeT%2F6qVI%2FZRp%2B%2FM6ujywk4Zu1UnTfnKyo3TmtB3uFjzSXT1wXrD9GfWcIVN2uF1KifeqUMfcpE%2BVSVg2yhFaHVVlbvmlLhW9VmA0LGUEP9NiM9e0n9%2F3yt79QPQD%2FzDn4ts%2F9Xcbfsc5difzLurwii6xBMNp97yi8hbt3cNZpSQbADhsQwIV1PFfA8JsazRgR3WT2DIXVvXaa8R4JrWAIwE7aDeNQReJA2lEWMxzS5JtWrKZLXwzQNomPjzSB4xwyX5I%2FMNHKAygnuH2l7%2B0K35k8UNpOCltWt%2Bdb9Fc%2BEyZ0g%2BeGAheIjtRYAfjIAaWhdMSk%2F3IvtzhMoeRDT8YAg8a2OfRqkhsHKEn%2BtKcLkvT1hPvTSE8EagZS4AUBc6nYCmAxqcplreVHzGoEHAX5NAQwf9z1RGhdUo1fQVXUxhdBjtDiL%2BVMFOz8Minhbc5OBkzIhcYvKJTbxq%2FGe5MCMWkDw%2BE7j9GpaR7H1UHgHDR8OnUcFwztYx4ZXA9jycLhCzBKlrQPFgCNz3HZXj0QocbFDHyNs4Np7iwcTW7Vi%2F6qLn7tQ%2BYi7urLeuLh4KDw8D2W63K7cdAioGeFdcNsmI50uneTCiOe4RWzZjcRmhhXIzMI7xy8kGOqUBMBHqjq7CjlVLtNZIak5gACFraH1uFrVaBLSJa3%2BjAMjv3iXNsTmG8CibD%2FGgQBDNYMfIbQBsbJt0WEPYjNyQN14H2uwC%2BLMjTOf2CSvreN6bvt8JCv23TQxzIVrX9cGO3mjwVEK0s5sbk5ucgzxUQRZ8l82YGtv1z4OVvBlbcTQUJvqFHyZQrAaKATXqYusvF19R3W%2BeLpVcSLNfAd%2FvpnjpUtNl&X-Amz-Signature=5f73cebbd2bd796ca0404fcce981695ff767ad17c99cf86c1b8ae05699305c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

