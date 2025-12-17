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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QWUZTHN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2ZtVED%2BudJVgXTNnFoo%2FiEwdTli9U%2BcuuwbGQ%2FuRWXAiEAjpH%2Bb4zzqoO%2F7oDQi96uQ0R8Ob%2BMgNkCd3205QQ1ZX4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKSk3%2BCLTMg%2Ftf0YRyrcAy4F7faJegwuh56kz1%2BAGNyoiXtpHmXGqQxuamQhffjszmPfpKYxiC3G%2FTTvcbdRFNHZiqefzGGrGUHPSgsh4nN24XH1fO%2Fh6pe1zqoa1v3qiMJU8UPS3nB2LLPvrGA556prPqb9mlr8uVD%2FjgMVwIWlf%2F2FqG%2Bk8GnUTaRO1UbHTDAmLo25EmZRlyNjVMy8wUFskOAn3uBn8L1ZOQchHLMb%2BwcT93J2wS8luJb41nTZUOopM3b3GJBbPIG2uvMvN4Ah3aR1QMIRb9hGwAK04xoL0X6UT5GEAs5bxEkaMOR0gR4CCeMEPBviM1Gt%2Fpxw6gXq%2FZ64WE3qU9HyZdxDVxuXcFTg%2BtHgCRudzcE3XtIIPstVbJWI%2FdSNtRsvJpkQYfbvGTNPLhQlQXMZmjixaM2K3t2wrQQv0u2J9WGxGmtyJ80J8Y9X8%2Bu4wJeqX4Ca2kIIf5lethdawe8TrePTic%2FhsfK2ZL4lacbsYz5YMUT%2FK47zKFXsQCMYUz7A5rTXSrCYL8roUarvB08RwL%2BWooh%2BaKrijnPcK8tGsq8fzQ7xBS44%2FL9%2FZePdQSAZsUdFlBS0rgSseDV7bwRh2ymvKhT1tmUOf99OL5522LH3In71sIcxSRtnEuJkJnskMNXhisoGOqUBhgjYeu%2BR8G0iFuU9K8zKiR1tEYgqRBjLoVZt9QsVmNSwi%2BOeL6xY4gDBi8Bmj1UWEy2jPWuDqs1AMu1Qbc8L53NCYm5HesRIKv%2BP1hSoFUGvm7oslB6jLsjtywITqci2LYDLBoJ9O%2BSEo4wWjLBpfOFajL%2BzK3xkoQPv%2FviWdpeZ0Sj2f%2FOxaQ4fJXOjZ6CDdjABef6kGHrJsTNSEjlRNuPA8KNM&X-Amz-Signature=2c86a2eb29f5c64ef059c931d5fc8755f2e61f32cc160bcf746a31f512e6bdcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QWUZTHN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2ZtVED%2BudJVgXTNnFoo%2FiEwdTli9U%2BcuuwbGQ%2FuRWXAiEAjpH%2Bb4zzqoO%2F7oDQi96uQ0R8Ob%2BMgNkCd3205QQ1ZX4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKSk3%2BCLTMg%2Ftf0YRyrcAy4F7faJegwuh56kz1%2BAGNyoiXtpHmXGqQxuamQhffjszmPfpKYxiC3G%2FTTvcbdRFNHZiqefzGGrGUHPSgsh4nN24XH1fO%2Fh6pe1zqoa1v3qiMJU8UPS3nB2LLPvrGA556prPqb9mlr8uVD%2FjgMVwIWlf%2F2FqG%2Bk8GnUTaRO1UbHTDAmLo25EmZRlyNjVMy8wUFskOAn3uBn8L1ZOQchHLMb%2BwcT93J2wS8luJb41nTZUOopM3b3GJBbPIG2uvMvN4Ah3aR1QMIRb9hGwAK04xoL0X6UT5GEAs5bxEkaMOR0gR4CCeMEPBviM1Gt%2Fpxw6gXq%2FZ64WE3qU9HyZdxDVxuXcFTg%2BtHgCRudzcE3XtIIPstVbJWI%2FdSNtRsvJpkQYfbvGTNPLhQlQXMZmjixaM2K3t2wrQQv0u2J9WGxGmtyJ80J8Y9X8%2Bu4wJeqX4Ca2kIIf5lethdawe8TrePTic%2FhsfK2ZL4lacbsYz5YMUT%2FK47zKFXsQCMYUz7A5rTXSrCYL8roUarvB08RwL%2BWooh%2BaKrijnPcK8tGsq8fzQ7xBS44%2FL9%2FZePdQSAZsUdFlBS0rgSseDV7bwRh2ymvKhT1tmUOf99OL5522LH3In71sIcxSRtnEuJkJnskMNXhisoGOqUBhgjYeu%2BR8G0iFuU9K8zKiR1tEYgqRBjLoVZt9QsVmNSwi%2BOeL6xY4gDBi8Bmj1UWEy2jPWuDqs1AMu1Qbc8L53NCYm5HesRIKv%2BP1hSoFUGvm7oslB6jLsjtywITqci2LYDLBoJ9O%2BSEo4wWjLBpfOFajL%2BzK3xkoQPv%2FviWdpeZ0Sj2f%2FOxaQ4fJXOjZ6CDdjABef6kGHrJsTNSEjlRNuPA8KNM&X-Amz-Signature=1e5b9f0be597aff5a7435dd4b79822cc5b789919dff60ea13a165cccf8d92184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

