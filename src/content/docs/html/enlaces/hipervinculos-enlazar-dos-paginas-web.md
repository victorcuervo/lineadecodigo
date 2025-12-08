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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIKIAYPW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkNiYagJ0ACv7M%2FTcDR3zm%2B%2FtS3qihefyz6MT9fiBJXgIhAKxqq8K3gIMnFOWbkJxzVGyijSnPbp1MBGOXGEhNaxzAKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh4IVoPXqEYaHLWCcq3AMig%2B%2FraERzdSHpxAqOvv7ZYH6gPRDAHAFrBx%2F0qrUxgAD5o42NgG4zIhcfybjJ4NfDanU8nlPh3tS0GeCQO4%2FdeOT%2FuS5%2Fb9%2FjD0mPYT9r88jCIdUrSk6vosnUAxrRn8HjWtg9E%2FVvOiyzptAjhEtZjsrnUIWOiQWaFR%2B8OIcpAWX6TSY8pJELSaklKpw2K7mLxTjHROduGd%2FoIKVFZ%2BPAzIQ5HDsLonASZg2gHmchFRx9VhCy84aQn6bm2w8RwnzxBqTgqiXOY9iC2iz%2BJC6%2Fd3dLGM42lEjVY79SoDUo5TzzD7MvjU3mg29LAPbc0d%2FJXlnydfTOf4%2F0LDowFGSesdg3C0Q2eDjpUXSxjj43ZSjXBG5kGpNxCihLsJzsk8rhaWgzTQcuHOtnrl3%2FHon1qSFYzLX8WKLKw5e2SfDAy82n91yrLbb8PgqgJeEhWG6nl%2B9G%2FzWLtuBf3NyWSF%2FMfhGo7tCdJ5liBz2%2BXnHoPS0ItM6WwdJDqCfTzmi48OaA3E7lJCex0Nv1krvmJbpdPISZBuYgXt62RoV8bXSqSI997C4OGE2K31%2FIy5Y7d9wlJpCnTx%2F9ibcp9W5b%2FjPGEKtkBgB9z9WF6wJsHnI4yufubnZvph7iq1Y4vjDIj9vJBjqkAWMmXMOLuvgeSU%2FI%2BQndYuT2YVhof1Bzz1xFOs%2B3e1PQmwbvCjzo%2FegkTJnhVlDPGU9RKxM7%2F9ufeuWEbfe%2Fd0%2BxdTVD8kt2UdyDDaqcah41aUVLZT0eTDl3qGDjIFME2K9NpcKymNZTcAov4IQiVHTfjPBZ5vr7w0tzYsDyY0YdlhNoWGaqUSUsjUA5CRj8fsf1j84FhIVjn32YRIryYB0Fuf%2F8&X-Amz-Signature=5e5b382ad9dcf4abbec0975f911468eeef11738eb1fe0bc4d707401eb2e00955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

