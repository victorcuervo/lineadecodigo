---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWYYGCM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaRSLOlzcotR8M%2F3faK8hDq5YsSOGopXdh6cXe%2F%2F1zMAiEA2H%2FuvRgof5v0JwRFjvCyE6YrBhOdTakNiAy6SjvVDZgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FcyXm6kTmf3QJkjSrcA09mUJ40s3kmDQwOp%2FGzCDsNMstF7A1Trbqsj%2BekfaNR1OqED5OU3j%2B3wTgEl7uZsmUPxj1oMjBXnZwjkVmYAT9DxMAM5qGDWmHYi%2BDtZL%2FIdeD9KvFbfSypB06N43KfHRPNv%2FAQk1yzA396IVssrMaa3H4WY0TgYKtSJ3Sg%2B%2FO2PgBjnmdHlpXtwPw%2FFbOCWLDaLlS%2BdnsRkP9roj8a3W1LE6Bx0P6IMP51NtxdGbIqZqu33l9y1Kox%2F1qu0DPGqUydl3O31cY9njtH7S2ITTxXn%2BDogXPwhTa2JIrrzzqHeHUlHZYKcUHk2Dm3KJ7xocYpN%2F8MY5NpXAt47YSW%2F0Z41ei4DsMwqxn04Bzr1WWcOF582%2BRrIAOJDtg%2Foq%2BnA0bhIk46OZynnvhqGdEdJExJ7NQXJG9KurKCmqrZu6Fw7HHKU2R27AreOnBIPAR%2FpSQATMZLv3vXxj8H6Pmpjw9ZLdLC1cGGou9T7BV3YJvP2mWvQui905zG%2FAPTU6xHaerN32mb6Zvax4qvXI6xn9WkknG7ATbQ2xFU1Sn%2FnYDDfZjj2qTWt%2B4%2BktsoGW9cnVymZKQBLXTzgjFsLY3XPREXTWEB29%2FLQ%2BKboXftyIfKiCPBehg5YwacxBwLMNLu2ckGOqUBsgg9dGUULbpBoffiivgtD0RtD%2B8gDHY8SCGWR%2BKTfSg2R0JerGNY4GaY02VzlYCw1NtlZZNWKYpOBcxeiVnDJDUEI0%2FWvq9s%2FV6Hmb2iGaQh2PHAESvuCdr25fLV3k%2F6XMUJA6mhXiM0zxxAMQuVeMdPoW9PtjKooDsONVsZv0g5%2FxbUOqyj3B82RxcCg%2BMKAm95ZseXWLUQcr459ekob77mfGc2&X-Amz-Signature=39e417c6260a9b7d6a243b236c2fd994453e2aaf46c24d9f279d36dd624eee1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWYYGCM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaRSLOlzcotR8M%2F3faK8hDq5YsSOGopXdh6cXe%2F%2F1zMAiEA2H%2FuvRgof5v0JwRFjvCyE6YrBhOdTakNiAy6SjvVDZgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FcyXm6kTmf3QJkjSrcA09mUJ40s3kmDQwOp%2FGzCDsNMstF7A1Trbqsj%2BekfaNR1OqED5OU3j%2B3wTgEl7uZsmUPxj1oMjBXnZwjkVmYAT9DxMAM5qGDWmHYi%2BDtZL%2FIdeD9KvFbfSypB06N43KfHRPNv%2FAQk1yzA396IVssrMaa3H4WY0TgYKtSJ3Sg%2B%2FO2PgBjnmdHlpXtwPw%2FFbOCWLDaLlS%2BdnsRkP9roj8a3W1LE6Bx0P6IMP51NtxdGbIqZqu33l9y1Kox%2F1qu0DPGqUydl3O31cY9njtH7S2ITTxXn%2BDogXPwhTa2JIrrzzqHeHUlHZYKcUHk2Dm3KJ7xocYpN%2F8MY5NpXAt47YSW%2F0Z41ei4DsMwqxn04Bzr1WWcOF582%2BRrIAOJDtg%2Foq%2BnA0bhIk46OZynnvhqGdEdJExJ7NQXJG9KurKCmqrZu6Fw7HHKU2R27AreOnBIPAR%2FpSQATMZLv3vXxj8H6Pmpjw9ZLdLC1cGGou9T7BV3YJvP2mWvQui905zG%2FAPTU6xHaerN32mb6Zvax4qvXI6xn9WkknG7ATbQ2xFU1Sn%2FnYDDfZjj2qTWt%2B4%2BktsoGW9cnVymZKQBLXTzgjFsLY3XPREXTWEB29%2FLQ%2BKboXftyIfKiCPBehg5YwacxBwLMNLu2ckGOqUBsgg9dGUULbpBoffiivgtD0RtD%2B8gDHY8SCGWR%2BKTfSg2R0JerGNY4GaY02VzlYCw1NtlZZNWKYpOBcxeiVnDJDUEI0%2FWvq9s%2FV6Hmb2iGaQh2PHAESvuCdr25fLV3k%2F6XMUJA6mhXiM0zxxAMQuVeMdPoW9PtjKooDsONVsZv0g5%2FxbUOqyj3B82RxcCg%2BMKAm95ZseXWLUQcr459ekob77mfGc2&X-Amz-Signature=5318d363bc3e336aeca45b0109cb9ea539e901edde24e60ea2abcde40fdf4dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

