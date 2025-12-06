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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJQYVWNK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGWOtwarANnY2qjRI%2BNVK97JHN2enxvgAH%2B8OSVgg4gAIgGRXUxfK37ueNGiKqCVEDHNI9gIv5KzB6%2FO0wjff09qcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHSQ%2BlDU79Y4BBBTOCrcAxcL01fZcMSQ0PVDM7q2fWgREu5xMYODfz5NZASM9xMKfon%2FyVYg1RoSnCtbY%2BN%2BAeWhP0fKYCPVQqaKjATJ5zXG7OxJ%2F5trqYKl4WNlQl8VzitEf7921HVjYM7WPik1w%2Bd75%2BTynamjlvQQaJdo%2B6Jh%2BGhjGq%2BprRDgRNFKMTNP57%2F%2FsPYFLofS1ivGdEd5h%2FH9kBAIoup85%2FAKd2ISdmFiJrPF7Ca0mrE0DPZnIrCpesfnzZMCf%2B%2FQof1siQ3q5pMz%2BafZ6j3KKbgoTkcYE%2BMWOluiKb0nVo06VLYzcznre6pLp0JjlBB%2FtkqBaBaqdAmhXLLUNM6KS5yacxTKDuZngCwnRkL9QSbZiNY9m%2B75rv7ST7DX3vhnqVv%2BJHTdFB9h7V6b5SrnIZzzytojXtuYxlVjuoRZrcDQvWWanrZDIF50GAk%2BErDVbJXiBs1Nuqz6bhqkddDDItXnlpIMDTFsnNfVuab4BZdX3VHOFtFpGWYsXjn6Fcb%2FlP54zIRGDPQpsMwSnH9ZY9vqBVMAv%2F0%2FL2LgRaBoa1Nl8cqdkdJ6HEETOCJGQSGmpHnHJiZ7moXMd75RoE5JPuN4KAmBhZDu69jzy2CBMV3wRCK%2FCSfiWFgsksVTvbdds7j%2BMJ%2Bm0MkGOqUB0qjb9tN%2F1bkxUL3XmvIsUZG2GyGJGICim7BhYQhKgpkrgx1EzN7FaIUeeVWtO7HMCF9dlbcOgFaFvH8w3OY5OAMZksVaRC8Qh3fy%2Bk9XAnj9HRR8tbMI7iuIqNGETP38OzR5OU8Z5lLtXBh%2BfN9ZkSC2Vdpj89z8EKMA%2BlQKPkph8U%2B7CL0FaVznvJrEeWSusvk8zNXs%2Big39AXK0oUNiIOi%2BiOm&X-Amz-Signature=5b122886995a9e1b2cec6f12cf6e65fd9856357483410f6bbc275f8c23a84de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

