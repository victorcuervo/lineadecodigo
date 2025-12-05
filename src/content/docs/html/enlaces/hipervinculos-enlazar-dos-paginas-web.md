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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDEJD6WF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T202534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPP3gN7lDfRCmX53qV2USbPRtxLZoUN7awbcsWFYvzGAiEA2DFnXf1zfvtpZvziTWd0PCwVbFFgN7UUj0%2Fsv792gb0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBbdI1vy1BJMbxuusCrcAzH%2BOJnLp9OISK9ZJGNDZ2RwNIkSc%2FtktwCfxJHPYrAwQf1eQ4ygoAJUi0gLA6ekqlzRP8zPNZN1MBwwo44C24EoEa47SWrZASwPk2fylBPo%2Bnb8oPKDVzbRUrAEHDMyj3KAI184ntP2zd9pnEsWYTh%2BYyUyvy%2FSs5EWe7x6fSElsxHICTEtc79WeUC%2FENKsytwpaytg2wDGOChqUeWekzxeNQ37oPhmHt87t6hRpNkPjgYh1fHpi%2B9MCOlBrkJIiQeKUX4ytrEMbtq2LnpCRVKU%2FCX3JEB4tfaYhmeG1zwhr6%2F%2BXjszg9fw0RmGa1Nwwp1enjapcM8HitOrqeVwQuRPIQhtbGiMHDR1tkvCNuL%2FXTgTS10XqJnkPQVcrM8%2FXP0%2BZGXdI4KCSSjIfzUV0w3UR%2Fkfm%2BZJftPsoJakZthRyDw8Lv1db1trNc2JGBSOFquM2ly9URTEnzvesX1G8M9aBbnlyku6T8YA1jEEuaEdc%2FbjODUvcdK%2BFMGpx7Q1F7VPtUONKxy%2BzLWS%2FSFSGecM0OZASSmid40xwDiO9GVaqOwp6kniiZxY8Z9G4tUsPvdX61d4MU6DdJQmNSuaaK88DsIfGDQghkjkzLh1XlZioYaXyKU7qfBP%2B35jMLD2y8kGOqUB4BX1BV1pP0GJZJFJ%2F6RsT475%2FSgItojiH7nL0zP1a6SIbWK4ZdMa6mopX0tKHiG8afI6MjwaNKDhUD3Sut21ho55HRXA4pwJOHIVIwzj11k73l0%2Fsx8iSg0voq9HVyPARul92JU53N9njaQ4xCQtNqsk1teSx9EehoWtpRM1qBEl3h%2FKRubcoe80rh%2BaLHD%2FtqYeneyxMVPO4xrgmumxnyD3VGQp&X-Amz-Signature=2c7ee23fd8664ec77de416840203c406cb3f2c6c1fdfae63421e2c66d1bd6a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

