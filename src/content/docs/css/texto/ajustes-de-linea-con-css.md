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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSH2IOO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXtX3%2BTbBbTwYCQT7ut9YFdL1ogpM0cJ%2FBjno%2F5sn4IAiEAoP%2FI%2FJn1WjdtvkUxtyp87J8vJbIUNfZUygSzmFZSbdMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOZhmmRpqf1T%2BDvlQCrcAwh9j4SaJy0qYeaZqkOQCNQpGAEtRa5%2BaRuklojX1T8ycEaLxBr2rPm0UKECquFx5Jlhwx%2BnuUuZpktpEeq8eExN7AU59x7GZ%2FxfGAllYdbv%2Bj4N5xdAw9MyumeR%2BxTp4Hso46v7%2Bv8aOTnTGqchR70XPgRe5VcOSOmDANmL68hUA8V4nKK217kUl27Vqzc2gb%2FPhr9o9aMmhib4k%2FZ%2Fg%2F8I14IegCVbxy8DtwVO84kCpR3Koc%2BVGPJkYfk9Oj8TtFkaixuRKvWhcLnEjn6%2Bg2W2wkyhq%2FoJMRzrdJ7bAIESouRYajwbcEx33NEln3FdlmzCOuUGXKxNzLYfRI%2B08GS6OqgGgKkc0ETx8AZKeOsmSTbdZKb8EqxJIpeiG9%2FcaKD%2FYYhxBxS4F2BNv1uaOAsVHQsFbeH2lzxUHf5ZA3G%2Bb9epP4jDHomsqs8qVzzABziOMX5gX6L6zWHghiVLdOPS21Z6kI2DhtmbgQSCre143OZeJjNV2pjW3h2A7PYGldb03N0F4UaGBrZlvYHv8wfunL6zsSx2JG5QE7dtsTk17EPH5V3LdgwfZXc8AYcpc8oIyVYC1Xc38CdHW4uhcfGyEO391te0IQCMUd2tnf6i9eXYRBDk3bU0FKv4ML7hisoGOqUBl86KR4YuurS72XiQnAfEF7qhjyERHB%2FjKTX7S3fODOKSzh0eIL1hQwcRVAMgcvCBT3nb4Re8%2BIEVXmyMJwflGDnysK%2Fe80dl5r3MZrcc1REgCk%2BRmBXVS9lYeasO8fnpMDnoKWEvPP0irHk3XD5QJamRTxpmGac8zs7Dc%2BOB17SmrqUgc4cGWARuHgvcakfDTKaX75TAvcUgRXpc9C2PXx7P%2BBJm&X-Amz-Signature=3f8ccea81337ca4350710ad04eca1902601755f3a8b8fa28c68cca61f9d57ad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSH2IOO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXtX3%2BTbBbTwYCQT7ut9YFdL1ogpM0cJ%2FBjno%2F5sn4IAiEAoP%2FI%2FJn1WjdtvkUxtyp87J8vJbIUNfZUygSzmFZSbdMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOZhmmRpqf1T%2BDvlQCrcAwh9j4SaJy0qYeaZqkOQCNQpGAEtRa5%2BaRuklojX1T8ycEaLxBr2rPm0UKECquFx5Jlhwx%2BnuUuZpktpEeq8eExN7AU59x7GZ%2FxfGAllYdbv%2Bj4N5xdAw9MyumeR%2BxTp4Hso46v7%2Bv8aOTnTGqchR70XPgRe5VcOSOmDANmL68hUA8V4nKK217kUl27Vqzc2gb%2FPhr9o9aMmhib4k%2FZ%2Fg%2F8I14IegCVbxy8DtwVO84kCpR3Koc%2BVGPJkYfk9Oj8TtFkaixuRKvWhcLnEjn6%2Bg2W2wkyhq%2FoJMRzrdJ7bAIESouRYajwbcEx33NEln3FdlmzCOuUGXKxNzLYfRI%2B08GS6OqgGgKkc0ETx8AZKeOsmSTbdZKb8EqxJIpeiG9%2FcaKD%2FYYhxBxS4F2BNv1uaOAsVHQsFbeH2lzxUHf5ZA3G%2Bb9epP4jDHomsqs8qVzzABziOMX5gX6L6zWHghiVLdOPS21Z6kI2DhtmbgQSCre143OZeJjNV2pjW3h2A7PYGldb03N0F4UaGBrZlvYHv8wfunL6zsSx2JG5QE7dtsTk17EPH5V3LdgwfZXc8AYcpc8oIyVYC1Xc38CdHW4uhcfGyEO391te0IQCMUd2tnf6i9eXYRBDk3bU0FKv4ML7hisoGOqUBl86KR4YuurS72XiQnAfEF7qhjyERHB%2FjKTX7S3fODOKSzh0eIL1hQwcRVAMgcvCBT3nb4Re8%2BIEVXmyMJwflGDnysK%2Fe80dl5r3MZrcc1REgCk%2BRmBXVS9lYeasO8fnpMDnoKWEvPP0irHk3XD5QJamRTxpmGac8zs7Dc%2BOB17SmrqUgc4cGWARuHgvcakfDTKaX75TAvcUgRXpc9C2PXx7P%2BBJm&X-Amz-Signature=6c56ca2ef09f50105108c2c6bf46445389c931180b282a066d60ba03ea13c5c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

