---
title: "Múltiples fondos"
description: "Cómo poder tener múltiples fondos en tu página web utilizando CSS."
date: 2011-03-20
updatedDate: 2026-09-18
tags: ["css"]
slug: css/multiples-fondos
type: doc
topic: css
id: 3dfa9dfb-adca-80e6-9078-dba33ccff71e
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/tree/master/lineadecodigo_css/fondos/multiples-fondos
---

Una de las mejoras más útiles de `CSS3` es la posibilidad de definir múltiples fondos en un mismo elemento. Con esta técnica se pueden superponer imágenes, degradados y colores sin añadir elementos adicionales al documento.


Cada fondo se representa como una capa. Las capas se separan mediante comas y se dibujan en el orden indicado: **la primera aparece por encima de las siguientes**. El color de fondo queda siempre en la capa inferior.


## La propiedad background


La propiedad abreviada `background` permite declarar en una sola regla varias propiedades relacionadas con el fondo de un elemento, como `background-color`, `background-image`, `background-repeat`, `background-attachment`, `background-position` y `background-size`.


Su estructura básica puede representarse así:


```css
background: <color> <image> <repeat> <attachment> <position>;
```


No es obligatorio utilizar todos los valores. Por ejemplo, para mostrar una única imagen sin repetición y colocarla a 50 píxeles del borde izquierdo y a 700 píxeles del borde superior, podemos escribir:


```css
background: url("logo.png") no-repeat 50px 700px;
```


Cuando se emplea la sintaxis abreviada conviene revisar el orden de los valores. Si también se quiere indicar el tamaño, este debe escribirse después de la posición y separado mediante `/`:


```css
background: url("logo.png") no-repeat center / 160px auto;
```


## Cómo definir múltiples fondos en CSS


Para aplicar múltiples fondos con `CSS`, hay que concatenar las capas mediante comas. El siguiente ejemplo conserva la idea del código original: muestra un logotipo en primer plano y una textura repetida debajo.


```css
background:
  url("logo.png") no-repeat 50px 700px,
  url("bg.gif") repeat 0 0;
```


La primera imagen, `logo.png`, se dibuja sobre `bg.gif`. Cambiar el orden de ambas capas también cambia el resultado visual.


El color de fondo, si se utiliza, solo puede declararse en la última capa:


```css
background:
  url("logo.png") no-repeat 50px 700px,
  url("bg.gif") repeat 0 0 #f3f4f6;
```


Este color se mostrará si las imágenes tienen zonas transparentes o no llegan a cubrir todo el elemento.


## Controlar cada capa por separado


También es posible utilizar las propiedades específicas en lugar de `background`. Cada propiedad acepta una lista de valores separados por comas. Los valores que ocupan la misma posición corresponden a la misma capa.


```css
.hero {
  background-image:
    url("iconos.svg"),
    linear-gradient(135deg, #0f172a, #2563eb);
  background-repeat: no-repeat, no-repeat;
  background-position: right 2rem center, center;
  background-size: 180px auto, cover;
}
```


En este caso, `iconos.svg` aparece en la capa superior y el degradado `linear-gradient()` ocupa el fondo completo. Esta forma resulta especialmente clara cuando cada capa necesita una posición, repetición o tamaño diferente.


Si una propiedad contiene menos valores que el número de imágenes, el navegador repite su lista hasta completar todas las capas. Aun así, declarar un valor por capa suele facilitar la lectura y el mantenimiento del código.


## Ejemplo práctico con imagen y degradado


Un caso habitual consiste en colocar un degradado semitransparente sobre una imagen para mejorar el contraste del texto:


```css
.cabecera {
  min-height: 320px;
  padding: 3rem;
  color: white;
  background:
    linear-gradient(
      rgb(15 23 42 / 75%),
      rgb(15 23 42 / 35%)
    ),
    url("cabecera.jpg") center / cover no-repeat;
}
```


El degradado es la primera capa y, por tanto, queda por encima de la imagen. La palabra clave `cover` hace que la imagen cubra el contenedor manteniendo su proporción, aunque una parte pueda quedar recortada.


Los múltiples fondos son útiles para crear, entre otros elementos:

- Cabeceras con imagen y superposición de color.
- Texturas decorativas combinadas con ilustraciones.
- Patrones formados mediante varios degradados.
- Iconos ornamentales colocados en diferentes esquinas.
- Estados visuales que no requieren elementos adicionales.

## Compatibilidad y alternativa para navegadores antiguos


Cuando esta característica comenzó a utilizarse, no todos los navegadores admitían múltiples fondos. La técnica habitual consistía en declarar primero un fondo sencillo y después la versión con varias capas:


```css
background: url("bg.gif") repeat 0 0;
background:
  url("logo.png") no-repeat 50px 700px,
  url("bg.gif") repeat 0 0;
```


Un navegador sin soporte ignoraba la segunda declaración y conservaba la primera. Históricamente, la compatibilidad llegó a Chrome 4, Safari 4, Opera 10.10, Firefox 3.6 e Internet Explorer 9.


En los navegadores modernos, los múltiples fondos cuentan con soporte generalizado, por lo que normalmente ya no es necesario incluir esta alternativa. Puede mantenerse únicamente cuando el proyecto deba funcionar en navegadores muy antiguos o en entornos heredados.


## Recomendaciones de uso

- Ordena las capas desde la que debe aparecer delante hasta la que debe quedar detrás.
- Utiliza `background-size` para controlar el tamaño de cada imagen.
- Añade un color de fondo en la última capa como respaldo visual.
- Evita imágenes demasiado pesadas, ya que cada recurso puede aumentar el tiempo de carga.
- Comprueba el contraste cuando coloques texto sobre imágenes o degradados.
- Prefiere propiedades específicas cuando una declaración `background` demasiado larga dificulte la lectura.

Con estas reglas se pueden crear composiciones visuales flexibles y mantener el documento más limpio, aprovechando varias capas de fondo directamente desde `CSS`.

