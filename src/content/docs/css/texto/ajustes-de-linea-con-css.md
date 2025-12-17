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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLKA7KV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpGRByYvr%2BqTVSA4OFPcu%2BOnw7fQm%2FPqLC0LN0a7GZPAIhAOGU%2FM7R47UGJwVhuB2PMV8ywrFrVoEma6G9x7fYCtNrKv8DCHkQABoMNjM3NDIzMTgzODA1Igy9Z4BxS8w1T6CuAN0q3APQfte%2FKoW%2Bv9VdLgqLeZljJmNU1Oy1cn7aHKjllVl7%2BqU25KM%2F9ZPlo5s7pKr72sh5pHZRx9s2h%2BTNVG%2BQCATjGLkr4Z1BuyNXWLmoMtW%2Fc9jK%2BFALM8KgBqFafLLlRHXh7CJceAjafvp3dY8euDpVGmhxl9Zk5bc5jTon9gKFqEumSwKT8rdG%2Fu8CkBO9xHseLnMLnIMpGqqtKL34MYEqgKtqFe%2BmzNMBaGMc6b78WA6KdXLZtBnWy2ptkoiwZPeiCVu7tEveGl0yJOZSl9BpP47JoGX80C2Jhfb%2F6rKq5rMC6HX2Wt0Vd6ZXlj%2FVE6o%2FHg%2B16IiMvZn8m72MX7%2FQ0l0Ue4ThvYP2TDQ8CoedmALwn86UHW%2FPik%2FxJ8UB1DKnQkbK0XSv4TDRyOVvRfJ0Mhq0vibSeC0a%2Fyts4%2BT1RSKjfnrH29uOq43lknOXKTk2%2BN%2B%2FonI9TLkZxEzdyFJYfXP9cpNpdDBEBWfYQ18Jk1%2B1IJPfnocb9i5flkABV4rtfg%2FGFs43qa3YjVk2dYjz5qwJzO4974MVuyMBFCu1Dwq57%2BY9Xe9T4hkRGYSWwbvyXQGP0uFllmnAQSUSnv53dGhsDKf7IJKn8wROhcXO%2FpAK%2B7lfRiRbAmcxLDCLuInKBjqkAXFNghc08PCsUNFDo73hh9CzNsLFmWtNqCejiil1%2BfFfTktw7zeJLyMzTy0qTBCPWkQMHW%2F2KusM%2FDxG6FJQF6uXz9ykujl%2BJXZfseorrxiK8babsVpvr%2BBlMDbqQyIOUdWUcEawp6PbT7%2FtJJ9UdM5L2IggV5jl3J3vqAbPN7g4elN49JawNuLL0R%2FwUei%2FEMBlaipe8hq9yhu1wSSlD08wpVhi&X-Amz-Signature=316b141518bf0ae3b01c607ef5294eebbf0119b909c64f79b95f6e05ea18878b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLKA7KV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpGRByYvr%2BqTVSA4OFPcu%2BOnw7fQm%2FPqLC0LN0a7GZPAIhAOGU%2FM7R47UGJwVhuB2PMV8ywrFrVoEma6G9x7fYCtNrKv8DCHkQABoMNjM3NDIzMTgzODA1Igy9Z4BxS8w1T6CuAN0q3APQfte%2FKoW%2Bv9VdLgqLeZljJmNU1Oy1cn7aHKjllVl7%2BqU25KM%2F9ZPlo5s7pKr72sh5pHZRx9s2h%2BTNVG%2BQCATjGLkr4Z1BuyNXWLmoMtW%2Fc9jK%2BFALM8KgBqFafLLlRHXh7CJceAjafvp3dY8euDpVGmhxl9Zk5bc5jTon9gKFqEumSwKT8rdG%2Fu8CkBO9xHseLnMLnIMpGqqtKL34MYEqgKtqFe%2BmzNMBaGMc6b78WA6KdXLZtBnWy2ptkoiwZPeiCVu7tEveGl0yJOZSl9BpP47JoGX80C2Jhfb%2F6rKq5rMC6HX2Wt0Vd6ZXlj%2FVE6o%2FHg%2B16IiMvZn8m72MX7%2FQ0l0Ue4ThvYP2TDQ8CoedmALwn86UHW%2FPik%2FxJ8UB1DKnQkbK0XSv4TDRyOVvRfJ0Mhq0vibSeC0a%2Fyts4%2BT1RSKjfnrH29uOq43lknOXKTk2%2BN%2B%2FonI9TLkZxEzdyFJYfXP9cpNpdDBEBWfYQ18Jk1%2B1IJPfnocb9i5flkABV4rtfg%2FGFs43qa3YjVk2dYjz5qwJzO4974MVuyMBFCu1Dwq57%2BY9Xe9T4hkRGYSWwbvyXQGP0uFllmnAQSUSnv53dGhsDKf7IJKn8wROhcXO%2FpAK%2B7lfRiRbAmcxLDCLuInKBjqkAXFNghc08PCsUNFDo73hh9CzNsLFmWtNqCejiil1%2BfFfTktw7zeJLyMzTy0qTBCPWkQMHW%2F2KusM%2FDxG6FJQF6uXz9ykujl%2BJXZfseorrxiK8babsVpvr%2BBlMDbqQyIOUdWUcEawp6PbT7%2FtJJ9UdM5L2IggV5jl3J3vqAbPN7g4elN49JawNuLL0R%2FwUei%2FEMBlaipe8hq9yhu1wSSlD08wpVhi&X-Amz-Signature=114b187bc5fa47fd29b3766fa889082763cb64e7141bca11868ba5411705fdfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

