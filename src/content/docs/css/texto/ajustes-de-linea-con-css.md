---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXDCY7M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtxUHRsU3FskQ8EVKSYDo3I5HTHlNajvUXVCtK%2BYk6WAiB1NMbmxrmpuKQ%2FITxZQecpTYT5n2%2BO8hElJW47d13f%2BCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMsHfN6dhOiBXDx7s8KtwDfQ4kfbrsNqGO112zDB4zpZiDirufQJVb%2BxnGko%2F2abbUUkLXy77851kiXBozE4PbhF0zM%2BjmZY0drDxnBZ0Akkwq7CsYftXpwjy1xFqoFW92msZ7Zry4Tu1GnKa4%2FsBZGpszmhAwlv%2FInLKZMeQ8TxmFs4iqSuXTkVNtZLp8eM8u3vBYWCaFG%2Flj07G3vXvXUOZY9DxjsbqtpBdUVlRQqyI3pLUdcnekJMsBiBzzBcqGOWDwIvgXwehbOfO2TzZRCJ%2B0YgyWyGGC206NOngjwpqlHkHohXFIPuoBs1R73IxoHDWvtjrLZ%2B26iiiKzEk61TBnAfAdTEk0mJ0mYRPdzvSCljHo5aP4R8My%2F6HkzW55NCQ%2F8JQ6mYbK0rFV8RD6RtXzDkQe25RfRV1XokGm4wpFXtU82TTf%2FycKqCOlWBhh4%2BYwpTM82bNkwKJDO5rFaQbast9cKEPzJvt5q8eyVGB82EkNHeCpvOkcTuuvlqdbh2d3SENU5aH6Dp%2FRuCjSQmfPr56LfV73peHr9HB0wGSZPToUxXfagb3s8i2H57oMKsBkCE%2BiYbc4df3rglrn2oJZaUFlHU9yRr%2BkASH9rcTznfXfIEK5wzr%2F8OCJvtq%2BUCID6e515%2BilbH8wqI%2BKygY6pgEAHxGF8uAfZftnTy70uyYB49MUjgr5%2BmcLVkmvOlbTAFjtOSsemheyVWsKjTRssEkx5nXy8f2qKhOoXjOQc0obIRTWCX0LDzaoDQkGM4fXziY3SFXEti17jaPVyQtO7Wp9nVsP%2Bak%2BvDHbxLUxq1sQwthpZaTN0v8fCNGyikDoF04fpY%2FUaln0QzO2XLCbOM%2FmO%2BtPgTO7JolGRVINxhcOy8QXkbeC&X-Amz-Signature=174a5308749c189fa781a4bca8d67fecf12f3f9ada70e4ad0a9841e5f7597797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXDCY7M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtxUHRsU3FskQ8EVKSYDo3I5HTHlNajvUXVCtK%2BYk6WAiB1NMbmxrmpuKQ%2FITxZQecpTYT5n2%2BO8hElJW47d13f%2BCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMsHfN6dhOiBXDx7s8KtwDfQ4kfbrsNqGO112zDB4zpZiDirufQJVb%2BxnGko%2F2abbUUkLXy77851kiXBozE4PbhF0zM%2BjmZY0drDxnBZ0Akkwq7CsYftXpwjy1xFqoFW92msZ7Zry4Tu1GnKa4%2FsBZGpszmhAwlv%2FInLKZMeQ8TxmFs4iqSuXTkVNtZLp8eM8u3vBYWCaFG%2Flj07G3vXvXUOZY9DxjsbqtpBdUVlRQqyI3pLUdcnekJMsBiBzzBcqGOWDwIvgXwehbOfO2TzZRCJ%2B0YgyWyGGC206NOngjwpqlHkHohXFIPuoBs1R73IxoHDWvtjrLZ%2B26iiiKzEk61TBnAfAdTEk0mJ0mYRPdzvSCljHo5aP4R8My%2F6HkzW55NCQ%2F8JQ6mYbK0rFV8RD6RtXzDkQe25RfRV1XokGm4wpFXtU82TTf%2FycKqCOlWBhh4%2BYwpTM82bNkwKJDO5rFaQbast9cKEPzJvt5q8eyVGB82EkNHeCpvOkcTuuvlqdbh2d3SENU5aH6Dp%2FRuCjSQmfPr56LfV73peHr9HB0wGSZPToUxXfagb3s8i2H57oMKsBkCE%2BiYbc4df3rglrn2oJZaUFlHU9yRr%2BkASH9rcTznfXfIEK5wzr%2F8OCJvtq%2BUCID6e515%2BilbH8wqI%2BKygY6pgEAHxGF8uAfZftnTy70uyYB49MUjgr5%2BmcLVkmvOlbTAFjtOSsemheyVWsKjTRssEkx5nXy8f2qKhOoXjOQc0obIRTWCX0LDzaoDQkGM4fXziY3SFXEti17jaPVyQtO7Wp9nVsP%2Bak%2BvDHbxLUxq1sQwthpZaTN0v8fCNGyikDoF04fpY%2FUaln0QzO2XLCbOM%2FmO%2BtPgTO7JolGRVINxhcOy8QXkbeC&X-Amz-Signature=f52d4845b0eab561ca9b9d4268935309aa7927805b49f85ce2adbb7ef5614843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

