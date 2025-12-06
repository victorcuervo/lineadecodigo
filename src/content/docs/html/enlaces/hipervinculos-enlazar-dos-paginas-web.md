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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T3VQXZ2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6%2FXK3X2WAVSGnDL%2FcAlZ0gytY5xGtq5sqHiLlbJvKnAiEA7spZ4MhVahXEE0HjCQbyUF5ha74RgWjoY6lubTKJRKMq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDA1Srv11kPoWI5WjjCrcAxqSvvz2R8tSHBEvpWrEUCULiB4a2TPSWCnfN%2BhIMjhPRPRwh1zJDbHEnV8XwE0rxdaJ0CaJc9omkkPVFsv8G6XHthEYRGK0RNhK04sHWx79qaoS6OqlCYQVnyf%2FqTaKBQIDTaDWufmN2x4Cg6jktBDarhW%2Bm7XikM2ktBGEuchmKCSogfybqCQr19Y6L84nplq3WaBlW1DtHiHCk5yKzJ9zqknEu5HfOc1eKA%2FJhxn7CUvQhbfDzj5QN3RLADrZBoDK7rjTpAdnZrRi8zpTAv2HiV6zVkH5dstGgYpiuaSzIFTzE3AIcfYdd30IRCUpGobcPFfUpH%2FtosJQPL12VWOr%2FvoGWcCJA51%2FJfGnSASCkJ892Am3cqoB6LFvCYOSqFEPF6Hm7QgZgxiH6JY%2BEJWT%2BazI93cikkYsLRBIOos4mW5Hh4xBrwtlGx%2BcrjcKxrGnNZs9%2BoWu%2BED2bpdqFhQL8XTOIWWF1Wuj8Aq50Zp2uJdN9ydKgtymxFbHDHEAwgzdngsGnNylx3gItYzL8DNa4GOTRw1RmUMV22MJHeLY%2FFUM%2FCNKWSVok2AWOXbeTRhtNX3mTRLnmAG%2FWy3wtCsXP6E0FyQVjlpmRedzijAryuD6%2FIPJfOfkGuPhMIjGzckGOqUBymirc7VCPynw1V8vx69t88OdZQfy5XKv3P0OcmvcSCbQNolFCCcI7m3NU2Epm7nEoarNcig8mp8dEWkqRTmZRh3zxvPBcZruIcgdEnIOF4IZViaHjLOLPzaot0FRzLGVxPu8bT6VdgVPVd4L8I1q1BddqzeHVvP9LNBCVfDkCN5v9vS7qu5fucXptZ1xb6DOwSOj4zydeGrjU%2BcQ8T3UB221CuKq&X-Amz-Signature=bce5459ece6f24447db51a8b528e699c36f711f628172ac779eaa22ad8247ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

