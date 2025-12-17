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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6JH42QR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhY%2FgBVqCZQha5QUwtrL7ZQOaD6nN5etZibLA9GHH41QIhAIx5EuWDkuPiqhvR60BvCajKXI2Zc%2FDa09eZRIO4TGt8Kv8DCH0QABoMNjM3NDIzMTgzODA1IgyLbNI46rRQ2S8bf2wq3AM3bynhn7vwWYYLDf77LLSC%2Bunnecm9TaqLYTfrMdDZhFkfY5zLLxVj8%2F0SfIiD6FibACZUPSEYml5yJKS6EPS2Fb%2Fesf8KHV43966Er57xH16CZA2HAucIEVvYo1R8CK%2FznESz7apN3Np8%2BYSoV5iZTbxryHsUXGZzpRzlpzaPF1aiWtK0SQSPhBl8LscRsC7jJT7pysL2hZv9xfal1MJp5dzO53IdnObhFWeN%2FtKl5r6chGQIeHIBETQEyO0beKE69%2BewtEGuLtCUbsFCUW9RtapKeAXf9CBIH1rCj4UwIW%2FfE8miuHq%2BgTAmp%2BuDUnbbHDxDWSplIxGXg5LAKWbNYAKaCsX28%2BmMzXAp3uRGigqiGOm7gd%2F3yOMPbKP6WuRTDrYi4dcdm8ARxvV2eEYkiM1hCQC%2Bz1tMP%2FwZTFp4UXWtKnPPNyR5ONGR0%2F8Gs0BIfXEXKFuQ1MRCmlZpJaHGsdlHAo0%2BqELAyE0vksWgdT7Yr1by%2FyAQXnpsCvJjuIvAnb7n5Ha9El3z6lkURKRUYKMhfmN57QeN1PFdXxk185CMK6%2FC8iMCPDeN7eml7aUBgr1rzG6KN%2BySVqAgmRXEYAnT1DaFultOLYuElYALyh9Ku0RwIWViplNvEjDmqorKBjqkAUn%2B%2BRKkw5m80gJLKX4P81hdDNyFBCekz%2BI%2F34hSXI5dSMrl2rUARGfTGYrYYxo8PSTNSIjYRB2Gy5IMwuzhvDXptALtXkdX2Xj9eL%2By1gUc9UtwcQEW7pseMo9p5T%2FqLfZG3HeSZclBFrkr5QR8xj56QHjlK10A7bIf%2BJehzouREAcjGgolCWMHMlHlQyq781mqD3MR515lPOlzEf%2FJvLG8Fy16&X-Amz-Signature=5b0ecf57c9a9585a4ba14323964388fb6ed63e77b0b8177adb6ea38410ff68d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6JH42QR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhY%2FgBVqCZQha5QUwtrL7ZQOaD6nN5etZibLA9GHH41QIhAIx5EuWDkuPiqhvR60BvCajKXI2Zc%2FDa09eZRIO4TGt8Kv8DCH0QABoMNjM3NDIzMTgzODA1IgyLbNI46rRQ2S8bf2wq3AM3bynhn7vwWYYLDf77LLSC%2Bunnecm9TaqLYTfrMdDZhFkfY5zLLxVj8%2F0SfIiD6FibACZUPSEYml5yJKS6EPS2Fb%2Fesf8KHV43966Er57xH16CZA2HAucIEVvYo1R8CK%2FznESz7apN3Np8%2BYSoV5iZTbxryHsUXGZzpRzlpzaPF1aiWtK0SQSPhBl8LscRsC7jJT7pysL2hZv9xfal1MJp5dzO53IdnObhFWeN%2FtKl5r6chGQIeHIBETQEyO0beKE69%2BewtEGuLtCUbsFCUW9RtapKeAXf9CBIH1rCj4UwIW%2FfE8miuHq%2BgTAmp%2BuDUnbbHDxDWSplIxGXg5LAKWbNYAKaCsX28%2BmMzXAp3uRGigqiGOm7gd%2F3yOMPbKP6WuRTDrYi4dcdm8ARxvV2eEYkiM1hCQC%2Bz1tMP%2FwZTFp4UXWtKnPPNyR5ONGR0%2F8Gs0BIfXEXKFuQ1MRCmlZpJaHGsdlHAo0%2BqELAyE0vksWgdT7Yr1by%2FyAQXnpsCvJjuIvAnb7n5Ha9El3z6lkURKRUYKMhfmN57QeN1PFdXxk185CMK6%2FC8iMCPDeN7eml7aUBgr1rzG6KN%2BySVqAgmRXEYAnT1DaFultOLYuElYALyh9Ku0RwIWViplNvEjDmqorKBjqkAUn%2B%2BRKkw5m80gJLKX4P81hdDNyFBCekz%2BI%2F34hSXI5dSMrl2rUARGfTGYrYYxo8PSTNSIjYRB2Gy5IMwuzhvDXptALtXkdX2Xj9eL%2By1gUc9UtwcQEW7pseMo9p5T%2FqLfZG3HeSZclBFrkr5QR8xj56QHjlK10A7bIf%2BJehzouREAcjGgolCWMHMlHlQyq781mqD3MR515lPOlzEf%2FJvLG8Fy16&X-Amz-Signature=aae72c5e421fe0b8014339160156b096ccce0bb6c127f5ee3b5c926c63523a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

