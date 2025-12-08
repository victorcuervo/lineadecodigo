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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O6XIXC5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClgLKJm2CsHVEPzxCEaMD9HTUEkk7TeDQbnRVE7d2cuAIhAIC7%2F1x4s%2Fd6fD97uRFzCNz3jS8Zs87fxczFytbQG8TNKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B%2BoOqAS3M8P86rK0q3AN8sYgX%2BnYOwZRCZRZWUFDu2KS7gae5HDm2WotN0GCZTlPmFjP2am1v5pa8LOovbUR%2B8o8muzi3ujhaevsx4t6DSeR4B9AJRdJAId1pv4xr7c2ukBwuCOImLVr7WspiUQzjruFWcJkofKHugR26AYfogEh17buTPsdi8J7Z1o4zcky1hd5fR6JH0LbgWOmayLDUx3RvPDLL2NkW8Prt3oJ%2Fw9e43cHG7T9RBI5MX010Vno65yQ2wMTdwUN9EoltLGguwQ3M%2BCgfk4QWBMk93xtyu23OGdQDL0pNt0TJQ3DvjFyZ2ZftvBZ%2FCC%2FHWHeFjXzsNj1j0AG4tlRtsFwL894YaJiQK68%2BpiIRL%2FUBDjYp65gVvx%2Bh5pT98kAGx%2FC8xc291OalgS%2B5Y3jt2HMoO2mphOYsSjlK6G%2FV%2BsDV74kIfuhK%2FFOngjbCfcE%2BpQr0OshJZtWC5zbbqnV3a8K4nAFszW%2BLB%2FUay9KfAeH7QlqYPgtrw6YEZjvN0rfi6NJhLSWktusSCHGAhicO2nvh%2ByHa9nBSQAooHNSHJyxH%2FpFtSUFX%2Ff8CiXgWOcaX0dEHKimgluGfC0ERJU5IBfQIZwlbdXwYrNgYuVdSYaWBf5%2Ff6r2N%2BlcqnRbclLDm6DD%2Bwt3JBjqkAaSlOkzb824svFw18aPd7xvOMK9L%2FjdzB8rRnstgrhD3tdbaQnw%2B%2B4arXoY9UkNaUbWeUKFUnIJBeITyujmR%2B7gm%2B%2FSwOH6bu%2B980NkPZDuDpaQSXXMGwRokD%2BnXedRQTT7XbAcOcxi%2BUtRcQNYKHcCR7yKpnY7gocXiActC4j1pJhQh2Gp7199uueBovSu2nb0Z35ZQdROkACFx0pfeicNUPAY%2F&X-Amz-Signature=5f1083b94454e9cd0f3535d17c53c004d1e10a2a87f2c39fade2c11d59d4d7ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

