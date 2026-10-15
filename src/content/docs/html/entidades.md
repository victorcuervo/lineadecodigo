---
title: "Entidades"
description: "Comprende las entidades HTML nombradas y numéricas: cómo representar caracteres reservados, símbolos Unicode y espacios sin salto, con ejemplos prácticos."
date: 2026-10-15
updatedDate: 2026-10-15
tags: ["entidades","utf8","codificar","decodificar"]
slug: html/entidades
type: category
topic: html
id: 3f9a9dfb-adca-8062-a71b-ea91d00024cf
author: victor_cuervo
---

## ¿Qué son las entidades HTML?


Las entidades HTML son secuencias que permiten representar caracteres mediante referencias escritas en el código de una página. Se utilizan, sobre todo, para mostrar caracteres que podrían confundirse con la sintaxis de HTML o para expresar símbolos y espacios específicos.


Por ejemplo, `&lt;` representa el signo menor que (`<`). Si quieres mostrar la etiqueta `<p>` como texto, escribe `&lt;p&gt;` en el código fuente: el navegador presenta los signos y las letras sin crear un párrafo a partir de esa secuencia.


Aunque «entidades HTML» es la denominación habitual, el término más preciso es **referencias de caracteres**. Existen referencias nombradas, como `&copy;`, y referencias numéricas, como `&#169;`. Ambas representan el carácter ©.


Durante el análisis del documento, el navegador reconoce estas referencias y obtiene los caracteres correspondientes. No son etiquetas ni crean elementos. Además, representar un carácter mediante una referencia no cambia su significado: escribir `&copy;` o escribir © directamente produce el mismo carácter en el texto del documento.


## Características de Entidades HTML

- **Referencias nombradas.** Tienen la forma `&nombre;`. El nombre debe estar definido por HTML y las mayúsculas y minúsculas son significativas. No se puede inventar un nombre para cualquier símbolo. Utiliza el punto y coma final, aunque el navegador tolere su ausencia en determinados casos heredados.
- **Referencias numéricas decimales.** Se escriben como `&#número;` y utilizan el valor decimal del punto de código Unicode. Un punto de código es el número con el que Unicode identifica un carácter. Por ejemplo, `&#8364;` representa €.
- **Referencias numéricas hexadecimales.** Comienzan por `&#x` y expresan el mismo número en base 16. El euro corresponde a U+20AC y puede escribirse como `&#x20AC;`. Las referencias numéricas se basan en Unicode, no en la posición del carácter dentro de una codificación local ni en sus bytes UTF-8.
- **Caracteres reservados según el contexto.** En texto normal, escapa `<` como `&lt;` para evitar que se interprete como el inicio de una etiqueta. Representa los ampersands literales con `&amp;` para evitar que se confundan con referencias. En un atributo delimitado por comillas dobles, usa `&quot;` si necesitas incluir esas mismas comillas dentro del valor. Si el delimitador es una comilla simple, puedes utilizar `&#39;` o `&apos;`.
- **Caracteres que pueden escribirse directamente.** Con el documento guardado y servido en UTF-8, puedes escribir tildes, eñes y símbolos como © o € sin convertirlos todos en referencias. Declara `<meta charset="utf-8">` y mantén coherente la codificación del archivo y del servidor. Las entidades no son una solución general para un archivo mal codificado.
- **Espacio sin salto.** `&nbsp;` representa U+00A0: un espacio que impide el salto de línea en ese punto. Puede mantener juntos un número y su unidad, como `25&nbsp;kg`. A diferencia de los espacios ordinarios, no se colapsa del mismo modo en el flujo normal del texto. No lo uses repetidamente para alinear columnas o construir la distribución visual de una página.
- **Interpretación dependiente del contexto.** Las referencias se reconocen en el texto ordinario y en valores de atributos, entre otros contextos. No se interpretan igual en todos los lugares: dentro de `<script>` o `<style>`, por ejemplo, no se decodifican como en un párrafo. El elemento `<code>` tampoco escapa automáticamente su contenido: para mostrar etiquetas dentro de él hay que representar sus caracteres reservados.

Estas son algunas referencias frecuentes para consulta:

