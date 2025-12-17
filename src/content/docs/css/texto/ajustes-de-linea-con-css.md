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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGDYKO5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzgu2gEKV8Rg0QnLLulVTKVCT%2BOMZmeYvzzHPuFx1qFgIhAKrAVxMtxCz2bCDEJZbjvagpsVI4AOQxZPZA3BKBMXNPKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHlHPCsoypuz3UosYq3AO66kfUPMR7%2B9%2BHlcziImyqFl3mVTpscLC1NkdvU1qC3HpuednOh1B%2BvbbXaCzsuMTelmdolW402X2STXGwu4Z4%2BpVwv%2FOf5GP9Wsr3wylxnLHTC4cnQNyDet8uUMz6z1HQgusQs35jBh6bh6aaPTXIeeQoT1dGF6hZi2M%2F9%2FTJn1BZ1UpXjfkGXFnnVKcyp6774ifzNGcxA596m7O2ufnfFhf5ozgkazVIe8g43Y8q8PfC2kLFqvP1f%2BoLCGMYdF6PuO5Bd6qzZEIINNyxdQWAONP4YqSTL5kU2X1%2BDj7CvBnMemnk7r6zjOy23cJU50rytB4Dna9KKsLpor%2BcDNmUvtHnVGrrVrgPSN1%2BvarVe9K%2BjrRevnmplx6BPEI2oDkZU9qxDGzAE4s4fRTz8KRkvPd19fpLIyZ1iNnOOX20anhmV9%2BaRWRplXENbnkw4yT0v%2FlKN4DBt9xJ4OIUUZs%2B7T00Z%2BYjw4pFKOpMQ5TMlypTIsaWWxkvwJsHImEDGd899hUgtat%2FZAxvqT%2BJwYFmMS4aKXv%2FTx67EkPCxOzKHC5NQmmewRThd3r%2BDE9s8MeOhG8yTFVoLUlutT6dF23ielfQzp0kBAs9a1aA7wP7jHnuRQYkwqRaKNp5ejCeoIvKBjqkAYpsgxfPNk%2BQ1lJACXVCqVutzDS96tJ%2FgzvU5EiGN9KlFHCmFG626KDwxsSZyIQxzLMl6N2CIWquBfbaNT5D6AY0poTI2qCIy1q0XCWFsLgJ6ALYIGZ0P9ePTW9rjz%2Fj3dWcbALAwlBHx28DEPMM97Tal7ABktBV2%2BWLyChYWGhoqUtXZfRXXl9nvca6H7GR8Q%2Fkd5681PkJF3xF%2FYfYPaXS9%2FdS&X-Amz-Signature=31fe8227b3b24132e89d02877b79061dc1f49eb7159854c04862dbd0e5ba44e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGDYKO5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzgu2gEKV8Rg0QnLLulVTKVCT%2BOMZmeYvzzHPuFx1qFgIhAKrAVxMtxCz2bCDEJZbjvagpsVI4AOQxZPZA3BKBMXNPKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHlHPCsoypuz3UosYq3AO66kfUPMR7%2B9%2BHlcziImyqFl3mVTpscLC1NkdvU1qC3HpuednOh1B%2BvbbXaCzsuMTelmdolW402X2STXGwu4Z4%2BpVwv%2FOf5GP9Wsr3wylxnLHTC4cnQNyDet8uUMz6z1HQgusQs35jBh6bh6aaPTXIeeQoT1dGF6hZi2M%2F9%2FTJn1BZ1UpXjfkGXFnnVKcyp6774ifzNGcxA596m7O2ufnfFhf5ozgkazVIe8g43Y8q8PfC2kLFqvP1f%2BoLCGMYdF6PuO5Bd6qzZEIINNyxdQWAONP4YqSTL5kU2X1%2BDj7CvBnMemnk7r6zjOy23cJU50rytB4Dna9KKsLpor%2BcDNmUvtHnVGrrVrgPSN1%2BvarVe9K%2BjrRevnmplx6BPEI2oDkZU9qxDGzAE4s4fRTz8KRkvPd19fpLIyZ1iNnOOX20anhmV9%2BaRWRplXENbnkw4yT0v%2FlKN4DBt9xJ4OIUUZs%2B7T00Z%2BYjw4pFKOpMQ5TMlypTIsaWWxkvwJsHImEDGd899hUgtat%2FZAxvqT%2BJwYFmMS4aKXv%2FTx67EkPCxOzKHC5NQmmewRThd3r%2BDE9s8MeOhG8yTFVoLUlutT6dF23ielfQzp0kBAs9a1aA7wP7jHnuRQYkwqRaKNp5ejCeoIvKBjqkAYpsgxfPNk%2BQ1lJACXVCqVutzDS96tJ%2FgzvU5EiGN9KlFHCmFG626KDwxsSZyIQxzLMl6N2CIWquBfbaNT5D6AY0poTI2qCIy1q0XCWFsLgJ6ALYIGZ0P9ePTW9rjz%2Fj3dWcbALAwlBHx28DEPMM97Tal7ABktBV2%2BWLyChYWGhoqUtXZfRXXl9nvca6H7GR8Q%2Fkd5681PkJF3xF%2FYfYPaXS9%2FdS&X-Amz-Signature=1312d80e822eccbeb3557f8f6c6cf997338ea3e8dda005f06106c1c399ccb9b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

