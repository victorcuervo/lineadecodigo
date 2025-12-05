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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDMYD6EY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOLcW%2FtRc8UCB8mKh7tfPSVzprMbYQUefOLxzNLCfhhAiEAhwa6B3Wzu%2BVZ8dJGumb2dSt6k9X7m7HVzVPCDczKr8Yq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDUMvpdKeCO0h%2Br1YyrcA0luGpWxOciCSECv7HU%2Fkfoe%2BHNmiboo7QwHaDvxWUfr4Tm0sdB%2FR34sIX%2F9nBBoi8L8AE67EQeeXrVvbybE%2FB4otLmoHtLh%2Bik1BtpV4p0IGiLUWgU69et19NCU0%2F4Dfo2ZPT%2B6L2RGlPo97TkGA8FaOzXu158NkKYlOj%2FLiQefcye7tj2w4d3UD%2BRrfAFgjWcE2IdJzObX6arX1O%2B4ESuG%2FCDUcN1rJJkt7myEZxPIrpvB6NbcThjOaBmzn0ITuIz1RS3e%2BC8egkpRk8DHu1hdIsS2lpXMQJ92a8svigBIDn%2Ftf%2BFTmzvwyHaGkmbHjVTNdydu%2BtxmQIG6KdH25zKoI3ZbPNbyt6s76CcvfnOD6Nvphn9BppHRT0X6tgRLkWC3GlBNpkAQoZRj8LEh3TAgcAFA4gzyXk2kEniIeKBGj69eEEO481WBPaLcCyMGsBzUZ99YtZ1DP2P%2F4h4JlHVuS90%2F2AUPta%2FVINc7gBiSa%2BV%2BzDkdz8M%2BfXQNPRZZctHOgvXZ2O4gltMvgCqF9fOBK50GPmZx2x5WSsGuhsaXq4p17kfBHjeBZN9Pa%2BoDGj%2FJz2UPI9HUgcDH0udjnC1DC1J6GXiHAr1EpnS9LYuWmSon7yZJsx%2FRPXmbMN%2BMyMkGOqUBqsrElgGPDtYw1HsS%2FPXLv%2Bw9I4u4g%2Ba%2Bt7SsVC0Jy3qNK1vgMCrveiMLYAW7%2F2xsRj1LXwAGXnKK0Nr1OePwQMBwd8XzrtCHwBmWfjK1QJmfEVjljNopp6jaZlXAKF8GEBGgD1AFIipZLSMgyZUi0zN35xJh%2BfavVDU3tY0tD5emBQ8TNaVPy%2B1kaqcNxCyKpm1iVm8EQ%2F%2BQUQtDmyTquaC4T0Cg&X-Amz-Signature=ee7080da25390db426baa45c56de4ca60062d2cde4269e78cc75e5d7af17265c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

