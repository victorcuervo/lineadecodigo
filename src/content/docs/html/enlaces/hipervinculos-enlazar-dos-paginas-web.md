---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYA34I3M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T213417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKw21AOEdjf8Rz4jUXXKR4FzEGFGEyTLUtGxphedFbUAiEAiCz%2BtLJ4yAv62Vzsh9x8U2qUbV4uFNzjs0UepnW%2BqAUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7fG3HaELDdKN6XsircAxYi7tdYPVAtHpyByBoSakfv1x17dSjq0%2BgozkgHyWc0Pa4sJ7PDMcWFwAB6Iez7CW5leXOssniMOv0%2By0UP%2Fi8R8ZtDflxDGyejrcWEyUmp%2BpwN9vcUn9WIz22CIjXjmz5y1wDQACtT%2B1IGof2dIVuDXCPWdw%2B3R%2B83KqqjksVQTqIjQbcUKii5bmlk924WweeD1KrZl8imcRzdabLv6b57HKaUjVYkZMiLmp97k3d%2FJv%2F1uEd%2FCQWGKQ%2FNMqSO36PPsrC%2FDe8rvc9Dfm65%2FPIT5dQWrCdBawdw%2B26atl7UGCEObZ%2BOyIxPhJiQXRPPIXiZ5I%2BevByED7QMP0mRO9broIze1FqGPnFsyLpmsrvsRn8fdMFrXwOXsA1zHn2OPFQebdyMz%2Bs5AZytkqzoKaJFWq7g2kaOZnSi3%2BUMhE4K0dcUcMmybObzm6e0Krm5YnjiIOsyFIQ1gxaZODa5HSZeTkB6MAOQAs%2BRZquUDq18W7g%2F%2FkPBHwp8oARkiNXXqrQmaIg3WdF3Rvb3VBhxgBO0l9ljirE%2BRyqCeFPwJWaQ8ZzRr84Yk%2FJAzRRwfcb2C01gKSd%2B7v5PAK5V6PXjEjf3eJWL%2BrGicPcbFoKdSbkelAWIpaMOuyOneUM5MJqf4skGOqUB3LgSILQgnBonCaBtJaqW3hHaQkjnlNgcsHeOPDR5TxaJNDbjFCsZLlM%2FgTL44GBcj5zA1UAPShv4BEHSOY1mv41eehLYEvyfEOnfGahoJiTILNOYgXk6IS1lipVynzM22TFJHLnqXIUKzDyKGP4uaQniUvJV4Sxflq7M%2FRHAz5hv2SsAsXO5zGia9NdoR5%2B3nl2fOQR%2BcbxVjrVmb1Lb0JCTYq29&X-Amz-Signature=44a022b0274d02dd18c1b0c67696b7219e7baa269cfb7b08ac0beee32a237a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

