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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UIOSXJH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH1uPoUx3Qb9D8piwMyKIdrlzyDF53wMAeAWuxxRUvwUCIQCmm%2BIhoQ08l5Uhjf4T2w9ma%2Bqf%2FaUSIfi5IYDdtJzPsir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMxdCByHcykYuFuDdYKtwDNS2UQ7dAnVcQQKNDQ9a6SL9IVdwodqZXtR92iwIZkLzHGkIbQVCNSPS4a3PaHVXrwqsSW3zSFVSN7s9UgDh5gnIig%2Fa02nZgDo6GFQHey1zPqvZf%2BshoGcDCJBMXhHLwMGT5GadhY5VmsNznhwSnQdv3Zq4Cr92rLA6PEiVnQu%2BNBMx3sIIf53xdn5nUmVykHrKKwaRgdYE1xVoSnCYLfLcEvB78gcjrHGtoul4F0x%2BiXsUMIO%2FCBoKc9ipmd4LT2mEbhmJHUU%2Fj23MN8MRfe9LYnKpvhY%2F7IgjfEydLUMD%2Fd50JhDdzYK8qmtiCu3oS70QUSnxRRFSo2kpwr8xaaOgotu2OjBSgnuA1jw%2FzfDuLBzOjqzz1Cx72RbpKbNeci0HDVC8hE6%2FMCZWhqUghpFXxQwLPpzin3HxtADgfUsmPGSb18Z1CtAl6QODf9pIcZgrA4Ey5MpidZunpVaZAdPQz8jQ4JyeD6QdBQfKBIgyexL2q3rJuCg4iYrmm9GLCuzN5goqlrrb7bClvQyeDGbMqLahHq22DdOFvv15fcnbtk2ZVaRXa3mf2KwcroobxpZM5I0%2B%2FzxToKfhly3T45Y154unsC%2FQQVqw04l8VS4bo%2FHrovo0COVy2Ew4wnsaKygY6pgF3uLkt1oAuhNU6jSnZvN6D1rP3gzftFzbboK5Nr3cfAY0YVi8t5qS9J%2BbLUzzy8c2QPc7%2FqMsyBhXuml8YIlaawRB96OUbL8Fjjarl3taXELx9DIP%2BlQuUOeDCK67PqUMhVvO7CgvcpYAunjX2R%2Fq4UIrhVnq2mhEbhe5BFuY8yxoOdQUN4WM4kfJhxW5JWYQVDNzJk%2BG3m%2Fc%2FtuEP%2Bino9H8PFpSv&X-Amz-Signature=8b1422b4be7d6bdbb148912accd9f5e84b51269a397c3dcf3d5d81ae02089e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UIOSXJH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH1uPoUx3Qb9D8piwMyKIdrlzyDF53wMAeAWuxxRUvwUCIQCmm%2BIhoQ08l5Uhjf4T2w9ma%2Bqf%2FaUSIfi5IYDdtJzPsir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMxdCByHcykYuFuDdYKtwDNS2UQ7dAnVcQQKNDQ9a6SL9IVdwodqZXtR92iwIZkLzHGkIbQVCNSPS4a3PaHVXrwqsSW3zSFVSN7s9UgDh5gnIig%2Fa02nZgDo6GFQHey1zPqvZf%2BshoGcDCJBMXhHLwMGT5GadhY5VmsNznhwSnQdv3Zq4Cr92rLA6PEiVnQu%2BNBMx3sIIf53xdn5nUmVykHrKKwaRgdYE1xVoSnCYLfLcEvB78gcjrHGtoul4F0x%2BiXsUMIO%2FCBoKc9ipmd4LT2mEbhmJHUU%2Fj23MN8MRfe9LYnKpvhY%2F7IgjfEydLUMD%2Fd50JhDdzYK8qmtiCu3oS70QUSnxRRFSo2kpwr8xaaOgotu2OjBSgnuA1jw%2FzfDuLBzOjqzz1Cx72RbpKbNeci0HDVC8hE6%2FMCZWhqUghpFXxQwLPpzin3HxtADgfUsmPGSb18Z1CtAl6QODf9pIcZgrA4Ey5MpidZunpVaZAdPQz8jQ4JyeD6QdBQfKBIgyexL2q3rJuCg4iYrmm9GLCuzN5goqlrrb7bClvQyeDGbMqLahHq22DdOFvv15fcnbtk2ZVaRXa3mf2KwcroobxpZM5I0%2B%2FzxToKfhly3T45Y154unsC%2FQQVqw04l8VS4bo%2FHrovo0COVy2Ew4wnsaKygY6pgF3uLkt1oAuhNU6jSnZvN6D1rP3gzftFzbboK5Nr3cfAY0YVi8t5qS9J%2BbLUzzy8c2QPc7%2FqMsyBhXuml8YIlaawRB96OUbL8Fjjarl3taXELx9DIP%2BlQuUOeDCK67PqUMhVvO7CgvcpYAunjX2R%2Fq4UIrhVnq2mhEbhe5BFuY8yxoOdQUN4WM4kfJhxW5JWYQVDNzJk%2BG3m%2Fc%2FtuEP%2Bino9H8PFpSv&X-Amz-Signature=32876492b136b97bbefe896225af8ce3e85b14b9d24adc86d229f3a9f7b5c229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

