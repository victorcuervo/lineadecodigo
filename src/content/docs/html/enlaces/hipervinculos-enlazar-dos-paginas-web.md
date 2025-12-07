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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666Z4TMCH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6f90WbUW06rTXaeTi3k06N%2BGE5cjKdeFPy3%2FptafAvAIgeN7%2BoWIB6FCklajt1shnAWSqM3MLDrTrm90nVgpnXIEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWK9AFLyNtO37JD%2ByrcA0nWHg4eaxNMlqPdrvNy1eCscOttRMmnYuWUXFo9rsiSd5yjz2RYFruZ84OCwDtRVyaS3E3j3Cu0op3h%2FE6ywVCSoFFpv0dDEVmz%2F9iMl9JeDeWmHobEGfLkN6bERgylAfVwTXw2ci%2FdGs85Vl6S8C9liyyx5hdG28%2F7KNVjRjUpUzSx7dUZ0ctTSuFHFKlarQJWb28HLO7sZ8Xvp6yKjlkzh5u9OclevCrjgBJVyxxoVaDd4PMSHWS%2F4iUKC4OEfk2TWXE6b5SmVTOmqG4Z1NPy0B3pzvt8zB4CADD9uNgs%2Fj6sF9W4SO%2BBjFmq74m4tLXlBRoCutp2Q2wg21YQ9yFLy%2BafLhm0WqrJu%2F%2FJr34GTUCf5oZuaihhtYuQbdcc7Xe6f3doM0KK6KqRODsXV6FZl8QvnUG%2BoHuU2eGIeBsqBJPTK4HrcGWIn%2BpELJ%2FXPbRqpA2peMcwVAJe7h0NOd9EClBHMLo4NFzwWl7SBw3orbd%2Fd1Su%2BIpCVIkq66kir2jtlRV0VssgLmVPgRBJRvUqjqFD3nuoljMPovqwCeQzRi7KFfjG46IAsu%2BDdPCVjWFSNrvsh6C0lJN1O%2FeJjkNDGzXThh1h728TNMYFQJivKLmFkJV3W19CX8lBMNf90skGOqUB9R3mqT7xgkhLYA4ZOhjIMYZ0VwWseNVjAIIUD%2BbaPsFn6zJ0kSDKlgKYYhmbvTcn%2BHQOoz3nYqCvtF62uT4wLLznSF2lI2o99whBxQWbBfk%2FMBY6%2BkIUAoXii%2BASlIdb1QbzKYtofrdpNdK0zCMQbrHNP5qgVy0aDtFwuMJCAqHCfnsIa9dk74lZKWRK1QJBf%2FA4YAOa8DW6blbqYAGt01OGrfD7&X-Amz-Signature=fdb834515a752814449b3bef0af896dd25b00a941b1cd2b4bf0b51db3483a157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

