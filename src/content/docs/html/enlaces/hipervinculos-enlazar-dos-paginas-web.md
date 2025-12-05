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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBDFLTNC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeDy9Pu7A7dOHQCDCNhSO%2FaDF785MuEBnvFkfhLRPy2AIhAMoGDtpBEu9grBW7IU7%2F5tIebh149mLAKzDscASGs9itKv8DCFUQABoMNjM3NDIzMTgzODA1IgxlQzDY1B0rLSlU7Mkq3AOvcR3av7%2BEbqvkeha65NPUq6u4SMWPoJO%2FIUAuHxhK6OVMjEVaRCkBDGA2LuTIupBg80Qvb2K8B%2FvlwGSDg3NX9N24hPE%2BL4Xhf3iWgkPNRavI2UPgOFVOPdWpd1gkGSjb%2BQ6iPcDZzj18Gf%2BfdRWNQ0jMHY%2Fnl%2Fdv8znGrebCbpaml5fkOQi4flSFedbbevC6gXKtinwKoXGO77PebDOkfmIvVEGjIidGAC6hZlktlyOhr4s8KjWaIv25uXwS6lwqqCPa%2FW8u0XLu9Dl2E%2F7QuJrSbErEKuGkXBc3%2F%2BqUtibm3bXfytkbhNWjPvZN98nl8AxzxcqJGRwaFFs%2Fsz980cwUCozheNUUFiRqNCb9FSQKSfmKJyHWCTBISO669E8PV2k9INijUC46KhvVGRHn4Og5HaFZI%2B5H%2BtZDpnykT%2BTNUE%2FGDZ17FXp5g3sYEO%2FkYCvUD7s6f9Og%2F2R2LKVCec06MVVCMiW9psib1QhfMTTCY0Pvvhl60a%2BVOedPOF99%2Bwp5tUdb0qDwsz0sz%2BLBc5EpsuJ6E00XvQ0xyM7Ujwg8QC5gDL9rJcmLwBJgroWYD4jy5rMOmwKpMdjnD%2FM2kzSl5Jen0jN5tlC9F3fMqK1Gbf%2FGL%2FdITgKM3DDxsMnJBjqkASlDkhkAuNpxPmLwLYlfQfs7yZe%2BGxkUlkNk%2F4QoMYK5Li6b7xdx27dV%2BnsgByqerqHRilf9ex8zeLhXBs7cFSgFMrMfk9iiVMWt34QazucFAMpqnZv0e9kell%2B5G8omYd2xnY7MXSHEKWGj6a9iTbWcPxSLBv6dLUQF08l%2BYyzjlCRuo5aHYhkpAiXhYxZz16PZSSdDfSezDGR89JiXsvFIUaMu&X-Amz-Signature=91613e24ca85e5804df57aad663504d447c623d5da746f19c08de53d613246e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

