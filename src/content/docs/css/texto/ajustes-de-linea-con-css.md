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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIOTORNS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGYB0zDa3jHolatlx0k6Q4uI5EARgY9unIfJW%2Bc%2F9VEAiEA9%2Fc7hK5qzfZCBj38NyzIADMwR4KVTJ8FZucvhNMOE4IqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyH0bAPPF8EsE6qRircA0W%2BkKHGttylPnty7NRXUDD5ESovUdaxOUZBQQWszeNEmi%2BPRDsh0pgx6fcK1CF8nWn6MOTD6KvbYL54WX%2FvWhZMHWjGjQhXuwa%2BR2m6NCsftRqFlniN0f2gDTuMA%2BPYC0QiWZjfHsFSMRYONIwMxtx9FQqDnt9Kwdg%2BIEkTYdQ0OrB0i2M0yzPzzmynj7ob2%2B%2BfS7MKeHuS6U85HeUOoCnpjMqiZE5p4drYlbSH41lZkYVPAjqw81dWLlqjOP2xJJxGWiJNV8cenKgiSq49nfumaS8EQdMBwIIOa7jzsBJ0NruwofY55adDpVVKujzjjDZlsH3L3u7zjgWpfPNWv9ecQ%2BUhTOXC%2FBhnh0cb6cyWplsvpeMCsxIUldN6Fs%2Fi3TWtaRaftsbMN2I9IW%2FVSzBHF%2FNoxW1KP%2FwjzOX3ekaDdvSH6%2B3xiflGrhumCPjQjacp0yVXnQ99m3Uaqu1E6QwPGuM%2F2M8kO2HJ%2F8ZfwUNVPudrtrvmfPEJBbko7VF7JUOGaHhj43LLlF27gSwEBxZPhdcPOsfuousas3wDc9KiGnNEl79027PWlPmefmRR1gojqw%2FJJMR7fRQozRgZIo8g28lxvfIwk6X5hcNjjGorBF5N0dejfiQldMp%2BMK%2Bfi8oGOqUB6cXENnaQaCqdwQyoyOIBkybj8RnRffwsXY7T2XebSxI%2F1LmsAjV%2BJOGpJfGI4%2BLiS38ViBFi2sxxKUmotnquAY1%2FGbCg0F7gptM6WMVtxboeRW%2Fxfc6Hv%2Fq9IF5f1HX01Nif%2BDc9zAmU0%2BG%2Bp3pwaxdSKjvDx1XuOJHAFSfnwwy76Kh1s44w7RcImVHOyH81ZJ9gb0gHVmGI2PHJaEOlz81JNlSn&X-Amz-Signature=b3557d922afc71899ee0c92cff1599b9a7b68f3ccff57568b5d3637a19eea3cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIOTORNS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGYB0zDa3jHolatlx0k6Q4uI5EARgY9unIfJW%2Bc%2F9VEAiEA9%2Fc7hK5qzfZCBj38NyzIADMwR4KVTJ8FZucvhNMOE4IqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyH0bAPPF8EsE6qRircA0W%2BkKHGttylPnty7NRXUDD5ESovUdaxOUZBQQWszeNEmi%2BPRDsh0pgx6fcK1CF8nWn6MOTD6KvbYL54WX%2FvWhZMHWjGjQhXuwa%2BR2m6NCsftRqFlniN0f2gDTuMA%2BPYC0QiWZjfHsFSMRYONIwMxtx9FQqDnt9Kwdg%2BIEkTYdQ0OrB0i2M0yzPzzmynj7ob2%2B%2BfS7MKeHuS6U85HeUOoCnpjMqiZE5p4drYlbSH41lZkYVPAjqw81dWLlqjOP2xJJxGWiJNV8cenKgiSq49nfumaS8EQdMBwIIOa7jzsBJ0NruwofY55adDpVVKujzjjDZlsH3L3u7zjgWpfPNWv9ecQ%2BUhTOXC%2FBhnh0cb6cyWplsvpeMCsxIUldN6Fs%2Fi3TWtaRaftsbMN2I9IW%2FVSzBHF%2FNoxW1KP%2FwjzOX3ekaDdvSH6%2B3xiflGrhumCPjQjacp0yVXnQ99m3Uaqu1E6QwPGuM%2F2M8kO2HJ%2F8ZfwUNVPudrtrvmfPEJBbko7VF7JUOGaHhj43LLlF27gSwEBxZPhdcPOsfuousas3wDc9KiGnNEl79027PWlPmefmRR1gojqw%2FJJMR7fRQozRgZIo8g28lxvfIwk6X5hcNjjGorBF5N0dejfiQldMp%2BMK%2Bfi8oGOqUB6cXENnaQaCqdwQyoyOIBkybj8RnRffwsXY7T2XebSxI%2F1LmsAjV%2BJOGpJfGI4%2BLiS38ViBFi2sxxKUmotnquAY1%2FGbCg0F7gptM6WMVtxboeRW%2Fxfc6Hv%2Fq9IF5f1HX01Nif%2BDc9zAmU0%2BG%2Bp3pwaxdSKjvDx1XuOJHAFSfnwwy76Kh1s44w7RcImVHOyH81ZJ9gb0gHVmGI2PHJaEOlz81JNlSn&X-Amz-Signature=58ae3d3cba26f8596d189ce1222b0a54b7534a245c4558f1490e6a97fc6c33d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

