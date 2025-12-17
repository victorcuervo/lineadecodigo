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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BS4IP6M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzZBIOzwaLb8mQBGqkfza%2FypPeGxCKumETis%2BbLZpCmAiA9Qid3uCQlOgyHYjNwkO%2B578%2F%2BTTXUbF2NOT1JkKsEUCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3an9Ty%2FZxn9O57VJKtwDVIAIf%2B037BTO%2FZcunKEAaT0fF%2FXwvyvgHiCg6M%2BKJVG%2BDECThoVF%2BYI1UFkPGBudRks8C0K48124BAq56lALVaQrqm5c1XZei3mKcl0lFa7cw1dN41%2FEzUH1I95YiuCg%2BM06kNdrOtq9JxH%2BCdI7h2pVKrvwPjFtRLFFbNwRiYhXDDtFap%2FvTk2P2ZbjFuLKau5ER6zKhc%2BblwrjF6pPftgtqaJpaTb19BYXO9eJBY2c51xU5b5ancJuX6RnJiU6O%2F6Dct2hzZtP%2FPejNEAygdnYwA5VRlFUKU5fmvR5dyBWkPGPdMxS0mx3m3pPk%2FSjXo%2F65acLsYTbV%2BMkpuKtgIiId3yXc%2BrFIxuzXU4ffeJd2MSdon7l03rJGPdEonmiDkiHq9axUZY99LFegRqKVntRzYZ2HJ1Jc37htA7rzajDkqp3iLMin2XHE2oyx2AHw8uyPRbo3nJzj21yIeLj1A%2FbFeHLG4nNaYTIk%2Fiv9keXaix59EF2X%2BXo3RxII9QByqwbUPURClPJAWJAzBedbiGBk14%2BGvSpUWl5sYwR%2B6wukuIAIHt8Crnm4eazm6WWPBs2%2Bn0fI%2FkzfGdCdfJtOfGYug2SjVaUzsJsr%2B6%2BVHr9V9ZANbVpBqpBsoww3p%2BLygY6pgFXhDXdb71RdXs1IxQQg3F1XJGYO4V8EiqrRJA7uOxisk4GNIr4aLf1GyaIQx9nG0weSUaGpZ2NPrMqlJvyx294j0kKeI1BE5LOoSxT5LQ4CHT3yPNPWLe9VUoSUPM2BJbS1F1d%2FUE0sPDCup2NSo9ZL0eOEoMDgrn3MbGisBu8hOECrqu982YjnH2loYf3g9JQ9BCI36hOmoryt7S%2Fb3h4FIX3gWPC&X-Amz-Signature=c73bb05c52067225a4884f5727280cb6e5429aa6b1fde9a7295d916d9ba4e549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BS4IP6M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzZBIOzwaLb8mQBGqkfza%2FypPeGxCKumETis%2BbLZpCmAiA9Qid3uCQlOgyHYjNwkO%2B578%2F%2BTTXUbF2NOT1JkKsEUCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3an9Ty%2FZxn9O57VJKtwDVIAIf%2B037BTO%2FZcunKEAaT0fF%2FXwvyvgHiCg6M%2BKJVG%2BDECThoVF%2BYI1UFkPGBudRks8C0K48124BAq56lALVaQrqm5c1XZei3mKcl0lFa7cw1dN41%2FEzUH1I95YiuCg%2BM06kNdrOtq9JxH%2BCdI7h2pVKrvwPjFtRLFFbNwRiYhXDDtFap%2FvTk2P2ZbjFuLKau5ER6zKhc%2BblwrjF6pPftgtqaJpaTb19BYXO9eJBY2c51xU5b5ancJuX6RnJiU6O%2F6Dct2hzZtP%2FPejNEAygdnYwA5VRlFUKU5fmvR5dyBWkPGPdMxS0mx3m3pPk%2FSjXo%2F65acLsYTbV%2BMkpuKtgIiId3yXc%2BrFIxuzXU4ffeJd2MSdon7l03rJGPdEonmiDkiHq9axUZY99LFegRqKVntRzYZ2HJ1Jc37htA7rzajDkqp3iLMin2XHE2oyx2AHw8uyPRbo3nJzj21yIeLj1A%2FbFeHLG4nNaYTIk%2Fiv9keXaix59EF2X%2BXo3RxII9QByqwbUPURClPJAWJAzBedbiGBk14%2BGvSpUWl5sYwR%2B6wukuIAIHt8Crnm4eazm6WWPBs2%2Bn0fI%2FkzfGdCdfJtOfGYug2SjVaUzsJsr%2B6%2BVHr9V9ZANbVpBqpBsoww3p%2BLygY6pgFXhDXdb71RdXs1IxQQg3F1XJGYO4V8EiqrRJA7uOxisk4GNIr4aLf1GyaIQx9nG0weSUaGpZ2NPrMqlJvyx294j0kKeI1BE5LOoSxT5LQ4CHT3yPNPWLe9VUoSUPM2BJbS1F1d%2FUE0sPDCup2NSo9ZL0eOEoMDgrn3MbGisBu8hOECrqu982YjnH2loYf3g9JQ9BCI36hOmoryt7S%2Fb3h4FIX3gWPC&X-Amz-Signature=b396e4eb71cd45be7ed190883ed153423a615169e10b82473339e7452e6243db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

