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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YS363Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNWE3l%2BkIfnzp4hW3TWLTMyWDe3ueYiREI7onetMOmQAiBABuWME0%2FNUsikKe0r32dd47KXHT2pszR%2B6N%2FpIKzHRiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq12OoLylgl70ehB%2BKtwD7xAc6HaOdlBQ7V0cCQsKZWEfPJ1rIpz4gj466jJSQ6wRiWTVwjnThP19zOW6DBJ6lcmKDF8kn2qXXlwkOR0GoR2CpaVPFft07YtpuZzxnfNVAckjYeEJJ1RxSTrnVAZF4dnxBTjwydZRdWZDtxPF7peUTeNDZdLHVcLy9OFpnzHy0JSdFaf7wvoAfR%2FwBNkGZ7LAnTsAl6M6Gie97xH3g1d5XVuwg3z8bVrgj3%2Bs%2FZohZgN5sYvsrZA03uhSgT3D%2B5C4pJp5DQrDlAWVTPBuOITGNfiJVi79qWSN1LcnpNJJ4UQ3eEXgwLBumCfqYvtdL9iVFh7kW0Ddmi0GPJ8b7qYWwOCKAgMaoRmIIAiNWNQWjJfU31c6vn%2FGjtrxNw7cxHHFfUh8HHt2rtD3TrhnA4MXVIEenPrVq01%2BYPbEkApDg3xWL9zbZzZFLsu5DEfgOU299I%2Fby5bJO6%2FHdPL1MHbRR9VhRArfqduc%2Bq7%2Ff6oGyRToqJuacgUJw%2FZD40y4nswg%2B5n7dDrrcqDgwaFqyXCvPjN2eoqqrkMrtMXPkrAkY5Asekdp13rZ1YrlmF0ycDmNtmofmDtS51D7Je6ChPDdOmvU%2BNS6%2BLiqcs6tfuww6zwwsMj%2FlmJ9wGAwnJ%2BLygY6pgHGfGQcneov9oZRdUu3ODtuxHGDsiLJj%2FYof4kyUTySHf6nTfhnWc4I8JvV%2BpB0hbfU8pN1OukPeNl1LOTEw0zsO79SRpoPq%2BIfDqn4VRSLKNEwqDJm0RGIbDg1P5fcQPCDqW7trtj4vjjCL9pcs8PqPuXLgB%2Fn1jaz%2BngLcOE1t3M4zOrgUNWPSq%2Fk6h5Sf4Dc%2B1GVppAYV0rDBvC1ubM7Yn%2BUTTVw&X-Amz-Signature=d5a97c3d444978a7449d5d7b467ddb7dd0cf0acd17e34d77e26ca248ac9a1811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YS363Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNWE3l%2BkIfnzp4hW3TWLTMyWDe3ueYiREI7onetMOmQAiBABuWME0%2FNUsikKe0r32dd47KXHT2pszR%2B6N%2FpIKzHRiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq12OoLylgl70ehB%2BKtwD7xAc6HaOdlBQ7V0cCQsKZWEfPJ1rIpz4gj466jJSQ6wRiWTVwjnThP19zOW6DBJ6lcmKDF8kn2qXXlwkOR0GoR2CpaVPFft07YtpuZzxnfNVAckjYeEJJ1RxSTrnVAZF4dnxBTjwydZRdWZDtxPF7peUTeNDZdLHVcLy9OFpnzHy0JSdFaf7wvoAfR%2FwBNkGZ7LAnTsAl6M6Gie97xH3g1d5XVuwg3z8bVrgj3%2Bs%2FZohZgN5sYvsrZA03uhSgT3D%2B5C4pJp5DQrDlAWVTPBuOITGNfiJVi79qWSN1LcnpNJJ4UQ3eEXgwLBumCfqYvtdL9iVFh7kW0Ddmi0GPJ8b7qYWwOCKAgMaoRmIIAiNWNQWjJfU31c6vn%2FGjtrxNw7cxHHFfUh8HHt2rtD3TrhnA4MXVIEenPrVq01%2BYPbEkApDg3xWL9zbZzZFLsu5DEfgOU299I%2Fby5bJO6%2FHdPL1MHbRR9VhRArfqduc%2Bq7%2Ff6oGyRToqJuacgUJw%2FZD40y4nswg%2B5n7dDrrcqDgwaFqyXCvPjN2eoqqrkMrtMXPkrAkY5Asekdp13rZ1YrlmF0ycDmNtmofmDtS51D7Je6ChPDdOmvU%2BNS6%2BLiqcs6tfuww6zwwsMj%2FlmJ9wGAwnJ%2BLygY6pgHGfGQcneov9oZRdUu3ODtuxHGDsiLJj%2FYof4kyUTySHf6nTfhnWc4I8JvV%2BpB0hbfU8pN1OukPeNl1LOTEw0zsO79SRpoPq%2BIfDqn4VRSLKNEwqDJm0RGIbDg1P5fcQPCDqW7trtj4vjjCL9pcs8PqPuXLgB%2Fn1jaz%2BngLcOE1t3M4zOrgUNWPSq%2Fk6h5Sf4Dc%2B1GVppAYV0rDBvC1ubM7Yn%2BUTTVw&X-Amz-Signature=9c5e5e6ef100868b9ce0c7a8b72d1b0f95c7ef7048ebad7238ab7ec9cb78fe00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

