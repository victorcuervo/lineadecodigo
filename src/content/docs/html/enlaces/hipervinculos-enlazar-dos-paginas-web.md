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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MSVQ3SK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrK3uLfDaFB14Zz6iKJAl7ClNUv04gInS%2Bh7dk0eCKIAiEAr7%2FjW3p3zwmqoTLDOFsD6E83h56I4GckCWV9WD1t0RQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEGfiy9Ynx5rQH2rircA%2BOXsKJz1v5qt37eDgeFIWX0Q0MM6KhHSZJSkp1M5AbVW%2FOJke1X8aaij0yC93l7EuL1Jx66stHzug89jwykqUQVnIt2DXPs%2FxTakK3EcGK0YAwHXmBrB6Qn%2F2ctQvSRuZ%2F5yZgCCSMcGaVU0%2BjpmX3yudjJ5EU6olMzNOr3fSKUpoTM9326hwYZ8R3tZi9PqN77gwxhx6Iaulb8dP71eeMbEW1zz0Ec%2BC7LGTtCCShg4Vi8JHIVf1vgDD%2FEPkRBsB%2BuUgrSbxgqXvNxNGZsqM%2FRxmiWB2Ta6hBS8EysgT6TPWF6THoSrFrAwXEH1v4z5Ffyu%2Bmuy5EnMIqA%2B9DQW%2FSLRtr6m3cq5NbizBXgZW%2BOC3B0nqvXWrdniWBthbo1%2FgQ6F76BnV6fCYxvsU%2FjpZNzs6MnoVvmghDLl0gepxqtltikGZL%2F53ObeLTFLah%2Fn%2F2LUIrnLUzYmcIGievbIO%2BDHJ6dGp4e174LbMoDYLXafPQeXCnBLmSqMrkUNzwt8frVXCkp2dYlPJnZf6zgoM7uPiz9ezcm3NoSpeHxJukcWqDDN6j0gHFkeyTt%2BRoyu1VS7HADZvpuMislS3OpViExhArJU4SvnFdWEOzuFQGtM%2BEWmsV4at5Bvh9%2BMN661skGOqUBqrdRuHGadrPHlRh4NW6V1IC9ENO2QUeLP3TNDWo0ft4Pnv1JkClsJ%2Bp1jQ77SMi1N%2BVq7Qbkh4q0pkdaXV1rsWsn%2Fsl6qwGj%2F%2F6mu4ulsRePxXDAzVDLJDiRfVvcoiLkTKZnaci9QtG6IvM%2FrEekhqijECVnIATmD5BzgtsSr9zZ22tc3F%2BJco36BXS8R4NUfV7qih6UyRRr%2BA4szHuf8ni9UlTE&X-Amz-Signature=62c87cf7c509f7abc2afc60174fea8d913e75e43596c95ad83b51113a788206e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

