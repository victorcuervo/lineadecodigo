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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SNRE5C2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bp4Q04%2F4aosmD4AI7sNsNyaepfAmSmy6Qj4nT%2B4mvDQIgTAkOfGvcu%2BADTEhlDnGwjdDEkgMQNev3shK7oZG%2FsEEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmMnEPunEe3WngUNircAzl81NjW7vFHB0TYQlni9W38LdnwwC0E0Njs%2FW3D2RUMyCsmHGm7pPF0DNzSn1EVfAPpolokGXAOi7svdPRBM4ajlvrimhvGPaOvuoEYgv5sQx4KX8avItFUznJ5WqMSTvdf4BdH%2BRHLil5hW4X9tE3s7JPjkbKz0YCW7S833AKosVs9sQAoVQHwgItUMeQTTfSg2qB4hkghHr2dyUJ1YjrkktDFx%2Ft1eqmOZRXFPFR6SLa5dTnI1DOTAqFGxJfep6Kuw109FCg2X8T15W%2BJ55AGjNoBm92PIDdXaUc7bpZU8lRUKTXsZa7XtpBWw%2BKZx32XZh7oTqiq%2BghGXkovzC2wVHHoSuQWcjInrQYhq0wKJ0eUae5fs563NdKBJn8za9Nyn%2BaqLRSP%2BzuIBWBcR3%2Bk4qU4PDhZMsimlo%2FMnYIWtFh%2BVLMk5PdJsFzvUf9UJII%2BN6GM78D8DQxzKjqVL%2FwQ24XIYX2dP9rtXwp3hOcFh3joKH4QkEriFyfZiUFJhpZkLZQWH8T3vMOshuEFd2IUkfXlFNamd612bBigH5M3QeRH0S%2FXYTieERijBPKEnUWwdkVSC3JHcZ1k9Fwhg86i416O2gYMqL8ZKinymmYrudX%2BNFuDqX%2BGTTbfMOX%2F3MkGOqUBHJVPLTSaQgpetizrjLCRh%2BwAXCmybXTfFfXGeRjsK4mbBPoxYwgnchddfGUprRE9FPU7ivl4d7pKeEKtGgoInys4IySAgxVxlo9XGBD8uU7f2j%2FhzCg0n41lAilszeK6iqxEeJXFett00TKWK2IX6nyNCHPQ68bTOdFAAOe3GS1%2BElb70pRjsMbSZw5LRLGP7rD4JhjtpjwPWNRyX6lNZRo%2Fu7ns&X-Amz-Signature=f7eec42a163bdaa95ad4862d05cd9173e8209be57aebf467972f1b13aac4cc28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

