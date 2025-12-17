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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z56EKK66%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJBFGx0qITA%2Fm4DRRwGoyLMz9qG6cxqYCVjhRjlNp9JAiEAxMJWonE3GkI8TgLUw51w0qnEszMwePM9Phg9%2B0pcva8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdw0mnPfdrKJ1vs1SrcA51VeO4whO89DyoQbUCapaHLeJfODf8q110YERQsB7dU0cy%2F41N7YbCRZ3tXK51Jf51flI0D1Gd2NwaQRYC6zGhWv1MMK%2FKi4W7fEPW6GF18mY4edEPbi6s7Id0%2F3uMj%2BGHWmeYVy2SrUa3MWeNIjRUEmRk12fxXbx8BwMBZM1HDIr%2Fh10ZlIzn8HCJlaQu3ECALTOXWzQRhxelIKLLVrY6Iq1C3vHOSVt5wEN1r6ma25pROCGMIgMq%2F4sv9l3Lxfp834M9NAyOrtvH21mSxClV70s5fK5C9CCPPgi6%2BaEO%2FWYKCSag6I7NRyxyoSXRuvJAJnQ8BFwQ7G1Mh2IBm9z5x99PyZUpOA1fAIdnWkvrbPPoO67nl2Pf7ftlKqSnAvwyHIgmQ06CFk%2B%2B6xUl%2Bogeg1CRXmSmQM22nLGrc2dM2NJ1QhSWNu7Ky0DrcKFtLXzp3xOYHGdKn6lMZd%2Bz5I45qqArnnu3b%2BqutB%2B0CuDdMSTPRabx84LfE0%2Fl%2FIZ55ZWdEY%2FAYzuVi7zPS3EKhuoGnKoQBhZZQrIXrm9OIuJ8Vu%2FfU9zp76dhlvv6gC9aKDNGvVm06JXWtg73mK1wCgiQzLKG7HQakXKISOzZ9L3VWrvvmXO12NJcBl%2FG3MJqBi8oGOqUBOtdIvCWVPQK3%2BUtEwdi0xV9LWhoBHbUhpwr%2FmumIz1WYCl5DHbVPqerJyeknKKtLDy5Uyk6LcFIMbPpHGd6ou5FRnPF38tosH92zs4Vds0Zc3McRcMXd2oj0Gi%2Fthe5JrP8BZQacxGF%2Fx3NloUNiJ2%2Bbuxcnvnm0lO6LNX2kmp0R4AzzpR2htOXLU0slt%2Bk79wlX7GbgtZgE7d4y8saPZzS4Felu&X-Amz-Signature=dfe1a255d3c488b676484f7b2f1d6dede44cf0d557eafabf946fad56664eabfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z56EKK66%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJBFGx0qITA%2Fm4DRRwGoyLMz9qG6cxqYCVjhRjlNp9JAiEAxMJWonE3GkI8TgLUw51w0qnEszMwePM9Phg9%2B0pcva8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdw0mnPfdrKJ1vs1SrcA51VeO4whO89DyoQbUCapaHLeJfODf8q110YERQsB7dU0cy%2F41N7YbCRZ3tXK51Jf51flI0D1Gd2NwaQRYC6zGhWv1MMK%2FKi4W7fEPW6GF18mY4edEPbi6s7Id0%2F3uMj%2BGHWmeYVy2SrUa3MWeNIjRUEmRk12fxXbx8BwMBZM1HDIr%2Fh10ZlIzn8HCJlaQu3ECALTOXWzQRhxelIKLLVrY6Iq1C3vHOSVt5wEN1r6ma25pROCGMIgMq%2F4sv9l3Lxfp834M9NAyOrtvH21mSxClV70s5fK5C9CCPPgi6%2BaEO%2FWYKCSag6I7NRyxyoSXRuvJAJnQ8BFwQ7G1Mh2IBm9z5x99PyZUpOA1fAIdnWkvrbPPoO67nl2Pf7ftlKqSnAvwyHIgmQ06CFk%2B%2B6xUl%2Bogeg1CRXmSmQM22nLGrc2dM2NJ1QhSWNu7Ky0DrcKFtLXzp3xOYHGdKn6lMZd%2Bz5I45qqArnnu3b%2BqutB%2B0CuDdMSTPRabx84LfE0%2Fl%2FIZ55ZWdEY%2FAYzuVi7zPS3EKhuoGnKoQBhZZQrIXrm9OIuJ8Vu%2FfU9zp76dhlvv6gC9aKDNGvVm06JXWtg73mK1wCgiQzLKG7HQakXKISOzZ9L3VWrvvmXO12NJcBl%2FG3MJqBi8oGOqUBOtdIvCWVPQK3%2BUtEwdi0xV9LWhoBHbUhpwr%2FmumIz1WYCl5DHbVPqerJyeknKKtLDy5Uyk6LcFIMbPpHGd6ou5FRnPF38tosH92zs4Vds0Zc3McRcMXd2oj0Gi%2Fthe5JrP8BZQacxGF%2Fx3NloUNiJ2%2Bbuxcnvnm0lO6LNX2kmp0R4AzzpR2htOXLU0slt%2Bk79wlX7GbgtZgE7d4y8saPZzS4Felu&X-Amz-Signature=22b82a8dfa9207786e7392f07a97fc55e966e6415baeeae4caf94fed5e1ccc0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

