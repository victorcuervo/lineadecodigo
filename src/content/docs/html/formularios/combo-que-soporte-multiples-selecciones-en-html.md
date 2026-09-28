---
title: "Combo que soporte múltiples selecciones en HTML"
description: "Combo que soporte múltiples selecciones en HTML: aprende a usar select, option y multiple con ejemplos, envío de datos y buenas prácticas accesibles."
date: 2009-08-09
updatedDate: 2026-09-28
tags: ["form","option","select","multiple"]
slug: html/formularios/combo-que-soporte-multiples-selecciones-en-html
type: doc
topic: html
id: bc99fe2f-06c2-4989-9f7f-b88730a8d4b0
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/formularios/combo-seleccion-multiple.html
---

Por defecto, un control de selección en HTML permite escoger una sola opción. Para crear un combo que soporte múltiples selecciones en HTML debemos utilizar el atributo booleano `multiple` en el elemento `<select>`.


Aunque habitualmente se habla de «combo», al activar `multiple` la mayoría de los navegadores muestran el control como una lista desplazable en la que se pueden seleccionar cero, una o varias opciones.


## Crear un select con una sola opción


Un `<select>` convencional contiene varios elementos `<option>`, pero solo permite elegir uno. Este es el ejemplo original normalizado:


```html
<label for="favoritos">Elige tu afición favorita:</label>
<select id="favoritos" name="favoritos" size="6">
  <option value="deportes">Deportes</option>
  <option value="cine">Cine</option>
  <option value="teatro">Teatro</option>
  <option value="fotografia">Fotografía</option>
  <option value="lectura">Lectura</option>
  <option value="viajes">Viajes</option>
  <option value="pintura">Pintura</option>
  <option value="musica">Música</option>
  <option value="otros">Otros</option>
</select>
```


El atributo `size="6"` indica que el navegador debe mostrar seis filas visibles. No determina cuántas opciones pueden seleccionarse.


## Habilitar múltiples selecciones


Para que el usuario pueda marcar varias opciones hay que añadir `multiple` al elemento `<select>`:


```html
multiple
```


Al tratarse de un atributo booleano, basta con que esté presente. La forma `multiple="multiple"` utilizada en versiones anteriores del ejemplo también es válida en [HTML](https://lineadecodigo.com/html/), pero la sintaxis abreviada resulta más sencilla.


El código completo queda así:


```html
<label for="favoritos">Elige una o varias aficiones:</label>
<p id="ayuda-favoritos">
  Puedes seleccionar varias opciones mediante Ctrl o Cmd mientras haces clic.
</p>

<select
  id="favoritos"
  name="favoritos"
  size="6"
  multiple
  aria-describedby="ayuda-favoritos"
>
  <option value="deportes">Deportes</option>
  <option value="cine">Cine</option>
  <option value="teatro">Teatro</option>
  <option value="fotografia">Fotografía</option>
  <option value="lectura">Lectura</option>
  <option value="viajes">Viajes</option>
  <option value="pintura">Pintura</option>
  <option value="musica">Música</option>
  <option value="otros">Otros</option>
</select>
```


El atributo `aria-describedby` relaciona el control con las instrucciones de uso. La interacción exacta puede variar según el navegador, el sistema operativo y el dispositivo, por lo que conviene indicar de forma visible que se admite más de una selección.


## Cómo seleccionar varias opciones


En equipos de escritorio, normalmente se utiliza:

- `Ctrl` mientras se hace clic para seleccionar opciones independientes en Windows o Linux.
- `Cmd` mientras se hace clic en macOS.
- `Mayús` para seleccionar un intervalo de opciones consecutivas.

En dispositivos táctiles, el navegador puede presentar una interfaz específica para marcar varias opciones.


## Cómo se envían los valores seleccionados


Al enviar un formulario, cada opción elegida utiliza el mismo atributo `name`. Por ejemplo, si se seleccionan «Cine» y «Viajes», la petición puede contener estos pares de nombre y valor:


```text
favoritos=cine&favoritos=viajes
```


La aplicación del servidor debe recoger todos los valores asociados a `favoritos`, no solo el primero. La forma concreta de procesarlos depende del lenguaje y del framework utilizados en el servidor.


Si no se selecciona ninguna opción, el control no envía ningún valor. Cuando sea obligatorio escoger al menos una, se puede añadir el atributo `required`:


```html
<select id="favoritos" name="favoritos" size="6" multiple required>
  <option value="deportes">Deportes</option>
  <option value="cine">Cine</option>
  <option value="viajes">Viajes</option>
</select>
```


## Buenas prácticas para un select múltiple

- Asocia siempre el control con un `<label>` que describa su finalidad.
- Informa claramente de que se pueden seleccionar varias opciones.
- Utiliza `size` con un valor suficiente para que la lista sea reconocible y fácil de explorar.
- Evita `size="1"` junto con `multiple`, ya que puede ocultar que el control permite varias selecciones y perjudicar su usabilidad.
- Define valores `value` breves, estables y adecuados para su procesamiento.
- Añade `required` solo cuando el formulario necesite al menos una selección.
- Considera una lista de casillas `<input type="checkbox">` cuando haya pocas opciones y resulte útil mostrarlas todas de forma visible.

Puedes consultar más detalles en la [documentación de MDN sobre el atributo multiple](https://developer.mozilla.org/es/docs/Web/HTML/Attributes/multiple).

