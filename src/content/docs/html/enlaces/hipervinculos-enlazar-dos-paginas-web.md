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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NHBKJC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDolx2H5cXxReiDzvFDBWD3IH5t9oFJ368MygZdOFOxOwIhANOcmoQUyjh%2BctNm9yb7QlPiw5CkmV3MgVbci3GKF%2BXVKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxazLTFOMJRCyZcXJQq3APvk2HWNH1XoMVjqVQemP7%2BxmpYNw%2FQ%2BB%2FJiNJBDVxiviKAr%2Bh7B87%2Bcq0WlTvtLBwVRjV2Dho5XLhJOc2SM4WFjeDmONB8z%2FW%2FMtdCsqV%2FhJ7EWl%2BevKwoSTj1VAXZ4JhFpuWCvyjK5pKqgRiJJlXThl7qcJhblNIrSwtyjbFQT9qE2yThtVuDWXJgr1DqopBwZg9FHNh8mTg09xuO4leJ5rRUfvGBvdEZnakKPmzyautHmGHFfkEZ3CsDrqRQwrn9Bd05sC18LyXFVLog%2BcIT72%2BH%2Fnu1WI%2F862qtlk5qzoMtMLXNBZGGtoO0t03txYCDiF5MLv7pGCwkPZTooLzv6AzgDqPb1DluJOkpKw4pGlP8BwY0Pv%2Fy45Kdu404gGAi7evY076odZQSX6x0r6FiHTxRtFHaftecANpc0RYwW4jF%2FTDFb4U1MQmGY6R8NGDRKhWv3GAPZ%2B1%2B0Zszh1vNtamoqdiT%2BFFKu6DTbhnj4V4Of9J01fBtN7VwU1dPRHZf4P2xA3TixNs2hDSm0lTF0SpOc7IbbmOwZ1q0oVdOL%2FFfGoxujM%2BLSFhFgBIV1FAtZbI%2FAa9QNiduY2R%2FYq3Q9RHHUNsUPBzEtAprsJWZUhGQkQ4ZsrGy2FvcqzCP%2FtLJBjqkAX6hty4hONJXmy%2BTsjRjL30TDONU1pRqtL4H5Q2Gr9FKpd4nZmT0RB99kC%2BselvrEz5T0JUoURo%2Bxmc5HAogmVpr2fj6wwpL77RrP9f3tTrI3vRrYv%2BUb4JFeYyPCig3BzJl%2BBhgirxAm2I18RaIW%2FR8FvXbLwM3C2qzS7mLJ8D%2FTpXbc15zknOcq0tjm%2F9p8Rf3%2FueCHp2Amhg98EJRVy6ujhZH&X-Amz-Signature=7b8f1e88e27ce403790dedc41f6451bb3931a54a0825db37aa908ff3bd341427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

