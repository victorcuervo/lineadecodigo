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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFZZ4KSX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeAllpWa262siFCAGn2TMw4raJA0B0VSytovhWstCyMAiEAoyjUBggTcJjNaWtVQupI9gC3lMOF9%2F3hmgtBc9H0fEkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMSB%2BwHhtSWMyTexJSrcA9%2F8KLDMHGqztsC3fFXWYThLN7zZDEtufbPGZAHVnKuIAyRs2RQ%2FgvAn%2FDJhsSg0tXN%2F2u5OKyjHPv8MMCD9dAgr6ws2dPurRfBv1IjuJiL6AJCVuzlIrysCnMhlL0yLysW2kBAgdC%2BKVeEtczmHyAmuIneDKkmseXtLJQpo109JMf5oZn9s9uNkUX%2BeZuLbKjL7UWtXcpL3mKSap4p1Zx92VZUeroBS3EISPavHINofaXWyP62gpU4%2F9HSRILvYo6azBwOLe3495jZ1sxpawYHgYBJNXenuuD70fkX7LMTd41RZPZjXtW5kZ%2BAIxWXfeGNTF6x2XBklzLgJ9l%2F9lSvG8Vsjwnw586TOPDF60n3JmCrrYaj3a5izsQ7JqKLJ9zOSLLYvHG73KQ6JgpRMexq89qwFp%2FMAT2oqDtfSTah4G9FE5Cz6ztlOer7gY2O%2FYc9qigk2x67uNFfxfuz1GdtAQhvR5AgtfYgvENH%2Bg%2Fq1ti5MG7KPTGp7ZHXIxAyM2eCT9u%2FbhaOex7r5T6NXKWfVtNKp%2B2Bbm%2BxYEXpwEa86%2Fqb7NgDTTLIttI4W9LCsDtDrOgpTbDZUxPypPC%2FSsshI9p9xTOVAJyMBtBiqcXOYc%2FLHCw6Fq9zFyfwUMND7h8oGOqUB%2FeL1e9DwRiits%2BHa4Zh3IvLQ9oMkRh586GnhhwiXDKhKtyJp5JaixD5NNy4SsSgIuiRF%2FtK95oqZ1Xxxa2r6aBJHdebZIrHDHBglgzfc4r%2FXu0ucCWLqK2GheRfI1NX%2BAxknLCjD1gsrSRseSJOBmSo%2F%2FEDnq1RPamdu49lpbz2vb9V0t5b%2BX4olwiuYlPC8VBbpvDe3ocQwG4hmIFsyTCNarc8Y&X-Amz-Signature=8d53fe486555087f35cd4e745b823fbc62a221c173e582775dce73c01acc518b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFZZ4KSX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeAllpWa262siFCAGn2TMw4raJA0B0VSytovhWstCyMAiEAoyjUBggTcJjNaWtVQupI9gC3lMOF9%2F3hmgtBc9H0fEkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMSB%2BwHhtSWMyTexJSrcA9%2F8KLDMHGqztsC3fFXWYThLN7zZDEtufbPGZAHVnKuIAyRs2RQ%2FgvAn%2FDJhsSg0tXN%2F2u5OKyjHPv8MMCD9dAgr6ws2dPurRfBv1IjuJiL6AJCVuzlIrysCnMhlL0yLysW2kBAgdC%2BKVeEtczmHyAmuIneDKkmseXtLJQpo109JMf5oZn9s9uNkUX%2BeZuLbKjL7UWtXcpL3mKSap4p1Zx92VZUeroBS3EISPavHINofaXWyP62gpU4%2F9HSRILvYo6azBwOLe3495jZ1sxpawYHgYBJNXenuuD70fkX7LMTd41RZPZjXtW5kZ%2BAIxWXfeGNTF6x2XBklzLgJ9l%2F9lSvG8Vsjwnw586TOPDF60n3JmCrrYaj3a5izsQ7JqKLJ9zOSLLYvHG73KQ6JgpRMexq89qwFp%2FMAT2oqDtfSTah4G9FE5Cz6ztlOer7gY2O%2FYc9qigk2x67uNFfxfuz1GdtAQhvR5AgtfYgvENH%2Bg%2Fq1ti5MG7KPTGp7ZHXIxAyM2eCT9u%2FbhaOex7r5T6NXKWfVtNKp%2B2Bbm%2BxYEXpwEa86%2Fqb7NgDTTLIttI4W9LCsDtDrOgpTbDZUxPypPC%2FSsshI9p9xTOVAJyMBtBiqcXOYc%2FLHCw6Fq9zFyfwUMND7h8oGOqUB%2FeL1e9DwRiits%2BHa4Zh3IvLQ9oMkRh586GnhhwiXDKhKtyJp5JaixD5NNy4SsSgIuiRF%2FtK95oqZ1Xxxa2r6aBJHdebZIrHDHBglgzfc4r%2FXu0ucCWLqK2GheRfI1NX%2BAxknLCjD1gsrSRseSJOBmSo%2F%2FEDnq1RPamdu49lpbz2vb9V0t5b%2BX4olwiuYlPC8VBbpvDe3ocQwG4hmIFsyTCNarc8Y&X-Amz-Signature=35a06bc2d934854bb1d4d6adcbb0047e024d8e0ce593183f3d7e8cf6950e4d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

