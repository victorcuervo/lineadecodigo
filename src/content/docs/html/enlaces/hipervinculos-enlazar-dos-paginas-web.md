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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBIZUBTN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEIitaeGae6KF3mWkA36Xv0KrVnLxeKNanhQXaw%2FKf0wIgYnLtVhIKkqcNOUBRLbabbomTCdlKcXT7hqMhw8lBNOYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGQ0Pk496Cx7ux03PCrcA3fVqFoiWOT1gystXy0ofKeK01JI7OxCOj0XPOH5S5ggGu3CGTkKuOtf%2BbKIB%2B4QVDITQgPhWmyuCiD%2FYV%2B1i505ORx94CRZ7LL2VDgu5sR75Kx7zunCf1A%2FvL7LQI85Slyz17EGcGI8TRkJY5ffGO6rA6nwvPA7jGs4ECSU%2BXmqP6p%2FeCDd1UzCysNyjn6Y7oa%2FwwM5uaE0AuaqFh8D6RV6ygHC6za5RViwUlNnUlC3KYF6gGuVnPMDK9AEOk34mqGAatVO7fiPe0Z5qYlQZRNZsQNSLqMTZbfOTg99G52F3puoDSk3t7egSJpVKMiwUG61jX%2F6n6UYaCd7GLxeQkNYAgZpc3fOk1xZf5uaJDXG6kl%2B6UBnjpHA6YaHscuQFTO%2Ffpj8290XAcVjFAiaL1zUjVAWwH4%2FnkqOfDeqjrQ7iF%2B0aWupVgbwZfUp2vMsjkQ9qpEapv6a87H2h6jqjJJHYl8GOx1Su7LrPbi1BnNi5bTD8ZyXxg3G70HlHDp%2BuBP1lLdAV4hKWVK%2BWXhvXFBVofh65OwvtAmqMbOoh%2BvCvcT7rUEZbIwttIEPT8j9tczQNgvNCqxamOEIbnExfhXqkZUilOPgNY1WO%2Bk7eWEfQwHUp%2F9xt0cLG6a7MIrH0ckGOqUB6EG79ARh9xbMzU1GfYwGaxYl4Xyz4NH5vkcRZjMZdyqzC%2FlffEOyzleEn27TGYuAT%2BUCen%2BWuJH36hxvkGrfVcABe0P%2FXmYp1yrf6vUOyIR%2FoM%2FAH0Iu1whbA4mx3h1WAlVXBDk%2Bj8LSUeBAXwuiD0ZT7mu3umYKt48HSA9ivBopTK9Lck4370C8VIjHCutm%2FU5llV56MtQ90J6uYt%2F0GNsj6jcD&X-Amz-Signature=997093617615369b5a36e6c334dd007247b42eeb38d8bac222c37e52d4062947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

