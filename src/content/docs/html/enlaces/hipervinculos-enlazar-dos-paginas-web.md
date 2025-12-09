---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L3NLGWX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T190607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwu9vTHWwLw7khvr45uHEyAJnfENsglYo%2FSWADca6xmgIhAN4aCQc4fzct4N0IkvwpHOxzCOGRFfZ0pgWyolKWVebQKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhdVCrLLaVKj82wWcq3APFmwsJ4UCBLzF2fq1TLoU5dlBHaoxNPycYz0%2FGGXjBGtlrXsjg05RfOB6bIkM3NrbZ4RwAC1Hph2B8S4XHVogjAwRZTLtWXNEYG9xVDOCSJ4MEjCPI37xXLzBRqW4N9cu%2FiCo5Fqzolbe5F%2Fyy0d8NTRajryfjEQf0RPYZp4%2BV1ZATggjmoY2s8EhdQMjkjoJWXcjDP2QoyEMrVw%2FQxIzL7YhXJavyG6a8939ZZPKttPXl97Ru3Wb6cKqF932V%2FGFyaW4%2FhdpIBpMp18Iohf7rtVQY6QoM46Yn7lDfROPqDVmRkP8r9zO4WMElvZgH2BGwIJNxXVw1phlVin%2FEVwL01dfKClO4jajVCLPBj132%2BYN0kav1Ik%2BTAg4Qyy6zCeEUDxR6VeMeuOt9Yoi46DNBXT66ey7RC3IWd3O%2FxRKrFhma5AFXLlEVwkUuh581Tc0oqEPi0qMoR3b6cRPsG5yHpSAZ1ga7830%2BP2tdSaQGiX4AdQwa0l88IHqxVxoE8HVT9ijCAr4MUFQA1GPGNRLzUuK2VhFr8yWXngMj8%2Be%2Fr34CVzxztLs4UTlS1LuaHP3fr85w61W3DN8Ojm%2B1XWNcJPZjTRjbYpxsimmQuResf%2FeildKbrrsJWJoHuzCu3%2BHJBjqkAakYGUMrzI9Y8hFTRmAMgkwznajdSBJLNXn7YNFZQG01e%2F6r2FNMJBlvkFJyTKdbiihjGUkv%2FRPOzaSIKN7LVHG7GUWo319V1hoFrN6kiuoNuAL3vjwTpVCPjtykt6g2okNWeq4HRHVRxEMOdtBCyh1IaYhcQ%2Bz29fEuxTk%2F7Rhi1GzqczQyeRpS%2Bs3RLbGIOJ7S0A5YvvB%2FH0X3opmZpZCdzAx3&X-Amz-Signature=b6cebc07ff355686e56e49d04e9d6933d640111549ab8cb49fe02ee57ca381e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

