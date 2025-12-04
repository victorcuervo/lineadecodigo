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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPKHGD44%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIECy8QXLe48aVCn1cSzW9oN4R3UVWXaijwRBCJdggsxXAiA9Ajm46MiexwnmrG1tr9vQaGE3NWd1WuhquwdXpo5EdCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMKqqI8ykHnJV5rp4%2FKtwDlLY%2BAdqQgVrZo8etRJj8KLIqU58mAQ%2BW8EgqcxrhcbYuniXi%2BobCEDmerReDCJaHWmXL3YMnTeeVyXqoiDiJO2e%2BDnrYZNzboSHpPGihqudGLKMMVDGlaxyi6n69cGNKXk7p1t4w866h7iQuP%2Br%2BqLXwb4fNDg8aARInjr5poF3W0ERagf7qe%2Bct%2BpNW%2Fasi0BcaJM%2BFJ3OMiz7lvoAvVNz1urmJN3BFnBaHWmxI9ogfaIvqkqbbqGEA6J60TMLkwWaZMI%2BLxe5MEMaxVPVcYWIeaqfgld8t63KyAhVi7SHO1TuKrMO4gYGKXpFA0TYa2Plpl7RMjB22xH8JhVKfBvj6FDVrDOzUGtC7RfoUJ96YeGs6Msz2vf0Z46TNMgVrvyZwo6v6Bc9UExF6cv2LzbhOpXZbjoeQc8xb93k5wHqJYgYrN4iDEkl5%2BLE8hyEaXmfHbx2K4f7afgOIxjDDYXEC7i0TDj2sMCf4jc%2FVainQa%2Fkug%2BTM5OsztQwxZSYnjWrL8Pfh7ZmhMtDcc2PIy2kQhud0V7CMhwcUn0IxELGrPYOcJ%2BkwNCrMTLqUQ9JJ3PsMWKPgc%2B%2B7%2Blvu2cLXZ6kH6yUGq8g4euJe4QI5NwrMnRGyLLq%2BXAasBSAwt%2BjEyQY6pgFABc28FsquSRuzOXdMO8Cn2b4xagBPVEBGmN3CBOoY4BZSwueHbWP0WEapXa%2Bx25YLwVcAFI7eftOTg2uce34cdcRYkjuhAjiu2nSxU67fFRnwKx0%2B6%2BtmbMKf%2FDHHWzpFIFj%2Fs7BMM1qCd1%2F%2BjQA8RGW2M3WIV5H4rblK1yb2BEEetxfA7E6I5A84zicIbqnVymwKJqWjlNuMQ9Wojl1gRrIwwaK5&X-Amz-Signature=5fdeadedf3118ab52d888aa470750351d446e14fc18b04502982e8562122bdbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

