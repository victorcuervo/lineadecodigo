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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OKBBJWX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiSjEFX7ccbZn7Z9Vhw63YwKKz0vNCw3SKCHP%2Bw8OGgAiEAs0729WwGtgb5bFMtPwd6cBWoqVUtFwVuC9%2Bo5B0sOGMqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFBURhbF6y%2BKxryjyrcAwddmd1TJeR2wj2WXQe5taUSPhKd%2FkDVJvxuxjArG6DNnsDbv03E1ds0AlvgV1SkLbmjNeL1wCI6iW%2BSj1INCa%2FhIlO9FTrQFozHO%2B%2BWWirDf49SZWyjf9ExBMPTiuazii5qKkOdL3nIgWPcEf87r9MzBSrkay3Ol62cWCF5sFbotUCksWBfHRy4z0Oqaijjm15BV0wLA5%2BIVt0I0izv1Mcq5UC2ak4nQE%2BUyuwBkmpCJLFKyYIOD%2BlScIG6ABjBaycRdiGpilRKpiQrjaQh8t7gKSqnq0fDfazkGEtcGhbFPbSVpPBfvLel5JF4WHiyBI7Tb6d6DdGICvwax83HeiXQL96X08e8CAH%2B0iDJ4kQHEMEx3b3DnfUJtrNkiBed7cv%2B4VikbPhp7cODxmLLaIui7vmE0hSXmlzbrQ9qjuKVmqkYm5Nxn4eFyQA7dlm2O5shATv5JBjsoIbl0Zf3xYAU0wo4EP0TabU607kECY%2FBMjV%2FMkxaHcnNqJTupffebam9jJpgklPcnZCPFP9LC2Kz%2FSk5cuw4m%2BDofRMGar9EOmqC9Aql9aY6wniHr1iPJo1eYI1LWLvO1uO365w%2FVFYtDVWUi6UPYaL11C%2Fz3oYplZ7aaNUTHDLXoqqtMIK01skGOqUBb7Igu9WSn6K3s%2BeiIumsVy7nhlYI3b0E%2BXaXbcNOtKcbHzRscbsK5zCfEX8XWdbvfl2JRhOY411A7wjxJaEgTItMAm9DWna2UDEWntwGtTbEc9yWrnJOyhz7BHCjbTs7SBnWruE%2F32gAP7qSY5hZMjRSGC6zpGBM7bMd7O37ufwOF5r%2BZjF7GQjKfGO0Nwp6RITc3mItnk4VziieWPa9Cp4x5vbf&X-Amz-Signature=acbd82ead4d3f9f78da46b179d3ec0c7df15bdf4135a1d09c2cb4f6c3da808b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

