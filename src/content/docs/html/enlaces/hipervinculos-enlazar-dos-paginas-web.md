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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YEJO777%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExo58TGLhN%2B7xGzeRaR%2Fw83ecrBonAU5Cw2wZV4kvqaAiEAyY4PS4Mc2oc%2Bl0yEcGjFrtGX3mHS4w%2F18lVH5qfMk7cq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCDoLHdfLP9NPaUCbCrcAwCB7IPai5Ys%2BiyeopcVe7qW%2BiM4PJFlXuHzY%2F1u7ChgTr6FhaqLNP8NvuVpO8jip5aqpUxEVGnzIGsVagll%2BAxgFI1bL5UVW8lx2idjcLP3F3j2o5HSn2oaAu%2B1Z7J2c%2BpQ9SU%2FWco3o2Y45HW2LCh76ev9Un5h9KlZaEpNvH0bGMdSUmMb03c%2Fa6rrO%2BzwT4Oqi8a8iaGrWfaF0%2B62nQU6AUHDATK6o2xUNDq5%2FUwf6vIlhz%2F8VpangP1T%2FBocVc2HDADx%2BjbRl8NZo9GTqOfbMjidjXVtld0tniUwYDtDglyopW8xY90gfrtXIonzRL45EKNmTHOkh8vLZRMD%2FqwhF3E6kTj0NdwTPifD8ASC0o1Ud38IMKp5aJzGS8TfCUGx1F8n1YMgln19UYx4ysYl39B6c1Y01wDJYnIfWTa9NBCGU7Yqy9YHvolJcCyBa71RC2cBIdEEJUPRGSb9m8mN1T0MUIyGH0kOGoE5Z9hFCNcGxj%2FblAKNBBiDQK4nN6bz6eRSYsXo2YroiHj3AUAFIUe3ZvYyZCkR8i%2Bi%2BvKBc57CDXq009mpWhhBch1zYDx3smnCipGwdKiM7YyVflJGRyTWSkKS2Ah55%2FtW%2FMVfQ8g3QA%2FyvtiHZfNCMJmnzskGOqUB1vE%2BfSLG6SpDvpaiAB697nf7Eobcgpwl3FgOCwQbq3Cm5I4vhQcPss6rOqf61zS9XvoROa4PJ1p4Qqdn%2BNWFNTBxAMtb5xSfifp613qW6IMNc1p4jb3Vyc1SYq7GdE3XAF4LpXU6mMTn5B%2BijQKJ6V8%2F4zKSGvpVCdGIqEA3mfApKUiBrfq%2FGtcD1rMZnUblXECOvrPSAYZCBP%2BFZwnvuTTvLFxl&X-Amz-Signature=ae0635c0e5a81aeb93f75e6d54c64e0ef55ef56782166e57472a84014dda5168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

