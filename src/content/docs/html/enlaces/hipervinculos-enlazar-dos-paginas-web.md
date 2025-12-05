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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624BG4AFW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxUHKMR1MwKewRA%2FR7SFSYl3uxiyPYklwysFrlclIbTAIgLbzqqj6ElTGXY6ieSHGw4JhPx7ejlmEZPUq%2BeYTLoyMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJoljvNK4UNDJ0CzfircA4%2BmRy4%2Fg3c1OGuxHK9UDUSrrbzPKmzAWvTan2fT20EINiMP6x%2FccKIg1AD3hMhBeCIO1J5CZJ1sFO%2Bd4Gujzjykr4BmSak0%2BZv3g%2BUnU7UbP8k0SVkMOXPv6vwY846txyyRRNxMS97719w2luIXkzX44dbOhNKHYYigcQlNED0eW9NsSRjkA8if5K09JAcyaxOxYsURDrsbKYbn5O9u2MYmzrEegMMITuG%2F70krijrNtUskyvILOEmlcw6fi7DbquOaEQe%2BckFVFOyFCeEOLls3UMNUKuniQQOobc%2BRXAhavOFYl7mIiSym5vA6r4u5T5zshR8iQK5hGW9uJH9aoiIv%2FHT7SQg7KIt47bVEW8TnllCEFEWGdwSOIDXn%2BOPLygzE7xqLdslNg9FyBhcsh%2B4uw8QxeOV%2FClMwagENO37v9gwgmmgKem6wlwd84WiAVMzNXxApu0AHAiaKu0tnfdoLLxVPzDAO95Lmwd1wUVW8zXHmBLvw%2BTzifWLRK%2F9Je8rLbthGlOhU2ii6FMDWPuGxwPYw%2B8OsgL26LL8m1MdYS1p01gJTKn%2BmwZqQ29UxQ%2FKeamRMQUZ958cH5bZAm7JJtLycaU8Id79co8TYRCp3XO3mfPLf5HLqkNFzMPmJzckGOqUBafeeKxCHKUfLwmWUia%2FxoD95p9nWH23K9ybt6En3SIF7HvwIgm%2BnxPaaV7UBHUbVkqpoSkfw0%2FvZ77PrpEaFzI2pSbFrY9%2Fnc3TZqvSDGn5P6OJkKsR4aMVWazkY8mcMgyZFMIFfUKog%2Btc%2BuYn13fC8irXkUuFd9tzj00JlXrOcwuqIWDjQdFKlgl%2FuG%2BhxOIkVfVPgqfbkbK0NEdrVfoPWCpVo&X-Amz-Signature=3c681349d3f05e4050443ea952faec0446baf9532316fa0a01f0094040fd9579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

