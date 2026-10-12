---
title: "Listas"
description: "Crea listas HTML ordenadas, desordenadas y anidadas. Aprende a usar ul, ol y li, controlar la numeración y elegir cada tipo con ejemplos prácticos."
date: 2026-10-12
updatedDate: 2026-10-12
tags: ["ul","ol","li","listas anidadas"]
slug: html/listas
type: category
topic: html
id: 3f7a9dfb-adca-806c-acfb-cad5c8c48c42
author: victor_cuervo
---

## ¿Qué son las Listas HTML?


Las **listas HTML** son estructuras de marcado que agrupan elementos relacionados y expresan si su orden tiene significado. Se utilizan para representar pasos, colecciones de opciones o conjuntos de términos con sus descripciones.


En [HTML](https://lineadecodigo.com/html/), el contenedor indica el tipo de lista y los elementos interiores representan sus entradas. Esta estructura aporta **semántica**, es decir, información sobre la función y la relación del contenido, no solo sobre su apariencia.


Los tipos principales son:

- **Lista desordenada:** `ul` agrupa elementos cuyo orden no cambia el significado del conjunto, como los materiales necesarios para una actividad. Cada entrada se escribe dentro de `li`.
- **Lista ordenada:** `ol` representa una secuencia significativa, como los pasos de un procedimiento o una clasificación. También utiliza `li` para cada entrada.
- **Lista de descripciones:** `dl` relaciona términos o nombres, escritos con `dt`, con sus descripciones o valores, escritos con `dd`. Resulta adecuada para glosarios y datos de una ficha; no utiliza `li`.

La elección entre `ul` y `ol` depende del contenido: si cambiar el orden altera unas instrucciones, corresponde una lista ordenada. Una lista desordenada también tiene un orden de lectura, pero no expresa una secuencia que deba seguirse.


## Características de Listas HTML

- **Marcadores automáticos.** Con la presentación predeterminada del navegador, `ul` muestra viñetas y `ol` muestra números. No hay que escribir el marcador dentro de cada `li`; hacerlo puede duplicarlo y dificultar el mantenimiento.
- **Entradas con contenido propio.** Un `li` puede contener texto, enlaces, párrafos y otras listas. Para el contenido habitual, las entradas de `ul` y `ol` deben estar dentro de elementos `li`, no como párrafos sueltos directamente bajo el contenedor. Una lista completa tampoco debe colocarse dentro de un `p`.
- **Anidamiento estructural.** Una sublista se coloca dentro del `li` al que pertenece, antes de su etiqueta de cierre. Puede combinarse una `ol` exterior con una `ul` interior, o al revés. La sangría del archivo facilita leer el código, pero no crea la relación jerárquica: la crea el anidamiento de los elementos.
- **Numeración configurable.** En `ol`, `start` establece el número inicial y `reversed` cambia la progresión a descendente. Dentro de una lista ordenada, `value` en un `li` fija el número de esa entrada y modifica la numeración de las siguientes. Estos valores son enteros, incluso cuando los marcadores se muestran como letras o números romanos.
- **Representación de los ordinales.** El atributo `type` de `ol` admite `1`, `a`, `A`, `i` e `I`. Puede utilizarse cuando la forma de numeración es relevante para el contenido, por ejemplo en referencias a apartados. Para ajustes puramente visuales de los marcadores se emplea [CSS](https://lineadecodigo.com/css/); el atributo `type` de `ul` está obsoleto.
- **Asociaciones sin numeración.** En `dl`, un término puede tener varias descripciones y varios términos pueden compartir una descripción. `dt` no es un encabezado general y `dd` no es una viñeta: expresan una asociación entre nombres y valores o explicaciones.
- **Estructura reconocible por tecnologías de asistencia.** Los lectores de pantalla pueden identificar listas, anunciar su número de entradas y ofrecer formas de recorrerlas. El comportamiento concreto depende de la herramienta y de los estilos aplicados; escribir guiones o números en párrafos no aporta por sí solo esa estructura.

## ¿Por qué aprender sobrListas HTML?


Elegir el tipo correcto evita ambigüedades. Una receta necesita distinguir los ingredientes, que pueden enumerarse sin secuencia obligatoria, de la preparación, cuyos pasos sí deben ejecutarse en orden. Un glosario requiere asociar cada término con su explicación, no convertir ambos en entradas independientes.


El marcado también reduce trabajo al editar contenido. En una `ol` convencional, insertar o eliminar una entrada actualiza los números siguientes sin renumerar el texto manualmente. Los atributos `start` y `value` permiten representar continuaciones o saltos cuando la numeración tiene un significado propio.


Las listas anidadas ayudan a representar categorías y detalles subordinados, como un temario con unidades y contenidos. Entender dónde colocar la sublista evita estructuras en las que una agrupación parezca vinculada visualmente a una entrada, pero no pertenezca a ella en el documento.


Separar estructura y presentación permite cambiar viñetas, espaciado o disposición sin reescribir el contenido. No todo conjunto visual debe convertirse en una lista: si los datos necesitan compararse mediante filas y columnas, una tabla puede expresar mejor su relación.


## Ejemplo de Listas HTML


Este documento organiza un taller mediante materiales, pasos y datos asociados. Guárdalo como `taller.html` con codificación UTF-8 y ábrelo en un navegador. No necesita estilos, scripts ni bibliotecas externas.


```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Preparación del taller de dibujo</title>
</head>
<body>
  <main>
    <h1>Preparación del taller de dibujo</h1>

    <h2>Materiales</h2>
    <ul>
      <li>Cuaderno de dibujo</li>
      <li>Lápices</li>
      <li>Goma de borrar</li>
    </ul>

    <h2>Pasos de preparación</h2>
    <ol>
      <li>Reúne los materiales.</li>
      <li>
        Prepara la mesa con estos elementos:
        <ul>
          <li>Una superficie despejada</li>
          <li>Una lámpara de apoyo</li>
        </ul>
      </li>
      <li>Dibuja un objeto sencillo durante diez minutos.</li>
    </ol>

    <h2>Datos del taller</h2>
    <dl>
      <dt>Duración</dt>
      <dd>Sesenta minutos</dd>
      <dt>Nivel</dt>
      <dd>Iniciación al dibujo</dd>
    </dl>
  </main>
</body>
</html>
```


El navegador mostrará los materiales con viñetas y los pasos numerados del 1 al 3. Dentro del segundo paso aparecerán dos viñetas subordinadas. Los datos del taller se presentarán como términos y descripciones, normalmente con las descripciones sangradas.


Las decisiones del ejemplo responden al significado del contenido:

- `ul` agrupa materiales que no necesitan un orden obligatorio.
- `ol` establece la secuencia de preparación. La sublista está dentro del segundo `li`, por lo que sus dos entradas pertenecen a ese paso y no aumentan el número de pasos principales.
- `dl`, `dt` y `dd` asocian cada dato con su valor. No se usan encabezados ni números para simular esa relación.

Para continuar una secuencia desde el cuarto paso, puede añadirse este fragmento dentro de `main`, después de la primera lista ordenada:


```html
<h2>Continuación de la actividad</h2>
<ol start="4">
  <li>Revisa las proporciones del dibujo.</li>
  <li>Corrige los detalles necesarios.</li>
</ol>
```


Los marcadores serán 4 y 5. Se utiliza `start="4"` porque esta lista continúa una secuencia anterior, no para escribir los números como parte del texto.


En una clasificación descendente, `ol reversed start="3"` con tres entradas produciría 3, 2 y 1. `reversed` cambia la numeración, pero **no invierte el orden de las entradas** en el documento. Si no se especifica `start` en una lista descendente, el número inicial se obtiene de la cantidad de entradas de esa lista.


Como comprobación práctica, añade un material a la primera lista y un paso a la segunda. El nuevo material tendrá su propia viñeta y el nuevo paso participará en la numeración automática; la sublista seguirá vinculada únicamente al paso que la contiene.

