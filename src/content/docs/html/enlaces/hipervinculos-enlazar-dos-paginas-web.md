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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNPCACYB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCICjirnc2kpSdD%2BYMVucqKNMkJ4UOHAeonY%2B0w44bab9LAiBVe2oV%2BykPJMjLbMBusTDBbVshDFdZ%2BwevebxKDn7g%2BCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMWrYA905e2JpCJuzvKtwDaI4PVB%2BcOLTxI6QwcJRoSahE16J3gSxOF3v2vB%2FOtvSQfDPYDRIlzR0IdFmRxbqU4tiDFcdfZxDnjsNngjKjhXHbLLpl7Swy3nkp80OHWBLAYcohzxGKItNGAPSgFuZmbviRutgKG2cAh8omyGj8UUqHAxb38IAzA9POLB1u5Q83G4ppkX34cWBZOnDDZSwBQI5V58h3HooD8EZc%2FSmwus%2FS7fuj3SLl7ESzAx2tmJa%2FcCPbeebyLCQ%2FTI7jRQ195V%2FHGYEZwK71JgeobOS9t6LpaEtTTmTz%2F7IWnnD1faTDzyh0tS%2FuKM605FcybOzj6wpEYMTjWMFAo%2BdXXv21O6UW7FUtKYbQ54464UT7yQQcdDEgKsvYsy0SZsbgD%2F2Alz2x9TlfpM9hh0kuZYDeFdZJuokPGFzN8DFEXvlcvneiU%2FHxXx7FKSZ4pRv5i927XEWUq%2BHERaepzw2Cm0rCpgPgDZEzMmMK9G8eRe%2FdEx%2FkmnKJpi%2BWjLTZFGU8b1D1OKRj%2BrMB9enBESZc8qp%2F%2Fti%2FcNzSNQundRvWytGdYO2ikh0FINwrPJIL8JmeAPjl2BwIvY4nsjAxK1DADJSLvHmRsRWCDnfUygOMXtVU7buJUAo8VTS9fDgir%2B0w2ujEyQY6pgFp6E1CsRpJl7Bc44CX0CTQZt%2FDY2IPfUYVYu1W7fDoaMuutm569dc9zkdcoSQFyfGjbGxgoE%2BVE5VdfVEeqJVBSvd6bpU8FkGLaN0CdVyCwskjOYRA0tld7wev9Cx5P3jIc04HsPiJkehXPm%2BPw76VPbmvoYDeMkrAN%2BTb0yq%2BdfpKqPgDEfVR5dPePHskqs92xE7Ejt6dzkv6%2BD06mHWHN7g7SxXP&X-Amz-Signature=d696b5cfab9181d091f4c7cef88560abd2e5fed154ca8cf1c1298d0281e05dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

