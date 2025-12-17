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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6J5IK6O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDSteYMqD4XA0vx2iHAlAxzcLPmTHabOnQM%2F484%2F7G0gIgV13SO%2BFoHWArBE7vIIjgaTEYh5YPs2RHdZ08FzW9%2FBMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDNOudY3%2BCOC5B3b9tircA%2Bv0o%2FUzhtFsjgLkK%2FDcLAtRMUVqFk19ifm%2BcrEal0g6QSnF541hWdEpifvan67Zz9krkWj70zvzRAZT3qsYoY5XWNLNUNRHffDRK6oFd6MoM35Y%2BePs3DJgP3lAKo0PIMKB1cOpxESxO4aT1DYsc59KNoPR6AncaslLAVV96blLoZxIzSS1o%2BmBO0TXWfUGUYq3mIvc%2Bh57NiXfP3dU7rIdvuVBvp2knuD1wXcoHXr0dXnzNOHG%2BEh6qKlKgKRSvgyy4F%2FDqudxUtq6RTxz1SozAXSuh7WCqGN4sQNRbklM9TRThI%2F8dSK7EZ%2FXQAcVT3gZgLy4PBC7xHT3blkixpAtgtZNeNKu%2FkolniUxKHgmLDNMEjAb1SYCv%2Byba1w0zqcQelS01Liqn6SRs5N0cLvvONJK28WB33w%2Bf%2BKV9%2BO5%2BwlXKbyaHNh3ioMs4HD8MswDVdqxjSzv%2FI%2FX4G1nPQeUpu%2BnCUMP4SGQZzpw0RNf5Fsji2tPAC2LZJ7I17uyTSNxaPJl036tw1o9f1p%2BZgErhWNIZyJDlwaXYXyBy1%2FStDtgED5%2FI5vDORjn53wVzUtNQE4EH38ZRLAXs3p4wG1sMAYte%2Bwe6pXnPrY1jDVMz%2F5X8zUkUpiQ3r6jMKvSicoGOqUBoX78n8Dx%2B6FmDdtoc7YGf3qB93xhl5rROb%2FZ%2F%2Fl%2FNCDHF2wzKldN8YltRJ6Jymiuc0dtY6Wh8oMaTCS9KARy9odud3POurYHGzCdVvlFS7mn29NU3KF7s9v70PdpNvMhg48HjB8nv%2BiD2KZgEYjtefCkGRKWSu1VjUXjEGhE3XLJ%2Fawi8iDzHIiac0bgkw41OELXEak6%2Fm5Dbmk29gf1RPHJogrn&X-Amz-Signature=3863a3d40497b80ce8f7e64032405088360adb2f03b9a65206737f4eccf0522c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6J5IK6O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDSteYMqD4XA0vx2iHAlAxzcLPmTHabOnQM%2F484%2F7G0gIgV13SO%2BFoHWArBE7vIIjgaTEYh5YPs2RHdZ08FzW9%2FBMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDNOudY3%2BCOC5B3b9tircA%2Bv0o%2FUzhtFsjgLkK%2FDcLAtRMUVqFk19ifm%2BcrEal0g6QSnF541hWdEpifvan67Zz9krkWj70zvzRAZT3qsYoY5XWNLNUNRHffDRK6oFd6MoM35Y%2BePs3DJgP3lAKo0PIMKB1cOpxESxO4aT1DYsc59KNoPR6AncaslLAVV96blLoZxIzSS1o%2BmBO0TXWfUGUYq3mIvc%2Bh57NiXfP3dU7rIdvuVBvp2knuD1wXcoHXr0dXnzNOHG%2BEh6qKlKgKRSvgyy4F%2FDqudxUtq6RTxz1SozAXSuh7WCqGN4sQNRbklM9TRThI%2F8dSK7EZ%2FXQAcVT3gZgLy4PBC7xHT3blkixpAtgtZNeNKu%2FkolniUxKHgmLDNMEjAb1SYCv%2Byba1w0zqcQelS01Liqn6SRs5N0cLvvONJK28WB33w%2Bf%2BKV9%2BO5%2BwlXKbyaHNh3ioMs4HD8MswDVdqxjSzv%2FI%2FX4G1nPQeUpu%2BnCUMP4SGQZzpw0RNf5Fsji2tPAC2LZJ7I17uyTSNxaPJl036tw1o9f1p%2BZgErhWNIZyJDlwaXYXyBy1%2FStDtgED5%2FI5vDORjn53wVzUtNQE4EH38ZRLAXs3p4wG1sMAYte%2Bwe6pXnPrY1jDVMz%2F5X8zUkUpiQ3r6jMKvSicoGOqUBoX78n8Dx%2B6FmDdtoc7YGf3qB93xhl5rROb%2FZ%2F%2Fl%2FNCDHF2wzKldN8YltRJ6Jymiuc0dtY6Wh8oMaTCS9KARy9odud3POurYHGzCdVvlFS7mn29NU3KF7s9v70PdpNvMhg48HjB8nv%2BiD2KZgEYjtefCkGRKWSu1VjUXjEGhE3XLJ%2Fawi8iDzHIiac0bgkw41OELXEak6%2Fm5Dbmk29gf1RPHJogrn&X-Amz-Signature=8caa815e7e953f1c060024a2b217ae1fa9ea7fe3035d14a50d712f0500667c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

