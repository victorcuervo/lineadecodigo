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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2D5KQS3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3seepHYwPGDhK78BKzCnNrmf44%2BnZNftY%2FQ%2FXOBwpFQIgUKTfKcUSHW9VBLObIQqQsgklm8uVoU5A6DR0xEmsnPwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLpUqjoYmbFTfGgLDyrcA0BTutUGx9gcWSjppmZC17zJuRDpsjJi1O23wiBryp4A5QLd23lY3ivyjgAzXphpXHvrKwuk1BFlGHaWWwerjCW6Q1lXBmnSGkpqpD5VOQLRxiCpiyYGasTZp8atdTATY%2FcJrbPbeJ2Wc0Nos9V33hzEKSW5p%2FNoXXuMj5VHHXB9hf7J8UYGIhNUEA2gA%2BF8DFZPQkoTedDfqLd4%2FaKWyy8ArBMMV61vo9EmHDncBUDjtpiz%2BtXM1YBY3WWMif%2FcHaaR%2FvKJW2%2Be4yl%2F9ZWTAEWXrMJW0%2F6JwG6XeQTACoV2BpiHgFKl56A0%2FeC%2Bjng7%2FG0Avk9c1SIiIFcimNcjMmDaGPiOfmIPuTsCZR9dHhe0onKs5TBGjjWQeB0ihVbBQvS%2Fn23F4uVmI%2FQ%2FAobBU8HDo7wj%2FCL9uTpCmcPvDDU9J42sgZwILOfim1TuS0iHsqEKO%2BgwLbvWJq%2F8CmVkmJL37Cre%2Bjkt4r4%2BA%2FeiR%2BgwPf2k%2FKxiA80nMPmS3VoeEk9Ushzny%2Fa%2FGUvoLiW5s4zL1MHm99460EW2SNo7x5s4MysT9o8V9NMmbdtguOS57DHxbFyhpzRnbd9YNUE66XAYL06yWdzW3XaFWgzFYcXLF00u4tGPBZqalt4hMMeOisoGOqUBJL%2FqOISPmLR9%2BZ%2BKn2Xp%2FaO8OsBOVcGUPw4JGZs4esIdAd6D4%2B4inKBt2jOQwc5cVlzwxYEB2AWXjR1d2oknUvL1QVnNhbbJxri16C1fT6Ibhh1hq3lJ7o1ubbc6JIHrR7r8AiO3p47Lfp%2B6ZVVCohsNlQiMjjbu%2BTfTio3%2BKm4q%2Bgb4%2B1NmSApIpqiUcQWSMYmP1y0dI%2Bpk0i2%2BODMCB9uyfv%2Bu&X-Amz-Signature=06bb37a9c08143350651896258aabafa39954d6377bbbb26a82ff1390a96aa35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2D5KQS3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3seepHYwPGDhK78BKzCnNrmf44%2BnZNftY%2FQ%2FXOBwpFQIgUKTfKcUSHW9VBLObIQqQsgklm8uVoU5A6DR0xEmsnPwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLpUqjoYmbFTfGgLDyrcA0BTutUGx9gcWSjppmZC17zJuRDpsjJi1O23wiBryp4A5QLd23lY3ivyjgAzXphpXHvrKwuk1BFlGHaWWwerjCW6Q1lXBmnSGkpqpD5VOQLRxiCpiyYGasTZp8atdTATY%2FcJrbPbeJ2Wc0Nos9V33hzEKSW5p%2FNoXXuMj5VHHXB9hf7J8UYGIhNUEA2gA%2BF8DFZPQkoTedDfqLd4%2FaKWyy8ArBMMV61vo9EmHDncBUDjtpiz%2BtXM1YBY3WWMif%2FcHaaR%2FvKJW2%2Be4yl%2F9ZWTAEWXrMJW0%2F6JwG6XeQTACoV2BpiHgFKl56A0%2FeC%2Bjng7%2FG0Avk9c1SIiIFcimNcjMmDaGPiOfmIPuTsCZR9dHhe0onKs5TBGjjWQeB0ihVbBQvS%2Fn23F4uVmI%2FQ%2FAobBU8HDo7wj%2FCL9uTpCmcPvDDU9J42sgZwILOfim1TuS0iHsqEKO%2BgwLbvWJq%2F8CmVkmJL37Cre%2Bjkt4r4%2BA%2FeiR%2BgwPf2k%2FKxiA80nMPmS3VoeEk9Ushzny%2Fa%2FGUvoLiW5s4zL1MHm99460EW2SNo7x5s4MysT9o8V9NMmbdtguOS57DHxbFyhpzRnbd9YNUE66XAYL06yWdzW3XaFWgzFYcXLF00u4tGPBZqalt4hMMeOisoGOqUBJL%2FqOISPmLR9%2BZ%2BKn2Xp%2FaO8OsBOVcGUPw4JGZs4esIdAd6D4%2B4inKBt2jOQwc5cVlzwxYEB2AWXjR1d2oknUvL1QVnNhbbJxri16C1fT6Ibhh1hq3lJ7o1ubbc6JIHrR7r8AiO3p47Lfp%2B6ZVVCohsNlQiMjjbu%2BTfTio3%2BKm4q%2Bgb4%2B1NmSApIpqiUcQWSMYmP1y0dI%2Bpk0i2%2BODMCB9uyfv%2Bu&X-Amz-Signature=cf550ecc459decc97ece116eb008f431f3fcec00b6bcd08e306889f697b2496c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

