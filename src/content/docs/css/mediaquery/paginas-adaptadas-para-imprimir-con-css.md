---
title: Páginas adaptadas para imprimir con CSS
description: "Cómo podemos definir estilos para poder crear páginas adaptadas para imprimir con CSS y buenas prácticas a la hora de definir los elementos."
lastUpdated: 2023-10-07
slug: /css/paginas-adaptadas-para-imprimir-con-css/
author: victor_cuervo
---

Normalmente se utiliza el [desarrollo de hojas de estilo CSS](https://lineadecodigo.com/categoria/css/) para poder diseñar las páginas web, pero una cosa que se utiliza menos es poder crear páginas adaptadas para imprimir con [CSS](https://www.manualweb.net/css/).


Y es que igual que utilizamos clases, selectores y propiedades para poder colocar nuestros elementos dentro del [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/), podemos utilizarlas para colocar los elementos cuando se vayan a imprimir. 


Pero además podremos ocultar aquellos que no nos interesen o readaptar otros para que se vean mejor una vez que imprimimos la página web por la impresora.


### ¿Por qué utilizar CSS para adaptar las páginas en una impresión?


Pero, cuál es el motivo por cual nos lleve a imprimir una página web. Pues los motivos pueden ser lo más diversos.


Por ejemplo, algunos de los casos por los que tendríamos que crear páginas adaptadas para imprimir con [CSS](https://www.manualweb.net/css/) pueden ser:

- **Páginas que muestran códigos QR u otros códigos de acceso** para eventos, espectáculos o transportes, los cuales necesitan ser impresos para su posterior escaneo en los puntos de control
- **Documentos administrativos o legales** que requieren ser archivados en formato físico por motivos de cumplimiento normativo o políticas organizacionales
- **Facturas, recibos y otros documentos contables** que necesitan ser conservados en papel para cumplir con requisitos fiscales o para mantener registros financieros físicos
- **Páginas con información técnica, guías de referencia o manuales** que se consultan frecuentemente y resulta más práctico tenerlos impresos para su uso cotidiano
- Páginas con contenido importante que necesitan estar disponibles para su **consulta cuando no se tiene acceso a Internet** o a dispositivos electrónicos
- Generar **documentos físicos sobre los que necesitamos realizar anotaciones manuales**, subrayados o comentarios durante reuniones o sesiones de trabajo

Y, cuando imprimimos páginas web, frecuentemente nos encontramos con una serie de situaciones problemáticas que seguramente has experimentado en algún momento y que pueden dificultar significativamente la legibilidad y utilidad del documento impreso:

- **Aparecen las imágenes de publicidad de manera intrusiva**, ocupando espacio valioso y consumiendo tinta innecesariamente en el documento final
- **El texto se muestra en un tamaño demasiado reducido** para una lectura cómoda, lo que puede resultar especialmente problemático para personas con dificultades visuales
- La distribución del contenido no respeta los límites naturales de las páginas, provocando que **el texto se corte de manera abrupta entre una página y otra**, interrumpiendo la lectura
- **Persisten elementos de navegación web** como menús, botones y barras laterales que, si bien son esenciales para la experiencia digital, resultan completamente superfluos e incluso molestos en la versión impresa
- Los enlaces mantienen su formato web tradicional con **colores y subrayados que no aportan valor alguno al documento impreso** y pueden distraer de la lectura del contenido principal
- **Las imágenes presentan problemas de contraste** significativos que resultan en impresiones demasiado oscuras o poco nítidas, comprometiendo la calidad visual del documento final

Así que en este artículo para crear páginas adaptadas para imprimir con [CSS](https://www.manualweb.net/css/) veremos cómo podemos resolver todos estos handicaps.


### Estilos CSS para imprimir páginas


Lo primero que tenemos que saber para poder crear páginas adaptadas para imprimir con [CSS](https://www.manualweb.net/css/) es cómo se gestionan los estilos [CSS](https://www.manualweb.net/css/) en para estos casos.


Los estilos que se utilizan para imprimir los podemos indicar utilizando la regla [`@media`](https://www.w3api.com/CSS/media/) que es la que nos sirve para [poder definir las media-queries](https://arquitectoit.com/front/layout-adaptable-en-disenos-sensibles/).


Básicamente tendremos que decir que el medio para el cual queremos utilizar los estilos es el medio `“print”`.


Este medio lo podemos definirlo dentro de un [código CSS](https://lineadecodigo.com/categoria/css/):


```css
@media print {
 /* Estilos CSS para imprimir */
}
```


O cuando enlacemos una [hoja de estilo CSS](https://www.manualweb.net/css/) mediante el elemento [`link`](https://www.w3api.com/HTML/link/). En concreto con el atributo [`media`](https://www.w3api.com/HTML/link/media/) del elemento [`link`](https://www.w3api.com/HTML/link/).


```html
<link rel="stylesheet" media="print" href="imprimir.css">
```


De esta manera todos los elementos de asociados a estas hojas de estilo aplicarán cuando vayamos a imprimir la página.


En el caso de que queramos especificar los estilos que van a aplicar cuando se muestre en el [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) podemos o bien no especificar tipo de [`@media`](https://www.w3api.com/CSS/media/) para estos estilos.


```css
/* Estilos CSS para el navegador web */

@media print {
 /* Estilos CSS para imprimir */
}
```


O bien indicar que el tipo de [`@media`](https://www.w3api.com/CSS/media/) es igual a `“screen”`:


```css
@media screeen {
	/* Estilos CSS para el navegador web */
}

@media print {
 /* Estilos CSS para imprimir */
}
```


O enlazándolas por [`link`](https://www.w3api.com/HTML/link/):


```html
<link rel="stylesheet" media="screen" href="main.css">
<link rel="stylesheet" media="print" href="imprimir.css">
```


### Buenas prácticas de estilo para páginas de impresión


A continuación, exploraremos en detalle las mejores prácticas y recomendaciones fundamentales que debemos considerar al momento de definir los elementos y estilos para crear páginas adaptadas para imprimir con [CSS](https://www.manualweb.net/css/).


Estas prácticas nos ayudarán a garantizar que nuestros documentos impresos sean profesionales, legibles y útiles para el usuario final.

1. Eliminar elementos no informativos que puedan distraer o consumir recursos innecesarios en la impresión.
2. Fondo en blanco, texto a 12pt y ajustar márgenes para garantizar una óptima legibilidad y presentación del contenido.
3. Invertir el color de las imágenes para mejorar su visibilidad y reducir el consumo de tinta en la impresión final.
4. Añadir contenido antes y/o después de la impresión para proporcionar contexto y metadata relevante al documento.
5. Controlar los saltos de páginas para mantener la coherencia y estructura lógica del contenido impreso.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/058f2ff9-8ea3-4552-9c35-e3d018bbfcdc/estilo-print-css.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDPPWKAM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCci3EGuhuuW%2FrIvcVi8OJ90%2BLAU3LuEm1mXr2B2U5E3wIhAPxh4KyfgAU%2Fb%2FXFMRMALiJk8MmKnOfUFjOEVfADGJqGKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFKjWhAz9i2skOsxEq3AMh98dHfZfsdyHc5VfKfYARxJYWY3GziQ3Fvs9hgemT3qyt2TpJWsgeEga6QbmBWrJk3jc4upnPZtXTeqN2LUY8JWROL0U9MAAIirdDHew7dj1ba9Zp5ib8qK%2Fc%2FDSrBjcBXfWL4JiY6xUxjQS7rHU3Eds50XyGVn0AmgNlKxn03%2FOOJKJNaGZgR3fpta9BlejdV2bVByPLg1b9pjLO5jvjgGkwN4IehKUy%2BcEArIdCh00AELVX1QKNpD%2FUDY5jxdUBN6hNTEp30zPnLLd%2BCfJtOMJJfmkZJD3%2BpaykSXnvJ8yKGjwTXWRY0l6HQofmdfDHXUDXJfN70jNnj8gJs3scBppM2iMsudMzJ7XomESbjndYjnhiWwXag%2BPAmj2Ikcn3XaBma5Pr%2FuUgZh%2F6S%2BM9QugC6Z7E7hEORvYyVsFL2PLvkSLlGiwHjjkAz5%2FbejK3L34S1L%2Fe4YvQ0avL0IimnZNZCyfEKmLrgTpyVDVwCu8yq1mniiC50uW6kmXZfqkXLne1UnpRXCfezT4zOBFYD3l0VRx4XRXYT42k6af6M8P%2Bq%2FnGtHlROYO9hx5KEqzgCyRLK%2Fhs%2FS0VPHhF6MdPrNvv8O96fkPzPFcARfMi%2FnS54GRnOaUYIACBPjCBpNTJBjqkAfTxVL%2Bvep0aXhkp1dxfBkcQHXclm1KhEDNDhqwdjrEL1wWdWN7vmGaWwq8asAUrBVIiyz%2F7nCeE8SdvDC7DWWcl3vT0zIKsyBRe6dJh9Q7krTVTfJ%2Fz7e6lcoR%2FuPHYDaCnkLZiy7J4wt0BLODyfvKczZSCoBasq4vVShxJknil3KnZGdEvXhJ9OoE1C7cM63diy%2Baimd9x%2Fq3IQFZOyUnRH7YT&X-Amz-Signature=e795edd2ce6de2833f79f9892c4f9fc543347d6b533b2404004dc387b087dc3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Eliminar Elementos No Informativos


Existen muchos elementos que están en la web que dentro de la impresión no van a aportar nada, como son los menús, elementos auxiliares, formularios,… por lo que utilizaremos la propiedad [`display`](https://www.w3api.com/CSS/display/) con un valor de `“none”` para que no se muestren.


Así que añadiremos el siguiente código:


```css
header, footer, aside, nav, form, iframe, .menu, .hero, .adslot {
    display: none;
}
```


### Ajustar el texto, fondo y márgenes


En este caso es poner el contenido de texto en un formato que sea legible dentro de una página impresa, por lo que pondremos el fondo en un color blanco mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/), el tamaño del texto en 12pt o 14pt para que sea legible, en este caso utilizamos la propiedad [`font-size`](https://www.w3api.com/CSS/font-size/) y podemos añadir márgenes al folio mediante la propiedad [`margin`](https://www.w3api.com/CSS/margin/).


El [código CSS](https://lineadecodigo.com/categoria/css/) que añadiremos para poder ajustar el texto, fondo y márgenes será el siguiente:


```css
body {
    font-size: 14pt;
    margin: 20px;
    color: #000;
    background-color: #fff;
 }
```


### Invertir el color de las imágenes


Para mejorar la calidad de impresión y optimizar el consumo de tinta, podemos invertir el color de las imágenes utilizando la propiedad [`filter`](https://www.w3api.com/CSS/filter/). Esto es especialmente útil cuando tenemos imágenes con fondos oscuros que consumirían mucha tinta al imprimirse.


El [código CSS](https://lineadecodigo.com/categoria/css/) que utilizaremos para invertir las imágenes será el siguiente:


```css
img {
    filter: invert(100%);
}
```


### Añadir contenido antes y/o después de la impresión


En este caso se suele utilizar para poder indicar que la página viene una impresión de una web o si queremos añadir contenido de copyright.


Para añadir este tipo de contenido utilizaremos los pseudo-elementos [`::before`](https://www.w3api.com/CSS/before/) y [`::after`](https://www.w3api.com/CSS/after/) junto con la propiedad [`content`](https://www.w3api.com/CSS/content/). Esto nos permite insertar texto informativo antes o después del contenido principal cuando se imprima.


Por ejemplo, podemos añadir el siguiente [código CSS](https://lineadecodigo.com/categoria/css/):


```css
body::before {
    content: "Impreso desde www.lineadecodigo.com";
    display: block;
    margin-bottom: 10px;
}

body::after {
    content: "© 2025 Línea de Código - Todos los derechos reservados";
    display: block;
    margin-top: 10px;
}
```


### Controlar los saltos de páginas


Para que el texto no se nos quede entre dos páginas y no se pueda leer tenemos la propiedad [`page-break-after`](https://www.w3api.com/CSS/page-break-after/) y la propiedad [`page-break-before`](https://www.w3api.com/CSS/page-break-before/) que nos permiten controlar los saltos de página. También podemos utilizar la propiedad [`page-break-inside`](https://www.w3api.com/CSS/page-break-inside/) para evitar que ciertos elementos se dividan entre páginas.


Por ejemplo, podemos aplicar el siguiente [código CSS](https://lineadecodigo.com/categoria/css/) para controlar los saltos de página en títulos y elementos importantes:


```css
section {
    page-break-after: always;
}
```


En este caso hemos puesto un valor de `"always"`. Este valor indica que siempre debe haber un salto de página después de cada sección.


Seguro que ahora ya tienes muchas ideas de qué hacer y cómo resolver para poder crear páginas adaptadas para imprimir con [CSS](https://www.manualweb.net/css/).

