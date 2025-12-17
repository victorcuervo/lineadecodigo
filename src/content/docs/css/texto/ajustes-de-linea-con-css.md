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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR5JJGEY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDljSpQ9D11ekGUJ9qheY15tTHYdNORQokcBXFTxPIPsgIhAIivhprquFgjeu0rv0cjd9jJ2DnSYZlxDUidToeoVF%2FPKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP1K5BR9ytRoN5fG8q3AMzhuHoy1DdOwrhekc8RbzPzU2lY%2Bprkc9gWaMS1DWZJwerqeILUrZVWNvqXR4uWA7hW22JK0Aw2jWOoqCgO3V92QsmikNRcNqbCJb0JvukoSU0TKcvWlm35lYnR06aokYAsmpQAhhT1fp2FwRr0PS7m163ZcDX6ClZlhfMWASNDxV06Qs7p35eOuxE%2FNeFgDnkqwQVBepSpGrWuzHQZ%2BLkouXKBsV7f34d6iBv3gv3Zjg9NXHvUS5%2BGacf0RzU7lLSvPZSUwZ8qVgeLOBDyEQWREuaGtt2ZjRa2cNT0LYXPJ7ZJw5PXAJNUyo1259xCD%2F%2BlRpeB6E0g6OWxEsgdjYQv0BOgF6L%2FHmHz7fedNCmtiNDxh5xebkCgl0DGATc7VZ3BWUV44z6C6JfDNCQ3tr1iAhyE6dKeXX%2FThnWi532oxJRN%2FhuUeB6Ea7DJwlZ%2BW1hSgsfJw8d9ecqt4AoosMop%2BmkSv%2FAzI42xGEBeW2PMSOYaNwGuYCuqqIC6Ecfrc6EyZSZk1kfWLoCMIMB0vQwiSv%2F92twbq3dqx3l43tPDhm0HEwpEx%2BxeKTugwkcXEiFrj9ySX%2B1sg0j%2BMC6mmW2%2FICfDmYQsML1qj52GIU53VMQQcpF8OTBMjh%2BRTCBoIvKBjqkAWnF4ZBVHfL9zGrNlFrTbsqwHGJETlGsTnQbujBNhN4al5mDfVfgFDLWDrn0BL9rM7VGZkG7jGhqhLNMBg7qHAzi9ffMLdJt7fFq0xR858mNoHdgBDAws4%2BN8zlJ2fM1xVBCvEQxuOLxbqt4OnBzbv%2BhLFyhSalZFjuU5VjSyvAq9CNXFcXQPrSxekhkCb5hhqksBQ%2BCPN3GbxFw%2FPBZG%2B9MR4Lp&X-Amz-Signature=dd28709c108f53586aceae1bbee67c68f63d7b7d360818345a4fd585e859e55a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR5JJGEY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDljSpQ9D11ekGUJ9qheY15tTHYdNORQokcBXFTxPIPsgIhAIivhprquFgjeu0rv0cjd9jJ2DnSYZlxDUidToeoVF%2FPKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP1K5BR9ytRoN5fG8q3AMzhuHoy1DdOwrhekc8RbzPzU2lY%2Bprkc9gWaMS1DWZJwerqeILUrZVWNvqXR4uWA7hW22JK0Aw2jWOoqCgO3V92QsmikNRcNqbCJb0JvukoSU0TKcvWlm35lYnR06aokYAsmpQAhhT1fp2FwRr0PS7m163ZcDX6ClZlhfMWASNDxV06Qs7p35eOuxE%2FNeFgDnkqwQVBepSpGrWuzHQZ%2BLkouXKBsV7f34d6iBv3gv3Zjg9NXHvUS5%2BGacf0RzU7lLSvPZSUwZ8qVgeLOBDyEQWREuaGtt2ZjRa2cNT0LYXPJ7ZJw5PXAJNUyo1259xCD%2F%2BlRpeB6E0g6OWxEsgdjYQv0BOgF6L%2FHmHz7fedNCmtiNDxh5xebkCgl0DGATc7VZ3BWUV44z6C6JfDNCQ3tr1iAhyE6dKeXX%2FThnWi532oxJRN%2FhuUeB6Ea7DJwlZ%2BW1hSgsfJw8d9ecqt4AoosMop%2BmkSv%2FAzI42xGEBeW2PMSOYaNwGuYCuqqIC6Ecfrc6EyZSZk1kfWLoCMIMB0vQwiSv%2F92twbq3dqx3l43tPDhm0HEwpEx%2BxeKTugwkcXEiFrj9ySX%2B1sg0j%2BMC6mmW2%2FICfDmYQsML1qj52GIU53VMQQcpF8OTBMjh%2BRTCBoIvKBjqkAWnF4ZBVHfL9zGrNlFrTbsqwHGJETlGsTnQbujBNhN4al5mDfVfgFDLWDrn0BL9rM7VGZkG7jGhqhLNMBg7qHAzi9ffMLdJt7fFq0xR858mNoHdgBDAws4%2BN8zlJ2fM1xVBCvEQxuOLxbqt4OnBzbv%2BhLFyhSalZFjuU5VjSyvAq9CNXFcXQPrSxekhkCb5hhqksBQ%2BCPN3GbxFw%2FPBZG%2B9MR4Lp&X-Amz-Signature=ae745b1d71f70fce826374adb9aca50987ff24c9f766fd4429d34524a133ff94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

