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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKOL37MV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T235619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBueYd2sTLup33GN2A%2BEC4T4yT3JGUimyfKit3dXrcqKAiAqeKZ2vpYBU4L9pmgUHtMf74z6LgduSX5HKBmKgkK91SqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs6uug3lABrerUXUCKtwDh1QlLtGfm9L8Xb5YDhHoazziAzyMwavbsTYXdmpWizOUSjkhSJJpcl%2F%2Ft8jL9VXUociLEG903NrGXotv%2BhG%2BDyUS7nrblP%2FfhMPbqbmjtApiGOEA5hSqFm5V8M4PeS%2FXMWe1gb%2FsNOqLwpmHDXx59l%2BXpelrjHXQTpiqkvDomRdiujIA7y0pmWz%2BLD%2FsdyBZUFx04kgXWuTLE%2B6gs7379DrTRkXUfOoS2bxxiMJ6%2BD364kcRpgL4ik4%2FSGjkdK47oMLYUI%2F65OPrL03WAOnu3sXbEdmxxzKH2b6b0O0M36ZYWrACzei8aFt1f015F4HG35lbaMVgI2yAdK%2FI98GYFmhbnCQAA%2BOoeybtmu4YATsacpj3U615n9hGyG0xCRuvWfoUPl0JmHHZWVRGwztHiWTYqQRswJcsvedo7vSmNuhTCJhDFjfI96vRaTOe6Xvfzmb241uiKCv0LYrvoRCMzEeNZhuOSCg4Y3HFP%2F%2FIklwAK8%2FpwTRWgAVXR8jfcKfaEmystNAr2ile0sg3qSjt3R%2FG1dT8uSCPlc5JYAN4s6MIwGPkBDxIyStkEy2FPUYpwcG8brquekj64Pl%2BWxq8aCiPZqpsuvtx7iXwRiWJDJLO7c5hopp%2Fm1yeIwkwkcTiyQY6pgHq1oby%2F5JcxNpZ0trC5FBneole6zoSLt3L7YQo3U3HJMGvotI648iBc%2BvlaNOKlyzJfToqPFZ0y73jBgxDkrml5r9Nwojtgv45o5w1Hg4UJBzYU%2FFMiOTAnUsSwzeM6Ul8cYCB4Jrt2UoaGz%2BQYrdQpKpZt70sBl4AdB5x0%2BCTisA9qlPy94Dni4%2FihieNE7uKmrBOEeR9fqt6eCu1m%2BuAGC8nqZvx&X-Amz-Signature=47fc2e38c01ebe52f52f1a8bd3e5d772237aaf28fc7c0ee771e5acf26a4573e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

