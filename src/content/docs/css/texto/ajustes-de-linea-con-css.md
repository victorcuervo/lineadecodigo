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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TMOZBEX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeyxg%2B%2BKpAaImRFCX8d3rfQjiZudKDu1q48ZsYtsTHzgIhAKFOIgRAx6Cj47U2pDDk1W1zhxB%2BpGU4%2B7lkejtTSi5pKv8DCHYQABoMNjM3NDIzMTgzODA1Igy9WVnz2BJ9bshzFSgq3AOtu6sOpe4%2Bp0jFYV2QbgP6c6tLUyVumqRueFs1AG0SDHObw674sYIfAPREonn9Sr%2FccOK3BmKaC485D0qbdadMT2cQtPfhoALpTUvVdJ2hpXdnsp8Wxml7cJM6Kubzf7v%2BDXPeIt9Zw9X6y%2BMQ157qKYmsyBi0eqWoBptnGW3%2B%2FtRep3CTpVOg%2FhFflUBkQ4DdW3O7%2B9bYt5TYZh2WxVESDDskRmmoKSEOwExWEnoahB8O1YSbe1pZlfm9qE%2BbsgUQPJlcarskmaT%2FiN3lrzkWhwubiGLHq%2F3JhIWNq3PonzVh%2Bdmb8DE6F5HuCARj3%2F2ziPT%2BF1m0fP%2Fy%2Ba1zsmgNwPuHTLnHQnhGQVLGM547Hqqrg7I0sK5hOVn%2BgGSJFF64LrrtQRUlGQfJNvwSrBr%2FQ7ZFRHPUtHHML%2BON8n%2Fc3GkcFPv2h64nOGWN6ApHKtbjC1lj3lCu2vlmdnGdoa56mEgJO9Uz8O9gR80MstqMspWxbVR6uQb1oAVgfwnyxzuyocJulrZ%2BNepcFVB9f0CR1huPdyRDQAfiswTze7gvDZoZ55rmyIwUJibR%2BGum%2BsWi%2FCpewTVrY4m%2FluEePtwVnBBot9itcmrUggP%2FQ2RdESJYN3z9aT9NkjjLBzDs6YjKBjqkAUek5rrs%2B4oKej8EUfJrpQt7Ia1eIa0OzffV77hTT1RLstQ0dASk61hKmsd9%2B6Y7URGTXkux%2BK1DZq7XgNkGczYywv1Vmeveyz9rz9TCVyoc%2FivIcgVbXBTes3Sh7QM7Z7kk%2BBrFVF1%2FwPDx4atyPKKjRGUb5O5Iytgj%2Fwfcx4LTOHAr0wa1rG%2F0RqiyFyQDREAP6Y3JDLmnK5xINkgtmIsy%2FdXm&X-Amz-Signature=ea9a7a50ee63d1ca68247fd2e4e86286c76168b543c8b16c254ecab0b43caa41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TMOZBEX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeyxg%2B%2BKpAaImRFCX8d3rfQjiZudKDu1q48ZsYtsTHzgIhAKFOIgRAx6Cj47U2pDDk1W1zhxB%2BpGU4%2B7lkejtTSi5pKv8DCHYQABoMNjM3NDIzMTgzODA1Igy9WVnz2BJ9bshzFSgq3AOtu6sOpe4%2Bp0jFYV2QbgP6c6tLUyVumqRueFs1AG0SDHObw674sYIfAPREonn9Sr%2FccOK3BmKaC485D0qbdadMT2cQtPfhoALpTUvVdJ2hpXdnsp8Wxml7cJM6Kubzf7v%2BDXPeIt9Zw9X6y%2BMQ157qKYmsyBi0eqWoBptnGW3%2B%2FtRep3CTpVOg%2FhFflUBkQ4DdW3O7%2B9bYt5TYZh2WxVESDDskRmmoKSEOwExWEnoahB8O1YSbe1pZlfm9qE%2BbsgUQPJlcarskmaT%2FiN3lrzkWhwubiGLHq%2F3JhIWNq3PonzVh%2Bdmb8DE6F5HuCARj3%2F2ziPT%2BF1m0fP%2Fy%2Ba1zsmgNwPuHTLnHQnhGQVLGM547Hqqrg7I0sK5hOVn%2BgGSJFF64LrrtQRUlGQfJNvwSrBr%2FQ7ZFRHPUtHHML%2BON8n%2Fc3GkcFPv2h64nOGWN6ApHKtbjC1lj3lCu2vlmdnGdoa56mEgJO9Uz8O9gR80MstqMspWxbVR6uQb1oAVgfwnyxzuyocJulrZ%2BNepcFVB9f0CR1huPdyRDQAfiswTze7gvDZoZ55rmyIwUJibR%2BGum%2BsWi%2FCpewTVrY4m%2FluEePtwVnBBot9itcmrUggP%2FQ2RdESJYN3z9aT9NkjjLBzDs6YjKBjqkAUek5rrs%2B4oKej8EUfJrpQt7Ia1eIa0OzffV77hTT1RLstQ0dASk61hKmsd9%2B6Y7URGTXkux%2BK1DZq7XgNkGczYywv1Vmeveyz9rz9TCVyoc%2FivIcgVbXBTes3Sh7QM7Z7kk%2BBrFVF1%2FwPDx4atyPKKjRGUb5O5Iytgj%2Fwfcx4LTOHAr0wa1rG%2F0RqiyFyQDREAP6Y3JDLmnK5xINkgtmIsy%2FdXm&X-Amz-Signature=4a6ab8380da7aebdc6fd6ad44ae18fe623569197960c8240d1443be17ba6c420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

