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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWJNRH3M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAx%2FCYaht0LNEtIqYtspOxw8juOAsbFpLX5l%2FK15xPGwIgI%2BdMoUpediEomdXKrmg0uNz95mQrirJsP1Yjf6kTzNsqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMw8JqFZ84zkVaQ64yrcA20t5xYZgqO52rCoLwastQMROQDfFl9hoEVWGuGiYqqWvMqtgOFJsPaAgbVPIOqbmOQYOXokaUc2I%2FypZjcxYnrs8RHRDmQwpnLbgLfxbD1yYbwBx2e23QtnF5Sf4%2BlObamC49w66UYVcU9Rf9fASAZRcmybCU0r3dG04zSpTXxEdOTcmaBfwVjnSk328t67K3wdQTJaWpoTa1%2BmSLrc8dU0ZnJMLC5JkNZJ%2FG6mhDwGt8xgU%2F82JtbVAMpxG0myzbPG9qLCYdgwdJEgjta6m2Q5Weh2NW8ChaLy86TI125Al6fhN4cxL%2B8FfntMjDZVqhAXUld4raH4v1EEimPsebMVv8TG%2FdUt%2FZAtyI8XughrTrO%2BzuyS1gHadrrEqZg9BGe7NZ3uV4UKO515Mcf2IH2woqXJEUHeLr8MbPy3yMQru5GipH1hUDXoAwfdLkiKbNd48IC4ZWg6TzFhz3gon%2BxZIKM6TD4uQnBapnLRy7VKK8cdmuHj3Ji0VZWLu14Y%2FLSKNMgTkmz3UTtSOVp%2FuAwpKEYs%2BrCrO4QeftM8gvHKuC0XANwVpvxtOvpopmR9LUfGEr0IyMBFe4GuFdlyhjrV54%2B%2FBH7NBj5JUAzw%2B3eERcr0FktGZmD2NtRAML3D3ckGOqUByhX9UE5atfAM3xAqnSZ4YQ0ZLulIxYyDez%2F4imj%2BbnTimmKMg%2BNGB99DPRru2tt6WmAWIzbrA%2FWUC2z%2B8Y5ioQqlqkYLAl5LXmCP2lJG0Cb81%2BV9vBOx5avdunnxWN91slqwj4l7MfmYON2N8B2Z9HvovQfwC8qc4vuLYNrWGe2lXJBOD%2F8SihBCIeRhq4haEz1E9z2iHRwG1rjBGnUyPehMD0IX&X-Amz-Signature=f3babb2eda5ba4348370970d0b5c518143bc034ddbea4d440147820ac6be08b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

