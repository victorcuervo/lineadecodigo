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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE3LZIZC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6qbxDrIXFqkGk75sGGI77I5aS9CGGEMYgF%2FfJvlQ9rwIgZuaboQ%2B5VY1QXPFo2cXkWf742mJASZlnU%2BL1alWMATgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAiDqlW%2B5Gfe9O7EhircAwHuBzVcWgQ7uMSk6HWf1cdFJvaCsH6bfCR%2BtkzL%2F2%2F0OSzsQmRetHEpzwty8oIhaxbFdgZjuYuZ3XCK%2Bu22GwozF5dMZq%2Bayt30UecQ%2FKg9mEx3y1Fj5TQcuHFa2kxpLeMgpIUI7v7dCIXZ%2F5FOLm66c%2FADTMZCCa7bP2thj6f2AFMT3fZaOwF87g%2FOFmMW4TQs1nL2bhOTeVgzZVXLouM9iNeOHIiD4vhxPClkrpJjFL6%2FPklTIpa7DDcuUB%2FrcAOQ2B7W%2BST4Sg6m4bupcoz%2B%2Bh4Hu%2FK6KW3YQNzH9kDl6qQgpBlug1SSR9e2xOnsPFz%2BQWpsGAuyGmb5K6cnlBXcnHTfe%2B8grIpNybhOPTeNarv9Aa4H%2FI9G4kI481mx0vLWVNGs5EtdpYdenR39yeHQZmEYFBsZor9WQl85%2BWobWGrZtBxl2GNfDueou6NWH0ig2RvFyKySmdMkzhld2SPegHWA351ZvpDw6HEcljGYCtRx6vuE%2F8djO28o0pOyXBxxh9BSpXucNU3NnDiQUZ1CE62OF8NxuPlVg8%2FzJ93dEzo8CtbWMtQh0%2Ff2pzLrPAbU1QV8L6wz%2B8kKqQ0sXB9I0QL66sH0QNeZrIObN6S2QvoS%2FpcOjnLGoqHDMKzfh8oGOqUBrqyEkV2bCzR3S3pDA3M5%2BftfbTYRaXs4WonLrIeGFjvEOzloiPvKuWFSDKIOwKWc31Rc7h814WRW2EjP79vshh8LG7%2B6l5%2BW11bJhP%2FpfzK%2Fyx27USZxmLBwmSFrax0bACuAbSZBdoBRW0joNuoBAPag6yTVZKTj5gSteKOzMpRAfVHUOWSUqktCRiSeVzqO7qx%2Bwbu%2F2YLnCgl%2B5huvOBC8ItsH&X-Amz-Signature=38c3fecee9510bd96ef3b0989a585cb681b19186d7bf0cfaeab49101b228bfda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE3LZIZC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6qbxDrIXFqkGk75sGGI77I5aS9CGGEMYgF%2FfJvlQ9rwIgZuaboQ%2B5VY1QXPFo2cXkWf742mJASZlnU%2BL1alWMATgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAiDqlW%2B5Gfe9O7EhircAwHuBzVcWgQ7uMSk6HWf1cdFJvaCsH6bfCR%2BtkzL%2F2%2F0OSzsQmRetHEpzwty8oIhaxbFdgZjuYuZ3XCK%2Bu22GwozF5dMZq%2Bayt30UecQ%2FKg9mEx3y1Fj5TQcuHFa2kxpLeMgpIUI7v7dCIXZ%2F5FOLm66c%2FADTMZCCa7bP2thj6f2AFMT3fZaOwF87g%2FOFmMW4TQs1nL2bhOTeVgzZVXLouM9iNeOHIiD4vhxPClkrpJjFL6%2FPklTIpa7DDcuUB%2FrcAOQ2B7W%2BST4Sg6m4bupcoz%2B%2Bh4Hu%2FK6KW3YQNzH9kDl6qQgpBlug1SSR9e2xOnsPFz%2BQWpsGAuyGmb5K6cnlBXcnHTfe%2B8grIpNybhOPTeNarv9Aa4H%2FI9G4kI481mx0vLWVNGs5EtdpYdenR39yeHQZmEYFBsZor9WQl85%2BWobWGrZtBxl2GNfDueou6NWH0ig2RvFyKySmdMkzhld2SPegHWA351ZvpDw6HEcljGYCtRx6vuE%2F8djO28o0pOyXBxxh9BSpXucNU3NnDiQUZ1CE62OF8NxuPlVg8%2FzJ93dEzo8CtbWMtQh0%2Ff2pzLrPAbU1QV8L6wz%2B8kKqQ0sXB9I0QL66sH0QNeZrIObN6S2QvoS%2FpcOjnLGoqHDMKzfh8oGOqUBrqyEkV2bCzR3S3pDA3M5%2BftfbTYRaXs4WonLrIeGFjvEOzloiPvKuWFSDKIOwKWc31Rc7h814WRW2EjP79vshh8LG7%2B6l5%2BW11bJhP%2FpfzK%2Fyx27USZxmLBwmSFrax0bACuAbSZBdoBRW0joNuoBAPag6yTVZKTj5gSteKOzMpRAfVHUOWSUqktCRiSeVzqO7qx%2Bwbu%2F2YLnCgl%2B5huvOBC8ItsH&X-Amz-Signature=35b9d178ee238f63b90cc2e9dd894022ec1d6b29b4ae1e7ed3f600c6ad14fba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

