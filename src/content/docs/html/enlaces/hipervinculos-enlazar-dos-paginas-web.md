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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654PM5GCG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaQrUgmZfPHOdalLSQXiV7WUSGCu0x5Q7lLpqFTTuWjAiB8%2BpbQJ9T83fQIF1DBbOSHlodX68%2FxYiHcfMl%2F1XtCoyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMf5uea%2FZyWaA7W9pdKtwDQJydhRolb2Y1SEc3OpRr%2FqGMNu04L760Oy6VEY1Q%2BreqaqD9yn1pnO5LJbo7oomR%2BhSfDknGb0RWO7q0qkcD99BYYM4oN15YJyMg1%2FuArkdAXUOIE7%2F9qHqdBUKJkqyAqMQyU1i7lNl7oqH9kIReWOK2ygWIYAp9m7IC922280C47TxRE1q4yXvu1dvYz35pV%2BiWy%2BxzXdOzsXny0Ee0%2B%2FXVAtTSHoUPSaOwcd%2BRd%2FrIYhUWmJCTZXxADcnzh%2F53C1rWPqHVGfg3SP9Q9ysV0iItWyceib%2BUd4NFT8n3FrJ63iYVUCOF%2F4lRvFHGqdpBgx9rxvoeGwS%2Fhzl8BSm5Fe9oCcxAfJmrH7QLgLCPrSNsN4%2Fc08euFK%2B2V5AuUjLVcbs8U11grF0bqz%2BkYPtgwNKktBYOVm7qS%2FqU598QRgyvylx8P20LGxpYFeCLme%2FTVxf3t0xeYw7Rom24oNTSDGvh7Y4uRbh8KvrfdGRiXIxL%2BGo88Eosg0UXAcMGE8IQoFAQCeSSgdHUNPegAqLdvMnDcSNGsj%2FnvpIBejE5la4HblC1xVTNMiQNxcKBMmpvbvvwsvijFWOyF%2FOMwBljxvHGvCx5Zu30c15xgabMJBriR40CzIVRzas5auww1KfOyQY6pgGWpt1FfS3bcDByRfgU17cC%2BQeQ7eMiEvCbAgT7AgPGKUKx8TYTyxORxfZ8tSxdz1znPAqPSsMALYx1GnAv8ecSDL3GO01V1aCLYaQvrublec2JcWhEtU0yKAraJVJ9UgAX18Let525WDPE0SLcoFi8OKiYz%2BI%2FjDd1%2FnXBWs4f5fsaejysdMpLhF5FbZHvU2A48NFHR8h9yb2g3cXRhogeVqf7XBrd&X-Amz-Signature=3936952241ec47a8a282a423c9d35ea0ef6cdfc58cf4fcf279283f5182476bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

