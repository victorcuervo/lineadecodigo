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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZ3PCOT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPvnMEXMHyLhhHl1mC9RJ9cTC9%2BJi0rMirxTNrxhRg%2FAIgRk7DL2maQAxdoaGr2NKKZRKY2SxXuCgseQqFlxIvp6cq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHMbSKkewyvVvlkW8CrcA%2BvT1B9%2Bs1qYI6yCGLuBspEu4AKJNmYmQld5xRSfEbTBtqekLddut3x0l1FYeup1%2BP76qg7ynBrvCXWuggcPswEGcwrya%2BBKzewTELtdYZr7WaxV2MMCgpGM%2FDDPIUafqDFHWb4pc4Qwvh3iTV098zhqhQ5cHQpP8mZekehWmmT0YIT1tsHiXhNNSZL49gPUKBE5xgACnKhtOE0VaUeexJvR39HSzv2BTuksuUyHg%2FiUm7y4mUWXme40MD%2Bbow47e460NMNd4AEimb15eC3AIX5ACaFCBa%2FHe0NbDZlG1lNkZOWYWQWIW4XKV5oE%2FXsoWdmzj2yiiNWeZ2TVh58EjmqExBN5f1xupHf475mZ1nj%2Bj%2FJNR1MTdlCxn7VVuLog09X4VU0Lk%2FWS2W0X59PeHxm0%2BL%2BewPK8oNG867L763heQQYnKVbD92LZyrROulPiy9qJ60s2RfHwh1DxPNNAIfcGDOthiK%2BpN1%2FywuABSP3r0%2Fp3N68lkrbXAk9uLQkoiDuKOTuDyHSN3FwrYamLJUvjslomhyTD13WrhmvkjrCYx9fEYsnID0dWNthqKOfoJkj8c%2BzaBT9%2Ba8LNf88%2FqI0Dhqgbex7yLqH82cJxhYuJYo%2B5hPkmhTiCOi%2B2MKePisoGOqUBPz2AimZeVyhDuPxKokneKetboM8ULqAk5%2FsW8Y3Enf9mg3I5wlNfy%2B4JTNhNk4He0MiUXHBqGzkwOBN2Gyl7CwtUGRXZqhHK%2BWVkzAPCxF4BmQrSacCsifczL7M2DPArQ8OX8uX818lDOHx99GLi8T1p%2BSWszOfgRY%2FFQAQmyG9D7tQMLqkY5DWm5EkzN72wsd78EQtp5EYsb6m32FbuhKgv8Il5&X-Amz-Signature=b37f2c59ebbfb121011224f057636af656939319babd40da49c9164a1b93b08f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZ3PCOT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPvnMEXMHyLhhHl1mC9RJ9cTC9%2BJi0rMirxTNrxhRg%2FAIgRk7DL2maQAxdoaGr2NKKZRKY2SxXuCgseQqFlxIvp6cq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHMbSKkewyvVvlkW8CrcA%2BvT1B9%2Bs1qYI6yCGLuBspEu4AKJNmYmQld5xRSfEbTBtqekLddut3x0l1FYeup1%2BP76qg7ynBrvCXWuggcPswEGcwrya%2BBKzewTELtdYZr7WaxV2MMCgpGM%2FDDPIUafqDFHWb4pc4Qwvh3iTV098zhqhQ5cHQpP8mZekehWmmT0YIT1tsHiXhNNSZL49gPUKBE5xgACnKhtOE0VaUeexJvR39HSzv2BTuksuUyHg%2FiUm7y4mUWXme40MD%2Bbow47e460NMNd4AEimb15eC3AIX5ACaFCBa%2FHe0NbDZlG1lNkZOWYWQWIW4XKV5oE%2FXsoWdmzj2yiiNWeZ2TVh58EjmqExBN5f1xupHf475mZ1nj%2Bj%2FJNR1MTdlCxn7VVuLog09X4VU0Lk%2FWS2W0X59PeHxm0%2BL%2BewPK8oNG867L763heQQYnKVbD92LZyrROulPiy9qJ60s2RfHwh1DxPNNAIfcGDOthiK%2BpN1%2FywuABSP3r0%2Fp3N68lkrbXAk9uLQkoiDuKOTuDyHSN3FwrYamLJUvjslomhyTD13WrhmvkjrCYx9fEYsnID0dWNthqKOfoJkj8c%2BzaBT9%2Ba8LNf88%2FqI0Dhqgbex7yLqH82cJxhYuJYo%2B5hPkmhTiCOi%2B2MKePisoGOqUBPz2AimZeVyhDuPxKokneKetboM8ULqAk5%2FsW8Y3Enf9mg3I5wlNfy%2B4JTNhNk4He0MiUXHBqGzkwOBN2Gyl7CwtUGRXZqhHK%2BWVkzAPCxF4BmQrSacCsifczL7M2DPArQ8OX8uX818lDOHx99GLi8T1p%2BSWszOfgRY%2FFQAQmyG9D7tQMLqkY5DWm5EkzN72wsd78EQtp5EYsb6m32FbuhKgv8Il5&X-Amz-Signature=d77a6676dd0508bf2aa085f1cfb94ccb489ac7f6a2f46962f4fe4be40c7629db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

