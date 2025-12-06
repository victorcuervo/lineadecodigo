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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7PLNOG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDsDHfATPVP4e5ISewW8F1DlWRsoHiDpI%2B03hWho0ojQIgfp7MEtKhj5qi4EQZfbyeiQCdY7DZyeAhC2XZOqa7jbIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNxG9NRst%2B%2BK4xHYsCrcAzp%2FYYfWShSGjSyJVQ4DE%2BDBYNbSSzQWCmGLFLflwM%2Bkq1FahGAUdpMznDhJHC5bMXF0odFBU7vbNo1JqCSPMjQ6rBsQSB98WXVkiV5H1jDAmAEe14ZLgaxWsQmWb%2BVKDEe2LmapAxsnVai%2BNWLfZ8FNupsPvaIJpp63EB%2F%2BVvk0hdJA9qRGJOvuDpm89UB5pib3D4Hz%2BadkVoqEX%2FMuUpoQdBegALOPh%2FIVfCVqh1ptziGmYY2K08dIrz8d2GMQQYJZOKbTt2fjRkX5J%2F17wFfckmG5JBxGYuTBriqWlTyDYYnowQz%2FM77xKkb%2FYUliUjY1xPv1KdW0%2F0c3klmjg%2BQPhLqryillsoZL5lpSK45G0U3IgO3OaQVs7Vb9nTGPwGR6XTjBoXPzJSql43pGfcMDaBbu3wK4gJ2LnemOPy41hvujhxJlwj242DHwyCTB3erdhIlNeTZrZS5aRFAT%2FZxn0bo1DbxrCRXm7mhJIYFkLs8oi7B%2F%2Bg0SaZ9wSJE1o0vn5CMAabtwE5QCmUJBUB0N6X4N6WhMOMUu%2BpJcEGZzxm7R0775c8a7beD25KkFHZ5y4AuGjIs5GHeio%2B7%2BQN5OpzaeNcuKENfx1mcc%2By0rlScaRzockv%2BqcE6JMI3H0ckGOqUBngVMYcE%2BHySaBt0UR4x%2BoQl0JG4pZ0AwMUYg4NkokP3YQZHuADzOqphWOBbF7ji61oCVc4FksjuG%2BNouhU3vslUphz8MZ5KPAJo7F9SX%2FqANGIcWftKTr1c05oeA5m7bltbbUwO%2BtQB8mTLJ3cofg1RXKcT29bLx6oN%2F%2FO5%2B1HWW%2FuRtMSMA5ttGeCnFLaml%2BMqvozZ0D9QeTYEoI8NAaE7TvCM%2B&X-Amz-Signature=a51091d8b829bde73bfa5bd06e21649156046c3462b1f960c5248d3ce17e4a5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

