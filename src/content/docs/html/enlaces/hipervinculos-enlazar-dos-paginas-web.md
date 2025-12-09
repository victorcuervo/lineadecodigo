---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MSKX3YY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T210016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV2T8qUkejxahWQvSmq%2Fsy0Fy8brdisU6AY9050unKLwIhANeRwDRVjz7GBdTFeLznyv6Bux2OFRiEBIJ4WOXfiICOKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBTvU39ad7s9O6kpoq3ANzlMrkjmYEe0y4xHCMIEDmEvyLMC44pnzcagdmrBivE%2BcizN9so0fufFgUVIxGt2EOyjGU1648afFPfzU7by7Ff54u1V9y0QWpTUxQVlBEi1H4%2FQ8XVgBUAqSzfQULLcipwykepoACoEBsxXCj4MoxVM6WQ5DKSNVAlhouWFugNAfqlr8wAkcuI2R1EbgfYaDtau7EmC3PSpa2alw%2FZPh5HBXSRv2HyIy9FwaV0RM14ygPdK7nWtGpvfzSeEPGqaiuZ2X87Co1x6J3lcJlZyhPy1aMID2j50hLVhZ8rsskgy4GGPBWPsN6MvLrJ1cPN6PoBEsY%2BEFImOv7jKF6oZt22JGb7Bt%2BfK71j1GtX8ERqujjjTKtEZ1DDyXPz2QdUfD59%2Bn1EkhnffOqTCVRo4H4jDcYXa7wlQelzX1s5NpXBTgestvHyJPRDr1J8WXWvvYiO%2B4n4lZRw0Id6kghCfoJR9JvsdNj7fdDkdW7OeCUZYxm9oildJpo64hqa0VAa6TvIQ0fXKGXA66byjV7X55up4J%2FAyFKflLwPiJjyOdJR8dIAFzw05NKaX84pMC65itQFoIe8vs1y%2BvkYamucrgh5kbq179hTAX78J3dwAPGQSIWK9xd5QZl7iuOrTDe%2FuHJBjqkAa4mZv3VDzFh7Jp6kxHK6Q71ppouiC2B8F87ZSjVXPnsTKOj0cUCLPoVRU7bq2p5%2BNYbA25beqqnSFlEDhSwO%2FndryOTa4Ad3zvkc3RqrAHow5BgMOiy7HCi%2FXpLz%2BNxILYDQJ4xE%2BXPMGgZNB7T%2F6YUeF2zGWVDWd4FGv%2FcgzCZOfB4IjAx4vecaYadnLmNza8fpjCm9hkwrbURryHY8IjW9lTn&X-Amz-Signature=f56e67630a91fa60a42161b41c539fe06df2b5883e521ab21d0f8be273791ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

