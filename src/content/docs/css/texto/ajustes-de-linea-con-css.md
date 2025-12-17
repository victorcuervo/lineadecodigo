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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PRCCDF5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLum85iHZ%2FaN2KeDQlVpLUjquhH4J0ugjv6owxrHB8vAiEAlWZupFZl7npws2iFS2xc6DuYl5uFdTIOMRf9b8m%2Bq4oq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBF5123A1oJnTFQCGyrcA%2BRBXt2Pxrt0AeqLft2hVSpyIGeazKattl6y5u1ns4NPVVkBAkXCrA9yNxuLb8oRpvSO3UnhSaKpzaeIcgdUV%2FQjNEWn1ReRKKDriVVdZBkvMnBzrCD5OIRclHk%2FYFYAJwSikntgQFZe73z4986QzKSBDPezsvyj9sLKHI1wS6yIUwb9QE4P%2BR1CYccnHmGFXqnDJpaTfCZpZD5ji2634qnyF6bDlKoC4hfbC55HuaOzucq2o8I6Kd8WhuekatTkKU%2FS7mt2PIdHEIirRqnWrLoyy7La%2Fee%2B1We7QysG%2BHVE1mn4ZHQIG74niW8IoYxjVNXYuS4y19FK20gTCmseL78lCcurrwlVTflhRTMCTq1iDkll1EL5eTjsCptdKcc5Nyyim%2B01Mxb%2B9Y7nOXKd%2FBDe1m%2B1TSqOpLtvOG36gWNqHf%2BE91HMlo17VlZKQZxoRc1SCQ7ckbaXdWxGoN9JhlsAFTTj7njmw7kroU8nLoYHgW43Wocuy5vMAJHDN%2BUtqkzJ082x2ud8MNfZTp5WGSpsivoOGZrWxCVS8odz5fmCoXxbN9j6hwfUF7Jl8eoZgl4PtUXsX8ugDVXUOR2Z0QaDu6SROLgLSPyq%2BDmfE5b2r7qic70VsSCSVuiHMP7QicoGOqUBzrVh5WOhBqZOEzqSESQp567FlC937Zgw5GHzcTZRpqPadsJlCbBtpenlMaGWbwziZhzMNU6gs9bAZtNXGA3bXaQf7SOPTwaiP0Cfv2JblFvBETEPv1sx7cseY1aGhS%2B6aYRFTyf0gJOY1c7Dxv%2FcirDmKcnvPDNTUKYZP8dSV49FCe%2BUg%2FKdEZy9%2F4aSa75SeW%2FP1cUtuUDLY02exZGWxgYKKGmk&X-Amz-Signature=401273b07e8f0ec3e04ef0dac0cd940803132ffaef8a0a8714bcbcdb7d60160e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PRCCDF5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLum85iHZ%2FaN2KeDQlVpLUjquhH4J0ugjv6owxrHB8vAiEAlWZupFZl7npws2iFS2xc6DuYl5uFdTIOMRf9b8m%2Bq4oq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBF5123A1oJnTFQCGyrcA%2BRBXt2Pxrt0AeqLft2hVSpyIGeazKattl6y5u1ns4NPVVkBAkXCrA9yNxuLb8oRpvSO3UnhSaKpzaeIcgdUV%2FQjNEWn1ReRKKDriVVdZBkvMnBzrCD5OIRclHk%2FYFYAJwSikntgQFZe73z4986QzKSBDPezsvyj9sLKHI1wS6yIUwb9QE4P%2BR1CYccnHmGFXqnDJpaTfCZpZD5ji2634qnyF6bDlKoC4hfbC55HuaOzucq2o8I6Kd8WhuekatTkKU%2FS7mt2PIdHEIirRqnWrLoyy7La%2Fee%2B1We7QysG%2BHVE1mn4ZHQIG74niW8IoYxjVNXYuS4y19FK20gTCmseL78lCcurrwlVTflhRTMCTq1iDkll1EL5eTjsCptdKcc5Nyyim%2B01Mxb%2B9Y7nOXKd%2FBDe1m%2B1TSqOpLtvOG36gWNqHf%2BE91HMlo17VlZKQZxoRc1SCQ7ckbaXdWxGoN9JhlsAFTTj7njmw7kroU8nLoYHgW43Wocuy5vMAJHDN%2BUtqkzJ082x2ud8MNfZTp5WGSpsivoOGZrWxCVS8odz5fmCoXxbN9j6hwfUF7Jl8eoZgl4PtUXsX8ugDVXUOR2Z0QaDu6SROLgLSPyq%2BDmfE5b2r7qic70VsSCSVuiHMP7QicoGOqUBzrVh5WOhBqZOEzqSESQp567FlC937Zgw5GHzcTZRpqPadsJlCbBtpenlMaGWbwziZhzMNU6gs9bAZtNXGA3bXaQf7SOPTwaiP0Cfv2JblFvBETEPv1sx7cseY1aGhS%2B6aYRFTyf0gJOY1c7Dxv%2FcirDmKcnvPDNTUKYZP8dSV49FCe%2BUg%2FKdEZy9%2F4aSa75SeW%2FP1cUtuUDLY02exZGWxgYKKGmk&X-Amz-Signature=9c5c066ca90dc231258711697d35a8e307dc65cb8b872f84b96e6cf843b3a848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

