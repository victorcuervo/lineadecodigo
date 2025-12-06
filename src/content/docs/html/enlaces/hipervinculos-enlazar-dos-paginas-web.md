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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y27GZ3FU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2CHEyFXMJXTOLU62Ud3aTOsrygE%2FpSmIAGXplz5UhbgIgPbdWS4WIS3ZfWhMKjYyYZr7A3WHyWRjq1cPsO19jKDkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFtNAKun08WM92HElyrcAzXePu7eGyqgOym%2BZtx3p3VHacYlEjrN%2B1dtJU5iwMOLeitHr7e9jQta9Whzq%2B7fsGHl3G0Tj%2FvQemjYEi05YnLXP%2FtZUC17K5xkm0UcK378588Y1ZHUm5vq%2F%2Bv8Y611Ryv51es16LTxSkT0cPQjMbs8iBhUZEj5L2BRC2ubIRRobOp5b594PxM67pzoi88P9IOaQEYMQdlF%2FJQQ4THQrUtFEBo%2FTH%2BWlrVdHDUkF7oaTlBvRqiZ2VHqcVldH%2FvON91sXtHSJkAz2zpR74BIe9fAQTropUToR7C4Or4Sj6rdy2ReD5uSk4eHbXUShg0%2FY24RT%2Fm3GYLI8V1BpIhrjZhO2%2FfcDEy6sHDztQQuowJB%2FNb6xiaSfwwrYqOBDEgjMpJXiQePMeYAR8WgtxpNiNoAURhUKRUXdwim9ywN5d8kSYM%2Fo%2BztHbpn7MSTOsmZxh0ykmb0wPHZdpVk3Jo7BmRXCqSWZ3Bqf2bBBL9z2Fxxzk3S%2B4YwjmMjpe32mrAZt%2BC5IaDHmTi0R63elQQ8Itjw7FiyK0Kr6DfAd73Ux9FaugKn3Pl9qF5jY17CL166NIWEcTSOXYISpHSS%2BBkiedkrxyGQylo6jzl1sc13qCXZFJjsfJY1FXMRHa7yMPbD0ckGOqUBZFUmill6L7%2FawTUcU2EFGMHbIlb4FVpgoSsqg14N8AnvQmBBS5OxkOKW8gx80wbRV7fdQibTrLClo9q9x%2FJZALUEE3mhQu%2Be5L1nfdrosoqY0EYEET5A0FuR0j2OsFIHLzTMOlYDSBnUEpenAMYAFrVvbJpDZKh8QQ35JAbsWHkUL4p1BhJ3cZHwgUOLbRjuHadlz08RS3dwkQB0d6%2BLknn6MOfP&X-Amz-Signature=44a18587474fd3cda75756fd96825a5a76aa186f94284a146924bab29011f04d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

