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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645HZSXV2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYhq75zkYuiMBPclQ9XM9jfl6YImSDgkRufcMZfU5pcgIgE5%2BveOnB5saEO8EmSD94smrwxHcZGc1GcvT1wR9KOckq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEzqspft3xbf2SdZwyrcA2fK8MasdzS6gvX3m8%2BcGOFyvAFk9kvQ1HCBa9usJrN9nRbQF3KZ1nvv%2F8on50lY%2FF6HX0SD%2FVJ7knSdu0fkrwYTzB0SRdvgKQpYWYnV6ZpdsO16oBWTzDlmM1ieh2MmCFivEWUpt%2BD%2FxrjIuFz0Ppvr%2Ft%2Bpg7MOzNHxEGe%2BQqnsMpQrxrBnTxtwhi0v%2BRSTQPpk%2BbxHtp9JOSuw%2FIEDwfrxL1%2BA0d9XMC7LbM3t%2Budkgmr5wOSSP%2BxYBCloJj6sNUhWzlmZbiHepyHFKi66VaHhWKrpQ6zZHt%2FuiSfGKTktIzlXiZd6dToFKhYbLvRn8L%2B3gDG6NLrqV6JxM3XOSmxfuR5KbYRcrlPcn0JbhXOCNv0oqZPZXY7iLTNld%2FdvPVf6piGgg%2BuKXi10MAVLH9XBJzy6e5LRArBxsFZvVdU%2Bw7GhCuMBWQpCDiP12nlUKc1sA31YdaTQky20x76UpWn%2FOICrHhJKPPNNTXL2cbzcAfkrKF5Zq8d2bKps4543mfXAnt8ZaH5Iozwuu%2FDal0lO%2BLupwrIzXJ66le9%2FiEGn7%2B4inO8cNkGEGr0bzGGbCR%2FMxkXRKxsFmDnfNL5XK4zraKUWzrDpq08TLjwG5w8qEnw1hjiQhuHFWOj%2BMMSm0MkGOqUBbg2J%2BdZYpjgBpSbX4rpaNFa%2BEOvE3TqnErqIJlj5VtefH5DcsOsUbUk31WUpIdPo5npAkvAnw%2B6Q6bcaIRaWGQiiSe%2BGff71iFVbj60g66N1u8Xrz9ViqKEZO1Y0UreFjv03ikyT8gowuFVSbklRgdxQ1dyc6vJlhKqegDTf0FBdIflvvW1z3wrlNH8TAOu%2FE1GdLzxW0NusWX65lbcB5BbFxSaE&X-Amz-Signature=9980cf7ae4438da425acb3208383b0eb9d016a5a909fe21783ef7b1ecf8cb0f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

