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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2W2AU5D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvr7bjyyfI1yEB83DGn%2FJj%2F4IkFebVKgehLsdeS5G2NAIgd73YnDed%2FrMrb4au2%2FVpVLdBLpA%2BjwzVzHzP3C9yE2Eq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGcX1xQWGARdHll%2B3yrcA3aZzaF3MLkCXPfIDuVYYEf7TdioGpFLSSuyms8JM6LurmSd639kx%2FJyE8BcT8QnZliXx35uG%2B3dRDCt%2FZM4xGqM0KOef5YOGF4IEVq6nYfxGLtGdsW6A0VhY%2F1OssDZbe0DLL4jPqq%2FlBwmfWL%2B88diqFuzqpJZ1wpMbh5n2YTbzVX8ge0cW6FU%2Fn%2FbX9DqYSahosTWq0ZMsW5%2BfArQRVn6lffeV9%2FrYPuj%2FU4Yj82v1Jvowt3CayR8TIrFkN%2B2Mm%2BxRLehaCITzPa2AA7CjsAIcLWGCMHUglnYuVwK8y07X2RgdCJ%2BPxVdLilaps7CAkQxWtt7d7oEIdNx4AtKjZZRqp3iubofYTPmVeZpNlOBogPPab9cBjwx7GlOx0QFx390oRt2zmiZAQl3HzpGn8acB66elu1vYcGnDLASAFXASuxj1hbi0DxQ7GKywpk4MW9T6JUDFq7xWcfgBEubEUOpP87zkwOQslwR2hgWNzc%2BEUUAWZeNAlAwCfYrVmnLHB5dNTdPCEvC8maRmiwVD4YxSgl3eq%2FZ105wmKTSwthAJdPsla5l4fae60PVGwql2iD402YLt74GK44xIqorp%2BXdwoqhLNUSX7HwgbB7XMDx%2BJNoNMGfmZ4Aj1OLMJSMyMkGOqUBHB1%2BDch%2BSkoChNwkmOU3DXkuwh8C8f9dsnkuoiw4EiMrwRe5wQFPt%2BLwcFEP9oVoWSE6mvnid58EZeN%2FQKFzi9hVZWLS6xylXTdtPT0nS0C4qgj%2F0DhemO5JdfB0TEJ0ejb%2BMSXzCszvNAL61xsjXnMh8GWTUtfFLX5Ni%2BKpgQlECRYtsSfzwmfLyx4eSqPzlYl75o3xxJVIYwSdroQj5Dboz7ze&X-Amz-Signature=ea97493228c10b64aba2e4294d284eff265bc93d0c6d0b21a92cda707f5fe104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

