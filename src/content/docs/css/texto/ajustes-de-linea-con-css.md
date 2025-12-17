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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TYOGU2O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzs32xUSgbCN9tbfHfsWE1vZiI%2Fpjq8WTH2s8W2xlRHAiEAtDPi6ObtYKaheE0qZDnW%2BC4A3O1i53uN9IyUzThfA60q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLeJa2V%2B4PMQ509j%2FyrcA9GfleFgCnyE6ZYGRx%2BVqiII1Nb3j2AzhTH%2FAYCp8Ul7fpI8LqFWYcjdHJzul%2FRru0K3966U1J4dhSGNlPvR4hC%2FxuqwaRo4AvN0wL1QvgxC6BnDuKxxxSxvp%2FMK4EZ4S7ANpX11w9Xe4zkGdfJrcRorJ7EfVRGKvQEiu0UzLGOMhs3VmVfYSGB%2Fr%2BWKzYC0%2BXZPdU17KOfAQitxQIKlqOP80HYt2CHgCHkVrX%2ByCclAoH%2BUDGMR46yXt6VlEwZM4EYDK1dPMsHIH%2BFzyPpNGbU4WWNIMtlpMAQRzcxQFUPknAUsPc4audgXJg93KkjqNIqSZyC4BBZzOl3blpj6%2B8aVBZMbgFQwh%2BvA%2BwpZ4lWET06x8bPvgOybSL6YBJD3MeH8Lne6KPh0C7TEJalyC9qhw%2FfwuhujcSMU%2Fdi4tEoryV2pbqQMAFofBs4K58sXGp7sGvoqmVLyxxG4Rskwx0048VVRheQulRxiWybZAAk1HwEEQot6BnETcVlaudtXlIMuBoHWlKRdjyzT4LYvV0i3Q9%2BFKy4MfdIq4LChoDkJdEHa%2FxfPpa5j9i96UoIdv9PF6nydpjEC5uVEVCvpW2Aq8LvSbDqrhOfK6FObROglGZttbsFA4krn65AQMPaOisoGOqUB3E0Jqh03vb6WP9BgOBpKmNEqTRG6Mvur4M4FY%2B34SGWbE1lGey08KNqG2r4DIN3FQGhGunrbj%2FYeo9t9Fybg2Xvg8n3HTU5mHlSJ%2Fu%2B7Qxn%2BtI0NmckezILcUyMZhtu6MCKN6KtXRJLVdNwmz792A4A4u04SZZ3GhcvrVFchMspkgw%2F2iFkB7x9tCAHDGeRQin0uRjtMk6vVAwVUr1QNIAtpMW%2F8&X-Amz-Signature=aff3730e6baa9b18598453e3ebc58ae6d52b4543a254a61d76fd2b27e02ff4f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TYOGU2O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzs32xUSgbCN9tbfHfsWE1vZiI%2Fpjq8WTH2s8W2xlRHAiEAtDPi6ObtYKaheE0qZDnW%2BC4A3O1i53uN9IyUzThfA60q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLeJa2V%2B4PMQ509j%2FyrcA9GfleFgCnyE6ZYGRx%2BVqiII1Nb3j2AzhTH%2FAYCp8Ul7fpI8LqFWYcjdHJzul%2FRru0K3966U1J4dhSGNlPvR4hC%2FxuqwaRo4AvN0wL1QvgxC6BnDuKxxxSxvp%2FMK4EZ4S7ANpX11w9Xe4zkGdfJrcRorJ7EfVRGKvQEiu0UzLGOMhs3VmVfYSGB%2Fr%2BWKzYC0%2BXZPdU17KOfAQitxQIKlqOP80HYt2CHgCHkVrX%2ByCclAoH%2BUDGMR46yXt6VlEwZM4EYDK1dPMsHIH%2BFzyPpNGbU4WWNIMtlpMAQRzcxQFUPknAUsPc4audgXJg93KkjqNIqSZyC4BBZzOl3blpj6%2B8aVBZMbgFQwh%2BvA%2BwpZ4lWET06x8bPvgOybSL6YBJD3MeH8Lne6KPh0C7TEJalyC9qhw%2FfwuhujcSMU%2Fdi4tEoryV2pbqQMAFofBs4K58sXGp7sGvoqmVLyxxG4Rskwx0048VVRheQulRxiWybZAAk1HwEEQot6BnETcVlaudtXlIMuBoHWlKRdjyzT4LYvV0i3Q9%2BFKy4MfdIq4LChoDkJdEHa%2FxfPpa5j9i96UoIdv9PF6nydpjEC5uVEVCvpW2Aq8LvSbDqrhOfK6FObROglGZttbsFA4krn65AQMPaOisoGOqUB3E0Jqh03vb6WP9BgOBpKmNEqTRG6Mvur4M4FY%2B34SGWbE1lGey08KNqG2r4DIN3FQGhGunrbj%2FYeo9t9Fybg2Xvg8n3HTU5mHlSJ%2Fu%2B7Qxn%2BtI0NmckezILcUyMZhtu6MCKN6KtXRJLVdNwmz792A4A4u04SZZ3GhcvrVFchMspkgw%2F2iFkB7x9tCAHDGeRQin0uRjtMk6vVAwVUr1QNIAtpMW%2F8&X-Amz-Signature=6436024d4e5c37f5659ee28d422cc8e3b76efd35eac2d044827a883e389215d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

