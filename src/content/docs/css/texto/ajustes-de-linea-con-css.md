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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFIUGHQU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgu7gDHcE93%2BPoLBAag5XDj1KEsNySbWUhGvSiUUJMKQIgJM8f5xxHEmvl5TqJbKFKBeq2aRtuWC28EkGUlkfUoIYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCLmD9WMmJYLvMv%2B6SrcA2V%2BfffP4TWGIO6PDA8nZfCT4%2B9qe3VpbbT3k8q9hi%2FbE257zkU%2Bdp5wW7665CNziwj9cWpwZH5EBQE%2FdI4hLo3NMpQF5E1eyBCsALGpaV1yLNc7SflIRmg3Qa09YIP7CEdJ7gUc8XxSYohy37miT0ZbVCRvpy9VribSmrPCFPdmNAbvY4jvuX7zeUSTUJ1sTY2AI82bPhXMj%2BHJ9VbUhGufTtzTAVn0NcAPIjb1N0duMeyCNvn67ZbjcWuB1yEy%2FvYGmqbYqyEyJcdYkf%2BqntvQtF871G%2FCb7W2jw1ObeSQhtrMgkSuPNDKBp4VpLS90yk7Vw9KdkXQY6XRDGdTQtdjYhXfS7MtwYIv3SkT3wHBDb%2F3yAupyxPUP3b1REtZSfs4vgdd4TlilJCzaxwd7DyNPalGSrVmJqG1OVIUStOHHmeF75gVGw96MUTH949K4TzynoxQ0wWhyHIHs0qfIW2%2FpXxsee28%2B%2FWSluYBQ%2F5s8rycP1UhHXS9juMRpc3XSqwW7H0PODS9%2Bil0wN3ijv1hyI%2FH4qad2EE6k67b6%2Fk7bXyK32OH%2B%2FVpzNA9fFle%2BqNTW0AHIC3yrSYmQ%2BR2Gcw0yLsdYnFDTrTSiPVrlbuZtMdBTGUCPzunlIbfMJ6DicoGOqUBbGEsbBM5zNdp587sYP4oona7Mne5jpM2WWCIjy4sP3YDTxw1pMqDz%2BHv6y7H2kolCXf%2FJqiMCVeN7lBU2esMGv6Fj2L1R4x2c79kvymgUbVMwN29GHUVo3KJRW5UHhJwgR9KRDRRX1wVaiIgjEk6c30vTzZAhCE8mRvHYFYgTyUKfxfGOxKu32OS4guPcy%2BsfgwqEIdgKv1j6t6%2Fz5wIzuZjX9fw&X-Amz-Signature=ccddaab799625f91a3e8287acd19cf56627b698e5ff9c988be333e75853df658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFIUGHQU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgu7gDHcE93%2BPoLBAag5XDj1KEsNySbWUhGvSiUUJMKQIgJM8f5xxHEmvl5TqJbKFKBeq2aRtuWC28EkGUlkfUoIYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCLmD9WMmJYLvMv%2B6SrcA2V%2BfffP4TWGIO6PDA8nZfCT4%2B9qe3VpbbT3k8q9hi%2FbE257zkU%2Bdp5wW7665CNziwj9cWpwZH5EBQE%2FdI4hLo3NMpQF5E1eyBCsALGpaV1yLNc7SflIRmg3Qa09YIP7CEdJ7gUc8XxSYohy37miT0ZbVCRvpy9VribSmrPCFPdmNAbvY4jvuX7zeUSTUJ1sTY2AI82bPhXMj%2BHJ9VbUhGufTtzTAVn0NcAPIjb1N0duMeyCNvn67ZbjcWuB1yEy%2FvYGmqbYqyEyJcdYkf%2BqntvQtF871G%2FCb7W2jw1ObeSQhtrMgkSuPNDKBp4VpLS90yk7Vw9KdkXQY6XRDGdTQtdjYhXfS7MtwYIv3SkT3wHBDb%2F3yAupyxPUP3b1REtZSfs4vgdd4TlilJCzaxwd7DyNPalGSrVmJqG1OVIUStOHHmeF75gVGw96MUTH949K4TzynoxQ0wWhyHIHs0qfIW2%2FpXxsee28%2B%2FWSluYBQ%2F5s8rycP1UhHXS9juMRpc3XSqwW7H0PODS9%2Bil0wN3ijv1hyI%2FH4qad2EE6k67b6%2Fk7bXyK32OH%2B%2FVpzNA9fFle%2BqNTW0AHIC3yrSYmQ%2BR2Gcw0yLsdYnFDTrTSiPVrlbuZtMdBTGUCPzunlIbfMJ6DicoGOqUBbGEsbBM5zNdp587sYP4oona7Mne5jpM2WWCIjy4sP3YDTxw1pMqDz%2BHv6y7H2kolCXf%2FJqiMCVeN7lBU2esMGv6Fj2L1R4x2c79kvymgUbVMwN29GHUVo3KJRW5UHhJwgR9KRDRRX1wVaiIgjEk6c30vTzZAhCE8mRvHYFYgTyUKfxfGOxKu32OS4guPcy%2BsfgwqEIdgKv1j6t6%2Fz5wIzuZjX9fw&X-Amz-Signature=b1c598d8241b63ea8a1d23f184d4324d3d99e79e3ca139a8233ba78502f289dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

