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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHOIM6CM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFJqsdLKfSwqykEF3hGo8zxZ5T4JOLmoW%2FJo8CxICvOAiANMOxIaKjKS6tRU8kX180mRxtSQwxQg%2F4MPDN4asrJwCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMVUL5RwfAia7G37yLKtwD7C42GgrYBWdI3Gp8kXVx94uu4R0Pj%2FVkW85L%2BVQFsuEFdSocJt%2BlGsaEPai4q4iRDOvMzcVPQa2Qy%2FDs8ZhQX6Cb9W7HMiRMh%2Fiv8Ks5opdpEfTfc2aJTDXqGuRP9qls8owXfVfVN%2FqYVgrvAkThPFh9CSUVsGqFAfMrzqMO8UoXkpgyHySG5WpFZltiC97hseJnNfsWrG71wgiiWCJw8l%2BZzGSk%2BuyUl55OdzYp1fxZsMOWqObhyXPTc6G7Jr0%2FoIWW1U2NjYoErLTvC7FUSvHBQx63eWStQMGmulmxLKiwNl%2B%2BQ%2B9enpQsPyQp4wDvfxo%2F0QDvsmXitn3T6s%2FycwsipBH45Zn7BLTsBfzzzfHhemUuFOoPa1bv2liJKND8ljRHhJDBvijHf5g60uayg%2FIV7FKwHESfz9SqRbX%2BHTmJRURNRQctTd1tc412shUeeezDGm04tIfS8ac6QgJSFzX16onBZTrA9Uta%2FoBdghyFSz6wYbEln3ews%2FCkQp18okDUb3Csspa4RoZjfhPKJWHC0D5Sy7H6FDQfX%2B7XgTvGQhCWhrCGFTGW67AHSOt0RMZbgq3VgIJFlWeWoed7tLJhX54n1OtJEwlEGkOzlASEC1he7xJQQC9ok1Uw8PCJygY6pgHic0tdSn5ZlbaVCoXZmZuyst5ZTi%2F1%2F41whTrsbSNInmhtTBkFIKtUjXRLs6JOLcIFH10wAlA0TyjWr%2FAFOUliVqKOjpI5ufH%2BUE4dpYQXZ4FTPAfnI%2B%2FcdravlerdelhGkx3CtGLi6Vp9e27VPKsSZoG%2B4fq27CRK6oBhupg1Dmfy9KbEzfXW0ff7%2B1CUCacjUPJ33g4FilGlp6fLfnc29myxYwDU&X-Amz-Signature=5fe6fcbe720998a3cc0d835919c5bda309a2386d0f523799bb97784c65cba406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHOIM6CM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFJqsdLKfSwqykEF3hGo8zxZ5T4JOLmoW%2FJo8CxICvOAiANMOxIaKjKS6tRU8kX180mRxtSQwxQg%2F4MPDN4asrJwCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMVUL5RwfAia7G37yLKtwD7C42GgrYBWdI3Gp8kXVx94uu4R0Pj%2FVkW85L%2BVQFsuEFdSocJt%2BlGsaEPai4q4iRDOvMzcVPQa2Qy%2FDs8ZhQX6Cb9W7HMiRMh%2Fiv8Ks5opdpEfTfc2aJTDXqGuRP9qls8owXfVfVN%2FqYVgrvAkThPFh9CSUVsGqFAfMrzqMO8UoXkpgyHySG5WpFZltiC97hseJnNfsWrG71wgiiWCJw8l%2BZzGSk%2BuyUl55OdzYp1fxZsMOWqObhyXPTc6G7Jr0%2FoIWW1U2NjYoErLTvC7FUSvHBQx63eWStQMGmulmxLKiwNl%2B%2BQ%2B9enpQsPyQp4wDvfxo%2F0QDvsmXitn3T6s%2FycwsipBH45Zn7BLTsBfzzzfHhemUuFOoPa1bv2liJKND8ljRHhJDBvijHf5g60uayg%2FIV7FKwHESfz9SqRbX%2BHTmJRURNRQctTd1tc412shUeeezDGm04tIfS8ac6QgJSFzX16onBZTrA9Uta%2FoBdghyFSz6wYbEln3ews%2FCkQp18okDUb3Csspa4RoZjfhPKJWHC0D5Sy7H6FDQfX%2B7XgTvGQhCWhrCGFTGW67AHSOt0RMZbgq3VgIJFlWeWoed7tLJhX54n1OtJEwlEGkOzlASEC1he7xJQQC9ok1Uw8PCJygY6pgHic0tdSn5ZlbaVCoXZmZuyst5ZTi%2F1%2F41whTrsbSNInmhtTBkFIKtUjXRLs6JOLcIFH10wAlA0TyjWr%2FAFOUliVqKOjpI5ufH%2BUE4dpYQXZ4FTPAfnI%2B%2FcdravlerdelhGkx3CtGLi6Vp9e27VPKsSZoG%2B4fq27CRK6oBhupg1Dmfy9KbEzfXW0ff7%2B1CUCacjUPJ33g4FilGlp6fLfnc29myxYwDU&X-Amz-Signature=e3bbafd46a79529c8eff7ff7e3846d95c6814c98f1f51d4e663a3368059cd4a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

