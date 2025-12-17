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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGPLDK4R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqM5H40SGaI%2FqSnBq7b4%2FmQgLAK7dA8ArrZAHLoLpEpQIgcDn6SDDL%2Bkezza7twW06DkGYYV%2B7VytbtVyfK5%2FNZnQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDGQpqLJ9D4IuIMKSBSrcA%2FGxp0%2F4JyhX%2FpASh%2BftwcFVv54rL5IQVNXSgGLauKekTD%2BrfgmWZksUiulUlgMFDuKcld2TaqG%2F8khO2IAuvEPjJ%2FHqsOPUTtCbvWHewLW0mqIeBjB%2FWfp7lVmoyJZ4mk8z7ZzqCoLd4czSCgYw%2FSBT1P4iYJHSJHQV9l0sE4r83vk7jzEiJsinwaDnbZ0j8KGIHCnW5NfyViXI%2FjQP5gYO0UtSlUs2Bh9ZeI5ipXyy%2FRFw1lYsT%2F7cGwiE2ZoGkrGva2NDZaelMW44GGVEDxyR7fjuN6nvnpfI%2FrqMptW%2B%2B6nSg0dwBXzTKRuxjV4QNx7pT91XvL6EE1a%2Fj2XYpHNi3ngB3t8MbRPepPy65frKFlKBH7cbwhKnJsa0KB02FyQizWwrV1gI1%2FUaro8pUm6tpfBKb5R%2Bj%2BKT3KleqGBIbjVlcoBWW7juh1OtO08gLyikYTZvspMpH7aNZ0307tTalT3%2BiC4JxIjb3QIJrI4DFR%2F%2FdheXRhRRISgFVD5xrOuFwi7lFRYi0tePIFRXFbDqKerEnmy4kIQDJoMJ9RRT9uwbHp7RJl9AKegNR2twgld%2BMHkBWXHKBYf%2F5K14fqFWaFo2J6%2BMgw5F9jpU4OI5dsUqGtH4BOeTnEbHMKGqisoGOqUBZAlqJBrLrlLKGKtDyi49HHE%2FtGx%2BES%2Fu1c45LsrJF%2Fxldanih8qAm0GW8%2BIsdfFUYLLmxZ52304PsgyZ2d8mB24DDbEskjIpf6WKWR2hSR1syhBu%2FKY8ONPZ9FVSp1RqRlxO67blk0hpU4ALAoSRGywzahTdfEDYBJ9ZVwIi%2FWiiHK2Zh8HmFTIpeESI46Hv%2FGsAiWUnx%2Fha9wNJt25jvVc8eLGc&X-Amz-Signature=577fbbaa6dc66eadfd90f1aa40571b5f64d3f2da1a0b902434181cb2cbcca6c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGPLDK4R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqM5H40SGaI%2FqSnBq7b4%2FmQgLAK7dA8ArrZAHLoLpEpQIgcDn6SDDL%2Bkezza7twW06DkGYYV%2B7VytbtVyfK5%2FNZnQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDGQpqLJ9D4IuIMKSBSrcA%2FGxp0%2F4JyhX%2FpASh%2BftwcFVv54rL5IQVNXSgGLauKekTD%2BrfgmWZksUiulUlgMFDuKcld2TaqG%2F8khO2IAuvEPjJ%2FHqsOPUTtCbvWHewLW0mqIeBjB%2FWfp7lVmoyJZ4mk8z7ZzqCoLd4czSCgYw%2FSBT1P4iYJHSJHQV9l0sE4r83vk7jzEiJsinwaDnbZ0j8KGIHCnW5NfyViXI%2FjQP5gYO0UtSlUs2Bh9ZeI5ipXyy%2FRFw1lYsT%2F7cGwiE2ZoGkrGva2NDZaelMW44GGVEDxyR7fjuN6nvnpfI%2FrqMptW%2B%2B6nSg0dwBXzTKRuxjV4QNx7pT91XvL6EE1a%2Fj2XYpHNi3ngB3t8MbRPepPy65frKFlKBH7cbwhKnJsa0KB02FyQizWwrV1gI1%2FUaro8pUm6tpfBKb5R%2Bj%2BKT3KleqGBIbjVlcoBWW7juh1OtO08gLyikYTZvspMpH7aNZ0307tTalT3%2BiC4JxIjb3QIJrI4DFR%2F%2FdheXRhRRISgFVD5xrOuFwi7lFRYi0tePIFRXFbDqKerEnmy4kIQDJoMJ9RRT9uwbHp7RJl9AKegNR2twgld%2BMHkBWXHKBYf%2F5K14fqFWaFo2J6%2BMgw5F9jpU4OI5dsUqGtH4BOeTnEbHMKGqisoGOqUBZAlqJBrLrlLKGKtDyi49HHE%2FtGx%2BES%2Fu1c45LsrJF%2Fxldanih8qAm0GW8%2BIsdfFUYLLmxZ52304PsgyZ2d8mB24DDbEskjIpf6WKWR2hSR1syhBu%2FKY8ONPZ9FVSp1RqRlxO67blk0hpU4ALAoSRGywzahTdfEDYBJ9ZVwIi%2FWiiHK2Zh8HmFTIpeESI46Hv%2FGsAiWUnx%2Fha9wNJt25jvVc8eLGc&X-Amz-Signature=f72e76e48236d93121ce51e438fe1c8b7e80f10eba7155ab8590ca19236592b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

