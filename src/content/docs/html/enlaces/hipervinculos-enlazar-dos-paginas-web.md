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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXT42KEJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBtNhCdlqvYa30xcIpirKkC1EAWSMFutEVOwIl%2FuO6rDAiEAt0B3fg4pXcePu0eos0e5Q6R6qVVwawJ%2FeoDAcIyprwoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDA0DcitwZ0WYVOkmRircA9zCmBETmszQ2igMdDCqLygHisOPVhRSBZGLxKRz6euypZRt23sW9llKIW5bvsorLpC683d31TJsXhf5EKwZqkTC55byaMc%2BgmE19VO3sMuXnaVdHcmZauANnLPgucaTzQFBEC5izP4Eg6wFGZ8CDh%2BbfPw7ypvP6YU%2F4ZXeKjOjtP8NOVOzFPI7zeub1GcSi%2B2VIm140UBM%2FEUBMYU01WtLKNY5PRZaInn%2BJ4BRncG6CD5XlrfkjyiGSCcs5BCYtnMZG8CO%2BO0dUCI5gZp1mnl7zDfJVCnLqr1rOuUwQf6tdvAuMdtdJwac%2BZFNcYcFGMukD8CkKP0BZqihKgF6VVb6gx3pwnH4HBzUnt2NA4A%2FkcT1zbpY7P4H07uHkQxCR4vM3K2T3GixKpPARNtFWFRAe%2FIOTI9WGsSkRLadCHzJ5tYPK7ACHN9zAeGyxgj9UF3kGAOERdQFTeUJIZ5TcsFCFe2OCm%2FDsxIJiNsoX4DW%2FtxoO7afepLpxxOj5XayAzVN2McHGyorLVaxq%2BvCNk3YSDcfr3Fg%2FgIwAQ915xzCx0N2ZcrlGyALkOMOuUEVYKjQNsXSXZmHO0wMu8GVvzJqm%2FdC7HSzCzj4I%2BKzzZKVloPNBiH%2F6Wd79loVMKWhxskGOqUB7DgHb9c%2B%2Fiy31lhdcVpSwsn25kxo5QPGLsBkVRBwL%2BbxfEygzXB%2Bhn1kSeNbZ%2BXLkIGnxxPoBp%2Bjxy%2B1cLy%2FMrZJp4DnaeH5y5K7513HRY9xvMNK7OEiiWTRwGOgPhbKXkRKK%2F8mn%2BqLzQtLaYc%2FBfKvmP3uDwtlWfpxFncXqqq0rG3lYFiL4M6gA%2FFPkBrN8uNx4HaqwxjMmLiM6o0pFCzka%2F1l&X-Amz-Signature=a8561f0752efc54c7e27cea85f4063ff8ce6fb687829c2c5bbf89b9a7ce3f4d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

