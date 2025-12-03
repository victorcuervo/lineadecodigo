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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VASIHNF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDmn1GS7yawmas0E4cKQXvnm6nQuigNcyGQXUUhmH0UzgIhAIrjnLxi4Wxb5e3cU19MUsn1bTz5seaSuBkXrDG8cu0pKv8DCDkQABoMNjM3NDIzMTgzODA1IgzWJTEuC2QOYtoVwVQq3AMqi3ZEhLx7rM6EmHTQnRhGs8SmRWnxjvbOcLdX2d4lxNhO4y7X1neJXH7XFOORJOp7TDKDrfpllsAhT3Yo1ahNQvmcvzUbzWzmgged10QkcVNtlnU7%2FeOWFvV9K%2FSRwlzYlQJuANGBzBEVHLgZsadUAL4wmtfe8vBxa%2BgTI6OsqbrrZLd%2B8Jk9ERya%2FeHFQdjOjkeiFqSjgVWDKeI6ZCoQlRNUrC3lnvhyXYqt3xjCEFSLVcetUK3y426ziiSzK55qF5YAsqx3gVAVgY6bvu1rdpLlq21dRD1m8uIrSRjzN90NbXPKII1VmAeUfMX%2FLJOqLhn73G7SCUJxp4OotXa7Khs5eGj1tXqtAP8ngJafijgAO0AHpzgcyEebftYPbPX2zxvSpzi5OFiQxvM%2BQ9LWIZYJzSjwhIMSNQud2YVu9Dm%2BS5FgkdWLZdtbXoHuNDrShwsFowQvSywp8PV6fP%2B9cWtX%2BvG30pf%2FrSnwYNDyGNzwodpWKZQ1Z6V3SfQktB5TRrFzgq1U5R40k6rsqbtMctWaXXzjsXVr%2Fie5YqYni0v6OGpU%2FtHpAGBFYpMMG5uadWER45gSI%2FcfzV8TWSUoiw46%2FWXw6%2BiGToGC%2FMihFTX5GEAldSA9Jca6JTCSlcPJBjqkAc3spFREMLmme9zbE5SmTyP19gFIkp7HMrY0n0rrOBAxrouaoVfMHEpeTDVB4NRcTk9p7%2Fl9UxydAJwegAGaRM6dbzrHqlklOK%2BN1YPcrgRaj98qPxaBQwWnSIArsBBT6FkRAlksEBHOAyxG%2FAlpCBBF0YE%2FLy4GKY%2BxHJdGye%2Br0MMDKDO0ct4iJv9t4LaXgLtf0CTRRBGN%2FbAY1%2BvtdeIapmYE&X-Amz-Signature=b8fe3082c78236fabfcffcb7d985ab985c130e867d4ee6e707d7ac6f4572024f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

