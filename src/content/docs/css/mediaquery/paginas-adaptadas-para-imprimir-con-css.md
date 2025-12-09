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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/058f2ff9-8ea3-4552-9c35-e3d018bbfcdc/estilo-print-css.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKJCO4YQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACbU%2FPU2sXZLS6IahJZtyZ%2Bv9sar%2FSPIWD3yN0UD0%2F4AiAfr0U2oz6V4vhnwZQjJiToM9EFl7Bt%2Fn6omxyJ4qcAriqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXXylIJU2DpcJr0iZKtwDOb7nW8%2BmWS0tJgify1EzYEx3HywD%2FucchSCgJr28Ry7SioI7695CwIEgJYH6t8DygRg3y6bBdqkFEhRJoEJ0ACLwBObZt6e4770BaoSJ02eyEm%2F3nyuJyEKaGS37p7JrEIxixDCz0AB824Bz6EGRe8UyVhlbvfV1zNk3WMdgpc5bbgvwbX8DyCWJm93DmqMgrANMpuCU4GtYWoBh%2FGfCm0c3umvMsNgaXzrBO5s300BEPJ8Lvh7XxGZeqf7fIEORdnP7GxFFj3OT5tqhZ11Zwq3dnGizxMflJK4vnUwZ9yQN0O%2BGWG1F67gjfbpm6TISxz133huHQasI5E%2BYxNb8CJ1ukxZiRCk4WYLdJB5NhHtt41bMvNfn35nWO8jOIzD2zAZt1VCowCl8uRjlBtuZ4saR9Z1VL47iojWDOhKrOV6YZkIqd92s6LH1ctQnZoXkaqY45%2FO1cFP3QkH8BokuXCqt6PQPDKYB8hdVMWy0MiAbdhrlN30NA7VLvVly2XUN6GHhB6%2Byk54FhOa%2FrUtV0nAR9gcsUrr1gbZmLk%2FdyR2k5MvldqmddSg1EdcN%2F78BL7OeMWM5D7oE144FluV0XSmq%2BbqOIEypI%2FdEbs2byuio3HBpMRhhboYDPBYwwZDeyQY6pgGjzOwLt1LYFUIjacaqJI5SxKbkG3QsvMEzs7J%2FhhMfJ0zdJExFBIsyqoJOmvvet83RxvKo0fGDYi8Trs096otS1yKy15pSL3GAxL0g46ryBe85CFMbFg6OlEs%2BE9eg6pwmFI6GK9MSw1r399sfD0pk5iAbCfAw6qg6ihdbviYl%2BVfGHwOZ7lIZIKIKIwxCyp6RD7tMt1D5akqo8TYqQJatxqwYZ01d&X-Amz-Signature=c93725bb237ca466886fbc8d6cbb2f3b80129a90564b8a46a2d91a5210db52fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

