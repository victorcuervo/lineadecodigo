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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXD2EBQT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDskDgQB8qa%2B%2FWrsMfYZEBb%2B3FeiejYa%2FK2yDSoxWPhVAiEA4VH96TTiJL5oANwhv6w6gcdiVCIQlMNEGWaG0cc6ffIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCZE7sjJSfNGcVgLhCrcAxlHj5Bbn%2F34H0HPu9f5Ha0HcLm%2BEDM1JlAH4OkYunbTZcBqdZRE5EjVldeeIEO2Aq62szEphG358y55VvF8q4BFafQVKPKf%2Frk4j%2B%2FIWMq88bBkPJH%2Bk3GscfIXET62jhYZrSQJFXTQ%2FQLhkfxziZrVNvB7IUBAJqmprNe4iP0VIkeRnO%2B98kMAh55Tg5s23fM4JHBnqzXBgKacxzxzbKVBYG%2Bp3vEJOloBG1sL3cDRTISnzVOGwas26IhITttweSKgq5wo7N0%2Fq1ECiZrlnyhxiSZfiGP5ywhQ9bJDxc%2B4gl4nhhchUGJOV4tEti%2FTRQPBqmNsDhw1sdPSVyX%2BtXpXTc8Qzwq600z7axHLwOHdtvLNYwAynpSeoVuqjj1xy23x%2BvVdgacPeHPtUeuzCqEYz%2FjyZ8CFUXc%2B0dSKFZNKudSFL0fgFBwfVAHQsEoAcD%2BOh1J1RGE%2FT6NCKpLD2iHYXOYkbl1sRDKzr1dzwNGW9NJX6%2FpveEBbcaYIvPU6cTfnmNxfo6S5WptT5oo%2FlIJAi3NvFMtdxv7YZJxDsnXwKSYQlpyBh%2BO4cm85kvJkKTQ9c9Xt3EwSPZy6Xlaq%2FWs5of6K6303a%2F1W7mn6TIbKGjEYkHo2KOj0JcbUMLvDzskGOqUBeCHVam8rhOZhucCW2AF06ZvxMSAEyPUAa99VM9jNb2ZMnQM%2FXZinNpdTGTx2YHMMXtx%2F9c2cVzqrvXH%2B1Gnee%2BT4pH9FRmkANMB6rKUXHWkNayky%2FrFT6wf%2BngL60Iq54bsdlQ%2FrQJGXmGWU6ZnM6yA3900mko%2F86E86JOcDgjdtLBmUIfUWNzEOG8wnLOpkxozOT9DHPWAZQbgXFxeO1xFEROyB&X-Amz-Signature=13fa45e01122bd48223a79f313825f031b2e4794cdf7ff18f54d511609338b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

