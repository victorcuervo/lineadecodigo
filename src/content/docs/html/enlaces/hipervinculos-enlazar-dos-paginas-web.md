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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICOTISW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEPk%2BC3z2NHFa34HmWE9lq8s3OGpH4EC3%2F%2BAVFFI4h1AIgLsClhH9PWUw%2FDtRGHDjcaA7%2FU5W%2BF8pLemYD73ITMg4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDHw46k2NUYnjfj8rmyrcA8cq81UHICTpmUzjDbgA2FxOAcrqlmq7yrNiDw%2FZZekn61lNUFNZ7NhkmvJMctQVdtW04VGswLJIW9L1sm%2FAL1kFE%2B%2BxBhMjQyA33KG9EentI2ERFCV9q89%2FfZfUJ4NlYwzk31DamVfOda%2FA8oYIP3DAyWu6bwQbFKaSb6LY8FFZgHqtD2xLo6NEZ27e%2FX2vnVumWwpbMLE3iuUsCmZrqXulhhe9MiueDsXX95lnX%2FdfjK31Vlv%2B%2BJMQ0Eh5sCb88TNoIypQV3lL8bG9MfcX%2B9SZrEPqRP3xFJrJRHEow%2FQTr0lMDzxc56QA%2BeSCr1Gpj9CcDnYNXZAqJLJ6c8LWhDrfO5YUmgb5teOjCmoNuIeFhKn%2FKEMV4JxXWNs0YY5oc247zMdmsQrV97KCeWaWMXoZ3J10cBkOGHO%2FChB2DB%2FBSamy8fwV3%2BiqiudRKUOLLAbI5T3Y5jNL2tnomztjh5GJS4V%2B%2BZQosM2u93kmoCuEtvpmV1UPZrUSNVvUQg2dFuPuerNjdXnQA86%2BrZSD3St124pWQ0W%2Fuqo8%2BCIiNahpcA6UBZ3fmmiiXmRKhBg0WGNQG9O%2BUCjEKrnJgdYaWKDzJJaUWtsm%2BhHhPf4STzGs7YR7gBOxKsxA63CDMKDTyskGOqUBtYPFVAW%2FwnIx2E4fF7dwEGHvaax9OAuWAL0Fwp2yYc8oci8rUxvFEbVTWaTXIol7rbn6QvpNctBeJRQtDsL2VnxBdpG%2FqKjqDTlLXgEo4vxu0WXIZKGUVwp1S1UMzOxff8lsn99U44rKrGvLRHDA0KBdOTb%2ByaxNFkyfpeDt6KVq1GDhfyXJkTN3oQuYpZQa4h0DS0El1xMR0FKNZquHN4VHnvsb&X-Amz-Signature=2636eddfd5ce604c52ab497d6497ce1209d310eb5d46076e16a674fc04cbc860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

