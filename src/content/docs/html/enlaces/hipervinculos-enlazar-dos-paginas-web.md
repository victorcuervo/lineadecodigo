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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627JDJPJN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIEhclumz%2B%2BjUfeQp9%2B8Wvk82wkMKnGgcUJMS8GDsElhWAiEArM6EFjGeGHMDXggsT7CEMHxTHR4HhjQAvnd1MLQFnjQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBUK1vcd4xZGhtKroircA3C3Fk8wIsx0rBI%2B9FkMKXn8A8%2BHZYnAs%2BhcPHedhEV1%2BFbA1Qtecjuuayx7F0m5%2BIr3lEI2yc27sMzLO%2BlN81x3vmgXbFPeo1KvJNGCtgur7DOCiVPpwS6yzeM3CDRQZbXizFcJPkJv3sxzGE%2FeldoCkexueLWEjYQB%2F99wL%2FdKU0hbRMNGsHrsifnaT60FCijeMAgtLu4J%2FFQ%2FQVHsj4n0qqbwuZJVIfsgJsTjeY1D%2Bfrn36U3yHgefLVUN1baRH8HPd8yyne%2BCQCQqawD1N9GTa81NOSDSZ%2B5GYUhUHJ28G3T3%2Bp1%2FhkEH5EGo2cJqPl5zAKhqbORE2EzojK8RpHaixXcnuYCf7hIB1RgDnbwrc4QV4%2BzWfDd0VASl%2FG5rtmqNWLFPhTcLcEKm7O2Axb%2BlX4kPWL8m9Roa3bP4c4mgbcf3FulUXhkQDiIRVALbQLyTuXw2eRaWTTerVpO9MchoF5QWDrkjk8k0wOBIfDZWAyzFFqi8886WFtMJnOMlM%2BbNmSOq5RSzbsY3rug4lM5NXRk%2FLwiQBZq4CgnN%2FMsTR5cx2ITjO2beHvm6yPDAhrwFaD8j8LVjMW8ZnYgpyzUxfYnT%2Bwcnv7VkOBPNaljZ4gga3OBuY4QzykuMMO%2BxskGOqUBM1CAWjpTSEwt8aDHHBrLJ44Vy2EJJVx0Cj6tsT%2BdmdfmCR%2Bixkzwul1UmaGQ9J1L5gSZ06YH1rSgVjnnbmzaGw537hxTGSLCPMTBaygRioRy2XW%2Fy4qFv9%2B1%2FnAeyAz0z9UJy1hvnaZ7%2FeiTG51yhMGPMPnHNH2TsrqHp%2FGamK3KDF0gqgQwcWUAvTv8DXExLALe33HIIB94kjXXqUhp1kTaxn47&X-Amz-Signature=005cbb6bd61846620c6ea6b27225474799a8f77cc2648e8e5b0f053768a5b359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

