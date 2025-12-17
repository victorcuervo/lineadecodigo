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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVKRSKUW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6V2Wu%2BLIvFZyaXyF5UTcXpkdu%2Bqe11ZHi2aF0F3np2QIgPQPGX9B%2ByDyYVcnXhr1EvEqKTi58IuDMhnR7T1glaBoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIWeyThoFCP4%2B7J%2FEyrcA6XTpVf%2BBIw6vZcMKpYOfoXxPbPZBuQN5BV6pUNJ27TuE0f1%2FUxMifyejqhv%2BNABMU2DTXoC%2Fsnn2zOjLNiKLduOnY%2BqiK00T7jellr6bmE%2F5P1fGpoMRWEYERYoPcl%2FDckh3fEdk3u0hhiTO5ykSk3RH2P5fKXiPZHQ91fSWo%2FJ6DZ2uCRJjHl4BFy%2Bs0AWGzhy4kJ2Ko%2FaBINGbzITsucquG3FyHjZZpxZO7gQiGYBfFu%2FOwjGvjghz0DcSdkFTzD9qA6kXN%2B73bk60PudcW%2BLjNkMk6KnGUfEL7ub1067eU0R%2FacEVdijd2PmXRNssSEEh0BblwqNUaOeg12nTgS2UkVN%2B6FcSyTQjKxObLtr21qUZ0B%2FVxOo2W0Vyjeh0GS0l7dQyw4FTfz2x%2Btfhqdc5X%2BrKYCIiAT63XbGyUUo2Lu1DSHpUia3cPd2Wgt9yObqpSfi9aFUfPnMuusBsezD%2BaacrGk%2Be1gzy6%2FOXXx%2FQH9FUg3CFYRkI850%2FKWC5yYmCYYWdGVCb%2B1ia5%2FQ3JAgI9R8dvuO88Ss3EaEJUvqmGneujKMbafJ6ZurAO9%2BnaTiok5WcxttV9fx7eMtxC0rYoC9CpiTzqJ9rCZavFEGTYn3aH9L3YtGxwRNMJjSicoGOqUBS5cpqJDi08Lloy7BoX%2BhsufW9MP5nvLxn23Hw2RhQ1xo15jm9%2B6AWMdrnr2gwNutkGNjv1tLW5yaT80V%2FHqvhg1r9IGOtWF9BjX5rFBPcHXPt1uZ07iGGfHbnwAsCT1NMHcSCGqv2X44nNbgIsz9dY98iwopmy1RWQOL%2BSxkTDGyJvJ3KmPkf%2BAAnnF4U6JHNThoXzeCYdmIzPKahddZ5VUV3O8O&X-Amz-Signature=4005896fd44c428e3ac0009fbd41ddc8fbb7e23a363be157ad2cdbd6e18de3b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVKRSKUW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6V2Wu%2BLIvFZyaXyF5UTcXpkdu%2Bqe11ZHi2aF0F3np2QIgPQPGX9B%2ByDyYVcnXhr1EvEqKTi58IuDMhnR7T1glaBoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIWeyThoFCP4%2B7J%2FEyrcA6XTpVf%2BBIw6vZcMKpYOfoXxPbPZBuQN5BV6pUNJ27TuE0f1%2FUxMifyejqhv%2BNABMU2DTXoC%2Fsnn2zOjLNiKLduOnY%2BqiK00T7jellr6bmE%2F5P1fGpoMRWEYERYoPcl%2FDckh3fEdk3u0hhiTO5ykSk3RH2P5fKXiPZHQ91fSWo%2FJ6DZ2uCRJjHl4BFy%2Bs0AWGzhy4kJ2Ko%2FaBINGbzITsucquG3FyHjZZpxZO7gQiGYBfFu%2FOwjGvjghz0DcSdkFTzD9qA6kXN%2B73bk60PudcW%2BLjNkMk6KnGUfEL7ub1067eU0R%2FacEVdijd2PmXRNssSEEh0BblwqNUaOeg12nTgS2UkVN%2B6FcSyTQjKxObLtr21qUZ0B%2FVxOo2W0Vyjeh0GS0l7dQyw4FTfz2x%2Btfhqdc5X%2BrKYCIiAT63XbGyUUo2Lu1DSHpUia3cPd2Wgt9yObqpSfi9aFUfPnMuusBsezD%2BaacrGk%2Be1gzy6%2FOXXx%2FQH9FUg3CFYRkI850%2FKWC5yYmCYYWdGVCb%2B1ia5%2FQ3JAgI9R8dvuO88Ss3EaEJUvqmGneujKMbafJ6ZurAO9%2BnaTiok5WcxttV9fx7eMtxC0rYoC9CpiTzqJ9rCZavFEGTYn3aH9L3YtGxwRNMJjSicoGOqUBS5cpqJDi08Lloy7BoX%2BhsufW9MP5nvLxn23Hw2RhQ1xo15jm9%2B6AWMdrnr2gwNutkGNjv1tLW5yaT80V%2FHqvhg1r9IGOtWF9BjX5rFBPcHXPt1uZ07iGGfHbnwAsCT1NMHcSCGqv2X44nNbgIsz9dY98iwopmy1RWQOL%2BSxkTDGyJvJ3KmPkf%2BAAnnF4U6JHNThoXzeCYdmIzPKahddZ5VUV3O8O&X-Amz-Signature=2f57ac7082f760116b6ff2432db7d66ad34531c2be9b66c7cd238773c0472290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

