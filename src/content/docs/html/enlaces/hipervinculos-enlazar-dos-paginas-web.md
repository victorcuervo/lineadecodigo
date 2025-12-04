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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE5OCSF5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0nkOVtPQLJWlle5IiCBIsGVzrlv3dPzsha%2B3bC4zJKAIhALg9pYerU%2BEtzF%2FIeOEJki2qFOLgq1tz6AYmBlHBWCFiKv8DCEkQABoMNjM3NDIzMTgzODA1IgyxVaM5VhYe16FWoFoq3ANj5Kqm4ph5gGGHn6WXstyF3rEKeotvGqDnR1Kc8L7NaWXoBNUY8nMI8%2FZ5X7hkTYRCeydOhujYyS5BtrCJlxN81BW3LwCYOCUfvzjWWn2%2BriHLjVVrdlWeQavCn51FWdbP%2BDbN%2BdaaZOvUpHJPIzs5Mq5VC6QAZQcIggT7dnQTsjRj%2FFyIAdk0q61G6861vwggPaqOciXwGRJCdQPtgzimZIjoAI3u3k0mZLu99HCGf5T%2B1DnHm%2BX4e%2FcicuX3dmeBTcb2%2FwkmL9MvlNMvwuJMG9E%2BUMkohld%2BOxhYgQy9r7HsNoIcjrojoSGYjDD4KpC%2FaJ2DmgQoAnPEmSqH0eaOnfkl7VdIk6qy%2BA2TlL8D7Cc7PGXnSW5d6HryrPtC8t8T47Y%2BjE1z74lHYiV2sf1oBfpoj2nzF%2FRyMGl0f%2FFfViVi85oJpWIeSyGGXLK5qq4Be%2FiMGFjZD8ZqnyRdiHZ94vcMRWJBJ4HZWhzDvsyYU209ui5%2Fvk3AyAIdgneBSCCP0ddpqMh78iZQLrtb2%2FDPScQVVEG%2FbI9ZWuvl9AFYfJyYmTtHqazDr%2FU%2FCTTMTRXZJee%2B3Y6cfnHdcBLNzOS0McdKg676aKtX9mkIiI4CK04z2IrxZHiZVlyaMjCD3MbJBjqkASFfUS9nWkuRZr9jPP2KTs0vm%2BkDq%2FgImwiC2E9%2B2hnasGkUbC4zmvDLl96ES5TloVg%2F4lWUJbhbWHSMUYEpDimSGXEPY3QxdlmCfRBhSfanqLsx2nWr1tcoD7Cf06etvsTCXcM%2Br7iCo9xe3PXRfZUMdQISHKLzzVrPtpgtECsXK4%2FdqUQ%2Ff6JsdpgFhMcy4uFzqkiGUSBB3TWUki%2BBF9ZVKUWi&X-Amz-Signature=8ebf620455bfb7b1e2bcd1507305ff669fd88934c69797ccfc161d4c68a20297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

