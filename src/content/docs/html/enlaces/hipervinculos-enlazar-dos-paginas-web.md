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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YR3ZJ3D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGywa%2BFQrl4C76wsR5YZaUXN4PHVomSkUkUrVj0ZUPRaAiEA3danJrn8e3FHrxwslOAXIYLDZIQxiYzAshNt%2BWdOzSYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDGZcX%2FVNMEtfEQibSSrcAwnuqYUw%2FXYd3uQrPLBimrPZjPMlpy9LBiaUzLajd%2FMrdZsJz7d2ji5lZHIsXuUG27TjLEZ6%2FF3NjDEe1XZhmc40UpcbZ2JyptkHXtJmfB%2BshsVRD3MEEKiRwpHYH0mXQsk%2FaH7GhbvKhgSDArdsoa3ouqOnuCdVPcFf3126CG6OTqxNHGZ6uagSlIQCeH1SFxcYjgthaNk%2FoA8U9b2EYh79dE5tsehwFH2sBXmEaPJLiqrkIKPYD2Zp7TE0ECSems8Mbiuz8U0Mig6Rhmg9IN2JDhDEe6u4n5h%2FkxpVdAwyyQbum1mZ%2BFZUHYyNGkGziK4MlOGjZsPcPEPw9R%2FrGhp3SgqrNIKxm1PEojzH%2BXGKlAGF6d2HpAFdSpnmuQbejqKAuU1TcI8VhlPStqkPfgKhHNplffrCRI3UePpykg%2F8ahnSJ9zTMsqMO8XZqzl%2BRoQTreLC5ToLZ%2FIKJCM6atTe2yfZAiK5aIvRWMDH60R4hMNjtyQtYUVZdRSt%2F%2FrwO6cNRD310Org3inINseUiuhT6uNZGMC4Kk%2B5SGnL5Xywu6ZGNdu%2FSfrmy1pUI3fTTBphFvqvReoHOBwfM7CQlj372YEH%2FyFJhSej1qgWFLYAtPUHqrz9z5e%2BwGJEMNvyw8kGOqUBvBaIjZdF4vorLJioCh%2B3QDY7REVZbhieI8LkGpcOANaq92HQQNiIcXhpSiLXamP9nyIcq0uuz6bniyayJmfIrhfkF1nHacyCM4k1nLw5qT1Zna32xK5zkL0CVtXcI6oX4e1rjdM%2FpKbmbskDeGusYFu%2FH21OEe6byrSRnqmCzHOCAteZ1%2BAK%2FWZMSp2l5XnVEndEEj%2F3InFEaOhyUSxCnoH0ys%2BI&X-Amz-Signature=7b96d23edff56e65b7ebb8be214d7a4abbadb91f9033990e3da6555b1388d633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

