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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX2LDVPQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdDTZnz63Y3We%2Ba9xLhUPvfKC5fqO1cgIRDk9SXRhiVAiBpYxeeOpomQin2egQBNMmNANMrkUVvXwWdcPBj%2BCLC2ir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMDgalYjl3S0uTKxDyKtwDin6HXk5Hmk9GG5qbdGIuU0vFcZdoVLPwbjEWEKToQs9qleuwQ0uYMhXlyCS44IPRP1tbGWR3lAjY3%2FZJzYPy1YDLddKYeKWmQaG4H1onEfzyyb3Gin96fcGy4IiCIvk5O83fY1HhYoKHM7KuxCEJQWHdDJKsi9xq4Q1RzqgYChDyPHok5jE5KTEc071hIR%2F3Y3X4GFuaQn9foM%2FIJz%2FwIDn3GEGzYVbGcfYbiYF%2FnkcQe3i4gXC61R4gOUEaVv5feMe6NrMiikk7BWCB%2B%2F2hytUUoTXfE3PO5oU%2FJh6UaysEp8XkIa0CiPckwsUh0U1vBMFAgFdRJ92h8pTfh%2B50m8XWtN55hDEFQRGvaoQ2YOeak5D%2B3YyN%2BDrgJJpGBCvCezmgk8%2FvED0Kj4QKmWcxtm0xj2exelQdMfGt75YgDU6hbsHMNa9OM6qDkES6ONXWA06EL0rCDO3nrYAohm0GwBGVLDqkoHpjsmnAxXwbu0iZAiTcGqKop%2FN5Zv5rP%2FA7oj6DbjW%2FBI3E5s3X2hKRL8nvscODaTaLxP9wxodAh7LLFT2CbANfwwcmaxWajLnYpDcNUQJtnmJrRLaOVrrynSEFgrK8FRaaX2RiolOsisWk%2F30tbNgTS%2FL2Jmww9Z2JygY6pgE9wFth%2B%2B8JAD6bNAlKeKEikwHXUqnh8i16ZNN%2FfLIEWeAiBVirQvwGIu%2BaQadhvxcv4SeVqiKCqFwfIVc8VSHDyz9ArweqKWfnIuo12CqOyFWhYKlecNPeObbihwWD0Axyf%2FkqkIj4ugNkzh74V%2FgXuoYrqdlu7jWfm9EKxPXktyZnpTqH5souPytNv2MmaZGTXNjhQ%2FmNIICvvQT0J8sxC2JxD0C1&X-Amz-Signature=0619bd056e8f82c4320f1d86b50c4a05d925f6301fe564316abc24bfb6b06620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX2LDVPQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdDTZnz63Y3We%2Ba9xLhUPvfKC5fqO1cgIRDk9SXRhiVAiBpYxeeOpomQin2egQBNMmNANMrkUVvXwWdcPBj%2BCLC2ir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMDgalYjl3S0uTKxDyKtwDin6HXk5Hmk9GG5qbdGIuU0vFcZdoVLPwbjEWEKToQs9qleuwQ0uYMhXlyCS44IPRP1tbGWR3lAjY3%2FZJzYPy1YDLddKYeKWmQaG4H1onEfzyyb3Gin96fcGy4IiCIvk5O83fY1HhYoKHM7KuxCEJQWHdDJKsi9xq4Q1RzqgYChDyPHok5jE5KTEc071hIR%2F3Y3X4GFuaQn9foM%2FIJz%2FwIDn3GEGzYVbGcfYbiYF%2FnkcQe3i4gXC61R4gOUEaVv5feMe6NrMiikk7BWCB%2B%2F2hytUUoTXfE3PO5oU%2FJh6UaysEp8XkIa0CiPckwsUh0U1vBMFAgFdRJ92h8pTfh%2B50m8XWtN55hDEFQRGvaoQ2YOeak5D%2B3YyN%2BDrgJJpGBCvCezmgk8%2FvED0Kj4QKmWcxtm0xj2exelQdMfGt75YgDU6hbsHMNa9OM6qDkES6ONXWA06EL0rCDO3nrYAohm0GwBGVLDqkoHpjsmnAxXwbu0iZAiTcGqKop%2FN5Zv5rP%2FA7oj6DbjW%2FBI3E5s3X2hKRL8nvscODaTaLxP9wxodAh7LLFT2CbANfwwcmaxWajLnYpDcNUQJtnmJrRLaOVrrynSEFgrK8FRaaX2RiolOsisWk%2F30tbNgTS%2FL2Jmww9Z2JygY6pgE9wFth%2B%2B8JAD6bNAlKeKEikwHXUqnh8i16ZNN%2FfLIEWeAiBVirQvwGIu%2BaQadhvxcv4SeVqiKCqFwfIVc8VSHDyz9ArweqKWfnIuo12CqOyFWhYKlecNPeObbihwWD0Axyf%2FkqkIj4ugNkzh74V%2FgXuoYrqdlu7jWfm9EKxPXktyZnpTqH5souPytNv2MmaZGTXNjhQ%2FmNIICvvQT0J8sxC2JxD0C1&X-Amz-Signature=0e5e999a2af9b5fe90185d0d28a5bc059c4ea2cc8700a94861ee3126e0605049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

