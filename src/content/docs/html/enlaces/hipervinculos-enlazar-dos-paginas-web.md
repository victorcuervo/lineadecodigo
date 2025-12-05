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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3RHAX4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPobA%2F%2FIn3Mv4IupF0GcDYXnEQcSzPW79db7kVy8TQ%2FAiEA2W8eaJrukVbjMU9ERR9GmwAW3K%2B1%2Bpdxz540ZpvMyy0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJRiV%2Fxo%2F37rSAY7SyrcA04cu5hBroH5kBeaOCzzp0FIK%2BAmGKSUv1wSs85%2B9FRamN1d%2BgnUu%2F8gvJpPh4WktZeQ7zyXrkdaumvtQyjBMMIRb0HIF1CWODG1We67RK0TI8s8E80nTMtAlWqFNocFB8YOeTqieIVKYZ3W2NzKNDSePNT8klAdG476dlayveJLGoqjo4rqhMDZWDZNiG2i0fpPxnDbvHy0P09KsfDSkOGWTqd1AC4zwj1h%2B%2FhE3g98O0ugS1TtU2sAip47V2f4l88rcJJPaKUaqVPKL1FCFZzYlxBTD9fW6m%2F795vhRkIpIi3AUOK5PXyQ6clMVvxy%2B%2FCYo9SEJJQxRuAlBO3H9hdvtIgYvGzYtePTKqYcdFMt2yICSUkum9%2FlFYMacZzQ%2FYGtCtG9%2Bee8wZzK3mvnzPy%2FbpdlRq16h25LR2YHP9mGKrx6LQ2BKtUZjmwn%2F4oXkeW8fih2mmMsXapa0c1CpWLtHvlJkF1S0emafXXLoCu55mHwiK7xd9SMTvXuV15K8btTqgnid%2BvgXLFZLPOHYqOS%2BWyLwPjIoTfqUuNGKWkuSu3m7hvX6%2FH7RCsIT5MaPmpigkuSNyYSiTfy9yUMcYVMf9%2BHS03gN5evttbnKoYbX531pm%2F6AKf37XxDMOKmyckGOqUBH1BiF4Lva5Qvyt%2FZYXX%2BN3YHZprf8nf4bPAUJyaDtmFGcLRoqmLOWhtMrgUv4cKF9B9D96XZBUrSzX6jCUbP8VO7CS3PiL4OnH8%2BqH2OCw6dI0Wyf1yN0ugwRttIc5%2F0TXqJd3Jg0CP8hhS%2FTB4xSlPE1qHx3vDn7KYda67PDSPABnYAJMD534NUCi4JCi2V%2F4oo9LTE%2BtYnb6qjpvTqFQhFcANh&X-Amz-Signature=fe9f8e9bf2257c4f527f2337b7c0870c0ad209093cd2d086512ee9cb7ee2495f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

