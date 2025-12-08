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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLAYNESG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFv6voSpClDWwwVkTlgOmOi9BU4oSBrECtd9dDaLF4fvAiEA3fi9w4AqJDL%2FxN41f7x1vpA6N%2BYPDwIh7bWu%2FMc2%2BzIqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA6bByeWqJMnrMJcyrcAzlKjAnDwMfTj%2BfixNp41DG5zvLL%2FxtqirOHCpcu%2Bdqusag18dLsW57gResToVOEjSHLqECk0stYZNwyxc%2Fsrfd69hP4HwW7MZNCCumUuwevoilbD%2B%2BWmefte6N9xRy%2FFNcE9GvgzlFE9o6HiJxDIlwZEK5MtdpKpYmiEfzQ62NAmA6C259dRxyAG3mzElTLfe5dOrXliyOF12hhdSj3%2FBXEWDuBYzx%2BtSBDNwqimwI1BbF9Bn3xOYq5FPdbPtjOFWrwRagI3xq%2Foq3GLbSJ%2FgxkA%2BPmeIULVOarxToLM2Dz2ccdj5M7KbbxK%2BRDklDpU1YutKgydUmFNj4PT4gM0ZUN7K0pOg9u2%2Fx%2BVtBHVpR1lzJmB4K8LiU8mIQJNQ6S7S8HgLvxqavmBSFSabR%2FNQkW7H1cb6%2BcvVISL9si1P55hynYg8LEtBXML0wRq3jTQ5a0ksLf3Uey5KTxgd8BBvYhYIofSrHSwSzdWmP%2FzAtChA22m0FdmL8%2BERBa5%2FCwVsncsgk6CwgyiWZGEbVVFzg88nuFUh2jqHjz8CUaFYcS9qtfopbigd4DodN33X6UxFB%2B%2F43Q0pIt%2FjPFgMIdwrMGKb1o41NHaQ%2FbxkCCUsm1fSUchtYSDrIOJHy2MMTk28kGOqUByrWOI%2BpnmJ1t6Wn7NoQRrAuocC1IAdGtjCOuQicMG83gy6lv8K9TbukjqtQcwWc%2BnMHla%2BBE8CWj%2BSV%2F8Mu2%2B8DENJLzusJp1ND3YvfEotP5j5U9crQMXhYMo78UZro%2Bv9KJETuhOvl2Nxu2%2FABDfL%2FYm24Tmtaz%2BeX62JFzG2Oi1TgXkFPPUJdjSQB7hY2ukZndBIwrbcBSr9PH7BVzWa4ECsj5&X-Amz-Signature=a0e1937e8a8f3e9e947d0a8a754c237ba4e3308ba17ac7373de69cbd679a4172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

