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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ELQ47Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFMHY94AqnHVbxIv5HReDtXrR5AuYvga2L8y8LJeZqGwAiBG6t3OS697nN52vzTKWFz%2BnnxY1pboMeMjeKoHbDAX5yr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMY9RS24ggo28hdfEOKtwDih3GA3bw0aEJc0k5T3aMVrzsECGRZMUMLpOdYpPdl1yq6dt5Df7HjACISWRlhCkT6WEypYmcHLxlGwCGPXm3UytonXTHKwOmD3Zd8h4nR6kNs%2FIQwMN%2B5Rt9bYm6zFRrGMxyNqMAWkD5RoMGHJfv601lA9mbYAFY%2FxMQFh0OlsTyQurVPX0LZ9oGL2PxFx2Gu%2BtZjNEOUwh85c1k3%2FayXKFQutMiHNaP%2FrOS2I9Hsl%2FiFsNE048aW54F%2BCtP9puDQ6xfvJfVZ2J5vF9YpiGzQay1wF5KOKlg2Fvop2INcosY6OImysao8o9dPmGdsazZaTLmZo6%2FszHQnGr3PmYzst1tfUtRtsaT%2B33Y0J8z48eStnBKnVRlO8WYHXarv87O5uQg2DtBw5pBosFyVXJFToTbnGPZ5Y3MvuUj88FEk0BdAmTlh2HnV%2FHA0C0UJJ4W81yXg9Y7U0EshpeFR7Zj6SYPhXb0CYLj4zxr7ghN6856G4FZiY9BnT6XhHiNywb58zuiHLX6BT8lJByx7Vyh8RdtDW9CG1HJ1wKlywttEkZLBMbwIs79xRux31Nw8294PViX8AfmgZ4MtpzCGDzF1OjDk8yE8gw6rooXYnu0euN8lZESuBei9vXuVDcwwcrEyQY6pgFMjffd08UrTe4GoOTm3IFQ4tejDXYPK3wwd0Fx44z1lYyg6OFwLZwNv%2B4xxL8drT4T21j6HEmRKAtmU%2Fc0IZ0MWYCVaof6boATRuPUunTZ6%2BLw6Tgxh2PQ5rKGTrUkyMO2AR3JVYEuXaeAaQvzcFStlVKgrX908mRMKiENGTSaHWDovobABUxZqfjVcfnoK5vZPDCcW4p%2BU65froPJ%2B3fP%2BKfiAy7B&X-Amz-Signature=4b1b118cf3fcf0825dbe0ba9c35378b560b3f5cb22145a15009509a0342b3e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

