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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU4RN24I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAVrCI%2BLzjmBDNkPvf3c0uH1PRbOsNSyltin6xraYxOAiEAjZXo3TzI7LJs1Ium9pcTN9gxcewnkiUBeodbXrnkBMMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJ%2FoF815EZ9pKOiZYCrcA1h72dCtP1Cmxr5JHlBkYkaruVmJzvdV0pcvZJToV2wA6%2FhS6FYdggZ6PmE4Nam0ct%2BLs3LBAmM7QZZHWJLspUsw1goCvp%2FvjUvPG%2F3lwsp39pOfixcD21UYsTrIJvnw%2BPMtkbre4Tpu2txyRWZbu091UMibrkqgxbW1atvCNcw%2BWvfAIOoZl5Ohtjl%2BNVMnHgcwlb%2B1%2FdtW5JjTpikrEmOyTV76RP18uG1NQzD2ljVg4fm8GgMYy3Vd%2FhLzOxuE5OJpFB8HqZi5uc5GT38jDXKstr80Y0DikPdF8K%2F9SFud9%2BXBg5F5mAkJMrA67GEKEfbK7mHwiG5fwuiYO3ClHMyK2kyqvIJ3oxv42hDN0rXMtc1EBq3j3URhUnOAeukLP3EtdebKPL1clYFZUlzz366KOsLuk1tQpzROJ3lDXet9ayam9L7tLEAsHqYrgW2wPe6rc7JLi%2FTKt9QrLV%2BhJfGSNSidewspRm7SdQPI6HVbGXiS%2FxejD%2BI9BTY0iFaO3cDqK1%2FurwXBizYxG4ollPK5bAqm3VBtTFsFwceIW8zwztu9wMQ%2BcDrlO4Tpq%2BgQB53%2BLoXWP1RCyluajsv9zkGLXqBip8128LN8WW7fJ6pn41%2BajjBwgLPyYQwIMK%2FGisoGOqUBGOPExMcTH80z0XWWkKNAtbxZitsyhbmbKsfYv0SmGTc2NRgIlnYk1H6pxf0Pe0dhiB3TVFhIt%2FbX1tsgAvug2uRAsjBJBbAz4x15fZUNHLHeWINn8c5648SCwWBZdMRn0BGGbeVgNjApzpFIhZpdglKM4cH99NiUfvFogyxzogEN9sELzHzeqlBJFbRi01lN4PCSiGYFoaeTHA0ZS%2Fkke6j0anB%2B&X-Amz-Signature=e4c7a59665df05fc8d50995e3ad41d6be3b0487106ec1927b16818d445e6b4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU4RN24I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAVrCI%2BLzjmBDNkPvf3c0uH1PRbOsNSyltin6xraYxOAiEAjZXo3TzI7LJs1Ium9pcTN9gxcewnkiUBeodbXrnkBMMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJ%2FoF815EZ9pKOiZYCrcA1h72dCtP1Cmxr5JHlBkYkaruVmJzvdV0pcvZJToV2wA6%2FhS6FYdggZ6PmE4Nam0ct%2BLs3LBAmM7QZZHWJLspUsw1goCvp%2FvjUvPG%2F3lwsp39pOfixcD21UYsTrIJvnw%2BPMtkbre4Tpu2txyRWZbu091UMibrkqgxbW1atvCNcw%2BWvfAIOoZl5Ohtjl%2BNVMnHgcwlb%2B1%2FdtW5JjTpikrEmOyTV76RP18uG1NQzD2ljVg4fm8GgMYy3Vd%2FhLzOxuE5OJpFB8HqZi5uc5GT38jDXKstr80Y0DikPdF8K%2F9SFud9%2BXBg5F5mAkJMrA67GEKEfbK7mHwiG5fwuiYO3ClHMyK2kyqvIJ3oxv42hDN0rXMtc1EBq3j3URhUnOAeukLP3EtdebKPL1clYFZUlzz366KOsLuk1tQpzROJ3lDXet9ayam9L7tLEAsHqYrgW2wPe6rc7JLi%2FTKt9QrLV%2BhJfGSNSidewspRm7SdQPI6HVbGXiS%2FxejD%2BI9BTY0iFaO3cDqK1%2FurwXBizYxG4ollPK5bAqm3VBtTFsFwceIW8zwztu9wMQ%2BcDrlO4Tpq%2BgQB53%2BLoXWP1RCyluajsv9zkGLXqBip8128LN8WW7fJ6pn41%2BajjBwgLPyYQwIMK%2FGisoGOqUBGOPExMcTH80z0XWWkKNAtbxZitsyhbmbKsfYv0SmGTc2NRgIlnYk1H6pxf0Pe0dhiB3TVFhIt%2FbX1tsgAvug2uRAsjBJBbAz4x15fZUNHLHeWINn8c5648SCwWBZdMRn0BGGbeVgNjApzpFIhZpdglKM4cH99NiUfvFogyxzogEN9sELzHzeqlBJFbRi01lN4PCSiGYFoaeTHA0ZS%2Fkke6j0anB%2B&X-Amz-Signature=c74f98ca9ff2e46ca6529d34c13238864236cabe7bf7ffb3072a8c5ed562907e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

