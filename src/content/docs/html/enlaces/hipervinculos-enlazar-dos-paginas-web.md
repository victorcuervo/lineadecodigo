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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFW2RN5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRwtat1dZC3bw98jQbFH8MDFEzay4%2BGWaRuKghUZOMdAiEAtYVBSEAAcf7MQyLLpijLc32cO8XHUgs0AsnBGnYQCnkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDG3%2BKmrKjTSaN1gemircA5ZdK9WZSx2cOsOIuOZf5yyeP37QuhzN3CuTUyA%2Ftx5RYU2PeE2aO5zlg4zWXy6zoCZUhqO7VZMeTc60eWB9HUXhGPFfKb3MIVWOdlxWnxaM22xwEuf43Q%2BZQ62lCPlhXU500uCd5nU64ectqGxmoiPE5HKshj7iq6sgVgZrAbV1FdcMBXTNq0D%2Bvj6nGwZdZ3nOKrRwCmcWvI1lXEw1xHCQZLj0e0Asif3XOmuT3dWIAI4qGhakrH2keO2rNvwiMlsC7Wf%2FQELCFUUQfzOUF2QKmmeyayY8RP7RhPzOYArEuJiHTqs7h49DcpaxwVrf7DPAA8%2FCd6wwbzUvABUY2IGPuvyX2O1OY6jK2cbrs%2BkfR5kqhl0m4szY1zlBTUymYSYySVQge0LvgzeIyZBab7rESrp%2BpoVsdtXhqeFCQeOoD6TIBfYzk5zs5dbYGotcQ4APTgAm2ny6%2BBbYYoS0fv%2F7FOoWIdex29V4oTwMq8Waw3IaQCIIS4pg5Zy3IUrCplhd37rTIfm0TJO5wUACTLp3nYuxmBX1GhM9MD2MoXM%2B%2BpU2xokVmF4MQkgBGq3XtGTrF%2BkRMIclOntyP7sn%2Bz1jpgHIKscfGCrCtg28YlroBAOGFdRt6xIhm%2FF3MKG8z8kGOqUBl2FQcHE1Cl3QLTeFkyUReebCLx30YTMlh9puhXO%2Bw0f67Dk9ylah0cypbYtq7HslJSrjjxHD1AFR1vkdIfbPYNkHO%2B8BCE5gS4JGE2yJLFmxmZwtiJbxJrNdEcmKDlKpntobw87t7xuePKdDjWWTpDcF4GBqSZMWFJdGY6W1iyGOzuvfxpdtGobAj2kdmoGSMi5yLrcRif3fefi9d9mq8bVnvDIh&X-Amz-Signature=e2216261245eda062e70c990ead8470d02ad35ea53a7b3e1d442a8a854202e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

