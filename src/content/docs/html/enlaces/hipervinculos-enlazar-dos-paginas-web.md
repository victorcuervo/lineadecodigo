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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BK5GAAS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhOnsZMcp1PLx35tN2AVh0p9UVVjGkqcr6tpQfBIUcwQIhAPXel%2BaAna%2Bnyn1KTXIxfZqbZmAUqW32zKj7diIjZRA5Kv8DCHQQABoMNjM3NDIzMTgzODA1IgyTdyzxbfXCgNeInNEq3ANQoaBsOkCEXfqC70r6uqvAqQhFPfShgpmGcgArl4GH2cNvGlonIBXS7fkDrd4nbqY4T%2BsE9XBOrLEk4rvL0oWhNAKAlxh4Oco%2FyZXBsuXNcZ5pIoQ8dzdtGYE0nBkf9SiWVwh%2BKH2LK5A2t3JQxVYBSoKfUpkZHMYx4N63FkkwSlC8oc4LCsVbElMm3RXaymdoVivJe%2B4cKaMMszCk337tHdUKdkmdOcJrYxwNo2EIg9oMcta7OHBwMMPsgSJwzCjpzAFEXa%2B7GNB8PX%2BDSqhei9eIZxgH1edKdtISZ3ajIjjkAuxwxG61AhTkPlKsyEMpEyt2Hsu671YGMeawKK2pphnJlw%2FahTko%2BkxLS03TdUtBGUlSPyvHryw4yfyBR%2BUw78TO%2FDIJNCcS58gBOxu%2BjMK0RqCQnxryeFhwFXJxmsWpix9pKy0voR%2FA9GEgszvo0y4zzRtC1Z8CkW%2B2MP3G1IN26EfetuKpwfyF4oSxFkR53%2BqGkmw30267WbopT80eTrc5KJgyaSJKRfAnVEIceQz4cPf7mI%2FQHTWnAgZ55ie%2Fq4zvLxMQfSc%2B3epIT%2BihniKLc79KTLwEhte317%2FukK%2FdNlNuWA%2BdJDq6oRH%2BmsOy2bP%2BzkBy%2FqtoLTCOitDJBjqkAdOPCyBXjA5vXK%2BgfdAQIeFn3uxhIM7lTmSJv4vSIA8EKwoGB08LhlV%2Bz5ghQ%2Fg9rDUlnfgKcXg1Fg1xbLzUVVhKQPjQdAAReduRpwGy0hgoKOFSLBJrphT%2BMmADebSDkx0rgi8JFWqLDuR7d6G2AkSshkMMkUrGw3nKduhP4F2aTEgnGT2eDiYmouw9U7IGem5w2WPIXLPN26ohoMhGSdeJ1RF%2F&X-Amz-Signature=abbb09022d529ee28ac1da0ecf84aee3e33f4de5812654caab0e35216de5bf18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

