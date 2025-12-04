---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFYI665U%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC%2FAb0bomJFnONQZv2kHjJXHcX5vDCo6WHqPtTeIZZGUAIhANVRJq5AxpdKNNyyaSWIjVyx44KfiDsI66OPl0VERTZcKv8DCEYQABoMNjM3NDIzMTgzODA1Igz8nyT%2B1iXdARxId%2Fkq3AMeMagtGnljMUI8EYHVx4pU8HC0bv6BRBXU7TbYy3lX4Nfy9ZlOXrdiaFMXnRz7YVTJVwmeFmPpxH8DlwUWT3Y6GyaeLXu6t%2F%2FkItacnDp0Dvn2tQh9iBNPPzbBa3Eu5BHK2l%2BD20%2FQQzGEbhGXcQjog5d6%2FvJooxH3oYL5OIg56TlXxea8gUwQcNU195rFbhxNZ3ZeoEeyN7P%2FAXgGohJpR8LhXHFs%2BQjieODN55qNm7y%2FS36FMj4cLXTHJCO%2BnKSky3KFjq1TNoQSbYSBzlHTVSBMp7%2F9fKuwtUuLoEzeKrs0rJ6leLwNpEb%2FDaDgCx9hUE5Uy7LMjni2qy8gB%2BB%2BZm9AujXPx%2FvIOF05Vd9%2FW9JlkUZvZii19zF0AVE%2F2YAlLekibkqVPGmhEO4E9wqomyB0Uj8aTIxeQS4hxz332kalZmBK13KuplSf5%2FaVxH2QE6NtPU7V8tQASRujWTemza%2FE%2FWftrr8uwRHNEW81IwC9w9EcOxT8MpaxDGq%2F4f5Alus61mJaUFr55e7MkeG9oO2jNioiehTGG7XGhOmTpOEu0eh53XAZHdbm0OlPS%2BPTg2U7cT%2Fj3LkJY2kXfk9dw0qLJNBXj5Yx0DFePklSKybX6UgISrr5AeLi8DDDhMbJBjqkAUgg5iDEv4C6AFMp12UZPbzUrELIh2ofBVJpaWCMB9PN6vXD8a7qM8LjZbS%2F5rpDLuck9RyuL73QGhynGnZoF5m1LDSqisBW3n2V1jsRidBSMHNI0qstOkSRHf65JJB0EetiLtkHyT8Ub9wuCmWbJSYDDu71MOLapcI2yZCCEU4RMcSWCIXjXDrsJipcK6s0UtbDD7oJG0kqn4bPcAL2uLcCwpaL&X-Amz-Signature=03d8a2d240f8877b76ffb22a40d6af54bd5cfcdf9a13caaa08f66f67b8ea78aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

