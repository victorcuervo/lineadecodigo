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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4G5H57A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsHIgFcJKvWu1CY0L8r4QX%2FHTC1SreFcjD11hsXyAlrAiASIftc812r5L%2B1OVpNizTPDUQ%2BTeabju2gIlH7V0UE5iqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy%2BTwJJXGtlwsdq7VKtwDYoklp04Kl8idiy%2BwX6hdK9XJqqSIXAyhMgKGVR51Twa0%2B0biaGw6KsBtpk1h7EUBuy7keQapvbEgEDUJpV7%2BPWAp3oCmu9UzKqNraUBWvE%2BArweEcJvkg3KD8NrsPLsCsh%2FCiS9iPbUUl96mzvNAScJa%2FnHab3AeN0me%2Frh4sQ7TlMlo0gOWOhvclk2V3gQbcdARoLPBx91Rcjb4Z6Nq%2BZfP%2FXP5dASevUQpyCAOq1m3IhSvyo56Dsy1mzsHkzdIaT1sZTWvOmyLPCJI5hHGr5HFL9oc65zcLZrZ8BeS5BpYOFwqobIBBGhFrjAag1csC7wnCbmRjQcTUzYTAh2oAh2n3OA6MuogFTiXUn6Ydg%2F6dw0j9%2BR3%2Btkpav0uy%2BhC0cLyOOcocK%2BGuwUb%2B1Ak2xyNsRN0ZR7WY2%2FjYc175P6LdIuSWbgqdztxremt%2FcKbbaohgkOkOL98f38Gflwrm2%2BCLkccBQtoO%2FMojvKRQmQ41a%2BtH4%2FboQoYTMEMMFK6xlsPVEVKsZAcNVW0xrWT2oDw0QwXzs%2FZaJvGYWgkq97XlUrS1Mf7O%2FntqkmlQHivit08h%2Fgh1H0NUNrHFFXKcx9vsev1Y8X9D2Tq0280pl1PhKkSBImPQ4pA6iwwxcfXyQY6pgH2VrseWTz0bQwxHCxbAD7WY%2BztLyJi%2FcepBbDGEOfcs3oGAlI6vJs4a8zavnP9e442CoDYdP6pZzm9iKX7uSv7AkshPUwmSpSknk2bl5ZrvOkm6S01BdPte0K6vtBch4EouaEgLiccb7neGhUT6w9WCKn%2FaEVBWqhCrazwIcefOvzH1G8yq6%2B1UlsjuBH2YB4tA9TYvP55Q8toSFOBD6g6%2FQjl9tsM&X-Amz-Signature=8bd3a1e834f5ae84a14eeeb853f1ec147d7780470be2f354eee3679d16c14c91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