- `&lt;` → `<`, menor que; `&gt;` → `>`, mayor que.
- `&amp;` → `&`, ampersand.
- `&quot;` → `"`, comilla doble; `&apos;` o `&#39;` → `'`, comilla simple.
- `&copy;` → ©, símbolo de copyright; `&reg;` → ®, marca registrada.
- `&euro;` → €, euro; `&ndash;` → – y `&mdash;` → —, rayas de distinta longitud.
- `&le;`, `&#8804;` o `&#x2264;` → ≤, menor o igual que.

## ¿Por qué aprender sobre Entidades HTML?


Permiten escribir documentación técnica, comparaciones y ejemplos de etiquetas sin que el navegador confunda el contenido con marcado. También ayudan a conservar correctamente valores de atributos que contienen comillas o ampersands.


Conocer la relación entre Unicode y UTF-8 permite decidir cuándo escribir un símbolo directamente y cuándo resulta más claro utilizar una referencia. Por ejemplo, una eñe se lee mejor como `ñ`, mientras que `&nbsp;` hace explícita la intención de impedir un salto de línea.


También ayuda a detectar la **doble codificación**. Si el navegador muestra `&lt;` cuando esperabas ver `<`, es posible que el código fuente contenga `&amp;lt;`: el ampersand se ha escapado una vez más de lo necesario. El navegador no interpreta recursivamente las referencias hasta convertirlas en etiquetas.


Al generar páginas con datos externos, el escape adecuado evita que un texto se convierta accidentalmente en marcado. Sin embargo, las entidades no sustituyen una estrategia de seguridad: la codificación debe corresponder al contexto de salida. Escapar texto HTML no basta para validar una URL ni para insertar datos de forma segura en código ejecutable. En plantillas, utiliza los mecanismos de escape automático del sistema y evita decodificar datos no confiables para volver a tratarlos como HTML.


## Ejemplo de Entidades HTML


Guarda este documento como `entidades.html` con codificación UTF-8 y ábrelo en el navegador. No necesita archivos adicionales ni bibliotecas.


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Caracteres y referencias en HTML</title>
</head>
<body>
  <h1>Ficha de producto y notas técnicas</h1>

  <p>Cuaderno de diseño: edición española.</p>
  <p>Precio: 15&nbsp;&euro;</p>
  <p>Marca: Papel &amp; Tinta.</p>

  <p>La etiqueta <code>&lt;p&gt;</code> define un párrafo.</p>
  <p>Comparación: 3 &lt; 5 y 8 &gt; 2.</p>

  <p title="Modelo &quot;Estudio&quot;">Consulta el nombre del modelo.</p>

  <p>Copyright: &copy; / &#169; / &#xA9;</p>
  <p>Para escribir un signo menor que, usa <code>&amp;lt;</code>.</p>
</body>
</html>
```


El navegador muestra «Precio: 15 €» sin separar el importe del símbolo mediante un salto de línea, y «Marca: Papel & Tinta». Las tildes y la eñe del primer párrafo aparecen directamente gracias a UTF-8.


En la nota técnica se ve `<p>` como texto, no como una etiqueta que abra otro párrafo. Los signos de comparación también se presentan como caracteres visibles.

- La entidad `&nbsp;` mantiene unidos el precio y la moneda; `&euro;` proporciona el símbolo €.
- En el caso de la entidad `&amp;` representa el ampersand literal de la marca.
- Las entidades `&lt;` y `&gt;` permiten mostrar los delimitadores de una etiqueta dentro de `<code>`.
- Y en el caso de la entidad `&quot;` incorpora las comillas de «Modelo "Estudio"» al valor de `title` sin cerrar el atributo. Este atributo aporta información adicional, pero no debe ser el único medio de comunicar información necesaria.
- Las formas `&copy;`, `&#169;` y `&#xA9;` muestran tres veces el mismo símbolo ©: cambia la notación del código fuente, no el carácter resultante.
- En el último párrafo, `&amp;lt;` muestra literalmente `&lt;`. Aquí ese nivel de escape es intencionado porque se está enseñando la referencia, no el carácter que representa.
