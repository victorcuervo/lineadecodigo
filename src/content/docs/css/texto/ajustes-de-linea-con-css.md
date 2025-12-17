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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV7MQEAR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArUlvP6xWWVHiXpmRsToinTSHeXKFI8h4inqp19R7tLAiBxwrQShNb%2B3M%2FDhWTSuC%2FcFDLnWMkxYGBYhRbZG1eHtSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMJ8tEDXJDrAB%2F8%2BCpKtwDBKAUseCaNzsxaj%2BQmO46fG4kC2ShMSP%2BdKKjH08Q7r6Y%2FOovMK%2B%2FodVYvOyCOLdAxXZQp%2BYi7dMy9uwXv%2FskXQYAVlRscNZ5uV0UsciChKUivXMQCZqX0WVyuPsfEjwbSYBo2jCSTCT9tk5G7UZwszWjIJQX4VwTjNEATCEuCF1dtGj0Yf72sgsPQLq18Vi7Y%2B5sfsLx4oeBgw3c9EFjOVoRkUkDeL9mcg5r%2FGdmZ2%2BwQnTWeLSKOMRmvawCwGglXAjSG0EgAlLHuH8R%2B48ffZXDvAh7aZJxoanAlxWAIG4iu%2BNhx9cKYpsvZBgtdXHiT5wcWHtdLqWS0SHhuG3I1x1KENBsT4WFwtDgNPstiSKiKKESFuBucmErIWNxaQJ1VvqCEfPV0nvxbfyBdeejg7kyD0FDtm8yNQk9Fjtr7T5XnQa02%2B5xdLZmWPwvlVhV6Yy%2Bz3fXpJYG6FI%2Fe%2FzWKeTAOLiNzJuHk8WHC5QFsnZlrqsL9TdpjiFpcv3bUJRBz905%2FPUK4SHTJj1OCstBqxJ%2FSDoBpqDmsjvMvdxypiBU0dX4KwKWxMkG0kTXWyRzPsEKlEv1LQG%2F9wRWkP1p%2B4mzxCVm1JSHCaQSth%2Fhx97EAcVxGdGdHN9hoQsw67KIygY6pgFFcTSC%2BUcfkZ3e%2FwujSH9FBVahWr25Gmzt%2BOeBLndxFmB6g3ON1ELhvlSneTa2LmFDruFgETznSa18GEN%2BkKLPyshHbupUAvpWDiPxgnJRdQ96vlhlSL6pCiStHqAFBghU9JE%2BtFVC4CtZZup3ZQHAOV1B9BURNYqScb2dfUtBlxDnham9GCNMiyNs%2FFuKBHvXEen5M4lCDBjZRN0mBXA7qsue3vNI&X-Amz-Signature=8a51d562df9e2eff5d49eee25e2f56319579f5da83bb323374987ab956b507b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV7MQEAR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArUlvP6xWWVHiXpmRsToinTSHeXKFI8h4inqp19R7tLAiBxwrQShNb%2B3M%2FDhWTSuC%2FcFDLnWMkxYGBYhRbZG1eHtSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMJ8tEDXJDrAB%2F8%2BCpKtwDBKAUseCaNzsxaj%2BQmO46fG4kC2ShMSP%2BdKKjH08Q7r6Y%2FOovMK%2B%2FodVYvOyCOLdAxXZQp%2BYi7dMy9uwXv%2FskXQYAVlRscNZ5uV0UsciChKUivXMQCZqX0WVyuPsfEjwbSYBo2jCSTCT9tk5G7UZwszWjIJQX4VwTjNEATCEuCF1dtGj0Yf72sgsPQLq18Vi7Y%2B5sfsLx4oeBgw3c9EFjOVoRkUkDeL9mcg5r%2FGdmZ2%2BwQnTWeLSKOMRmvawCwGglXAjSG0EgAlLHuH8R%2B48ffZXDvAh7aZJxoanAlxWAIG4iu%2BNhx9cKYpsvZBgtdXHiT5wcWHtdLqWS0SHhuG3I1x1KENBsT4WFwtDgNPstiSKiKKESFuBucmErIWNxaQJ1VvqCEfPV0nvxbfyBdeejg7kyD0FDtm8yNQk9Fjtr7T5XnQa02%2B5xdLZmWPwvlVhV6Yy%2Bz3fXpJYG6FI%2Fe%2FzWKeTAOLiNzJuHk8WHC5QFsnZlrqsL9TdpjiFpcv3bUJRBz905%2FPUK4SHTJj1OCstBqxJ%2FSDoBpqDmsjvMvdxypiBU0dX4KwKWxMkG0kTXWyRzPsEKlEv1LQG%2F9wRWkP1p%2B4mzxCVm1JSHCaQSth%2Fhx97EAcVxGdGdHN9hoQsw67KIygY6pgFFcTSC%2BUcfkZ3e%2FwujSH9FBVahWr25Gmzt%2BOeBLndxFmB6g3ON1ELhvlSneTa2LmFDruFgETznSa18GEN%2BkKLPyshHbupUAvpWDiPxgnJRdQ96vlhlSL6pCiStHqAFBghU9JE%2BtFVC4CtZZup3ZQHAOV1B9BURNYqScb2dfUtBlxDnham9GCNMiyNs%2FFuKBHvXEen5M4lCDBjZRN0mBXA7qsue3vNI&X-Amz-Signature=b6ad2c5cd6658a4ecfe024f3c6e049e518b4265ab109c5f8fb9c864ed6ec9c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

