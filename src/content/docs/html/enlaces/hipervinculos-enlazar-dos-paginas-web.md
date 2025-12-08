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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UOIHG76%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjYB1LDOsjtHl4G3HzH81dY93vAth8DcSJFk5GxRBRdAiEA5XPu6XKYwtUViEICw6%2FWoqw%2FaiAmxT5aA0bBK56%2F5YcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdf2yp2YqS0cTUA8CrcA8HVpqFa7scqPboybOXMfExsultX8mKhqSkGVYmX7vMcFgi0%2BpVGhcywq586k2KeufcCR4KqIUbZacLNhAb0jTMqoS%2BqYYTXjS2m4kp7oRFblj5sCQrUwEjaNDFAPfEB17cKtoBjfzUGlbgFr%2F2hejCw6bL%2F7Nrgbo5Bsq2aBgDBFRSem%2BJtz2iGw9T1%2Fkzsx4ZEUjMmcdk2XQUYTwVnqBRuzp364tni63s%2FyqTw4Un4%2FyFW2RW1JbZRBq9EMas5mXWxER9ld%2BxiGfwROsZTGNUKl6HPBm5%2FIjGF78JOLFputg0nkbjsIvoEodrow61QY8MorzCRX8Sj%2FEgCJaVMbqkwYewQftaIPlE%2Fyc3vPBlhlvMk7gghdi2mL1dz6pUzIbwvL1SuNO7%2FQ3gYme705%2F0IyJZFR%2Bgtm1Zj7tRgZ7qzdWSE17AQ1edehntBcR%2FnCnFW%2F9I6eY2VG8Oxx601eESPPKOKQMHxgiEXrj0Gq1tUmtRd30YZiLjgCWQIgfszzSwOZDmQO2QARoTv3pAqE%2FUq%2BPOu9PKSC7OQhw6gQ41iKjGsbtzzzDPH9dVUpbtXhcolTUHFSZJPUD6xY4sscPPHr24LKCxJ0yjhAYgNialI1xnpxfzbH7aF8Sg6MLLC3ckGOqUBM2PqCtaTqbJUO8ORmJi9JPlVUM2nSEseEFwa539JeP7u0UkzDp0A9muaS4jTCrf5qNoDSfvbv5cG45bfbNdD%2F1NoVxKBZc0m6ZceOLwZe6Av0eGjRZ2Hz55ge35FU016jrGf2dnpa12hCsQgqaZJpdqLs%2FzjjvwingxEPkiTSlVeux8oH1P1KkMn%2FSUEDIJ4U1Yns6okfXWExGx0d4IPUE8UpdT3&X-Amz-Signature=d416ddfc9aebfdfc0a54f50668c850f65d4efa0748fafe0e65f89d781fd879be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

