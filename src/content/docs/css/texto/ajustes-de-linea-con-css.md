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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL4LYU6N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENGYMaRexnv45AAXgkoRj7I3TuBrh3XDCRNsqn5h3eIAiBDO5W%2FcHURzEfFU8GKic2r%2FOohU1ipsU93Ig%2BuaFv0YyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoeufOAB8h68pSxrWKtwDj6mF2KKwwFwoJ7OPL4U0vNYktmV3iURQHJJFlksXKSuD%2FIEkfVetmIxw5uVehtu%2B0PohPBXCi3BmJFZouWRXyEqQTeX0TaKVvCNfYyCmcfOZby4BAZAui%2B8Fl%2FbvamEWMZOHje6w6bAQmfkzhO1s%2Bfwq%2F0lIVJHp4vact6wSbJseSPuP3LppbbryLwJvmssJz%2FbDeOFGj%2Fs%2BrzL8K1XgsQXOztIqynLlHUTZdTzO20aK2UHycaOZUEqLJ3HkkPtYhXqtS3aOMT2KX%2BNIypNAGM4SIBNagxaI243uacMPFOzl%2BJAc%2Bb22mfaL94Qe1QBAaY9TPoEBSkT8EyOdw04XEQfdnOIsobVFhibWt2AI88kdYZ7K5oiDKfIzl5gElUEoPQpYYFvWO7gsp025YdkDbnPVnOGSQ90XLaxnoF382xVFWdedUqat9HpdQHY3No3pzwDOPiw7CFbFvrnAAnK43uiu2tMNRE4SHrr0d%2Bhf7GmW4YcRoAJYPyw6XAnD0Ds4oLQ64%2FqA8j048uNWIOEHbQ6BJmSsOQcwFMl42iSK7pEB0Jr7dQfQGnSVky2YAz4D1483TqqSb73psh0lEvhs7a9V8lggr8V%2FeIgADZYflvXnTilrVyfa2hpXREcw1P%2BKygY6pgGgyc%2FfmMg%2BdEvUTjPN2VJfn64WZQnxGo0131TjV%2BeBaFjZQc2CSBM8nofJCDXz2eov8MvS0U0cq2DWsIFQsw4SKGlsy8PUTQjXVaYUPmUaPYUnh3UE3987wbAEPZeSEckiqpqEBDdgU2ukDw6iC0O5oKMq2qwj0xMGrPuQeax4arIJreL7kZleJlCUsvT3scUNFmayaLNpR0XMpliOHOBZoP4g%2F5kC&X-Amz-Signature=9c2b4592981798400b1d7562cc2fa7f2c07dbdfb0d0537e085fc7bc0c5ae21b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL4LYU6N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENGYMaRexnv45AAXgkoRj7I3TuBrh3XDCRNsqn5h3eIAiBDO5W%2FcHURzEfFU8GKic2r%2FOohU1ipsU93Ig%2BuaFv0YyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoeufOAB8h68pSxrWKtwDj6mF2KKwwFwoJ7OPL4U0vNYktmV3iURQHJJFlksXKSuD%2FIEkfVetmIxw5uVehtu%2B0PohPBXCi3BmJFZouWRXyEqQTeX0TaKVvCNfYyCmcfOZby4BAZAui%2B8Fl%2FbvamEWMZOHje6w6bAQmfkzhO1s%2Bfwq%2F0lIVJHp4vact6wSbJseSPuP3LppbbryLwJvmssJz%2FbDeOFGj%2Fs%2BrzL8K1XgsQXOztIqynLlHUTZdTzO20aK2UHycaOZUEqLJ3HkkPtYhXqtS3aOMT2KX%2BNIypNAGM4SIBNagxaI243uacMPFOzl%2BJAc%2Bb22mfaL94Qe1QBAaY9TPoEBSkT8EyOdw04XEQfdnOIsobVFhibWt2AI88kdYZ7K5oiDKfIzl5gElUEoPQpYYFvWO7gsp025YdkDbnPVnOGSQ90XLaxnoF382xVFWdedUqat9HpdQHY3No3pzwDOPiw7CFbFvrnAAnK43uiu2tMNRE4SHrr0d%2Bhf7GmW4YcRoAJYPyw6XAnD0Ds4oLQ64%2FqA8j048uNWIOEHbQ6BJmSsOQcwFMl42iSK7pEB0Jr7dQfQGnSVky2YAz4D1483TqqSb73psh0lEvhs7a9V8lggr8V%2FeIgADZYflvXnTilrVyfa2hpXREcw1P%2BKygY6pgGgyc%2FfmMg%2BdEvUTjPN2VJfn64WZQnxGo0131TjV%2BeBaFjZQc2CSBM8nofJCDXz2eov8MvS0U0cq2DWsIFQsw4SKGlsy8PUTQjXVaYUPmUaPYUnh3UE3987wbAEPZeSEckiqpqEBDdgU2ukDw6iC0O5oKMq2qwj0xMGrPuQeax4arIJreL7kZleJlCUsvT3scUNFmayaLNpR0XMpliOHOBZoP4g%2F5kC&X-Amz-Signature=b08b805d8ab27bf01351ee6fdf8bef34df0738716c48faca140e70870a048735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

