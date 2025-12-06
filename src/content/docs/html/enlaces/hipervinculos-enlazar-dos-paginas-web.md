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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MRXPEQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDL%2BbPgn7Hubk4tR1M%2BcxVgk14cebrRZTE6CtbimUQApAiBQBVe8D9Cpas4zALRjF6nWl8klW4fTEnIYgp297V7vCyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMDwrie%2BExlCeLjPPzKtwDMFW%2Bgmp7Usct5PpgYJH56OwKrPCOOxalx%2BKcgQwGlFzAPnxXUZzqj%2FPz3Qmqwxo4doQa0OlBVwiXDMRSsZjkPmvda0E%2BqTZEx3BC9OnFA4v6jrd7f083VrZaWxqgmnKyQd3QCb4jB5LZcKz2Dv6akvaWqVG8inYF0fyywNM6sUYZkQk5gm1oyTy7TMiViiMHdkRYErWaq2GP8j%2BytyTbNiWfxayFqbjlgJageY8bdUxj6W4%2FmTBBSMldNsW6NEknfhBGz3f65B%2B%2BlG8mvgmuEycXyE869lpSnV78KdAOYMbR9CeTEa4%2Fz1f6wCO7LJyW29l%2FEuNlQitmcZyFQk91FadzzxkdYGnAXsCvv2uNWpXNQkp%2B5qCcFlZqEK8SpeVC7GOQRPEkEo6t4GHN3jDI66jYRkN5AZhN%2Brk00z%2FRiTMkPQVoge0ARvn%2F56iDMhUqsVpQDJUnsDenfwHQrwYSXzIlAkjlQhOriqKc2JW8lQiZACBNNXBiYOPsM0B8cK9xoFl9T3pgQtCx2SaJCfIm7C0DSlP9FNecP1a0Y8Gc8xvrno5bFhYIz%2FDdNDRlfLQDYGRjHzknpp8UYUg3liUMMaoOHJP2Mlcf1Tq0ry%2FbIY4KcGHz90hTgMEwprYw7InQyQY6pgE6uMAP5cksCg%2FGIQIRG2pdADdISd6h4uXMjz9i3PN4Fo6l1wqs5b%2Bne5fMKfp8O7L%2BTmtzXU7dNgtLUtlQpDtpLa19U1xYAuBwEcQTFVlI3O9lBW%2FLUCRT6EbFknW9Zbg%2FZLARLfcd4oWkV0OIiAW7V3lYFykdN12Pq39YwYZj3xPoo8APluh%2BOxX9Usf883fn9puG0G9UNTpIo32NDFh5CJoSFDPq&X-Amz-Signature=1eac745ed5d543a1db9d5ba48e000831da3fefb191cb310f791261bbf93c2401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

