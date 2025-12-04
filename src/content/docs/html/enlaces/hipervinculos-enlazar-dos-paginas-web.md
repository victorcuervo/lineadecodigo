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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IKLEYB5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDGt7grTslG9FuxInCY8QI3%2B4QC4CTMdYTbuRZBgXJqDAIhAJNejGkqsZXqoA8P17KAtzJEpBrrI%2F7p%2Bd6FohtWiYupKv8DCEcQABoMNjM3NDIzMTgzODA1Igwi03WBKpdvHVGu%2FQ4q3APMSPeH16XfHQ3mWscGYlEToyDX8BBPq8k9YEaKksFGuznQ4sWF2upIV6dEcJ%2Fa1RBMUlB%2BCs358NdXZlRGy%2FWF62A8zbvXGDgspKeD54wEGRDxdCTbCtS8w4ZZRB7iR%2BKFRmlYCZnSgs8YXfgPR4BtPuVfX5akeAjqzEJYId3sh%2FYHH2QKodR3ZC5Kg5a5cXGLMWgq8YpTg6SOKcvU%2F1v7e2nFhbJaLILYFdE7r2MwSk%2FtBXIWqYNMbCA5Xo8NzI3x1CS1zUEbhnKh8KgXCCoaDGCHm33JhmRN21qhH4tRAtP11mTukSNzlvLXR64FPMoEZyhnSFobNElv%2FTJYcMa%2BpontlZlBeEOgDwo8raYef%2F8rkI3jxWq0KlJyeEGCaJTxJjF6b5UhQW9aIsJKAM0nIdss9yD1Uv3hYpbeRoZ%2BkNPIKJa0IVXtGYacn0gdRqi5KqltD%2BQS5wmOYpK5g3%2BLmO9WenAw1Xmvz5li%2FJ9SSQC3Qf30duI%2BVm2iKYi9VL0zFJDnidAnRtTLSYqA5HNXVomgeWGJJXZRSGAPNH389R%2ByJemPq4I4xXWX%2F0tyMrXQ0WnGAZAzb12cWHD06hcNFsZbJg9VP2SPpfQL%2FetOEg%2FqM3A8EjUMiQu%2FezDmocbJBjqkAfHh9nO3tooTsaxFkT96q7bNCoYSzy0HT2AX%2FhGNlMNpMheSZ2HCuLKK2P%2F4Fd2mCUBl5mJq5Q10Lt6PUHY08Qih9ZYYPRN%2Btlhu1o7QUxaJnqezo6EESFOOJWCY6WL8rnGKw0cefXaK7o4RzuQmxSEyDB%2B8zEQLn57HoML50EKVykpGyPZUgthzULIdHa6pts1OKcCS%2B%2Foy8hk0cPp4SGfZ6uR9&X-Amz-Signature=ac27ef757b9055ab264bf06831df7bff59dfabde64a0562738284248d566ec2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

