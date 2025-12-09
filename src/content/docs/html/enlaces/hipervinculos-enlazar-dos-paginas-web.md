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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG5Q3VUO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T171055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzAQj1sSLgP12YSBK%2Bk4fkvImMILbbK%2BmQ3EAt3GrwugIgQaEAFlUDgb02MSFfvboIH%2B771b9BhcYKNVTkG6d7k4MqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA30B4ffnfj985wF5yrcA3q82AIYoR1bhpVaaI0HBnNb1IAEHdpj4QXZxo0i2aQzplNdnZydmPGoLH8rI14QAvfzwMlJ6rkzT04sJFStzmSEgpLT%2FJ4iTJlbwBOZQUyR1Cirm0OjdRJWJ7yfGwfpDIeapyoggWpw6K6g8p85UtnuebGh3%2BJzBR0CMxqu8hoR7Ee3bmq7nDC6WEIa9FHByHf8awVnhD2wQ08gfhVKv0EKzjSME%2B1CoJnbwVYtYAReQVcGTU69TX2QIoPATFvDZf9OUDNnyIoA%2F5b1GHJlZTuFGRyXeocTeHRBVNJLOz7bCnxsrRaLrnna7NdYM1%2FassFXC4JO2fUs8di1QSWBnYG6SiQCPeIgpS%2FiQkO4wGeESEAdlmKIS87KagQPgYyG9Xulqq4uGGlscKQvoESMUJPiwazUTx3n7yoVqMmPejWW9mrX%2BA%2B2TU79mMTTT%2BIMPz7sS36nMpLM4aX9ZsvPfw3L5oYOCqSbD%2Bid5cfZy1RjMsuypQ8tq4GpZeyOVsLBGNDwg7xm5qhaLsOzNAoJoAZhFDcpszmCBo464dU6r6SCDPPi9vcOGVgK0qJWyl5NSSeNGsdPG7yvCFH%2BWYQebHNCtKQlt6qa7PKzW0SfEiElejnUF6flnmSbfeHeMJ6Y4ckGOqUBoKReIz97fiXElT7eBEpx14kcxqaxPCxycY9HvXCh%2FYqgVMBNR%2Fnb2WHO19ggljAi60OdAoMEXTcMOpit33yxqP25BO6vmctAGzbBrb62xpURnzSY%2FUsPYWiwCRLzK7Rr9EUUphx7GSSPP9fqnaE2vD9Nqx3WQWvhgvLGRU1I9gM5sUSqd2jYg6%2Bwf0Z%2FrCcY1q%2BsrgWjw3Y%2B4%2FHEpOKy8VpWcfU%2F&X-Amz-Signature=cb0f93f08eb3a081a29314292b75cbe65ffa5b3930c2dbca0e7f79506fb136be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

