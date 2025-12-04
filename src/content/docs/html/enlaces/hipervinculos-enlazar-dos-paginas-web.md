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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVWF57E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbRUlM7GcxZaZrFAwV1%2BcHu9Wxdp4Eh0ttfZw8BwsW5AIhAIXR%2FBC48JtvHVNtuOqvjnf9x%2FbvnLnoy%2BVeXsJLEL8GKv8DCEkQABoMNjM3NDIzMTgzODA1Igy9SsOcbZB7p%2F3xigoq3APQFOD9kM7%2F4ed2kxAm6A0Ef7sPU1ahBd7A0vjfHseVzEx9OghGQHjAvzM69%2FJPy59zscOoG%2FAN6LSXIzMFmlcGQh9uXVH5pDckmDiPuMYoxmy26QvYU2du7LdSC%2BR0gya9x03KnUUKK0Qb8S6Fa8lVF8pLWvzr7bsEWKu7OkrPRDCTpYIGERD11JiNO8GiT51spuYo3bo%2FG3BzzvH07MfbvN5WOfD8Smp%2FjPe%2FqNm0a66lwL%2BQ4fsHvFSnE1W69Njd12WVWH%2BBv%2B9rF8Mil0ke6SebKiwoCOVBfszOPGOmLbdE64BnKZ1YJFJAFJmIjv1kMXnmBEgne3Mr7GnD4u9hWhJnwO9%2FNyT505hB8tmEQfseOwQEVwLdLH%2BDJGqrkXHLA6zXRNfEVUr89zDVzkulsmFIBJx1IITDWFXoAujlpHdz6bZLMtgYCMci8GeaP3Qi6FlxMgD0iwzS4VWmvvwpagKJpr5ZVGISy0iNvYtT9XN1%2BZriNDB8yXGNesC3ddZ42kB2yYovwegX1Y5hiJc01kyasBevdNX2xqtkz63X6ow9CqU6QSIxq5EeuAxEoLZogxklG%2B%2FH5iXD5BLC9pTTC5eB%2BV2OuLIvM0CCDrKxYjEMOdpgwcmwkwIVXTCY3MbJBjqkAc0AFgF6JyNzxzYAiflXSqYnbY5NY4lPaI7lE%2B0PkVv0a%2FhKsooTMIqWl2X53%2BmWQ5bN5jjNegQzlWQXzMhq%2BhUTDGKLizZn9Oz%2BFlLZBDVq%2F5ahRlxQLMo8pxANtAZJSnbkJ9wkbADHSU0TH3VwbsHQopf2HgZswlg3oXNB97PdqhR4IJv2KhJWTUlJHwt9VdOX9sNWJqBKm0n7eMFua3D02IsC&X-Amz-Signature=f41b0bec03d46978f4276fa655bc28cf29af88ed5253b6b8cd5bd66d6997839e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

