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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2YRSZD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1v6nBk%2F6xS2qQuclm0NnmL64b0To6SPVEv9%2Bbrn08xAiBKM0NVuOlvdbGLmQO%2Fatw7eF9J0h%2BNjAD3%2Fk5bhvCFHir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM5wSHBkj6mcSj2XuWKtwDpsrzcIpv%2BPqvC4CvCuiR6xxj%2FPIuRxibI6Q7zDHKiJrgfzPULyf9EwaLTUylKWxwdeLA99vZvHWeJz3chs3rgaGyFbXimfbj25WstODV6%2BzvDZlRBh6gN78UNJsjMFciNhJe17paVm3vMhr8CpiHqR%2BWvLMTdo3OFjBziZM7eV5EVzymdM5pMq2dgvN9ve5uLNZDIHwkGuc0b0Mj2iaJlvxOkTUSP7g%2FwSzyRc1Lt7i33HFsdTCn001itiQaBsBw7IQ3JgSET2OV2HpQK9FF9ZP%2FoVz0NPuo2avLvfHL%2F9KvhbeS7ywaXse1HnqNDRdOilV8V0OyswSixjfoj8TsnkXencKD5cr%2FwAw6PSX%2FfMf1g6oZYttzqUkMeQpOtkbbvRyt4zamue4J91yWrHHTwSK9FMnwd83SRu77J%2Bm89AIcZJ6QqbxaqxKpfeiAm4MCc5LY56%2BwIbmOWM2oiNII3UnvPDXo4XrYF%2BrkOoyh8y5rFVGOXXeOBoDdlEqm0zQ43Yyz%2F1UwOaW3cZi1ccfkz3Jl%2BHDCErOGsvUxTYK4b2iC35iWLhwD%2BOShWgChoFQvT50MOiPY7oD4BFbmzD8iA0td%2FoeLenSe2BkSLJHh0una1PnIL3DNjvv24hQwzvqHygY6pgEF7BWDx1xlkkd821ih9YpdpDvG5qrdOFkPbXXjyYtJP2wfr7xukGKkUwRSlPkJ26prsk9G0m%2BReYQyMmQGQMPffq6AAw5I0EFkU4vqjF8oHCacw7MXIDGQAcDKkINPywTt5uIx%2FFsTWSIbsHFrqnw%2FKtwjq6MyIWhpg9rn2Drg2dg9hfBQenXCgNkOYRqLAFzquTQ3aFD%2FcsQY%2BZgJpYN%2FA9tiTCvL&X-Amz-Signature=0ba1a773835ee49a27ca2c37355b1a2657fde1c901f78dffeafe6485f5a1dd84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2YRSZD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1v6nBk%2F6xS2qQuclm0NnmL64b0To6SPVEv9%2Bbrn08xAiBKM0NVuOlvdbGLmQO%2Fatw7eF9J0h%2BNjAD3%2Fk5bhvCFHir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM5wSHBkj6mcSj2XuWKtwDpsrzcIpv%2BPqvC4CvCuiR6xxj%2FPIuRxibI6Q7zDHKiJrgfzPULyf9EwaLTUylKWxwdeLA99vZvHWeJz3chs3rgaGyFbXimfbj25WstODV6%2BzvDZlRBh6gN78UNJsjMFciNhJe17paVm3vMhr8CpiHqR%2BWvLMTdo3OFjBziZM7eV5EVzymdM5pMq2dgvN9ve5uLNZDIHwkGuc0b0Mj2iaJlvxOkTUSP7g%2FwSzyRc1Lt7i33HFsdTCn001itiQaBsBw7IQ3JgSET2OV2HpQK9FF9ZP%2FoVz0NPuo2avLvfHL%2F9KvhbeS7ywaXse1HnqNDRdOilV8V0OyswSixjfoj8TsnkXencKD5cr%2FwAw6PSX%2FfMf1g6oZYttzqUkMeQpOtkbbvRyt4zamue4J91yWrHHTwSK9FMnwd83SRu77J%2Bm89AIcZJ6QqbxaqxKpfeiAm4MCc5LY56%2BwIbmOWM2oiNII3UnvPDXo4XrYF%2BrkOoyh8y5rFVGOXXeOBoDdlEqm0zQ43Yyz%2F1UwOaW3cZi1ccfkz3Jl%2BHDCErOGsvUxTYK4b2iC35iWLhwD%2BOShWgChoFQvT50MOiPY7oD4BFbmzD8iA0td%2FoeLenSe2BkSLJHh0una1PnIL3DNjvv24hQwzvqHygY6pgEF7BWDx1xlkkd821ih9YpdpDvG5qrdOFkPbXXjyYtJP2wfr7xukGKkUwRSlPkJ26prsk9G0m%2BReYQyMmQGQMPffq6AAw5I0EFkU4vqjF8oHCacw7MXIDGQAcDKkINPywTt5uIx%2FFsTWSIbsHFrqnw%2FKtwjq6MyIWhpg9rn2Drg2dg9hfBQenXCgNkOYRqLAFzquTQ3aFD%2FcsQY%2BZgJpYN%2FA9tiTCvL&X-Amz-Signature=ea33aa47797e545374ed4d729f0058bcefd635c57d8f7db7c31f1f9fcbd912be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

