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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GIGHDF4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDScV5F1fuQXnYFx7TKWaBg2bYS3jcZ4p3hR%2FoLAJJBAwIgVwfyJIDSReaGpsFLfuKyvC9dzDTZZHPlAOC7WqE0%2BeAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDADLcqup9pZ2iXq%2FzircA2Hq2uLulg1xJnMzdDp8cMDBTiu3XjjHW8V0eJuFgcz%2BLI0O2smnU9Sg9Dzcsn9%2F%2Be7fJFrWcsZf9nksa%2BFLq8CfLKYxO2tKUXkBmJVWYzvXZSjwddWwfIQebZQsI7yncU1B%2FcYcbzvFYvKsYn4wMJFOXYwOpBYYeGCjgEPM10ezFsTiPCi81U0m3VoX%2FkvhLEwxOgQy63QnqyrZEfj2FbhTfBxyZoYq5yo08zS5tHWxpLB4yaucVnANEz2rNjjBS565r0NMekzOnbM6Qv3jXkN%2FkgAjBkDC%2B4rflmskcvDnGwiLBGlIj3wPwv7GRPuNWWcF5riVvnCDRbavwcaBRutxknvPoElI2VQPvJKs6ceL1dSXNu9fYqiEKgOhd2LVORpVPK0eMENxQTnmJ%2ByyZckRUyl3vXpLaaWcP0uNqleGkGTB45Hoz8zh%2BS30vFqtIurUsU4mCjPZAdcM0Ns54YDa4vtdm3FEtJk9nOA91rbRuUb2O3FSRBUuVpGE3IaFZZUI48UbrQrFz8T8FCwq8dQ1EKF0jQH%2BzIqyk2HPPAzo%2FpsrAJ0Dbv5h6i8BSU7JU4RuqW%2FKa1Dcgi0pjLAPGPf5PPb76yP1988k4jUbKiAKCEarpo8L7UFaW32YML6MyMkGOqUBFRGZ6gr1mueow5zafDdWLMRJUmtPPIYmURByaVZeTU%2FxVVJ5B8aw8W4I09zfIe3uKg%2BQIyMCoAG3zLZVFk40f3LYpcEAZa%2FKSz8Z%2BexzwefsUDrz3ozimWPZQMbW41z3yyjaEWFRNsMCPQuJx2k6k52UfgFRZVDdzvVdDhNgtl6WGRToCfSa0malBwiCnJLMIwhaQM75KZGT9xXXrGj1D7wWc6HI&X-Amz-Signature=0bf0bcb1956657629b29d9c875616c99a6225efa18bd2a172032ec3a41334919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

