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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KCIK3ZW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuQ5vVS81e%2FLp7fW3TwmBt%2BCNcoMSVAeN9qF8nJfLWSwIhAMgL%2BTEBDjGJ0v5a4AwP%2F6eLOd573wthSEdjrYLrhyHIKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0Hx2PaF2ejbct1pYq3AOuaWpe57%2FvSp1ikWY9bBK9LXyo6I6CBc5Ckeu4PWY3RUv29cWQhIBHpLU5GSVBZMJKuoiSxt%2FEVEPp%2BrWkGQU%2F1CK4VzDmMd2ug8fLrdHmmiA7Z5niqgGzMCkGMQeW3F6LXIFxT9YZq1XH81SABVWHAO9JSsotZU9n6VlwXdwdxthQFVEDZLha0%2FUeR6K5fSbYeMUkSDU0vgZkximy4JWfgGgf6AJq7A6YFvJ4fJpXPed%2F8I0QgLsFD62%2BB5MnmgMIs8AsKegCpIbVH5b2TepWS1D8a6x9xM1mL8MbANDqX1kop5g3cGlGToTiC8JQWhMn0fLyWRNwmsJ%2BZKjmMQ0HBFC%2F1LnpsOFQLxP2VU1%2BsNlyjoYWJvR53pAjN0sZF1t3VJT5DJoxDN8hZINisS74V9GL6z2MS1snxt0mUl3TmuY1n9MoUt6xDbqbAvPTM4ro9Yvjgp4S6%2FXZ6dhZabZSKPS0RUFeIlilwl1uxnfaUej%2FyjdZFugwhcy46YUdj8n8QnXC4cj6a05mLFA5aQl%2FA6M8nWpy024HTzthi5AO2NdbNy9JYxSKXv7ctbcT6V%2BHeqngv4Qjz8v24FAdSmORmlqFeGJlijKKVRJ9tzmIbb8Qxe2uTtPSPPLi4TCWn4vKBjqkAT2bca64x2h3I29MWFAPnwOgXd7ynLtp8Xp5bWR6z9ZjbseSh9Ny2E%2FSRgzjAF9U7MeBx3xi3uyPSrFDzX0mO0w1vRfEkyq2ftYvlZmPCAW7CVDinOTfjwz6ik%2Fhicr0s0Kg%2BiXq%2Fl1F%2Bh%2FQq4UDQNiXYe1lCAjrLzkne2QdatS%2FA35g2ubPqclOCbrXaWPen%2FccMVwu1DR7gwQSc%2BRqhHzQhW4k&X-Amz-Signature=8b9ae9717a1cc9ac671b1ad6775598b245674b6b7eeda8ec3b92b730b9ecb5ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KCIK3ZW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuQ5vVS81e%2FLp7fW3TwmBt%2BCNcoMSVAeN9qF8nJfLWSwIhAMgL%2BTEBDjGJ0v5a4AwP%2F6eLOd573wthSEdjrYLrhyHIKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0Hx2PaF2ejbct1pYq3AOuaWpe57%2FvSp1ikWY9bBK9LXyo6I6CBc5Ckeu4PWY3RUv29cWQhIBHpLU5GSVBZMJKuoiSxt%2FEVEPp%2BrWkGQU%2F1CK4VzDmMd2ug8fLrdHmmiA7Z5niqgGzMCkGMQeW3F6LXIFxT9YZq1XH81SABVWHAO9JSsotZU9n6VlwXdwdxthQFVEDZLha0%2FUeR6K5fSbYeMUkSDU0vgZkximy4JWfgGgf6AJq7A6YFvJ4fJpXPed%2F8I0QgLsFD62%2BB5MnmgMIs8AsKegCpIbVH5b2TepWS1D8a6x9xM1mL8MbANDqX1kop5g3cGlGToTiC8JQWhMn0fLyWRNwmsJ%2BZKjmMQ0HBFC%2F1LnpsOFQLxP2VU1%2BsNlyjoYWJvR53pAjN0sZF1t3VJT5DJoxDN8hZINisS74V9GL6z2MS1snxt0mUl3TmuY1n9MoUt6xDbqbAvPTM4ro9Yvjgp4S6%2FXZ6dhZabZSKPS0RUFeIlilwl1uxnfaUej%2FyjdZFugwhcy46YUdj8n8QnXC4cj6a05mLFA5aQl%2FA6M8nWpy024HTzthi5AO2NdbNy9JYxSKXv7ctbcT6V%2BHeqngv4Qjz8v24FAdSmORmlqFeGJlijKKVRJ9tzmIbb8Qxe2uTtPSPPLi4TCWn4vKBjqkAT2bca64x2h3I29MWFAPnwOgXd7ynLtp8Xp5bWR6z9ZjbseSh9Ny2E%2FSRgzjAF9U7MeBx3xi3uyPSrFDzX0mO0w1vRfEkyq2ftYvlZmPCAW7CVDinOTfjwz6ik%2Fhicr0s0Kg%2BiXq%2Fl1F%2Bh%2FQq4UDQNiXYe1lCAjrLzkne2QdatS%2FA35g2ubPqclOCbrXaWPen%2FccMVwu1DR7gwQSc%2BRqhHzQhW4k&X-Amz-Signature=9a70b9d166059479b69e4d5782974545bbcf1f4d6b285ead055207b02a587172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

