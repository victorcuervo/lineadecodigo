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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSIIOVPJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrqLWjy2s%2FftsgB5Tt3oeyltXVmWeYN5A5StinYG9YUwIgIqQVOnfXgefcYrOlr%2B4IJr6TyCS9ugEggfWGNzHRtyIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKMZ8ImWX%2FEadJamfyrcA4yEwp6VmhoTOUoYMTKf3pzU14nsjrvKrUzrmidgE9PMN3ezrFB9d73O2qf8TdN03DIXETqytSc8SZQyYKlKNatkg4Lu0j378aTcBQbdOEFWFgRPfQlhseQhpMArzdF3J8BiiP9YeyBrYdraxwmwip2JleraMZMdHxE76JI60Kq6TLRwkQxn5PPnWfKcBh0X%2B496h2CX8PnIt2bsPlrH17Il970eMuzdNBbm5T0DWFzPagXCvrhluhQTA%2Ba3iSylpLyEzExN86RyfEadeQ49odbr0klWY1x01IagU%2Fjsa3TNHxhTiuoQJmUKvFpaYGCz4ecrPjiYDU3VDVIwk6dUFsT5WG%2BHSriNwYeArnB6cN7mKJBga1WdNAzg22wBXiVAcno4P4o3Sl81tJv2EueiT%2F0Cq15KHzcOmtKzmxNqGfjEWEju8qGDqxIj01gCCdCdyIuK5URr5id77DzStv6JE99a6pbs%2FLLiv1NJ%2BvuMipmB8sDzzFXJu9LBq4VrQiOR3iMeV14h9r8co9aN6GpSxrCsrtW%2Fh89fb0lYWqRVezEovwFwYMsf%2BdchBHDP0Mv7D13e5WQC6SSH9C0i%2ByZG19KhyUdWytnzhhn9ujqod7mgMH1QW5dVDRAUnJtPMLvty8kGOqUBBn1JhswTYWcGPffz92xf45icehYYrl1oLffEcGHS8SVyOUO4s3sRHamf7M2Z39FpfYlYp06QOaXj6BpmY9HxSbTn28kIlw7j%2FERTOaUHl%2FQspncdk0qM37nyw4qTaliQ1Ep5cZw9mRni5NfBFHPrEz36lngeT021I%2BdciKw0inDTF3kBPzuDyZZpPDyC%2B%2Fug0xtJ82rutSHo%2FgL4fKTnRCbQKxVN&X-Amz-Signature=6586f2263514dd535b1a083b4e03a819a00506bd2fe2f51f90e01e0bc3ce6771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

